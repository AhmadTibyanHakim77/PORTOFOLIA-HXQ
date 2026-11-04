"use client";

import React, { createContext, useContext, useEffect, useState, useMemo, useCallback } from "react";
import {
  Locale,
  uiLabels,
  navItems,
  projectsData,
  stackData,
  processData,
  expertiseData,
  aboutData,
  site,
  StackGroup,
  ProjectItem,
  ExpertiseItem,
} from "@/lib/data";

interface LanguageContextType {
  locale: Locale;
  setLocale: (l: Locale) => void;
  toggleLocale: () => void;
  t: (typeof uiLabels)["id"];
  nav: (typeof navItems)["id"];
  projects: ProjectItem[];
  stack: StackGroup[];
  process: [string, string][];
  expertise: ExpertiseItem[];
  about: (typeof aboutData)["id"];
  siteTitle: string;
  siteHeadline: string;
  siteDescription: string;
  siteLocation: string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("id");

  useEffect(() => {
    try {
      const saved = localStorage.getItem("ath_locale") as Locale | null;
      if (saved === "id" || saved === "en") {
        setLocaleState(saved);
      }
    } catch {
      // localStorage may fail in restricted environments
    }
  }, []);

  const setLocale = useCallback((l: Locale) => {
    setLocaleState(l);
    try {
      localStorage.setItem("ath_locale", l);
      document.documentElement.lang = l;
    } catch {
      // ignore
    }
  }, []);

  const toggleLocale = useCallback(() => {
    setLocaleState((prev) => {
      const next = prev === "id" ? "en" : "id";
      try {
        localStorage.setItem("ath_locale", next);
        document.documentElement.lang = next;
      } catch {
        // ignore
      }
      return next;
    });
  }, []);

  const value = useMemo<LanguageContextType>(() => {
    return {
      locale,
      setLocale,
      toggleLocale,
      t: uiLabels[locale],
      nav: navItems[locale],
      projects: projectsData[locale],
      stack: stackData[locale],
      process: processData[locale],
      expertise: expertiseData[locale],
      about: aboutData[locale],
      siteTitle: site.title[locale],
      siteHeadline: site.headline[locale],
      siteDescription: site.description[locale],
      siteLocation: site.location[locale],
    };
  }, [locale, setLocale, toggleLocale]);

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return ctx;
}
