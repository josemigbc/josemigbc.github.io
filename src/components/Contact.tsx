import { useLanguage } from "../i18n/LanguageContext";
import { Section } from "./Section";
import { socialLinks } from "../data/links";

const EMAIL = "josemiguelspbr@gmail.com";
const PHONE = "+55 11 91870-8701";
const WHATSAPP_NUMBER = "5511918708701";

export function Contact() {
  const { t } = useLanguage();
  const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(t.contact.whatsappMessage)}`;

  return (
    <Section id="contact" title={t.contact.title}>
      <p className="max-w-md text-ink-soft dark:text-bone-soft">{t.contact.body}</p>

      <dl className="mt-6 space-y-3">
        <div className="flex items-baseline gap-3">
          <dt className="w-20 shrink-0 text-sm text-ink-soft dark:text-bone-soft">{t.contact.emailLabel}</dt>
          <dd>
            <a href={`mailto:${EMAIL}`} className="text-ink underline decoration-line underline-offset-4 transition-colors hover:text-teal hover:decoration-teal dark:text-bone dark:hover:text-teal-dark">
              {EMAIL}
            </a>
          </dd>
        </div>
        <div className="flex items-baseline gap-3">
          <dt className="w-20 shrink-0 text-sm text-ink-soft dark:text-bone-soft">{t.contact.phoneLabel}</dt>
          <dd>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="text-ink underline decoration-line underline-offset-4 transition-colors hover:text-teal hover:decoration-teal dark:text-bone dark:hover:text-teal-dark"
            >
              {PHONE}
            </a>
          </dd>
        </div>
      </dl>

      {socialLinks.length > 0 && (
        <div className="mt-6 flex flex-wrap gap-4">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.url}
              target="_blank"
              rel="noreferrer"
              className="text-sm text-ink-soft underline decoration-line underline-offset-4 transition-colors hover:text-teal hover:decoration-teal dark:text-bone-soft dark:hover:text-teal-dark"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </Section>
  );
}
