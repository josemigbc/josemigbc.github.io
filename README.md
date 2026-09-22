# Portafolio — José Miguel Cárdenas Fernández

Landing page personal (currículum + portafolio). Vite + React + TypeScript + Tailwind CSS v4. 100% estática, sin backend.

## Desarrollo

```bash
yarn install   # instalar deps
yarn dev       # run servidor local dev
yarn build     # genera dist/ listo para hosted en cualquier sitio estático
yarn preview   # sirve dist/ localmente para probar el build
```

## Deploy

`yarn build` genera `dist/`. Ese contenido se puede subir tal cual a Vercel, Netlify, GitHub Pages, o copiarlo a un VPS detrás de nginx/caddy — no requiere servidor Node en producción.

## Agregar proyectos

Edita `src/data/projects.ts` y agrega objetos al array `projects`. En cuanto haya al menos uno, la sección "Proyectos" pasa automáticamente del estado vacío a mostrar las tarjetas.

```json
{
  "name": "Feed Pipe",
  "description": "App de seguimiento de ingesta diaria de nutrientes.",
  "stack": ["Next.js", "TypeScript", "Django REST Framework"],
  "url": "https://github.com/tu-usuario/feed-pipe"
}
```

## Agregar LinkedIn / GitHub / otras redes

Edita `src/data/links.ts` y agrega objetos al array `socialLinks`. Aparecen automáticamente debajo del email y el teléfono en la sección de contacto.

```json
{"label": "LinkedIn", "url": "https://linkedin.com/in/tu-usuario"}
```

## Editar contenido (textos, experiencia, educación, skills)

Todo el contenido en los tres idiomas vive en `src/i18n/es.ts`, `src/i18n/en.ts` y `src/i18n/pt.ts` — son objetos planos, fáciles de editar sin tocar componentes. `src/i18n/types.ts` define la forma que debe tener el contenido en cada idioma.

## Estructura

```
src/
  components/     — secciones y piezas de UI (Hero, Nav, Timeline, etc.)
  data/           — projects.ts y links.ts (contenido que agregás vos)
  i18n/           — traducciones (es/en/pt) + contexto de idioma (persistido en localStorage)
  theme/          — contexto de tema claro/oscuro (persistido en localStorage)
  hooks/          — useActiveSection (scroll-spy para los tabs de navegación)
```

## Idioma y tema

- El idioma se detecta del navegador al primer ingreso (si no es es/en/pt, usa inglés) y luego se persiste en `localStorage` bajo la clave `portfolio-lang`.
- El tema respeta `prefers-color-scheme` al primer ingreso y se persiste en `localStorage` bajo la clave `portfolio-theme`.
