"use client";

import { useLanguage } from "@/context/LanguageContext";
import ProcessTimeline from "./ProcessTimeline";
import Reveal from "./Reveal";

export default function ProcessSection() {
  const { t } = useLanguage();

  return (
    <section
      id="process"
      className="mx-auto w-[92%] max-w-5xl py-24 md:py-32 scroll-mt-20"
      aria-labelledby="process-heading"
    >
      <Reveal>
        <div className="flex items-center gap-2 mb-3">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          <span className="text-xs font-mono uppercase tracking-widest text-silver">
            {t.processSectionTitle}
          </span>
        </div>
        <h2
          id="process-heading"
          className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-fg"
        >
          {t.processSectionTitle}
        </h2>
        <p className="mt-3 max-w-xl text-sm sm:text-base text-silver">
          {t.processSubtitle}
        </p>
      </Reveal>

      <ProcessTimeline />
    </section>
  );
}

