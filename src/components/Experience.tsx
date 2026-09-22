import { useLanguage } from "../i18n/LanguageContext";
import { Section } from "./Section";
import { Timeline } from "./Timeline";

export function Experience() {
  const { t } = useLanguage();
  return (
    <Section id="experience" title={t.experience.title}>
      <Timeline items={t.experience.items} />
    </Section>
  );
}
