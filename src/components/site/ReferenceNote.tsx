import { Link } from "react-router-dom";
import { Info } from "lucide-react";

/**
 * Shown on clinical reference pages (DSM-5, ICD-9, diagnostics). These are study
 * material for adults and professionals — not student self-tests — and VOYCE
 * itself never diagnoses.
 */
export default function ReferenceNote() {
  return (
    <div role="note" className="border-b border-border bg-surface">
      <div className="mx-auto flex max-w-6xl items-start gap-3 px-5 py-3 text-sm text-foreground/80 sm:px-8">
        <Info className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
        <p>
          <strong className="font-medium">Professional reference.</strong> This page is study material for adults,
          counsellors and clinicians — not a self-test. VOYCE does not diagnose. If something here worries you, talk to
          a trusted adult or a qualified professional, or{" "}
          <Link to="/start-here" className="text-primary underline-offset-4 hover:underline">
            start with a gentle reflection
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
