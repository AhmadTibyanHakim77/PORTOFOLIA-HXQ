"use client";

import { ArrowUpRight, Github, MapPin, Code2, Sparkles, Terminal } from "lucide-react";
import { site } from "@/lib/data";
import { useLanguage } from "@/context/LanguageContext";
import TiltCard from "./TiltCard";
import Reveal from "./Reveal";

const featuredRepos = [
  {
    name: "Tunas-Tabung",
    desc: "Digital savings and financial milestone web application.",
    tech: "Laravel · Blade · MySQL",
    url: "https://github.com/AhmadTibyanHakim77/Tunas-Tabung",
  },
  {
    name: "Antrein",
    desc: "Real-time ticketing & digital service queue management platform.",
    tech: "TypeScript · React · Node.js",
    url: "https://github.com/AhmadTibyanHakim77/Antrein",
  },
  {
    name: "StudyMate-AI",
    desc: "AI-assisted academic study companion and quiz generator.",
    tech: "TypeScript · Next.js · AI",
    url: "https://github.com/AhmadTibyanHakim77/StudyMate-AI",
  },
  {
    name: "adult-income-prediction",
    desc: "Census demographic predictive modeling pipeline with Scikit-learn.",
    tech: "Python · Machine Learning · Pandas",
    url: "https://github.com/AhmadTibyanHakim77/adult-income-prediction",
  },
  {
    name: "stock-market-analysis",
    desc: "Financial time-series trend and volatility indicator exploration.",
    tech: "Python · Data Analytics · Matplotlib",
    url: "https://github.com/AhmadTibyanHakim77/stock-market-analysis",
  },
  {
    name: "tetra-coffee",
    desc: "Coffeehouse digital ordering system powered by Next.js & Laravel.",
    tech: "Next.js · Laravel · TypeScript",
    url: "https://github.com/AhmadTibyanHakim77/tetra-coffee",
  },
];

export default function GitHubSection() {
  const { t, siteLocation } = useLanguage();

  return (
    <section
      id="github"
      className="mx-auto w-[92%] max-w-5xl py-24 md:py-32 scroll-mt-20"
      aria-labelledby="github-heading"
    >
      <Reveal>
        <div className="flex items-center gap-2 mb-3">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          <span className="text-xs font-mono uppercase tracking-widest text-silver">
            {t.githubSectionTitle}
          </span>
        </div>
        <div className="flex flex-wrap items-baseline justify-between gap-4">
          <h2
            id="github-heading"
            className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-fg"
          >
            {t.githubSectionTitle}
          </h2>
          <a
            href={site.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-mono text-accent hover:text-white transition-colors"
          >
            <span>github.com/{site.githubUsername}</span>
            <ArrowUpRight size={14} />
          </a>
        </div>
        <p className="mt-3 max-w-xl text-sm sm:text-base text-silver">
          {t.githubSubtitle}
        </p>
      </Reveal>

      {/* Main GitHub Profile Showcase Card */}
      <div className="mt-10">
        <Reveal>
          <TiltCard
            maxTilt={4}
            className="p-6 sm:p-8 border border-white/10 shadow-2xl relative overflow-hidden"
          >
            {/* Ambient Background Gradient Glow */}
            <div
              aria-hidden="true"
              className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-accent/15 blur-3xl pointer-events-none"
            />

            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-white/10">
              <div className="flex items-center gap-4">
                <div className="grid h-16 w-16 place-items-center rounded-2xl border border-white/20 bg-white/5 font-display text-2xl text-accent shadow-inner">
                  <Github size={32} />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-display text-xl font-bold text-fg">
                      {site.name}
                    </h3>
                    <span className="rounded-full bg-accent/20 px-2.5 py-0.5 font-mono text-[11px] text-accent font-semibold">
                      @{site.githubUsername}
                    </span>
                  </div>
                  <p className="mt-1 flex items-center gap-1 text-xs text-silver">
                    <MapPin size={12} className="text-accent" />
                    <span>{siteLocation}</span>
                    <span className="mx-1 text-white/20">·</span>
                    <span>Full Stack &amp; Data Science Enthusiast</span>
                  </p>
                </div>
              </div>

              {/* Action Button */}
              <a
                href={site.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-fg px-6 py-3 text-xs sm:text-sm font-semibold text-bg transition-all hover:bg-white hover:scale-105 active:scale-95 shadow-lg"
              >
                <Github size={16} />
                <span>{t.exploreGithub}</span>
                <ArrowUpRight size={14} />
              </a>
            </div>

            {/* Core Capability Highlights */}
            <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="rounded-xl border border-white/10 bg-white/5 p-3.5">
                <div className="flex items-center gap-1.5 text-accent font-mono text-xs mb-1">
                  <Code2 size={13} />
                  <span>Full Stack Web</span>
                </div>
                <p className="text-xs text-muted">Laravel, Next.js, React</p>
              </div>

              <div className="rounded-xl border border-white/10 bg-white/5 p-3.5">
                <div className="flex items-center gap-1.5 text-accent font-mono text-xs mb-1">
                  <Sparkles size={13} />
                  <span>AI &amp; ML</span>
                </div>
                <p className="text-xs text-muted">Python, Scikit-learn</p>
              </div>

              <div className="rounded-xl border border-white/10 bg-white/5 p-3.5">
                <div className="flex items-center gap-1.5 text-accent font-mono text-xs mb-1">
                  <Terminal size={13} />
                  <span>Data Analytics</span>
                </div>
                <p className="text-xs text-muted">SQL, Pandas, Time Series</p>
              </div>

              <div className="rounded-xl border border-white/10 bg-white/5 p-3.5">
                <div className="flex items-center gap-1.5 text-accent font-mono text-xs mb-1">
                  <Github size={13} />
                  <span>Open Source</span>
                </div>
                <p className="text-xs text-muted">Clean Git Version Control</p>
              </div>
            </div>

            {/* Quick Repository Links Grid */}
            <div className="mt-8 pt-6 border-t border-white/10">
              <p className="font-mono text-xs uppercase tracking-wider text-muted mb-4">
                Selected Repositories
              </p>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {featuredRepos.map((repo) => (
                  <a
                    key={repo.name}
                    href={repo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group rounded-xl border border-white/10 bg-black/30 p-4 transition-all duration-200 hover:border-accent/40 hover:bg-white/5"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-display text-sm font-semibold text-fg group-hover:text-accent transition-colors">
                        {repo.name}
                      </span>
                      <ArrowUpRight
                        size={14}
                        className="text-muted group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                      />
                    </div>
                    <p className="mt-1.5 text-xs text-silver line-clamp-2 leading-relaxed">
                      {repo.desc}
                    </p>
                    <span className="mt-3 block font-mono text-[10px] text-accent/80">
                      {repo.tech}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </TiltCard>
        </Reveal>
      </div>
    </section>
  );
}

