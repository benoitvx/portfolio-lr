# Déploiement sur Infomaniak - Documentation

## État actuel
- **Site local** : ✅ Fonctionne parfaitement (`npm run dev`)
- **Build** : ✅ Fonctionne (`npm run build` génère le dossier `dist/`)
- **GitHub** : ✅ Code pushé sur https://github.com/benoitvx/portfolio-lr
- **Infomaniak** : ❌ Erreur ERR_CONNECTION_RESET sur https://laetitiaroux-redaction.fr

## Configuration Infomaniak actuelle
- **Type** : Hébergement Node.js
- **URL Git** : https://github.com/benoitvx/portfolio-lr.git
- **Version Node.js** : 24
- **Commande de construction** : `npm install && npm run build`
- **Commande d'exécution** : `npm start`
- **Port** : 3000
- **SSL** : Configuré (gratuit)

## Ce qui a été tenté

### 1. Première tentative : serve package
- Installé `serve` pour servir les fichiers statiques
- Commande : `serve dist -p 3000`
- **Résultat** : `sh: 1: serve: not found`

### 2. Deuxième tentative : npx serve
- Changé en `npx serve dist -p 3000`
- **Résultat** : Toujours not found

### 3. Troisième tentative : serveur Node.js custom
- Créé `server.js` avec le module http natif
- Commande : `node server.js`
- **Résultat** : Le build réussit mais ERR_CONNECTION_RESET

### 4. Correction ES modules
- Le fichier `server.js` utilisait `require()` (CommonJS)
- Mais `package.json` a `"type": "module"` (ES modules)
- Converti en syntaxe `import`
- **Résultat** : Toujours ERR_CONNECTION_RESET

## Fichiers clés

### package.json
```json
{
  "name": "portfolio-laetitia-roux",
  "type": "module",
  "version": "0.0.1",
  "scripts": {
    "dev": "astro dev",
    "build": "astro build",
    "preview": "astro preview",
    "start": "node server.js",
    "astro": "astro"
  },
  "dependencies": {
    "astro": "^5.0.0",
    "rss-parser": "^3.13.0"
  },
  "devDependencies": {
    "@tailwindcss/vite": "^4.1.18",
    "tailwindcss": "^4.1.18"
  }
}
```

### server.js
Serveur HTTP natif Node.js qui :
- Écoute sur le port 3000 (ou PORT env)
- Sert les fichiers statiques depuis `dist/`
- Gère les routes Astro (URLs sans extension)
- Écoute sur 0.0.0.0 pour accès externe

## Pistes à explorer

### 1. Vérifier les logs d'application
Dans Consoles → Application, chercher des erreurs au démarrage du serveur.
Le serveur devrait afficher :
```
Server running on http://0.0.0.0:3000
Serving static files from /path/to/dist
```

### 2. Problème potentiel : le dossier dist
Le build crée `dist/` mais le serveur tourne peut-être avant que le build soit fini.
→ Vérifier via FTP si le dossier `dist/` existe et contient les fichiers.

### 3. Problème potentiel : port
Infomaniak route peut-être vers un autre port.
→ Essayer de changer le port dans les paramètres avancés.

### 4. Alternative : hébergement statique
Puisque Astro génère du HTML statique, on pourrait :
- Utiliser l'hébergement web classique (Apache/PHP)
- Builder localement et uploader le dossier `dist/` via FTP
- Pas besoin de Node.js pour servir des fichiers statiques

### 5. Alternative : Netlify/Vercel
Ces plateformes sont optimisées pour Astro :
- Netlify : `netlify deploy`
- Vercel : `vercel deploy`
- Configuration automatique du build

## Commandes utiles

```bash
# Développement local
npm run dev

# Build production
npm run build

# Prévisualiser le build
npm run preview

# Tester le serveur custom localement
npm start

# Vérifier que le build fonctionne
ls -la dist/
```

## Structure du projet
```
portfolio-lr/
├── src/
│   ├── components/     # Composants Astro
│   ├── content/        # Contenu Markdown
│   ├── layouts/        # Layouts
│   ├── pages/          # Pages du site
│   └── styles/         # CSS global
├── dist/               # Build output (généré)
├── server.js           # Serveur Node.js custom
├── package.json
├── astro.config.mjs
└── DEPLOYMENT.md       # Ce fichier
```

## Contacts
- **Hébergeur** : Infomaniak
- **Repo** : https://github.com/benoitvx/portfolio-lr
- **Domaine** : laetitiaroux-redaction.fr
