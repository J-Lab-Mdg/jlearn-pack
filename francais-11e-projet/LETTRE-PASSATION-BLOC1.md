# LETTRE DE PASSATION — Manuel Français 11e (CP1) — Relais n°9 (Blocs 1-7)

## 1. ÉTAT D'AVANCEMENT

- **Blocs/thèmes terminés** :
  - Bloc 1 — Thème 1 « Les salutations » (Langage, séances 1-10) — repris du manuel existant, mis aux normes v18.
  - Bloc 2 — Thème 2 « Les sons I et U » (Phonétique, séances 11-20) — rédigé d'après la FRA officielle
    (le PDF source est illisible au-delà de la page 30), gabarit du Bloc 1.
  - Bloc 3 — Thème 3 « Se présenter » (Langage, séances 21-30) — titres repris du PDF, contenu d'après la FRA
    (formules de présentation, structures Qui est-ce / C'est, il/elle s'appelle, adjectifs mon/ma).
  - Bloc 4 — Thème 4 « Le son OUI » (Phonétique, séances 31-40) — rédigé d'après la FRA + mots sources du FRM
    (oui, lui, huit, cuire...) : découverte, mots courants, I/U/OUI, paniers, comptine OUI (créée), articulation
    U+I=OUI, prononciation des mots, piège « compris/merci » (I, pas OUI), répétition rythmée (1 syllabe=1 frappe),
    performance finale 3 épreuves + trophée.
  - Bloc 5 — Thème 5 « Le son U : nouveaux mots » (Phonétique, séances 41-50) — rédigé d'après la FRA :
    nouveaux mots jupe/mur/plume/fumée, U de la classe (un/une/du/bureau), **piège U vs OU** (rue/roue,
    du/doux — ne pas confondre avec le Thème 2 I/U : ici U seul), panier de 11 mots en U, comptine U (créée,
    pièges : carré/parfait/répète finissent par é), articulation en miroir (U rond court / OU long / I sourire),
    position du U dans le mot, répétition rythmée, performance finale 3 épreuves + trophée.
  - Bloc 6 — Thème 6 « Le village » (Langage, séances 51-60) — rédigé d'après la FRA (parler de son village) :
    mon village (case, école, boutique, puits, marché, église) + « J'habite dans un village », lieux et actions
    (devinettes), **il y a / il n'y a pas**, dialogue « Où habites-tu ? » (jeu du ballon), comptine du village
    (créée, 6 vers), ma maison (porte/fenêtre/toit/murs), situer avec **sur/sous/dans/devant/derrière**
    (« Où est le chat ? »), dialogue du marché (mots polis, jeu de rôle fruits), village propre (balayer,
    poubelle, laver les mains), performance finale 3 épreuves + trophée.
  - Bloc 7 — Thème 7 « Le son GN » (Phonétique, séances 61-70) — rédigé d'après la FRA : découverte GN
    (montagne, campagne, agneau, peigne), autres mots (oignon, ligne, signe, cigogne + vigne, baignoire,
    gagner), **piège GN vs N** (gagner/nager, signe/singe, peigne/reine), panier de 11 mots, comptine GN
    (créée, 6 vers, piège « chemin » finit par N), articulation langue au palais (miroir), GN au milieu des
    mots + phrase-test « L'agneau gagne la montagne. » (3 GN), répétition rythmée, performance finale 3 épreuves.
  - Livrable courant : `output/Manuel_Francais_11e_V1_THEMES1-7.docx` (**cumulatif** séances 1-70 :
    couverture, avant-propos, mode d'emploi, sommaire interactif, 7 thèmes, 70 fiches/leçons/exercices/corrigés).
- **Bloc en cours si interrompu** : aucun — le Bloc 7 est terminé proprement (docx vérifié : TOUT CONFORME ×70).
- **Blocs restants** : Thème 8 du manuel existant (dernier thème du PDF, titre illisible au-delà p.30 —
  à rédiger d'après la FRA : corps, énumérations, S-CH, couleurs, possessifs, UN) **+ extension** T1 fin / T2 / T3 : parties du corps, toilette, espace, temps, famille,
  maison, classe, points cardinaux, carte de Madagascar, épicier, ferme, cultivateur, tâches ménagères
  + sons UN, S-CH, ZE-JE, OUI-UI, AN-ON, ILLE, é-è, EU, IN, IE, OIN.

## 2. FICHIERS À RÉ-UPLOADER AVEC CETTE LETTRE

- Le dossier `francais-11e-projet/` (zippé) : contient `src/` (builders + data + assemble),
  `illus/generate_illus.py`, `assets/` (PNG générés), `output/` (docx du Bloc 1),
  `verify_docx.py` (vérifications skill), README.md et la présente lettre.
- Programme officiel : `FRA et FRM.zip` (extrait dans l'environnement de travail, dossier `11ème/français/`,
  fichiers `FRA FRANCAIS 11ème.doc` = répartition annuelle — indispensable pour les blocs suivants).
- Référence style/contenu : PDF Drive « Français CP1 Fiche de préparation leçon sujet corrigé.pdf »
  (manuel existant — les thèmes 2-8 y sont intégralement, à reprendre comme le Thème 1 l'a été).

## 3. VERSION DU SKILL

- `jlearn-manuel-scolaire-skill` **v18** (zips du dépôt git — la v19 citée dans les documents reste introuvable).
- ⚠️ Signalement de conformité (sans impact sur ce manuel français) : `vocabulaire-langues.md` et
  `discipline-malagasy.md` contiennent encore l'ancienne structure « 8 étapes à plat » — à corriger avant
  tout futur manuel malgache ou anglais (voir Analyse-Skill-jlearn-v19.md, point 2).

## 4. DÉCISIONS PROPRES À CE MANUEL (validées par l'utilisateur — ne pas rediscuter)

- **Traitement C** (génération de zéro), matière **Français**, niveau **11ème (CP1)**, version **française unique**.
- **Périmètre = programme annuel complet** (option B) : améliorer le contenu des 8 thèmes existants ET étendre
  au reste de la FRA — travail par blocs thématiques complets sur plusieurs sessions.
- **Durée de séance : 30 minutes** (FRA officielle prime sur les 20 min de l'ancien manuel).
  Répartition proportionnelle fixée : **I. Révision 4 min / II. Nouvelle Leçon 22 min / III. Évaluation 4 min**.
- **Pas de version malgache.**
- **Illustrations scolaires intégrées** : dessin plat style manuel CP (Pillow/PNG ~1100px), PAS de réalisme —
  préférence explicite de l'utilisateur (« image scolaire, pas réaliste »). 7 PNG livrés pour le Bloc 1.
- Volumétrie Bloc 1 : 10 séances ≈ 40 pages (≈ 4 pages/séance) ; estimation manuel complet ≈ 320-400 pages.
- Corrigé : rose/bordeaux par défaut du skill `#C2185B` (mots clés uniquement, le reste en noir).
- Barème : 20 points par séance, **minimum 4 items par exercice** (respect strict skill v18 — l'ancien manuel
  descendait à 2-3 items, corrigé en bloc 1).
- Stack : **Node.js + docx (npm install fonctionne dans cet environnement — PAS besoin de npm link)**,
  Pillow pour les figures (cairosvg indisponible : libcairo absente).
- Le français en 11e est **100 % oral** (FRA) : toutes les activités restent orales ; l'écrit des exercices est
  une trace au tableau/cahier guidée par l'enseignant (formulation du manuel existant conservée).

## 5. LEXIQUE / CORRECTIONS VALIDÉES PENDANT CE RELAIS

- Sans objet (français uniquement). Prénoms malgaches conservés du manuel source : Rova, Nivo, Koto, Fara,
  Tiana, Lanto, Hery, Aina, Soa, Mamy (déjà conformes à la liste du skill).

## 6. À FAIRE EN PRIORITÉ PAR LE PROCHAIN RELAIS

1. Lire `README.md` du projet et `src/data-theme7.js` (comprendre le format des données d'une séance).
2. Reproduire l'environnement : `npm install` dans `francais-11e-projet/`, tester `node src/assemble-bloc7.js`,
   puis `python3 verify_docx.py output/Manuel_Francais_11e_V1_THEMES1-7.docx 70` (22 vérifications skill
   → TOUT CONFORME ×70 attendu : 6 col=70, 4 col ≥70, signets ≥74).
3. **Bloc 8 = Thème 8 (séances 71-80, dernier du manuel existant)** : titre exact illisible dans le PDF
   (au-delà p.30) ; d'après la FRA restante : parties du corps, énumérations, son S-CH, couleurs, possessifs,
   article UN. Créer `src/data-theme8.js` sur le gabarit de `data-theme7.js`, illustrations dans
   `illus/generate_illus.py` (helpers `perso`, `bulle`, `case_village`, `montagne`, `agneau`, `peigne`,
   `cigogne`…), étendre `assemble-bloc7.js` en `assemble-bloc8.js` (THEMES=[theme1..theme8],
   OUT THEMES1-8.docx, footer « FIN DU MANUEL — SÉANCES 1 À 80 »), sommaire cumulatif 1→80.
   ⚠️ Après le Thème 8, proposer à l'utilisateur l'extension FRA (T1 fin / T2 / T3) en blocs 9+.
4. Après tout write_file de `data-themeN.js` : vérifier la présence par `ls -la src/` AVANT le pipeline
   (écriture asynchrone du sandbox — ne pas réécrire immédiatement si absent au 1er ls) ; nettoyer les doubles
   espaces d'alignement (regex sur les chaînes quotées) avant `node`.
5. Vérifier chaque illustration générée (read_file) : bulles complètes (utiliser `center_x=`), pas de chevauchement,
   texte jamais coupé aux bords, rien sur les visages. Défauts corrigés récents : légende s36 coupée à droite,
   textes s43 tronqués (bonjour/Bonjour !/légende), bulles s45 sur le dernier vers — ne pas reproduire.
6. Lancer systématiquement `verify_docx.py` avant toute livraison : **TOUT CONFORME obligatoire**.

## 7. QUESTIONS EN SUSPENS POUR L'UTILISATEUR

- Séances 11 à 80 du PDF source non extractibles au-delà de la page 30 du PDF (limite du parseur) :
  les thèmes 2-7 ont été rédigés directement depuis la FRA (contenu officiel) ; thème 8 : même méthode
  sauf re-upload du .docx source dans une session future — le style des Thèmes 1-7 sert de gabarit.
- L'utilisateur a confirmé le périmètre « programme annuel complet » : le découpage définitif des thèmes 9+
  (au-delà des 8 du manuel existant) reste à proposer bloc par bloc, à faire valider à chaque relais.
