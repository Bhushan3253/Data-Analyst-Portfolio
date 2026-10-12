import {
  Brain,
  ShieldCheck,
  Database,
  LayoutDashboard,
  Lightbulb,
  BookOpen,
} from "lucide-react";
import SectionWrapper from "./SectionWrapper";
import SectionHeading from "./SectionHeading";
import { aboutContent, personalInfo } from "../data/portfolioData";

const iconMap = [Brain, ShieldCheck, Database, LayoutDashboard, Lightbulb, BookOpen];

export default function About() {
  return (
    <SectionWrapper id="about">
      <SectionHeading
        label="About Me"
        title="Building Skills Through Projects"
        subtitle="Turning curiosity about data into practical analytics capabilities."
      />

      <div className="grid gap-10 lg:grid-cols-5">
        {/* Left content */}
        <div className="lg:col-span-2">
          {/* Avatar / Initials */}
          <div className="mb-6 flex items-center gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-accent-400 to-sky-500 text-2xl font-bold text-navy-950 shadow-lg shadow-accent-500/20">
              {personalInfo.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">
                {personalInfo.name}
              </h3>
              <p className="text-sm text-accent-400">{personalInfo.role}</p>
            </div>
          </div>

          <p className="text-base leading-relaxed text-slate-300">
            {aboutContent.intro}
          </p>
          <p className="mt-4 text-sm leading-relaxed text-slate-400">
            {aboutContent.description}
          </p>
        </div>

        {/* Right: highlight cards */}
        <div className="grid gap-4 sm:grid-cols-2 lg:col-span-3">
          {aboutContent.highlights.map((item, i) => {
            const Icon = iconMap[i] || Brain;
            return (
              <div
                key={item.title}
                className="group rounded-xl border border-white/5 bg-navy-800/40 p-5 transition-all duration-300 hover:border-accent-500/20 hover:bg-navy-800/70 hover:shadow-lg hover:shadow-accent-500/5"
              >
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-accent-500/10 text-accent-400 transition-colors group-hover:bg-accent-500/20">
                  <Icon className="h-5 w-5" />
                </div>
                <h4 className="mb-1.5 text-sm font-semibold text-white">
                  {item.title}
                </h4>
                <p className="text-xs leading-relaxed text-slate-400">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}
