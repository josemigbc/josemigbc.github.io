import type { Translation } from "./types";

export const pt: Translation = {
  meta: { title: "José Miguel Cárdenas Fernández" },
  nav: {
    about: "Sobre mim",
    experience: "Experiência",
    education: "Formação",
    skills: "Habilidades",
    projects: "Projetos",
    contact: "Contato",
  },
  hero: {
    kicker: "José Miguel Cárdenas Fernández",
    role: "Desenvolvedor Backend",
    tagline:
      "Da caracterização de proteínas em laboratório à arquitetura de sistemas backend: mesmo método, material diferente.",
    location: "São Paulo, Brasil",
    cta: "Ver experiência",
  },
  about: {
    title: "Sobre mim",
    paragraphs: [
      "Desenvolvedor backend pleno-sênior com mais de três anos e meio de experiência profissional na Lexdoka, empresa espanhola, trabalhando remotamente a partir de São Paulo.",
      "Antes do software, me formei bioquímico na Universidade de Havana, onde passei dois anos pesquisando no Centro de Imunologia Molecular. Essa etapa me deixou uma forma de pensar: hipótese, método, verificação. Hoje aplico isso ao projetar e manter sistemas backend, com capacidade de conduzir um produto do início ao fim.",
    ],
  },
  experience: {
    title: "Experiência",
    items: [
      {
        period: "Atualidade · 3 anos e meio",
        role: "Desenvolvedor Backend (Pleno-Sênior)",
        org: "Lexdoka",
        location: "Espanha · remoto",
        bullets: [
          "Parte da equipe de desenvolvimento do projeto Lexdoka Audit.",
          "Responsável pela manutenção contínua das páginas da empresa.",
          "Trabalho ponta a ponta: backend, frontend, deploy e CI/CD.",
        ],
      },
    ],
  },
  education: {
    title: "Formação",
    items: [
      {
        period: "Tese apresentada em 2024",
        role: "Licenciatura em Bioquímica e Biologia Molecular",
        org: "Universidade de Havana",
        location: "Havana, Cuba",
        bullets: [
          "Dois anos de estágio de pesquisa no Centro de Imunologia Molecular de Havana.",
          "Tese de graduação sobre caracterização de proteínas por técnicas analíticas.",
        ],
      },
    ],
  },
  skills: {
    title: "Habilidades",
    groups: [
      { label: "Backend", items: ["Python", "Django", "Django REST Framework", "PostgreSQL", "Redis", "Celery"] },
      { label: "Frontend", items: ["JavaScript", "TypeScript", "React", "Next.js"] },
      { label: "Infraestrutura", items: ["Deploy em VPS (SSH)", "CI/CD"] },
    ],
  },
  projects: {
    title: "Projetos",
    emptyTitle: "Em breve",
    emptyBody: "Esta seção está pronta para receber projetos, cada um com descrição, stack e link.",
  },
  contact: {
    title: "Contato",
    body: "Vamos conversar sobre uma oportunidade ou um projeto?",
    emailLabel: "Email",
    phoneLabel: "Telefone",
    whatsappMessage: "Olá José, vi seu portfólio e gostaria de entrar em contato.",
  },
  footer: {
    text: "Feito à mão por José Miguel Cárdenas Fernández.",
  },
};
