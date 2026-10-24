# Manuel de Géographie T9 — J-Learn

Édition complète, illustrée et protégée conforme à la section Géographie du programme d'études T9 (`PE RAPE/PE T9.pdf`, pages PDF 191 à 210).

## Organisation

- 64 leçons de 60 minutes ;
- 6 révisions ;
- 6 sujets d'examen corrigés ;
- 76 numéros au total ;
- 6 thématiques et 64 heures officielles ;
- 64 scènes semi-réalistes, 64 schémas pédagogiques et 8 annexes ;
- glossaire, auto-évaluation, table des illustrations et sources ;
- page d'authenticité, filigrane diagonal et pied de page anti-revente.

## Construction

```bash
node geo-t9/svg/make-svg.js
node geo-t9/svg/render-assets.js
node geo-t9/scenes/copy-scenes.js
node geo-t9/src/assemble.js
python3 geo-t9/src/verifications.py geo-t9/output/Manuel_Geographie_T9_JLearn.docx
python3 geo-t9/src/audit.py geo-t9/output/Manuel_Geographie_T9_JLearn.docx
```

## Livraison

- Source générée : `geo-t9/output/Manuel_Geographie_T9_JLearn.docx`
- Copie finale : `Nos manuels/Manuel_Geographie_T9_JLearn.docx`
