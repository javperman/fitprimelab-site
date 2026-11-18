# AGENTS.md — Fit Prime Lab

Plataforma multilingüe de fitness (EN/ES/PT/JA) con Astro: herramientas interactivas,
blog y recursos. Sitio estático; sin backend propio.

## Stack

- Astro 6 + MDX + sitemap; TypeScript 5.9.
- Node >= 22.12.
- Contenido: herramientas en JSON y blog en MDX bajo `src/content/`.

## Comandos

| Comando | Qué hace |
|---|---|
| `npm install` | instala dependencias |
| `npm run dev` | servidor local |
| `npm run build` | build a `dist/` |
| `npm run preview` | previsualiza el build |
| `npm run check` | comprobación de tipos/Astro |

## Estructura

- `src/pages/` — rutas con i18n (`en`, `es`, `pt`, `ja`).
- `src/components/`, `src/layouts/`, `src/lib/`, `src/styles/`.
- `src/content/tools/` (JSON) y `src/content/blog/` (MDX).
- `docs/` — documentación del proyecto; `public/` — estáticos.

## Reglas

1. **Cuatro idiomas:** todo cambio de contenido debe cubrir EN/ES/PT/JA o dejar el hueco marcado.
2. Ejecutar `npm run check` antes de commitear; `npm run build` si se toca routing o contenido.
3. No commitear `dist/`, `node_modules/` ni secretos.
4. El contexto del proyecto está en `docs/project-context.md` y `docs/copilot-rules.md`.
5. Commits en inglés, mensajes cortos y descriptivos.
