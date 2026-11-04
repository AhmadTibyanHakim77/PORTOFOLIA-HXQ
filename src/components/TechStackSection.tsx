"use client";

import { useLanguage } from "@/context/LanguageContext";
import TiltCard from "./TiltCard";
import Reveal from "./Reveal";

export default function TechStackSection() {
  const { stack, t } = useLanguage();

  return (
    <section
      id="stack"
      className="mx-auto w-[92%] max-w-5xl py-24 md:py-32 scroll-mt-20"
      aria-labelledby="stack-heading"
    >
      <Reveal>
        <div className="flex items-center gap-2 mb-3">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          <span className="text-xs font-mono uppercase tracking-widest text-silver">
            {t.stackSectionTitle}
          </span>
        </div>
        <h2
          id="stack-heading"
          className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-fg"
        >
          {t.stackSectionTitle}
        </h2>
        <p className="mt-3 max-w-2xl text-sm sm:text-base text-silver">
          {t.stackSubtitle}
        </p>
      </Reveal>

      <div className="mt-14 space-y-12">
        {(stack || []).map((group, groupIndex) => (
          <Reveal key={group.group} delay={Math.min(groupIndex * 0.06, 0.3)}>
            <div className="mb-5 flex items-center gap-3">
              <span className="font-mono text-xs text-accent">0{groupIndex + 1}.</span>
              <h3 className="font-display text-lg sm:text-xl font-medium text-fg">
                {group.group}
              </h3>
              <div className="h-px flex-1 bg-white/10" />
            </div>

            <ul className="grid gap-3.5 sm:grid-cols-2 lg:grid-cols-3">
              {(group.items || []).map((item) => (
                <li key={item.n}>
                  <TiltCard
                    maxTilt={7}
                    className="h-full p-4 sm:p-5 border border-white/10 transition-colors duration-300 hover:border-accent/50"
                  >
                    <div className="flex items-center justify-between">
                      <p className="font-display font-semibold text-fg tracking-tight text-sm sm:text-base">
                        {item.n}
                      </p>
                      <span className="h-1.5 w-1.5 rounded-full bg-accent/60 group-hover:bg-accent group-hover:shadow-[0_0_8px_#4d7cff] transition-all" />
                    </div>
                    <p className="mt-2 text-xs sm:text-sm text-silver/80 leading-relaxed">
                      {item.d}
                    </p>
                  </TiltCard>
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
