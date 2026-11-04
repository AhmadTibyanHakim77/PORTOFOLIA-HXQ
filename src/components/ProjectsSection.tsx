"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { ArrowUpRight, ChevronDown, Github, Globe, Layers } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { ProjectCategory } from "@/lib/data";
import TiltCard from "./TiltCard";
import Reveal from "./Reveal";

type FilterType = "all" | ProjectCategory;

export default function ProjectsSection() {
  const { projects, t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState<FilterType>("all");
  const [expandedMap, setExpandedMap] = useState<Record<string, boolean>>({});

  const filterTabs: { id: FilterType; label: string }[] = useMemo(
    () => [
      { id: "all", label: t.filterAll },
      { id: "web", label: t.filterWeb },
      { id: "ai-ml", label: t.filterAi },
      { id: "data", label: t.filterData },
    ],
    [t]
  );

  const filteredProjects = useMemo(() => {
    const list = projects || [];
    if (activeFilter === "all") return list;
    return list.filter((p) => p.category === activeFilter);
  }, [projects, activeFilter]);

  const toggleExpand = (id: string) => {
    setExpandedMap((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section
      id="projects"
      className="mx-auto w-[92%] max-w-5xl py-24 md:py-32 scroll-mt-20"
      aria-labelledby="projects-heading"
    >
      <Reveal>
        <div className="flex items-center gap-2 mb-3">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          <span className="text-xs font-mono uppercase tracking-widest text-silver">
            {t.projectsSectionTitle}
          </span>
        </div>
        <div className="flex flex-wrap items-baseline justify-between gap-4">
          <h2
            id="projects-heading"
            className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-fg"
          >
            {t.projectsSectionTitle}
          </h2>
          <span className="font-mono text-sm text-muted">
            {filteredProjects.length} / {projects.length} Works
          </span>
        </div>
        <p className="mt-3 max-w-2xl text-sm sm:text-base text-silver">
          {t.projectsSubtitle}
        </p>

        {/* Category Filter Tabs */}
        <div
          role="tablist"
          aria-label="Filter projects by category"
          className="mt-8 flex flex-wrap gap-2 border-b border-white/10 pb-4"
        >
          {filterTabs.map((tab) => {
            const isActive = activeFilter === tab.id;
            const count =
              tab.id === "all"
                ? (projects || []).length
                : (projects || []).filter((p) => p.category === tab.id).length;

            return (
              <button
                key={tab.id}
                role="tab"
                type="button"
                aria-selected={isActive}
                onClick={() => setActiveFilter(tab.id)}
                className={`flex items-center gap-2 rounded-full px-4 py-2 text-xs sm:text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:border-accent ${
                  isActive
                    ? "bg-accent text-white shadow-[0_0_16px_rgba(77,124,255,0.4)]"
                    : "border border-white/10 bg-white/5 text-silver hover:border-white/20 hover:text-white"
                }`}
              >
                <span>{tab.label}</span>
                <span
                  className={`rounded-full px-1.5 py-0.2 font-mono text-[10px] ${
                    isActive ? "bg-white/20 text-white" : "bg-white/10 text-muted"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </Reveal>

      {/* Projects Grid */}
      <div className="mt-10 grid gap-8 md:grid-cols-2">
        {filteredProjects.map((project, idx) => {
          const isExpanded = !!expandedMap[project.id];
          return (
            <Reveal key={project.id} delay={Math.min(idx * 0.08, 0.4)}>
              <article className="h-full">
                <TiltCard
                  maxTilt={6}
                  className="flex h-full flex-col justify-between border border-white/10 transition-all duration-300 hover:border-accent/40 shadow-xl"
                >
                  <div>
                    {/* Large Image Preview Area */}
                    <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-white/10 bg-bg2">
                      <Image
                        src={project.image}
                        alt={`${project.title} Preview`}
                        fill
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                      <div className="absolute top-3 left-3 flex items-center gap-1.5 rounded-full border border-white/15 bg-bg/85 px-3 py-1 font-mono text-[11px] font-medium text-accent backdrop-blur-md shadow-md">
                        <Layers size={11} />
                        <span>{project.categoryLabel}</span>
                      </div>
                    </div>

                    {/* Content Area */}
                    <div className="p-6">
                      <h3 className="font-display text-xl sm:text-2xl font-semibold tracking-tight text-fg group-hover:text-accent transition-colors">
                        {project.title}
                      </h3>

                      <p className="mt-2.5 text-sm text-silver leading-relaxed">
                        {project.description}
                      </p>

                      {/* Stack Pills */}
                      <div className="mt-4 flex flex-wrap gap-1.5">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 font-mono text-[11px] text-muted"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Expandable Details Toggle */}
                      <button
                        type="button"
                        onClick={() => toggleExpand(project.id)}
                        aria-expanded={isExpanded}
                        className="mt-5 flex w-full items-center justify-between border-t border-white/10 pt-4 text-xs font-mono text-silver hover:text-accent transition-colors"
                      >
                        <span>
                          {isExpanded
                            ? "Sembunyikan Detail"
                            : "Lihat Detail Peran & Fitur"}
                        </span>
                        <ChevronDown
                          size={16}
                          className={`transition-transform duration-300 ${
                            isExpanded ? "rotate-180 text-accent" : ""
                          }`}
                        />
                      </button>

                      {/* Expandable Details Drawer */}
                      {isExpanded && (
                        <div className="mt-4 space-y-3 rounded-xl border border-white/10 bg-black/40 p-4 text-xs animate-in fade-in duration-300">
                          <div>
                            <span className="font-mono text-accent font-semibold mr-1.5">
                              {t.projectsRoleLabel}:
                            </span>
                            <span className="text-silver font-medium">
                              {project.role}
                            </span>
                          </div>

                          <div>
                            <span className="font-mono text-accent font-semibold block mb-1.5">
                              {t.projectsFeaturesLabel}:
                            </span>
                            <ul className="list-disc pl-4 space-y-1.5 text-muted leading-relaxed">
                              {project.features.map((feat, fIdx) => (
                                <li key={fIdx}>{feat}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Actions Footer */}
                  <div className="flex items-center justify-between border-t border-white/10 p-6 pt-4 text-sm font-medium">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-silver hover:text-white transition-colors"
                    >
                      <Github size={16} />
                      <span>{t.projectsViewGithub}</span>
                      <ArrowUpRight size={14} className="opacity-70" />
                    </a>

                    {project.demo ? (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-accent hover:text-white transition-colors"
                      >
                        <Globe size={16} />
                        <span>{t.projectsViewDemo}</span>
                        <ArrowUpRight size={14} />
                      </a>
                    ) : null}
                  </div>
                </TiltCard>
              </article>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
