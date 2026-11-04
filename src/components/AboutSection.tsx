"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { Code, BarChart3, Brain, MapPin, Sparkles } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLanguage } from "@/context/LanguageContext";
import { site } from "@/lib/data";

gsap.registerPlugin(ScrollTrigger);

const pillarIcons = [Code, BarChart3, Brain];

export default function AboutSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const { about, t, siteLocation } = useLanguage();

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion || !containerRef.current) return;

    const ctx = gsap.context(() => {
      // Animate Heading & Paragraphs
      const lines = textRef.current?.querySelectorAll(".reveal-text");
      if (lines && lines.length > 0) {
        gsap.fromTo(
          lines,
          { opacity: 0, y: 24 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.12,
            ease: "power3.out",
            scrollTrigger: {
              trigger: textRef.current,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }

      // Animate Profile Card
      if (cardRef.current) {
        gsap.fromTo(
          cardRef.current,
          { opacity: 0, y: 36, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: cardRef.current,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, [about]);

  return (
    <section
      id="about"
      ref={containerRef}
      className="mx-auto w-[92%] max-w-5xl py-24 md:py-32 scroll-mt-20"
      aria-labelledby="about-heading"
    >
      <div className="flex items-center gap-2 mb-3">
        <span className="h-1.5 w-1.5 rounded-full bg-accent" />
        <span className="text-xs font-mono uppercase tracking-widest text-silver">
          {t.aboutSectionTitle}
        </span>
      </div>

      <div className="grid items-start gap-12 lg:grid-cols-[1.3fr_0.9fr]">
        {/* Left: Editorial Storytelling & Three Focus Pillars */}
        <div ref={textRef} className="space-y-6">
          <h2
            id="about-heading"
            className="reveal-text font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-fg leading-[1.15]"
          >
            {about.heading}
          </h2>

          <p className="reveal-text text-base sm:text-lg text-silver leading-relaxed">
            {about.intro}
          </p>

          {/* Three Core Competency Pillars */}
          <div className="reveal-text mt-8 space-y-4">
            {(about?.pillars || []).map((pillar, idx) => {
              const Icon = pillarIcons[idx % pillarIcons.length];
              return (
                <div
                  key={pillar.title}
                  className="rounded-2xl border border-white/10 bg-white/5 p-5 transition-all duration-300 hover:border-accent/40 hover:bg-white/[0.07]"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="grid h-8 w-8 place-items-center rounded-lg bg-accent/20 text-accent">
                      <Icon size={18} />
                    </div>
                    <h3 className="font-display text-base font-semibold text-fg">
                      {pillar.title}
                    </h3>
                  </div>
                  <p className="text-sm text-silver leading-relaxed pl-11">
                    {pillar.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right: Floating Glass Profile Card */}
        <div className="flex justify-center lg:justify-end lg:sticky lg:top-28">
          <div
            ref={cardRef}
            className="glass relative w-full max-w-xs p-6 sm:p-7 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.7)] border border-white/10 transition-all duration-300 hover:border-accent/40"
          >
            {/* Ambient inner glow */}
            <div
              aria-hidden="true"
              className="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-accent/20 blur-2xl pointer-events-none"
            />

            {/* Profile Avatar Image */}
            <div className="relative mb-5 aspect-square w-full overflow-hidden rounded-xl border border-white/10 bg-bg2">
              <Image
                src={site.avatar}
                alt={site.name}
                fill
                priority
                className="object-cover transition-transform duration-500 hover:scale-105"
                sizes="(max-width: 640px) 260px, 300px"
              />
            </div>

            <div className="relative z-10">
              <div className="flex items-center justify-between">
                <h3 className="font-display text-lg font-semibold text-fg">
                  {about.cardTitle}
                </h3>
                <span className="rounded-full bg-accent/20 px-2.5 py-0.5 font-mono text-[11px] text-accent font-semibold">
                  ATH
                </span>
              </div>

              <p className="mt-1 text-xs sm:text-sm text-silver font-medium">
                {about.cardSubtitle}
              </p>

              <div className="mt-2 flex items-center gap-1.5 text-xs text-muted">
                <MapPin size={13} className="text-accent" />
                <span>{siteLocation}</span>
              </div>

              <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-silver">
                <span className="inline-flex items-center gap-1.5 text-accent font-medium">
                  <Sparkles size={13} />
                  <span>{about.cardBadge}</span>
                </span>
                <span className="flex items-center gap-1.5 text-green-400">
                  <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
                  Available
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
