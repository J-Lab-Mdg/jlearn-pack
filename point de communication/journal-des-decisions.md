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

### 2026-11-05 — Standard Word appliqué au Manuel Français T4 (validé par l'utilisateur)

Suite à la lecture du standard Word relevé dans `skills/JOURNAL-CONTRIBUTIONS.md` (branche `arena/01a091d2`), appliqué au Français T4 (lib `docx` v9) :
- **Styles de titres** : bannières d'unités + annexes en Heading 1 (11), titres de séances en Heading 2 (60) → volet de navigation Word fonctionnel. Apparence inchangée : surcharge `styles.default.heading1/heading2 = { run: { font, color: "000000" }, paragraph: {} }` pour neutraliser les défauts bleus 2E74B5 du lib ; les runs explicites gardent tailles/gras/couleurs.
- **Métadonnées** : title/subject/creator/description/keywords dans `new Document({...})`.
- **Langue** : `styles.default.document.run.language = { value: "fr-FR" }`.
- **Alt text** : option `altText: { name, title, description }` sur chaque ImageRun (description générée du nom de fichier si non fournie).
- Implémentation : `manuel-francais-t4/builders.js` (helpers `img`, `imgFloat`, `bookmarkTitle` — H2 auto si id =~ /^s\d+$/, `unitBanner` — H1) et `build.js`. Réutilisable tel quel pour les autres manuels de la série (T5-T9 français : à proposer à l'utilisateur).

— Agent « manuels de langues », 2026-11-05.

### 2026-11-06 — Manuel Français T3 lancé (décisions de cadrage, validées par l'utilisateur le 5 nov)

Nouveau chantier : `manuel-francais-t3/` (T3 = 9ème, 2e année de français, un niveau sous le T4). Sources : PE T3 officiel (section Français : 5 h 50/sem, 6 composantes, 6 thématiques de 32 h, textes supports de 4 à 6 phrases, valeurs « autonomie, sens de la responsabilité ») + FRP T3 fascicule 2 (`PE RAPE/FRP T3/FRP_9eme_2.pdf`), reformulés, jamais copiés.

Décisions actées :
- **Périmètre (validé via questionnaire)** : 6 unités × 12 séances = 72 séances, formule T4 à l'identique (fiches de préparation + leçons style B + 4 exercices et plus corrigés + grande leçon + exercices supplémentaires + révision + test /20 + page « Je sais… » + annexes) ; standard Word intégré d'office (Heading 1/2, métadonnées, fr-FR, alt text).
- **Niveau adapté T3** : textes supports de 4-6 phrases, leçons très visuelles, exercices guidés ; conjugaison limitée à je/tu/il/elle conformément au PE.
- **Audios** : un audio par leçon + dictées ultra courtes (1-2 phrases, une par unité), sur un Drive public dédié « JLearn Audio Français T3 » (à créer) ; liens injectés après rédaction, par fournées de 10 clips.
- **Couverture** : provisoire, charte tableau vert photoréaliste (comme T4-T10) ; la couverture finale sera fournie par l'utilisateur via `coverbook/`.
- **Unités** : U1 Les aliments (orange D35400) ; U2 La famille élargie ; U3 Le temps ; U4 L'environnement scolaire ; U5 La ferme ; U6 Le marché. Sommaire des 72 séances figé dans `build.js`. Personnages : Tiana, son frère Hery, tonton Solo (U5).
- **Dictée U1** : « Maman prépare le déjeuner. Le gâteau est plus sucré que le pain. »

État : build.js + builders.js + unité 1 complète (S1-S12) rédigés et compilés (docx de contrôle OK : rootKey=0, github=0, arena=0, Heading1/2, fr-FR, alt text). Suite : unités 2-6 à la cadence d'une par tour, puis annexes, puis audios.

— Agent « manuels de langues », 2026-11-06.

### 2026-11-06 — Français T3 : Unité 2 « La famille élargie » livrée (S13-S24)

- Couleur d'unité : violet `884EA0` (U1 = orange `D35400`). Personnages fixés pour toute la série T3 : grand-père Rabe, grand-mère Bao, tante Bodo, tonton Solo, cousine Vola, cousin Naly (+ Tiana et Hery).
- Dictée U2 : « Ma cousine Vola joue devant la maison. Avant, grand-mère habitait au village. »
- 4 nouvelles images (grande famille, arbre généalogique sans texte, veillée d'histoires, présentation en classe). Règle confirmée : pas d'apostrophe dans les textes alternatifs des images (sinon `&apos;` dans le XML).

— Agent « manuels de langues », 2026-11-06.

### 2026-11-06 — Français T3 : Unité 3 « Le temps » livrée (S25-S36)

- Couleur d'unité : bleu `2471A3`. Textes supports : CO « La journée de Hery » ; CE « Du matin au soir » (journée de Tiana, le coq, le manguier).
- Particularité U3 : 10e leçon = séance de lecture-relecture des textes de l'unité (fluidité), conformément au sommaire figé.
- Dictée U3 : « Le matin, Hery se lève tôt. Le soir, il fait ses devoirs. »
- 4 nouvelles images (réveil au chant du coq, bande des 4 moments de la journée, devoirs du soir à la lampe, déjeuner sous le manguier), toutes sans texte.

— Agent « manuels de langues », 2026-11-06.

### 2026-11-06 — Français T3 : vidéos YouTube en fin de leçon (décision utilisateur)

Nouvelle règle validée par J-Lab (questionnaire du jour) :
- **Périmètre** : T3 d'abord ; les autres manuels « on verra après ».
- **Placement** : en FIN de leçon, rubrique « 🎬 POUR ALLER PLUS LOIN — je regarde la chanson « … » (auteur) : lien ». Même convention visuelle que les liens audio (lien bleu 1F618D, taille 22).
- **Règle de prudence** : une vidéo SEULEMENT quand une vidéo fiable et bien connue colle à la leçon (répertoire FLE reconnu : Alain Le Lait, Deva, Titounis…). Sinon, pas de vidéo. Liens vérifiés par recherche croisée (titre + URL confirmés par plusieurs sources).
- 7 vidéos injectées : U1 S1 « Au petit déjeuner » (Ixl8hRHIdzg), S2 « J'aime les fruits » (yi9ef0dmz2w), S6 « Verbe avoir au présent » (MnUWNIN3zss), S7 « Verbe parler / verbes en -er » (pc7fnFdWNkk) ; U2 S13 « Ma famille » Deva (-Rlgsu1hd3s), S14 « Ma famille » Alain Le Lait (MFk9YmJv-jc), S18 « Où est le chat ? / prépositions » (npniUd2M_vI). U3 : rien d'assez fiable trouvé pour l'instant (moments de la journée, sons) — à compléter si on trouve mieux. U4-U6 : vidéos cherchées au moment de la rédaction.

— Agent « manuels de langues », 2026-11-06.

### 2026-11-06 — Français T3 : Unité 4 « L'environnement scolaire » livrée (S37-S48)

- Couleur d'unité : vert émeraude `148F77`. Textes supports : CO « Dans la cour de l'école » ; CE « Les règles de la classe ». Personnage conducteur : le maître (avec Tiana et Hery).
- Programme PE/FRP couvert : lieux et objets de l'école (S38), règles de vie scolaire (S39, S45), phrases interrogatives qui/que/où (S40, S44), phrases exclamatives Quel/Quelle/Comme (S41), consignes du maître ranger/effacer/prendre/faire/soigner (S42), révision des sons de l'année dans les mots d'école (S43), lecture des consignes d'exercices entoure/souligne/complète/relie/recopie/barre (S46).
- Dictée U4 (ultra courte, préparée) : « Je lève la main pour parler. Où est ton cahier ? »
- 4 nouvelles images sans texte (cour de récréation avec drapeau malgache, salle de classe et ses objets, élève qui lève la main, 4 vignettes de consignes).
- 2 vidéos ajoutées selon la règle du jour : S38 « Dans mon sac à dos » Bonjour Kids (PuQLcukn208) ; S44 « Qu'est-ce qu'il y a dans ta trousse ? » (ImUcSb7L428).
- Vérifications docx : H1=4, H2=48, 9 liens YouTube, alt text sans apostrophe, aucune trace github/arena.
- Prochaine étape : Unité 5 « La ferme » (S49-60, narratif, négations + futur proche, couleur `A04000`).

— Agent « manuels de langues », 2026-11-06.

### 2026-11-06 — Français T3 : Unité 5 « La ferme » livrée (S49-S60)

- Couleur d'unité : brun-roux `A04000`. Premier thème NARRATIF de l'année (annoncé dans la page d'ouverture). Textes supports : CO « Une journée à la ferme » (chez grand-père Rabe) ; CE « Les cinq poussins » (qui sème déjà la négation et le futur proche).
- Programme PE/FRP couvert : animaux de la ferme et leurs cris (S50), mâle/femelle/petit + habitats + aliments (S52), négations ne…pas / ne…plus / ne…jamais (S53), futur proche aller + infinitif (S54), sons [œ̃] un/um et [y] u (S55), récit oral avec d'abord/ensuite/enfin (S56), petit récit écrit de 4 phrases (S57), comptine à rimes + relecture des textes (S58, « rimes » du FRP).
- Dictée U5 (ultra courte, préparée) : « Lundi, nous allons voir les poussins. La vache ne dort pas. »
- 4 nouvelles images sans texte (ferme malgache avec zébus et rizières, animaux de la ferme, famille coq-poule-poussins, enfants qui nourrissent les animaux).
- 2 vidéos selon la règle en vigueur : S49 « À la ferme » (RGKAo1UQUa8) ; S50 « Dans la ferme de Mathurin » Titounis (TPYBf0yOZHc).
- Vérifications docx : H1=5, H2=60, 11 liens YouTube, alt text sans apostrophe, aucune trace github/arena.
- Prochaine étape : Unité 6 « Le marché » (S61-72, narratif, passé composé + marchandage, couleur `B7950B`), puis les annexes et les audios.

— Agent « manuels de langues », 2026-11-06.

### 2026-11-06 — Français T3 : Unité 6 « Le marché » livrée (S61-S72) — LES 72 SÉANCES SONT COMPLÈTES

- Couleur d'unité : or `B7950B`. Thème narratif. Textes supports : CO « Le jour du marché » (vendredi au village) ; CE « Hier, au marché » (récit au passé composé qui sème la grammaire de l'unité).
- Programme PE/FRP couvert : acteurs et endroits dont types de magasins épicerie/boulangerie/boucherie (S62), produits + prix + qualité cher/frais/mûr + « C'est combien ? » en ariary (S64), passé composé avoir + participe en é (S65), participes pris/vendu + articulateurs temporels hier/d'abord/puis/enfin (S66), lecture du dialogue de marchandage avec tirets et intonation (S67), jeu de rôle d'achat en 5 étapes saluer→prix→marchander→payer→remercier (S68), récit écrit au passé (S69), fluidité sur les trois textes (S70).
- Dictée U6 (ultra courte, préparée) : « Hier, j'ai acheté des bananes au marché. Elles sont mûres. »
- 4 nouvelles images sans texte (grand marché aux parasols, étal de la marchande, produits sur la table, Tiana qui paie — billet sans chiffres).
- 2 vidéos selon la règle : S61 « Au marché ! » chanson FLE (9KxxbzEpHNQ) ; S64 « Ah, les légumes » Alain Le Lait (uClmyxxtWxw).
- Page « Je sais faire » finale : « BRAVO ! J'AI TERMINÉ MES 72 SÉANCES DE FRANÇAIS ! »
- Vérifications docx : H1=6, H2=72, 13 liens YouTube, alt text sans apostrophe, aucune trace github/arena.
- Prochaine étape : les ANNEXES (A-F adaptées T3), puis les audios voice-01 + Drive « JLearn Audio Français T3 ».

— Agent « manuels de langues », 2026-11-06.

### 2026-11-06 — Français T3 : les 6 ANNEXES + page finale livrées — MANUEL COMPLET (hors audios)

- Annexes sur le modèle du T4, adaptées au niveau et au programme T3 (violet `4A235A`) :
  - **Annexe 1 — L'imagier des 6 thématiques** : tout le lexique de l'année, une image et cinq rubriques par unité.
  - **Annexe 2 — Le guide du petit rédacteur** : les 2 types de textes (descriptif U1-U4, narratif U5-U6), les plans des productions (phrases qui décrivent, règles de classe, récit de la journée, récit au passé) et la routine du petit écrivain.
  - **Annexe 3 — Toute la conjugaison** : être, avoir, faire, aller, jouer, acheter aux 4 temps (présent, imparfait, futur proche, passé composé) + tu veux/peux/dois + participes à connaître ; note « aller se conjugue avec être ».
  - **Annexe 4 — Flashcards et jeux** : 4 cartes recto/verso par unité + 5 jeux de classe.
  - **Annexe 5 — Les stratégies de lecture** : modélisation, écoute et lecture, écho, unisson, chaîne, groupes de souffle.
  - **Annexe 6 — Orthographe et sons** : le tableau des 8 maisons des sons de l'année ([ã] [õ] [œ] [ɛ̃] [o] [u] [œ̃] [y]) + règles anti-fautes + homophones spécial dictée.
  - **Page finale « FÉLICITATIONS »** avec Tiana, Hery et grand-père Rabe.
- Mise à jour du sommaire figé de build.js : les intitulés U5/U6 (écrits au scaffold) alignés sur le contenu réellement livré, + 6 entrées d'annexes avant la page finale.
- Vérifications docx : H1=12 (6 unités + 6 annexes), H2=72, 13 liens YouTube, signets annex1-6 et final présents, alt text sans apostrophe, aucune trace github/arena. ~7,8 Mo.
- Reste pour clôturer le T3 : les AUDIOS voice-01 (un par leçon + 6 dictées) et le Drive public « JLearn Audio Français T3 », puis l'injection des liens 🎧.

— Agent « manuels de langues », 2026-11-06.

## 2026-11-06 — Français T3 : audios Unité 1 (S1-S10)
- 10 clips générés (voice-01, convention T4 : `u1_sN_ecoute/lecon.mp3`) : passage d'écoute lu 2×, lexique+goûts, texte de lecture, adjectifs, comparatifs, être/avoir/faire, verbes en -er, sons [ã]/[õ], boîte à phrases PO, plan + modèle PE.
- Dossier Drive public dédié créé : « JLearn Audio Français T3 » (`19OTOu6ppUJW31C6dyAhxSqu-Yp7GdOmI`), lecture seule, 10 MP3 uploadés ; IDs consignés dans `manuel-francais-t3/audio/drive_ids_u1.txt`.
- Sauvegarde GitHub des MP3 : commit `4672904`.
- Suite : U2 (S13-S22) au prochain tour, puis U3→U6, puis les 6 dictées ultra courtes, et enfin injection des blocs 🎧 dans unit1-6.js + rebuild.
— JLearn (atelier), 6 novembre 2026

## 2026-11-06 — Français T3 : audios Unité 2 (S13-S22)
- 10 clips générés (voice-01) : passage « La grande famille de Tiana » lu 2×, lexique famille élargie, lecture arbre généalogique, pronoms il/elle/ils/elles, possessifs, indicateurs temps/lieu, imparfait, sons [œ]/[ɛ̃], PO présentation famille, PE quatre phrases.
- 10 MP3 uploadés dans le Drive public T3 ; IDs consignés dans `manuel-francais-t3/audio/drive_ids.txt` (fichier renommé, couvre U1+U2).
- Sauvegarde GitHub : commit `0f6b778`.
- Suite : U3 (Le temps), U4, U5, U6, dictées, puis injection 🎧 + rebuild.
— JLearn (atelier), 6 novembre 2026
