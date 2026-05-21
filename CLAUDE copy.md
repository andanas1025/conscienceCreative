# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Static HTML landing site for **Consciencia Creativa** (also branded "Ethos & Growth"), a Colombian consulting firm offering strategic planning, leadership workshops, and HR services. All content is in Spanish.

## Running / Previewing

No build step. Open any `.html` file directly in a browser:

```bash
open "code.html"           # Main landing page
open "planeacion.html"     # Strategic planning service page
open "talleres.html"       # Workshops & leadership experiences
open "disc-resultados-v2.html"  # DISC personality results portal
```

## Architecture

### Pages
| File | Purpose |
|------|---------|
| `code.html` | Main landing page — hero, service pillars, about, testimonials |
| `planeacion.html` | Detail page: OKRs/KPIs strategic planning service |
| `talleres.html` | Detail page: leadership workshops, DISC assessments, burnout prevention |
| `disc-resultados.html` | DISC results portal (v1 — superseded) |
| `disc-resultados-v2.html` | DISC results portal (v2 — current) |

### Two styling approaches in use

**Tailwind CDN** (`code.html`, `planeacion.html`, `talleres.html`): each file loads Tailwind via CDN and includes an inline `<script id="tailwind-config">` block that maps the design tokens into Tailwind utility classes (e.g., `text-primary`, `bg-secondary`, `font-headline-lg`).

**Vanilla CSS with custom properties** (`disc-resultados-v2.html`): uses `--variable` tokens defined in `:root` directly, without Tailwind. Prefer this approach for standalone portal pages.

### Design System (`DESIGN.md`)

The source of truth for all design tokens is `DESIGN.md` (YAML format). When changing colors, spacing, or typography, update `DESIGN.md` first, then propagate to the relevant files.

**Color roles:**
- `primary` `#0b1a30` — dark navy, headings and brand
- `secondary` `#436653` — forest green, CTAs and accents
- `tertiary` `#e07a5f` — coral/salmon, primary action buttons

**Typography:**
- `Source Serif 4` — display and headline text
- `Inter` — body, labels, UI text

**Key spacing:**
- `container-max: 1280px`, `margin-desktop: 48px`, `margin-mobile: 16px`, `gutter: 24px`

### Updating Tailwind config

The Tailwind config is **duplicated** in every Tailwind-based page. When adding or changing design tokens, update the `<script id="tailwind-config">` block in each HTML file as well as `DESIGN.md`. The full token set lives in `code.html`; the inner pages (`planeacion.html`, `talleres.html`) carry a trimmed subset — only add tokens a page actually uses.

### Icons

Google Material Symbols Outlined. Usage: `<span class="material-symbols-outlined">icon_name</span>`. Font variation is set globally to `FILL 0, wght 400`.
