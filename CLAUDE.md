# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Portfolio for Laetitia Roux, a nature/environment writer.
- **Site**: https://laetitiaroux-redaction.com
- **Baseline**: "J'écris pour vous sur la nature"
- **Hosting**: Infomaniak (shared hosting via Git deployment)

## Tech Stack

- **Framework**: Astro (static site generation)
- **Styling**: Tailwind CSS
- **Content**: Markdown files in `src/content/`
- **Deployment**: Git push to Infomaniak, or build locally + rsync/FTP of `dist/`

## Commands

```bash
npm run dev      # Dev server
npm run build    # Static build to dist/
npm run preview  # Preview the build
```

## Content Collections

Three Astro content collections in `src/content/`:

| Collection | Path | Description |
|------------|------|-------------|
| `portfolio` | `src/content/portfolio/` | Professional articles (article or PDF type) |
| `textes` | `src/content/textes/` | Personal writings (poems, short texts) |
| `pages` | `src/content/pages/` | Static pages (livre, a-propos, contact) |

### Frontmatter Schemas

**Portfolio** (`type: "article" | "pdf"`):
```yaml
title: "Title"
description: "Short description"
image: "/images/portfolio/name.webp"
date: 2024-01-15
type: "article"
client: "Client name"  # optional
pdfUrl: "/pdf/name.pdf"  # required if type: pdf
```

**Textes** (`category: "poème" | "texte court" | "réflexion"`):
```yaml
title: "Title"
description: "Tagline"
image: "/images/textes/name.webp"
date: 2024-01-15
category: "poème"
```

## External Integrations

- **Substack RSS**: `https://laetitiaroux.substack.com/feed` - fetch at build time for homepage
- **Social links**: Instagram, LinkedIn (footer icons, external links only)

## Design Requirements

**Mandatory style direction:**
- Color palette: forest greens (#4a6741 primary), off-white (#faf9f7 bg), dark green accents
- Typography: Serif for headings (Cormorant Garamond), sans-serif for body (Source Sans 3)
- Generous whitespace, large nature imagery, subtle hover effects

**Avoid:**
- Purple/blue gradients
- System fonts (Arial, Inter, Roboto)
- Corporate/rigid layouts
- Excessive animations

## Key Constraints

- No contact form → direct contact info only
- No integrated blog → Substack external
- PDFs stored in `public/pdf/`
- 100% static, no server-side JS
- Images: WebP optimized, lazy loading
- Target Lighthouse score: >90

## File Naming

- Markdown: `slug-descriptif.md` (kebab-case, no accents)
- Images: `slug-description.webp`
- PDFs: `slug-document.pdf`

## Commits

Emoji + concise French description: `✨ Ajout page portfolio`
