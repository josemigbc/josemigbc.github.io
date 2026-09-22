import type { ReactNode } from "react";

export function Section({ id, title, children }: { id: string; title: string; children: ReactNode }) {
  return (
    <section id={id} className="mx-auto max-w-4xl scroll-mt-20 border-t border-line px-6 py-14 dark:border-line-dark">
      <h2 className="font-display text-2xl text-ink dark:text-bone">{title}</h2>
      <div className="mt-8">{children}</div>
    </section>
  );
}
