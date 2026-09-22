import { useLanguage } from "../i18n/LanguageContext";
import { Section } from "./Section";

export function About() {
  const { t } = useLanguage();
  return (
    <Section id="about" title={t.about.title}>
      <div className="max-w-xl space-y-4 leading-relaxed text-ink-soft dark:text-bone-soft">
        {t.about.paragraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
    </Section>
  );
}
