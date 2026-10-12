import { useState } from "react";
import {
  ExternalLink,
  Code2,
  X,
  ImageOff,
  BarChart3,
  TrendingUp,
  PieChart,
} from "lucide-react";
import SectionWrapper from "./SectionWrapper";
import SectionHeading from "./SectionHeading";
import { dashboardGallery } from "../data/portfolioData";

function DashboardPlaceholder({ title }: { title: string }) {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-3 rounded-xl bg-navy-900/60 p-8">
      {/* Mini decorative dashboard illustration */}
      <div className="grid w-full max-w-[200px] grid-cols-3 gap-2">
        <div className="col-span-3 flex items-center justify-between rounded-lg bg-navy-700/50 p-2">
          <div className="flex gap-1">
            <div className="h-1.5 w-1.5 rounded-full bg-red-400/40" />
            <div className="h-1.5 w-1.5 rounded-full bg-yellow-400/40" />
            <div className="h-1.5 w-1.5 rounded-full bg-green-400/40" />
          </div>
          <div className="h-1.5 w-12 rounded bg-white/5" />
        </div>
        <div className="flex flex-col items-center gap-1 rounded-lg bg-navy-700/30 p-3">
          <BarChart3 className="h-4 w-4 text-accent-500/40" />
          <div className="h-1 w-8 rounded bg-accent-500/20" />
        </div>
        <div className="flex flex-col items-center gap-1 rounded-lg bg-navy-700/30 p-3">
          <TrendingUp className="h-4 w-4 text-sky-500/40" />
          <div className="h-1 w-8 rounded bg-sky-500/20" />
        </div>
        <div className="flex flex-col items-center gap-1 rounded-lg bg-navy-700/30 p-3">
          <PieChart className="h-4 w-4 text-accent-400/40" />
          <div className="h-1 w-8 rounded bg-accent-400/20" />
        </div>
        <div className="col-span-2 h-12 rounded-lg bg-navy-700/20" />
        <div className="h-12 rounded-lg bg-navy-700/20" />
      </div>
      <div className="mt-2 flex items-center gap-1.5 text-slate-600">
        <ImageOff className="h-3.5 w-3.5" />
        <span className="text-xs font-medium">Screenshot coming soon</span>
      </div>
      <p className="text-[10px] text-slate-700 italic text-center">
        Replace this placeholder with a screenshot of "{title}"
      </p>
    </div>
  );
}

export default function DashboardGallerySection() {
  const [selectedDash, setSelectedDash] = useState<string | null>(null);

  const selectedItem = dashboardGallery.find((d) => d.id === selectedDash);

  return (
    <SectionWrapper id="dashboards" darkBg>
      <SectionHeading
        label="Dashboards"
        title="Dashboard Gallery"
        subtitle="Interactive dashboards built to visualize business metrics and drive decision-making."
      />

      <div className="grid gap-6 sm:grid-cols-2">
        {dashboardGallery.map((dash) => (
          <button
            key={dash.id}
            type="button"
            className="group overflow-hidden rounded-2xl border border-white/5 bg-navy-800/30 text-left transition-all duration-300 hover:border-accent-500/15 hover:shadow-lg hover:shadow-accent-500/5"
            onClick={() => setSelectedDash(dash.id)}
            aria-label={`Open ${dash.title} preview`}
          >
            {/* Preview area */}
            <div className="relative h-56 overflow-hidden">
              {dash.isPlaceholder || !dash.imageUrl ? (
                <DashboardPlaceholder title={dash.title} />
              ) : (
                <img
                  src={dash.imageUrl}
                  alt={`${dash.title} preview`}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              )}
              {/* Hover overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-navy-950/60 opacity-0 transition-opacity group-hover:opacity-100">
                <span className="rounded-full bg-accent-500/20 px-4 py-2 text-xs font-semibold text-accent-400 backdrop-blur-sm">
                  Click to expand
                </span>
              </div>
            </div>

            {/* Info */}
            <div className="p-5">
              <h3 className="mb-1.5 text-base font-semibold text-white group-hover:text-accent-400 transition-colors">
                {dash.title}
              </h3>
              <p className="mb-3 text-xs leading-relaxed text-slate-400">
                {dash.description}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {dash.tools.map((tool) => (
                  <span
                    key={tool}
                    className="rounded-md bg-white/5 px-2 py-0.5 text-[10px] font-medium text-slate-400"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </button>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-navy-950/90 p-4 backdrop-blur-md"
          onClick={() => setSelectedDash(null)}
        >
          <div
            className="relative max-h-[90vh] w-full max-w-4xl overflow-auto rounded-2xl border border-white/10 bg-navy-800 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setSelectedDash(null)}
              className="absolute top-4 right-4 z-10 rounded-full bg-navy-900/80 p-2 text-slate-400 backdrop-blur-sm transition-colors hover:bg-navy-700 hover:text-white"
              aria-label="Close preview"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Image or placeholder */}
            <div className="min-h-[300px]">
              {selectedItem.isPlaceholder || !selectedItem.imageUrl ? (
                <div className="flex h-[400px] items-center justify-center">
                  <DashboardPlaceholder title={selectedItem.title} />
                </div>
              ) : (
                <img
                  src={selectedItem.imageUrl}
                  alt={`${selectedItem.title} full view`}
                  className="w-full rounded-t-2xl object-contain"
                />
              )}
            </div>

            {/* Details */}
            <div className="border-t border-white/5 p-6">
              <h3 className="mb-2 text-xl font-bold text-white">
                {selectedItem.title}
              </h3>
              <p className="mb-4 text-sm text-slate-400">
                {selectedItem.description}
              </p>
              <div className="flex flex-wrap gap-3">
                {selectedItem.projectLink !== "#" && (
                  <a
                    href={selectedItem.projectLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium text-slate-300 transition-all hover:border-accent-500/30 hover:text-accent-400"
                  >
                    <Code2 className="h-3.5 w-3.5" />
                    View Source
                  </a>
                )}
                {selectedItem.dashboardUrl !== "#" && (
                  <a
                    href={selectedItem.dashboardUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-lg bg-accent-500/15 px-4 py-2 text-xs font-medium text-accent-400 transition-all hover:bg-accent-500/25"
                  >
                    <ExternalLink className="h-3.5 w-3.5" />
                    Open Dashboard
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </SectionWrapper>
  );
}
