# Carnet des expressions — izay voamarina ihany

Une ligne par expression. `Marina amin'ny` = le texte où je l'ai lue (page + URL ou page du PE). Rien n'entre
ici de mémoire : si je ne peux pas écrire la colonne 3, la ligne n'existe pas.

| expression | dikan-teny | marina amin'ny | état | aza atao |
|---|---|---|---|---|
| `manasa tanana` | se laver les mains (verbe) | mg.wikipedia « Toksoplasmosis » : « …ary **manasa tanana** aorian'izay » ; « Tanala » : « …**manasa tanana** amin'ny ran-takoho vao novonoina » | **voamarina** (2 pages) | la forme de la consigne |
| `fanasana ny tanana` | le lavage des mains (nom) | modèle lu : « **fanasana** sary » (Krômia/Volafotsy), « nampanao **fanasana ny** tongotr'ireo anjely » (Fanasan-tongotra) | **mety** (modèle attesté, `fanasan-tanana` = 0 occurrence littérale) | titre de leçon, après `ny` |
| `Fanasan-tongotra` | le lavement des pieds | titre d'article mg.wikipedia « Fanasan-tongotra (fivavahana) » | **voamarina** | prouve le composé `fanasan-` + `-ny` trait d'union |
| `mandro` / `fandroana` | se baigner / le bain ; `Fandroana` = fetin-draharan'ny andriana | mg.wikipedia « Fandroana » : « Ny **fandroan'** andriana na Fandroana dia firavoravoana anaovana **fampandroana** masina ny andriana » ; « Alahamadibe » : « …**mandro** avokoa ny vahoaka » | **voamarina** | ne désigne **jamais** les mains |
| `Ny fandroana no isan-taona fa ny fihavanana kosa isan'andro.` | proverbe | mg.wikipedia « Fihavanana » (ohabolana citée dans l'article) | **voamarina** | bon exemple de `no` + `fa` + `kosa` |
| `Aza manao fihavanan'amboa, ka taolana iray no isarahana.` | proverbe (interdit) | mg.wikipedia « Fihavanana » | **voamarina** | prouve `aza` + verbe `mi-`, et `ka` consécutif |
| `ho an'ny saka` | pour les chats | mg.wikipedia « Toksoplasmosis » | **voamarina** | `ho an'ny` + nom |
| `tsy maintsy manao` | il faut faire | mg.wikipedia « Toksoplasmosis » : « …na raha **tsy maintsy manao** fonon-tanana izy ireo » | **voamarina** | place de `tsy maintsy` devant `mi-` |
| `fianarana teny malagasy` | apprentissage du malgache | référence du PE : Lala-Rakotoson, *Lovako, **fianarana teny malagasy**, kilasy faha-3 (T3)*, via mg.wikipedia « Fehezanteny » | **voamarina** | nom d'action `fia-` |
| `ny fehezanteny dia azo atomboka amin'ny sora-baventy ary faranana amin' ny teboka` | règle de la phrase écrite | mg.wikipedia « Fehezanteny » (collée en entier dans le manuel thème 1) | **voamarina** | la majuscule + le point, telle que l'encyclopédie la dit |
| `Raha soratana amin'ny abidy latina` | quand c'est écrit en lettres latines | idem | **voamarina** | `raha` + verbe |
| `azoko tsara` | je comprends bien | PE T5, p.13 (formule : « Tsy azoko tsara, azo averina ve ? ») | **voamarina** | `azo` + `-ko` (forme courte du pronom) |
| `mifandraika amin'ny` | qui se rapporte à | PE T5, p.13 : « voambolana **mifandraika amin'ny** lohahevitra » | **voamarina** | `mifan-` + `amin'ny` |
| `enti-manohana hevitra` | ce qui appuie une idée | PE T5, p.13 (liste des `sahanasa`) | **voamarina** | orthographe du PE : `enti-` collé, trait d'union devant `manohana` |
| `ambaratongam-pitenenana` | registre de langue | PE T5, p.14 (fiteny tandrevaka / andavanandro / mihaja) | **voamarina** | composé en `-m-` |
| `Mazotoa manasa tanana.` | Lavons-nous les mains (encouragement) | usage scolaire ; la forme `Mazotoa` se lit partout | **mety** | consigne d'ouverture de leçon |
| `Androany isika dia hianatra lesona vaovao hoe : …` | annonce de la leçon | décision de projet, validée par le propriétaire | **voamarina** (convention) | formule d'ouverture, jamais modifiée |
| `fandroana` (sens plein : la toilette, le bain du corps) | « Alohan'ny fandroana, manomana daka sy sabonina » ; ne désigne **pas** le lavage des mains | mg.wikipedia « Fandroana » (fandroan'andriana), « Alahamadibe » : « mandro avokoa ny vahoaka » | **voamarina** | emploi **légitime** : ne pas remplacer par `fanasana` quand il s'agit du corps entier |
| `resena` (pour une personne qui parle) | — | vu dans mes brouillons ; le propriétaire l'a repris : miteny / itenenana | **diso** | voir `LISTE-ROUGE.md` |

## Ny fomba fanaovana (comment ajouter une ligne)

1. Ouvrir `https://mg.wikipedia.org/w/api.php?action=query&list=search&srsearch="…expression…&srlimit=8&format=json`
   (le script `fikarohana.py` construit cette URL pour toi).
2. `totalhits` = 0 → l'expression n'est pas dans le corpus : elle va dans `LISTE-ROUGE.md`, pas ici.
3. `totalhits` ≥ 1 → copier le `snippet` (la phrase autour), relever le titre de la page, coller l'URL.
4. Écrire l'état : `voamarina` si la suite de mots est telle quelle ; `mety` si je l'ai construite sur un
   modèle lu (et alors j'écris le modèle dans la colonne 3).
5. Si la page est utile au manuel, la coller en entier dans
   `manuel-malagasy-t5/sources_web/full/<clé>.txt` : elle devient corpus **et** loharano.
