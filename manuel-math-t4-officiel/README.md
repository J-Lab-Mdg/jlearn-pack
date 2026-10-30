# Manuel Mathématiques T4 — construction officielle

Ce dossier est le chantier propre du manuel T4. Il a été créé sans reprendre le contenu d’un ancien manuel T4.

## Contenu

- `PLAN_EDITORIAL.md` : architecture des six composantes et progression.
- `inventaire_lecons.json` : 57 identifiants de leçons, objectifs, activités, supports et références PE/FRP.
- `src/content_bank.py` : exemples, exercices, corrigés et supports visuels textuels propres à chaque leçon.
- `src/build_manual.py` : génération DOCX.
- `src/audit_manual.py` : contrôle des correspondances.
- `livrables/Manuel_Mathematiques_T4_JLearn_Officiel.docx` : livrable généré.
- `AUDIT_SOURCES.md` : arbitrages entre PE et FRP.
- `AUDIT_GENERATION_T4.md` : audit du DOCX généré.

## Régénérer et contrôler

Depuis la racine du dépôt :

```bash
python manuel-math-t4-officiel/src/build_manual.py
python manuel-math-t4-officiel/src/audit_manual.py
```

Le générateur produit une fiche de préparation enseignant, une leçon apprenant, un support visuel ou de manipulation, trois exercices et un corrigé pour chaque leçon. Les durées, la progression et les limites de contenu suivent le PE T4 ; les exemples et supports pédagogiques sont rattachés au FRP T4.
