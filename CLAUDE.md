# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Static HTML site for **Consciencia Creativa** (also branded "Ethos & Growth"), a Colombian consulting firm offering strategic planning, leadership workshops, and HR services. All content is in Spanish. No build step — open any `.html` file directly in a browser.

```bash
open index.html                # Main landing page
open planeacion.html           # Strategic planning service
open talleres.html             # Workshops & leadership experiences
open disc-resultados-v2.html   # DISC personality results portal
open dashboard.html            # Authenticated client portal
open talleres/disc.html        # DISC assessment submission form
```

## Pages

| File | Purpose | Auth required |
|------|---------|:---:|
| `index.html` | Landing page — hero, service pillars, about, testimonials | No |
| `planeacion.html` | OKRs/KPIs strategic planning service | No |
| `talleres.html` | Leadership workshops, DISC, burnout prevention | No |
| `quienes-somos.html` | About the team | No |
| `contacto.html` | Contact form | No |
| `reclutamiento.html` | Recruitment service | No |
| `equidad-salarial.html` | Pay equity service | No |
| `talleres/disc.html` | DISC assessment form → posts to n8n webhook | No |
| `disc-resultados-v2.html` | DISC results viewer — fetches from n8n, shows user data | Yes |
| `dashboard.html` | Client portal — shows services per logged-in user | Yes |
| `disc-resultados.html` | DISC results v1 (superseded, keep for reference) | — |

## Shared Auth System (`auth.js` / `auth.css`)

Every page loads Supabase JS, `auth.css`, and `auth.js` (in that order). `auth.js` is a self-contained IIFE that:

1. Creates a singleton Supabase client (project `bwqqvawavawotrryzyys.supabase.co`, anon key hardcoded in file).
2. Injects an auth modal (`#auth-overlay`) into `document.body` at DOMContentLoaded.
3. Calls `getSession()` on load; if logged in, replaces all `button[onclick*="openAuthModal"]` elements in the nav with a user avatar + name + sign-out button.

**Public API** (called from inline `onclick` attributes in HTML):
- `openAuthModal(tab?)` — opens modal to `'login'` (default), `'register'`, or `'forgot'`
- `closeAuthModal()` — closes modal
- `authSignOut()` — signs out and redirects to `index.html`

**Auth guard pattern** (used by `dashboard.html` and `disc-resultados-v2.html`): An `#auth-guard` overlay with a spinner is shown by default. The page's own inline `<script>` calls `getSession()`; if no session, it redirects to `index.html`. Remove the guard only after the session is confirmed.

## Backend Integrations

**Supabase** — email/password auth only. Credentials are in `auth.js`. User metadata fields stored on sign-up: `nombre`, `apellido`, `empresa`, `full_name`.

**n8n Cloud** (`andanasrubram.app.n8n.cloud`) — two webhooks:
- `/webhook/analisis-disc` — receives DISC form submission from `talleres/disc.html`
- `/webhook/obtener-resultados` — returns DISC results for the logged-in user (fetched by `disc-resultados-v2.html`)

> Note: `disc-resultados-v2.html` currently points to the `-test` variant of the results webhook. Switch to `/webhook/obtener-resultados` for production.

The file `n8n-workflow-nuevo-registro.json` is the exported n8n workflow for new user registration — import it directly into n8n Cloud.

## Design System

**Source of truth:** `DESIGN.md` (YAML). When changing tokens, update `DESIGN.md` first, then propagate.

**Color roles:**
- `primary` `#0b1a30` — dark navy, headings and brand
- `secondary` `#436653` — forest green, CTAs and accents
- `tertiary` `#e07a5f` — coral/salmon, primary action buttons

**Typography:** `Source Serif 4` for display/headlines; `Inter` for body, labels, UI.

**Spacing:** `container-max: 1280px`, `margin-desktop: 48px`, `margin-mobile: 16px`, `gutter: 24px`

### Tailwind vs. Vanilla CSS

**Tailwind CDN** (`index.html`, `planeacion.html`, `talleres.html`, `dashboard.html`, `contacto.html`, `quienes-somos.html`, `reclutamiento.html`, `equidad-salarial.html`): each file contains an inline `<script id="tailwind-config">` block mapping design tokens to utility classes (`text-primary`, `bg-secondary`, etc.). `index.html` carries the full token set; inner pages carry a trimmed subset.

**Vanilla CSS** (`disc-resultados-v2.html`, `auth.css`): `--variable` tokens in `:root`, no Tailwind. Prefer this for standalone portal pages.

The Tailwind config is **duplicated** across all Tailwind pages — update each `tailwind-config` script when tokens change.

### Icons

Google Material Symbols Outlined. Usage: `<span class="material-symbols-outlined">icon_name</span>`. Variation globally set to `FILL 0, wght 400`.
