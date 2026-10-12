import {
  ExternalLink,
  Code2,
  Clock,
  CheckCircle2,
  ChevronRight,
} from "lucide-react";
import SectionWrapper from "./SectionWrapper";
import SectionHeading from "./SectionHeading";
import { projectsData } from "../data/portfolioData";
import type { Project } from "../data/portfolioData";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  Cell,
} from "recharts";

// Sample data for project chart thumbnails (clearly illustrative)
const sampleBarData = [
  { name: "Q1", value: 3200, fill: "#06b6d4" },
  { name: "Q2", value: 4500, fill: "#0ea5e9" },
  { name: "Q3", value: 3800, fill: "#22d3ee" },
  { name: "Q4", value: 5200, fill: "#38bdf8" },
];

function ProjectThumbnail({ project }: { project: Project }) {
  return (
    <div className="relative h-48 overflow-hidden rounded-t-xl bg-navy-900/80 p-4">
      {/* Mini chart as visual decoration */}
      <div className="absolute inset-0 flex items-center justify-center opacity-60">
        <div className="h-full w-full p-6">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={sampleBarData} barCategoryGap="20%">
              <CartesianGrid
                strokeDasharray="3 3"
                stroke="rgba(255,255,255,0.03)"
                vertical={false}
              />
              <XAxis
                dataKey="name"
                tick={{ fontSize: 10, fill: "#475569" }}
                axisLine={false}
                tickLine={false}
              />
              <YAxis hide />
              <Tooltip
                contentStyle={{
                  background: "#111a33",
                  border: "1px solid rgba(6,182,212,0.2)",
                  borderRadius: "8px",
                  fontSize: "11px",
                  color: "#e2e8f0",
                }}
              />
              <Bar dataKey="value" radius={[4, 4, 0, 0]}>
                {sampleBarData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.fill} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-navy-800 via-transparent to-transparent" />

      {/* Status badge */}
      <div className="absolute top-4 right-4">
        {project.status === "completed" ? (
          <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/15 px-3 py-1 text-[10px] font-semibold text-emerald-400">
            <CheckCircle2 className="h-3 w-3" />
            Completed
          </span>
        ) : (
          <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-500/30 bg-amber-500/15 px-3 py-1 text-[10px] font-semibold text-amber-400">
            <Clock className="h-3 w-3" />
            In Progress
          </span>
        )}
      </div>

      {/* Tools */}
      <div className="absolute bottom-4 left-4 flex flex-wrap gap-1.5">
        {project.tools.map((tool) => (
          <span
            key={tool}
            className="rounded-md bg-navy-950/80 px-2 py-0.5 text-[10px] font-medium text-accent-400 backdrop-blur-sm"
          >
            {tool}
          </span>
        ))}
      </div>

      <p className="absolute bottom-4 right-4 text-[8px] italic text-slate-600">
        Illustrative chart
      </p>
    </div>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const isPlaceholderGithub = project.github === "#";
  const isPlaceholderDash = project.dashboardLink === "#";

  return (
    <div className="group flex flex-col overflow-hidden rounded-2xl border border-white/5 bg-navy-800/30 transition-all duration-300 hover:border-accent-500/15 hover:shadow-xl hover:shadow-accent-500/5">
      <ProjectThumbnail project={project} />

      <div className="flex flex-1 flex-col p-6">
        <h3 className="mb-2 text-lg font-bold text-white transition-colors group-hover:text-accent-400">
          {project.title}
        </h3>
        <p className="mb-4 text-sm leading-relaxed text-slate-400">
          {project.description}
        </p>

        <div className="mb-5 rounded-2xl border border-white/5 bg-white/5 p-4">
          <h4 className="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-500">
            Business Questions
          </h4>
          <ul className="space-y-1.5">
            {project.businessQuestions.map((question) => (
              <li
                key={question}
                className="flex items-start gap-2 text-xs leading-relaxed text-slate-300"
              >
                <ChevronRight className="mt-0.5 h-3 w-3 shrink-0 text-accent-500" />
                {question}
              </li>
            ))}
          </ul>
        </div>

        {/* Key analysis points */}
        <div className="mb-5">
          <h4 className="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-500">
            Key Analysis
          </h4>
          <ul className="space-y-1.5">
            {project.keyAnalysis.slice(0, 4).map((item) => (
              <li
                key={item}
                className="flex items-start gap-2 text-xs text-slate-400"
              >
                <ChevronRight className="mt-0.5 h-3 w-3 shrink-0 text-accent-500" />
                {item}
              </li>
            ))}
            {project.keyAnalysis.length > 4 && (
              <li className="text-xs text-slate-500 pl-5">
                +{project.keyAnalysis.length - 4} more…
              </li>
            )}
          </ul>
        </div>

        {project.dashboardVisuals && project.dashboardVisuals.length > 0 && (
          <div className="mb-5 rounded-2xl border border-white/5 bg-navy-900/40 p-4">
            <h4 className="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-500">
              Dashboard Views
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.dashboardVisuals.map((visual) => (
                <span
                  key={visual}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] font-medium text-slate-300"
                >
                  {visual}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Links */}
        <div className="mt-auto flex items-center gap-3 border-t border-white/5 pt-4">
          {isPlaceholderGithub ? (
            <span className="inline-flex items-center gap-1.5 rounded-lg border border-dashed border-white/10 px-3 py-2 text-xs text-slate-600">
              <Code2 className="h-3.5 w-3.5" />
              GitHub placeholder
            </span>
          ) : (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs font-medium text-slate-300 transition-all hover:border-accent-500/30 hover:text-accent-400"
            >
              <Code2 className="h-3.5 w-3.5" />
              Source Code
            </a>
          )}
          {isPlaceholderDash ? (
            <span className="inline-flex items-center gap-1.5 rounded-lg border border-dashed border-white/10 px-3 py-2 text-xs text-slate-600">
              <ExternalLink className="h-3.5 w-3.5" />
              Dashboard placeholder
            </span>
          ) : (
            <a
              href={project.dashboardLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg bg-accent-500/15 px-3 py-2 text-xs font-medium text-accent-400 transition-all hover:bg-accent-500/25"
            >
              <ExternalLink className="h-3.5 w-3.5" />
              Live Dashboard
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <SectionWrapper id="projects">
      <SectionHeading
        label="Projects"
        title="Featured Projects"
        subtitle="Hands-on work that shows practical data cleaning, SQL analysis, visualization, and dashboard thinking."
      />

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projectsData.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </SectionWrapper>
  );
}

              <Code2 className="h-3.5 w-3.5" />
