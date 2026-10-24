# Manuel de Géographie T8 — Collection J-Learn

Manuel scolaire complet de Géographie pour la classe de **T8** à Madagascar, construit à partir du programme d’études T8 et des ressources pédagogiques disponibles dans le dépôt.

## Édition livrée

- **56 heures de contenus officiels**, dans un enseignement prévu à raison de 2 heures par semaine.
- **68 numéros** : 56 leçons de 60 minutes, 6 révisions et 6 sujets d’examen corrigés.
- **6 thématiques officielles**, détaillées dans `PLAN-FINAL.md`.
- **62 fiches de préparation** : 56 leçons + 6 révisions.
- 4 exercices corrigés par leçon et 4 exercices notés sur 20 par sujet d’examen.
- **56 schémas pédagogiques** et **56 scènes semi-réalistes**, un schéma et une scène dans chaque leçon.
- **8 cartes et schémas d’activités**, glossaire de 56 notions, auto-évaluation, table des illustrations et sources.
- Sommaire interactif : 83 signets et 83 liens.

## Répartition

| Unité | Thématique officielle | Leçons | Révision | Examen |
|---|---|---:|---:|---:|
| 1 | Les pays développés | S1–S7 | S8 | S9 |
| 2 | La méthodologie de traitement de devoir | S10–S11 | S12 | S13 |
| 3 | Les pays en développement | S14–S20 | S21 | S22 |
| 4 | L’Afrique | S23–S34 | S35 | S36 |
| 5 | Le dérèglement climatique | S37–S53 | S54 | S55 |
| 6 | Les différentes sources d’énergie | S56–S66 | S67 | S68 |

## Sources

- `PE RAPE/PE T8.pdf` — section Géographie, pages PDF 188–201 : thématiques, contenus, résultats d’apprentissage et volumes horaires.
- `PE RAPE/FRP_8eme.pdf` — ressources pédagogiques T8, section Géographie, pages PDF 134–164 environ.

Le manuel couvre notamment les critères et la diversité du développement, le commentaire dirigé de documents, les réalités des pays en développement, les milieux et les organisations de l’Afrique, les manifestations et réponses au dérèglement climatique, ainsi que les sources d’énergie et leurs usages économiques.

## Couverture

`geo8_bookcover.png` reprend la couverture validée des éditions précédentes. Seule la classe du grand titre a été modifiée de **T7** en **T8**.

## Protection anti-revente

- page **« Authenticité et droits »** immédiatement après la couverture ;
- QR et lien cliquable vers l’unique page officielle : `https://web.facebook.com/profile.php?id=61575599505051` ;
- filigrane diagonal **« COPIE OFFICIELLE J-LEARN »** ;
- pied de page légal paginé ;
- composant partagé `jlearn-protection.js` et QR `jlearn_facebook_officiel_qr.png`.

## Fichiers principaux

- `src/curriculum-data.json` — données des 56 leçons.
- `src/curriculum.js` — génération des leçons, révisions et examens.
- `src/seance-generator.js` — fiches de 60 minutes, leçons et exercices.
- `src/assemble.js` — couverture, protection, sommaire, unités et annexes.
- `src/annexes.js` — glossaire, 8 activités, auto-évaluation, illustrations et sources.
- `svg/make-svg.js` — génération des 56 schémas.
- `svg/make-svg-annexes.js` — génération des 8 annexes.
- `scenes/` — 56 scènes JPEG et leur traçabilité dans `scenes/SOURCES.md`.
- `src/verifications.py` — vérifications structurelles du DOCX.
- `src/audit.py` — audit de contenu, images, annexes et protection.
- `output/Manuel_Geographie_T8_JLearn.docx` — édition complète protégée.

## Résultat des contrôles

- `verifications.py` : **toutes les vérifications critiques passent** ;
- `audit.py` : **75/75 contrôles réussis** ;
- 68 numéros présents et ordonnés ;
- 6 examens corrigés avec barème calculé sur 20 ;
- 122 illustrations placées dans le document ;
- 0 mention ministérielle, 0 support « Oral », 0 double espace, 0 balisage résiduel ;
- 83 signets = 83 liens du sommaire ;
- protection complète vérifiée dans le XML du DOCX.

## Build final

- Fichier : `output/Manuel_Geographie_T8_JLearn.docx`
- Taille : **12 731 Kio**
- Empreinte SHA-256 : `49ae0d02fde5e46ff4c2d65e45875dcd97d91dcde08443594ad421ec07d6b453`
- Manifeste `pack.json` : **389 images**, dont 64 nouvelles images pédagogiques GEO T8.

## Reconstruire et vérifier

```bash
node geo-t8/svg/make-svg.js
node geo-t8/svg/make-svg-annexes.js
node geo-t8/src/assemble.js
python3 geo-t8/src/verifications.py geo-t8/output/Manuel_Geographie_T8_JLearn.docx
python3 geo-t8/src/audit.py geo-t8/output/Manuel_Geographie_T8_JLearn.docx
sha256sum geo-t8/output/Manuel_Geographie_T8_JLearn.docx
```
