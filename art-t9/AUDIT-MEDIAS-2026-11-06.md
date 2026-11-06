# Audit médias — Art_T9_J-Learn.docx
Date : 2026-11-06  
Branche : `arena/3f402b0e-jlearn-pack`  
Livrable : `art-t9/output/Art_T9_J-Learn.docx`

## 1. Images de scène : cause et état du correctif

### Cause de la répétition
La première génération du manuel complet utilisait **12 images de scène pour 36 parties de leçon**. Les scènes étaient affectées par familles de sous-discipline, ce qui produisait des répétitions visibles d’une séance à l’autre et parfois une image d’ouverture peu cohérente avec l’activité précise.

### Correctif intégré dans cette version
- **10 nouvelles scènes distinctes** ont été générées puis intégrées :
  - S2 : bouteille + boîte, repères de placement.
  - S3 : même tasse / deux points de vue.
  - S4 : marché, répétition / alternance de motifs.
  - S5 : village, premier plan / lointain.
  - S6a : appréciation de dessins entre pairs.
  - S6b : planification d’un instrument de percussion de récupération.
  - S8 : shaker / maracas de récupération, remplissage et fermeture.
  - S9 : bas-relief léger sur le corps d’un tambour, membrane libre.
  - S10 : test et réparation d’une percussion.
  - S11 : mini-exposition d’instruments fabriqués.
- Les scènes pilotes validées sont conservées comme ancres : S1, S7, S16, S22, S23, S29.
- Le câblage est centralisé dans `art-t9/src/manual_v2/media_corrections.js`, appliqué par `curriculum.js`.

### Limite honnête : toutes les scènes ne sont pas encore uniques
La limite de génération d’images du tour a été atteinte après 10 nouvelles scènes. **20 parties restent à renouveler au prochain tour** :

`S12, S13, S14, S15, S17a, S17b, S18, S19, S20, S21, S24, S25, S26, S27, S28a, S28b, S30, S31, S32, S33`.

État actuel : 12 parties ont une scène unique ; 24 parties partagent encore 8 fichiers de scène, dont 4 ancres validées destinées à devenir uniques lorsque les scènes voisines seront remplacées.

## 2. Schémas explicatifs

### Problèmes corrigés
- Anciens sous-titres longs non wrappés / tronqués.
- Grands vides et dessins trop génériques.
- Certaines étapes montraient presque la même image avec seulement un label différent.
- S2, S4, S5 : schémas repris en priorité.
- Musique : groupements binaires / ternaires et 12/8 rendus explicites.
- Danse : comptage cha-cha-cha recentré sur les appuis ; trajectoires et zones de sécurité.
- Dramatique : plan de scène, voix, mime et émotion sous forme de repères lisibles.

### Nouvelle génération
- `manual_assets.js` réécrit en version v3.
- **210 schémas PNG + SVG** régénérés.
- Format 1400 × 920, titre wrappé, bandeau de consigne / phrase clé complet.
- Panneaux annotés : observer, préparer, étapes a-d, pratique.
- Manifest mis à jour : `art-t9/assets/manual/diagrams/manifest.json`.

### Contrôle visuel effectué
Lecture directe de plusieurs PNG, dont :
- `s02_step_c.png` : contours / proportions, consigne complète.
- `s04_step_c.png` : répétition, alternance, inversion.
- `s05_observe.png` : horizon, premier plan, lointain, chemin.
- `s20_step_b.png` : 12/8, quatre groupes de trois, accents 1/4/7/10.

Limite : pas de rendu PDF/Word complet dans l’environnement ; contrôle par XML docx + lecture des images.

## 3. Vidéos YouTube

### Méthode
- Disponibilité : endpoint oEmbed YouTube.
- Pertinence : titre, chaîne, description, chapitres ou transcript lorsque accessibles.
- Aucun visionnage intégral revendiqué.
- Une page watch peut renvoyer 401/bot alors que oEmbed confirme la disponibilité.

### Ancien bilan
- 20 URLs distinctes testées.
- 19 disponibles, 1 morte : `n-XXUXO4BOU`.
- Plusieurs liens disponibles mais pédagogiquement faibles ou trop longs ont été retirés.

### Vidéos retirées / remplacées
- `n-XXUXO4BOU` : mort.
- `uyrpxv5pKTg` : maracas, ton humoristique, sécurité faible, association tambour incohérente.
- `SDs5WE0-u-I` : mélange couleurs, 54:57, format long / commercial.
- `IaVNharOE9I` : rythmes binaires/ternaires, 37:37, langage familier, trop long pour une séance.
- `qds0LEujwGs` : samba genré, remplacé par une version solo plus neutre.
- `oABX77s9x00` : articulation avec stylo dans la bouche, non retenu pour la classe.
- `8v88okRGVt0` : volumes/ombres, remplacé en S3 par une ressource plus ciblée sur le point de vue.
- `fwPysx2qAkg`, `5ZHLo2Orj64` : versions couple, remplacées par solo / comparaison plus adaptée.
- `hPcqEABJvzI`, `PiWI4EpjTG4` : candidats trop longs ou trop avancés, non retenus.

### Vidéos retenues
22 URLs distinctes, 26 insertions dans le manuel, 12 parties sans vidéo externe volontaire.

| Parties | Vidéo | Usage |
|---|---|---|
| S1, S2 | `zGpOxaLjVDo` | Ombres / lumières, tutoriel court. |
| S1 | `AVdNEXSqRE4` | Approfondissement valeurs / hachures, extrait choisi. |
| S3 | `0_eNDQEkyIA` | Objet en perspective / point de vue. |
| S6b, S7 | `-fTCg2QnN1Y` | Pot ballon, membrane tendue, récupération. |
| S8 | `QzEvr008LYk` | Fabrication de maracas, fermeture / sécurité. |
| S9 | `vFzhrfcD1hs` | Papier mâché, décor léger. |
| S12 | `6sPU4Kk1Jx4` | Primaires / secondaires / tertiaires. |
| S13 | `T69oOB9Dz8M` | Couleurs chaudes / froides. |
| S14, S17a | `BuEC2u95cwc` | Paysage acrylique débutant. |
| S15 | `WvEeYiklvH0` | Aplats, geste régulier. |
| S17b | `Q5mvEypVqt8` | Discrimination auditive des familles. |
| S19 | `CDdCcS3S1zA` | Binaire / ternaire débutant. |
| S20 | `weuyiLB_IBI` | Comptage 12/8. |
| S21 | `RIzK2olFoxM` | Doux / fort, nuances. |
| S23 | `Z7_X_9jO3fc` | Valse solo, chapitres 1:42 / 7:50. |
| S24 | `4yG1ocefKUs`, `g0oge8Hfzbc` | Cha-cha solo + samba. |
| S28b, S33 | `V8-5R5CsIWA` | Échauffement corporel. |
| S29 | `urbobKTMcoI` | Émotions. |
| S30 | `a4-6VRqNhi4` | Virelangues / articulation. |
| S31 | `gwnRyyDymgA` | Objet imaginaire / précision du geste. |
| S32 | `hySlQLQiJEY` | Corps, voix, espace scénique. |

## 4. Validation du docx

Commande : `node art-t9/src/manual_v2/build.js` puis `validate_docx.py`.

Résultat : **PASS**.
- Taille : 21 338 787 octets.
- 1 `sectPr`.
- Police minimale : 13 pt.
- 36 leçons, 36 pratiques, 33 séances.
- 36 tableaux 6 colonnes, 0 débordement.
- 36 liens audio.
- 52 hyperliens YouTube (26 insertions × titre + URL).
- 107 signets, 105 liens internes.
- Vidéos retirées absentes du docx.

## 5. Prochaines actions

1. Générer les 20 scènes restantes listées plus haut.
2. Harmoniser les tenues / accessoires de quelques scènes pour éviter l’effet « blouse blanche » ou matériel peu sûr.
3. Remplacer les partages restants, rebuild, revalider.
4. Refaire un contrôle visuel ciblé S12-S33.
5. Ne pas présenter le manuel comme « scènes toutes uniques » avant cette étape.
