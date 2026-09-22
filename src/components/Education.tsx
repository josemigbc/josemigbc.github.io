import { useLanguage } from "../i18n/LanguageContext";
import { Section } from "./Section";
import { Timeline } from "./Timeline";

export function Education() {
  const { t } = useLanguage();
  return (
    <Section id="education" title={t.education.title}>
      <Timeline items={t.education.items} />
    </Section>
  );
}
