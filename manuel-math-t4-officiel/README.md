# Manuel Mathématiques T4 — construction officielle

Ce dossier est le chantier propre du manuel T4. Il a été créé sans reprendre le contenu d’un ancien manuel T4.

## Contenu

- `PLAN_EDITORIAL.md` : architecture des six composantes et progression.
- `inventaire_lecons.json` : 57 identifiants de leçons, objectifs, activités, supports et références PE/FRP.
- `src/content_bank.py` : exemples, exercices, corrigés et supports visuels textuels propres à chaque leçon.
- `src/build_manual.py` : ancien générateur de contenu de référence.
- `src/build_skill.js` : générateur Node.js aligné sur le skill J-Learn/T5.
- `src/figures_t4.js` : génération des figures SVG/PNG mathématiques.
- `src/audit_manual.py` : contrôle des correspondances de la première version.
- `src/audit_skill.py` : audit du générateur et du DOCX skill.
- `livrables/Manuel_Mathematiques_T4_JLearn_Officiel.docx` : première version de contenu.
- `livrables/Manuel_Mathematiques_T4_JLearn_SkillV1.docx` : version structurée selon le skill.
- `AUDIT_SOURCES.md` : arbitrages entre PE et FRP.
- `AUDIT_GENERATION_T4.md` : audit du DOCX généré.

## Régénérer et contrôler

Depuis la racine du dépôt :

```bash
python manuel-math-t4-officiel/src/build_manual.py
python manuel-math-t4-officiel/src/audit_manual.py
npm install --prefix manuel-math-t4-officiel/src
node manuel-math-t4-officiel/src/build_skill.js
python manuel-math-t4-officiel/src/audit_skill.py
```

Le générateur skill produit une fiche de préparation à six colonnes, une leçon apprenant, des supports visuels SVG/PNG ou de manipulation, des exercices et un corrigé pour chaque leçon. Les durées, la progression et les limites de contenu suivent le PE T4 ; les exemples et supports pédagogiques sont rattachés au FRP T4.
