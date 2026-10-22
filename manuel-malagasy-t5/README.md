# Manuel Fiteny Malagasy T5 (V1) — Traitement C

Génération python-docx d'un manuel de **fiteny Malagasy** pour le **T5** (= CM2 = ancien 7ème —
jamais la 5ème du collège, qui est le T7). Skill de référence : `../jlearn-manuel-scolaire/` (v21).

## Lancer

```sh
./run.sh src/build.py data_pilote Echantillon_Malagasy_T5_V1     # 1 fiche (échantillon de validation)
./run.sh src/build.py data_loha1  Manuel_Malagasy_T5_Loha1_V1     # lohahevitra 1 = 4 fiches
./run.sh src/verify.py output/<fichier>.docx <nb_fiches> <module_de_données>
```

`run.sh` ajoute `/home/user/pydeps` au `PYTHONPATH` (les dépendances ne sont pas dans le dépôt) :

```sh
python3 -m pip install --quiet --target /home/user/pydeps python-docx Pillow
```

## Conventions gelées (décisions du projet)

| Sujet | Décision |
|---|---|
| Structure d'une fiche | `I. Famerenana` / `II. LESONA VAOVAO` (6 sous-étapes : Fitarihan-tsaina, Fanolorana, Fandinihana, Famakafakana, Fandravonana, Fampiharana) / `III. Tombana` — numérotation romaine du skill, pas `1. / 2.1 / 3.` du modèle FFMOM |
| Durée | écrite **uniquement** sur I / II / III : 20 min → 3/14/3 · 30 min → 5/20/5 · 45 min → 7/30/8 ; `Faharetany` de la méta-table **laissé vide** |
| Rythme PE T5 | 9 seho / herinandro : Fanehoan-kevitra am-bava 3×20 · Vakiteny 2×30 · Fiasan'ny teny 2×30 · Asa an-tsoratra 2×30 |
| Fiche = | un groupement de 2 à 4 seho officielles, déclaré par `Isan'ny seho : X` |
| Tombana | questions-réponses simples, sans nom de type, **jamais** de barème dans la fiche (le barème n'est que dans `FANAZARAN-TENA`, en `isa`) |
| Corrigés | `VALINY` après la leçon, couleur bordeaux sur les **mots-clés uniquement** (marqués `**…**` dans les données) |
| Textes longs | ohabolana / angano / tononkalo cités (domaine public : Houlder 1915, Dahle 1908, ohabolana.org) ; lahatsoratra courts rédigés au niveau, sources thématiques citées en fin de manuel |
| Images | **aucune** dans le pilote (décision) ; `add_image()` n'accepte que le pack J-Learn, réduit à 800 px |
| Typographie | alphabet malgache pour le lettrage : `a b d e f g h i j k l m n o p r s t v z` (pas de C, Q, U, W, X) ; espace avant `:` et `?` comme le modèle FFMOM ; jamais de `→` ni de symbole dans une phrase |
| Interdits | dates calendaires, mention d'un ministère, « BEPC », « barémé », « Oral »/« am-bava » en `Fitaovana`, `V.A.` en placeholder, plus d'un verbe d'action par cellule `Mpianatra`, enrichissement des seho d'évaluation |

## Fichiers

- `src/builders.py` — bas niveau (rich/para/cell_add/no_borders/shade/add_image) + `meta_table()`,
  `deroulement()` (tableau 11×6, ligne `II.` fusionnée gridSpan=6 et grise), `seance_complet()`.
- `src/data_pilote.py` — 1 fiche (Vakiteny, lohahevitra 1) = échantillon de validation.
- `src/data_loha1.py` — les 4 fiches du lohahevitra 1 (format long, clés explicites).
- `src/data_loha2.py`, `src/data_loha3.py` — lohahevitra 2 et 3, **format compact** (clés courtes).
- `src/sources.py` — `SOURCES = {clé: (référence, URL, [passages recopiés verbatim])}` : toute source
  extérieure est stockée là, citée fiche par fiche (`loharano`/`so`) et recopiée après le corrigé.
- `src/verify.py` — 209 invariants sur le .docx **et** lint des données (durées, types d'exercices,
  minima matière, lettrage, placeholders, interdits, présence des blocs `LOHARANON-KEVITRA`).
- `output/` — les .docx générés.

## Checklist du format compact (à lire avant d'écrire un `data_lohaN.py`)

Le vérificateur est strict : ces 8 points évitent tous les allers-retours rencontrés sur 2 et 3.

1. Clés : `n, zt, lh, lt, tj, ns, du, fa, si, fo, di, fit, obs1, obsg, ka, tec, sy, fp, to, le, re, fe, so, cu`
   (normalisées par `norm_all()` ; les clés longues du thème 1 restent acceptées).
2. `le` : la leçon. Blocs `("h", titre)`, `("p", paragraphe)`, `("l", ligne)`, `("x", [liste])`,
   `("d", [répliques])`. **Toute fiche doit contenir une section `("h", "Ny teny vaovao")`.**
3. La fiche `Fanehoan-kevitra am-bava` doit contenir un **dialogue** (`("d", [...])`), sinon `verify` échoue.
4. Chaque `Fanazaran-tena` (`fp`) et chaque exercice (`fe`) : **4 items minimum** ; `fe` porte `p` = 4 à 6.
5. Jamais `→` dans une chaîne rendue ; jamais ` . ` ni ` , ` (finir l'item à compléter par le blanc,
   sans point) ; jamais deux espaces consécutifs dans une même ligne.
6. QCM : une option par item (`"a) …"`, `"b) …"`, `"d) …"`, `"e) …"`), lettrage **sans `c`**.
7. Ne pas écrire `Lohateny :` dans le corps d'une fiche (réserve de l'étiquette de la méta-table) ;
   remplacer par « Ny lohateny dia … ».
8. `so` : liste de clés de `sources.py` ; **omettre la clé** si la fiche n'a pas de source web (ne pas
   mettre `[]`). Le bloc est imprimé après les corrigés, plus une annexe finale en 3 parties.
9. Dans une liste `("x", [...])`, **ne pas commencer les items par `—`** : le gabarit ajoute déjà le
   tiret (sinon « — — Diso : … »).
10. Quand un item finit par `)`, la fermeture correcte est `)"]),` — et **jamais** `")]),` (piège
    rencontré trois fois : il casse `ast.parse`, donc le build, sans rien écrire).
11. Un item à compléter ne doit **jamais** être suivi de ` . ` ou ` , ` : « ……………… » seul, ou
    « ……………… dia … ».
12. `Fandravonana` : ne pas écrire « Koa, » dans la donnée, le gabarit le place déjà (sinon le
    vérificateur compte `NFICHE + 1`).

## État

Thèmes **1, 2 et 3** livrés (12 fiches), chacun `verify.py` → **TUATUA (209 invariants)**.
Les 4 zana-taranja sont couverts par thème ; aucune image ; `Faharetany` vide ; corrigés sous chaque
`Fanazaran-tena` ; `LOHARANON-KEVITRA` en fiche + annexe. Reste : thèmes **4 à 15** (`data_loha4.py` …
`data_loha15.py`), puis assemblage en un seul `Manuel_Malagasy_T5_V1.docx` (60 fiches).
Le propriétaire du projet relit le malagasy ; les corrections sont ensuite propagées par
recherche/remplacement dans les données, puis re-vérifiées.

## Dossier `sources_web/` — les pages web du contenu

`./run.sh src/collect_web.py V1` régénère `sources_web/` (un fichier par source : référence, URL,
licence et attribution, passages recopiés verbatim, fiches utilisatrices), `00_LISTE.md` (index + plan
de collecte des thèmes 6 à 15) et `RECAPITULATIF.docx`, puis emballe le tout dans
`output/Loharanon-kevitra_Web_T5_V1.zip`. Le texte intégral d'une page, quand il est collecté, est déposé
dans `sources_web/full/<clé>.txt` avant de relancer le script.
