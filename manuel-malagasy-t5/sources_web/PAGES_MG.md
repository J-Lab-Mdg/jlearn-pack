# Pages mg.wikipedia.org à coller, notion par notion

Le contenu du manuel se prend sur **l'édition malagaise** de l'encyclopédie libre, et **la page est collée
en entier** dans `full/<clé>.txt` (puis imprimée telle quelle après le `VALINY` de la fiche). Les titres
ci-dessous ne sont pas supposés : chacun a été **vérifié dans l'index de l'édition malagaise**
(`w/api.php?action=opensearch&search=<mot>&format=json`), donc le lien est bon.

## Déjà collectées

| clé | article (titre exact) | fiche |
|---|---|---|
| `mgwiki_fehezanteny` | Fehezanteny | thème 1, fiche 3 (Fiasan'ny teny) — notion `Rafitry ny fehezanteny` |

## À collecter pour les thèmes 1 à 5 (titres vérifiés)

| thème | article malgache | sert à |
|---|---|---|
| 1. Ny fitandroana ny fahasalamana | `Fahasalamana` | fiche 1 (Fanehoan-kevitra), vocabulaire et notions |
| 1. — | `Fahasalamam-bahoaka ao Madagasikara` | fiche 2 (Vakiteny), lahatsoratra et questions de fond |
| 2. Ady amin'ny fanararaotana ara-nofo sy ny herisetra | `Herisetra` | fiche 1 et fiche 3 |
| 2. — | `Herisetra mianjady amin'ny ankizy` | fiche 2 (Vakiteny) — recoupe la protection de l'enfance |
| 2. — | `Herisetra mianjady amin'ny vehivavy` | fiche 4 (Asa an-tsoratra), argumentation |
| 3. Fanajana ny tontolo manodidina | `Tontolo iainana` | fiche 1 et fiche 3 |
| 3. — | `Tontolo iainana eto Madagasikara` | fiche 2 (Vakiteny), contexte local |
| 4. Ady amin'ny fanavakavahana | `Fanavakavahana` | fiches 1 à 3 |
| 4. — | `Fanavakavaham-bolon-koditra` | fiche 4 (Asa an-tsoratra) |
| 5. Ny vahoaka sy ny mpitondra | `Demôkrasia` | fiches 1, 2 et 5 |

Le **ô** de `Demôkrasia` est celui de l'article : on le garde dans l'URL, pas dans le titre cité au lecteur.

## Notions de langue (Tsipelina / Fitsipiky ny teny) — titres à vérifier avant copie

`Tsipelina` · `Vakiteny` · `Lahateny` · `Ohabolana` · `Anarana` · `Matoanteny` · `Mpisolo tena` ·
`Tendro` · `Sokajin-teny` · `Fehezankevitra` · `Entimilaza` · `Lazaina` · `Fameno` · `Tarika` ·
`Filazam-potoana` · `Mpanampy` — un article n'existe pas forcément pour chacune ; dans ce cas on garde la
page la plus proche (comme `Fehezanteny` pour `Rafitry ny fehezanteny`) et on ne remplit pas avec une
page de remplissage.

## Thèmes 6 à 15 : mots de recherche, à confirmer un par un

Ce ne sont **pas** des titres d'article : ce sont les mots à taper dans `opensearch` pour voir si une page
existe en malgache, et laquelle prendre. Aucun ne sera cité avant vérification du titre exact.

| thème | mots à taper |
|---|---|
| 6. Ny fifidianana | fifidianana · vahoaka · zon'ny mifidy |
| 7. Fambolena, fiompiana, jono | fambolena · voly · tary · fiompiana · omby · jono |
| 8. Taozavatra, orinasa | taozavatra · orinasa · varotra · asa |
| 9. Asa birao | asa birao · taranja · biro |
| 10. Fandrosoan'ny teknôlôjia | teknôlôjia · fampandrosoana · milina |
| 11. Toe-tsaina siantifika | siansa · fahamarinana · fitsapana · kajy |
| 12. Fiovan'ny toetrandro | toetrandro · oram-panala · fahafihan'ny tany |
| 13. Finoana sy karazam-pivavahana | finoana · pivavahana · fivavahana · eklesia · moskéa |
| 14. Fivoaran'ny kolontsaina | kolontsaina · fomba · haiteny · tononkalo · mozika |
| 15. Ady amin'ny kolikoly | kolikoly · fitsarana · lalampanorenana · fanjakana · fahefana |

## Méthode, dans l'ordre

1. vérifier le titre exact dans l'index (`opensearch`) ;
2. ouvrir la page, **la coller entière** dans `full/<clé>.txt` — titres de section, exemples, « Jereo koa »,
   « Loharano sy fanamarihana », mention de dernière modification et avertissement de licence ;
3. ajouter la clé dans `sources.py` (référence + URL + premier paragraphe comme index) ;
4. la citer dans la fiche (`"loharano": [...]`) ;
5. `./run.sh src/build.py data_lohaN …` puis `./run.sh src/collect_web.py V1` pour regénérer le ZIP.

Une coquille dans la page reste une coquille dans le manuel : on ne corrige pas la source, on la cite.
