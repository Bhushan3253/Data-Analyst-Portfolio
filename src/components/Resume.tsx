import { Download, FileText, GraduationCap, BriefcaseBusiness } from "lucide-react";
import SectionHeading from "./SectionHeading";
import SectionWrapper from "./SectionWrapper";
import { educationData, projectsData, resumeData } from "../data/portfolioData";

export default function Resume() {
  const primaryEducation = educationData[0];

  return (
    <SectionWrapper id="resume">
      <SectionHeading
        label="Resume"
        title="Snapshot of My Profile"
        subtitle="A concise view of my background, skills, selected projects, and education."
      />

      <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
        <article className="rounded-3xl border border-white/5 bg-navy-800/30 p-6 shadow-lg shadow-black/10 lg:p-8">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent-500/10 text-accent-400">
              <FileText className="h-6 w-6" />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
                Professional Summary
              </p>
              <h3 className="text-lg font-semibold text-white">
                Data-focused fresher portfolio
              </h3>
            </div>
          </div>

          <p className="mt-5 text-sm leading-relaxed text-slate-300">
            {resumeData.summary}
          </p>

          <div className="mt-6">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
              Core Analytics Skills
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {resumeData.coreSkills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-slate-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-8 rounded-2xl border border-dashed border-white/10 bg-navy-900/40 p-4">
            <div className="flex items-start gap-3">
              <Download className="mt-0.5 h-5 w-5 text-accent-400" />
              <div className="min-w-0 flex-1">
                <p className="text-sm font-semibold text-white">Download Resume</p>
                {resumeData.downloadUrl ? (
                  <a
                    href={resumeData.downloadUrl}
                    download
                    className="mt-3 inline-flex items-center gap-2 rounded-xl bg-accent-500 px-4 py-2.5 text-sm font-semibold text-navy-950 transition-colors hover:bg-accent-400"
                  >
                    Download PDF
                  </a>
                ) : (
                  <div className="mt-3 rounded-xl border border-dashed border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-400">
                    Resume PDF placeholder. {resumeData.downloadNote}
                  </div>
                )}
              </div>
            </div>
          </div>
        </article>

        <div className="space-y-6">
          <section className="rounded-3xl border border-white/5 bg-navy-800/30 p-6 shadow-lg shadow-black/10">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-sky-500/10 text-sky-400">
                <BriefcaseBusiness className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
                  Selected Projects
                </p>
                <h3 className="text-lg font-semibold text-white">
                  Project highlights
                </h3>
              </div>
            </div>

            <div className="mt-5 space-y-3">
              {projectsData.map((project) => (
                <div
                  key={project.id}
                  className="rounded-2xl border border-white/5 bg-white/5 p-4"
                >
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <h4 className="text-sm font-semibold text-white">
                      {project.title}
                    </h4>
                    <span
                      className={`rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] ${
                        project.status === "completed"
                          ? "bg-emerald-500/15 text-emerald-300"
                          : "bg-amber-500/15 text-amber-300"
                      }`}
                    >
                      {project.status === "completed" ? "Completed" : "In Progress"}
                    </span>
                  </div>
                  <p className="mt-2 text-xs leading-relaxed text-slate-400">
                    {project.tools.join(" • ")}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-3xl border border-white/5 bg-navy-800/30 p-6 shadow-lg shadow-black/10">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-400">
                <GraduationCap className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
                  Education
                </p>
                <h3 className="text-lg font-semibold text-white">
                  Academic background
                </h3>
              </div>
            </div>

            <div className="mt-5 rounded-2xl border border-white/5 bg-white/5 p-4">
              <h4 className="text-base font-semibold text-white">
                {primaryEducation.degree}
              </h4>
              <p className="mt-1 text-sm text-slate-300">
                {primaryEducation.institution}
              </p>
              <p className="mt-1 text-xs text-slate-500">
                {primaryEducation.university}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="rounded-full border border-white/10 bg-navy-900/60 px-3 py-1 text-xs font-medium text-slate-200">
                  CGPA {primaryEducation.cgpa}
                </span>
              </div>
            </div>
          </section>
        </div>
      </div>
    </SectionWrapper>
  );
}