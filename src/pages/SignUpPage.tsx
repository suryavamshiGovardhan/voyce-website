import { useState, type FormEvent } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Check, ChevronDown, Lock } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import PageShell from "@/components/site/PageShell";
import { Eyebrow } from "@/components/site/primitives";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";

type Age = "" | "adult" | "teen" | "child";

const PASSWORD_RULES = [
  { id: "len", label: "At least 8 characters", test: (p: string) => p.length >= 8 },
  { id: "letter", label: "At least one letter", test: (p: string) => /[A-Za-z]/.test(p) },
  { id: "number", label: "At least one number", test: (p: string) => /\d/.test(p) },
];

export default function SignUpPage() {
  const { signUp, loading } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [age, setAge] = useState<Age>("");
  const [parentAware, setParentAware] = useState(false);
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  const [showMore, setShowMore] = useState(false);
  const [fullName, setFullName] = useState("");
  const [mobile, setMobile] = useState("");
  const [stateName, setStateName] = useState("");
  const [district, setDistrict] = useState("");
  const [errors, setErrors] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [created, setCreated] = useState(false);

  const indianStates = [
    "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
    "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka",
    "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram",
    "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu",
    "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal"
  ];

  const rulesOk = PASSWORD_RULES.every((r) => r.test(password));

  const validate = (): string[] => {
    const list: string[] = [];
    if (!/^\S+@\S+\.\S+$/.test(email.trim())) list.push("Enter a valid email address.");
    if (!rulesOk) list.push("Your password doesn't meet all the rules yet.");
    if (password !== confirmPassword) list.push("The two passwords don't match.");
    if (!age) list.push("Tell us your age range.");
    if (age === "child") list.push("VOYCE accounts are for ages 13 and up. You can still explore everything without an account.");
    if (age === "teen" && !parentAware) list.push("Please confirm a parent or guardian knows about and agrees to this account.");
    if (!agreeToTerms) list.push("Please agree to the Terms of Use and Privacy Policy.");
    return list;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const list = validate();
    setErrors(list);
    if (list.length) return;

    setIsSubmitting(true);
    try {
      const { error } = await signUp(
        email.trim(),
        password,
        fullName.trim(),
        mobile.trim() || undefined,
        age === "teen" ? "13-17 (Student)" : "18+",
        stateName || undefined,
        district.trim() || undefined,
      );
      if (error) {
        setErrors([(error as { message?: string }).message || "We couldn't create your account. Please try again."]);
      } else {
        setCreated(true);
      }
    } catch {
      setErrors(["Something went wrong. Please try again in a moment."]);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (loading) {
    return (
      <PageShell title="Create a free account" description="Save private reflections on VOYCE." canonical="/signup" noindex>
        <div className="py-24 text-center text-muted-foreground">Loading…</div>
      </PageShell>
    );
  }

  return (
    <PageShell
      title="Create a free account"
      description="Save private reflections and see your own patterns over time. Optional — you can explore VOYCE without an account."
      canonical="/signup"
      noindex
    >
      <div className="mx-auto w-full max-w-md px-5 py-14 sm:py-20">
        <Eyebrow>Optional</Eyebrow>
        <h1 className="font-display text-3xl leading-tight tracking-tight sm:text-4xl">Create a free account</h1>
        <p className="mt-3 text-base leading-relaxed text-muted-foreground">
          Only needed if you want to save private journal entries and see your own patterns.
        </p>

        <div className="mt-5 rounded-2xl border border-primary/25 bg-primary/5 p-4 text-sm leading-relaxed">
          Just looking around?{" "}
          <Link to="/start-here" className="font-medium text-primary underline-offset-4 hover:underline">
            Start here without an account
          </Link>{" "}
          — read stories, reflect and try practices. Nothing is saved.
        </div>

        {created ? (
          <div className="mt-8 rounded-2xl border border-border bg-card p-6" role="status" aria-live="polite">
            <p className="font-display text-2xl tracking-tight">Check your email</p>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              We sent a confirmation link to <strong>{email}</strong>. Open it, then sign in.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Button asChild className="rounded-full">
                <Link to="/login">Go to sign in</Link>
              </Button>
              <Button asChild variant="outline" className="rounded-full">
                <Link to="/start-here">Explore meanwhile</Link>
              </Button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate className="mt-8 space-y-6">
            {errors.length > 0 && (
              <div role="alert" className="rounded-2xl border border-destructive/40 bg-destructive/5 p-4 text-sm">
                <p className="font-medium text-destructive">Please fix this first:</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-foreground/80">
                  {errors.map((er) => (
                    <li key={er}>{er}</li>
                  ))}
                </ul>
              </div>
            )}

            <div>
              <Label htmlFor="email">Email address</Label>
              <Input id="email" type="email" autoComplete="email" required value={email} onChange={(e) => setEmail(e.target.value)} className="mt-2 h-11" />
            </div>

            <div>
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                autoComplete="new-password"
                required
                aria-describedby="password-rules"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-2 h-11"
              />
              <ul id="password-rules" className="mt-2 space-y-1 text-xs">
                {PASSWORD_RULES.map((r) => {
                  const ok = r.test(password);
                  return (
                    <li key={r.id} className={cn("flex items-center gap-2", ok ? "text-primary" : "text-muted-foreground")}>
                      <Check className={cn("h-3.5 w-3.5", ok ? "opacity-100" : "opacity-30")} aria-hidden="true" />
                      {r.label}
                      <span className="sr-only">{ok ? "(done)" : "(not yet)"}</span>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div>
              <Label htmlFor="confirmPassword">Confirm password</Label>
              <Input
                id="confirmPassword"
                type="password"
                autoComplete="new-password"
                required
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="mt-2 h-11"
              />
              {confirmPassword && password !== confirmPassword && (
                <p className="mt-2 text-xs text-destructive">The passwords don&rsquo;t match yet.</p>
              )}
            </div>

            <fieldset>
              <legend className="text-sm font-medium">How old are you?</legend>
              <div className="mt-2 grid gap-2">
                {[
                  { v: "adult", l: "18 or older" },
                  { v: "teen", l: "13 to 17" },
                  { v: "child", l: "Under 13" },
                ].map((o) => (
                  <label
                    key={o.v}
                    className={cn(
                      "flex cursor-pointer items-center gap-3 rounded-xl border px-4 py-3 text-sm transition-colors",
                      age === o.v ? "border-primary bg-primary/5" : "border-border",
                    )}
                  >
                    <input
                      type="radio"
                      name="age"
                      value={o.v}
                      checked={age === o.v}
                      onChange={() => setAge(o.v as Age)}
                      className="h-4 w-4 accent-[hsl(var(--primary))]"
                    />
                    {o.l}
                  </label>
                ))}
              </div>
              {age === "teen" && (
                <div className="mt-3 rounded-xl border border-border bg-surface p-4">
                  <p className="text-sm leading-relaxed text-foreground/80">
                    If you&rsquo;re under 18, a parent or guardian should know about and agree to this account.
                  </p>
                  <div className="mt-3 flex items-start gap-3">
                    <Checkbox
                      id="parentAware"
                      checked={parentAware}
                      onCheckedChange={(c) => setParentAware(c === true)}
                      aria-labelledby="parentAware-label"
                      className="mt-0.5"
                    />
                    <Label id="parentAware-label" htmlFor="parentAware" className="text-sm font-normal leading-relaxed">
                      A parent or guardian knows I&rsquo;m creating this account and agrees.
                    </Label>
                  </div>
                </div>
              )}
              {age === "child" && (
                <p className="mt-3 rounded-xl border border-border bg-surface p-4 text-sm leading-relaxed text-foreground/80">
                  VOYCE accounts are for ages 13 and up. You can still{" "}
                  <Link to="/start-here" className="text-primary underline-offset-4 hover:underline">
                    explore without an account
                  </Link>
                  , and it&rsquo;s a good idea to explore with a parent or teacher.
                </p>
              )}
            </fieldset>

            <div>
              <button
                type="button"
                onClick={() => setShowMore((v) => !v)}
                aria-expanded={showMore}
                aria-controls="more-fields"
                className="flex w-full items-center justify-between rounded-xl border border-border px-4 py-3 text-left text-sm"
              >
                <span>
                  A little more about you <span className="text-muted-foreground">(optional — you can skip this)</span>
                </span>
                <ChevronDown className={cn("h-4 w-4 transition-transform", showMore && "rotate-180")} aria-hidden="true" />
              </button>
              {showMore && (
                <div id="more-fields" className="mt-4 space-y-5">
                  <div>
                    <Label htmlFor="fullName">First name or nickname</Label>
                    <Input id="fullName" autoComplete="given-name" value={fullName} onChange={(e) => setFullName(e.target.value)} className="mt-2 h-11" />
                  </div>
                  <div>
                    <Label htmlFor="state">State</Label>
                    <Select value={stateName} onValueChange={setStateName}>
                      <SelectTrigger id="state" className="mt-2 h-11">
                        <SelectValue placeholder="Select your state" />
                      </SelectTrigger>
                      <SelectContent>
                        {indianStates.map((st) => (
                          <SelectItem key={st} value={st}>
                            {st}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="district">District</Label>
                    <Input id="district" value={district} onChange={(e) => setDistrict(e.target.value)} className="mt-2 h-11" />
                  </div>
                  {age === "adult" && (
                    <div>
                      <Label htmlFor="mobile">Mobile number</Label>
                      <Input
                        id="mobile"
                        type="tel"
                        autoComplete="tel"
                        placeholder="+91 XXXXX XXXXX"
                        value={mobile}
                        onChange={(e) => setMobile(e.target.value)}
                        className="mt-2 h-11"
                      />
                    </div>
                  )}
                </div>
              )}
            </div>

            <div className="flex items-start gap-3">
              <Checkbox
                id="agreeToTerms"
                checked={agreeToTerms}
                onCheckedChange={(c) => setAgreeToTerms(c === true)}
                aria-labelledby="agreeToTerms-label"
                className="mt-0.5"
              />
              <Label id="agreeToTerms-label" htmlFor="agreeToTerms" className="text-sm font-normal leading-relaxed">
                I agree to VOYCE&rsquo;s{" "}
                <Link to="/terms-of-use" className="text-primary hover:underline">
                  Terms of Use
                </Link>{" "}
                and{" "}
                <Link to="/privacy" className="text-primary hover:underline">
                  Privacy Policy
                </Link>
                .
              </Label>
            </div>

            <Button type="submit" className="h-12 w-full rounded-full text-base" disabled={isSubmitting || age === "child"}>
              {isSubmitting ? "Creating your account…" : "Create free account"}
              {!isSubmitting && <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />}
            </Button>

            <p className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
              <Lock className="h-3.5 w-3.5" aria-hidden="true" />
              Your journal stays private. You can delete your account any time.
            </p>

            <p className="text-center text-sm text-muted-foreground">
              Already have an account?{" "}
              <Link to="/login" className="text-primary hover:underline">
                Sign in
              </Link>
            </p>
          </form>
        )}
      </div>
    </PageShell>
  );
}
