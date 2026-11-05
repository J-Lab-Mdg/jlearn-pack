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

---

## Projet : Manuels de langues — Anglais T4→T11 et Français T4→T9

### 2026-11-05 — État et décisions (agent « manuels de langues », branche `arena/01a0e967-jlearn-pack`)

Lettre de passation complète : `Lettre-de-passation-Relais3.md` (racine du dépôt).

#### État d'avancement

- Livrés à 100 % : Anglais T4 (dossier `manuel/`, PAS `manuel-t4/`), Anglais T5→T10 (`manuel-t5/`…`manuel-t10/`), Français T4→T9 (`manuel-francais-t4/`…`manuel-francais-t9/`).
- Français T4 : terminé le 2026-11-05 — 60 séances, 6 annexes, 55 audios (50 leçons + 5 dictées) sur Drive public.
- Anglais T11 : EN PAUSE à 42 séances sur 86 (`manuel-t11/`). Reprendre à la séance 43.
- À venir : cahiers d'élèves scannés (référence de style « humain » annoncée par l'utilisateur).

#### Décisions projet (validées par l'utilisateur)

- Terminologie : dire « fiche de préparation », JAMAIS « fiche péda ». « Specific learning outcome » ; E.A./R.A.
- Fiches de préparation des manuels livrés : NE PAS RETOUCHER.
- Leçons « style B » : règle courte + mots-outils en gras + exemples clés en gras + note [entre crochets] = image mentale à NE PAS copier par l'élève.
- Exercices : 4 minimum par leçon ; corrigé en gris italique APRÈS CHAQUE exercice ; items a) b) c) chacun à la ligne (jamais sur une seule ligne) ; exercices « relier » en 2 colonnes.
- Audios : un par leçon + 1 dictée par unité ; voix TTS voice-01 (français) / voice-00 (anglais, « Soa » se prononce « So-ah ») ; hébergement Google Drive public UNIQUEMENT (dossiers « JLearn Audio … », lecture seule) ; AUCUN lien GitHub dans un manuel ; les .docx ne vont JAMAIS sur Drive ; copie de sauvegarde des MP3 dans `manuel*/audio/` du dépôt.
- Couvertures : fournies par l'utilisateur (`coverbook/`) ; charte T4–T10 photoréaliste « tableau vert » ; ne jamais inventer un design.
- Anti « trop IA » : limiter couleurs et encadrés ; garder surlignage jaune, images, majuscules ; rédiger « de manière la plus humaine possible ».

#### Méthode technique (réutilisable)

- Build : Node.js + `docx` (`npm install docx --no-save` à la racine, puis `git checkout -- package.json package-lock.json` avant commit) ; `node build.js` dans chaque dossier manuel.
- Vérifications XML systématiques après chaque build : `<rootKey` = 0 (bug Word « contenu illisible »), « github » = 0, « arena » = 0 dans document.xml ; compter les 🎧 et les drive.google.com.
- Upload Drive : via le connecteur (googleapis.com est bloqué en accès direct depuis le bac à sable).
- Limites outils : 10 images / 10 clips audio par tour.

#### Erreurs à éviter

- Ne pas « corriger » les faux positifs : doubles espaces du lexique, mot « malgache », erreurs pédagogiques volontaires des exercices, champ « Classe : » vide.
- Vérifier la langue des textes incrustés dans toute image réutilisée entre manuels anglais et français (ex. bulle « Hello! » interdite dans un manuel de français).
- Pour injecter des liens dans les unitN.js : borner la recherche à la fonction/leçon courante (une regex trop large a déjà fait glisser des liens d'une séance à l'autre).

— Agent « manuels de langues », 2026-11-05.

---

## Cartographie des savoirs du dépôt (relevé inter-branches)

### 2026-11-05 — Où trouver ce que les autres agents ont appris (agent « manuels de langues »)

Balayage des ~40 branches du dépôt effectué le 2026-11-05. Connaissances utiles repérées hors de ce dossier :

- `Lettre-de-passation-Relais2.md` (racine, toutes branches) : Manuel Maths 7e — 9/81 fiches, décisions propres (calcul mental 5 min intégré, corrigé #E9704F, 1 fiche = 1 technique).
- `Lettre-de-passation-Relais3.md` (racine, branche `arena/01a0e967`) : manuels de langues Anglais T4–T11 + Français T4–T9.
- Branches `arena/01a07d83` et `arena/01a07ff1` : **projets Français primaire** `francais-11e-projet/` (CP1, 8 thèmes, 80 séances, COMPLET) et `francais-10e-projet/` (CP2, 120 séances prévues, blocs 1-4+ livrés) avec leurs lettres `LETTRE-PASSATION-BLOCN.md`. Décisions clés : séances 30 min (I 3-4/II 22/III 4-5), barème /20, ≥4 items, Times New Roman, guillemets « » dans le JS, jamais « ministère », images IA sans texte avec personnages malgaches et tableau noir vierge. Bug de référence : un paragraphe écrit en « tableau nu » `[{t:…}]` au lieu de `t([{t:…}])` disparaît silencieusement du docx.
- Branche `arena/01a091d2` : `skills/JOURNAL-CONTRIBUTIONS.md` — protocole « toujours confirmation de J-Lab avant application » ; leçon : contre-vérifier tout audit externe avec les sources officielles avant d'appliquer des suppressions ; standard Word utile (corps 12 pt, marges 2,5 cm, titres Heading1 pour le volet de navigation, alt text sur images, métadonnées) ; alphabet malgache sans c/q/u/w/x → lettrage a) b) d) e).
- Branche `arena/01a0872d` : `LETTRE-PASSATION-SVT-T7.md`.
- Branche `arena/5d8160d9` : applications hors-ligne (`pass-education-offline/`, `malagasyword-offline/`, etc.) avec LISEZMOI.
- Branche `arena/c61474f3` : `manuel-malagasy-t6/` (+ réf. mémoire UA 2014).

Règle pratique : pour balayer les branches, `git ls-remote --heads origin` puis `gh api repos/J-Lab-Mdg/jlearn-pack/git/trees/<sha>?recursive=1 --jq '.tree[].path'` (raw.githubusercontent est bloqué dans certains bacs à sable ; passer par `gh api …/contents/<chemin>?ref=<sha>`).

— Agent « manuels de langues », 2026-11-05.
