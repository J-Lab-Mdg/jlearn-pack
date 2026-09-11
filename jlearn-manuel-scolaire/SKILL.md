---
name: jlearn-manuel-scolaire
description: Création et traitement des manuels scolaires de la Collection J-Learn (Madagascar). Rédige un manuel complet (couverture, avant-propos, séances avec fiche de préparation + leçon + exercices + corrigés, annexes) à partir d'un programme scolaire, ou enrichit/corrige un manuel .docx existant. Utiliser quand l'utilisateur parle d'un manuel J-Learn, d'une fiche de préparation, d'un enrichissement de séances, d'une création de manuel à partir d'un programme, ou envoie un fichier Manuel_*.docx (ou un programme scolaire officiel).
---

# Collection J-Learn — Manuels Scolaires Madagascar

**Version du skill : v19** — historique des changements : [`CHANGELOG.md`](CHANGELOG.md). Avant de mettre à jour un manuel existant selon une version plus récente du skill, voir [`audit-conformite.md`](audit-conformite.md).

## ⚠️ Règles critiques — à ne JAMAIS enfreindre

Ces règles priment sur tout le reste. Les relire avant toute production ou modification :

1. **Ne jamais commencer** à rédiger ou modifier quoi que ce soit avant le feu vert explicite de l'utilisateur (voir Étape 0).
2. **Matière EPS** et **niveau préscolaire** : ne rien produire, ne rien modifier. Laisser le `.docx` tel quel.
3. **Logo / en-tête institutionnel** : ne jamais toucher — l'utilisateur l'insère lui-même.
4. **`<w:sectPr>`** (propriétés de page) : ne jamais le supprimer ni le dupliquer — exactement 1 par document.
5. **Namespaces `<w:document>`** : ne jamais réécrire cette balise — la conserver intacte depuis un fichier source J-Learn (32 namespaces attendus, 0 `ns0:`).
6. **Contenu des séances d'évaluation** : ignorées entièrement, jamais enrichies.
7. **Toujours garder une copie non modifiée du fichier source** avant toute transformation.
8. **Rédiger du contenu réel, jamais des méta-instructions.** Voir section "Règle de rédaction" ci-dessous.
9. **Fiche prête à l'emploi** : chaque cellule de la fiche doit être utilisable directement par l'enseignant en classe — consignes claires, réponses détaillées (pas résumées), exercices rédigés intégralement. Jamais de descriptions de ce qu'il faudrait faire.
10. **Fichiers générés de zéro** : toujours dans `/home/runner/workspace/`, jamais dans `/tmp/` (ephémère, perdu au redémarrage).
11. **Jamais de dates calendaires précises** (ex : "10/09/2023 au 06/2023", "rentrée 2024"). Le manuel doit rester utilisable d'une année scolaire à l'autre. Un découpage thématique (Trimestre 1, Unité I, Période I…) est autorisé — une date de calendrier ne l'est jamais, nulle part dans le manuel.
12. **Sommaire interactif obligatoire** : titres et sous-titres cliquables dans Word, qui restent fonctionnels après conversion en PDF **sans aucune manipulation de l'utilisateur**. Voir section "Sommaire interactif" ci-dessous.
13. **Fiabilité du vocabulaire et du contenu** : ne jamais inventer un mot, un terme technique ou une tournure douteuse (ex : un néologisme qui sonne français mais n'existe pas). En cas de doute sur un terme, une date, un fait ou une terminologie pédagogique, **vérifier par une recherche internet** avant de l'utiliser. Toute source externe ayant servi à fiabiliser ou compléter le contenu doit être **citée dans la bibliographie/webographie** du manuel — champ **"Fanovozan-kevitra"** (documentation) de chaque fiche pour une source ponctuelle, ou section finale **"Loharanom-Baovao"** (bibliographie/webographie) du manuel pour une vue d'ensemble.
14. **Relecture externe : vérifier avant d'appliquer.** Toute suggestion de correction venant d'une relecture externe (retour d'un tiers, d'un autre outil…) doit être vérifiée contre le texte source avant application — jamais appliquée en bloc. Une correction présentée comme "grave" peut être une fausse alerte (ex : confusion entre une affirmation du cours et un item Vrai/Faux volontairement faux dans un exercice).
15. **Droit d'auteur / plagiat sur le manuel source.** Un manuel source (fichier `.docx` fourni par l'utilisateur) mélange deux types de contenu à traiter différemment :
    - **Faits réels** (noms de rois, présidents, dates, toponymes, événements historiques/civiques) → à garder tels quels, ce sont des faits, pas une création protégeable.
    - **Exemples pédagogiques fictifs** inventés par les auteurs du livre source (prénoms de personnages dans les exercices, scénarios de mise en situation, familles fictives, noms de villages fictifs…) → à **remplacer systématiquement** par d'autres noms ; si la situation est racontée de façon très proche du texte original (même enchaînement narratif), **reformuler aussi le récit avec d'autres mots**, pas seulement changer les noms propres.
    Méthode : lister tous les noms/situations fictifs repris du livre, proposer des remplacements, faire valider par l'utilisateur avant de les appliquer partout (recherche-remplace globale), puis vérifier qu'aucun résidu ne subsiste — attention en particulier aux formes grammaticales malgaches fusionnées sans espace (ex. "-dRakoto", "an-dRainikoto") : un remplacement par simple limite de mot peut les rater, vérifier avec une recherche large après coup.
16. **Ne jamais sur-préciser ce qui est déjà implicite — quelle que soit la langue.** Si une étape ne mentionne pas que l'élève écrit/répond/agit, cela signifie déjà qu'il ne le fait pas. Ne jamais ajouter de note qui explique ce que l'élève **ne fait pas** (ex. "les élèves n'écrivent rien à ce stade", "il ne leur demande pas de la recopier"). Ne jamais ajouter non plus une action implicite comme si elle était nécessaire (ex. "et notent le titre" à l'étape Présentation, alors que "Écoutent." suffit). Cette règle s'applique en français comme en malgache et en anglais — une erreur commise une fois dans une langue doit être vérifiée dans les deux autres avant de considérer la correction terminée.

---

## Contexte

Programme : **Collection J-Learn** — Madagascar (RAPS).
Niveaux couverts : primaire, collège, lycée — **toutes matières sauf EPS**.
Format des fichiers : `.docx` uniquement.

Le skill couvre trois types de tâches :
- **Traitement A — Fiche de préparation** : enrichissement pédagogique + correction du design d'une fiche existante.
- **Traitement B — Manuel complet sur base existante** : rédaction à partir d'un `.docx` source (manipulation XML).
- **Traitement C — Manuel généré de zéro** : génération complète avec Node.js + package `docx` npm.

Structure détaillée : [`manuel-structure.md`](manuel-structure.md). Design officiel de la fiche : [`design-fiche.md`](design-fiche.md). Notes techniques : [`technical-notes.md`](technical-notes.md). Gestion des images : [`illustrations.md`](illustrations.md). Vocabulaire et gabarits multilingues (FR/MG/EN) : [`vocabulaire-langues.md`](vocabulaire-langues.md). Sources, grammaire et pièges malgaches : [`fiabilite-malgache.md`](fiabilite-malgache.md). Spécificités Mathématiques : [`mathematiques.md`](mathematiques.md). Spécificités discipline Malagasy : [`discipline-malagasy.md`](discipline-malagasy.md). **Manuel existant à mettre à jour : voir [`audit-conformite.md`](audit-conformite.md) avant toute action.** Travail réparti sur plusieurs sessions/comptes : voir [`continuite-multi-session.md`](continuite-multi-session.md).

---

## Étape 0 — Collecte d'informations avant de commencer

**Toujours poser ces questions au début :**

1. **Quel niveau et quelle matière ?** (ex : Géographie 8e, Français 4e, Maths 6e…)
2. **Point de départ :**
   - **Cas A/B : fichier existant** → demander de joindre le `.docx` source.
   - **Cas C : création de zéro** → demander le programme scolaire officiel (RAPS ou équivalent).
3. **Quelle est la portée ?**
   - Uniquement les fiches de préparation (Traitement A) ?
   - Manuel complet avec leçon, exercices, corrigés (Traitement B ou C) ?
4. **Un document de programme officiel est-il disponible ?** (utile même en Cas A/B pour connaître la structure des séances, les séances d'évaluation à ignorer).
5. **Version malgache incluse ?** Question binaire explicite — ne pas supposer.
6. **Annexes à inclure ?** Demander matière par matière (ex : tableaux de conjugaison = Français uniquement). Liste dans [`manuel-structure.md`](manuel-structure.md) section 7.
7. **Numéro de version du livrable ?** (V1, V2…)
8. **Couleur du corrigé ?** Par défaut : rose/bordeaux `#C2185B` (proche du saumon). Si l'utilisateur demande une autre couleur, proposer un choix parmi des teintes rose/rouge/bordeaux/saumon uniquement (jamais jaune, vert ou bleu — déjà utilisés ailleurs dans le code couleur).
9. **Durée réelle par séance ?** Toujours la lire dans le programme officiel fourni (elle varie selon la matière et le niveau — ex : 30 min, 2h…), jamais la supposer. Si le programme ne la précise pas, demander explicitement à l'utilisateur avant de répartir les sous-étapes (voir "Structure des séances" ci-dessous).
10. **Illustrations à inclure ?** Demander si des images/schémas sont attendus, et si un outil de génération d'image est disponible pour cette tâche. Voir [`illustrations.md`](illustrations.md) pour les approches possibles.
11. **Cohérence du nombre de séances déclaré dans le programme** : si le programme source indique un nombre de séances par sous-thème (ex. "Isan'ny seho : X"), s'y fier comme référence, mais vérifier la cohérence avec le contenu réellement présent (parfois le nombre déclaré ne correspond pas exactement au nombre de sous-sections visibles). En cas d'écart, trancher et **le signaler à l'utilisateur** plutôt que de deviner silencieusement.
12. **Manuel produit en plusieurs trimestres puis fusionné ?** Si oui, prévoir dès le départ : une numérotation de séance continue dans les titres affichés (Séance 1 à N sur tout le manuel) tout en gardant la position locale au trimestre dans le champ "Séance n°" de la fiche (ex. "3 / 15") ; un tableau de bord général unique groupé par trimestre ; un seul jeu d'annexes (glossaire, bibliographie) fusionné en fin de manuel, pas un par trimestre.

**⚠️ Ne jamais commencer avant le feu vert explicite sur ces points.**

---

## Fusion de deux programmes officiels concurrents

Cas rencontré : deux documents de programme officiel différents (ex. RAPS et RAPE) couvrant la même classe/matière, avec des contenus qui ne se recoupent pas entièrement. Procédure standard à appliquer plutôt qu'à réinventer à chaque fois :

1. **Tout garder** — ne pas trancher en faveur d'un seul programme ni fusionner silencieusement en supprimant ce qui diverge.
2. **Taguer ce qui vient d'une seule source** — quand un contenu (séance, notion, annexe) provient d'un seul des deux programmes, l'indiquer clairement (ex. note de bas de page, mention entre parenthèses).
3. **Expliquer en avant-propos** — mentionner dans l'avant-propos du manuel que deux programmes officiels ont été utilisés conjointement, et pourquoi.

---

## Exceptions — ne rien modifier

| Cas | Traitement |
|-----|-----------|
| Matière **EPS** | Laisser le `.docx` tel quel — aucune production |
| Niveau **préscolaire** | Laisser le `.docx` tel quel — aucune production |
| Logo / en-tête | Ne jamais toucher |
| Séances d'évaluation | Ignorées pour l'enrichissement ; reçoivent un sujet d'examen + corrigé en Traitement B/C |

---

## Structure des séances — 3 grandes étapes (norme J-Learn)

**Applicable à toutes les matières et tous les niveaux, sauf préscolaire et EPS.**
**Structure unique — il n'existe qu'une seule structure valide, plus de choix à faire ni de variante "8 étapes à plat".**
La durée totale de la séance dépend de la matière — ne pas supposer une durée fixe ; la lire dans le programme ou demander à l'utilisateur (voir Étape 0, question 9).

**Répartition I/II/III proportionnelle, jamais un gabarit figé.** Ne pas réutiliser telle quelle une répartition observée sur un autre manuel (ex : 3 min / 22 min / 5 min pour une séance de 30 min) sur une séance d'une durée différente — la répartir proportionnellement à la durée réelle. Exemple : une séance de 2h (lycée) donne plutôt 15 min / 90 min / 15 min, pas 3/22/5 mis à l'échelle approximative. Recalculer à chaque fois à partir de la durée totale effective de la matière/niveau traité.

### Les 3 grandes étapes

| N° | Grande étape | Durée affichée | Contenu |
|----|--------------|:---:|---------|
| **I** | **Révision** | ✅ (seule durée affichée pour cette étape) | Questions simples sur la séance précédente |
| **II** | **Nouvelle Leçon** | ✅ (une seule durée globale pour tout le bloc II) | Contient les 6 sous-étapes ci-dessous |
| **III** | **Évaluation** | ✅ (seule durée affichée pour cette étape) | Exercices écrits notés |

**Règle de minutage : la durée n'est indiquée que sur ces 3 lignes (I / II / III). Aucune des 6 sous-étapes de "II. Nouvelle Leçon" n'affiche de durée individuelle** — ni dans la colonne "Étapes et Durée", ni ailleurs dans la fiche.

### Les 6 sous-étapes de "II. Nouvelle Leçon"

"II. NOUVELLE LEÇON" occupe une ligne de section fusionnée (colspan 6) au-dessus des 6 sous-étapes numérotées 1 à 6, qui gardent le même tableau à 6 colonnes.

| N° | Sous-étape | Rôle pédagogique |
|----|-----------|-------------------|
| 1 | **Mise en situation** | Deux formats valides, au choix : **(a)** courte histoire ou anecdote contextualisée en lien avec le titre de la leçon ; **(b)** question simple posée par l'enseignant, dont la réponse attendue (R.A.) est proche du titre ou du thème de la leçon — **pas une question sur le contenu détaillé de la leçon elle-même**. Exemple : Titre *"Conséquences de la Première Guerre mondiale"* → Question : *"Dans une guerre, qu'est-ce qu'il y a toujours ?"* → R.A. : *"des morts, des blessés, des destructions"*. **Les élèves écoutent et répondent à l'oral.** |
| 2 | **Présentation** | L'enseignant annonce à voix haute le titre et l'objectif : *"Aujourd'hui nous allons apprendre… Après cette séance vous serez capables de…"* Les élèves écoutent. |
| 3 | **Observation** | *"Regardez et observez bien [support concret]."* Les élèves observent silencieusement — ils ne décrivent ni ne répondent à cette étape. L'analyse et les réponses arrivent uniquement à l'étape suivante (4. Analyse). |
| 4 | **Analyse** | Série de questions dérivant la leçon à partir de l'observation. Chaque question est suivie de sa R.A. **Format obligatoire : une ligne (un paragraphe) par couple question/R.A. dans la cellule** — jamais un bloc unique fusionné par des "/" ou des virgules. |
| 5 | **Synthèse** | **C'est l'enseignant qui énonce la synthèse**, commençant par *"Donc, …"* — pas les élèves. | Les élèves écoutent. *(L'enseignant peut, s'il le juge utile, faire répéter la synthèse à voix haute par un ou plusieurs élèves pour en favoriser la mémorisation.)* |
| 6 | **Application** | Exercices réels rédigés intégralement dans la cellule Enseignant (concis mais complets). Corrigé dans la cellule Apprenant. Minimum 2 types d'exercices différents, sans nommer le type dans l'énoncé (voir section "Rédaction des exercices"). **Non notés/sans barème à ce stade** — voir "Barème" ci-dessous. |

**Étape III — Évaluation** : mêmes règles que l'étape 6 (Application) ci-dessus — exercices réels rédigés intégralement, corrigé complet, minimum 2 types différents, sans nommer le type dans l'énoncé. **Non notés/sans barème à ce stade** — voir "Barème" ci-dessous.

**Barème — où et quand noter les exercices** : dans la fiche de préparation (colonnes Enseignant/Apprenants des étapes 6-Application et III-Évaluation du tableau de déroulement), les exercices ne portent **aucune note ni barème chiffré** — ce sont des exercices de classe, corrigés à l'oral ou au tableau. **Seuls les exercices de la section EXERCICES**, placée après le contenu de la leçon, sont **notés avec un barème** (points par exercice, total affiché). Ne jamais écrire "barémé(s)" (terme incorrect en français pédagogique) — dire "noté(s) selon un barème" ou "avec un barème sur X points".

**Volume minimum par exercice** : chaque exercice (un Vrai/Faux, un QCM, un texte à trous…) doit contenir **au moins 4 items** par défaut — jamais un exercice à un seul item, même si le type change d'une étape à l'autre. **Exception négociable** : si l'utilisateur demande explicitement de réduire le volume du manuel, un minimum plus bas (2-3 items) est acceptable — toujours confirmer ce compromis avec l'utilisateur avant de l'appliquer plutôt que de l'imposer silencieusement.

**Variété entre séances** : ne pas répéter systématiquement les 2 mêmes types d'exercices à chaque séance du manuel. Faire tourner les types disponibles (QCM, Vrai/Faux, texte à trous, Question/Réponse, Appariement, Complétion, Schéma à légender) d'une séance à l'autre sur l'ensemble du manuel.

**Rédaction des exercices — ne pas nommer le type** : dans la fiche (étapes 6 et III) et dans la section EXERCICES du manuel, ne jamais écrire "QCM", "Texte à trous", "Vrai ou Faux" etc. comme titre d'exercice. Donner directement la consigne rédigée. Exemple : au lieu de *"Texte à trous : Complète avec les mots proposés…"*, écrire directement *"Complète avec les mots proposés : …"*. Le nom du type reste un outil interne (pour varier les formats), jamais affiché au lecteur. **Exception : les étiquettes d'étape "Application" et "Évaluation" dans la colonne de gauche du déroulement restent affichées** — ce ne sont pas des noms de types d'exercice, ce sont les noms des étapes elles-mêmes.

**Construction des distracteurs (mauvaises réponses de QCM, affirmations fausses du Vrai/Faux)** — règle essentielle : un distracteur doit être un **piège pédagogique plausible sur le sujet même de la séance** (une confusion réaliste entre deux notions proches vues dans la leçon, une date ou un ordre inversé, un terme mal appliqué…) — jamais une information vraie mais hors-sujet copiée d'une autre séance ou d'une autre matière (l'élève repère l'intrus par simple élimination sans avoir compris le contenu, ce qui ne teste rien) et jamais une phrase vraie simplement encapsulée dans une formule du type "il est inexact d'affirmer que…" (ça ne crée pas une vraie fausse affirmation, juste une négation artificielle). **Restriction stricte au contenu de cours lui-même** (Analyse, Synthèse, "À retenir" si présent) : celui-ci ne doit jamais contenir d'information inventée ou non vérifiée — seuls les distracteurs des exercices peuvent être des erreurs volontaires, clairement corrigées comme fausses. **En mathématiques**, voir [`mathematiques.md`](mathematiques.md) pour la déclinaison spécifique (erreur de calcul ou de méthode plausible, pas une confusion conceptuelle narrative).

---

## Règle de rédaction — contenu réel, jamais des méta-instructions

**Erreur à éviter absolument** : décrire ce qu'il faut faire au lieu de le faire.

| ❌ Incorrect | ✅ Correct |
|-------------|-----------|
| "L'enseignant pose des questions sur la dernière leçon." | *"Qu'est-ce qu'une carte ? R.A. : Une carte est une représentation de la Terre."* |
| "Donner un exercice de vocabulaire." | *"1. Qu'est-ce qu'un relief ? 2. Cite 3 fleuves de Madagascar. 3. Vrai ou Faux : …"* |
| "Question orale sur le thème." | *"Que voyez-vous sur cette image ? Comment appelle-t-on cette partie ?"* |
| "Exercice à trous sur le thème." | *"Complète : Le plus grand fleuve de Madagascar est ……………………"* |

Contexte à intégrer : prénoms malgaches (Rova, Nivo, Soa, Koto, Hery, Aina, Fara, Lanto, Tiana, Mamy), références géographiques/culturelles malgaches, conformité au programme RAPS.

---

## Types d'exercices à utiliser (variété obligatoire)

Au minimum 2 types différents par étape Application et Évaluation. Chaque exercice comporte au moins 4 items (voir règle ci-dessus). Types disponibles :

| Type | Format |
|------|--------|
| **QCM** | Question + 3 choix (A/B/C), entourer la bonne réponse |
| **Texte à trous** | Phrase avec blancs + liste de mots proposés |
| **Vrai ou Faux** | Affirmation → V ou F |
| **Question / Réponse** | Question → réponse complète en une phrase |
| **Appariement (à flèches)** | Colonne A ↔ Colonne B, relier par une flèche |
| **Complétion** | Début de phrase à terminer |
| **Schéma à légender** | Schéma fourni → numéroter les parties |

Les corrigés doivent être **détaillés, pas résumés** — réponse complète formulée, pas un simple mot-clé.

**Ne jamais nommer le type d'exercice dans le texte affiché** (pas de titre "QCM", "Vrai ou Faux"…) — donner directement la consigne rédigée. Le tableau ci-dessus sert d'aide-mémoire interne pour varier les formats, pas de libellé à afficher.

**Couleur du corrigé** : dans le texte de correction (réponses, corrigés d'exercices), seuls **les mots-clés de la réponse** sont mis en couleur **rose/bordeaux `#C2185B`** (gras) — le reste de la phrase reste en noir, comme pour les mots-clés de la leçon. Si l'utilisateur souhaite une autre teinte, ne proposer que des couleurs de la famille rose/rouge/bordeaux/saumon (jamais jaune, vert ou bleu, déjà utilisés ailleurs dans le code couleur de la leçon).

---

## Design de la fiche — règles visuelles

Spécifications complètes : [`design-fiche.md`](design-fiche.md).

### Résumé des règles visuelles obligatoires

| Élément | Règle |
|---------|-------|
| Police générale | **Times New Roman** — tout le document |
| Titre FICHE DE PRÉPARATION | Avant la méta-table, centré, gras, Times New Roman |
| Méta-table (Discipline/Thème/Titre…) | **Bordures invisibles** — pas de traits visibles |
| Méta-table — disposition | Infos descriptives à gauche ; Date/Classe/Séance/Durée à **droite** |
| Table de déroulement | **6 colonnes** (voir structure ci-dessous) |
| En-tête table | **2 lignes** : ligne 1 = "Déroulement de la leçon" fusionné sur Enseignant+Apprenant ; ligne 2 = sous-titres Enseignant / Apprenant |
| Colonne Étapes et Durée | **UNE seule colonne fusionnée** (pas deux colonnes séparées) |
| Support et Matériel | Objet concret ou outil visuel **uniquement** — jamais "Oral" |

### Structure officielle — 6 colonnes

```
| Étapes et Durée | Enseignant | Apprenants | Technique et Stratégie | Support et Matériel | Observation |
```

En-tête ligne 1 :
```
| Étapes et Durée (rowspan 2) | Déroulement de la leçon (colspan 2) | Technique et Stratégie (rowspan 2) | Support et Matériel (rowspan 2) | Observation (rowspan 2) |
```
En-tête ligne 2 :
```
| — | Enseignant | Apprenants | — | — | — |
```

### Couleurs dans le contenu de leçon (Traitement B et C)

**Le code couleur s'applique à la page LEÇON (titre, sous-titres, mots clés du cours) — jamais aux exercices, dont le texte reste noir sauf le corrigé.**

| Élément | Couleur |
|---------|---------|
| Titre de la leçon | **Rouge** (#C00000) |
| Sous-titres de la leçon | **Vert** (#1E7B34) |
| Mots clés de la leçon | **Bleu** (#1F4E79), gras |
| Texte courant de la leçon | Noir |
| Énoncé des exercices | Noir |
| Corrigé des exercices — mots-clés uniquement (reste en noir) | **Rose/bordeaux** (#C2185B) |

---

## Contenu de la leçon — profondeur et structure obligatoires

**Erreur à éviter** : un contenu de leçon trop court (un seul paragraphe de 3-4 phrases) qui ne couvre pas correctement le sujet. Le contenu à copier dans le cahier doit être **substantiel** : couvrir toutes les idées essentielles du sujet de la séance, pas un résumé minimal.

**Structure hiérarchique obligatoire** — jamais un simple empilement plat de titre/sous-titre/texte : organiser en sections numérotées, sous-sections lettrées, et exemples si le sujet s'y prête.

```
[Titre de la leçon]              (rouge)
1. [Première section]            (vert, gras)
   Texte explicatif de la section…
   a. [Sous-section si nécessaire]
      Texte…
      Exemple :
      • Élément 1
      • Élément 2
   b. [Autre sous-section]
      Texte…
2. [Deuxième section]            (vert, gras)
   …
```

- Les sections numérotées (1, 2, 3…) reprennent le niveau des sous-titres (vert).
- Les sous-sections lettrées (a, b, c…) sont un niveau de détail supplémentaire à l'intérieur d'une section — même couleur que le texte courant (noir), en gras ou en retrait pour les distinguer visuellement.
- Ajouter des **exemples concrets** (avec listes à puces si utile) chaque fois que le sujet s'y prête, pas seulement des définitions abstraites.
- Toutes les sections/sous-sections d'un même sujet ne sont pas obligatoirement présentes à chaque séance — n'utiliser la profondeur 1→a→exemple que si le sujet a réellement cette richesse ; ne pas forcer une sous-section vide pour respecter la forme.



**Obligatoire pour tous les manuels (Traitement A, B et C).** Titres et sous-titres du sommaire doivent être cliquables dans Word et renvoyer à la bonne page, **fonctionner immédiatement à l'ouverture sans aucune manipulation de l'utilisateur** (pas de "Mettre à jour les champs"), et rester cliquables après conversion en PDF — y compris si l'utilisateur reconvertit lui-même le fichier `.docx` vers un autre format par la suite.

**Méthode retenue : liens hypertexte internes vers des signets (bookmarks), pas de champ `TableOfContents` natif.** Le champ natif de Word reste vide tant qu'un utilisateur n'a pas ouvert le fichier et déclenché manuellement "Mettre à jour les champs" (F9) — inacceptable pour un manuel généré automatiquement et potentiellement reconverti sans jamais être ouvert dans Word. Les liens hypertexte internes, eux, fonctionnent dès la génération, sans aucune étape manuelle.

### Traitement C (génération de zéro, Node.js)

- Poser un **signet (`Bookmark`)** sur chaque titre de thème/unité et chaque titre de séance (identifiant unique, ex : `theme1`, `seance12`, `annexes`).
- Construire le sommaire comme une liste de **liens hypertexte internes (`InternalHyperlink`)**, chacun pointant vers l'`anchor` du signet correspondant — pas une liste de texte statique, pas un champ `TableOfContents`.
- Vérification obligatoire après génération : le nombre de signets doit être strictement égal au nombre de liens du sommaire, et chaque `anchor` utilisé doit correspondre à un signet existant (voir `technical-notes.md`).
- Après export en PDF (LibreOffice/soffice), vérifier que les liens internes du sommaire fonctionnent toujours.

### Traitement A/B (fichier existant)

- Poser des signets sur les titres de séance/section existants s'ils sont absents.
- Reconstruire ou insérer un sommaire à liens hypertexte internes à la place d'un sommaire texte statique ou d'un champ TOC natif.

---

## Support et Matériel — règle

La colonne "Support et Matériel" doit toujours contenir un **objet concret ou un outil visuel** utilisé à cette étape :
- Exemples valides : image de carte, planisphère, schéma du relief, texte imprimé, objet en classe, tableau noir, cahier, feuille d'évaluation.
- **Jamais "Oral"** — si une étape n'utilise pas de support physique, écrire "Tableau noir" (l'enseignant écrit la question au tableau).
- **Exception — étape Révision** : ne jamais donner de support consultable (ni cahier, ni image) ; laisser la cellule vide ou "—", pour ne pas fausser le test de mémoire.

---

## Remplacement "BEPC"

Dans tout le document, remplacer "BEPC" par **"Sujet d'examen [niveau]"**.
Exemples : "Sujet d'examen 3e", "Sujet d'examen 8e", "Sujet BAC" pour le lycée.

---

## Traitement A — Fiche de préparation (enrichissement + design)

À faire pour toutes les matières **sauf EPS** et **sauf préscolaire**.

### Sections à enrichir

| Section | Contenu à produire |
|---------|-------------------|
| **Application (étape 7)** | Exercices réels rédigés intégralement — énoncé + corrigé dans la même fiche |
| **Évaluation (étape 8)** | Exercices écrits notés rédigés intégralement — énoncé + corrigé dans la même fiche |

### Design à corriger (voir [`design-fiche.md`](design-fiche.md) pour le détail XML)

- Titre FICHE DE PRÉPARATION positionné **avant** la méta-table
- Méta-table à **bordures invisibles**, date/classe/séance/durée à droite
- Table de déroulement : **6 colonnes**, **2 lignes d'en-tête**
- Police : **Times New Roman** partout

---

## Traitement B — Manuel complet sur base existante (XML)

Manipulation directe du XML d'un `.docx` source avec Node.js + adm-zip.
Approche technique : [`technical-notes.md`](technical-notes.md) section "Approche XML".

Chaque séance en Traitement B contient dans l'ordre :
1. Fiche de préparation (Traitement A)
2. Contenu de la leçon (titre rouge, sous-titres verts, mots clés bleus)
3. Exercices notés sur barème (types variés)
4. Corrigé complet détaillé

---

## Traitement C — Manuel généré de zéro (Node.js + docx)

Génération d'un nouveau `.docx` complet sans fichier source, avec le package npm `docx`.

### Prérequis

```bash
# Dans /home/runner/workspace/<nom-projet>/ (JAMAIS dans /tmp/)
npm init -y
npm install docx
mkdir -p src output
```

### Architecture des fichiers

```
<nom-projet>/
├── src/
│   ├── builders.js          # Fonctions de construction docx (paragraphes, tables, couleurs)
│   ├── exercise-bank.js     # Générateurs d'exercices (qcm, trous, vrai/faux, appariement…)
│   ├── seance-generator.js  # Génère le contenu d'une séance (fiche + leçon + exercices)
│   ├── data-topics.js       # Contenu Unité 1 (topics, faits, Q&A, mots clés)
│   ├── data-topics2.js      # Contenu Unité 2…
│   ├── data-revisions.js    # Révisions et sujets d'examen par unité
│   └── assemble.js          # Assemblage final (couverture → annexes) et écriture du .docx
└── output/
    └── Manuel_[Matière]_[Niveau]_JLearn.docx
```

### Structure d'un topic (objet de contenu)

```js
{
  titre: "A. Le titre de la séance",
  objectif: "identifier les éléments de …",   // complète "Être capable de …"
  observationSupport: "la carte de Madagascar au tableau",  // objet concret
  faits: [
    "Phrase 1 du contenu de la leçon.",
    "Phrase 2 courte et claire.",
  ],
  qa: [
    ["Question pour l'analyse ?", "Réponse attendue complète."],
    ["Deuxième question ?", "Deuxième réponse attendue."],
  ],
  motCle: "mot clé de la séance",   // mis en bleu+gras dans la leçon
}
```

### Builders clés (`builders.js`)

| Fonction | Usage |
|----------|-------|
| `buildFichePage(meta, steps, n, total)` | Fiche complète (page break + méta + déroulement) |
| `deroulementHeader()` | 2 lignes d'en-tête (Déroulement fusionné + Enseignant/Apprenant) |
| `stepRow({etape, duree, enseignant, apprenants, technique, support, observation})` | Ligne de la table de déroulement |
| `exosToParas(exos, fontSize)` | Convertit des exercices en paragraphes pour cellule de table |
| `pHighlight(text, keyword, color)` | Paragraphe avec mot clé coloré |
| `metaTable(meta)` | Méta-table à bordures invisibles |
| `leconTitre(text)` | Titre leçon rouge |
| `leconSousTitre(text)` | Sous-titre vert |
| `exerciceBloc(titre, consigne, items)` | Bloc d'exercice standard |
| `corrigeBloc(numero, lines)` | Bloc corrigé |

### Règle Application/Évaluation en Traitement C

- Générer les exercices **avant** de construire les étapes de la fiche.
- Passer les exercices à `buildApplicationStep(appExos)` et `buildEvaluationStep(evalExos)`.
- `exosToParas()` convertit les exercices en paragraphes pour la cellule Enseignant.
- La cellule Apprenant contient le corrigé bref.
- Les mêmes exercices sont répétés après la leçon dans une section unique **"EXERCICES"** (plus de distinction "Application"/"Évaluation" affichée à ce stade — juste les consignes à la suite, corrigé détaillé en rose/bordeaux).

### Structure d'une séance générée

```
[Page break]
SÉANCE N / TOTAL
Titre de la séance
FICHE DE PRÉPARATION
  méta-table (bordures invisibles)
  table déroulement 6 colonnes
    I. Révision (durée affichée)
    II. NOUVELLE LEÇON (durée affichée globalement, ligne de section fusionnée)
      1. Mise en situation (pas de durée affichée — élèves à l'oral)
      2. Présentation (pas de durée affichée)
      3. Observation (pas de durée affichée)
      4. Analyse (pas de durée affichée)
      5. Synthèse (pas de durée affichée — énoncée par l'enseignant, élèves écoutent)
      6. Application (pas de durée affichée — vrais exercices, non notés à ce stade)
    III. Évaluation (durée affichée — vrais exercices, non notés à ce stade)
[Page break]
LEÇON (titre rouge, sections numérotées en vert, sous-sections lettrées, mots clés bleus)
  contenu substantiel et structuré (1, 2, 3… puis a, b… puis exemples)
[Section]
EXERCICES
  consignes rédigées directement (types variés, jamais nommés), notées avec barème,
  corrigé avec mots-clés en rose/bordeaux
```

---

## Version malgache

Quand une version malgache est demandée :
- Titre : **TAKELA-PANOMANAN-DESONA**
- Tous les intitulés méta-table, colonnes, phases, sous-étapes traduits
- Tableau complet : [`vocabulaire-langues.md`](vocabulaire-langues.md)

**Manuel entièrement en malgache (aucune version française en parallèle)** : suivre impérativement le gabarit validé dans [`vocabulaire-langues.md`](vocabulaire-langues.md) section "Gabarits validés par étape → Malgache" (formule figée + tableau Mpianatra/Tetika amam-paika/Fitaovana par étape). Ce gabarit prime sur les règles génériques de `design-fiche.md` pour ce cas précis.

**Fiabilité du malgache** : le rédacteur n'étant pas garanti natif en malgache, tout contenu réel en malgache (leçon, questions, exercices) au-delà des gabarits structurels doit s'appuyer sur une source publique fiable vérifiée en ligne — jamais d'improvisation libre. Vérifier systématiquement tout terme qui n'est pas déjà dans `vocabulaire-langues.md`, pas seulement en cas de doute perçu. Chaque source utilisée est citée dans la bibliographie/webographie du manuel (voir règle critique 13). Sources fiables, mémo de grammaire courante, pièges déjà rencontrés et processus de mise à jour du lexique : voir [`fiabilite-malgache.md`](fiabilite-malgache.md).

---

## Version anglaise

Quand une version anglaise est demandée :
- Titre : **LESSON PREPARATION SHEET**
- Tous les intitulés méta-table, colonnes, étapes traduits
- Tableau complet : [`vocabulaire-langues.md`](vocabulaire-langues.md)

**Manuel entièrement en anglais** : suivre impérativement le gabarit validé dans [`vocabulaire-langues.md`](vocabulaire-langues.md) section "Gabarits validés par étape → Anglais" (formule figée + tableau Learners/Technique and Strategy/Materials par étape). Ce gabarit prime sur les règles génériques de `design-fiche.md` pour ce cas précis.

**Fiabilité de l'anglais** : même principe que pour le malgache — tout contenu réel en anglais au-delà des gabarits structurels doit s'appuyer sur une source fiable vérifiée, jamais d'improvisation libre sur un terme incertain (voir règle critique 13).

---

## Nommage des fichiers

**Fichiers de travail intermédiaires :**
```
Manuel_[Matière]_[Niveau]_V[N]_[ETAPE].docx
```
`ETAPE` = `AMELIORE`, `DESIGN`, `COMPLET`

**Livrable final :**
```
Manuel_[Matière]_[Niveau]_JLearn.docx
```
ou :
```
[Matière] [Niveau] - Fiche de préparation - [leçon] - sujet et corrigé.docx
```

---

## Vérifications obligatoires après génération (Traitement A/B)

| Vérification | Valeur attendue | Action si échec |
|-------------|----------------|---------|
| `<w:sectPr>` | Exactement **1** | Revenir à la sauvegarde, ne pas livrer |
| Namespace `ns0` | **0** | Revenir à la sauvegarde, ne pas livrer |
| Titres "FICHE DE PRÉPARATION" | = nb séances traitées | Vérifier les manquées |
| Colonnes gridCol | 6 par table déroulement | Corriger avant livraison |
| Occurrences "Times New Roman" | > 0 | Corriger avant livraison |
| Doubles espaces résiduels | 0 | Corriger avant livraison |
| Cohérence après tout renommage/reformatage | Vérification manuelle ciblée | Relire les zones touchées avant livraison |

**Traitement C (génération de zéro) :**

```js
// Après génération :
const fiches    = (xml.match(/FICHE DE PR/g) || []).length;           // = nb séances
const seances   = (xml.match(/SÉANCE \d+/g) || []).length;           // = total séances
const hatier    = (xml.match(/Hatier|MINESEB/gi) || []).length;      // doit être 0
const oral      = (xml.match(/>Oral</g) || []).length;               // doit être 0
console.log({ fiches, seances, hatier, oral });
```

---

## Livrable final

- Fichier `.docx` téléchargeable via `presentAsset`
- Résumé des modifications + compteurs de vérification affichés dans le chat
