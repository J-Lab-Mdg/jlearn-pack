# Journal des décisions — J-Learn

Ce journal garde les décisions importantes par projet.  
Les agents doivent le compléter, pas le réécrire.

---

## Projet : Art_T9_J-Learn.docx

### 2026-11-05 — Discussion pédagogique Arts T9

#### Décisions projet

- Le manuel cible est `Art_T9_J-Learn.docx`.
- La source officielle pour le programme est `PE RAPE/PE T9.pdf`.
- Le PE PDF donne pour les Arts :
  - Dessin : 11 h
  - Peinture : 11 h
  - Sculpture : 11 h
  - Musique : 11 h
  - Danse : 11 h
  - Art dramatique : 11 h
  - Total : 66 h, soit 33 séances de 2 h.
- La V1 en 25 séances / 50 h était basée sur `PE_T9 (1).docx` ; elle doit être révisée.
- La séance 6 reste conforme au PE : sculpture / fabrication d'un instrument à percussion recyclable.
- La séance 6 doit être rendue compréhensible pour un enseignant débutant.
- Les termes « OK » et « PAS OK » sont abandonnés.
- Les symboles ✔️ et ✗ rouge peuvent être utilisés, mais seulement quand un contre-exemple est pédagogiquement utile.
- L'évaluation doit être centrée sur la production de l'élève.
- L'écrit court est accepté seulement s'il aide à nommer, identifier, décrire ou apprécier.
- Les médias doivent inclure :
  - une image de scène scolaire ;
  - un audio ;
  - un lien vidéo tutoriel quand pertinent.
- La logique des visuels doit suivre le PE :
  1. modèle à observer ;
  2. étapes techniques ;
  3. production attendue.

#### Nouvelle orientation majeure

Le manuel doit d'abord aider **l'enseignant**.

L'utilisateur insiste sur le fait que la discipline Arts est nouvelle pour beaucoup d'enseignants à Madagascar. Il faut donc produire un manuel qui explique :

- comment enseigner ;
- quoi dire ;
- quoi montrer ;
- quoi faire faire ;
- comment organiser la classe ;
- comment évaluer une production artistique.

La leçon élève peut exister, mais comme **résumé court** après le guide enseignant.

#### Décision complémentaire — guide enseignant

- L'utilisateur veut un manuel centré sur l'enseignant débutant.
- Niveau de détail choisi : **étapes + phrases clés**, pas un script mot à mot complet.
- Prochaine étape validée : produire un **prototype de la séance 1** en version guide enseignant.
- Le prototype doit montrer :
  - ce que l'enseignant doit comprendre ;
  - ce qu'il faut préparer ;
  - le déroulement pas à pas avec phrases clés ;
  - les erreurs fréquentes seulement si utiles ;
  - l'évaluation par observation ;
  - une courte trace élève ;
  - les ressources média : image scène scolaire, audio, QR code / lien.

#### Décision complémentaire — ordre fiche / leçon / pratique

L'utilisateur a corrigé le prototype précédent :

- Les blocs **A à E** doivent être **dans la fiche de préparation**, jusqu'à l'évaluation, comme dans les autres matières.
- Après la fiche, il y a la **leçon expliquée et illustrée**.
- La leçon commence par **l'image de scène scolaire**, puis quelques phrases d'explication.
- Ensuite :
  1. **Observation de l'objet** avec image et flèches montrant les éléments à remarquer ;
  2. **Les nuances** : trois gris, avec un nuancier que les élèves remplissent d'abord au crayon ;
  3. **Le dessin de l'objet** :
     - a. esquisse expliquée et illustrée geste par geste ;
     - b. modelé / impression de volume expliqué et illustré geste par geste ;
     - c. ombre portée et finitions ;
     - d. comparaison / ajustement.
- Le champ après la leçon s'appelle **PRATIQUE**, pas « Exercices ».
- La pratique donne **un autre objet à dessiner** et des **liens vidéo YouTube** de tutoriel.
- Terme pédagogique retenu : **modelé** pour l'impression de volume ; la feuille reste en 2D, les valeurs suggèrent la 3D.

#### Décision complémentaire — prototypes pilotes par sous-discipline

L'utilisateur a validé la méthode proposée :

- Ne pas généraliser immédiatement les 33 séances.
- Garder la structure commune : **fiche A-E → leçon illustrée → pratique de transfert**.
- Adapter le cœur technique à chaque sous-discipline.
- Produire des prototypes pilotes :
  - peinture ;
  - sculpture, séance 6 conservée ;
  - musique/chant ;
  - danse ;
  - art dramatique.
- Les prototypes pilotes sont dans `art-t9/output/pilots/`.
- Les assets et audios des pilotes sont dans `art-t9/assets/pilots/`.
- Les générateurs sont `art-t9/src/pilots_assets.js` et `art-t9/src/build_prototypes_pilots.js`.
- Pour la musique, l'audio généré est une **consigne parlée**, pas un modèle chanté ou instrumental réaliste.

#### Questions ouvertes

- Répartition exacte des 33 séances :
  - arrondir à des séances entières par domaine ;
  - ou utiliser des séances charnières pour respecter 11 h exactes.
- Format exact du guide enseignant :
  - script oral complet ;
  - ou étapes avec phrases clés ;
  - ou double colonne enseignant / élève.
- Choix des vidéos YouTube :
  - liens du FRP ;
  - ou recherche de tutoriels adaptés ;
  - ou liens à valider par l'utilisateur.
- Audio :
  - voix enseignante ;
  - consignes ;
  - comptage ;
  - répliques ;
  - limite : pas de musique instrumentale réaliste générée automatiquement.

#### Erreurs à éviter

- Ne pas dire que l'utilisateur a demandé de supprimer la séance 6.
- Ne pas remplacer une séance du PE sans validation explicite.
- Ne pas proposer des options de visuels sans les relier aux attentes du PE.
- Ne pas refaire une V1 uniforme avec exercices écrits systématiques.

## Manuel complet validé — 33 séances / 66 h

- Feu vert utilisateur reçu après validation des pilotes : généraliser à tout le manuel.
- Police agrandie : corps et tableaux **14 pt**, sous-titres **16 pt**, titres principaux plus grands ; légendes/labels au minimum **13 pt**.
- Répartition exacte corrigée : **3 séances charnières** (S6, S17, S28), pas six. Cela donne **36 parties de leçon** pour 33 séances.
  - Dessin : S1-S5 + S6a = 11 h.
  - Sculpture : S6b + S7-S11 = 11 h.
  - Peinture : S12-S16 + S17a = 11 h.
  - Musique : S17b + S18-S22 = 11 h.
  - Danse : S23-S27 + S28a = 11 h.
  - Art dramatique : S28b + S29-S33 = 11 h.
- S6 conserve le projet instrument de percussion recyclable : S6a bilan dessin, S6b lancement sculpture/instrument, S7 fabrication.
- Livrable final : `art-t9/output/Art_T9_J-Learn.docx`.
- Générateurs : `art-t9/src/manual_v2/` (curriculum, données par sous-discipline, assets, audio, build, validation).
- Médias : scènes scolaires réutilisées par familles, 210 nouveaux diagrammes techniques, 36 QR audio, 36 liens audio MP3. Les 6 audios pilotes/S1 sont réutilisés ; 30 nouvelles consignes sont produites par 10 clips parlés puis découpées aux silences.
- Musique : les audios du manuel restent des **consignes parlées**, pas des modèles chantés ou instrumentaux réalistes.
- Validation XML : 1 `sectPr`, police Times New Roman, taille minimale 13 pt, 33 signets séances, 36 leçons, 36 pratiques, 36 tables 6 colonnes, 36 liens audio, sommaire interactif par signets, absence de champ TOC natif, absence « OK/PAS OK ».

## Correctif tableau de déroulement (retour capture utilisateur)

- Défaut constaté : cellules en débordement à droite du tableau + en-têtes « Observation / Technique » écrasés caractère par caractère.
- Cause : `docx` insère AUTOMATIQUEMENT les cellules de continuation (`vMerge continue`) pour les `rowSpan: 2` de la ligne 1 ; le builder en ajoutait aussi manuellement → ligne 2 à 10 cellules pour une grille de 6.
- Correctif : la ligne 2 ne contient plus que « Enseignant » et « Apprenants » ; les 4 continuations sont laissées à la bibliothèque.
- Largeurs rééquilibrées (total 10200 twips) : [1100, 2475, 2475, 1400, 1150, 1600] pour que chaque en-tête tienne sans césure verticale à 13 pt.
- Validateur renforcé : chaque ligne de chaque tableau doit couvrir exactement sa grille ; en-tête déroulement ligne 2 = 6 cellules.


## Correctif médias partiel — 2026-11-06

- Retour utilisateur : scènes répétées, schémas incompréhensibles (S2/S4/S5 cités), image d’ouverture incohérente, vidéos à vérifier.
- Cause scènes : mapping initial 12 fichiers pour 36 parties, réutilisation par domaine.
- 10 nouvelles scènes intégrées (S2-S5, S6a/b, S8-S11). Limite de génération atteinte : 20 scènes restent à renouveler, listées dans `art-t9/AUDIT-MEDIAS-2026-11-06.md`.
- Schémas : `manual_assets.js` v3, 210 PNG/SVG régénérés, consignes wrappées, S2/S4/S5 et 12/8 repris en priorité.
- Vidéos : audit oEmbed + description/chapitres/transcript quand accessibles ; lien mort remplacé ; liens trop longs, genrés, peu sûrs ou hors sujet retirés. Corrections centralisées dans `media_corrections.js`.
- Validation docx PASS ; ne pas revendiquer « toutes les scènes uniques » ni « vidéos intégralement visionnées ».
