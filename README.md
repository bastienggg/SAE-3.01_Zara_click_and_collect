# SUJET

Objectif :
Il s’agit de réaliser un site web de type “click & collect”.
Le site web doit donc proposer différents produits que l’on pourra sélectionner pour constituer un
“panier” que chaque client pourra plus tard passer chercher ou commander.
Toutefois, dans le cadre de ce projet, le paiement et la mise à disposition du panier ne seront pas traités.
Le projet est à réaliser en groupe de binômes au sein d’un même parcours.
Chaque groupe se choisira une enseigne différente.
Vous respecterez la charte graphique de l’enseigne choisie (il est primordial que votre enseigne
ait une charte graphique riche et bien établie).
Les produits disponibles sur votre site seront à prendre parmi ceux vendus par l’enseigne choisie.
Si elle possède déjà un service “click & collect” ou tout simplement une boutique en ligne (ce sera sans
doute le cas) vous devrez proposer une expérience utilisateur qui diffère de l’existant.
Pour vous simplifier la tâche, on ne vous demande pas de proposer sur votre site tous les produits
vendus par l’enseigne. L’objectif sera d’avoir :
● 3 catégories de produits
● 3 produits par catégorie
● des “options” pour chaque produit

# IMPORTANT

Intégration et fusion : Lorsque le code front-end et back-end seras prêt, les branches pourront être fusionnées dans main pour unifier le projet.

# ARCHITECTURE

/sae-3.01
│
├── /client # Code du front-end tailwind
│ ├── src/
│ | ├── data/
│ | | └── product.js
│ | ├── lib/
│ | | ├── api-request.js
│ | | └── utils.js
| | └── ui/
│ | └── product/
│ | ├── index.js
| | └── template.html.inc
│ ├── .gitignore
│ ├── index.html
│ ├── package-lock.json
│ ├── package.json
│ ├── postcss.config.js
│ ├── tailwind.config.js
│ └── vite.config.js
│
├── /backend # Code du back-end (par ex: Node.js, Express, Django)
│ ├── src/
│ ├── config/
│ ├── package.json
│ └── ...
│
├── README.md
├── .gitignore
└── ...
