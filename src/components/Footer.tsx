"use client";

import { useLanguage } from "@/context/LanguageContext";
import { site } from "@/lib/data";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-white/10 py-12 text-center text-xs sm:text-sm text-muted">
      <div className="mx-auto flex w-[92%] max-w-5xl flex-col items-center justify-between gap-4 sm:flex-row">
        <p>
          © {new Date().getFullYear()} {site.name}. All rights reserved.
        </p>
        <p className="font-mono text-xs text-silver">
          {t.footerCopyright}
        </p>
      </div>
    </footer>
  );
}

