# Primaire T1 → T5 — spécificités (cycle primaire, malgache)

Complète le reste du skill pour les classes **T1 à T5** (primaire, = CP1/CP2/CE/CM1/CM2, ancien 11e→7e).
La structure générale (I/II/III, 6 sous-étapes, gabarits par langue) reste celle du skill — ce fichier ne couvre
que ce qui change au primaire. Né du projet **Manuel Malagasy T5 V1**.

---

## 1. Numérotation des niveaux : le piège à ne jamais rater

| Nouveau (PE, RAPE) | Ancien (Programmes, RAPS) | Équivalent |
|---|---|---|
| **T1** | 11e | CP1 |
| **T2** | 10e | CP2 |
| **T3** | 9e | CE |
| **T4** | 8e | CM1 |
| **T5** | **7e** | **CM2** (fin du primaire) |
| T6 / T7 / T8 / T9 | 6e / **5e** / 4e / 3e | collège |

⚠️ Un fichier nommé `*_5eme_*` (FRP_5eme_SVT, Manuel_..._5e, RAPS-5ème) est du **niveau T7 (5e au collège)**, pas du
T5. La couverture du PDF le prouve (`TAONA FAHAFITO / T7`). **Toujours vérifier la couverture de la source avant de
l'utiliser pour un niveau T1-T5.**

## 2. Durées de séance : courtes et HÉTÉROGÈNES

Au primaire, la durée se lit **dans le tableau `LANJAN’ORA` du PE, zana-taranja par zana-taranja** — jamais une durée
unique pour la matière (contrairement au collège où toute la matière partage 1 h ou 2 h). Exemple relevé (PE T5,
taranja Malagasy) : Fanehoan-kevitra am-bava **3 × 20 min** · Vakiteny **2 × 30 min** · Fiasan'ny teny **2 × 30 min** ·
Asa an-tsoratra **2 × 30 min** → 9 seho / herinandro, 4 h.

Conséquence sur la fiche : la répartition **I / II / III est recalculée pour CHAQUE durée** (jamais recopiée) :

| Durée de la seho | I | II (6 sous-étapes) | III |
|---|---:|---:|---:|
| 20 min | 3 min | 14 min | 3 min |
| 30 min | 5 min | 20 min | 5 min |
| 45 min | 7 min | 30 min | 8 min |

Une séance de 20-30 min ne **peut pas** accueillir 6 sous-étapes développées : on garde les 6 lignes, mais
1-2 lignes de contenu par cellule (une question + sa V.A., pas trois), et **2 items d'exercice suffisent** si
l'utilisateur l'accepte explicitement (sinon minimum 4, règle générale).

## 3. Regroupement des seho (indispensable au primaire)

Le PE T5 donne ~9 seho × ~36 herinandro ≈ **324 seho officielles** par année et par matière : aucun manuel ne peut
les traiter une par une. Convention validée :

- **une fiche = un groupement thématique cohérent** couvrant 2 à 4 seho officielles, déclaré par
  **`Isan'ny seho : X`** sous `Seho n°` (même si X = 1) ;
- un seul cycle I/II/III par fiche ; plusieurs Fandinihana/Famakafakana enchaînés dans II, **une seule**
  Fandravonana finale ;
- numérotation `Seho N / TOTAL` continue sur tout le manuel ;
- les totaux (nombre de fiches, récapitulatif par thème) calculés **dynamiquement** depuis les données.

Plan type retenu pour un manuel T5 à 4 zana-taranja et 15 lohahevitra : **fiche = (lohahevitra × zana-taranja)**,
soit 15 × 4 = 60 fiches en version exhaustive — livré par blocs (pilote 5 lohahevitra = 20 fiches) puis étendu.

## 4. Oral massif, supports concrets, pas de documentaire externe

- Le primaire est à **dominante orale** : Mihaino/Mamaly/Mijery dominent la colonne Mpianatra ; l'écrit est court.
- `Fitaovana` : un objet réel de la classe ou du milieu (sary, vatolampy, sakafo, zavamaniry, vato, lahatsoratra
  tsipika). Aucun support qui suppose un équipement absent des écoles primaires (vidéoprojecteur, internet, labo).
- Manipulable autorisé (ardoise, objets à compter, échantillons) — option, pas défaut.
- **`Sahanasa` / `Tombana` du PE font foi** pour ce que l'élève doit savoir faire : les reformuler en V.A. concrètes,
  jamais les laisser en méta-instruction.

## 5. Malgache du primaire

- Registre : **malagasy ofisialy** (pas de tournure provinciale inventée), phrases courtes, un mot nouveau = une
  explication immédiate.
- Les textes supports (lahatsoratra, tononkalo, ohabolana, angano) doivent provenir d'une **source vérifiée et citée**
  (`Fanovozan-kevitra` de la fiche ou `Loharanom-baovao` du manuel) — le FRP ne contient pas toujours la matière
  concernée (le FRP T5 fascicule 2 = Maths/Sciences & Techno/Géo uniquement) : **ne pas inventer un texte « officiel »**.
- Alphabet sans C, Q, U, W, X → lettrage a b d e f g h i j k l m n o p r s t v z pour QCM et appariements.
- Séances de pure production (`Famoronan-dahatsoratra`) = **exercices**, pas des leçons avec notion nouvelle :
  demander avant d'en faire des fiches complètes.
