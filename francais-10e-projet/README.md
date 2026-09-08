# Projet — Manuel Français 10e (CP2) — Collection J-Learn

Traitement C (génération de zéro) selon le skill `jlearn-manuel-scolaire` v18.
Manuel existant de référence : PDF Drive « Francais_10e_.fiche de préparation leçon sujet corrigé JLearn_V2 »
(8 unités, 120 fiches, 3×30 min par fiche) — illisible au-delà des fiches 4.

## Structure v2 (refonte suite retours utilisateur)

- **Fiches de préparation séparées** (une par séance de 30 min, exercices notés + corrigés après chaque fiche).
- **Leçons fusionnées** : après chaque groupe de séances du même grand titre, une page « LEÇON N — … »
  (1 à 2 pages, illustrée) rassemble le contenu à dicter : titre rouge, sous-titres verts, mots clés bleus,
  ★ À RETENIR. Module : `src/lecons-fusionnees.js` (clé `apres` = séance après laquelle la leçon s'affiche).
- **Images mixtes** : scènes IA riches (album scolaire, personnages malgaches, AUCUN texte dans l'image,
  tableau noir vierge) pour la couverture des leçons fusionnées ; dessins plats Pillow conservés pour
  certaines illustrations d'exercices (EXO_IMAGES dans l'assembleur : s6, s13, s17, s21).
- `ia_u2_son_u.jpg` régénérée (v2 malgache ✓).
- **Annexes par thème** (retours utilisateur) : `ANNEXES DU THÈME N` après la dernière leçon
  fusionnée de chaque unité — A. Conjugaison (s'appeler/être ; avoir ; se laver),
  B. Grammaire et orthographe, C. Vocabulaire du thème (module `src/annexes.js`, U3 préremplie).
- Bloc 3 livré : s29-40 toilette (data-theme3.js), leçons 10-15, images ia_u3_* + s31/s35 plates.
- Bloc 4 livré : s41-52 école (data-theme4.js), leçons 16-20, annexe U4 (conjugaison aller),
  images ia_u4_* (classe, cartable, chat-chapeau, maison-ballon-bonbons) — 20 leçons, 4 annexes.
- Bloc 5 livré : s53-65 cadeaux/vêtements (data-theme5.js), leçons 21-25, annexe U5 (conjugaison porter),
  images ia_u5_* (tenue, cadeau, soleil-réveil, zèbre-zébu) — 25 leçons, 5 annexes.
- Bloc 6 livré : s66-83 marché (data-theme6.js), leçons 26-31, annexe U6 (conjugaison acheter),
  images ia_u6_* (marché, achat, oie-voiture-toit, phare-éléphant-dauphin) — 31 leçons, 6 annexes.
- Bloc 7 livré : s84-99 repas (data-theme7.js), leçons 32-39, annexe U7 (conjugaison manger),
  images ia_u7_* (repas famille, cuisine au feu de bois, lapin-pain-jardin, coq-café-carotte) — 39 leçons, 7 annexes.

## Décisions validées

- Niveau : **10ème (CP2 / T2)** — même série que Français 11e (CP1, terminé : 8 thèmes, 80 séances).
- Durée de séance : **30 minutes** (FRA 10ème) — répartition **3 min / 22 min / 5 min**
  (celle du manuel CP2 existant ; la répartition CP1 4/22/4 ne doit PAS être réutilisée).
- Barème : **20 points par séance, minimum 4 items par exercice** (convention de collection ;
  le manuel existant CP2 affichait /10 — uniformisé, à signaler à l'utilisateur).
- Sous-discipline **variable par séance** (Expression Orale / Lecture / Écriture) via la clé `sd`
  de chaque séance dans `data-themeN.js` (Unité 1 : EO s1-6, L s7-11, EE s12).
- Sources : PDF existant (fiches 1-4 = séances 1-12, reprises fidèlement) + FRA 10ème
  (`FRA et FRM.zip` → `10ème/français/FRA FRANCAIS 10ème.docx`, lisible via python-docx).

## État

| Bloc | Unité | Séances | État |
|---|---|---|---|
| 1 | Les formules de présentation (EO/L/EE) | 1-12 | ✅ Livré (`output/Manuel_Francais_10e_V1_BLOC1.docx`) |
| 1-2 | Présentation + Famille (cumulatif) | 1-28 | ✅ Livré (`output/Manuel_Francais_10e_V1_THEMES1-2.docx`) |
| 1-3 | + Toilette (cumulatif) | 1-40 | ✅ Livré (`output/Manuel_Francais_10e_V1_THEMES1-3.docx`) |
| 1-4 | + École (cumulatif) | 1-52 | ✅ Livré (`output/Manuel_Francais_10e_V1_THEMES1-4.docx`) |
| 1-5 | + Cadeaux et vêtements (cumulatif) | 1-65 | ✅ Livré (`output/Manuel_Francais_10e_V1_THEMES1-5.docx`) |
| 1-6 | + Le marché (cumulatif) | 1-83 | ✅ Livré (`output/Manuel_Francais_10e_V1_THEMES1-6.docx`) |
| 1-7 | + Les repas (cumulatif) | 1-99 | ✅ Livré (`output/Manuel_Francais_10e_V1_THEMES1-7.docx`) |
| 4 | L'école | 41-52 | ✅ Intégré (EO s41-46, L ch / s,c,ç / on s47-49, EE s50-51, bilan s52 ; 5 leçons + annexe U4) |
| 3 | Les termes relatifs à la toilette | 29-40 | ✅ Intégré (EO s29-34, L son an s35-37, EE s38-39, bilan s40 ; 6 leçons fusionnées + annexe) |
| 2 | Les termes relatifs à la famille | 13-28 | ✅ Intégré au cumulatif (EO s13-20, L sons u/eu s21-23 et s25-27, EE s24 et s28) |
| 8 | La ferme (21) | 100-120 | ⏳ À venir |

Volumétrie totale : 8 unités, 120 séances (≈ 40 fiches de 3 jours).

## Générer le manuel

```bash
npm install                       # package docx
python3 illus/generate_illus.py   # illustrations PNG dans assets/
node src/assemble-bloc1.js        # → output/Manuel_Francais_10e_V1_BLOC1.docx (12 séances)
node src/assemble-bloc2.js        # → output/Manuel_Francais_10e_V1_THEMES1-2.docx (28 séances, cumulatif)
python3 verify_docx.py output/Manuel_Francais_10e_V1_BLOC1.docx 12       # TOUT CONFORME attendu
python3 verify_docx.py output/Manuel_Francais_10e_V1_THEMES1-2.docx 28   # TOUT CONFORME attendu
node src/assemble-bloc3.js        # → output/Manuel_Francais_10e_V1_THEMES1-3.docx (40 séances, cumulatif)
node src/assemble-bloc4.js        # → output/Manuel_Francais_10e_V1_THEMES1-4.docx (52 séances, cumulatif)
python3 verify_docx.py output/Manuel_Francais_10e_V1_THEMES1-3.docx 40   # TOUT CONFORME attendu
python3 verify_docx.py output/Manuel_Francais_10e_V1_THEMES1-4.docx 52   # TOUT CONFORME attendu
node src/assemble-bloc5.js        # → output/Manuel_Francais_10e_V1_THEMES1-5.docx (65 séances, cumulatif)
python3 verify_docx.py output/Manuel_Francais_10e_V1_THEMES1-5.docx 65   # TOUT CONFORME attendu
node src/assemble-bloc6.js        # → output/Manuel_Francais_10e_V1_THEMES1-6.docx (83 séances, cumulatif)
python3 verify_docx.py output/Manuel_Francais_10e_V1_THEMES1-6.docx 83   # TOUT CONFORME attendu
node src/assemble-bloc7.js        # → output/Manuel_Francais_10e_V1_THEMES1-7.docx (99 séances, cumulatif)
python3 verify_docx.py output/Manuel_Francais_10e_V1_THEMES1-7.docx 99   # TOUT CONFORME attendu
```

## Architecture

```
src/builders.js       # design skill v18 — DURÉES CP2 : 3/22/5 (différent de CP1 4/22/4)
src/data-theme1.js    # CONTENU des 12 séances de l'Unité 1 (clé sd par séance)
src/data-theme2.js    # CONTENU des 16 séances de l'Unité 2 (famille, sons u puis eu)
src/data-theme3.js    # CONTENU des 12 séances de l'Unité 3 (toilette, son an)
src/data-theme4.js    # CONTENU des 12 séances de l'Unité 4 (école, sons ch, s/c/ç, on)
src/assemble-bloc1.js # Bloc 1 : couverture + sommaire + Unité 1 seule
src/assemble-bloc2.js # Bloc 2 : cumulatif — liste UNITS (thème + plage), sommaire multi-unités
src/lecons-fusionnees.js # Leçons fusionnées par grand titre (structure v2, clé apres)
src/annexes.js        # Annexe de fin de thème : conjugaison, grammaire-orthographe, vocabulaire
illus/generate_illus.py  # illustrations scolaires plates (perso, bulle, velo, tasse, fanions…)
assets/               # PNG ~1100px (cover_hero + 7 illustrations unité 1 + 6 unité 2)
verify_docx.py        # 22 vérifications skill v18 (paramétrable : <file> <N>)
```

## Règles à ne pas oublier (rappel skill v18)

- Durées UNIQUEMENT sur I / II / III (3/22/5 pour CP2), jamais sur les sous-étapes 1-6.
- ≥ 4 items par exercice, barème total = 20 pts, ne jamais nommer le type d'exercice.
- Révision sans support consultable (« — ») ; Analyse : 1 ligne par couple question / R.A.
- Synthèse par « Donc : » ; 0 date calendaire ; 0 « ministère » ; Times New Roman seule.
- Guillemets droits " " interdits DANS les chaînes JS (utiliser « »).
- Vérifier chaque PNG par read_file avant livraison (défauts corrigés au Bloc 1 : bulles
  chevauchées s3, jambes traversant la comptine s6, bébé masqué s10).
- Paragraphes en tableau nu `[{t:…},…]` dans les assembleurs : les envelopper dans `t(…)` —
  sinon docx les ignore SILENCIEUSEMENT (bug corrigé au Bloc 2, mode d'emploi tronqué au Bloc 1).
- Vérifier après chaque regen : `Révision (3 min)` = N+1 (mode d'emploi inclus), `ROUGE/BLEU` = 1,
  résidus unités précédentes = 0 (grep docx).
- Continuité : voir `LETTRE-PASSATION-BLOC2.md` (relais n°2 du projet CP2).
