# PROMPT PARA SESION EN VIVO — Portal de Entregables del Curso Claude 2026

## INSTRUCCIONES PARA LUIS
- Crea una CARPETA NUEVA: "portal-curso-claude-2026"
- Abre Claude Code ahi
- Pega el bloque completo
- Claude construye fase a fase, tu apruebas

---INICIO PROMPT---

Voy a construir en vivo el portal de entregables para mi curso de Claude 2026.
Es una web donde mis alumnos acceden a todo el material organizado por seccion.
Todos los materiales se descargan directamente desde aqui.
NO me hagas preguntas — te doy todo el contexto.

## QUE ES ESTO
Un portal web donde los alumnos de mi curso "De 0 a Sistema: Claude Chat, Claude Code y Claude Cowork" acceden a:
- Infografia resumen de cada seccion
- HTMLs descargables (cheatsheets, checklists, templates, autoevaluaciones)
- Links a los videos
- Recursos extra (CLAUDE.md templates, .mcp.json templates, skills ejemplo)

Cuando yo anado un archivo nuevo y hago git push, aparece en el portal automaticamente.

## STACK
- Next.js 16 (App Router, Server Components)
- Tailwind CSS v4
- MDX para las paginas de contenido (next-mdx-remote + gray-matter)
- Framer Motion (animaciones sutiles)
- Supabase para registro de descargas (tracking simple)
- Deploy: Vercel auto-deploy

## LO QUE NO LLEVA (mantenerlo simple)
- Sin newsletter
- Sin autenticacion / login
- Sin formulario de contacto
- Sin chatbot
- Sin booking
- Sin Stripe/pagos

## ESTRUCTURA
```
src/
  app/
    page.tsx                    (Home: indice del curso con las secciones)
    layout.tsx                  (Root layout)
    globals.css                 (Design tokens)
    secciones/
      [slug]/page.tsx           (Pagina de cada seccion con sus entregables)
    api/
      track-download/route.ts   (Registra descarga en Supabase)
    robots.ts
    sitemap.ts
  components/
    Navigation.tsx
    Footer.tsx
    SectionCard.tsx             (Card de seccion en el indice)
    EntregableCard.tsx          (Card de entregable con boton descargar)
    ProgressBar.tsx             (Barra de progreso visual del curso)
    DownloadButton.tsx          (Boton que descarga + registra en Supabase)
  content/
    secciones/
      v1-bienvenida.mdx
      v2-framework-mental.mdx
      v3-intro-claude-code.mdx
      v4-skills-hooks-plugins.mdx
      v5-synapsis.mdx
      v6-sesion-en-vivo.mdx
  lib/
    sections.ts                 (Loader MDX: getAllSections, getSectionBySlug)
    site-config.ts              (BRAND, DESIGN, SEO)
    supabase.ts                 (Client singleton server-side)
  public/
    entregables/                (Archivos descargables por seccion)
      v1/
        tabla-planes-claude-2026.html
        mapa-ecosistema-claude.html
        checklist-setup.html
        autoevaluacion.html
      v2/
        framework-completo-sesgos-metodologia-ia.html
        sesgos-cognitivos-ia.html
        autoevaluacion.html
      v3/
        checklist-setup.html
        privacidad-datos-seguridad-ia.html
        autoevaluacion.html
      v4/
        ejemplo-skill-whisper.md
        autoevaluacion.html
      v5/
        synapsis-detalle-sesion-a.html
        autoevaluacion.html
      v6/
        roadmap-sesion-vivo.html
        PROMPT-PORTAL-ENTREGABLES-VIVO.md
```

## DESIGN TOKENS
```css
@theme inline {
  --color-bg-primary: #0d0d1a;
  --color-bg-secondary: #16162a;
  --color-bg-card: #1e1e38;
  --color-accent: #e94560;
  --color-accent-secondary: #0f3460;
  --color-success: #2ecc71;
  --color-warning: #f39c12;
  --color-text-primary: #e0e0e0;
  --color-text-secondary: #a0a0b8;
  --color-border: #2a2a4a;
  --font-display: 'Inter';
  --font-body: 'Inter';
}
```

## API ROUTE: /api/track-download (POST)
Registro simple de descargas en Supabase. NO bloquea la descarga.

Flujo:
1. El boton de descarga abre el archivo directamente (window.open o link)
2. En paralelo, hace un POST a /api/track-download con:
   { file: "v1/tabla-planes-claude-2026.html", section: "v1", timestamp: ISO }
3. La API guarda en Supabase tabla "downloads":
   - file (text)
   - section (text)
   - downloaded_at (timestamptz, default now())
   - user_agent (text, del header)
4. Si Supabase falla, no pasa nada — la descarga ya se hizo
5. Rate limit basico: 10/IP/minuto

La tabla en Supabase:
```sql
create table downloads (
  id bigint generated always as identity primary key,
  file text not null,
  section text not null,
  downloaded_at timestamptz default now(),
  user_agent text
);
```

## COMPONENTE DownloadButton
```
<DownloadButton file="/entregables/v1/tabla-planes.html" section="v1" label="Tabla de Planes" type="html" />
```
- Abre el archivo en nueva pestana (HTML) o descarga directa (MD/JSON)
- En background hace fetch a /api/track-download
- Iconos diferentes segun tipo: HTML (icono navegador), MD (icono documento), JSON (icono codigo)
- Animacion sutil al click

## PAGINA HOME (src/app/page.tsx)
1. Hero: "Curso Claude 2026 — Portal de Entregables"
   - Subtitulo: "Todo el material del curso organizado y descargable"
   - Autores: Luis Salgado & Angel Aparicio
   - Badge: "Next Gen AI Institute"
2. Barra de progreso: 6 secciones
3. Grid de secciones en 3 bloques:
   - Bloque 1 "Fundamentos": V1 Bienvenida + V2 Framework Mental
   - Bloque 2 "El Sistema": V3 Claude Code + V4 Skills + V5 Synapsis
   - Bloque 3 "Practica": V6 Sesion en Vivo
4. Cada SectionCard: numero, titulo, subtitulo, numero de entregables, badge de tipo
5. Footer con creditos

## PAGINA DE SECCION (src/app/secciones/[slug]/page.tsx)
1. Header: numero + titulo + subtitulo + duracion + badge tipo
2. Descripcion (del MDX body)
3. Key takeaways: lista de puntos clave
4. Grid de entregables: cada EntregableCard con DownloadButton
5. Tarea de la seccion (highlight box)
6. Navegacion: anterior / siguiente seccion

## FRONTMATTER SCHEMA PARA CADA SECCION
```yaml
---
title: "V1 — Bienvenida al Curso"
slug: "v1-bienvenida"
number: "01"
subtitle: "Planes, modelos y configuracion inicial"
description: "Tour completo por el ecosistema Claude: planes, precios, modelos, interfaz y configuracion de privacidad"
type: "conceptual"
status: "completo"
duration: "~30 min"
entregables:
  - title: "Tabla de Planes Claude 2026"
    type: "html"
    file: "v1/tabla-planes-claude-2026.html"
    description: "Comparativa de planes con precios y features"
  - title: "Mapa del Ecosistema"
    type: "html"
    file: "v1/mapa-ecosistema-claude.html"
    description: "Diagrama visual del ecosistema Claude"
  - title: "Checklist de Setup"
    type: "html"
    file: "v1/checklist-setup.html"
    description: "Pasos para configurar Claude correctamente"
  - title: "Autoevaluacion"
    type: "html"
    file: "v1/autoevaluacion.html"
    description: "8 preguntas para verificar lo aprendido"
keyTakeaways:
  - "Plan Pro ($20) es el minimo para aprovechar el curso"
  - "Desactivar 'Ayudar a mejorar Claude' inmediatamente"
  - "Opus para planificar, Sonnet para ejecutar, Haiku para tareas rapidas"
  - "El millon de tokens de contexto es un game changer"
tarea: "Configura tu cuenta de Claude: desactiva entrenamiento, explora conectores, revisa la interfaz completa"
---
```

## DATOS DE LAS 6 SECCIONES

V1 — Bienvenida al Curso
- Subtitle: Planes, modelos y configuracion inicial
- Duration: ~30 min
- Type: conceptual
- Entregables: tabla-planes, mapa-ecosistema, checklist-setup, autoevaluacion
- Takeaways: Plan Pro minimo, desactivar entrenamiento, Opus/Sonnet/Haiku, millon tokens

V2 — Framework Mental
- Subtitle: Tu cabeza importa mas que la herramienta
- Duration: ~30 min
- Type: framework
- Entregables: framework-completo-sesgos, sesgos-cognitivos, autoevaluacion
- Takeaways: 8 sesgos, System 1/2, pensamiento critico vs criterio, tarjeta anti-sesgos

V3 — Introduccion a Claude Code
- Subtitle: Tu becario brillante con acceso total
- Duration: ~30 min
- Type: practico
- Entregables: checklist-setup, privacidad-datos-seguridad, autoevaluacion
- Takeaways: Es un agente no un chat, 5 pilares, entrevista 7 ambitos, IA para aprender

V4 — Skills, Hooks y Plugins
- Subtitle: La receta, la campana y la franquicia
- Duration: ~30 min
- Type: sistema
- Entregables: ejemplo-skill-whisper, autoevaluacion
- Takeaways: 4 niveles CLAUDE.md, analogia cocina, proyecto desde cero, nunca main directo

V5 — Synapsis
- Subtitle: Tu cerebro operativo en Claude
- Duration: ~15 min
- Type: avanzado
- Entregables: synapsis-detalle, autoevaluacion
- Takeaways: 4 capas, confidence scoring, Evolve real, no repetir lo mismo dos veces

V6 — Sesion en Vivo
- Subtitle: Construir el portal en directo
- Duration: ~65 min
- Type: proyecto
- Entregables: roadmap-sesion, prompt-portal
- Takeaways: MCP en vivo, vibecoding real, deploy, auto-publicacion, proyecto a skill

## VARIABLES DE ENTORNO (.env.local)
```
# Supabase (registro descargas)
SUPABASE_URL=
SUPABASE_SERVICE_ROLE_KEY=
```

.env.local DEBE estar en .gitignore.

## PLAN DE EJECUCION (seguir este orden)

FASE 1 — Estructura (commit: "feat: initial project structure")
- Crear Next.js 16 project
- Instalar deps: next-mdx-remote, gray-matter, framer-motion, @supabase/supabase-js
- Design tokens en globals.css
- Layout con fonts + metadata
- CLAUDE.md del proyecto

FASE 2 — Loader + contenido (commit: "feat: section loader and MDX content")
- src/lib/sections.ts
- 6 archivos .mdx en src/content/secciones/
- src/lib/supabase.ts (client singleton)

FASE 3 — Componentes (commit: "feat: UI components")
- Navigation, Footer, SectionCard, EntregableCard, ProgressBar, DownloadButton

FASE 4 — Paginas (commit: "feat: home and section pages")
- Home con hero + progreso + grid 3 bloques
- Pagina de seccion con entregables + tarea + nav

FASE 5 — API tracking (commit: "feat: download tracking API")
- /api/track-download con Supabase + rate limit basico
- Conectar DownloadButton al API

FASE 6 — SEO + Deploy (commit: "feat: SEO, sitemap, deploy")
- robots.ts + sitemap.ts
- Metadata OpenGraph
- Verificar .gitignore
- Push → Vercel

Empieza por FASE 1. Commit entre cada fase con conventional commits.
Dime cuando termines cada fase para que apruebe.

---FIN PROMPT---
