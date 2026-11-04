"use client";

import { useLanguage } from "@/context/LanguageContext";
import TiltCard from "./TiltCard";
import Reveal from "./Reveal";

export default function ExpertiseSection() {
  const { expertise, t } = useLanguage();

  return (
    <section
      id="expertise"
      className="mx-auto w-[92%] max-w-5xl py-24 md:py-32 scroll-mt-20"
      aria-labelledby="expertise-heading"
    >
      <Reveal>
        <div className="flex items-center gap-2 mb-3">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          <span className="text-xs font-mono uppercase tracking-widest text-silver">
            {t.expertiseSectionTitle}
          </span>
        </div>
        <h2
          id="expertise-heading"
          className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-fg"
        >
          {t.expertiseSectionTitle}
        </h2>
      </Reveal>

      <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {(expertise || []).map((item, idx) => (
          <li key={item.title}>
            <Reveal delay={idx * 0.08}>
              <TiltCard
                maxTilt={6}
                className="h-full p-6 border border-white/10 hover:border-accent/40"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-accent font-semibold">
                    0{idx + 1}
                  </span>
                  <div className="h-2 w-2 rounded-full bg-accent/40" />
                </div>
                <h3 className="mt-4 font-display font-semibold text-fg text-base sm:text-lg">
                  {item.title}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-silver leading-relaxed">
                  {item.desc}
                </p>
              </TiltCard>
            </Reveal>
          </li>
        ))}
      </ul>
    </section>
  );
}
