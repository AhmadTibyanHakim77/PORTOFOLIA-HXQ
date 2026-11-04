"use client";

import { ArrowUpRight } from "lucide-react";
import Magnetic from "./Magnetic";
import SceneLoader from "./SceneLoader";
import { useLanguage } from "@/context/LanguageContext";

export default function HeroSection() {
  const { t, siteHeadline, siteDescription, siteTitle } = useLanguage();

  return (
    <section
      id="hero"
      className="relative grid min-h-screen place-items-center overflow-hidden px-4 pt-20 pb-16"
      aria-label="Introduction"
    >
      {/* Fullscreen 3D Scene Background */}
      <SceneLoader />

      {/* Hero Foreground Content */}
      <div className="relative z-10 text-center select-none pointer-events-auto max-w-4xl">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-1 text-xs font-mono text-silver backdrop-blur-md mb-6">
          <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
          <span>{t.heroBadge}</span>
        </div>

        <h1 className="font-display text-[clamp(2.75rem,8.5vw,7.5rem)] font-bold leading-[0.92] tracking-tighter text-fg">
          {t.heroHeadline1}
          <br />
          {t.heroHeadline2}
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg sm:text-xl md:text-2xl font-light text-silver leading-snug">
          {siteHeadline}
        </p>

        <p className="mx-auto mt-4 max-w-xl text-xs sm:text-sm md:text-base text-muted font-normal leading-relaxed">
          {siteDescription}
        </p>

        <p className="mt-3 font-mono text-xs text-accent">
          {siteTitle}
        </p>

        <div className="mt-10 flex items-center justify-center gap-4">
          <Magnetic href="#projects">
            <span>{t.exploreWork}</span>
            <ArrowUpRight size={18} />
          </Magnetic>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <a
        href="#about"
        aria-label={t.scrollDown}
        className="absolute bottom-8 z-10 flex flex-col items-center gap-2 group text-muted hover:text-white transition-colors"
      >
        <span className="font-mono text-[10px] uppercase tracking-widest opacity-70">
          Scroll
        </span>
        <div className="h-10 w-6 rounded-full border border-white/20 p-1 flex justify-center">
          <span className="h-2 w-1 rounded-full bg-accent animate-bounce" />
        </div>
      </a>
    </section>
  );
}
