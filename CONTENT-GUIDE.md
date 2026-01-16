# Guide de contenu - Fichiers Markdown

Ce guide explique comment créer les fichiers de contenu pour le site.

---

## Structure des dossiers

```
content/
├── pages/
│   ├── accueil.md      # Texte d'accroche accueil
│   ├── livre.md        # Présentation du livre
│   ├── a-propos.md     # Biographie
│   └── contact.md      # Coordonnées
├── portfolio/
│   ├── article-1.md
│   ├── article-2.md
│   └── ...
└── textes/
    ├── poeme-1.md
    ├── texte-court-1.md
    └── ...
```

---

## Format des fichiers

### Pages statiques (accueil, livre, à propos, contact)

```markdown
---
title: "Titre de la page"
description: "Description pour le SEO (160 caractères max)"
---

Contenu de la page en Markdown...

## Sous-titre

Paragraphe avec **gras** et *italique*.
```

### Article Portfolio

```markdown
---
title: "Titre de l'article"
description: "Courte description pour la vignette"
image: "/images/portfolio/nom-image.webp"
date: 2024-03-15
type: "article"
client: "Nom du client (optionnel)"
---

Contenu de l'article...

![Légende image](/images/portfolio/autre-image.webp)

Suite du texte...
```

### Article Portfolio (PDF)

```markdown
---
title: "Titre du document"
description: "Courte description"
image: "/images/portfolio/apercu.webp"
date: 2024-02-20
type: "pdf"
pdfUrl: "/pdf/nom-document.pdf"
---

Courte présentation du document (optionnel, apparaîtra avant le lien de téléchargement).
```

### Texte personnel (poème, texte court)

```markdown
---
title: "Titre du texte"
description: "Accroche"
image: "/images/textes/illustration.webp"
date: 2024-01-10
category: "poème"
---

Premier vers du poème
Deuxième vers
Troisième vers

Nouvelle strophe ici
Avec d'autres vers
```

---

## Conventions de nommage

| Type | Format du nom de fichier | Exemple |
|------|--------------------------|---------|
| Portfolio | `slug-descriptif.md` | `magazine-geo-forets.md` |
| Textes | `slug-titre.md` | `ode-au-silence.md` |
| Images | `slug-description.webp` | `geo-forets-couverture.webp` |
| PDF | `slug-document.pdf` | `magazine-geo-article.pdf` |

**Règles :**
- Tout en minuscules
- Tirets `-` au lieu des espaces
- Pas d'accents ni caractères spéciaux
- Pas de dates dans le nom (la date est dans le frontmatter)

---

## Images

### Formats acceptés
- `.webp` (recommandé)
- `.jpg` / `.jpeg`
- `.png` (si transparence nécessaire)

### Dimensions recommandées
| Usage | Dimensions | Ratio |
|-------|------------|-------|
| Vignette portfolio/textes | 800x600px | 4:3 |
| Image dans article | 1200px largeur max | libre |
| Photo portrait | 800x1000px | 4:5 |
| Hero/Bandeau | 1920x600px | ~3:1 |

### Optimisation
Compresser les images avant de les ajouter :
- [Squoosh](https://squoosh.app/) (en ligne)
- [ImageOptim](https://imageoptim.com/) (Mac)

---

## Exemple complet : Article portfolio

**Fichier** : `content/portfolio/geo-special-forets.md`

```markdown
---
title: "GEO Spécial Forêts"
description: "Reportage sur les forêts primaires d'Europe pour le magazine GEO"
image: "/images/portfolio/geo-forets.webp"
date: 2024-06-15
type: "article"
client: "GEO Magazine"
---

En juin 2024, j'ai eu le privilège de partir à la rencontre des dernières forêts primaires d'Europe pour le magazine GEO.

## La forêt de Białowieża

Située à la frontière entre la Pologne et la Biélorussie, cette forêt est l'une des dernières à n'avoir jamais été exploitée par l'homme...

![Chênes centenaires dans la forêt de Białowieża](/images/portfolio/geo-bialowieza.webp)

## Les gardiens de la forêt

J'ai rencontré les scientifiques et les habitants qui luttent pour préserver ce patrimoine naturel...
```

---

## Exemple complet : Poème

**Fichier** : `content/textes/le-chene-et-le-temps.md`

```markdown
---
title: "Le chêne et le temps"
description: "Un poème sur la patience de la nature"
image: "/images/textes/chene.webp"
date: 2023-11-20
category: "poème"
---

Le chêne ne compte pas les années
Il les boit, les absorbe, les transforme
En écorce rugueuse et en branches tendues
Vers un ciel qui ne lui demande rien

Lui seul sait attendre
Sans impatience ni résignation
Juste cette présence tranquille
Qui fait honte à nos agitations
```

---

## Besoin d'aide ?

Si tu as des questions sur le format, n'hésite pas à demander !
