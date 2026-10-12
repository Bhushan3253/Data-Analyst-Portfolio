import {
  BarChart3,
  Database,
  Code2,
  PieChart,
} from "lucide-react";
import SectionWrapper from "./SectionWrapper";
import SectionHeading from "./SectionHeading";
import { skillsData } from "../data/portfolioData";
import type { LucideIcon } from "lucide-react";

const lucideIcons: Record<string, LucideIcon> = {
  BarChart3,
  Database,
  Code2,
  PieChart,
};

export default function Skills() {
  return (
    <SectionWrapper id="skills" darkBg>
      <SectionHeading
        label="Skills"
        title="Tools & Technologies"
        subtitle="The technologies and methods I use to analyze data and build insights."
      />

      <div className="grid gap-6 sm:grid-cols-2">
        {skillsData.map((cat) => {
          const Icon = lucideIcons[cat.icon] || BarChart3;
          return (
            <div
              key={cat.category}
              className="group rounded-2xl border border-white/5 bg-navy-800/30 p-6 transition-all duration-300 hover:border-accent-500/15 hover:bg-navy-800/50"
            >
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent-500/10 text-accent-400 transition-colors group-hover:bg-accent-500/20">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold text-white">
                  {cat.category}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill.name}
                    className="rounded-lg border border-white/8 bg-white/5 px-3 py-1.5 text-xs font-medium text-slate-300 transition-all duration-200 hover:border-accent-500/30 hover:bg-accent-500/10 hover:text-accent-400"
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
