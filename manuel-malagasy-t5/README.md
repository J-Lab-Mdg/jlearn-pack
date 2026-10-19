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
- `src/data_loha1.py` — les 4 fiches du lohahevitra 1 (réimporte la fiche Vakiteny, aucune duplication).
- `src/verify.py` — 207 invariants sur le .docx **et** lint des données (durées, types d'exercices,
  minima matière, lettrage, placeholders, interdits).
- `output/` — les .docx générés.

## État

Échantillon validé, `lohahevitra 1` (4 fiches) livré pour relecture du malagasy. Reste au pilote :
`lohahevitra` 2 à 5 (16 fiches). Le propriétaire du projet relit le malagasy ; les corrections sont
ensuite propagées par recherche/remplacement dans les données, puis re-vérifiées.
