import type { Translation } from "./types";

export const es: Translation = {
  meta: { title: "José Miguel Cárdenas Fernández" },
  nav: {
    about: "Sobre mí",
    experience: "Experiencia",
    education: "Educación",
    skills: "Habilidades",
    projects: "Proyectos",
    contact: "Contacto",
  },
  hero: {
    kicker: "José Miguel Cárdenas Fernández",
    role: "Desarrollador Backend",
    tagline:
      "De la caracterización de proteínas en un laboratorio a la arquitectura de sistemas backend: mismo método, distinto material de trabajo.",
    location: "São Paulo, Brasil",
    cta: "Ver experiencia",
  },
  about: {
    title: "Sobre mí",
    paragraphs: [
      "Desarrollador backend mid-senior con más de tres años y medio de experiencia profesional en Lexdoka, una empresa española, trabajando de forma remota desde São Paulo.",
      "Antes de dedicarme al software, me formé como bioquímico en la Universidad de La Habana, donde pasé dos años investigando en el Centro de Inmunología Molecular. Esa etapa me dejó una forma de pensar: hipótesis, método, verificación. Hoy la aplico a diseñar y mantener sistemas backend, con capacidad de llevar un producto de principio a fin.",
    ],
  },
  experience: {
    title: "Experiencia",
    items: [
      {
        period: "Actualidad · 3 años y medio",
        role: "Desarrollador Backend (Mid-Senior)",
        org: "Lexdoka",
        location: "España · remoto",
        bullets: [
          "Parte del equipo de desarrollo del proyecto Lexdoka Audit.",
          "Responsable del mantenimiento continuo de las páginas de la empresa.",
          "Trabajo end-to-end: backend, frontend, despliegue y CI/CD.",
        ],
      },
    ],
  },
  education: {
    title: "Educación",
    items: [
      {
        period: "Tesis presentada en 2024",
        role: "Licenciatura en Bioquímica y Biología Molecular",
        org: "Universidad de La Habana",
        location: "La Habana, Cuba",
        bullets: [
          "Dos años de pasantía de investigación en el Centro de Inmunología Molecular de La Habana.",
          "Tesis de graduación sobre caracterización de proteínas por técnicas analíticas.",
        ],
      },
    ],
  },
  skills: {
    title: "Habilidades",
    groups: [
      { label: "Backend", items: ["Python", "Django", "Django REST Framework", "PostgreSQL", "Redis", "Celery"] },
      { label: "Frontend", items: ["JavaScript", "TypeScript", "React", "Next.js"] },
      { label: "Infraestructura", items: ["Despliegue en VPS (SSH)", "CI/CD"] },
    ],
  },
  projects: {
    title: "Proyectos",
    emptyTitle: "Próximamente",
    emptyBody: "Esta sección está lista para sumar proyectos con su descripción, stack y enlace.",
  },
  contact: {
    title: "Contacto",
    body: "¿Hablamos de una oportunidad o un proyecto?",
    emailLabel: "Email",
    phoneLabel: "Teléfono",
    whatsappMessage: "Hola José, vi tu portafolio y me gustaría contactarte.",
  },
  footer: {
    text: "Hecho a mano por José Miguel Cárdenas Fernández.",
  },
};
