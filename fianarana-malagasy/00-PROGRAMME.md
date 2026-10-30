# Programme d'apprentissage du malgache — `fianarana-malagasy`

But : que chaque phrase que j'écris dans un manuel soit une phrase **déjà écrite par des Malgaches**, pas
une phrase que j'ai construite. Le malgache n'a pas le droit d'être deviné.

## La règle d'or

> **Tsy misy teny nobakaiana.** Une expression n'entre dans un manuscrit que si elle a été **lue quelque
> part**, et je sais dire où. Sinon : je la note dans `LISTE-ROUGE.md`, avec la correction trouvée.

Trois états possibles pour une expression, à écrire partout où elle est listée :

| état | sens | ce que j'ai le droit d'en faire |
|---|---|---|
| **voamarina** | trouvée telle quelle dans un texte malgache (avec page + URL) | l'utiliser |
| **mety** | construite sur un modèle attesté (p. ex. `Fanasan-tongotra` → `fanasan-tanana`) | l'utiliser, en signalant le modèle |
| **diso / tsy hita** | mon invention, ou introuvable | l'interdire, la corriger |

## Comment vérifier (c'est gratuit, ça prend 20 secondes)

Le moteur de recherche plein texte de l'édition malgache de l'encyclopédie répond en JSON, et il dit
**combien de pages** contiennent la suite de mots exacte :

```
https://mg.wikipedia.org/w/api.php?action=query&list=search&srsearch="manasa tanana"&srlimit=8&format=json
```

- `totalhits` = nombre de pages où la suite est écrite telle quelle, en guillemets = recherche littérale ;
- le `snippet` montre la phrase autour : c'est là que je lis si le mot est employé comme je veux l'employer ;
- le nom de la page (`title`) est la référence à recopier dans `CARNET.md`.

Le script `fikarohana.py` fabrique ces URL pour moi (le réseau sortant du sandbox ne va pas sur
wikipedia), et vérifie en local, contre `corpus/`, les expressions que les modules de données du manuel
utilisent.

## Les six niveaux, dans l'ordre

| fichier | ce que j'y travaille | ce que ça débloque dans le manuel |
|---|---|---|
| `01-teny.md` | le **mot** : les 21 taranja, les paires anarana ↔ matoanteny, les mots-outils | le vocabulaire de chaque fiche, `Ny teny vaovao` |
| `02-kolonteny.md` | le **groupe de mots** : `anarana` + `mpamari-toetra`, `ny` + `…` + `hoe`, les formules raikitra (figées) | les consignes, les formules de politesse en classe |
| `03-fehezanteny.md` | la **phrase** : `entimilaza` / `lazaina` / `fameno`, `dia` et `no`, les temps | tout le corps des leçons et des corrigés |
| `04-fitsipiky-ny-teny.md` | la **grammaire** : les voix, les `tsirinteny`, les `mpisolo tena`, l'impératif | la branche `Fiasan'ny teny` (Fitsipiky ny teny) |
| `05-tsipelina.md` | l'**orthographe** : lettres, tendro, `‑` et `'`, la ponctuation du PE | la branche `Fiasan'ny teny` (Tsipelina), et l'orthographe de tout |
| `CARNET.md` | le carnet des expressions **vérifiées**, une ligne par expression | la liste que `verify` peut croiser |
| `LISTE-ROUGE.md` | mes fautes, avec la correction et la preuve | ce qu'il ne faut plus jamais écrire |

## Rythme

À chaque tour de travail sur le manuel : **10 expressions vérifiées** et couchées dans `CARNET.md`
(page + URL + ce que j'en retiens), et une relecture des phrases que j'ai écrites la fois précédente, avec
`fikarohana.py`. Quand le carnet est plein de `mety`, je remonte d'un niveau (le mot → le groupe → la
phrase) pour ne pas construire des phrases sur des groupes que je n'ai pas lus.

## Les textes où j'apprends, par ordre de confiance

1. **Wikipedia malagasy** (`mg.wikipedia.org`) : texte libre, recherchable en entier, licence CC BY-SA 4.0.
2. **Manuels et rapports pédagogiques** (JICA / PAGEM, `Vakiteny Modely`) : langue scolaire, la plus proche
   de ce que j'écris.
3. **Baiboly** (traduction malgache de la Bible, texte de référence du malgache écrit) et recueils
   d'**ohabolana** (`ohabolana.org`, Houlder 1915, Noyer, Sibree) : pour les formules figées et le proverbe.
4. `refs/PE_T5_malagasy_p9-26.txt` : le programme officiel, ses exemples et ses titres de notions.

Un dictionnaire (Dictionnaire Malgache-Français) n'est pas dans le sandbox : **le corpus remplace le
dictionnaire**. Ce que le corpus n'a pas, je ne l'invente pas — je le signale comme `tsy hita`, et je
demande à être repris.
