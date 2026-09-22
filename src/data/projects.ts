export interface Project {
  name: string;
  description: string;
  stack: string[];
  url?: string;
}

// Agregá tus proyectos acá. Ejemplo:
// {
//   name: "Feed Pipe",
//   description: "App de seguimiento de ingesta diaria de nutrientes.",
//   stack: ["Next.js", "TypeScript", "Django REST Framework"],
//   url: "https://github.com/tu-usuario/feed-pipe",
// },
export const projects: Project[] = [];
