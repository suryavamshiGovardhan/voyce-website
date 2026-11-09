import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X, Sparkles } from "lucide-react";

const STORAGE_KEY = "voyce_invisible_inheritance_seen_v1";

export default function InvisibleInheritancePopup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (localStorage.getItem(STORAGE_KEY)) return;
    const t = setTimeout(() => setOpen(true), 1500);
    return () => clearTimeout(t);
  }, []);

  const dismiss = () => {
    setOpen(false);
    try { localStorage.setItem(STORAGE_KEY, "1"); } catch { /* ignore */ }
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          role="dialog"
          aria-labelledby="invisible-inheritance-title"
          initial={{ opacity: 0, y: 24, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.96 }}
          transition={{ type: "spring", damping: 22, stiffness: 240 }}
          className="fixed z-50 bottom-4 right-4 left-4 sm:left-auto sm:bottom-6 sm:right-6 max-w-sm"
        >
          <div className="ii-gradient-border">
            <div className="relative p-5">
              <button
                onClick={dismiss}
                aria-label="Dismiss notification"
                className="absolute top-3 right-3 text-muted-foreground hover:text-foreground transition"
              >
                <X className="h-4 w-4" />
              </button>

              <div className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-7 w-7 items-center justify-center rounded-full bg-primary/15 text-primary shrink-0 ii-node-glow">
                  <Sparkles className="h-3.5 w-3.5" />
                </span>
                <div className="pr-4">
                  <p className="ii-eyebrow mb-1">NEW · A VOYCE INITIATIVE</p>
                  <h3
                    id="invisible-inheritance-title"
                    className="ii-display text-xl mb-1.5 leading-tight"
                  >
                    <span className="ii-text-gradient">The Invisible Inheritance</span>
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed mb-4 ii-serif italic">
                    Society trains us for everything — except marriage, parenting, and emotional responsibility.
                  </p>
                  <div className="flex items-center gap-4 flex-wrap">
                    <Link
                      to="/invisible-inheritance/test"
                      onClick={dismiss}
                      className="text-xs font-medium text-primary underline underline-offset-4 hover:text-primary-foreground/80"
                    >
                      Take the couple test
                    </Link>
                    <Link
                      to="/invisible-inheritance"
                      onClick={dismiss}
                      className="text-xs text-muted-foreground hover:text-foreground underline underline-offset-4"
                    >
                      The vision
                    </Link>
                    <button
                      onClick={dismiss}
                      className="text-xs text-muted-foreground hover:text-foreground ml-auto"
                    >
                      Later
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
