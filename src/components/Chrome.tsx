"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import { Menu, X, Globe } from "lucide-react";
import { site } from "@/lib/data";
import { useLanguage } from "@/context/LanguageContext";

export default function Chrome() {
  const [active, setActive] = useState("hero");
  const [menuOpen, setMenuOpen] = useState(false);
  const [initialLoading, setInitialLoading] = useState(true);
  const { nav, locale, toggleLocale, t } = useLanguage();
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 25 });

  // Initial loader
  useEffect(() => {
    const timer = setTimeout(() => setInitialLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  // Section observer for active nav indicator
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: "-35% 0px -55% 0px" }
    );

    nav.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [nav]);

  // Mobile menu: Esc listener & body scroll lock
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape" && menuOpen) {
        setMenuOpen(false);
      }
    },
    [menuOpen]
  );

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
      // Focus first element in menu
      const firstFocusable = mobileMenuRef.current?.querySelector<HTMLElement>(
        "a, button"
      );
      firstFocusable?.focus();
    } else {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [menuOpen, handleKeyDown]);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string
  ) => {
    e.preventDefault();
    setMenuOpen(false);
    const targetEl = document.getElementById(targetId);
    if (targetEl) {
      const headerOffset = 80;
      const elementPosition = targetEl.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      // update URL hash without jump
      history.pushState(null, "", `#${targetId}`);
    }
  };

  return (
    <>
      {/* Skip to Content for keyboard accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-full focus:bg-accent focus:px-5 focus:py-2.5 focus:font-medium focus:text-white focus:shadow-lg focus:outline-none"
      >
        {t.skipToContent}
      </a>

      {/* Page Load Intro Sequence */}
      <AnimatePresence>
        {initialLoading && (
          <motion.div
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[100] grid place-items-center bg-bg"
            aria-hidden="true"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col items-center gap-3"
            >
              <div className="h-2 w-2 rounded-full bg-accent shadow-[0_0_12px_#4d7cff] animate-ping" />
              <span className="font-display text-sm tracking-widest text-silver uppercase">
                {site.name}
              </span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Top Scroll Progress Bar */}
      <motion.div
        style={{ scaleX }}
        className="fixed left-0 top-0 z-50 h-[2px] w-full origin-left bg-gradient-to-r from-accent via-[#60a5fa] to-accent shadow-[0_0_8px_#4d7cff]"
        aria-hidden="true"
      />

      {/* Floating Header */}
      <header className="fixed inset-x-0 top-4 z-40 mx-auto flex w-[92%] max-w-5xl items-center justify-between glass px-5 py-3 border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
        {/* Brand / Logo */}
        <a
          href="#hero"
          onClick={(e) => handleNavClick(e, "hero")}
          className="group flex items-center gap-2 font-display text-sm font-semibold tracking-wider text-fg transition-colors hover:text-accent"
          aria-label={`${site.name} Home`}
        >
          <span className="h-2 w-2 rounded-full bg-accent shadow-[0_0_8px_#4d7cff] transition-transform group-hover:scale-125" />
          <span>ATH</span>
        </a>

        {/* Desktop Navigation */}
        <nav aria-label="Main Navigation" className="hidden items-center gap-1 md:flex">
          {(nav || []).map((item) => {
            const isCurrent = active === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => handleNavClick(e, item.id)}
                aria-current={isCurrent ? "true" : undefined}
                className={`relative rounded-full px-3 py-1.5 text-xs font-medium transition-colors ${
                  isCurrent
                    ? "text-fg bg-white/10 shadow-[0_1px_0_rgba(255,255,255,0.1)_inset]"
                    : "text-muted hover:text-silver"
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Right Tools: Language Toggle & Mobile Hamburger */}
        <div className="flex items-center gap-3">
          {/* Language Switcher (EN / ID) */}
          <button
            type="button"
            onClick={toggleLocale}
            className="flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-2.5 py-1 text-xs font-mono font-medium text-silver hover:border-accent hover:text-white transition-all duration-200"
            aria-label={`${t.languageToggle}: current ${locale.toUpperCase()}, click to switch`}
            title="Switch Language / Ganti Bahasa"
          >
            <Globe size={13} className="text-accent" />
            <span className={locale === "id" ? "text-accent font-bold" : "text-muted"}>
              ID
            </span>
            <span className="text-white/20">/</span>
            <span className={locale === "en" ? "text-accent font-bold" : "text-muted"}>
              EN
            </span>
          </button>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="grid h-8 w-8 place-items-center rounded-lg border border-white/10 md:hidden text-silver hover:text-fg focus-visible:outline-none focus-visible:border-accent"
            aria-label={menuOpen ? t.menuClose : t.menuOpen}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu-drawer"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay & Drawer */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
              className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm md:hidden"
              aria-hidden="true"
            />
            <motion.nav
              id="mobile-menu-drawer"
              ref={mobileMenuRef}
              aria-label="Mobile Navigation"
              initial={{ opacity: 0, y: -16, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -16, scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="glass fixed inset-x-4 top-20 z-50 flex flex-col gap-1 p-4 md:hidden border border-white/15 shadow-2xl"
            >
              {(nav || []).map((item) => {
                const isCurrent = active === item.id;
                return (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={(e) => handleNavClick(e, item.id)}
                    aria-current={isCurrent ? "true" : undefined}
                    className={`rounded-xl px-4 py-3 text-sm font-medium transition-colors ${
                      isCurrent
                        ? "bg-accent/20 text-accent font-semibold"
                        : "text-silver hover:bg-white/5 hover:text-fg"
                    }`}
                  >
                    {item.label}
                  </a>
                );
              })}

              <div className="mt-3 pt-3 border-t border-white/10 flex items-center justify-between px-2 text-xs text-muted">
                <span>{t.languageToggle}</span>
                <button
                  type="button"
                  onClick={toggleLocale}
                  className="rounded-full border border-white/15 px-3 py-1 font-mono text-xs text-silver hover:border-accent"
                >
                  {locale === "id" ? "Switch to English" : "Ganti ke Indonesia"}
                </button>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
