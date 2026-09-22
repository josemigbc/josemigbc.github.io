import { useLanguage } from "../i18n/LanguageContext";
import { Section } from "./Section";
import { projects } from "../data/projects";

export function Projects() {
  const { t } = useLanguage();

  return (
    <Section id="projects" title={t.projects.title}>
      {projects.length === 0 ? (
        <div className="rounded-lg border border-dashed border-line px-6 py-10 text-center dark:border-line-dark">
          <p className="font-display text-lg text-ink dark:text-bone">{t.projects.emptyTitle}</p>
          <p className="mx-auto mt-2 max-w-sm text-sm text-ink-soft dark:text-bone-soft">
            {t.projects.emptyBody}
          </p>
        </div>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2">
          {projects.map((project) => (
            <a
              key={project.name}
              href={project.url}
              target={project.url ? "_blank" : undefined}
              rel={project.url ? "noreferrer" : undefined}
              className="block rounded-lg border border-line p-5 transition-colors hover:border-teal dark:border-line-dark dark:hover:border-teal-dark"
            >
              <h3 className="font-display text-lg text-ink dark:text-bone">{project.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft dark:text-bone-soft">
                {project.description}
              </p>
              <ul className="mt-3 flex flex-wrap gap-x-3 gap-y-1 font-mono text-xs text-teal dark:text-teal-dark">
                {project.stack.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </a>
          ))}
        </div>
      )}
    </Section>
  );
}
