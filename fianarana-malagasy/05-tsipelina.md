# Niveau 5 — ny tsipelina (l'orthographe)

Source : PE T5, p.18 (notions de `Tsipelina`) et p.16 (les `mari-piatoana` de `Famakiana lahatsoratra`),
et la page « Malagache » de l'encyclopédie francophone pour les faits de système, recopiée dans
`manuel-malagasy-t5/src/sources.py`.

## 1. Ny litera

21 lettra : `a b d f g h i j k l m n o p r s t v y` + `'`. Pas de `c`, `q`, `u`, `w`, `x` en malgache
standard (sauf mots étrangers adaptés, et là j'écris ce que le texte lu porte). Le `y` n'apparaît qu'en fin
de mot, où il remplace le `i` final muet : `Andry`, `Tsy`, `Izy`.

## 2. Ny teny roa avahan'ny tendro (le sens qui change avec l'accent)

Paires du PE, à recopier exactement : `barika` / `barìka` · `tery` / `terý` · `ary` / `arý`.

## 3. Ny teny misy `-n-` sy ny tsy misy

Autre épreuve du PE : `inty` / `ity` · `mainka` / `maika` · `manantitra` / `manatitra` ·
`manantona` / `manatona`. La règle que le PE fait chercher : un `n` inséré change le verbe, pas seulement
la graphie. Dans le manuel, ces paires vont en `x` (liste), une paire par ligne, fermée par `"]),`.

## 4. Ny kamban-teny (les mots collés)

Modèle du PE : le premier mot en `-ka`/`-tra`/`-na` appelle un changement de forme du second
(`fanasan-tongotra`, `mari-piatoana`, `lakroanan'ny loko`…). Le trait d'union est **celui du texte** que je
recopie ; si le texte que j'ai lu écrit deux mots séparés, j'écris deux mots séparés.

## 5. Ny apostropha

`'` marque une lettre tombée : `an'ny` (ao an'ny), `ny tanan'ny mpianatra`, `amp'` devant `ny` parfois.
Deux fautes récurrentes que j'ai faites :
- écrire `ny an'ny` à la place de `ny` seul, ou l'inverse ;
- oublier l'apostrophe dans `sarin'ny toerana` (→ `sary ny toerana` = contresens).

## 6. Ny mari-piatoana (table du PE p.16 — celle-là, pas une autre)

| anarana | marika |
|---|---|
| `teboka` | . |
| `baraingo` | ? |
| `tsoraka` | ! |
| `faingo` | , |
| `teboka roa` | : |
| `teboka amam-paingo` | ; |
| `farango sosona` | … |

Et `tsofoka` = `tsirinteny tsofoka amin'ny matoanteny` (`-in- -if- -amp-`), pas les guillemets.
Pour les « quotes » du dialogue, je dis `fanonana` ou je montre l'usage sans le nommer.

## 7. Ny sora-baventy (les majuscules)

Le PE, `Famakiana lahatsoratra` (p.16) : une phrase commence par une majuscule et finit par un `teboka` —
c'est **exactement** ce que dit l'article de l'encyclopédie que j'ai collé dans le manuel : « Raha soratana
amin'ny abidy latina … dia azo atomboka amin'ny sora-baventy ary faranana amin'ny teboka ». S'ajoutent les
noms propres, `Fanjakana`, `Fiaraha-monina` selon l'usage des textes.

## 8. Ny andalana (typographie du manuel) — 5 règles que j'ai déjà payées cher

1. Pas d'espace avant `.` ni `,` (`…… , ` et `…… .` sont interdits par `verify.py`).
2. Un `x` (liste) ne commence **jamais** par `— ` : le gabarit l'ajoute, sinon « — — Diso : ».
3. Une chaîne fermée par `)` rend mal : `…"]]),` au lieu de `…"]),` est l'accident le plus fréquent.
4. Les listes `i` (consignes) et `v` (corrigés) doivent avoir le même nombre d'items.
5. Le préfixe `Koa, ` est ajouté par le build à la fandravonana : ne pas le mettre dans les données.
