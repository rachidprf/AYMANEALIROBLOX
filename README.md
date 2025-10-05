
# Boutique mobile (FR) avec gestion de stock — Connectée à Google Sheets

## API WebApp
URL: https://script.google.com/macros/s/AKfycbxPc9qbBF8y7OjO3VZCGoq7hzsWMD4hGZGCuXaWkzTkNGJvcIwqwmNUo29gShe6VoaK/exec

## Colonnes requises (ligne 1)
`id | titre | prix | description | categorie | sku | image | disponibilite | date`

## Fichiers
- `admin.html` : ajouter / modifier / supprimer + aperçu image + **switch "En stock / Rupture"**
- `boutique.html` : affichage responsive avec **badge de disponibilité**
- `style.css` : design mobile-first + badges
- `app.js` : appels `GET / POST / DELETE` vers la WebApp

## Déploiement
Hébergez le dossier sur Netlify ou GitHub Pages. Assurez-vous que la WebApp Apps Script est en
**Application Web → Tout le monde (même anonyme)**.
