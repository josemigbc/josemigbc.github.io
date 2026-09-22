import { useLanguage } from "../i18n/LanguageContext";

export function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="mx-auto max-w-4xl px-6 py-10">
      <p className="font-mono text-xs text-ink-soft dark:text-bone-soft">{t.footer.text}</p>
    </footer>
  );
}
