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

---

## Projet : Manuel_Geographie_T8_JLearn.docx

### 2026-11-05 — Qualité des titres de rubrique + audit FRP

#### Décisions projet

- Source officielle de méthodologie/contenu pour ce manuel : `FRP_T8_GEOGRAPHIE.pdf` (69 pages, 6 THEMATIQUEs, 64 ressources `RES 1a`–`RES 6g`).
- ATTENTION — une citation de source avait été mal recopiée (fichier type `FRP_8eme` qui ressemblait au nom du tome « T8 » mais qui était en réalité erroné) ; corrigée après vérification croisée avec `git ls-tree` sur le dossier réel `PE RAPE/`. **Règle retenue : toujours vérifier une citation de source sur les fichiers réels du dépôt avant de la réutiliser, ne jamais se fier à la ressemblance du nom de fichier avec le nom du tome.**
- Les titres de « rubrique 3 » (celle qui introduit l'exemple/la mise en situation) **ne doivent jamais contenir de prénom**, même pour introduire l'exemple (ex. « Le cas de {Prénom} » ou « {Type de document} de {Prénom} » sont rejetés, car le prénom est de toute façon répété juste après dans la phrase du corps — jugé répétitif/frustrant par l'utilisateur). Solution retenue : titre basé sur le type de document ou sur un verbe d'activité, sans aucun prénom. À réutiliser comme modèle si ce traitement est étendu à d'autres tomes.
- Audit exhaustif FRP vs manuel réalisé : structure 1:1 confirmée (6 THEMATIQUEs ↔ 6 unités), couverture conceptuelle large confirmée. 3 écarts concrets identifiés et corrigés (commit `930a22b`) :
  1. Unité 2 (méthodologie, séances 10/11) : ajout de « lire le texte trois fois », de « l'intention de l'auteur » comme élément du travail préliminaire, et de la règle « ne jamais utiliser la première personne (« je ») ».
  2. Unité 3 (séance 20, pays en développement) : ajout du sigle **OPEP** (Organisation des pays exportateurs de pétrole), absent alors que le concept de « pays pétroliers » était déjà présent.
  3. Unité 4 (séance 23, l'Afrique) : remplacement de la formule générique « Madagascar et d'autres îles » par les noms réels (Comores, Maurice, Seychelles).
- Écarts jugés acceptables et **non corrigés volontairement** : statistiques datées du FRP (taux de croissance du PIB 2019, répartition des 47 PMA par région Afrique/Asie/Caraïbes/Pacifique, attribution « PNUD » pour l'IDH) — jugées trop figées dans le temps pour un manuel durable ; confirmé avec l'utilisateur.
- Limite signalée à l'utilisateur : ~15 ressources du FRP (RES1a/1c/1e/1g/1k/1m, RES3d/3f/3g/3i, RES4a/4c/4d/4e/4f/4i/4j/4l/4n/4o/4t) sont des images/cartes/graphiques sans texte extractible par PDF ; leur contenu visuel exact n'a pas pu être vérifié contre le manuel.

#### Méthode technique utilisée (réutilisable)

- Extraction texte PDF via `pypdf` (le PE/FRP ne peut pas être lu directement par l'outil `read_file`, il renvoie `{"kind":"unsupported"}` pour les PDF).
- Correction de phrases dupliquées dans un `.docx` : remplacement au niveau des `run` python-docx (pas seulement `paragraph.text`, qui est en lecture seule) avec repli (fallback) en reconstruisant le paragraphe entier dans le premier run si la phrase cible est répartie sur plusieurs runs (cas des mots-clés en gras).
- Important : les phrases du corps de leçon sont souvent dupliquées telles quelles dans les exercices, corrigés, révisions, examens **et un grand tableau récapitulatif final** (`d.tables`, pas seulement `d.paragraphs` — un parcours par `python-docx` doit inclure les cellules de tableau, y compris les tableaux imbriqués). Une correction doit être propagée à toutes les occurrences, pas seulement au premier paragraphe trouvé.
- Validation systématique après modification d'un `.docx` : intégrité du zip (`zipfile.testzip`), nombre de paragraphes et de tableaux inchangé, comptage exact des remplacements effectués vs attendus.

#### Erreurs à éviter

- Ne pas supposer qu'un nom de fichier de citation est correct uniquement parce qu'il ressemble au nom du tome.
- Ne pas répéter un prénom d'exemple dans le titre ET dans la première phrase du corps (répétitif).
- Ne pas modifier `paragraph.text` directement en python-docx pour une correction ciblée (perd le formatage) ; toujours passer par les `run`.
- Ne pas oublier les tableaux (`d.tables`) lors d'une recherche/correction de texte dans un `.docx` — le texte y est souvent dupliqué massivement (tableau récapitulatif final).
