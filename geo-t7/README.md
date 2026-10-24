# Manuel de Géographie T7 — Collection J-Learn

Manuel scolaire complet de Géographie pour la classe de **T7** à Madagascar, construit à partir du programme d’études T7 et des ressources pédagogiques disponibles dans le dépôt.

## Édition livrée

- **66 heures officielles**, à raison de 2 heures par semaine.
- **80 numéros** : 66 leçons de 60 minutes, 7 révisions et 7 sujets d’examen corrigés.
- **7 thématiques officielles**, détaillées dans `PLAN-FINAL.md`.
- **73 fiches de préparation** : 66 leçons + 7 révisions.
- **4 exercices corrigés par leçon** et 4 exercices notés sur 20 par sujet d’examen.
- **66 schémas pédagogiques** et **66 scènes semi-réalistes** : un schéma et une scène dans chaque leçon.
- **8 cartes et schémas d’activités**, glossaire de 66 notions, auto-évaluation, table des illustrations et sources.
- Sommaire interactif complet : 96 signets et 96 liens.

## Répartition

| Unité | Thématique officielle | Leçons | Révision | Examen |
|---|---|---:|---:|---:|
| 1 | Initiation à l’étude de la géographie | S1–S6 | S7 | S8 |
| 2 | La planète Terre | S9–S18 | S19 | S20 |
| 3 | L’interrelation entre relief, climat, hydrographie et végétation | S21–S32 | S33 | S34 |
| 4 | Caractéristiques de la population mondiale | S35–S42 | S43 | S44 |
| 5 | La population face aux problèmes environnementaux | S45–S56 | S57 | S58 |
| 6 | Activités économiques de la population mondiale | S59–S64 | S65 | S66 |
| 7 | Gestion des ressources naturelles | S67–S78 | S79 | S80 |

## Sources

- `PE RAPE/PE T7.pdf` — section Géographie, pages PDF 150–167 : thématiques, contenus, résultats d’apprentissage et volumes horaires.
- `PE RAPE/FRP_7eme_2.pdf` — ressources pédagogiques T7, section Géographie.

Le manuel reprend notamment les contenus prescrits sur les documents et la démarche géographique, l’Univers et les composantes de la Terre, le relief sous-marin, l’atmosphère, la répartition de la population, la dégradation de l’environnement, la mondialisation et les types de gestion durable des ressources.

## Couverture

`geo7_bookcover.png` reprend le modèle GEO T5 validé. Seule la classe du grand titre a été modifiée de **T5** en **T7**.

## Protection anti-revente

- page **« Authenticité et droits »** immédiatement après la couverture ;
- QR et lien cliquable vers l’unique page officielle : `https://web.facebook.com/profile.php?id=61575599505051` ;
- filigrane diagonal **« COPIE OFFICIELLE J-LEARN »** sur les pages intérieures ;
- pied de page légal paginé ;
- composant partagé `jlearn-protection.js` et QR `jlearn_facebook_officiel_qr.png`.

## Fichiers principaux

- `src/curriculum-data.json` — données officielles des 66 leçons.
- `src/curriculum.js` — génération des leçons, révisions et examens.
- `src/seance-generator.js` — fiches de 60 minutes, leçons et exercices.
- `src/assemble.js` — couverture, protection, sommaire, unités et annexes.
- `src/annexes.js` — glossaire, 8 activités, auto-évaluation, illustrations et sources.
- `svg/make-svg.js` — génération des 66 schémas.
- `svg/make-svg-annexes.js` — génération des 8 annexes.
- `scenes/` — 66 scènes JPEG ; `scenes/SOURCES.md` assure leur traçabilité.
- `src/verifications.py` — vérifications structurelles du DOCX.
- `src/audit.py` — audit de contenu, images, annexes et protection.
- `output/Manuel_Geographie_T7_JLearn.docx` — édition complète protégée.

## Résultat des contrôles

- `verifications.py` : **toutes les vérifications critiques passent** ;
- `audit.py` : **76/76 contrôles réussis** ;
- 80 numéros présents et ordonnés ;
- 7 examens corrigés avec barème calculé sur 20 ;
- 142 illustrations placées dans le document ;
- 0 mention ministérielle, 0 support « Oral », 0 double espace, 0 balisage résiduel ;
- 96 signets = 96 liens du sommaire ;
- protection complète vérifiée dans le XML du DOCX.

## Build final

- Fichier : `output/Manuel_Geographie_T7_JLearn.docx`
- Taille : **14 244 Kio**
- Empreinte SHA-256 : `954c81e253a1281ed1671e3b3fcc1e0f98b7a12281918c41570b96561498b976`
- Manifeste `pack.json` : **325 images**, dont 74 nouvelles images GEO T7 enregistrées.

## Reconstruire et vérifier

```bash
node geo-t7/svg/make-svg.js
node geo-t7/svg/make-svg-annexes.js
node geo-t7/src/assemble.js
python3 geo-t7/src/verifications.py geo-t7/output/Manuel_Geographie_T7_JLearn.docx
python3 geo-t7/src/audit.py geo-t7/output/Manuel_Geographie_T7_JLearn.docx
sha256sum geo-t7/output/Manuel_Geographie_T7_JLearn.docx
```
