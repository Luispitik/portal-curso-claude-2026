# Portal Curso Claude 2026

## What
Portal de entregables para el curso "De 0 a Sistema: Claude Chat, Claude Code y Claude Cowork".
Los alumnos acceden a infografias, HTMLs descargables, cheatsheets, autoevaluaciones y recursos organizados por seccion.

## Stack
- Next.js 16 (App Router, Server Components)
- Tailwind CSS v4 (design tokens via @theme inline)
- MDX (next-mdx-remote + gray-matter) para contenido de secciones
- Framer Motion para animaciones sutiles
- Supabase para tracking de descargas (no auth, no login)
- Deploy: Vercel auto-deploy desde git push

## Structure
- `src/content/secciones/*.mdx` — contenido de cada seccion con frontmatter
- `public/entregables/v{N}/` — archivos descargables por seccion
- `src/lib/sections.ts` — loader MDX
- `src/lib/supabase.ts` — client singleton server-side
- `src/app/api/track-download/` — POST endpoint para registrar descargas

## Design
- Dark theme: bg-primary #0d0d1a, accent #e94560
- Font: Inter (display + body)
- 6 secciones en 3 bloques: Fundamentos, El Sistema, Practica

## Rules
- No auth, no login, no newsletter, no chatbot, no payments
- Entregables se sirven como static files desde /public/entregables/
- Tracking de descargas es fire-and-forget (no bloquea la descarga)
- Nuevo archivo + git push = aparece automaticamente en el portal
