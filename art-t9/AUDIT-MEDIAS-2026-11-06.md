# Audit médias — Art_T9_J-Learn.docx

Date : 2026-11-06  
Branche : `arena/3f402b0e-jlearn-pack`  
Livrable : `art-t9/output/Art_T9_J-Learn.docx`

> **État courant : voir §8.** Les sections 1 à 7 conservent l’historique des lots ; ne pas relancer `scene_vectors.js` sur les scènes actives.

## 1. Images de scène : correctif V2 (historique)

### Cause de la répétition
La première génération du manuel complet utilisait **12 images de scène pour 36 parties de leçon**. Les scènes étaient affectées par familles de sous-discipline, ce qui produisait des répétitions visibles d’une séance à l’autre et parfois une image d’ouverture peu cohérente avec l’activité précise.

### Correctif intégré
- **36 parties = 36 fichiers de scène distincts**. Le validateur de curriculum refuse désormais toute réutilisation d’un même fichier de scène.
- **30 scènes renouvelées** au total :
  - **17 scènes IA retenues** : S2, S3, S4, S5, S6a, S6b, S8, S9, S10, S11, S24, S25, S27, S28a, S30, S31, S32.
  - **13 scènes vectorielles déterministes** : S12, S13, S14, S15, S17a, S17b, S18, S19, S20, S21, S26, S28b, S33.
- **6 scènes pilotes validées conservées comme ancres** : S1, S7, S16, S22, S23, S29.
- Le câblage est centralisé dans `art-t9/src/manual_v2/media_corrections.js`, appliqué par `curriculum.js`.
- Les scènes vectorielles sont produites par `art-t9/src/manual_v2/scene_vectors.js` en JPG + SVG 1536 × 1024.

### Scènes IA rejetées et remplacées
Trois candidates IA n’ont pas été intégrées :
- S26 : saut / pieds nus malgré la consigne de sécurité.
- S28b : échauffement général au lieu du cœur attitude / geste / mimique / espace.
- S33 : partage de livre au lieu d’un conte local joué.

Elles ont été remplacées par des scènes vectorielles explicites et sûres. Les candidates rejetées ne sont pas câblées dans le manuel.

### Contrôles visuels effectués
- Lecture directe de plusieurs JPG de scène et de planches de contrôle.
- Vérification de l’unicité : 36 parties, 36 hashes de fichiers scène distincts.
- Corrections de chevauchements : étiquettes retirées ou déplacées quand elles masquaient visages / objets ; instruments de S17b replacés devant les personnages ; consigne de sécurité S26 déplacée au tableau.

### Limites honnêtes
- **Toutes les scènes ne sont pas IA** : 13 sont vectorielles, 6 sont des ancres pilotes.
- Quelques scènes IA du premier lot gardent une veste / blouse blanche d’enseignant malgré l’intention « sans blouse blanche » ; ce n’est pas bloquant pour la compréhension, mais une harmonisation future reste possible.
- Pas de rendu PDF / Word complet dans l’environnement : contrôle par XML docx + lecture des images.

## 2. Schémas explicatifs

### Problèmes corrigés
- Anciens sous-titres longs non wrappés / tronqués.
- Grands vides et dessins trop génériques.
- Certaines étapes montraient presque la même image avec seulement un label différent.
- S2, S4, S5 : schémas repris en priorité.
- S15 : ancien schéma d’aplats remplacé par un paysage à motifs : répétition, alternance, inversion, valeurs claires / foncées.
- Musique : groupements binaires / ternaires et 12/8 rendus explicites.
- Danse : comptage cha-cha-cha recentré sur les appuis ; trajectoires et zones de sécurité.
- Dramatique : plan de scène, voix, mime et émotion sous forme de repères lisibles.

### Nouvelle génération
- `manual_assets.js` réécrit en version v3.
- **210 schémas PNG + SVG** régénérés.
- Format 1400 × 920, titre wrappé, bandeau de consigne / phrase clé complet.
- Panneaux annotés : observer, préparer, étapes a-d, pratique.
- PNG optimisés en palette pour réduire le poids du docx sans changer le contenu vectoriel source.
- Manifest mis à jour : `art-t9/assets/manual/diagrams/manifest.json`.

### Contrôle visuel effectué
Lecture directe de plusieurs PNG, dont :
- `s02_step_c.png` : contours / proportions, consigne complète.
- `s04_step_c.png` : répétition, alternance, inversion.
- `s05_observe.png` : horizon, premier plan, lointain, chemin.
- `s15_step_c.png` : paysage, motifs répétés / alternés, inversion.
- `s20_step_b.png` : 12/8, quatre groupes de trois, accents 1/4/7/10.

Limite : pas de rendu PDF/Word complet dans l’environnement ; contrôle par XML docx + lecture des images.

## 3. Vidéos YouTube

### Méthode
- Disponibilité : endpoint oEmbed YouTube.
- Pertinence : titre, chaîne, description, chapitres ou transcript lorsque accessibles.
- Aucun visionnage intégral revendiqué.
- Une page watch peut renvoyer 401/bot alors que oEmbed confirme la disponibilité.
- Les vidéos restent des ressources d’appoint : l’enseignant visionne l’extrait choisi avant la classe et peut le remplacer par une démonstration locale.

### Bilan final
- **20 URLs distinctes retenues**.
- **22 insertions** dans le manuel, car certaines vidéos servent à deux parties ou une partie compare deux styles.
- **16 parties sans vidéo** : S04, S05, S06a, S10, S11, S15, S16, S17a, S18, S22, S25, S26, S27, S28a, S28b, S33.
- Les 20 URLs retenues ont répondu positivement à oEmbed le 2026-11-06.

### Vidéos retenues
| Parties | ID YouTube | Titre oEmbed |
|---|---|---|
| S01, S02 | zGpOxaLjVDo | Comment dessiner les ombres et les lumières? Tutoriel |
| S01 | AVdNEXSqRE4 | Ombres et lumières en dessin : faites les choses dans l'ordre ! |
| S03 | 0_eNDQEkyIA | TECHNIQUE DE BASE POUR DESSINER UN OBJET EN PERSPECTIVE |
| S06b, S07 | -fTCg2QnN1Y | Le pot ballon \| Tutoriel |
| S08 | QzEvr008LYk | Fabrication de maracas |
| S09 | vFzhrfcD1hs | FAIRE DU PAPIER MACHE |
| S12 | 6sPU4Kk1Jx4 | COULEURS PRIMAIRES, SECONDAIRES et TERTIAIRES : Réussir facilement les mélanges de couleurs |
| S13 | T69oOB9Dz8M | Cours de peinture - Couleurs chaudes et Couleurs froides |
| S14 | BuEC2u95cwc | Peinture FACILE pour DEBUTANT : paysage acrylique |
| S17b | Q5mvEypVqt8 | Familles d'instrument cycle 1 |
| S19 | CDdCcS3S1zA | TUTO SOLFEGE - TERNAIRE ET BINAIRE |
| S20 | weuyiLB_IBI | Rythme 102 - Deuxième Partie - Lecture en Ternaire |
| S21 | RIzK2olFoxM | Son doux, son fort - Les nuances |
| S23 | Z7_X_9jO3fc | Comment danser la VALSE tout simplement (bases en solo pour débutant) |
| S24 | 4yG1ocefKUs | Cours de Cha cha cha débutant en solo - Apprendre les bases sans partenaire |
| S24 | g0oge8Hfzbc | Danse à la maison 14 - Samba |
| S29 | urbobKTMcoI | COMMENT EXPRIMER SES ÉMOTIONS ? Rire, pleurer "sur commande", aimer son corps / sa voix |
| S30 | a4-6VRqNhi4 | Exercice théâtre : Virelangues, l'articulation en s'amusant |
| S31 | gwnRyyDymgA | Faire passer : Exercice théâtral pour préciser son geste (à partir de 5 ans) |
| S32 | hySlQLQiJEY | Stage de Théâtre - Travail du corps, de la voix, de l'espace |

### Vidéos retirées / non retenues
- `n-XXUXO4BOU` : mort.
- `uyrpxv5pKTg` : maracas, ton humoristique, sécurité faible, association tambour incohérente.
- `SDs5WE0-u-I` : mélange couleurs, 54:57, format long / commercial.
- `IaVNharOE9I` : rythmes binaires/ternaires, 37:37, langage familier, trop long pour une séance.
- `qds0LEujwGs` : samba genré, remplacé par une version solo plus neutre.
- `oABX77s9x00` : articulation avec stylo dans la bouche, non retenu pour la classe.
- `8v88okRGVt0` : volumes/ombres, remplacé en S3 par une ressource plus ciblée sur le point de vue.
- `hPcqEABJvzI`, `PiWI4EpjTG4`, `fwPysx2qAkg`, `iqyq9MRQnRo`, `VBvi6yOdxNE` : retirés lors de l’audit de pertinence / format.
- `WvEeYiklvH0` : retiré de S15, tutoriel d’aplats alors que S15 travaille répétition / alternance / inversion dans un paysage.
- `BuEC2u95cwc` : retiré de S17a, tutoriel de peinture hors cœur « présenter / apprécier un paysage » ; conservé seulement en S14.
- `V8-5R5CsIWA` : retiré de S28b et S33, échauffement général hors cœur attitude / geste / mimique / espace et conte local.

## 4. Audio et QR

- 36 QR audio et 36 liens MP3 conservés.
- Les audios du manuel restent des **consignes parlées**, pas des modèles chantés ou instrumentaux réalistes.
- 30 nouvelles consignes ont été produites par 10 clips parlés puis découpées aux silences ; les 6 audios pilotes / S1 sont réutilisés.

## 5. Validation technique

Commandes :
```bash
node art-t9/src/manual_v2/manual_assets.js
node art-t9/src/manual_v2/build.js
/home/user/.venv/bin/python art-t9/src/manual_v2/validate_docx.py
node art-t9/src/manual_v2/validate_qr.js
```

Résultat attendu : `VALIDATION DOCX : OK`.

Contrôles clés :
- 36 parties, 33 séances, 66 h, pivots S6 / S17 / S28.
- 36 scènes uniques.
- 210 schémas, 36 QR, 36 liens audio.
- 23 URLs YouTube distinctes / 26 insertions.
- 71 `sectPr`, Times New Roman, corps minimal 13 pt ; seule exception : lien Audio en 10 pt dans les 36 pieds de page ressources.
- 36 tables 6 colonnes, signets / liens internes cohérents, QR sources 39/39 et QR pieds de page réduits 36/36.
- Absence des IDs YouTube explicitement rejetés.


## 6. Lot V3 accepté — exécution du 2026-11-06

- **Audio Drive** : 36/36 MP3 publics dans le dossier J-Learn ; ZIP en un clic. Les 36 QR audio + QR ZIP/dossier/officiel ont été régénérés puis **décodés réellement** (`validate_qr.js`, 39/39). Aucun lien audio GitHub raw restant.
- **Sans smartphone** : 30 transcriptions issues du texte source des clips ; 6 versions texte équivalentes pour les consignes pilotes/S1. Note explicite pour s11 (décalage audio signalé/accepté).
- **Pédagogie** : 36 grilles avec observable unique par critère ; 33 jeux de variantes ; différenciation/remédiation ; timing I/II/III + sous-étapes II ; checklist matériel/sécurité ; trace élève ; tâche courte de transfert ; ancrage local ; progression par compétences.
- **Navigation / front matter** : authenticité et droits, avant-propos, mode d’emploi, sommaire interactif par signets, index des évaluations, glossaire, sources, contrôle terrain, footer avec pagination. Pas de champ TOC natif.
- **Vidéos** : 20 URLs retenues. Repères honnêtes : 2 bornes de chapitre vérifiées (AVdNEXSqRE4 02:05–05:05 ; Z7_X_9jO3fc début 01:42), 8 vidéos courtes complètes, 10 repères de contenu à sélectionner par l’enseignant. Vignette de liaison + question + repli hors ligne ; pas de lecteur vidéo embarqué dans le .docx.
- **Visuels** : S02/S09/S10 harmonisés (tenue enseignante bleue/verte, sans blouse blanche) ; pastilles S1 corrigées a/b/c/d ; alt-textes descriptifs (348 attributs descr).
- **Validation technique** : `Art_T9_J-Learn.docx` = 15787029 octets ; `validate_docx.py` PASS (1 sectPr, min 13 pt, Times New Roman, 36 leçons/pratiques, 33 séances/grilles, 36 liens audio Drive, 0 GitHub raw, 36 tables 6 colonnes, signets/ancres cohérents) ; `validate_qr.js` PASS.
- **Limites** : pas de rendu Word/PDF/LibreOffice dans l’environnement ; pagination, césures et impression restent à vérifier sur le poste enseignant (annexe « Contrôle terrain »). Aucun visionnage intégral des vidéos revendiqué.

## 7. Lot simplification / refonte — 2026-11-06

- **Titres** : 36 titres brefs en majuscules (`titles_short.js`), format `DOMAINE : OBJET`, affichés en fiche, leçon, pratique et sommaire.
- **Vidéos** : bloc compact en pratique = filet + « Vidéos d’appoint » + entrées numérotées avec icône YouTube, titre cliquable et URL cliquable. Les vignettes 320 px, repères, questions, replis et chaîne/durée ne sont plus dans le corps ; les repères/replis restent dans l’annexe « Sources et ressources ».
- **Audio / pied de page** : le bloc long « Audio sans smartphone » est retiré des leçons. Chaque partie dispose d’un pied de page ressources : icône audio + lien « Audio » en 10 pt + QR audio + lien interne « Texte » + icône YouTube + liens vidéo + pagination. Les transcriptions sont regroupées dans l’annexe « TRANSCRIPTIONS AUDIO » avec signets `bm_tr_*`.
- **Sections Word** : 71 sections (1 ouverture + 33 fiches + 36 parties + 1 annexes) pour permettre un pied de page par partie ; pas de champ TOC natif.
- **Scènes** : 10 scènes vectorielles remplacées par des scènes réalistes avec personnes (s12, s13, s14, s15, s17a, s17b, s18, s26, s28b, s33). La limite de génération d’images du tour (10) a été atteinte : **s19, s20, s21 restent provisoirement vectorielles** et devront être régénérées au prochain tour. Bilan visuel : 27 illustrations IA + 6 scènes pilotes + 3 vectorielles provisoires.
- **Vidéos danse ajoutées** : S25 `WgVKfTkwU1U` (Elements of Dance - Introduction), S26 `E7MFKBj4E3o` (Locomotor Skills with Locomotion Dance, réserve : transcript peu exploitable), S27 `FThZeqfIMBo` (How to create your own dance choreography), S28a réutilise `WgVKfTkwU1U`. Ces vidéos sont en anglais ; l’enseignant reformule ou sélectionne un extrait. Disponibilité oEmbed vérifiée le 06/11/2026 ; aucun visionnage intégral revendiqué.
- **Bilan vidéos** : 23 URLs distinctes / 26 insertions / 12 parties sans vidéo (S04, S05, S06a, S10, S11, S15, S16, S17a, S18, S22, S28b, S33).
- **Validation** : `Art_T9_J-Learn.docx` = 17 042 097 octets ; `validate_docx.py` PASS (71 sectPr, corps min 13 pt, Times New Roman, 186 signets/liens internes, 36 leçons/pratiques, 33 séances/grilles, 36 liens audio Drive, 0 GitHub raw, 36 tables 6 colonnes) ; `validate_qr.js` PASS 39/39.
- **Limites** : pas de rendu Word/PDF complet dans l’environnement ; pieds de page, QR en petit format et césures à vérifier sur le poste enseignant. Trois scènes musique restent à remplacer ; aucune revendication « toutes les scènes IA » ni « vidéos intégralement visionnées ».

## 8. Finalisation du lot de simplification — 2026-11-06

- **Scènes d’ouverture** : les 3 dernières scènes musicales S19/S20/S21 sont régénérées dans le style naturaliste de S25, avec élèves et enseignante. Bilan : **13/13 anciennes scènes vectorielles d’ouverture remplacées** ; **30 illustrations IA + 6 scènes pilotes conservées**, 36 fichiers/hashs distincts. Les SVG historiques sont archivés hors de `scenes_v3` et le générateur vectoriel est désactivé par défaut pour éviter toute régression. S14 et S28b ont aussi été reprises pour cohérence T9 / chaussures fermées. Les illustrations IA ne sont pas des photographies documentaires ; les 6 pilotes ne sont pas revendiqués comme IA.
- **Pieds de page ressources** : mise en page deux colonnes, QR audio à **80 px** (les 60 px précédents ne décodent plus), marge basse réservée. Le lien **Audio** est seul en **10 pt** ; Texte, vidéos, copyright et pagination restent à 13 pt. Chaque pied de page est contrôlé par section : bon audio Drive, bon QR, bon lien Texte, mêmes vidéos que le corps, pagination présente.
- **Contrôles** : `validate_docx.py` PASS ; `validate_qr.js` PASS **75/75** (39 QR sources + 36 QR réduits à 80 px). Le scan physique après impression reste dans le contrôle terrain. Pas de rendu Word/PDF complet dans l’environnement.
- **Vidéos** : bilan inchangé depuis le lot précédent, 23 URLs distinctes / 26 insertions / 12 parties sans vidéo ; ajouts danse S25/S26/S27/S28a conservés. Aucun visionnage intégral revendiqué.
- **Livrable** : `art-t9/output/Art_T9_J-Learn.docx` rebuildé ; structure 36 parties / 33 séances / 66 h, charnières S6/S17/S28 inchangées.

## 9. Correctif compatibilité Word — 2026-11-06

- **Symptôme utilisateur** : le fichier V4 final ne s’ouvre pas dans Word.
- **Cause racine identifiée par validation XSD OOXML** : 36 cellules `w:tc` du tableau de déroulement (ligne « I. Révision ») contenaient du **texte brut** directement dans la cellule, au lieu de paragraphes `w:p`. Cela venait de `d.review` (tableau de paires question/réponse) passé tel quel à `row6`/`cell`. `lxml` et `python-docx` toléraient, mais le schéma WordprocessingML est violé (`w:tc` est element-only) et Word peut refuser le fichier.
- **Correctifs build.js** :
  - `cell()` normalise désormais les enfants : aplatissement, conversion des chaînes en paragraphes, refus explicite des enfants invalides.
  - La ligne « I. Révision » transforme chaque paire question/réponse en paragraphes séparés (question en gras + `R.A. : …`).
  - Chaque pied de page ressources se termine par un paragraphe explicite après le tableau (mesure de prudence Word, hauteur 1 pt).
- **Validateur renforcé** : `validate_docx.py` refuse désormais tout texte brut dans les conteneurs element-only (`w:tc`, `w:p`, `w:r`, `w:tbl`, etc.), tout tableau dans un paragraphe, tout pied de page ou cellule sans paragraphe terminal, et les ids `wp:docPr` dupliqués entre corps/en-tête/pieds.
- **Contrôles après rebuild** : validation XSD WordprocessingML **0 erreur** sur document, 71 pieds de page, en-tête, styles, settings, numbering, fontTable ; `validate_docx.py` PASS ; `validate_qr.js` PASS **75/75**. Fichier : **17 553 934 octets**.
- **Limite honnête** : pas de moteur Word/LibreOffice dans l’environnement ; la preuve disponible est la conformité XSD + structurelle + QR, pas un ouverture rendue dans Word. Si Word affiche encore une erreur, récupérer le message exact et la version de Word.
