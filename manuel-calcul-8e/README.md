# Manuel de Calcul 8e — générateur J-Learn (V2)

Générateur docx-js du manuel « Calcul 8ème » (fiches de préparation, leçons, exercices, corrigés détaillés).
Réutilisable pour la 9e : les leçons sont des données (`src/content-t*.js`), la mise en forme est dans `src/builders.js`.

## Utilisation
```bash
npm install
node src/figures.js          # (re)génère les figures géométriques dans assets/figures/
node src/assemble.js         # → output/Manuel_Calcul_8e_V2.docx (57 séances)
ONLY=1-19 node src/assemble.js   # un sous-ensemble de séances
node tools/verify.js         # contrôles : images, structure des exercices, réponses V2 vs V1
python3 tools/dump.py output/Manuel_Calcul_8e_V2.docx > dump.txt   # relecture texte
```

## Organisation
- `src/progression.js` — les 57 séances (47 V1 + 10 issues du guide pédagogique) et les trimestres.
- `src/load.js` — fusion de l'import V1 (`assets/import/seances-v1.json` : fiches et énoncés gardés tels quels) et des contenus V2.
- `src/content-t1.js`, `content-t2.js`, `content-t3.js` — leçons V2 (blocs : `h`, `methode`, `formule`, `attention`, `retenir`, `table`, `numeration`, `conversion`, `op`, `mult`, `div`, `preuve9`, `fig`…), fiches et exercices des séances nouvelles.
- `src/builders.js` — briques docx : tableaux de numération et de conversion (flèches), opérations posées, potence, preuve par 9, formules encadrées, blocs Méthode/Attention/À retenir.
- `src/solvers.js` + `src/exo-parser.js` — corrigés détaillés générés automatiquement à partir des énoncés V1.
- `src/seance-generator.js`, `src/assemble.js` — assemblage d'une séance et du manuel.
- `tools/import_v1.py` — import du docx V1 ; `tools/verify.js`, `tools/dump.py` — vérifications.
- `assets/figures/` (générées par code), `assets/scenes/` (8 illustrations IA, style dessin scolaire), `assets/import/media/` (images V1).
