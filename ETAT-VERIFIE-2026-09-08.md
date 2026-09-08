# État vérifié — reprise du travail « Français 10e / 11e » — 2026-09-08

> Chaque affirmation provient d'une commande exécutée dans ce sandbox le 2026-09-08.
> Les éléments non vérifiés sont marqués **[non vérifié]**.

---

## 1. Où était le travail

Le travail de l'autre conversation n'était **pas** dans le commit initial du dépôt.
Il a été déposé ensuite sur `main` sous forme de patch :

```
$ git fetch origin
   885d969..f8ce656  main -> origin/main
$ git show --stat f8ce656
 01a07d83-2b49-761a-b810-08cf27ec2847.patch | 26631 ++++++++
```

Soit **26 631 lignes / 1,6 Mo**, **173 fichiers**, deux projets :

- `francais-11e-projet/` — Manuel Français 11e (CP1), terminé
- `francais-10e-projet/` — Manuel Français 10e (CP2), terminé

Ce n'est **pas** le manuel de Mathématiques 7e présent à la racine du dépôt
(celui-là est un chantier distinct, `Mois1..5-Complet.docx`).

---

## 2. ⚠️ Le patch a été généré SANS `--binary` : 120 fichiers sont perdus

```
$ grep -c "^GIT binary patch" autre-travail.patch   →  0
$ grep -c "Binary files"          autre-travail.patch   →  120
$ git apply --check autre-travail.patch ; echo $?   →  1
```

120 erreurs « cannot apply binary patch … without full index line », réparties :

| Type | Nombre | Restituable ? |
|---|---|---|
| `.png` | 63 | **oui** — régénérables par script (voir § 4) |
| `.jpg` | 41 | **non** — scènes générées par IA, à refaire |
| `.docx` | 16 | **oui** — régénérables par `node src/assemble-blocN.js` |

**Règle pour la prochaine fois :** exporter avec
`git diff --binary > fichier.patch`, sinon toutes les images et tous les `.docx`
partent en fumée.

---

## 3. Ce qui a été restauré (appliqué sur `arena/01a07ff1-jlearn-pack`)

Commande utilisée, les binaires exclus :

```bash
git apply --exclude='*.png' --exclude='*.jpg' --exclude='*.docx' autre-travail.patch   # EXIT = 0
```

**53 fichiers texte restaurés**, dont :

- `francais-10e-projet/src/` — 19 fichiers : `builders.js`, `annexes.js`,
  `lecons-fusionnees.js`, `data-theme1..8.js`, `assemble-bloc1..8.js`
- `francais-11e-projet/src/` — 18 fichiers (même structure)
- 4 lettres de passation (`BLOC1`, `BLOC2`, `BLOC3` côté 10e ; `BLOC1` côté 11e)
- `README.md` ×2, `verify_docx.py` ×2, `illus/generate_illus.py` ×2
- `package.json` + `package-lock.json` ×2

---

## 4. Chaîne de build : vérifiée fonctionnelle

Contrairement à ce qu'annonçaient les anciens README (« pas d'accès réseau »),
**le réseau fonctionne ici** :

| Étape | Commande | Résultat |
|---|---|---|
| Dépendances | `npm install` | ✅ `added 22 packages` |
| Module docx | `node -e "require('docx')"` | ✅ `docx OK` |
| Pillow | `pip install --break-system-packages pillow` | ✅ `Pillow 12.3.0` |
| Illustrations | `python3 illus/generate_illus.py` | ✅ **16/16 PNG** dans `assets/` |
| Assemblage | `node src/assemble-bloc1.js` | ✅ `Manuel_Francais_10e_V1_BLOC1.docx` (197 Ko) |

**Note :** les assembleurs n'écrivent pas `output/` — il faut `mkdir -p output`
d'abord, sinon `ENOENT` sur le `.docx` de sortie.

---

## 5. Contrôle qualité du projet : reproduit à l'identique

`verify_docx.py` (l'outil du projet, bibliothèque standard uniquement) lancé sur le
`.docx` régénéré, avec N=12 :

```
$ python3 verify_docx.py output/Manuel_Francais_10e_V1_BLOC1.docx 12
[OK ] sectPr = 1 · ns0 = 0 · police = Times New Roman seule · doubles espaces = 0
[OK ] tables 6 col (déroulement) x12  →  obtenu : 12
[OK ] tables 4 col (méta + dashboards) >= N  →  obtenu : 13
[OK ] nb signets (attendu >= 16)  →  obtenu : 16
[OK ] interdit « ministère » / « BEPC » / « Hatier » = 0
RÉSULTAT : TOUT CONFORME ✓
```

La lettre `LETTRE-PASSATION-BLOC1.md` annonçait :
*« TOUT CONFORME ×12 (6 col = 12, 4 col = 13, signets = 16, 0 interdit, 0 date) »*.
**Les trois chiffres correspondent exactement** → le code restauré est fidèle et complet.

---

## 6. Le seul point bloquant : 32 images IA côté 10e

Les `ia_u*.jpg` ne sont référencés **que** dans `src/lecons-fusionnees.js`
(vérifié par `grep -l "ia_u" src/*.js`). Les assembleurs de bloc, eux, n'utilisent
que `cover_hero.png` et les PNG scriptables.

Conséquence mesurée :

```
$ node src/assemble-bloc8.js
Error: ENOENT: no such file or directory,
open '.../assets/ia_u1_presentation.jpg'
```

- `assemble-bloc1.js` → ✅ fonctionne (n'utilise que `cover_hero.png`)
- `assemble-bloc8.js` (manuel complet, séances 1-120) → ❌ bloque sur la 1re image IA

**Pour reconstruire le manuel complet côté 10e : 32 images IA à régénérer.**
Contraintes rappelées par la lettre de passation : *aucun texte dans l'image,
personnages malgaches, tableau noir vierge*. Les légendes de chaque image sont
présentes dans `lecons-fusionnees.js`, ce qui donne le contenu à reproduire.

---

## 7. Avancement réel du programme CP2 (d'après `LETTRE-PASSATION-BLOC3.md` § 5)

**PROGRAMME CP2 TERMINÉ** : 8 unités / 120 séances / 47 leçons fusionnées /
8 annexes / 40 images — TOUT CONFORME ×120 (186 signets).

Unités livrées : 1 Présentation (s1-12) · 2 Famille (s13-28) · 3 Toilette (s29-40) ·
4 École (s41-52) · 5 Cadeaux/vêtements (s53-65) · 6 Marché (s66-83) ·
7 Repas (s84-99) · 8 Ferme (s100-120).

**Prochaine étape indiquée par la lettre :** série 9ème (CE, T3),
ou enrichissement du CP1 (annexes des 8 thèmes + scènes L10-L19).

---

## 8. Non vérifié

- Le contenu pédagogique des 120 séances (seuls les contrôles automatiques de
  `verify_docx.py` ont été rejoués, et uniquement sur le Bloc 1).
- Les 41 images IA d'origine : **perdues**, non comparables.
- L'état du projet 11e côté build : **non testé** (mêmes 8 `.docx` et 56 images manquants).
- Le chantier Mathématiques 7e de la racine du dépôt : inchangé, non audité.

---

## 9. Prêt pour le 9ème (CE) ? — inventaire vérifié

### Programme officiel : disponible et lisible ✅

`FRA et FRM.zip` → `9ème/Français/FRA FRANCAIS 9ème.docx` (36 695 o), lu via python-docx.
3 trimestres (9 + 8 + 10 = 27 semaines), **185 séances**, 8 unités :

| Trimestre | Unité | Séances |
|---|---|---|
| T1 (9 sem.) | La maison | 22 |
| T1 | L'école | 27 |
| T1 | Le village | 13 |
| T2 (8 sem.) | Les travaux des champs | 21 |
| T2 | Les maladies | 22 |
| T2 + T3 | Les métiers | 15 + 16 = 31 |
| T3 (10 sem.) | Le temps et les saisons | 28 |
| T3 | Le voyage | 21 |
| **Total** | **8 unités** | **185** |

**Méthode calibrée** : le même parseur, appliqué à `FRA FRANCAIS 10ème.docx`,
retrouve **exactement 120 séances** — la valeur annoncée dans `LETTRE-PASSATION-BLOC3.md`
§5. Le comptage est donc fiable. (Attention : sommer la colonne « Nombre de séance »
donne 327 pour le 10e au lieu de 120 — ce n'est pas la bonne métrique.)

Comparaison : **CP2 = 120 séances / 8 unités → CE = 185 séances / 8 unités** (+54 %).

Version malgache également présente : `FRM FRANCAIS 9ème.docx` (18 150 o).

### Ce qui est disponible ✅

- Programme officiel FR + version FRM (ci-dessus)
- Skill `jlearn-manuel-scolaire` v18 complet (12 fichiers)
- Codebase modèle **qui compile et passe les contrôles** : `francais-10e-projet/`
  (`builders.js`, `annexes.js`, `lecons-fusionnees.js`, `data-themeN.js`,
  `assemble-blocN.js`, `verify_docx.py`, `generate_illus.py`)
- Chaîne technique vérifiée : Node 22 + docx 9.5, Pillow 12.3.0, python-docx 1.2.0
- Génération d'images (10 par tour)
- Tout le dossier 9ème des autres matières (Calcul, CU, EPS, Géographie, HDM,
  Malagasy, Tantara, FFMOM, Sary, Hetsika Aman-tsapa) pour d'éventuelles séries suivantes

### Ce qui manque ❌

- **Aucun PDF de référence « Francais_9e … fiche de préparation leçon sujet corrigé
  JLearn »**. Les 4 PDF « 9e » du dépôt sont tous des **maths**
  (`Guide Calcul 9e T3 CE.pdf`, `Manuel calcul 9e T3 CE.pdf`,
  `Math 9e fiche de préparation…`, `SUJET D'EXAMEN…9e`).
  → **Non bloquant** : côté CP2, ce PDF n'a servi que pour les séances 1-12
  (« chunks 0-3 lus : fiches 1-4 reprises fidèlement ; illisible/vide au-delà »).
  Les séances 13-120 ont été créées à partir du programme officiel.
- **Google Drive inaccessible depuis ce sandbox** :
  `curl drive.google.com` → `SSL_ERROR_SYSCALL`. Idem `raw.githubusercontent.com`.
  Seuls `github.com` (git), npm et PyPI passent. Je ne peux donc pas aller chercher
  un Drive moi-même — il faudrait le déposer dans le dépôt.

### Ambiguïté à trancher ⚠️

`LETTRE-PASSATION-BLOC3.md` écrit « série 9ème (CE, **T3**) ». Or partout ailleurs
dans les lettres, **T = Trimestre** (« FRA : T2 semaines 2-4 », « FRA T3 »), et le
dépôt contient `Guide Calcul 9e T3 CE.pdf` (= 9e, Trimestre 3, niveau CE).

Deux lectures possibles : **(a)** faire le 9ème en entier (185 séances), ou
**(b)** ne faire que le Trimestre 3 (65 séances). La lettre de passation du projet
impose de poser la question plutôt que de deviner.
