# LETTRE DE PASSATION — Manuel Français 10e (CP2) — Relais n°1 (Bloc 1)

## 1. ÉTAT D'AVANCEMENT

- **Nouveau projet** : `francais-10e-projet/` — deuxième manuel de la série (après Français 11e/CP1,
  terminé : `francais-11e-projet/`, 8 thèmes, 80 séances).
- **Bloc 1 — Unité 1 « Les formules de présentation » (séances 1-12)** : LIVRÉ.
  - Sources : PDF Drive « Francais_10e_.fiche de préparation leçon sujet corrigé JLearn_V2 »
    (ID `1hpHTYVMWEjTCaoIAB8iscjgFCxIbeK-q`, chunks 0-3 lus : fiches 1-4 reprises fidèlement ;
    illisible/vide au-delà) + FRA 10ème (`FRA et FRM.zip` → `10ème/français/FRA FRANCAIS 10ème.docx`,
    4 tables lues intégralement).
  - Contenu : se présenter (s1), présenter quelqu'un Il/Elle (s2), dialogue complet (s3),
    « Qui est-ce ? C'est... » garçon/fille/jeu (s4-6), son é découverte/mots/phrases (s7-9),
    sons è, ê découverte/phrases (s10-11), écriture é, è, ê copie+dictée (s12).
  - Structure : 1 fiche du manuel existant = 3 séances (jours) ; sous-disciplines variables
    EO (s1-6) / Lecture (s7-11) / Écriture (s12) via la clé `sd` par séance.
  - Livrable : `output/Manuel_Francais_10e_V1_BLOC1.docx` (197 Ko) — **TOUT CONFORME ×12**
    (6 col = 12, 4 col = 13, signets = 16, 0 CP1/11ème résiduel, 0 interdit, 0 date).
- **Blocs restants** : Unités 2 à 8 du manuel existant (famille 16, toilette 12, école 12,
  cadeaux/vêtements 13, marché 18, repas 16, ferme 21) = 108 séances, total manuel 120.

## 2. FICHIERS À RÉ-UPLOADER AVEC CETTE LETTRE

- Le dossier `francais-10e-projet/` (zippé) : `src/`, `illus/`, `assets/`, `output/`,
  `verify_docx.py`, README.md et la présente lettre.
- Programme officiel : `FRA et FRM.zip` (dossier `10ème/français/`, fichier
  `FRA FRANCAIS 10ème.docx` = répartition annuelle lisible via python-docx).
- Référence contenu : PDF Drive « Francais_10e_...V2.pdf » (fiches 1-4 seulement).

## 3. VERSION DU SKILL

- `jlearn-manuel-scolaire-skill` **v18** (zip du dépôt, extrait sous /tmp — ré-extraire si besoin).

## 4. DÉCISIONS PROPRES À CE MANUEL (validées — ne pas rediscuter)

- **Traitement C** (génération de zéro), matière **Français**, niveau **10ème (CP2 / T2)**,
  version française unique, ordre descendant de la série confirmé par l'utilisateur.
- **Durée 30 min**, répartition **I 3 min / II 22 min / III 5 min** (celle du manuel CP2 existant ;
  le skill interdit de réutiliser la répartition d'un autre manuel).
- **Barème /20 + ≥4 items** : le PDF existant affichait des exercices /10 avec 2-3 items —
  uniformisé aux normes de collection (comme CP1). À signaler à l'utilisateur si demandé.
- **1 fiche du PDF = 3 séances (jours)** : les fiches multi-jours sont découpées en séances
  individuelles (numérotation continue 1→120).
- Sommaire : 1 ligne par unité (pas par fiche) ; méta-table : « Séance n° : X / 12 » (puis /120).
- Illustrations scolaires plates Pillow/PNG (7 pour l'Unité 1), jamais réalistes.
- Le PDF existant annonce « 327 séances » pour 120 fiches (incohérence interne) — on retient
  **120 séances = 120 fiches = 3×30 min** (le « 327 » compte des sous-séances de 10 min).

## 5. LEXIQUE / PRÉNOMS

- Rova, Koto, Soa, Fara, Hery, Tiana, Lanto, Aina (conformes à la liste du skill, déjà utilisés CP1).

## 6. À FAIRE EN PRIORITÉ PAR LE PROCHAIN RELAIS

1. Lire `README.md` du projet et `src/data-theme1.js` (gabarit des séances, clé `sd`).
2. Reproduire l'environnement : `npm install`, `node src/assemble-bloc1.js`,
   `python3 verify_docx.py output/Manuel_Francais_10e_V1_BLOC1.docx 12` → TOUT CONFORME ×12.
3. **Bloc 2 = Unité 2 « Les termes relatifs à la famille » (séances 13-28, 16 séances)** :
   FRA (semaines 4-7 du T1) : identifier et nommer les membres de la famille (EO), adjectifs
   possessifs mon/ma/ton/ta/son/sa (EO), **son u** (L/EE) puis **son eu** (L/EE). Créer
   `src/data-theme2.js` sur le gabarit de `data-theme1.js`, illustrations (helpers `perso`,
   `bulle`, `etiquette_petite`, `centre_texte`…), étendre l'assembleur en `assemble-bloc2.js`
   (THEMES ×2, OUT THEMES1-2.docx, « Séance n° : X / 28 », footer Bloc 2).
4. Après tout write_file de `data-themeN.js` : vérifier par `ls -la src/` ; jamais de guillemets
   droits " " dans les chaînes JS ; nettoyer les doubles espaces avant `node`.
5. Inspecter chaque PNG (read_file) : bulles sans chevauchement (taille police 26 + center_x),
   légendes hors de l'herbe, personnages entiers. Défauts corrigés au Bloc 1 : s3, s6, s10.
6. `verify_docx.py` avant toute livraison : **TOUT CONFORME obligatoire** (barèmes = 20/20).

## 7. QUESTIONS EN SUSPENS POUR L'UTILISATEUR

- Barème uniformisé /20 (au lieu des /10 du PDF CP2 existant) : cohérent avec CP1 et le skill,
  mais à confirmer si l'utilisateur souhaite conserver le /10 d'origine.
- Le PDF existant comporte des annexes (glossaire, auto-évaluation, index, sujets d'examen,
  conjugaisons) : non reprises dans la V1 — à demander si l'utilisateur les veut.
