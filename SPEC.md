# SPEC.md - Spécifications Portfolio Laetitia Roux

## Vue d'ensemble

Portfolio professionnel pour Laetitia Roux, écrivaine et rédactrice spécialisée dans les thématiques nature et environnement.

**Baseline** : "J'écris pour vous sur la nature"

---

## Pages et structure

### 1. Page d'accueil (`/`)
- **Hero** : Image bandeau pleine largeur (déclinaison du visuel LinkedIn) avec baseline
- **Présentation** : Mini texte d'accroche (2-3 phrases)
- **Rubriques** : Grille de 4 blocs renvoyant vers les sections principales
  - Livre (1 vignette)
  - Portfolio (3 derniers articles)
  - Textes personnels (3 derniers)
  - Substack (3 derniers articles via RSS)

### 2. Livre (`/livre`)
- Layout simple : image de couverture + texte de présentation
- Liens d'achat éventuels
- Extraits possibles

### 3. Portfolio (`/portfolio`)
- **Liste** : Grille de vignettes (image + titre)
- **Détail** : Page individuelle avec contenu MD ou lien PDF
- Collection Astro : `src/content/portfolio/`

**Frontmatter type :**
```yaml
---
title: "Titre de l'article"
description: "Description courte"
image: "/images/portfolio/nom.webp"
date: 2024-01-15
type: "article" | "pdf"
pdfUrl: "/pdf/nom.pdf"  # si type: pdf
---
```

### 4. Textes personnels (`/textes`)
- **Liste** : Grille de vignettes (image + titre)
- **Détail** : Page avec le texte complet (poème, texte court)
- Collection Astro : `src/content/textes/`

**Frontmatter type :**
```yaml
---
title: "Titre du texte"
description: "Accroche"
image: "/images/textes/nom.webp"
date: 2024-01-15
category: "poème" | "texte court" | "réflexion"
---
```

### 5. À propos (`/a-propos`)
- Photo portrait
- Biographie détaillée
- Parcours / valeurs

### 6. Contact (`/contact`)
- **Pas de formulaire**
- Coordonnées affichées : email, téléphone (optionnel)
- Liens réseaux sociaux

---

## Composants clés

### Header
- Logo/Nom : "Laetitia Roux" (typo élégante)
- Navigation : Accueil, Livre, Portfolio, Textes, À propos, Contact
- Menu burger sur mobile

### Footer
- Liens réseaux : Instagram, LinkedIn, Substack
- Mentions légales (lien)
- Copyright

### Card/Vignette
- Image avec ratio fixe (4:3 ou 3:2)
- Titre en overlay ou dessous
- Effet hover subtil (scale légère, ombre)

### Section Substack (accueil)
- Fetch RSS côté build (Astro)
- 3 derniers articles avec titre + date + lien
- Lien "Voir tous les articles" vers Substack

---

## Palette de couleurs

```css
:root {
  /* Verts naturels (inspirés du bandeau) */
  --color-primary: #4a6741;      /* Vert forêt */
  --color-primary-light: #6b8c5e; /* Vert feuille */
  --color-primary-dark: #2d3f29;  /* Vert profond */
  
  /* Neutres */
  --color-bg: #faf9f7;           /* Blanc cassé/crème */
  --color-bg-alt: #f0efe9;       /* Fond alternatif */
  --color-text: #2c2c2c;         /* Texte principal */
  --color-text-light: #6b6b6b;   /* Texte secondaire */
  
  /* Accents */
  --color-accent: #8fa87e;       /* Vert doux pour accents */
}
```

---

## Typographie

### Option 1 (recommandée)
- **Titres** : Cormorant Garamond (serif élégante, gratuite Google Fonts)
- **Corps** : Source Sans 3 (lisible, moderne)

### Option 2
- **Titres** : Playfair Display
- **Corps** : Lato

### Échelle
- h1 : 2.5rem (mobile: 2rem)
- h2 : 2rem (mobile: 1.75rem)
- h3 : 1.5rem
- body : 1.125rem (18px)
- small : 0.875rem

---

## Responsive breakpoints

```css
/* Tailwind defaults */
sm: 640px   /* Mobile landscape */
md: 768px   /* Tablette */
lg: 1024px  /* Desktop */
xl: 1280px  /* Large desktop */
```

**Grilles :**
- Mobile : 1 colonne
- Tablette : 2 colonnes
- Desktop : 3-4 colonnes (selon contexte)

---

## Intégration Substack RSS

```javascript
// Fetch au build time (astro.config.mjs ou composant)
const RSS_URL = 'https://laetitiaroux.substack.com/feed';

// Parser avec fast-xml-parser ou rss-parser
// Extraire les 3 derniers items : title, link, pubDate
```

---

## SEO & Meta

Chaque page doit avoir :
- `<title>` unique
- `<meta name="description">`
- Open Graph tags (og:title, og:description, og:image)
- Canonical URL

**Titre format** : `{Page} | Laetitia Roux - Écrivaine Nature`

---

## Performance

- Images WebP avec fallback
- Lazy loading natif (`loading="lazy"`)
- Fonts avec `font-display: swap`
- CSS critique inline
- Score Lighthouse cible : >90

---

## Accessibilité

- Contraste WCAG AA minimum
- Navigation clavier
- Alt text sur toutes les images
- Structure heading logique (h1 > h2 > h3)
- Focus visible

---

## Déploiement Infomaniak

1. Repo Git (GitHub ou GitLab)
2. Configurer le déploiement Git sur Infomaniak
3. Build Astro local ou CI/CD
4. Push du dossier `dist/` vers le repo de déploiement

**Alternative** : Build local + rsync/FTP du `dist/`
