"use client";

import { useState } from "react";
import { Mail, Check, Copy, ArrowUpRight, Github, MapPin } from "lucide-react";
import { site } from "@/lib/data";
import { useLanguage } from "@/context/LanguageContext";
import Magnetic from "./Magnetic";
import Reveal from "./Reveal";

export default function ContactSection() {
  const { t, siteLocation } = useLanguage();
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(site.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      const el = document.createElement("textarea");
      el.value = site.email;
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <section
      id="contact"
      className="mx-auto w-[92%] max-w-5xl py-24 md:py-32 scroll-mt-20 text-center"
      aria-labelledby="contact-heading"
    >
      <Reveal>
        <div className="mx-auto flex w-fit items-center gap-2 mb-3">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          <span className="text-xs font-mono uppercase tracking-widest text-silver">
            {t.contactHeading}
          </span>
        </div>

        <h2
          id="contact-heading"
          className="mx-auto max-w-2xl font-display text-2xl sm:text-3xl md:text-5xl font-semibold tracking-tight text-fg leading-tight"
        >
          {t.contactHeading}
        </h2>

        <p className="mx-auto mt-4 max-w-xl text-sm sm:text-base text-silver">
          {t.contactSubtitle}
        </p>

        {/* Action Buttons: Mailto CTA & Copy Email */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Magnetic href={`mailto:${site.email}`}>
            <Mail size={18} />
            <span>{t.contactCta}</span>
          </Magnetic>

          <button
            type="button"
            onClick={handleCopyEmail}
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-medium text-silver backdrop-blur-md transition-all hover:border-accent hover:text-white hover:bg-white/10 active:scale-95 focus-visible:outline-none focus-visible:border-accent"
            aria-label={copied ? t.copied : t.copyEmail}
          >
            {copied ? (
              <>
                <Check size={16} className="text-green-400" />
                <span className="text-green-400 font-semibold">{t.copied}</span>
              </>
            ) : (
              <>
                <Copy size={16} />
                <span>{site.email}</span>
              </>
            )}
          </button>
        </div>

        {/* Screen Reader Feedback */}
        <div className="sr-only" aria-live="polite">
          {copied ? t.copied : ""}
        </div>

        {/* Verified Links & Location info */}
        <div className="mt-14 pt-8 border-t border-white/10 flex flex-wrap justify-center items-center gap-6 sm:gap-10 text-sm text-silver">
          <a
            href={`mailto:${site.email}`}
            className="group flex items-center gap-2 hover:text-white transition-colors"
          >
            <Mail size={16} className="text-muted group-hover:text-accent transition-colors" />
            <span>{site.email}</span>
            <ArrowUpRight size={14} className="opacity-60 group-hover:opacity-100 transition-opacity" />
          </a>

          <a
            href={site.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 hover:text-white transition-colors"
          >
            <Github size={16} className="text-muted group-hover:text-accent transition-colors" />
            <span>github.com/{site.githubUsername}</span>
            <ArrowUpRight size={14} className="opacity-60 group-hover:opacity-100 transition-opacity" />
          </a>

          <div className="flex items-center gap-2 text-muted">
            <MapPin size={16} className="text-accent" />
            <span>{siteLocation}</span>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
