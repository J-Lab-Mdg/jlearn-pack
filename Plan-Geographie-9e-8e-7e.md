# Plan — Manuels de Géographie (primaire) : 9e → 8e → 7e

Suite de [`Identification-Geo-9e.md`](Identification-Geo-9e.md). Décisions validées par l'utilisateur le 2026-09-08.

---

## 1. Décisions actées

| Point | Décision |
|---|---|
| **Méthode** | **Traitement C — création de zéro** (le dossier « Géographie 9e » ne contient qu'un PDF, pas de `.docx` exploitable) |
| **Référence de contenu** | Le programme officiel + `Manuel_Geographie_9e_V2-print.pdf` (27 séances) comme base de contenu à reprendre/corriger, pas à convertir |
| **Skill** | **v19**, reconstruit par patch du v18 → `jlearn-manuel-scolaire-skill-v19.zip` (voir §2) |
| **Périmètre** | **9e (CE/T3) → 8e (CM1/T4) → 7e (CM2/T5)**, dans cet ordre, un manuel complet par niveau |

## 2. Skill v19 — patch appliqué

`skill v18` (= `jlearn-manuel-scolaire-skill-v18v.zip`, doublon `skill v18.zip` supprimé) → **v19** :

- `illustrations.md` : **SVG en priorité** pour tout schéma géométrique (génération externe reléguée aux illustrations non géométriques) ; **emplacement élargi** (l'image va là où elle sert la séance, plus seulement en haut de la page LEÇON) ; **nommage `_a`/`_b`/`_c`** si plusieurs images par séance.
- `CHANGELOG.md` : entrée v19.
- `SKILL.md` : version affichée v19.

Fichiers livrés :
- `jlearn-manuel-scolaire-skill-v19.zip` (58 707 o) ← **celui à utiliser / réuploader**
- `jlearn-manuel-scolaire/` (les 12 `.md` en clair, 2 142 lignes) — modifiables directement
- `jlearn-manuel-scolaire-skill-v18v.zip` conservé comme archive

**Écart structurel restant (renvoyé à une v20)** : `vocabulaire-langues.md` (l. 63-221), `discipline-malagasy.md`
(l. 3, 17) et `mathematiques.md` (l. 3, 45) gardent l'ancienne numérotation « 8 étapes à plat » au lieu de
I/II/III. **Sans impact si les manuels géographie restent en français** — à corriger avant tout manuel
malgache ou anglais intégral.

## 3. Contenu de référence — Géographie 9e (27 séances, ~120 p.)

| Trimestre | Thème | Séances |
|---|---|---|
| **T1** | Le repérage dans l'espace proche (le plan) | 1 Points cardinaux · 2 Rose des vents et plan de la classe · 3 Tracer le plan de la classe · 4 Plan de l'école · 5 Itinéraire dans l'école · 6 Plan du village · 7 Itinéraire dans le village · 8 Ville et village · 9 Plan du quartier |
| **T2** | Carte de Madagascar, paysage et cours d'eau | 10 Carte de Madagascar : orientation et villes · 11 Distances et échelle · 12 Vocabulaire du paysage · 13 Types de paysages · 14 Utilisation du paysage par l'homme · 15 Mauvaise exploitation du paysage · 16 Cours d'eau : vocabulaire et types · 17 Utilisation et gestion de l'eau |
| **T3** | Temps, population et vie au village | 18 Observer le temps · 19 Instruments de mesure du temps · 20 Évolution du temps sur un mois · 21 Population classe/école/village · 22 Croissance de la population · 23 Activités des habitants · 24 Agriculture et calendrier cultural · 25 Élevage et pêche · 26 Commerce · 27 Protéger l'environnement |

Annexes du manuel actuel : 1 cartes de Madagascar · 2 lexique géographique · 3 données statistiques · 4 bibliographie.

Défauts déjà relevés à corriger à la reconstruction :
- avant-propos « 3 séances de 30 min / semaine » **vs** fiches « Durée : 90 min » → incohérence à trancher
- méta-commentaire résiduel dans le texte (séance 1, étape 2.5 : « *(l'enseignant corrige si besoin : …)* ») → règle critique 16
- aucune illustration intégrée alors que la matière en appelle à chaque séance (plans, rose des vents, carte)

## 4. Sources reçues et ce qu'elles contiennent

L'espace de travail **n'a pas d'accès réseau** (ni Drive, ni `npm install`, ni `pip`) : tout doit être
déposé dans ce dépôt. Aucun outil PDF/docx n'est installé → extracteurs maison dans
`geographie-9e/tools/` (`extract.py` : docx / doc / PDF simple ; `pdf_cid.py` : PDF à polices CID).

### 4.1 `FRA et FRM.zip` (dépôt, 4 Mo) — ✅ exploité

`FRA` = **Fiche de Répartition Annuelle** des objectifs spécifiques · `FRM` = **Fiche de Répartition
Mensuelle**. Un dossier par niveau (7e, 8e, 9e, 10e, 11e), un sous-dossier par matière.

Fichiers Géographie extraits et convertis en texte dans `geographie-9e/sources/` :

| Fichier | Contenu |
|---|---|
| `FRA-GEO-9e.doc` → `.txt` | **Répartition annuelle Géographie 9e** — la source de référence (30 min/séance, 3/semaine, T1 9 sem., T2 8 sem., T3 10 sem.) |
| `FRM-GEO-9e.docx` → `.txt` | Répartition mensuelle Géographie 9e — **2ᵉ mois seulement** (le zip n'a qu'un mois par matière) |
| `FRA-GEO-8e.doc`, `FRM-GEO-8e.docx` | idem pour la 8e (FRM = 3ᵉ mois) |
| `FRA-GEO-7e.docx`, `FRM-GEO-7e.docx` | idem pour la 7e (FRM = 2ᵉ mois) |

Le FRM cite le manuel de référence : **« Nouveau Manuel ; p. 10-11 », « p. 12-15 »** — c'est le manuel
source utilisé par le MEN pour la géo du primaire.

👉 **Programme consolidé, prêt à découper : [`geographie-9e/programme-officiel-GEO-9e.md`](geographie-9e/programme-officiel-GEO-9e.md)**

### 4.2 `REPARTITION-9ème.pdf` (branche `main`, 1,49 Mo) — ⚠️ partiellement exploité

Répartition annuelle officielle du MEN (Direction des Curricula et des Recherches Pédagogiques,
septembre 2021). Sommaire : Malagasy 4 · Français 18 · FFMOM 34 · Tantara 39 · **Géographie 43** ·
Mathématiques 48 · HDM 57 · Sary 62 · Hetsika 65 · SVT 69 · EPS 76.

- Pages 1-30 lisibles (instructions générales : 33 semaines, séances par matière, évaluations par
  roavolana).
- **Pages 43-47 (Géographie) non extractibles ici** : polices CID encodées, pas d'outil PDF installé.
  Le contenu est celui du FRA (même source). Si tu veux un calage exact du *nombre de séances* par
  objectif, exporte ces 5 pages en texte ou en image.

⚠️ Ce document contient la mention « MINISTERE DE L'ÉDUCATION NATIONALE » — **à ne jamais reproduire
dans un manuel J-Learn** (consigne de `prompt.txt`).

### 4.3 Fiche de préparation Français 9e (Drive, `1ZDS_gEct5bFWf4K83NBpxjnAnkpFJnQ0`)

Manuel de Français 9e (T3/CE), 186 séances, 12 séances de 30 min par semaine, 8 thèmes. Utile comme
**référence de présentation** (même niveau, même collection, édition 2026-2027).

⚠️ **Ne pas copier sa structure** : son déroulement est « révision, mise en situation, présentation,
observation, analyse, synthèse, application, évaluation » = **les 8 étapes à plat**, alors que le skill
v19 impose la structure I/II/III (I. Révision · II. NOUVELLE LEÇON 2.1-2.6 · III. Évaluation).

## 5. Ce qu'il reste à trancher (Étape 0 — rien ne sera rédigé avant)

1. **Granularité des séances** — le programme officiel dit **30 min × 3 par semaine** (~81 séances/an) ;
   le manuel actuel livre **27 fiches de 90 min** (1 par semaine). Lequel veux-tu ?
   *(Les thèmes et l'ordre du manuel actuel sont conformes au programme : c'est la granularité qui change.)*
2. **Langue** : français uniquement, ou version malgache en plus ? (si MG → corriger d'abord
   `vocabulaire-langues.md`, cf. §2)
3. **Illustrations** : validation du principe **SVG** pour les schémas géométriques (rose des vents,
   plans de classe/école/village/quartier, carte de Madagascar, échelle) ?
4. **FRM des autres mois** : les fiches mensuelles détaillées (mois 1, 3 à 9) sont-elles disponibles ?
   Le zip n'en contient qu'un exemplaire par matière.

## 6. Méthode d'exécution (Traitement C, multi-relais)

- Découpage par **trimestre complet** (jamais par couche) — cf. `continuite-multi-session.md` :
  **T1 (séances 1-9) → T2 (10-17) → T3 (18-27)**, un `.docx` livré par trimestre puis assemblage final.
- Fiches générées en **Node.js + `docx`** (`npm link`, pas `npm install` — pas de réseau), figures en SVG → PNG via `sharp`.
- Vérifications systématiques avant livraison : `sectPr` = 1, `ns0:` = 0, 6 colonnes, Times New Roman,
  aucun double espace, sommaire interactif fonctionnel, conversion PDF de contrôle (usage interne seulement).
- À la fin de chaque trimestre : lettre de passation + version à jour du skill (modèle :
  `Lettre-de-passation-Relais2.md`).
- Contraintes héritées du dernier brief (`prompt.txt`) : images **style scolaire** (pas réalistes),
  jamais la mention « ministère de l'éducation nationale ».
