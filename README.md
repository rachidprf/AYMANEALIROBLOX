
# Boutique (FR) — Commande & Pagination

## API WebApp
URL: https://script.google.com/macros/s/AKfycbztR-Hp6cKXAqO4Dgd9OcfYfCkgdvFg_zSPoMWALhx868TuUUlrD-tyExF5qICEgzDo_A/exec

## Feuilles Google Sheets
- **Feuille1** (produits) : `id | titre | prix | description | categorie | sku | image | date`
- **Feuille2** (commandes) : `produit | prix | nom | téléphone | ville | date`

## Fonctionnalités
- Bouton **Commander** → popup (Nom, Téléphone, Ville) → enregistrement dans **Feuille2** (`route=commande`)
- Affichage **10 produits par page** avec **numéros** et texte **"Page X sur Y"** en bas
- Recherche et tri (par défaut, plus récents)
- Admin : ajout / modification / suppression produits (image preview)

## Déploiement
Hébergez ce dossier sur Netlify ou GitHub Pages. Assurez-vous que la WebApp Apps Script est en
**Application Web → Tout le monde (même anonyme)**.
