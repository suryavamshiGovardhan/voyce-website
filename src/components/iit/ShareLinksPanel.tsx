import { useState } from "react";
import { BASE_PATH } from "@/lib/site";
import { Copy, Check, Share2, Link2 } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Props {
  code: string;
  partnerALink: string;
  partnerBLink: string;
  reportLink: string;
  compact?: boolean;
}

export default function ShareLinksPanel({
  code, partnerALink, partnerBLink, reportLink, compact,
}: Props) {
  const [copied, setCopied] = useState<string | null>(null);
  const origin = (typeof window !== "undefined" ? window.location.origin : "") + BASE_PATH;

  const copy = (text: string, key: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(key);
      setTimeout(() => setCopied(null), 1600);
    }).catch(() => { /* ignore */ });
  };

  const share = async () => {
    const url = `${origin}${reportLink}`;
    const text = `Our Invisible Inheritance reflection — session ${code}`;
    if (typeof navigator !== "undefined" && (navigator as any).share) {
      try {
        await (navigator as any).share({ title: "The Invisible Inheritance", text, url });
        return;
      } catch { /* user cancelled */ }
    }
    copy(url, "share");
  };

  return (
    <div className="ii-glass-card rounded-xl p-5 sm:p-6 space-y-4">
      <div className="flex items-center justify-between gap-3 flex-wrap">
        <div>
          <p className="text-[10px] tracking-[0.4em] text-muted-foreground">SESSION</p>
          <p className="text-2xl sm:text-3xl font-serif tracking-[0.35em] ii-text-gradient">{code}</p>
        </div>
        <Button onClick={share} size="sm" variant="outline" className="ii-pill">
          {copied === "share" ? <Check className="h-4 w-4" /> : <Share2 className="h-4 w-4" />}
          <span>{copied === "share" ? "Link copied" : "Share report"}</span>
        </Button>
      </div>

      {!compact && (
        <div className="grid sm:grid-cols-3 gap-3 pt-2">
          <LinkRow label="Partner A" url={`${origin}${partnerALink}`} onCopy={() => copy(`${origin}${partnerALink}`, "a")} copied={copied === "a"} />
          <LinkRow label="Partner B" url={`${origin}${partnerBLink}`} onCopy={() => copy(`${origin}${partnerBLink}`, "b")} copied={copied === "b"} />
          <LinkRow label="Shared report" url={`${origin}${reportLink}`} onCopy={() => copy(`${origin}${reportLink}`, "r")} copied={copied === "r"} />
        </div>
      )}
    </div>
  );
}

function LinkRow({
  label, url, onCopy, copied,
}: { label: string; url: string; onCopy: () => void; copied: boolean }) {
  return (
    <div className="min-w-0">
      <p className="text-[9px] tracking-[0.3em] text-muted-foreground uppercase mb-1.5 flex items-center gap-1.5">
        <Link2 className="h-3 w-3" /> {label}
      </p>
      <button
        onClick={onCopy}
        className="group w-full text-left flex items-center gap-2 rounded-md border border-border/70 bg-background/40 hover:bg-background/70 px-3 py-2 transition"
        aria-label={`Copy ${label} link`}
      >
        <code className="flex-1 text-[11px] font-mono truncate text-foreground/80">{url}</code>
        {copied ? (
          <Check className="h-3.5 w-3.5 text-emerald-500 shrink-0" />
        ) : (
          <Copy className="h-3.5 w-3.5 text-muted-foreground group-hover:text-foreground shrink-0" />
        )}
      </button>
    </div>
  );
}
