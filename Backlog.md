# Backlog - Portfolio Laetitia Roux

## Phase 1 : Setup & Structure ✅ TODO

- [ ] Initialiser projet Astro
- [ ] Configurer Tailwind CSS
- [ ] Configurer collections de contenu (portfolio, textes)
- [ ] Créer structure des dossiers
- [ ] Ajouter fonts (Cormorant Garamond + Source Sans 3)
- [ ] Définir variables CSS (couleurs, spacing)
- [ ] Créer layout de base (`BaseLayout.astro`)
- [ ] Init Git + premier commit

## Phase 2 : Composants de base

- [ ] Créer Header (nav + logo)
- [ ] Créer Footer (liens sociaux + copyright)
- [ ] Créer composant Card/Vignette
- [ ] Créer composant Section Title
- [ ] Créer composant Hero Banner
- [ ] Responsive menu mobile (burger)

## Phase 3 : Pages principales

- [ ] Page d'accueil (`index.astro`)
  - [ ] Hero avec bandeau
  - [ ] Section présentation
  - [ ] Grille rubriques (4 blocs)
- [ ] Page Livre (`livre.astro`)
- [ ] Page À propos (`a-propos.astro`)
- [ ] Page Contact (`contact.astro`)

## Phase 4 : Collections & Pages dynamiques

- [ ] Config collection Portfolio
- [ ] Page liste Portfolio (`/portfolio`)
- [ ] Page détail Portfolio (`/portfolio/[slug]`)
- [ ] Config collection Textes
- [ ] Page liste Textes (`/textes`)
- [ ] Page détail Textes (`/textes/[slug]`)

## Phase 5 : Intégrations

- [ ] Fetch RSS Substack (build time)
- [ ] Composant Substack Articles
- [ ] Section Substack sur accueil
- [ ] Viewer PDF intégré (optionnel) ou lien direct

## Phase 6 : Contenu & Assets

- [ ] Intégrer bandeau hero (depuis Cover_LK.png)
- [ ] Ajouter photo portrait
- [ ] Créer contenu placeholder (en attendant les vrais MD)
- [ ] Optimiser images (WebP)

## Phase 7 : Polish & SEO

- [ ] Meta tags dynamiques
- [ ] Open Graph images
- [ ] Sitemap.xml
- [ ] robots.txt
- [ ] Favicon
- [ ] Page 404
- [ ] Mentions légales

## Phase 8 : Déploiement

- [ ] Build de production
- [ ] Test Lighthouse (>90)
- [ ] Config déploiement Git Infomaniak
- [ ] Achat nom de domaine
- [ ] Mise en ligne
- [ ] Test final

---

## Contenu à fournir (Laetitia)

| Élément | Status | Fichier attendu |
|---------|--------|-----------------|
| Texte accueil | ⏳ | `content/pages/accueil.md` |
| Page Livre | ⏳ | `content/pages/livre.md` |
| Bio À propos | ⏳ | `content/pages/a-propos.md` |
| Coordonnées contact | ⏳ | `content/pages/contact.md` |
| Articles portfolio | ⏳ | `content/portfolio/*.md` |
| Textes personnels | ⏳ | `content/textes/*.md` |
| Photo portrait | ⏳ | `assets/images/portrait.jpg` |
| Images portfolio | ⏳ | `assets/images/portfolio/*.jpg` |
| PDFs portfolio | ⏳ | `public/pdf/*.pdf` |

---

## Notes

- **Priorité** : Avoir un site fonctionnel avec contenu placeholder avant d'intégrer le vrai contenu
- **Design** : Valider le look & feel sur la page d'accueil avant de décliner sur les autres pages
- **Mobile first** : Toujours commencer par le responsive mobile
