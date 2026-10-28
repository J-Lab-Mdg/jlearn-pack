# Liste rouge — ny hadisoan'ny teny nataoko

Mes fautes à moi, pas celles des auteurs des pages que je copie. Chacune porte la correction retenue et la
preuve. Le script `fikarohana.py --rouge` balaie les modules de données du manuel et signale toute
réapparition.

| diso | nahoana | marina | voamarina amin'ny | jaraina |
|---|---|---|---|---|
| `Fandroana ny Tanana` (titre de leçon) | `mandro/fandroana` = se baigner, et `Fandroana` = le bain royal ; ce n'est pas le lavage des mains | **`Fanasana ny tanana`** (titre) et **`Manasa tanana`** (consigne) | mg.wikipedia « Fandroana », « Alahamadibe », « Tanala » ; « Volafotsy » pour `fanasana` | TENY |
| `sabonina` | 0 page dans le corpus : le mot malgache est `savony` | **`savony`** | mg.wikipedia, article Savony (41 pages) | TENY |
| `fandroavana` | mot composé de ma façon pour « lavage » | **`fanadiovana`** | mg.wikipedia, 142 pages (Savony, Lavenona) | TENY |
| `taran-tanana` | non employé par le corpus | **`rantsan-tanana`** | mg.wikipedia « Dimy » | FAKANA |
| `veroso` | verbe inventé par moi : 0 page dans l'édition malgaise | **`Safidio`** (choisir), **`Hamarino`** (vérifier) | PE T5 p.18 « hisafidy », p.17 « hanamarina » | TENY |
| `amboary` | « composer » qui n'existe pas dans le PE (0 occurrence locale) | **`Mamorao`** | EXPLOITATION DU PE T5 : « mamorona fanontaniana » | TENY |
| `androavana` | « se laver (le corps) » formé de ma main sur `fandroana` | **`mandro`** (se baigner) ou tourner avec `manasa` / `fanamainana` | CARNET, lignes `mandro` et `lamba madio` | TENY |
| `mametrika` | forme dérivée par moi de `apetraka` : 0 page dans l'édition malgaise (donnée par `list=search`) | **`mametraka`**, et dans la takela **`Tarihina ny mpianatra : hametraka fanontaniana.`** | PE T5, Fanehoan-kevitra am-bava → Sahanasa : « hametraka fanontaniana sy hamaly hevitra amim-panajana » | TENY |
| `famelezana` (dans `tsy azo famelezana`) | aucune trace du mot | **`tsy azo lavina`** | PE : « laviko » | TENY |
| `zam-jerena` | nominalisation inventée | **`azo hijerena`** | cadre lu « azo asolo savony » | TENY |
| `natsangana` (pour dire « mis en avant ») | non attesté dans le corpus | **`apetraka voalohany`** | corpus local (`apetraka`) | TENY |
| `sakafo ara-potoana` | tournure sans trace : le repas « à heure fixe » n'est pas attesté | **`isan'andro`**, **`fiainana andavanandro`** | mg.wikipedia « Rano », PE p.18 | TENY |
| `resena` pour dire « celui qui parle » | ce mot-là n'appartient pas à la langue scolaire ; le propriétaire l'a repris une fois pour toutes | **`miteny`** / **`itenenana`** | consigne du propriétaire | TENY |
| `farango sosona` = les guillemets | le PE donne `farango sosona` = « … » | guillemets = `fanonana` (ou ne pas les nommer) | PE T5, p.16 | FAKANA |
| `tsofoka` désignant les quotes | `tsirinteny tsofoka amin'ny matoanteny` = `-in-`, `-if-`, `-amp-` | garder le terme du PE pour les infixes | PE T5, p.19 | FAKANA |
| `faingo` = « : » | `faingo` = « , » ; `teboka roa` = « : » ; `teboka amam-paingo` = « ; » | reprendre le tableau du niveau 5 | PE T5, p.16 | FAKANA |
| `ifamp-` (devant un verbe réciproque isolé) | la forme est `mifamp-` (ou `fifamp-` au nom) | `mifampianatra`, `fifampiahiana` | modèle lu dans le corpus, à confirmer au cas par cas | FAKANA |
| `Miangava` pour « indépendant » | `miangava` = se redresser | **`Miankina`** | correction appliquée au thème 5 | TENY |
| `Tevoka` pour « bon/goût » | `teboka` = le point « . » ; le goût est `tambo`/`faniriana` selon le sens | **`Soa`** | correction appliquée au thème 5 | TENY |
| `majuskula` | français déguisé | **`sora-baventy`** | mg.wikipedia « Fehezanteny » | TENY |
| `akisoky` | non attesté sous cette forme dans mon corpus | **`manga`** | correction appliquée au thème 3 | TENY |
| `mmonjono` | forme fautive | **`mijono`** | correction appliquée au thème 3 | TENY |
| `Nohatreny` (pour « ce qu'il a dit ») | `nohatreny` n'est pas la forme attendue | **`Nataony`** | correction appliquée au thème 3 | TENY |
| `fifanojozana`, `lolotiavina`, `nampitiavy` | mots que j'ai composés au lieu de lire | **`fampisongadina`**, **`tsy omena lanja`**, **`nampiantsoina`** | corrections appliquées au thème 4 | TENY |
| `mampitandrika` (un texte « porte » une idée) | `tandrika` = tronc/rameau | **`mitarika`** | correction appliquée au thème 5 | TENY |
| `atin'ny vato` | non relu | **`fitaterana ny vato`** | correction appliquée au thème 5 | TENY |
| une liste de `sahanasa` que je n'ai pas lue dans le PE | le PE énumère ses propres listes par branche | recopier la sienne, ne pas la reconstituer | `refs/PE_T5_malagasy_p9-26.txt` |

## Ny didy ho ahy (ce que cette liste m'impose)

1. Un mot que je n'ai pas lu, je ne l'écris pas : je le cherche d'abord, ou j'emploie un mot lu.
2. Une correction accordée (le `resena` par exemple) vaut pour **tout** le manuel, pas pour la fiche en cours.
3. Quand le propriétaire reprend une de mes phrases, la faute va ici **le même jour**, avec la preuve.
4. Si un mot de cette liste revient dans un module de données, le build doit le dire :
   `./run.sh ../fianarana-malagasy/fikarohana.py --rouge`.
