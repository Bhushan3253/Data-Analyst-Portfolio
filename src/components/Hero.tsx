import {
  ArrowDown,
  Download,
  Code2,
  Link2,
  TrendingUp,
  BarChart3,
  PieChart,
  Activity,
} from "lucide-react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import { personalInfo, heroContent } from "../data/portfolioData";

// Sample chart data for the hero dashboard illustration
const sampleChartData = [
  { month: "Jan", value: 4200, target: 3800 },
  { month: "Feb", value: 3800, target: 4000 },
  { month: "Mar", value: 5100, target: 4200 },
  { month: "Apr", value: 4600, target: 4400 },
  { month: "May", value: 5800, target: 4600 },
  { month: "Jun", value: 6200, target: 4800 },
  { month: "Jul", value: 5900, target: 5000 },
  { month: "Aug", value: 7100, target: 5200 },
];

function DashboardPreview() {
  return (
    <div className="relative animate-float">
      {/* Outer glow */}
      <div className="absolute -inset-2 rounded-2xl bg-gradient-to-r from-accent-500/20 via-sky-500/10 to-accent-400/20 blur-xl" />

      {/* Dashboard card */}
      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-navy-800/80 p-5 shadow-2xl backdrop-blur-sm">
        {/* Dashboard header */}
        <div className="mb-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-accent-400" />
            <span className="text-xs font-semibold text-slate-300">
              Analytics Dashboard
            </span>
          </div>
          <div className="flex gap-1.5">
            <div className="h-2.5 w-2.5 rounded-full bg-red-400/60" />
            <div className="h-2.5 w-2.5 rounded-full bg-yellow-400/60" />
            <div className="h-2.5 w-2.5 rounded-full bg-green-400/60" />
          </div>
        </div>

        {/* KPI Cards */}
        <div className="mb-4 grid grid-cols-3 gap-3">
          {[
            {
              label: "Revenue",
              value: "₹7.1L",
              change: "+18%",
              icon: TrendingUp,
            },
            {
              label: "Orders",
              value: "1,247",
              change: "+12%",
              icon: BarChart3,
            },
            {
              label: "Conversion",
              value: "3.4%",
              change: "+5%",
              icon: PieChart,
            },
          ].map((kpi) => (
            <div
              key={kpi.label}
              className="rounded-xl border border-white/5 bg-navy-900/60 p-3"
            >
              <div className="mb-1.5 flex items-center justify-between">
                <kpi.icon className="h-3.5 w-3.5 text-accent-400" />
                <span className="text-[10px] font-semibold text-emerald-400">
                  {kpi.change}
                </span>
              </div>
              <p className="text-lg font-bold text-white leading-tight">
                {kpi.value}
              </p>
              <p className="text-[10px] text-slate-500">{kpi.label}</p>
            </div>
          ))}
        </div>

        {/* Chart */}
        <div className="rounded-xl border border-white/5 bg-navy-900/60 p-3">
          <div className="mb-2 flex items-center justify-between">
            <span className="text-[10px] font-semibold text-slate-400">
              Monthly Trend
            </span>
            <Activity className="h-3 w-3 text-accent-400" />
          </div>
          <div className="h-[130px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={sampleChartData}>
                <defs>
                  <linearGradient id="heroGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#06b6d4" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#06b6d4" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke="rgba(255,255,255,0.04)"
                  vertical={false}
                />
                <XAxis
                  dataKey="month"
                  tick={{ fontSize: 9, fill: "#64748b" }}
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
                  labelStyle={{ color: "#94a3b8" }}
                />
                <Area
                  type="monotone"
                  dataKey="target"
                  stroke="#334155"
                  strokeWidth={1.5}
                  strokeDasharray="4 4"
                  fill="none"
                  dot={false}
                />
                <Area
                  type="monotone"
                  dataKey="value"
                  stroke="#06b6d4"
                  strokeWidth={2}
                  fill="url(#heroGrad)"
                  dot={false}
                  activeDot={{ r: 4, fill: "#22d3ee", stroke: "#0a0e1a", strokeWidth: 2 }}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Decorative note */}
        <p className="mt-3 text-center text-[9px] italic text-slate-600">
          Sample illustration — not actual project data
        </p>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden bg-grid-pattern"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-accent-500/5 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-[400px] w-[400px] rounded-full bg-sky-500/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 pt-24 pb-16 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left: Text content */}
          <div className="animate-fade-in-up">
            {/* Status Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              <span className="text-xs font-semibold text-emerald-400">
                {personalInfo.status}
              </span>
            </div>

            {/* Name & Role */}
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-accent-400">
              {personalInfo.name}
            </p>

            {/* Headline */}
            <h1 className="text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-[3.25rem]">
              Turning Data Into{" "}
              <span className="text-gradient">Insights</span>.
              <br />
              Insights Into{" "}
              <span className="text-gradient">Action</span>.
            </h1>

            {/* Sub-headline */}
            <p className="mt-6 max-w-lg text-base leading-relaxed text-slate-400 sm:text-lg">
              {heroContent.subheadline}
            </p>

            {/* Role tags */}
            <div className="mt-5 flex flex-wrap gap-2">
              {personalInfo.tagline.split(" | ").map((tag) => (
                <span
                  key={tag}
                  className="rounded-md border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-300"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-accent-500 to-sky-500 px-6 py-3.5 text-sm font-semibold text-navy-950 shadow-lg shadow-accent-500/25 transition-all duration-300 hover:shadow-xl hover:shadow-accent-500/30 hover:-translate-y-0.5"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById("projects")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                {heroContent.primaryCTA}
                <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
              </a>
              <a
                href={personalInfo.resumeUrl}
                className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-accent-500/40 hover:bg-white/10 hover:-translate-y-0.5"
              >
                <Download className="h-4 w-4" />
                {heroContent.secondaryCTA}
              </a>
            </div>

            {/* Social links */}
            <div className="mt-8 flex items-center gap-4">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-slate-400 transition-colors hover:text-accent-400"
                aria-label="GitHub Profile"
              >
                <Code2 className="h-4.5 w-4.5" />
                <span>GitHub</span>
              </a>
              <span className="text-slate-700">|</span>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-slate-400 transition-colors hover:text-accent-400"
                aria-label="LinkedIn Profile"
              >
                <Link2 className="h-4.5 w-4.5" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Right: Dashboard Preview */}
          <div className="hidden lg:block" style={{ animationDelay: "0.3s" }}>
            <DashboardPreview />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <button
          onClick={() =>
            document
              .getElementById("about")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          className="group flex flex-col items-center gap-2 text-slate-500 transition-colors hover:text-accent-400"
          aria-label="Scroll to About section"
        >
          <span className="text-[10px] uppercase tracking-widest">
            Scroll
          </span>
          <ArrowDown className="h-4 w-4 animate-bounce" />
        </button>
      </div>
    </section>
  );
}
