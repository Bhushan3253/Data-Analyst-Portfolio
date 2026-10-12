import { GraduationCap, Award, MapPin } from "lucide-react";
import SectionWrapper from "./SectionWrapper";
import SectionHeading from "./SectionHeading";
import { educationData } from "../data/portfolioData";

export default function Education() {
  return (
    <SectionWrapper id="education">
      <SectionHeading
        label="Education"
        title="Academic Background"
        subtitle="The foundation of my analytical and technical skills."
      />

      <div className="mx-auto max-w-2xl">
        {educationData.map((edu) => (
          <div
            key={edu.degree}
            className="group relative rounded-2xl border border-white/5 bg-navy-800/30 p-8 transition-all duration-300 hover:border-accent-500/15 hover:shadow-lg hover:shadow-accent-500/5"
          >
            {/* Accent line */}
            <div className="absolute top-0 left-0 h-full w-1 rounded-l-2xl bg-gradient-to-b from-accent-400 to-sky-500" />

            <div className="flex items-start gap-5">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-accent-500/10 text-accent-400 transition-colors group-hover:bg-accent-500/20">
                <GraduationCap className="h-7 w-7" />
              </div>

              <div className="flex-1">
                <h3 className="text-xl font-bold text-white">{edu.degree}</h3>

                <div className="mt-2 flex items-center gap-2 text-sm text-slate-300">
                  <MapPin className="h-3.5 w-3.5 text-accent-500" />
                  {edu.institution}
                </div>

                <p className="mt-1 text-xs text-slate-500">{edu.university}</p>

                <div className="mt-4 flex flex-wrap items-center gap-4">
                  <div className="flex items-center gap-2 rounded-lg border border-white/5 bg-white/5 px-3 py-2">
                    <Award className="h-4 w-4 text-accent-400" />
                    <div>
                      <p className="text-[10px] uppercase tracking-wider text-slate-500">
                        CGPA
                      </p>
                      <p className="text-sm font-bold text-white">
                        {edu.cgpa}
                      </p>
                    </div>
                  </div>

                  {edu.year && (
                    <div className="rounded-lg border border-white/5 bg-white/5 px-3 py-2">
                      <p className="text-[10px] uppercase tracking-wider text-slate-500">
                        Year
                      </p>
                      <p className="text-sm font-bold text-white">
                        {edu.year}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
