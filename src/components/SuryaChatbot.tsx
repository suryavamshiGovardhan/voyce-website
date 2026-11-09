import { useState, useRef, useEffect, useCallback } from "react";
import { Brain, X, Send, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

type Message = { role: "user" | "assistant"; content: string };

const FORM_ROUTES = [
  "/login",
  "/signup",
  "/forgot-password",
  "/reset-password",
  "/journal",
  "/workbook",
  "/blog/create",
  "/blog/edit",
  "/contact",
  "/profile",
  "/admin",
  "/invisible-inheritance/test",
];

const WHATSAPP_NUMBER = "9010481175";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=Hi, I'd like to talk about VOYCE`;

// Quick suggestion buttons based on page context
const getQuickSuggestions = (pathname: string): string[] => {
  if (pathname === "/") {
    return ["What is VOYCE?", "Where should I begin?", "Is this therapy?"];
  }
  if (pathname === "/start-here") {
    return ["I feel confused", "I just want to read", "Help for schools"];
  }
  if (pathname === "/stories") {
    return ["Why did this feel relatable?", "What should I do after reading?"];
  }
  if (pathname === "/schools") {
    return ["How does this work?", "Talk to someone"];
  }
  if (pathname.includes("neuroscience") || pathname.includes("adhd") || pathname.includes("dsm")) {
    return ["Explain simply", "Is this for diagnosis?"];
  }
  return ["What can I explore?", "I need help"];
};

const getInitialGreeting = (pathname: string): string => {
  if (pathname === "/") {
    return "Hi, I'm Surya. I can help you understand what VOYCE is and where to start.";
  }
  if (pathname === "/start-here") {
    return "If you feel unsure, you can ask me anything. There's no right or wrong question.";
  }
  if (pathname === "/stories") {
    return "If a story brings up questions or emotions, I can help you reflect.";
  }
  if (pathname === "/schools") {
    return "I can help you understand our schools program. For institutional inquiries, WhatsApp may be better.";
  }
  return "Hi, I'm Surya. How can I help you find your way around VOYCE?";
};

export function SuryaChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  // Other parts of the site can open the guide with: window.dispatchEvent(new Event("voyce:open-guide"))
  useEffect(() => {
    const open = () => setIsOpen(true);
    window.addEventListener("voyce:open-guide", open);
    return () => window.removeEventListener("voyce:open-guide", open);
  }, []);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showWhatsAppPrompt, setShowWhatsAppPrompt] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const location = useLocation();

  // Reset and set initial greeting when chat opens
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([{ role: "assistant", content: getInitialGreeting(location.pathname) }]);
    }
  }, [isOpen, location.pathname]);

  // Scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Focus input when chat opens
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  const streamChat = useCallback(async (userMessage: string) => {
    const userMsg: Message = { role: "user", content: userMessage };
    const updatedMessages = [...messages, userMsg];
    setMessages(updatedMessages);
    setIsLoading(true);
    setInput("");

    try {
      const resp = await fetch(`${import.meta.env.VITE_SUPABASE_URL}/functions/v1/surya-chat`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`,
        },
        body: JSON.stringify({
          messages: updatedMessages.map(m => ({ role: m.role, content: m.content })),
          currentPage: location.pathname,
        }),
      });

      // Check for WhatsApp redirect response
      const contentType = resp.headers.get("content-type");
      if (contentType?.includes("application/json")) {
        const json = await resp.json();
        if (json.needsWhatsApp) {
          setMessages(prev => [...prev, { role: "assistant", content: json.message }]);
          setShowWhatsAppPrompt(true);
          setIsLoading(false);
          return;
        }
        if (json.error) {
          setMessages(prev => [...prev, { role: "assistant", content: json.error }]);
          setIsLoading(false);
          return;
        }
      }

      if (!resp.ok || !resp.body) {
        throw new Error("Failed to connect");
      }

      // Stream the response
      const reader = resp.body.getReader();
      const decoder = new TextDecoder();
      let textBuffer = "";
      let assistantContent = "";

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        
        textBuffer += decoder.decode(value, { stream: true });
        
        let newlineIndex: number;
        while ((newlineIndex = textBuffer.indexOf("\n")) !== -1) {
          let line = textBuffer.slice(0, newlineIndex);
          textBuffer = textBuffer.slice(newlineIndex + 1);
          
          if (line.endsWith("\r")) line = line.slice(0, -1);
          if (line.startsWith(":") || line.trim() === "") continue;
          if (!line.startsWith("data: ")) continue;
          
          const jsonStr = line.slice(6).trim();
          if (jsonStr === "[DONE]") break;
          
          try {
            const parsed = JSON.parse(jsonStr);
            const content = parsed.choices?.[0]?.delta?.content;
            if (content) {
              assistantContent += content;
              setMessages(prev => {
                const last = prev[prev.length - 1];
                if (last?.role === "assistant" && prev.length > 1) {
                  return prev.map((m, i) => 
                    i === prev.length - 1 ? { ...m, content: assistantContent } : m
                  );
                }
                return [...prev, { role: "assistant", content: assistantContent }];
              });
            }
          } catch {
            textBuffer = line + "\n" + textBuffer;
            break;
          }
        }
      }
    } catch (error) {
      console.error("Surya chat error:", error);
      setMessages(prev => [...prev, { 
        role: "assistant", 
        content: "I'm having trouble responding. You can try again or reach out via WhatsApp." 
      }]);
      setShowWhatsAppPrompt(true);
    } finally {
      setIsLoading(false);
    }
  }, [messages, location.pathname]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim() && !isLoading) {
      streamChat(input.trim());
    }
  };

  const handleQuickSuggestion = (suggestion: string) => {
    if (!isLoading) {
      streamChat(suggestion);
    }
  };

  const quickSuggestions = getQuickSuggestions(location.pathname);

  // Never float over forms: hide on form-heavy routes and while typing anywhere.
  const onFormRoute = FORM_ROUTES.some((r) => location.pathname === r || location.pathname.startsWith(`${r}/`));
  const [typing, setTyping] = useState(false);
  useEffect(() => {
    const isField = (el: EventTarget | null) =>
      el instanceof HTMLElement && (el.matches("input, textarea, select, [contenteditable='true']") || el.getAttribute("role") === "combobox");
    const onIn = (e: FocusEvent) => { if (isField(e.target) && !(e.target as HTMLElement).closest("[data-surya-chat]")) setTyping(true); };
    const onOut = () => setTyping(false);
    document.addEventListener("focusin", onIn);
    document.addEventListener("focusout", onOut);
    return () => {
      document.removeEventListener("focusin", onIn);
      document.removeEventListener("focusout", onOut);
    };
  }, []);
  const hideButton = isOpen || onFormRoute || typing;

  return (
    <>
      {/* Floating Button — small icon on phones, raised above the host's bottom-right badge.
          Hidden on form pages and while typing so it never covers fields or submit buttons. */}
      <button
        onClick={() => setIsOpen(true)}
        className={cn(
          "fixed z-40 inline-flex items-center gap-2 rounded-full shadow-lg transition-all duration-300 hover:scale-105",
          "bottom-16 right-3 h-11 w-11 justify-center sm:bottom-24 sm:right-6 sm:h-auto sm:w-auto sm:p-4",
          "bg-primary text-primary-foreground",
          hideButton && "pointer-events-none scale-0 opacity-0"
        )}
        aria-label="Ask Surya, VOYCE's AI guide"
        title="Ask Surya — VOYCE's AI guide"
        aria-hidden={hideButton}
        tabIndex={hideButton ? -1 : 0}
      >
        <Brain className="h-5 w-5 sm:h-6 sm:w-6" aria-hidden="true" />
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div data-surya-chat className="fixed bottom-6 right-6 z-50 w-[360px] max-w-[calc(100vw-3rem)] h-[500px] max-h-[calc(100vh-6rem)] bg-card rounded-2xl shadow-2xl border border-border flex flex-col overflow-hidden animate-in slide-in-from-bottom-4 duration-300">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-border bg-muted/50">
            <div className="flex items-center gap-2">
              <div className="p-1.5 rounded-full bg-primary/10">
                <Brain className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-medium text-foreground text-sm">Surya</h3>
                <p className="text-xs text-muted-foreground">VOYCE AI guide · not a person or a therapist</p>
              </div>
            </div>
            <button
              onClick={() => {
                setIsOpen(false);
                setMessages([]);
                setShowWhatsAppPrompt(false);
              }}
              className="p-1.5 rounded-full hover:bg-muted transition-colors"
              aria-label="Close chat"
            >
              <X className="w-5 h-5 text-muted-foreground" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={cn(
                  "max-w-[85%] p-3 rounded-2xl text-sm leading-relaxed",
                  msg.role === "user"
                    ? "ml-auto bg-primary text-primary-foreground rounded-br-md"
                    : "bg-muted text-foreground rounded-bl-md"
                )}
              >
                {msg.content}
              </div>
            ))}

            {/* Quick Suggestions - only show if no user messages yet */}
            {messages.length === 1 && messages[0].role === "assistant" && (
              <div className="flex flex-wrap gap-2">
                {quickSuggestions.map((suggestion, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleQuickSuggestion(suggestion)}
                    className="px-3 py-1.5 text-xs bg-muted hover:bg-muted/80 text-foreground rounded-full border border-border transition-colors"
                    disabled={isLoading}
                  >
                    {suggestion}
                  </button>
                ))}
              </div>
            )}

            {/* WhatsApp Prompt */}
            {showWhatsAppPrompt && (
              <div className="p-3 bg-green-500/10 border border-green-500/20 rounded-xl">
                <p className="text-sm text-foreground mb-2">
                  You can talk to a human via WhatsApp if you'd like.
                </p>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white text-sm rounded-full transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  Talk on WhatsApp
                </a>
              </div>
            )}

            {isLoading && (
              <div className="flex gap-1 px-3 py-2 bg-muted rounded-2xl rounded-bl-md w-fit">
                <span className="w-2 h-2 bg-muted-foreground/50 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                <span className="w-2 h-2 bg-muted-foreground/50 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                <span className="w-2 h-2 bg-muted-foreground/50 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Footer Disclaimer */}
          <div className="px-4 py-1.5 text-center border-t border-border bg-muted/30">
            <p className="text-[10px] text-muted-foreground">
              Surya is an AI guide, not a therapist or doctor.
            </p>
          </div>

          {/* Input */}
          <form onSubmit={handleSubmit} className="p-3 border-t border-border bg-background">
            <div className="flex gap-2">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask Surya..."
                className="flex-1 px-4 py-2 text-sm bg-muted rounded-full border-0 focus:outline-none focus:ring-2 focus:ring-primary/50 placeholder:text-muted-foreground"
                disabled={isLoading}
              />
              <Button
                type="submit"
                size="icon"
                className="rounded-full shrink-0"
                disabled={!input.trim() || isLoading}
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </form>
        </div>
      )}
    </>
  );
}
