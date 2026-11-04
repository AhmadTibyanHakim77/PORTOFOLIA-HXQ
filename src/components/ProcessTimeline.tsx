"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLanguage } from "@/context/LanguageContext";

gsap.registerPlugin(ScrollTrigger);

export default function ProcessTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const lineFillRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<(HTMLLIElement | null)[]>([]);
  const { process, t } = useLanguage();

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion || !containerRef.current || !lineFillRef.current) {
      if (lineFillRef.current) {
        lineFillRef.current.style.height = "100%";
      }
      return;
    }

    const ctx = gsap.context(() => {
      // 1. Scrubbed line fill
      gsap.fromTo(
        lineFillRef.current,
        { height: "0%" },
        {
          height: "100%",
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%",
            end: "bottom 70%",
            scrub: 0.5,
          },
        }
      );

      // 2. Step items activation & stagger
      itemsRef.current.forEach((item) => {
        if (!item) return;
        const dot = item.querySelector(".process-node");
        const content = item.querySelector(".process-card");

        gsap.fromTo(
          [dot, content],
          { opacity: 0.35, y: 15 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power2.out",
            scrollTrigger: {
              trigger: item,
              start: "top 70%",
              toggleActions: "play reverse play reverse",
            },
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, [process]);

  return (
    <div ref={containerRef} className="relative mt-12 pl-6 md:pl-10">
      {/* Background Track Line */}
      <div
        aria-hidden="true"
        className="absolute top-2 bottom-6 left-2 md:left-3.5 w-0.5 bg-white/10"
      >
        {/* Glowing Progress Fill */}
        <div
          ref={lineFillRef}
          className="w-full origin-top bg-gradient-to-b from-accent via-accent to-[#8baaff] shadow-[0_0_12px_#4d7cff]"
          style={{ height: "0%" }}
        />
      </div>

      <ol className="space-y-10">
        {(process || []).map(([title, desc], index) => (
          <li
            key={title}
            ref={(el) => {
              itemsRef.current[index] = el;
            }}
            className="group relative flex items-start gap-4 md:gap-6"
          >
            {/* Glowing Node */}
            <div
              aria-hidden="true"
              className="process-node -ml-[19px] md:-ml-[25px] mt-1.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full border border-white/20 bg-bg shadow-[0_0_12px_rgba(77,124,255,0.4)] transition-all duration-300 group-hover:border-accent group-hover:scale-125"
            >
              <div className="h-2 w-2 rounded-full bg-accent" />
            </div>

            {/* Card Content */}
            <div className="process-card glass flex-1 p-5 md:p-6 transition-all duration-300 hover:border-accent/40">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-display text-lg md:text-xl font-semibold tracking-tight text-fg">
                  <span className="font-mono text-sm text-accent mr-2">
                    {String(index + 1).padStart(2, "0")}.
                  </span>
                  {title}
                </h3>
                <span className="font-mono text-xs text-muted uppercase tracking-wider">
                  Phase {index + 1}
                </span>
              </div>
              <p className="mt-2 text-sm md:text-base text-silver leading-relaxed">
                {desc}
              </p>
            </div>
          </li>
        ))}
      </ol>
      <div className="sr-only" aria-live="polite">
        {t.processSectionTitle}
      </div>
    </div>
  );
}

