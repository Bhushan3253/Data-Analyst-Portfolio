import { Code2, Link2, Mail, ArrowUpRight } from "lucide-react";
import { footerData, navLinks, personalInfo } from "../data/portfolioData";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-navy-950/95 py-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-lg font-semibold text-white">Bhushan Nagpure</p>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-400">
              {footerData.note}
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-slate-300 transition-colors hover:border-accent-500/30 hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-white/5 pt-6 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
          <p>{footerData.copyright}</p>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 transition-colors hover:text-white"
            >
              <Code2 className="h-4 w-4 text-accent-400" />
              GitHub
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 transition-colors hover:text-white"
            >
              <Link2 className="h-4 w-4 text-accent-400" />
              LinkedIn
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="inline-flex items-center gap-2 transition-colors hover:text-white"
            >
              <Mail className="h-4 w-4 text-accent-400" />
              Email
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}