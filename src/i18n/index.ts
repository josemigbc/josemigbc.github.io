import { es } from "./es";
import { en } from "./en";
import { pt } from "./pt";
import type { Lang, Translation } from "./types";

export const translations: Record<Lang, Translation> = { es, en, pt };
export type { Lang, Translation, TimelineItem, SkillGroup } from "./types";

const SUPPORTED: Lang[] = ["es", "en", "pt"];

export function detectBrowserLang(): Lang {
  const nav = navigator.language?.slice(0, 2).toLowerCase();
  return (SUPPORTED as string[]).includes(nav) ? (nav as Lang) : "en";
}
