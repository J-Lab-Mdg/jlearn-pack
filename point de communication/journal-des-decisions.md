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

## Correctif médias finalisé — 2026-11-06

- Suite du correctif partiel : les 20 scènes restantes sont intégrées. Bilan scènes : **36 parties = 36 fichiers distincts** ; 30 renouvelées (17 IA retenues + 13 vectorielles), 6 ancres pilotes conservées.
- Trois candidates IA rejetées (S26 saut/pieds nus, S28b échauffement hors cœur, S33 livre ≠ conte) remplacées par vectoriel ; ne pas les réutiliser.
- S15 : schéma d’aplats remplacé par motifs de paysage ; vidéo d’aplats retirée. S17a : tutoriel peinture retiré. S28b/S33 : échauffement retiré.
- Vidéos final : **20 URLs distinctes / 22 insertions / 16 parties sans vidéo** ; oEmbed positif le 06/11/2026 ; aucun visionnage intégral revendiqué.
- Schémas : 210 PNG/SVG v3, PNG optimisés palette ; S2/S4/S5/S15/12/8 contrôlés visuellement.
- Validateur renforcé : scène réutilisée = erreur ; IDs `WvEeYiklvH0` et `V8-5R5CsIWA` ajoutés aux interdits.
- Livrable rebuildé : `art-t9/output/Art_T9_J-Learn.docx`, validation XML PASS. Rapport : `art-t9/AUDIT-MEDIAS-2026-11-06.md`.
- Limites assumées : pas de rendu PDF/Word complet ; toutes les scènes ne sont pas IA ; quelques vestes/blouses blanches IA restent à harmoniser plus tard si besoin.

## Arbitrage utilisateur — améliorations Arts T9 — 2026-11-06

- Audios : ne plus les héberger sur GitHub ; les mettre sur Google Drive. ZIP audio téléchargeable en un clic demandé.
- Acceptés : grille observable, vidéos/extraits si possible, différenciation, checklist matériel/sécurité, timing, trace élève, validation terrain, harmonisation visuelle, audio sans smartphone, navigation, ancrage local, accessibilité, progression par compétences, variantes.
- Refusés : version élève séparée (trop lourd, pas d’autre doc pour le moment) ; portfolio/bilats.
- Crédits/licence/traceabilité : reprendre la convention déjà présente dans les manuels de géographie identifiés : `Geographie_T6_JLearn.docx` (Authenticité et droits, © J-Learn, avant-propos, mode d’emploi, glossaire, sources), `Manuel_Geographie_3e_VF_V1.docx`, `Manuel_Geographie_1ereACD_V1_FINAL.docx`.
- Audit des remarques « Claude » : majorité confirmée sur le docx courant (coquilles, gabarits, notes internes, S1/S20, sommaire charnières, alt-textes, liens GitHub). Certaines remarques design sont partielles ou non vérifiables ici (rendu LibreOffice/Word, pagination exacte) ; la répétition de scènes est déjà corrigée (36 scènes uniques).
- Drive commencé : dossier `J-Learn — Audios Arts T9` créé et public ; ZIP `Art_T9_Audios_J-Learn.zip` uploadé et public ; 32/36 MP3 uploadés. Limite d’upload atteinte : restent s30, s31, s32, s33 à uploader après pause (≥ 15 s) au prochain tour.
- Correctifs sources appliqués sans rebuild final : coquille S7/S18, titres « ceci : », synthèses « Donc, » + minuscule, retrait note police/type d’examen, gabarit « voir les six sous-étapes », support générique, double libellés I/II/III, sommaire charnières, S20 écoute silencieuse + question son long + synthèse élargie.


### 2026-11-06 — Exécution du lot d’améliorations accepté (V3)
- Arbitrage utilisateur appliqué : OUI aux points 2–13, 17, 19 ; NON au document élève séparé (15) et aux bilats/portfolio (18) ; MODIFIÉ : audios sur Drive (1), ZIP un clic (16), convention crédits des manuels de géographie (14).
- Livrable régénéré : `art-t9/output/Art_T9_J-Learn.docx`. Audios Drive 36/36 + ZIP public ; QR décodés 39/39 ; validateur docx PASS.
- Ajouts : grille observable unique, timing réel, checklist, différenciation, trace, variantes, ancrage local, progression, glossaire, sources, navigation/signets, footer pages, alt-textes, transcription/version texte audio.
- Honnêteté : vidéos = liens/repères, pas lecteur embarqué ; 10 repères restent à sélectionner par l’enseignant ; pas de rendu Word complet possible ici ; pas de revendication « toutes scènes IA » ni « vidéos intégralement visionnées ».

### 2026-11-06 — Lot simplification / refonte (V4 partiel)
- Demandes appliquées : titres brefs MAJ, bloc vidéo compact numéroté avec icône YouTube + URL, audio simplifié en pied de page (Audio 10 pt + QR + Texte + vidéos), transcriptions regroupées en annexe, 71 sections Word pour pieds de page par partie.
- Scènes : 10 vectorielles remplacées par des scènes réalistes avec personnes. Limite de génération d’images atteinte (10/tour) : S19/S20/S21 restent vectorielles provisoires, à régénérer au prochain tour. Ne pas revendiquer « toutes les scènes réalistes/IA ».
- Vidéos danse : ajout S25/S26/S27/S28a (WgVKfTkwU1U, E7MFKBj4E3o, FThZeqfIMBo). Vidéos en anglais, reformulation enseignant ; E7MFKBj4E3o avec réserve transcript. Bilan : 23 URLs / 26 insertions / 12 parties sans vidéo.
- Livrable rebuildé : `art-t9/output/Art_T9_J-Learn.docx` (17 042 097 o), validateur docx PASS, QR 39/39. Rapport : `art-t9/AUDIT-MEDIAS-2026-11-06.md` section 7.

### 2026-11-06 — Finalisation V4 : scènes musique et pieds de page
- S19/S20/S21 régénérées en scènes naturalistes avec personnes, style S25. Les 13 anciennes scènes vectorielles d’ouverture sont toutes remplacées : 30 IA + 6 pilotes, 36 scènes distinctes. Ne pas revendiquer « toutes les scènes IA » ni des photographies documentaires.
- QA visuelle : S14 reprise pour âge T9, S28b reprise pour âge T9 et chaussures fermées. SVG vectoriels historiques archivés ; générateur vectoriel désactivé par défaut.
- Pieds de page corrigés : QR 80 px décodable, Audio seul en 10 pt, autres textes 13 pt, marge basse réservée, mapping section→footer vérifié (audio/QR/Texte/vidéos/page).
- Validateurs : docx PASS ; QR 75/75 (39 sources + 36 réduits). Scan physique et rendu Word restent à vérifier sur le poste enseignant.
