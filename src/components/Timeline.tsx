import type { TimelineItem } from "../i18n/types";

export function Timeline({ items }: { items: TimelineItem[] }) {
  return (
    <ol className="space-y-10">
      {items.map((item, i) => (
        <li key={i} className="relative pl-6">
          <span className="absolute left-0 top-1.5 h-2 w-2 rounded-full bg-teal dark:bg-teal-dark" />
          {i < items.length - 1 && (
            <span className="absolute left-[3px] top-4 h-[calc(100%+1.5rem)] w-px bg-line dark:bg-line-dark" />
          )}
          <p className="font-mono text-xs uppercase tracking-wide text-ink-soft dark:text-bone-soft">
            {item.period}
          </p>
          <h3 className="mt-1 font-display text-lg text-ink dark:text-bone">{item.role}</h3>
          <p className="text-sm text-teal dark:text-teal-dark">
            {item.org} <span className="text-ink-soft dark:text-bone-soft">· {item.location}</span>
          </p>
          <ul className="mt-3 space-y-1.5 text-[0.95rem] leading-relaxed text-ink-soft dark:text-bone-soft">
            {item.bullets.map((b, j) => (
              <li key={j} className="flex gap-2">
                <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-ink-soft dark:bg-bone-soft" />
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ol>
  );
}
