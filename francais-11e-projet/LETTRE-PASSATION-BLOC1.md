# LETTRE DE PASSATION — Manuel Français 11e (CP1) — Relais n°5 (Blocs 1-3)

## 1. ÉTAT D'AVANCEMENT

- **Blocs/thèmes terminés** :
  - Bloc 1 — Thème 1 « Les salutations » (Langage, séances 1-10) — repris du manuel existant, mis aux normes v18.
  - Bloc 2 — Thème 2 « Les sons I et U » (Phonétique, séances 11-20) — rédigé d'après la FRA officielle
    (le PDF source est illisible au-delà de la page 30), gabarit du Bloc 1.
  - Bloc 3 — Thème 3 « Se présenter » (Langage, séances 21-30) — titres repris du PDF, contenu d'après la FRA
    (formules de présentation, structures Qui est-ce / C'est, il/elle s'appelle, adjectifs mon/ma).
  - Livrable courant : `output/Manuel_Francais_11e_V1_THEMES1-3.docx` (**cumulatif** séances 1-30 :
    couverture, avant-propos, mode d'emploi, sommaire interactif, 3 thèmes, 30 fiches/leçons/exercices/corrigés).
- **Bloc en cours si interrompu** : aucun — le Bloc 2 est terminé proprement (docx vérifié : TOUT CONFORME).
- **Blocs restants** : Thèmes 3 à 8 du manuel existant (Se présenter, son OUI, son U nouveaux mots, Le village,
  son GN) **+ extension** T1 fin / T2 / T3 d'après la FRA : parties du corps, toilette, espace, temps, famille,
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

1. Lire `README.md` du projet et `src/data-theme1.js` (comprendre le format des données d'une séance).
2. Reproduire l'environnement : `npm install` dans `francais-11e-projet/`, tester `node src/assemble-bloc1.js`,
   puis `python3 verify_docx.py output/Manuel_Francais_11e_V1_BLOC1.docx` (22 vérifications skill → TOUT CONFORME attendu).
3. **Bloc 2 = Thème 2 « Les sons I et U » (séances 11-20, Phonétique)** : récupérer le contenu des séances 11-20
   dans le PDF Drive (chunkIndex ≥ 1 des 6 segments — le Thème 1 a été récupéré ainsi), le reprendre dans un
   `src/data-theme2.js` sur le modèle de `data-theme1.js`, créer les illustrations dans `illus/generate_illus.py`
   (réutiliser les helpers : `perso`, `bulle`, `soleil`, `panneau`…), étendre `assemble-bloc1.js` en
   `assemble-bloc-themes1-2.js` (sommaire cumulatif, numérotation continue 1→20).
4. Pour les thèmes Phonétique : exercices adaptés à l'oral (répéter, entourer le mot qu'on entend, mimer) —
   garder ≥ 4 items et la variété des types.
5. Vérifier chaque illustration générée (read_file) : bulles complètes (utiliser `center_x=`), pas de chevauchement,
   texte jamais coupé aux bords. Deux défauts corrigés au Bloc 1 : bulle coupée par la séparatrice (s1),
   triangle qui cachait le visage (s6) — ne pas reproduire.
6. Lancer systématiquement `verify_docx.py` avant toute livraison : **TOUT CONFORME obligatoire**.

## 7. QUESTIONS EN SUSPENS POUR L'UTILISATEUR

- Séances 11 à 80 du PDF source non extractibles au-delà de la page 30 du PDF (limite du parseur) :
  les thèmes 2-8 devront être récupérés soit par re-upload du PDF/docx source dans une session future,
  soit par rédaction directe depuis la FRA (contenu officiel) — le style du Thème 1 sert de gabarit.
- L'utilisateur a confirmé le périmètre « programme annuel complet » : le découpage définitif des thèmes 9+
  (au-delà des 8 du manuel existant) reste à proposer bloc par bloc, à faire valider à chaque relais.
