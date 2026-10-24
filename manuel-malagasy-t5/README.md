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

## Fiche modèle — la leçon d'abord

`./run.sh src/build_modele.py data_loha1 Manuel_Malagasy_T5_FICHE-MODELE_V1 1` écrit **une fiche modèle** :
page de firafitra (ce que contient chaque bloc, termes voamarina, isan'ny seho, interdit) puis la fiche dans
l'ordre demandé — **LESONA → FANAZARAN-TENA + VALINY → LOHARANON-KEVITRA (page entière) →
TAKELA-PANOMANAN-DESONA**. Avec `0` à la place de `1`, tout le thème est imprimé dans cet ordre.

Le même ordre est obtenu sur un thème entier par un drapeau, sans toucher aux données :

```sh
./run.sh src/build.py data_loha1 Manuel_Malagasy_T5_Loha1_V1 lesona
```

Le build garde l'ordre historique (fiche de préparation d'abord) tant que le drapeau n'est pas passé.
`verify.py` accepte le fichier isolé avec un 4e argument `modele` (pas de sommaire, pas d'annexe,
tableau des blocs en plus) : `./run.sh src/verify.py output/…-FICHE-MODELE_V1.docx 1 data_loha1 modele`.

### V2 : le modèle écrit sur le malgache vérifié

`src/data_modele.py` est une fiche **refaite**, non corrigée : le même gabarit, mais le malgache ne vient
plus de mémoire. Chaque tournure a été lue dans une page de l'édition malgaise de l'encyclopédie avant
d'être écrite, et l'attestation (page, phrase, URL) est consignée dans
`../fianarana-malagasy/CARNET.md`. Ce qui n'est pas trouvé n'est **pas** écrit.

```sh
./run.sh src/build_modele.py data_modele Manuel_Malagasy_T5_FICHE-MODELE_V2 1
./run.sh src/verify.py output/Manuel_Malagasy_T5_FICHE-MODELE_V2.docx 1 data_modele modele
python3 ../fianarana-malagasy/fikarohana.py --rouge     # aucune faute bannie ne doit revenir
```

La leçon est une lecture de la page `Rano` (`sources_web/full/mgwiki_rano.txt`, collée en entier après les
corrigés). Deux mots inventés ont disparu à cette occasion : `sabonina` (0 page — le mot est `savony`,
41 pages et article dédié) et `fandroavana` (0 page — le mot est `fanadiovana`, 142 pages). Le balayage
`--rouge` ne lit que les littéraux des données, hors commentaires : citer une faute pour expliquer pourquoi
elle est bannie n'est pas la réécrire.

## Termes malgaches : jamais inventés, jamais traduits de force

`refs/EXPLOITATION_DU_PE_T5.txt` (copie du document du propriétaire, à la racine du dépôt sur `main`)
fait autorité pour le vocabulaire et la démarche. Conséquences appliquées au manuel :

| à ne plus écrire | à écrire |
|---|---|
| Sommaire / Tsisan-teny | **Fizahan-takila** (terme des livres malgaches) |
| Mise en situation / Fitarihan-tsaina | **Tari-dresaka** |
| Brainstorming | **Fifanakalozan-kevitra**, **adihevitra** |
| « rappel », « observation », « analyse » | **Famerenana**, **Fandinihana**, **Famakafakana** |

**Recette de vérification d'une expression** (le sandbox n'a que `fetch_page` comme sortie réseau ; `curl`
et `urllib` répondent http 000) :

```sh
# 1. l'expression, entre guillemets, dans l'index de l'édition malagaise
https://mg.wikipedia.org/w/api.php?action=query&list=search&srsearch=%22manasa%20tanana%22&srlimit=8&format=json
#    totalhits >= 1  ->  voamarina ; 0  ->  on ne l'écrit pas
# 2. consigner phrase + titre + URL dans ../fianarana-malagasy/CARNET.md (etat : voamarina / mety / diso)
# 3. contrôler les livrables :
python3 ../fianarana-malagasy/fikarohana.py --carnet   # expressions sans trace locale à ce jour
python3 ../fianarana-malagasy/fikarohana.py --rouge     # exit 1 si une faute bannie revient dans les données
```

Un mot **licite mais au sens faux** (par ex. `resena` pour une personne qui parle) est marqué `FAKANA` dans
`LISTE-ROUGE.md` et n'est pas compté comme réapparition ; seul `TENY` bloque l'écriture.

Déroulé d'une séance, tel que le document le décrit : `Famerenana` (le geste de celui qui demande la
parole) → `Tari-dresaka` (mamorona fanontaniana) → `Fanolorana` → `Fandinihana` (jereo ny sary, décrits en
toutes lettres faute d'image) → `Famakafakana` (inona avy no hitanareo ?) → adihevitra réglé entre
**tarika Voromahery** et **tarika Railovy** avec les formules figées du PE → `Fandravonana` → `Fampiharana`
→ `Tombana` (fifaninanana an-daniny/ankilany, isa eto amin'ny solaitrabe). Une formule figée du PE se
recopie, elle ne se reformule pas.

## Dossier `sources_web/` — les pages web du contenu

`./run.sh src/collect_web.py V1` régénère `sources_web/` (un fichier par source : référence, URL,
licence et attribution, passages recopiés verbatim, fiches utilisatrices), `00_LISTE.md` (index + plan
de collecte des thèmes 6 à 15) et `RECAPITULATIF.docx`, puis emballe le tout dans
`output/Loharanon-kevitra_Web_T5_V1.zip`. Le texte intégral d'une page, quand il est collecté, est déposé
dans `sources_web/full/<clé>.txt` avant de relancer le script.

**Règle des pages web (validée par le propriétaire).** Le contenu vient d'abord de **l'édition malagaise
de l'encyclopédie** (`mg.wikipedia.org`), et la page est **collée en entier** — titre, titres de section,
exemples, liste « Jereo koa », « Loharano sy fanamarihana », mention de licence, tout — dans
`sources_web/full/<clé>.txt`. Le manuel l'imprime telle quelle après le `VALINY` de la fiche (amorce
« Pejy fenony : ity manontolo ity, tsy misy nesorina na novana na ovaina. »), et le dossier la reproduit
aussi. Rien n'est résumé, corrigé ou rogné : si le texte de la page contient une coquille, elle reste,
parce que c'est la page. Les passages de `sources.py` ne servent que d'index au cas où la page
n'aurait pas encore été collectée.
