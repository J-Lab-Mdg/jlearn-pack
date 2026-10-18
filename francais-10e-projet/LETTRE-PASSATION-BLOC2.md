# Lettre de passation — Bloc 2 (relais n°2) — Projet Français 10e (CP2)

> À l'attention du prochain relais. Relais n°1 : `LETTRE-PASSATION-BLOC1.md` (Bloc 1).
> Date de rédaction : après livraison du Bloc 2 (commit Bloc 2 — voir `git log`).

## 1. Ce qui est livré dans ce Bloc 2

- **`output/Manuel_Francais_10e_V1_THEMES1-2.docx`** (≈ 361 Ko) : manuel **cumulatif**
  séances 1 à 28 = Unité 1 « Les formules de présentation » (s1-12) + Unité 2
  « Les termes relatifs à la famille » (s13-28). Sommaire interactif 2 unités,
  33 signets, 15 images (couverture + 14 illustrations), verify **TOUT CONFORME ×28**.
- **`output/Manuel_Francais_10e_V1_BLOC1.docx`** régénéré : le mode d'emploi du Bloc 1
  était silencieusement tronqué (voir § 3, bug n° 1) — corrigé et re-vérifié TOUT CONFORME ×12.
- `src/data-theme2.js` : 16 séances s13-s28 (famille : proche, élargie, « Voici ma famille »,
  comptine, mon/ma, ton/ta, son/sa, grand jeu des possessifs ; Lecture : son u s21-23,
  son eu s25-27 ; Écriture : dictées s24 et s28 + bilan d'unité).
- `illus/generate_illus.py` : +6 sections unité 2 (s13_famille, s14_grands_parents,
  s15_voici_famille, s17_possessifs, s21_son_u, s25_son_eu) + helpers (jupe2, lune, tortue,
  route, maison_rue, flamme, ballon, cheveux_gris) — tous les PNG re-vérifiés visuellement.
- `verify_docx.py` : « I. Révision » / « III. Évaluation » acceptent désormais N **ou** N+1
  (N séances + 1 mention légitime au mode d'emploi).

## 2. Contenu de l'Unité 2 (résumé de continuity)

- EO (s13-20) : phrase « Dans ma famille, il y a… » ; famille élargie (devinettes) ;
  « Voici ma famille. Voici mon papa… J'aime ma famille. » ; comptine « Papa, maman, frère
  et sœur, / ma famille est mon bonheur. » + jeu « Qui manque-t-il ? » ; possessifs mon/ma
  (s17), ton/ta (s18), son/sa (s19), grand jeu (s20 — règle : papa/frère/oncle/cahier →
  mon-ton-son ; maman/sœur/tante/gomme → ma-ta-sa).
- Lecture (s21-23, s25-27) : son **u** (une, du, tu, salut, jupe, lune, rue, tortue ; mur,
  fumée, plume, bureau ; phrases) puis son **eu** (jeu, feu, deux, yeux, cheveux ; fleur,
  docteur, facteur, voleur ; phrases).
- EE (s24, s28) : écrire u (dictée jupe/lune/rue/salut), écrire eu + bilan (dictée
  jeu/deux/cheveux/ma sœur). Barèmes 8+6+6 = 20 partout.

## 3. Bugs trouvés et corrigés dans ce Bloc (à connaître)

1. **Paragraphes en tableau nu ignorés** : dans les assembleurs, un para écrit
   `[{t:…},{t:…}]` au lieu de `t([{t:…},{t:…}])` est **silencieusement absent** du docx.
   Le mode d'emploi du Bloc 1 avait ainsi perdu 5 paragraphes (durées I/II/III, légende
   ROUGE/VERT/BLEU, conseil « dictez »). Corrigé dans les DEUX assembleurs ; les deux docx
   ont été régénérés. → Après chaque regen : grep `Révision (3 min)` (= N+1), `ROUGE` (= 1).
2. **`node_modules` et pip ne survivent pas au snapshot** (dossiers exclus) : refaire
   `npm install` (+ `pip install --break-system-packages pillow`) à chaque reprise.
3. Incohérences corrigées dans data-theme2 : « la bébé »→« le bébé », « pompe »→« pomme »
   (s20), distracteur « cheveu rouge »→« cheval » (s25 — contenait déjà le son eu),
   « salle... non ! » retiré de la présentation s26.
4. Indentation JS de data-theme2.js / assemble-bloc2.js halvée par un nettoyage trop large
   de doubles espaces (contenu intact, require OK) — cosmétique, à ne PAS refaire.

## 4. État et prochaines étapes

| Bloc | Unité | Séances | État |
|---|---|---|---|
| 1 | Présentation | 1-12 | ✅ (+ régénéré, mode d'emploi complet) |
| 1-2 | cumulatif | 1-28 | ✅ `THEMES1-2.docx` TOUT CONFORME ×28 |
| 3 | La toilette | 29-40 (12) | ⏳ **Prochain** — T1 semaines 8-9 : L/EE son **an** ; T2 poursuit (+o, ou) |
| 4 | L'école | 41-52 (12) | ⏳ sons ch, s/c, on |
| 5 | Cadeaux et vêtements | 53-65 (13) | ⏳ sons eil/ail, j, z |
| 6 | Le marché | 66-83 (18) | ⏳ sons oi, ui, ph |
| 7 | Les repas | 84-99 (16) | ⏳ sons in ; g, gu/qu, q ; k, c |
| 8 | La ferme | 100-120 (21) | ⏳ sons œu, ou |

Procédure Bloc 3 (reprendre telle quelle) :
1. Écrire `src/data-theme3.js` en copiant la structure de data-theme2 (16→12 séances,
   première séance n=29, `module.exports = { theme3, DOC }` — DOC requis par builders).
2. Ajouter les sections PNG à `illus/generate_illus.py` **après les helpers, avant le
   print final** ; regen ; **read_file de chaque PNG** (règles : étiquettes sous la bande
   de sol, bulles multiples font 26 + centre_x espacés, un personnage par étiquette).
3. `sed 's/assemble-bloc2.js/assemble-bloc3.js/'` puis : require theme3, UNITS +1
   (plage « 29 à 40 »), OUT `Manuel_Francais_10e_V1_THEMES1-3.docx`, seanceNum `/ 40`,
   footer « FIN DU BLOC 3 (SÉANCES 1 À 40) », « À suivre : Unité 4 — L'école. ».
4. node + verify 40 + greps résidus (« famille » acceptable dans les titres d'unité,
   mais 0 résidu de contenu des unités 1-2 dans les leçons du bloc nouveau).
5. README (table d'état) + lettre de passation n°3 + commit/push + present_file.

## 5. Rappels permanents

- Skill v18 : voir README § « Règles à ne pas oublier ». Durées CP2 **3/22/5** ;
  barème **20 pts** (le /10 du PDF existant a été uniformisé — décision à signaler) ;
  ≥4 items/exercice ; jamais « ministère » ; jamais de dates ; guillemets « » dans le JS.
- Sources : PDF Drive CP2 `1hpHTYVMWEjTCaoIAB8iscjgFCxIbeK-q` (chunks 0-3 lus ; 4-5
  optionnels) ; FRA 10ème = autorité (`FRA et FRM.zip` → /tmp, ré-extraire si besoin).
- Le manuel livrable est TOUJOURS le .docx (jamais de PDF livré) ; PDF internes de contrôle ok.
- « À suivre » en pied de manuel doit pointer l'unité suivante exacte (Bloc 2 → Unité 3
  « Les termes relatifs à la toilette »).

---

## 6. Mise à jour post-livraison — structure v2 (retours utilisateur)

Retours : illustrations trop simplistes ; leçons trop courtes et éparpillées → décisions validées
par ask_user : images **mixtes** (scènes IA pour les leçons, dessins plats pour les exercices),
**1 grande scène par unité + 3-4 points clés**, **structure A** (fiches séparées + leçon fusionnée),
refonte **CP2 d'abord puis CP1**.

Réalisé (structure v2 appliquée aux 28 séances) :
- `src/lecons-fusionnees.js` : 9 leçons fusionnées (U1 : n°1-4 ; U2 : n°5-9), clé `apres`.
- Assembleur bloc 2 : suppression du « CONTENU DE LA LEÇON » par séance ; chaque fiche =
  fiche de préparation + exercices + corrigé ; leçon fusionnée illustrée après la séance repère
  (s6, s9, s11, s12, s16, s20, s24, s27, s28) ; sommaire enrichi (9 lignes Leçon) ; 42 signets.
- Illustrations d'exercices plates conservées : s6 (devinette), s13 (famille), s17 (possessifs), s21 (son u).
- 8 scènes IA générées (2,3 Mo PNG → JPEG q88 ~300-400 Ko) : ia_u1_presentation, ia_u1_dialogue,
  ia_u1_son_e, ia_u1_sons_ee, ia_u2_famille, ia_u2_possessifs, ia_u2_son_u, ia_u2_son_eu.
  Règle absolue : AUCUN texte dans les images ; personnages MALGACHES ; tableau noir vierge.
- Avant-propos + mode d'emploi B réécrits pour la nouvelle organisation. verify TOUT CONFORME ×28.
- **Reste à faire** : régénérer `ia_u2_son_u.jpg` (v1 : fillette non malgache) ; appliquer la même
  structure v2 au CP1 (8 assembleurs + lecons-fusionnees.js CP1) ; Bloc 3 directement en v2.
- Pour le Bloc 3 : écrire data-theme3.js + sections leçons fusionnées dans un module v2 dès le départ.
