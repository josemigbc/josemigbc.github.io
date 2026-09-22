import type { Translation } from "./types";

export const en: Translation = {
  meta: { title: "José Miguel Cárdenas Fernández" },
  nav: {
    about: "About",
    experience: "Experience",
    education: "Education",
    skills: "Skills",
    projects: "Projects",
    contact: "Contact",
  },
  hero: {
    kicker: "José Miguel Cárdenas Fernández",
    role: "Backend Developer",
    tagline:
      "From characterizing proteins in a lab to architecting backend systems: same method, different material.",
    location: "São Paulo, Brazil",
    cta: "See experience",
  },
  about: {
    title: "About me",
    paragraphs: [
      "Mid-senior backend developer with over three and a half years of professional experience at Lexdoka, a Spanish company, working remotely from São Paulo.",
      "Before software, I trained as a biochemist at the University of Havana, where I spent two years researching at the Center of Molecular Immunology. That stage left me with a way of thinking: hypothesis, method, verification. I apply it today to designing and maintaining backend systems, with the range to take a product from start to finish.",
    ],
  },
  experience: {
    title: "Experience",
    items: [
      {
        period: "Present · 3.5 years",
        role: "Backend Developer (Mid-Senior)",
        org: "Lexdoka",
        location: "Spain · remote",
        bullets: [
          "Part of the development team for the Lexdoka Audit project.",
          "Responsible for the ongoing maintenance of the company's pages.",
          "End-to-end work: backend, frontend, deployment and CI/CD.",
        ],
      },
    ],
  },
  education: {
    title: "Education",
    items: [
      {
        period: "Thesis presented in 2024",
        role: "B.Sc. in Biochemistry and Molecular Biology",
        org: "University of Havana",
        location: "Havana, Cuba",
        bullets: [
          "Two-year research internship at the Center of Molecular Immunology of Havana.",
          "Graduation thesis on protein characterization through analytical techniques.",
        ],
      },
    ],
  },
  skills: {
    title: "Skills",
    groups: [
      { label: "Backend", items: ["Python", "Django", "Django REST Framework", "PostgreSQL", "Redis", "Celery"] },
      { label: "Frontend", items: ["JavaScript", "TypeScript", "React", "Next.js"] },
      { label: "Infrastructure", items: ["VPS deployment (SSH)", "CI/CD"] },
    ],
  },
  projects: {
    title: "Projects",
    emptyTitle: "Coming soon",
    emptyBody: "This section is ready for projects, each with a description, stack and link.",
  },
  contact: {
    title: "Contact",
    body: "Let's talk about an opportunity or a project.",
    emailLabel: "Email",
    phoneLabel: "Phone",
    whatsappMessage: "Hi José, I saw your portfolio and would like to get in touch.",
  },
  footer: {
    text: "Handcrafted by José Miguel Cárdenas Fernández.",
  },
};
