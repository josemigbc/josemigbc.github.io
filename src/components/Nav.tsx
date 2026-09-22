import { useEffect, useRef, useState } from "react";
import { useLanguage } from "../i18n/LanguageContext";
import { useTheme } from "../theme/ThemeContext";
import { useActiveSection } from "../hooks/useActiveSection";
import type { Lang } from "../i18n/types";

const SECTION_IDS = ["about", "experience", "education", "skills", "projects", "contact"];
const LANGS: Lang[] = ["es", "en", "pt"];

export function Nav() {
  const { lang, setLang, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const active = useActiveSection(SECTION_IDS);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const tabs: { id: string; label: string }[] = [
    { id: "about", label: t.nav.about },
    { id: "experience", label: t.nav.experience },
    { id: "education", label: t.nav.education },
    { id: "skills", label: t.nav.skills },
    { id: "projects", label: t.nav.projects },
    { id: "contact", label: t.nav.contact },
  ];

  const activeTab = tabs.find((tab) => tab.id === active) ?? tabs[0];

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (!menuOpen) return;
    const onClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) setMenuOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("mousedown", onClickOutside);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClickOutside);
      document.removeEventListener("keydown", onKey);
    };
  }, [menuOpen]);

  return (
    <header className="sticky top-0 z-40 bg-paper/90 backdrop-blur-sm dark:bg-void/90">
      <div className="mx-auto flex max-w-4xl items-center justify-between gap-3 px-6 py-3">
        <a
          href="#top"
          className="whitespace-nowrap font-display text-lg text-ink dark:text-bone"
          onClick={(e) => {
            e.preventDefault();
            setMenuOpen(false);
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          JMCF
        </a>

        {/* Desktop tabs */}
        <nav className="hide-scrollbar hidden min-w-0 gap-1 overflow-x-auto sm:flex" aria-label="Section navigation">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => scrollTo(tab.id)}
              className={`shrink-0 border-b-2 px-2.5 py-2 text-sm transition-colors duration-300 ${
                active === tab.id
                  ? "border-teal text-ink dark:text-bone"
                  : "border-transparent text-ink-soft hover:text-ink dark:text-bone-soft dark:hover:text-bone"
              }`}
              aria-current={active === tab.id ? "true" : undefined}
            >
              {tab.label}
            </button>
          ))}
        </nav>

        {/* Mobile dropdown trigger */}
        <div ref={menuRef} className="relative min-w-0 sm:hidden">
          <button
            onClick={() => setMenuOpen((v) => !v)}
            aria-expanded={menuOpen}
            aria-haspopup="true"
            className="flex items-center gap-1.5 truncate border-b-2 border-teal px-2 py-2 text-sm text-ink transition-colors duration-300 dark:text-bone"
          >
            <span key={activeTab.id} className="label-fade truncate">
              {activeTab.label}
            </span>
            <ChevronIcon open={menuOpen} />
          </button>

          {menuOpen && (
            <nav
              aria-label="Section navigation"
              className="absolute left-0 top-full mt-1 min-w-40 overflow-hidden rounded-lg border border-line bg-paper shadow-lg dark:border-line-dark dark:bg-void"
            >
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => scrollTo(tab.id)}
                  aria-current={active === tab.id ? "true" : undefined}
                  className={`block w-full px-4 py-2.5 text-left text-sm transition-colors duration-300 ${
                    active === tab.id
                      ? "text-teal dark:text-teal-dark"
                      : "text-ink-soft hover:bg-paper-dim hover:text-ink dark:text-bone-soft dark:hover:bg-void-dim dark:hover:text-bone"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </nav>
          )}
        </div>

        <div className="flex shrink-0 items-center gap-3">
          <div className="flex items-center gap-0.5 font-mono text-xs">
            {LANGS.map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                aria-pressed={lang === l}
                className={`rounded px-1.5 py-1 uppercase transition-colors ${
                  lang === l
                    ? "text-teal dark:text-teal-dark"
                    : "text-ink-soft hover:text-ink dark:text-bone-soft dark:hover:text-bone"
                }`}
              >
                {l}
              </button>
            ))}
          </div>
          <button
            onClick={toggleTheme}
            aria-label={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
            className="flex h-8 w-8 items-center justify-center rounded-full text-ink-soft transition-colors hover:text-ink dark:text-bone-soft dark:hover:text-bone"
          >
            {theme === "light" ? <MoonIcon /> : <SunIcon />}
          </button>
        </div>
      </div>
    </header>
  );
}

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className={`shrink-0 transition-transform ${open ? "rotate-180" : ""}`}
    >
      <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
      <path d="M21 12.5A9 9 0 1 1 11.5 3a7 7 0 0 0 9.5 9.5Z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function SunIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
      <circle cx="12" cy="12" r="4.5" />
      <path
        d="M12 2.5v2M12 19.5v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M2.5 12h2M19.5 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"
        strokeLinecap="round"
      />
    </svg>
  );
}
