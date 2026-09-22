export type Lang = "es" | "en" | "pt";

export interface TimelineItem {
  period: string;
  role: string;
  org: string;
  location: string;
  bullets: string[];
}

export interface SkillGroup {
  label: string;
  items: string[];
}

export interface Translation {
  meta: {
    title: string;
  };
  nav: {
    about: string;
    experience: string;
    education: string;
    skills: string;
    projects: string;
    contact: string;
  };
  hero: {
    kicker: string;
    role: string;
    tagline: string;
    location: string;
    cta: string;
  };
  about: {
    title: string;
    paragraphs: string[];
  };
  experience: {
    title: string;
    items: TimelineItem[];
  };
  education: {
    title: string;
    items: TimelineItem[];
  };
  skills: {
    title: string;
    groups: SkillGroup[];
  };
  projects: {
    title: string;
    emptyTitle: string;
    emptyBody: string;
  };
  contact: {
    title: string;
    body: string;
    emailLabel: string;
    phoneLabel: string;
    whatsappMessage: string;
  };
  footer: {
    text: string;
  };
}
