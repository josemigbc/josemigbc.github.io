import { useLanguage } from "../i18n/LanguageContext";
import { SpectralLine } from "./SpectralLine";
import profilePhoto from "../assets/profile.jpg";

export function Hero() {
  const { t } = useLanguage();

  return (
    <section id="top" className="mx-auto max-w-4xl px-6 pb-10 pt-14 sm:pt-20">
      <div className="flex flex-col-reverse items-start gap-10 sm:flex-row sm:items-center sm:justify-between">
        <div className="max-w-xl">
          <p className="mb-3 font-mono text-xs uppercase tracking-wide text-ink-soft dark:text-bone-soft">
            {t.hero.location}
          </p>
          <h1 className="font-display text-4xl leading-[1.08] text-ink sm:text-5xl dark:text-bone">
            {t.hero.kicker}
          </h1>
          <p className="mt-2 font-display text-xl italic text-teal dark:text-teal-dark">{t.hero.role}</p>
          <p className="mt-5 max-w-md text-[1.05rem] leading-relaxed text-ink-soft dark:text-bone-soft">
            {t.hero.tagline}
          </p>
          <a
            href="#experience"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("experience")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="mt-7 inline-flex items-center gap-2 border-b border-ink pb-0.5 text-sm text-ink transition-colors hover:border-teal hover:text-teal dark:border-bone dark:text-bone dark:hover:border-teal-dark dark:hover:text-teal-dark"
          >
            {t.hero.cta}
          </a>
        </div>

        <img
          src={profilePhoto}
          alt={t.hero.kicker}
          className="h-28 w-28 shrink-0 rounded-full object-cover ring-1 ring-line sm:h-36 sm:w-36 dark:ring-line-dark"
        />
      </div>

      <SpectralLine animated className="mt-14 h-10 text-teal dark:text-teal-dark" />
    </section>
  );
}
