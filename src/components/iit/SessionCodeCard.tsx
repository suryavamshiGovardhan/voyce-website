import { useState } from "react";
import { BASE_PATH } from "@/lib/site";
import { Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Props {
  code: string;
  partnerALink: string;
  partnerBLink: string;
  reportLink: string;
}

export default function SessionCodeCard({ code, partnerALink, partnerBLink, reportLink }: Props) {
  const [copied, setCopied] = useState<string | null>(null);
  const origin = (typeof window !== "undefined" ? window.location.origin : "") + BASE_PATH;

  const copy = (text: string, key: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(key);
      setTimeout(() => setCopied(null), 1500);
    }).catch(() => { /* ignore */ });
  };

  return (
    <div className="ii-gradient-border">
      <div className="p-6 sm:p-10 space-y-7">
        <div className="text-center">
          <p className="ii-eyebrow mb-3">YOUR SESSION CODE</p>
          <p className="ii-display text-5xl sm:text-7xl tracking-[0.35em] ii-text-gradient select-all">
            {code}
          </p>
          <p className="ii-marginalia mt-3">SHARE THIS — IT IS THE THREAD BETWEEN YOU</p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          <LinkRow
            label="Partner A — your link"
            url={`${origin}${partnerALink}`}
            onCopy={() => copy(`${origin}${partnerALink}`, "a")}
            copied={copied === "a"}
          />
          <LinkRow
            label="Partner B — their link"
            url={`${origin}${partnerBLink}`}
            onCopy={() => copy(`${origin}${partnerBLink}`, "b")}
            copied={copied === "b"}
          />
        </div>

        <div className="pt-4 border-t border-white/10">
          <p className="text-xs text-muted-foreground mb-3 italic ii-serif">
            When both of you finish, the shared reflection opens here:
          </p>
          <LinkRow
            label="Shared reflection"
            url={`${origin}${reportLink}`}
            onCopy={() => copy(`${origin}${reportLink}`, "r")}
            copied={copied === "r"}
          />
        </div>
      </div>
    </div>
  );
}

function LinkRow({
  label, url, onCopy, copied,
}: { label: string; url: string; onCopy: () => void; copied: boolean }) {
  return (
    <div className="min-w-0">
      <p className="ii-marginalia mb-2">{label}</p>
      <div className="flex items-center gap-2">
        <code className="flex-1 text-xs bg-card border border-white/10 rounded-md px-3 py-2 truncate font-mono text-foreground/80">
          {url}
        </code>
        <Button size="sm" variant="outline" onClick={onCopy} aria-label={`Copy ${label}`} className="ii-pill">
          {copied ? <Check className="h-4 w-4 text-primary" /> : <Copy className="h-4 w-4" />}
        </Button>
      </div>
    </div>
  );
}
