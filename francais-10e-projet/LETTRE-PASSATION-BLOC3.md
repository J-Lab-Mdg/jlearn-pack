# Lettre de passation — Bloc 3 (relais n°3) — Projet Français 10e (CP2)

> À l'attention du prochain relais. Relais n°2 : `LETTRE-PASSATION-BLOC2.md` (structure v2).
> Livraison : manuel cumulatif `output/Manuel_Francais_10e_V1_THEMES1-3.docx` (séances 1-40).

## 1. Ce qui est livré dans ce Bloc 3

- **Unité 3 « Les termes relatifs à la toilette » (s29-40)** — `src/data-theme3.js` :
  - EO s29-34 : vocabulaire de la toilette, bain/douche, dents, propre/sale, comptine
    (« Je me lave, je me lave, avec du savon ; je me rince, je me sèche, je suis propre et content ! »),
    dialogue « Tu es propre ? — Oui, je suis propre ! ».
  - Lecture s35-37 : son **an** (lampe, banane, canard, pantalon, dent, maman, banc —
    dans *dent* le son s'écrit **en**) ; phrases (« Papa a un pantalon. »…).
  - EE s38-39 : écrire an (dictée) puis copier/écrire une phrase (majuscule, point).
  - s40 : bilan d'unité. Barèmes 8+6+6 = 20, ≥4 items (verify TOUT CONFORME ×40).
- **15 leçons fusionnées** (U3 : n°10-15) + **3 annexes de thème** (voir § 2).
- **Images** : 4 scènes IA (ia_u3_toilette = savon/lavabo/miroir ; ia_u3_dents = brossage ;
  ia_u3_comptine = enfants propres + bassine en cour ; ia_u3_son_an = panda/pantalon/lampe/
  banane/canard) + 2 plates d'exercice (s31_dents, s35_son_an). Toutes vérifiées visuellement.
- Assembleur `src/assemble-bloc3.js` : UNITS ×3, seanceNum `/ 40`, footer « FIN DU BLOC 3
  (SÉANCES 1 À 40) », « À suivre : Unité 4 — L'école. », EXO_IMAGES + s31, s35.

## 2. NOUVEAU — Annexes de fin de thème (`src/annexes.js`)

Demande utilisateur : pour **chaque thème**, une annexe avec **conjugaison**, **résumé
grammaire et orthographe**, **résumé vocabulaire**. Implémentation :
- Bloc « ANNEXES DU THÈME N — … » inséré **après la dernière leçon fusionnée de l'unité**,
  + ligne au sommaire (ancre `themeNannexe`). Rendu : sous-titres verts A./B./C., lignes
  indentées, mots clés bleus.
- Contenu par unité : U1 (s'appeler, être / il-elle, question, accents / formules, sons é-è) ;
  U2 (avoir / possessifs, pluriel / famille, sons u-eu) ; U3 (se laver, être propre /
  son an, un-une / toilette, dents, mots en an).
- **Pour le Bloc 4** : préremplir U4 dans `src/annexes.js` (école : être/avoir en phrases ;
  ch, s-c, on ; vocabulaire de l'école) AVANT d'assembler.

## 3. Procédure Bloc 4 (Unité 4 « L'école », s41-52 — 12 séances)

1. `src/data-theme4.js` : EO vocabulaire de l'école/classe ; L sons **ch**, **s/c**, **on** ;
   EE dictées ; copier le schéma de data-theme3 (`module.exports = { theme4 }`, sd par séance,
   barèmes 8+6+6, ≥4 items). FRA : T2 semaines 2-4.
2. Leçons fusionnées U4 (5-6 groupes) dans `lecons-fusionnees.js` + annexes U4 dans `annexes.js`.
3. Images : 3-4 scènes IA (salle de classe, cahier/ardoise, son ch — chat/chandail… ; aucun
   texte, personnages malgaches, tableau noir vierge) + 2 plates d'exercice si utile.
4. `sed 's/assemble-bloc3.js/assemble-bloc4.js/g'` puis : require theme4, UNITS ×4
   (plage « 41 à 52 »), OUT `THEMES1-4.docx`, seanceNum `/ 52`, footer « FIN DU BLOC 4
   (SÉANCES 1 À 52) », « À suivre : Unité 5 — Les cadeaux et les vêtements. ».
5. node + verify 52 + greps (leçons ×1, annexes ×4, 0 résidu) + README/lettre + commit/push.

## 4. Rappels (inchangés)

- Skill v18 : durées 3/22/5 uniquement sur I/II/III ; barème 20 pts ; ≥4 items/exercice ;
  jamais « ministère » ; 0 date ; Times New Roman seule ; guillemets « » dans le JS.
- Images IA : AUCUN texte, personnages malgaches, tableau noir vierge ; lire chaque image
  (read_file) avant livraison. Limite : 10 images générées par tour.
- `node_modules`/pip à réinstaller à chaque reprise ; DOC n'existe pas côté CP2
  (metaTable reçoit DOC depuis data-theme1 dans l'assembleur — vérifier l'import bloc3).
- Sources : PDF CP2 (chunks 0-3 lus) ; FRA 10ème = autorité (/tmp/frafrm, ré-extraire).


---

## 5. Mise à jour — Bloc 4 livré (Unité 4 « L'école », s41-52)

- `src/data-theme4.js` : EO s41-46 (classe, cartable, dialogue « Prête-moi..., s'il te plaît »,
  « Qu'est-ce que c'est ? », comptine « À l'école j'apprends, c'est ainsi ! », énumérer une liste) ;
  Lecture s47-49 (ch : chat/chapeau/chaussure/mouche ; s écrit s/c/ç : salade/citron/garçon ;
  on : maison/ballon/bonbon/pantalon/mouton) ; EE s50-51 (écrire ch, écrire on) ; s52 bilan.
- Leçons fusionnées 16-20 + annexe U4 (conjugaison **aller**, sons ch/s/on, vocabulaire école).
- Images : ia_u4_ecole (classe, affiches lémuriens/zébus), ia_u4_cartable, ia_u4_son_ch
  (chat au chapeau + chaussures + mouche), ia_u4_son_on (maison + ballon + bonbons).
- `src/assemble-bloc4.js` : UNITS ×4, seanceNum `/ 52`, footer « FIN DU BLOC 4 (SÉANCES 1 À 52) »,
  « À suivre : Unité 5 — Les cadeaux et les vêtements. » — TOUT CONFORME ×52 (20 leçons, 4 annexes).
- **Bloc 5 livré** (Unité 5 « Les cadeaux et les vêtements », s53-65 — 13 séances, sons
  eil/ail, j, z) : data-theme5.js, leçons 21-25, annexe U5 (conjugaison **porter** ; sons
  eil/ail/j/z ; vocabulaire vêtements/cadeau), images ia_u5_tenue / cadeau / son_eil / son_z —
  TOUT CONFORME ×65 (25 leçons, 5 annexes, 103 signets, 28 images).
- **Bloc 6 livré** (Unité 6 « Le marché », s66-83 — 18 séances, sons oi, ui, ph ; FRA T3) :
  data-theme6.js, leçons 26-31, annexe U6 (conjugaison **acheter** ; sons oi/ui/ph ; vocabulaire
  marché/fruits/légumes), images ia_u6_marche / achat / son_oi / son_ph — TOUT CONFORME ×83
  (31 leçons, 6 annexes, 129 signets, 32 images). Répartition sd : EO s66-75, L s76-78, EE s79-83.
- **Bloc 7 livré** (Unité 7 « Les repas », s84-99 — 16 séances, sons in, g/gu, k/c) :
  data-theme7.js, leçons 32-39, annexe U7 (conjugaison **manger** ; sons in/g/k ; vocabulaire
  repas/table/cuisine), images ia_u7_repas / cuisine / son_in / son_k — TOUT CONFORME ×99
  (39 leçons, 7 annexes, 155 signets, 36 images). Répartition sd : EO s84-93, L s94-96, EE s97-99.
- **Procédure Bloc 8** (Unité 8 « La ferme », s100-120 — 21 séances, sons œu, ou ; FRA T3) :
  reprendre le § 3 avec bloc8, plage « 100 à 120 », OUT THEMES1-8.docx, seanceNum `/ 120`,
  annexe U8 (avoir ; sons œu, ou ; vocabulaire de la ferme et des animaux).
