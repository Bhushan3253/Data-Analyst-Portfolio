import { useState, type FormEvent } from "react";
import { Code2, Link2, Mail, Send, ShieldAlert, CheckCircle2 } from "lucide-react";
import SectionHeading from "./SectionHeading";
import SectionWrapper from "./SectionWrapper";
import { contactData, personalInfo } from "../data/portfolioData";

type ContactFormState = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type FieldErrors = Partial<Record<keyof ContactFormState, string>>;

const initialFormState: ContactFormState = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

export default function Contact() {
  const [formState, setFormState] = useState<ContactFormState>(initialFormState);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<{
    type: "idle" | "success" | "error";
    message: string;
  }>({ type: "idle", message: "" });

  const updateField = (
    field: keyof ContactFormState,
    value: string,
  ) => {
    setFormState((current) => ({ ...current, [field]: value }));
    if (errors[field]) {
      setErrors((current) => ({ ...current, [field]: undefined }));
    }
  };

  const validate = () => {
    const nextErrors: FieldErrors = {};

    if (!formState.name.trim()) nextErrors.name = "Enter your name.";
    if (!formState.email.trim()) {
      nextErrors.email = "Enter your email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email)) {
      nextErrors.email = "Enter a valid email address.";
    }
    if (!formState.subject.trim()) nextErrors.subject = "Add a subject.";
    if (!formState.message.trim()) nextErrors.message = "Write your message.";
    return nextErrors;
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const nextErrors = validate();
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setStatus({
        type: "error",
        message: "Please fix the highlighted fields before continuing.",
      });
      return;
    }

    setStatus({
      type: "success",
      message:
        "Validation passed locally. No backend is connected yet, so the message was not sent.",
    });
  };

  return (
    <SectionWrapper id="contact" darkBg>
      <SectionHeading
        label="Contact"
        title="Let’s Connect"
        subtitle="Reach out for entry-level roles, internships, or project discussions."
      />

      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <aside className="space-y-6">
          <div className="rounded-3xl border border-white/5 bg-navy-800/30 p-6 shadow-lg shadow-black/10">
            <p className="text-sm leading-relaxed text-slate-300">
              {contactData.intro}
            </p>

            <div className="mt-5 space-y-3">
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 rounded-2xl border border-white/5 bg-white/5 px-4 py-3 text-sm text-slate-200 transition-colors hover:border-accent-500/25 hover:text-white"
              >
                <Link2 className="h-4 w-4 text-accent-400" />
                LinkedIn profile
              </a>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 rounded-2xl border border-white/5 bg-white/5 px-4 py-3 text-sm text-slate-200 transition-colors hover:border-accent-500/25 hover:text-white"
              >
                <Code2 className="h-4 w-4 text-accent-400" />
                GitHub profile
              </a>
              <a
                href={`mailto:${contactData.emailPlaceholder}`}
                className="flex items-center gap-3 rounded-2xl border border-white/5 bg-white/5 px-4 py-3 text-sm text-slate-200 transition-colors hover:border-accent-500/25 hover:text-white"
              >
                <Mail className="h-4 w-4 text-accent-400" />
                {contactData.emailPlaceholder}
              </a>
            </div>
          </div>

          <div className="rounded-3xl border border-white/5 bg-navy-800/30 p-6 shadow-lg shadow-black/10">
            <h3 className="text-base font-semibold text-white">
              What I can help with
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-300">
              <li className="flex gap-2">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                Data cleaning and validation workflows.
              </li>
              <li className="flex gap-2">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                SQL analysis, joins, and reporting queries.
              </li>
              <li className="flex gap-2">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                Dashboards and business-focused visual storytelling.
              </li>
            </ul>
            <p className="mt-4 text-xs leading-relaxed text-slate-500">
              {contactData.formNote}
            </p>
          </div>
        </aside>

        <form
          className="rounded-3xl border border-white/5 bg-navy-800/30 p-6 shadow-lg shadow-black/10 lg:p-8"
          onSubmit={handleSubmit}
          noValidate
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="space-y-2 text-sm text-slate-300">
              <span>Name</span>
              <input
                type="text"
                value={formState.name}
                onChange={(event) => updateField("name", event.target.value)}
                className="w-full rounded-2xl border border-white/10 bg-navy-900/60 px-4 py-3 text-white outline-none transition-colors placeholder:text-slate-600 focus:border-accent-500/40"
                placeholder="Your name"
              />
              {errors.name && <span className="text-xs text-rose-300">{errors.name}</span>}
            </label>

            <label className="space-y-2 text-sm text-slate-300">
              <span>Email</span>
              <input
                type="email"
                value={formState.email}
                onChange={(event) => updateField("email", event.target.value)}
                className="w-full rounded-2xl border border-white/10 bg-navy-900/60 px-4 py-3 text-white outline-none transition-colors placeholder:text-slate-600 focus:border-accent-500/40"
                placeholder="you@example.com"
              />
              {errors.email && <span className="text-xs text-rose-300">{errors.email}</span>}
            </label>
          </div>

          <label className="mt-4 block space-y-2 text-sm text-slate-300">
            <span>Subject</span>
            <input
              type="text"
              value={formState.subject}
              onChange={(event) => updateField("subject", event.target.value)}
              className="w-full rounded-2xl border border-white/10 bg-navy-900/60 px-4 py-3 text-white outline-none transition-colors placeholder:text-slate-600 focus:border-accent-500/40"
              placeholder="Opportunity, internship, or project discussion"
            />
            {errors.subject && <span className="text-xs text-rose-300">{errors.subject}</span>}
          </label>

          <label className="mt-4 block space-y-2 text-sm text-slate-300">
            <span>Message</span>
            <textarea
              rows={6}
              value={formState.message}
              onChange={(event) => updateField("message", event.target.value)}
              className="w-full rounded-2xl border border-white/10 bg-navy-900/60 px-4 py-3 text-white outline-none transition-colors placeholder:text-slate-600 focus:border-accent-500/40"
              placeholder="Tell me about the role, internship, or project you'd like to discuss."
            />
            {errors.message && <span className="text-xs text-rose-300">{errors.message}</span>}
          </label>

          <div className="mt-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-accent-500 px-5 py-3 text-sm font-semibold text-navy-950 transition-colors hover:bg-accent-400"
            >
              <Send className="h-4 w-4" />
              Send Message
            </button>

            {status.message && (
              <div
                className={`rounded-2xl border px-4 py-3 text-sm ${
                  status.type === "success"
                    ? "border-emerald-500/20 bg-emerald-500/10 text-emerald-200"
                    : "border-rose-500/20 bg-rose-500/10 text-rose-200"
                }`}
              >
                <div className="flex items-start gap-2">
                  {status.type === "success" ? (
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" />
                  ) : (
                    <ShieldAlert className="mt-0.5 h-4 w-4 shrink-0" />
                  )}
                  <span>{status.message}</span>
                </div>
              </div>
            )}
          </div>
        </form>
      </div>
    </SectionWrapper>
  );
}