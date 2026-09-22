import { useLanguage } from "../i18n/LanguageContext";
import { Section } from "./Section";

export function Skills() {
  const { t } = useLanguage();
  return (
    <Section id="skills" title={t.skills.title}>
      <div className="grid gap-8 sm:grid-cols-3">
        {t.skills.groups.map((group) => (
          <div key={group.label}>
            <h3 className="text-sm font-medium text-ink dark:text-bone">{group.label}</h3>
            <ul className="mt-3 space-y-1.5">
              {group.items.map((item) => (
                <li key={item} className="font-mono text-sm text-ink-soft dark:text-bone-soft">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
