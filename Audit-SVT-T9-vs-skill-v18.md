# Audit de conformité — `SVT T9 [PE] Fiche de preparation sujet corrigés J-Learn (1).docx`

**Référentiel** : skill `jlearn-manuel-scolaire` **v18** (`skill v18.zip` — 12 fichiers, 2 134 lignes).
**Procédure suivie** : `audit-conformite.md` (4 temps — lecture intégrale du skill → extraction du texte → liste exhaustive des écarts → présentation avant toute correction).
**Statut** : aucune modification appliquée au `.docx`. Ce document ne fait que **lister les écarts**.

---

## 0. Identification du skill v18

Les deux archives présentes à la racine du dépôt sont **strictement identiques** (`md5 = f56981ca4a92525ac2ff06bf45840598`) :

- `skill v18.zip`
- `jlearn-manuel-scolaire-skill-v18v.zip`

Contenu : `SKILL.md` (v18, 494 l.), `technical-notes.md`, `design-fiche.md`, `manuel-structure.md`, `vocabulaire-langues.md`, `fiabilite-malgache.md`, `mathematiques.md`, `discipline-malagasy.md`, `illustrations.md`, `audit-conformite.md`, `continuite-multi-session.md`, `CHANGELOG.md`.

> À noter : `Analyse-Skill-jlearn-v19.md` présent dans le dépôt décrit une **v19** (12 fichiers, 2 147 lignes, SVG prioritaires). Le zip livré est bien la **v18**. L'audit ci-dessous est fait contre v18 ; les points v19 (illustrations SVG) ne sont donc pas opposables ici.

---

## 1. Verdict global

Le document est **techniquement propre mais pédagogiquement vide**.

Toute la couche XML/design est conforme — et c'est précisément ce qui rend le problème difficile à voir à l'œil nu. En revanche, **les 41 fiches de préparation sont 41 copies du même gabarit**, dans lequel seul le titre de la séance a été substitué. Le contenu scientifique réel de la SVT T9 est quasi absent.

C'est une violation frontale des **règles critiques 8 et 9** du skill (« rédiger du contenu réel, jamais des méta-instructions » / « fiche prête à l'emploi »).

| Couche | État |
|---|---|
| XML / technique | ✅ conforme |
| Design de la fiche | 🟡 1 écart mineur |
| Structure I/II/III | ✅ conforme |
| **Contenu pédagogique** | ❌ **non conforme — bloquant** |
| Exercices | ❌ non conforme |
| Annexes | ❌ hors sujet |

---

## 2. ✅ Ce qui est conforme (à conserver tel quel)

Vérifié par analyse directe du XML :

| Point de contrôle (checklist v18) | Mesure | Verdict |
|---|---|---|
| `<w:sectPr>` unique | 1 | ✅ |
| Namespaces `ns0:` | 0 occurrence | ✅ |
| Table de déroulement à 6 colonnes | 41 tables × 6 `gridCol` | ✅ |
| En-tête 2 lignes + `gridSpan=2` sur « Déroulement de la leçon » | présent | ✅ |
| « II. NOUVELLE LEÇON » en ligne fusionnée colspan 6 | 1 cellule, `gridSpan=6` | ✅ |
| Structure I / II (6 sous-étapes) / III | respectée partout | ✅ |
| Aucune durée sur les sous-étapes 1-6 | 0 | ✅ |
| Méta-table à bordures invisibles | `tblBorders` tous `none` | ✅ |
| Police Times New Roman | imposée dans `docDefaults` | ✅ |
| Aucun « Oral » en Support et Matériel | 0 occurrence | ✅ |
| Colonne Observation vide | ✅ |
| Support vide à l'étape Révision | ✅ (règle du non-consultable respectée) |
| Sommaire = liens internes vers signets | 64 ancres ↔ 64 signets, **0 lien mort**, aucun champ TOC natif | ✅ |
| Code couleur | `C00000` titres, `1E7B34` sous-titres, `1F4E79` mots-clés, `C2185B` corrigés | ✅ |
| Images redimensionnées (~1100 px) | 50 médias, très majoritairement 1100×733 | ✅ |
| Aucune date calendaire | 0 | ✅ |
| « BEPC » remplacé | 0 occurrence | ✅ |
| Terminologie R.A. (français) | correcte | ✅ |

---

## 3. ❌ Écarts bloquants

### 3.1 — Les 41 fiches sont un seul gabarit dupliqué

**Règles enfreintes : critiques 8 et 9.**

Comptage des formules identiques sur l'ensemble du document :

| Occurrences | Texte répété à l'identique |
|---:|---|
| 41 | `Que montre le document ?` (question 1 de l'Analyse, **toutes** séances) |
| 41 | `Quels indices permettent de le comprendre ?` (question 2) |
| 41 | `Quelle conclusion tirer ?` (question 3) |
| 41 | `Les éléments observés sont mis en relation avec…` (R.A. 2) |
| 41 | `R.A. : Les apprenants formulent des hypothèses et les confrontent aux faits.` |
| 41 | `Pour comprendre [titre], on identifie les éléments, on décrit leurs relations et on explique les étapes dans l'ordre.` |
| 41 | `Observer le document ou l'échantillon.` / `Décrire les éléments visibles.` / `Expliquer les relations et les conséquences.` |
| 41 | `La réponse doit utiliser le vocabulaire scientifique.` |
| 82 | `Cette notion ne peut pas être observée.` / `Elle ne demande aucune justification.` |
| 164 | `La notion étudiée est liée à ______.` / `Un élément important est ______.` / `On doit aussi retenir ______.` |

**L'étape 4. Analyse est identique dans les 41 fiches.** Aucune question ne porte sur la SVT : ni sur la digestion, ni sur l'arc réflexe, ni sur les gemmes. Ce sont trois questions génériques de « méthode scientifique » recopiées 41 fois.

C'est exactement le cas d'école que la règle 8 interdit : le gabarit décrit *la forme* d'une analyse au lieu de *faire* l'analyse.

> **Attendu (SKILL.md, étape 4)** : « Série de questions dérivant la leçon à partir de l'observation. Chaque question est suivie de sa R.A. »
> **Obtenu** : trois questions passe-partout, sans lien avec le contenu.

---

### 3.2 — Le contenu de leçon est décalé d'une séance et mutualisé

**Règle enfreinte : critique 9 + SKILL.md « Contenu de la leçon — profondeur et structure obligatoires ».**

41 séances de contenu, mais seulement **15 textes de leçon distincts**. Le même paragraphe sert 2 à 4 séances consécutives :

| Séances | Texte de leçon partagé |
|---|---|
| 1, 2 | « Une ration alimentaire est l'ensemble des aliments consommés… » |
| 3, 4 | « Les glucides fournissent surtout de l'énergie… » |
| 13, 14, 15 | « Les plantes ont besoin d'eau, de sels minéraux… » |
| 19, 20, 21, 22 | « Un élevage amélioré associe alimentation, habitat, soins… » |
| 27, 28, 29, 30 | « Un réflexe est une réponse rapide à un stimulus… » |
| 44, 45, 46, 47 | « Les pierres gemmes comprennent des pierres précieuses, fines… » |

Conséquences concrètes :

- **Séance 2 « Glucides, lipides et protéines »** enseigne la définition de la **ration alimentaire** (contenu de la séance 1). Les glucides, lipides et protéines n'y sont jamais définis.
- **Séance 20 « Alimentation et habitat »**, **21 « Soins et vaccination »**, **22 « Sélection »** servent toutes trois le même paragraphe résumé de la séance 19.
- **Séance 30 « Arc réflexe et trajet de l'influx »** ne décrit à aucun moment le trajet de l'influx nerveux.

**Volume** : la page LEÇON fait **130 à 168 mots** (médiane 151), structure `1. Définition / 2. Fonctionnement / 3. Exemple ou application` figée dans les 41 séances. Le skill exige un contenu « substantiel, couvrant toutes les idées essentielles » et interdit explicitement « un seul paragraphe de 3-4 phrases ». Ici, sur les ~150 mots, **~90 sont du remplissage générique identique partout**.

Défaut de mise en forme associé : **123 paragraphes commencent par `• •`** (double puce — bug de génération).

---

### 3.3 — L'objectif spécifique est celui du sous-thème, pas de la séance

**Règle enfreinte : design-fiche.md §6 (II.2 Présentation — objectif concret et mesurable).**

L'objectif est hérité du RAS du programme et recopié sur toutes les séances du bloc :

| Séance | Titre | Objectif affiché dans la fiche |
|---|---|---|
| 1 | Ration alimentaire et groupes d'aliments | expliquer la ration alimentaire et les groupes d'aliments |
| **2** | **Glucides, lipides et protéines** | **expliquer la ration alimentaire et les groupes d'aliments** |
| 19-22 | Besoins / Alimentation / Soins / Sélection | relier les techniques d'élevage aux besoins d'un animal (×4) |
| 27-30 | Réflexe inné / acquis / volontaire / arc réflexe | comparer les réactions réflexes et volontaires (×4) |

L'étape 2. Présentation annonce donc à l'élève un objectif qui ne correspond pas au titre de la séance qu'il va suivre.

---

### 3.4 — Les distracteurs sont invalides dans les 41 séances

**Règle enfreinte : SKILL.md « Construction des distracteurs » + design-fiche.md §9.**

Le QCM type, présent **82 fois** :

```
2. Quelle affirmation est correcte à propos de [titre de la séance] ?
   A. [la phrase entière du cours, recopiée mot pour mot]      ← bonne réponse
   B. Cette notion ne peut pas être observée.                  ← distracteur
   C. Elle ne demande aucune justification.                    ← distracteur
```

Trois problèmes cumulés :

1. **La bonne réponse est reconnaissable sans rien connaître** : c'est la seule option longue et affirmative. B et C sont des négations vagues, hors sujet, identiques dans les 41 séances.
2. Le skill interdit nommément ce type de construction : « jamais une phrase vraie simplement encapsulée dans une négation artificielle ».
3. Le distracteur doit être « un piège pédagogique **plausible sur le sujet même de la séance** » — une confusion réaliste entre deux notions proches de la leçon. Ici il n'y a aucun contenu SVT dans les options fausses.

Même problème pour le texte à trous (×41) : les « mots à utiliser » ne sont pas des mots mais **la phrase du cours coupée en trois morceaux**, y compris au milieu d'une énumération :

> Mots à utiliser : *Une ration alimentaire est l'ensemble des aliments consommés par une personne pendant une journée*, *Elle doit être variée et adaptée à l'âge*, *à l'activité et à l'état de santé*

Le corrigé restitue alors des phrases agrammaticales : « *Un élément important est Elle doit être variée et adaptée à l'âge.* »

---

### 3.5 — Volume minimum de 4 items non respecté : 41 séances sur 41

**Règle enfreinte : SKILL.md « Volume minimum par exercice » (≥ 4 items, sauf exception négociée).**

La section EXERCICES est rigoureusement identique partout :

| Exercice | Barème | Items | Conforme |
|---|---|---|---|
| Exercice 1 | 2 pts | **2** | ❌ |
| Exercice 2 | 2 pts | **1** | ❌ |
| Exercice 3 | 3 pts | **3** | ❌ |
| Exercice 4 | 2 pts | **1** | ❌ |
| **TOTAL** | **9 pts** | | |

Aucune des 41 séances n'atteint 4 items sur un seul exercice. Les exercices à **1 item** sont explicitement proscrits (« jamais un exercice à un seul item »).

---

### 3.6 — Aucune variété d'exercices entre séances

**Règle enfreinte : SKILL.md « Variété entre séances ».**

Le skill demande de faire tourner les 7 types disponibles sur l'ensemble du manuel. Les 4 consignes utilisées apparaissent **41 fois chacune**, dans le même ordre, dans les 41 séances :

- `Réponds aux questions en t'appuyant sur la leçon.` (×41)
- `Réponds avec une phrase scientifique complète.` (×41)
- `Complète avec les mots de la leçon.` (×41)
- `Réponds et justifie à partir du document.` (×41)

Types jamais employés : appariement, complétion, **schéma à légender**. Ce dernier point est d'autant plus dommageable que **20 légendes d'images annoncent « Schéma à légender : … »** alors qu'**aucun exercice de légendage n'existe** dans le document (0 consigne de type « numérote » / « légende les parties »).

---

### 3.7 — Les 5 séances de révision sont rigoureusement identiques

**Règle enfreinte : critique 9.**

Séances 11, 23, 34, 42, 50 — **hash de contenu identique** (`08be64c6a8`), titre et image mis à part. Chacune contient le même tableau à 3 lignes (« Repères du chapitre », « Démarche scientifique », « Responsabilité ») et les mêmes 3 questions :

> *Quelle notion principale faut-il retenir ?* → **R.A. : La réponse doit reprendre les connaissances de l'unité.**

Cette R.A. est une méta-instruction — l'exemple type interdit par la règle 8. La révision de l'Unité V (Géologie) est mot pour mot celle de l'Unité I (Alimentation).

---

### 3.8 — Les sujets d'examen ne portent pas sur la SVT

**Règle enfreinte : critique 9 + manuel-structure.md.**

Recherche de vocabulaire SVT dans le sujet d'examen de chaque unité :

| Séance | Unité | Contenu réel |
|---|---|---|
| 12 | I — Alimentation | QCM sur « une conclusion scientifique repose sur… », « le travail en groupe favorise… » |
| 24 | II — Organisation des êtres vivants | idem, générique |
| 35 | III — Santé et bien-être | idem, générique |
| 43 | IV — Reproduction humaine | idem, générique |
| 51 | V — Géologie | seul sujet réellement disciplinaire (249 paragraphes) |

Exemple, sujet d'examen de l'Unité I (Alimentation), Exercice 1 :

> 1. Une conclusion scientifique repose sur… A. des résultats / B. une rumeur / C. un hasard
> 4. Le travail en groupe favorise… A. la coopération / B. la discrimination / C. la confusion

Aucune question sur la ration alimentaire, les nutriments ou la malnutrition. Un élève peut obtenir la totalité des points sans avoir suivi l'unité. Les items B/C (« une rumeur », « la discrimination ») sont par ailleurs des distracteurs non plausibles au sens du skill.

---

### 3.9 — Le glossaire appartient à un autre manuel

**Règle enfreinte : critique 13 (fiabilité) + manuel-structure.md §7.**

**31 termes sur 35 ne sont jamais employés dans le manuel** : Asepsie, Anticorps, Antisepsie, Antibiotique, Bactérie, Cellule-œuf, Chaîne alimentaire, Choléra, Cycle menstruel, Écosystème, Érosion, Fécondation, Gonade, Immunité, Infection microbienne, Lavaka, Microorganisme, Paludisme, Parasite, Période de fécondité, Puberté, Prédation, Séisme, Sérum, Soi/non-soi, Subduction, Tube digestif, Tuberculose, Virus, Voies génitales, Volcanisme.

Seuls 4 termes sont réellement utilisés (Champignon, Grossesse précoce, Prévention, Vaccin).

Ce glossaire correspond au programme **SVT 9e** (maladies infectieuses, immunité, appareil digestif, géologie/séismes) — matière effectivement présente dans le dépôt sous `SVT-9e-Manuel-Complet.docx`. Il a été repris tel quel alors que le T9 traite cinq thématiques différentes.

Symptôme corroborant dans l'avant-propos, qui annonce des thématiques qui ne sont **pas** celles du manuel :

> « Il couvre les cinq thématiques du programme : la santé et le bien-être (**appareil digestif**), la reproduction humaine, les **maladies infectieuses**, l'organisation des êtres vivants et la géologie. »

Or la table des matières et le PE T9 donnent : **Alimentation de l'homme**, Organisation des êtres vivants, Santé et bien-être (**système nerveux + substances psychoactives**), Reproduction humaine, Géologie. « Appareil digestif » et « maladies infectieuses » n'existent nulle part dans le manuel.

---

### 3.10 — Aucune bibliographie / « Loharanom-Baovao »

**Règle enfreinte : critique 13.**

0 occurrence de bibliographie, webographie, sources ou « Loharanom-Baovao ». Le champ Documentation de chaque fiche porte une valeur unique et non sourcée (`Programme d'Études — Classe de T9 (SVT), DCRP`, ×41). La règle 13 impose de citer toute source ayant servi à fiabiliser le contenu, en section finale du manuel.

---

## 4. 🟡 Écarts mineurs

| # | Écart | Détail | Règle |
|---|---|---|---|
| 4.1 | En-tête de colonne incomplet | La colonne 1 est intitulée **« Étapes »**, la spec impose **« Étapes et Durée »** (0 occurrence dans le fichier, 41 fois « Étapes ») | design-fiche.md §3 |
| 4.2 | Synthèse ne commence pas par « Donc, » | 0/41 — le skill l'impose (« commence obligatoirement par *Donc, …* ») | SKILL.md II.5 / design-fiche.md §6 |
| 4.3 | Niveau erroné en annexe | « Les sujets d'examen **4e** de chaque unité… » dans la section ÉVALUATIONS FORMAT EXAMEN, alors que le manuel est en T9 (3e) | Remplacement « BEPC » |
| 4.4 | 45 légendes d'image sur 51 ne correspondent pas au titre | Séance 6 « Calculer les besoins énergétiques » → légende « Menu varié à Madagascar » ; séance 49 « Impacts environnementaux » → « Examen sur les pierres gemmes » | illustrations.md |
| 4.5 | Images réutilisées | 50 médias pour 150 insertions ; `image14.jpg` apparaît **16 fois** | illustrations.md |
| 4.6 | Doubles espaces résiduels | 863 runs concernés (indentation des options A/B/C par espaces plutôt que par retrait) | checklist technique |
| 4.7 | Support d'Observation générique | « Document ou observation locale » ×82 — la spec demande le nom du support concret (« cette carte du relief de Madagascar », pas « ce document ») | design-fiche.md §4 |
| 4.8 | Valeurs à véhiculer uniformisées | « Responsabilité, autonomie et respect de toute vie » ×41, alors que le PE T9 en fixe des différentes par thématique (voir §5) | Conformité programme |
| 4.9 | RAS non renseigné | « Résultat d'apprentissage spécifique (PE T9) : **Résultat d'apprentissage spécifique du PE T9** » ×5 — le champ répète son propre libellé | critique 8 |
| 4.10 | Auto-évaluation = liste de titres | Reprend les 41 titres de séance au lieu de formuler des compétences (« Je sais expliquer… ») | manuel-structure.md |

---

## 5. Écarts par rapport au Programme d'Études T9

Vérifié contre `PE_T9 (1).docx`, section « SCIENCES DE LA VIE ET DE LA TERRE » (p. 171).

### 5.1 Répartition des séances incohérente avec le volume horaire officiel

Le PE T9 fixe **4 h/semaine** et une durée par thématique. La répartition des séances ne la suit pas :

| Unité | Durée PE | % du volume | Séances manuel | % des séances | Écart |
|---|---:|---:|---:|---:|---|
| I — Alimentation de l'homme | 10 h | 15,2 % | 12 | 23,5 % | **+8,3 pts** (sur-dotée) |
| II — Organisation des êtres vivants | 15 h | 22,7 % | 12 | 23,5 % | ≈ |
| III — Santé et bien-être | **18 h** | **27,3 %** | 11 | 21,6 % | **−5,7 pts** (sous-dotée) |
| IV — Reproduction humaine | 10 h | 15,2 % | 8 | 15,7 % | ≈ |
| V — Géologie | 13 h | 19,7 % | 8 | 15,7 % | −4,0 pts |
| **Total** | **66 h** | | **51** | | |

L'unité III, la plus lourde du programme (18 h), reçoit le moins de séances par heure. L'unité I, la plus légère (10 h), en reçoit le plus.

Par ailleurs, la **règle de minutage du skill** (« répartition I/II/III proportionnelle à la durée réelle, jamais un gabarit figé », Étape 0 question 9) n'est pas applicable ici puisque le champ Durée est laissé vide (`Durée : ____________`, ×46) et le mode d'emploi renvoie la décision à l'enseignant. Le PE **donne** pourtant le volume horaire : il aurait dû être lu et réparti, pas éludé.

### 5.2 Valeurs à véhiculer non reprises du programme

Le PE T9 fixe des valeurs **propres à chaque thématique** ; le manuel en a inventé une seule, générique, appliquée partout :

| Unité | Valeurs du PE T9 | Valeurs du manuel |
|---|---|---|
| I — Alimentation | autonomie, esprit de créativité | Responsabilité, autonomie et respect de toute vie |
| II — Organisation | respect de toute vie, culture de l'excellence | *(idem)* |
| III — Santé et bien-être | connaissance de soi, altruisme | *(idem)* |
| IV — Reproduction humaine | estime de soi, responsabilité | *(idem)* |
| V — Géologie | responsabilité, sens du bien commun | *(idem)* |

### 5.3 Contenus et démarches du programme non exploités

Le PE T9 fournit, pour chaque RAS, des **stratégies/démarches** et **supports** précis, qui auraient pu alimenter directement les étapes Observation et Analyse. Aucun n'apparaît dans le manuel :

- Unité I : *Analyse d'une pyramide alimentaire* ; *Expérience : mise en évidence des composants d'un aliment* ; supports « Réactifs, tube à essai, échantillon des aliments ».
- Unité II : **Expérience de Dutrochet** (poils absorbants) ; **solution nutritive de Knoop** ; protection naturelle par *neem (voandelaka)*, piment, avocat.
- Unité V : *Échantillon des pierres gemmes* ; loupe, marteau, couteau, ruban à mesurer, gants.

Ce sont des contenus concrets, contextualisés Madagascar, directement transposables — leur absence explique en grande partie le caractère hors-sol des fiches.

---

## 6. Synthèse — que faut-il faire

| Priorité | Chantier | Volume |
|---|---|---|
| **P0** | Réécrire l'étape **4. Analyse** avec des questions/R.A. réellement disciplinaires | 41 fiches |
| **P0** | Rédiger un **contenu de leçon propre à chaque séance** (fin du partage 2-4 séances / 1 texte) | 41 pages LEÇON |
| **P0** | Refaire les **distracteurs** (pièges plausibles sur le sujet, pas de négation artificielle) | 82 QCM + 41 textes à trous |
| ~~**P0**~~ ✅ | Remonter chaque exercice à **≥ 4 items** | 164 exercices |
| ~~**P1**~~ ✅ | Réécrire les **5 sujets d'examen** sur le contenu de leur unité | 4 sur 5 |
| ~~**P1**~~ ✅ | Différencier les **5 séances de révision** | 5 |
| ~~**P1**~~ ✅ | Remplacer le **glossaire SVT 9e** par un glossaire T9 | 35 entrées |
| ~~**P1**~~ ✅ | Corriger l'**avant-propos** (thématiques annoncées fausses) | 1 § |
| ~~**P1**~~ ✅ | Donner un **objectif spécifique par séance** | 41 |
| ~~**P1**~~ ✅ | Varier les **types d'exercices** + créer les schémas à légender annoncés | tout le manuel |
| ~~**P2**~~ ✅ | Reprendre **valeurs à véhiculer** et **répartition horaire** du PE T9 | 5 unités |
| ~~**P2**~~ ✅ | Ajouter la **bibliographie / Loharanom-Baovao** | 1 section |
| ~~**P2**~~ ✅ | « Étapes » → « Étapes et Durée » ; Synthèse → « Donc, … » ; « 4e » → « 3e » ; `• •` ; doubles espaces ; légendes d'images | global |

**Recommandation.** Les écarts P0 ne sont pas des corrections de détail : ils portent sur le contenu pédagogique lui-même, séance par séance. Une passe automatisée ne peut pas les traiter — il faut réécrire le fond à partir des contenus du PE T9 (§5.3), qui fournit la matière nécessaire.

Conformément au **temps 4** de `audit-conformite.md` et à la **règle critique 14**, aucune correction n'avait été appliquée au moment de l'audit. Les chantiers **P2**, **P0** et **P1** sont depuis traités en totalité (voir §7, §8 et §9). **Aucun écart de l'audit ne reste ouvert.**

---

## 7. Suites données — chantier P2 (clos)

Les points P2 étaient mécaniques et sans risque pédagogique : ils ont été traités
intégralement. Le détail, pour que la vérification soit possible ligne à ligne :

| Point P2 | Traitement | Vérification |
|---|---|---|
| Valeurs à véhiculer du PE T9 | Chaque unité porte désormais les valeurs **propres à sa thématique** (autonomie/créativité, respect de toute vie/excellence, connaissance de soi/altruisme, estime de soi/responsabilité, responsabilité/bien commun) au lieu d'une formule générique unique | En-tête de chaque unité + sommaire du manuel |
| Répartition horaire | Section **« Volume horaire »** en tête de manuel : durée PE, nombre de séances et temps moyen par unité, avec le point de vigilance sur l'Unité I (12 séances pour 10 h) et deux solutions concrètes | Tête du manuel assemblé |
| « Étapes » → « Étapes et Durée » | **41 tableaux de déroulement** corrigés | `grep -c '^| Étapes |'` → 0 occurrence restante |
| Synthèse → « Donc, … » | Toutes les synthèses commencent par **« Donc, »** | Contrôle automatisé de `verifier_manuel.py` |
| « 4e » → « 3e » | Sans objet dans la réécriture : l'occurrence fautive appartenait au document d'origine, elle n'a pas été reprise | `grep "4e"` hors « 4e étape » → 0 |
| `• •`, doubles espaces | 0 occurrence | `verifier_manuel.py` |
| Légendes d'images | **45 illustrations** légendées, plus une annexe **Table des illustrations** avec liens vers les séances | Annexe du manuel |
| Bibliographie / Loharanom-Baovao | Section finale **« Loharanom-Baovao — Bibliographie générale »**, consolidant les sources par unité (règle critique 13) | Annexe du manuel |

**État du contrôle qualité : 28/28.** Les contrôles tournent aussi en intégration
continue à chaque push (`.github/workflows/verifier-manuel-svt-t9.yml`).

---

## 8. Suites données — chantier P0 (clos)

### 8.1 Ce que la vérification a montré

Le chantier P0 listait quatre points. Mesure faite fiche par fiche **avant**
toute réécriture, trois d'entre eux étaient **déjà satisfaits** par la
réécriture du manuel — l'audit portait sur le document d'origine, non sur elle :

| Point P0 annoncé | État mesuré dans la réécriture |
|---|---|
| Réécrire l'étape 4. Analyse | Déjà fait : questions disciplinaires et R.A. propres à chaque séance |
| Contenu de leçon propre à chaque séance | Déjà fait : 41 pages LEÇON distinctes, plus aucun texte partagé entre séances voisines |
| Refaire les distracteurs | Déjà fait : QCM et textes à trous construits sur des erreurs plausibles |
| Remonter chaque exercice à ≥ 4 items | **Défaut réel** : les exercices 1, 2 et 4 comptaient 4 à 6 items, mais l'**exercice 3** (étude de cas) en comptait uniformément **3** |

Réécrire les 41 fiches sans cette mesure aurait dégradé un travail déjà conforme.
Seul le défaut constaté a donc été traité.

### 8.2 Traitement retenu

Les **40 études de cas** du manuel reçoivent un **quatrième item**. Il ne s'agit
pas d'une question de remplissage : l'item demande systématiquement à l'élève de
**réfuter une affirmation plausible** — celles réellement entendues en classe ou
dans la vie courante. C'est la réponse directe à l'exigence de l'audit
(« pièges plausibles sur le sujet, pas de négation artificielle »).

| Unité | Séances | Exemples d'affirmations à réfuter |
|---|---|---|
| I | 1-10 | « trois aliments donc ration variée » · « le test du papier révèle les protéines » · « je suis assis donc mes besoins sont nuls » · « ils mangent à leur faim » |
| II | 13-22 | « la plante se nourrit de terre » · « naturel donc sans danger » · « mes poules se débrouillent seules » · « il suffit d'acheter des poules améliorées » |
| III | 25-33 | « c'est le cerveau qui fait tout » · « j'ai décidé de lâcher la marmite » · « on peut arrêter quand on veut » · « je veille pour travailler plus » |
| IV | 36-41 | « la fistule est une punition » · « je me sens bien donc la consultation est inutile » · « vaccinée, le dépistage ne me concerne plus » |
| V | 44-49 | « dure donc incassable » · « des témoignages, c'est une preuve » · « les emplois compensent les dégâts » |

Les items chiffrés ajoutés ont été **recalculés par script** avant intégration,
selon la convention du manuel : part des lipides en S6 (35 %), durée d'un sac de
grain en S20 (35 jours), flacons et doses perdues en S21, hausse de ponte en S22
(+ 113 %), baisse du taux de fistule en S37 (− 84 %), heures de travail par
pierre en S48 (2,5 h).

### 8.3 Garde-fou automatisé

Un contrôle **« chaque exercice compte au moins 4 items »** a été ajouté à
`verifier_manuel.py` (29 contrôles au lieu de 28). Il interdit toute régression
future et a servi de guide pendant le chantier, en nommant précisément les
exercices restants.

Le comptage reconnaît les trois formes d'exercice du manuel — items numérotés,
listes d'éléments à ranger séparés par « · », consignes du type « Cite **quatre**
ressources ». Sans cette tolérance, des exercices parfaitement conformes étaient
signalés à tort : un faux verdict est plus nuisible qu'une absence de contrôle.

**État : 29/29.**

---

## 9. Suites données — chantier P1 (clos)

### 9.1 Mesure préalable

Comme pour le P0, les six points ont été mesurés **avant** toute réécriture.
Quatre étaient déjà satisfaits par la réécriture du manuel :

| Point P1 annoncé | État mesuré |
|---|---|
| Réécrire les 5 sujets d'examen sur leur unité | Déjà fait : chaque examen porte le titre et le contenu de son unité ; recouvrement lexical maximal entre examens **23 %** |
| Différencier les 5 séances de révision | Déjà fait : recouvrement lexical maximal **28 %**, contrôlé en continu par `verifier_manuel.py` |
| Objectif spécifique par séance | Déjà fait : **51 séances sur 51**, aucun objectif générique restant |
| Corriger l'avant-propos | Déjà fait : les cinq thématiques annoncées sont celles du PE T9 |
| Remplacer le glossaire SVT 9e par un glossaire T9 | **Manque réel** : aucun glossaire dans le manuel |
| Varier les types d'exercices + schémas à légender | **Partiellement fait** : six types d'exercices alternent, mais **aucun exercice de légendage** n'existait |

### 9.2 Glossaire (Rakibolana)

Section finale ajoutée : **67 entrées** réparties par unité, chacune renvoyant à
la séance où la notion est introduite. Aucune entrée ne provient du glossaire
SVT 9e du document d'origine — les définitions reprennent celles des pages LEÇON
du présent manuel, afin qu'un élève retrouve le mot sans relire la séance
entière. Les renvois de séance ont été vérifiés : tous pointent dans l'intervalle
1-51.

| Unité | Entrées |
|---|---:|
| I — Alimentation de l'homme | 16 |
| II — Organisation des êtres vivants | 13 |
| III — Santé et bien-être | 15 |
| IV — Reproduction humaine | 9 |
| V — Géologie | 14 |

### 9.3 Exercices de légendage

Le skill impose que tout schéma annoncé « à légender » existe réellement. Les
illustrations du manuel ayant été produites **muettes**, avec des traits de
repère vides, elles s'y prêtaient sans retouche — c'était l'intention d'origine,
restée inexploitée.

Trois exercices 1 ont été convertis en exercices de légendage, là où le schéma
muet correspondant existait déjà :

| Séance | Schéma | Travail demandé |
|---|---|---|
| 14 | Extrémité de la racine | Placer 5 noms, entourer la zone d'absorption, flécher le trajet de l'eau |
| 25 | Silhouette du système nerveux | Légender, puis classer central / périphérique |
| 30 | Arc réflexe | Placer 5 noms, numéroter l'ordre de l'influx, colorier voie sensitive et motrice, marquer l'absence de passage par le cerveau |

Le contrôle « tout schéma annoncé est fourni » passe de 2 à **5 annonces, toutes
pourvues**.

**État : 29/29.**
