# Fit Prime Lab 🏋️

Plataforma de fitness multilingüe construida con Astro. Incluye herramientas interactivas, contenido editorial y recursos de entrenamiento con base científica.

[English](README.md)

## Características

- **Herramientas interactivas** — calculadoras, conversores y analizadores.
- **Blog educativo** — guías y artículos de fitness.
- **Soporte multilingüe** — inglés, español, portugués y japonés.
- **Rendimiento** — generación estática con Astro.
- **SEO** — contenido estructurado y marcado de esquema.
- **Diseño responsive** — móvil, tablet y escritorio.

## Arquitectura

```text
fitprimelab/
├── src/
│   ├── components/      # Componentes Astro reutilizables
│   ├── layouts/         # Layouts de página
│   ├── pages/           # Rutas dinámicas con i18n
│   ├── content/         # Herramientas (JSON) y blog (MDX)
│   ├── lib/             # Funciones auxiliares
│   └── styles/          # Estilos globales
├── docs/                # Documentación
└── public/              # Assets estáticos
```

## Idiomas

- Inglés (`/en/`)
- Español (`/es/`)
- Portugués (`/pt/`)
- Japonés (`/ja/`)

## Desarrollo

```bash
npm install
npm run dev
npm run build
npm run preview
```

## Stack

Astro, TypeScript, contenido MDX/JSON, CSS, generación estática.

## Licencia

El código está bajo **PolyForm Noncommercial 1.0.0**. Ver [`LICENSE`](LICENSE).
El contenido editorial, las marcas y los assets gráficos son © Javier Pérez Manzano / FitPrimeLab; no se conceden derechos comerciales sobre ellos.

## Enlaces

- Web: [fitprimelab.com](https://fitprimelab.com)
- Código: [github.com/javperman/fitprimelab-site](https://github.com/javperman/fitprimelab-site)
