# Contrôle qualité du manuel

```
python3 scripts/verifier_manuel.py
```

Rejoue en une commande tous les contrôles menés pendant la rédaction. Sort en
**code 1** si un contrôle échoue : utilisable tel quel en pré-commit ou en CI.

## Ce qui est vérifié

| # | Contrôle | Détecte |
|---|---|---|
| 1 | Couverture | séance manquante, numérotation trouée |
| 2 | Barèmes | exercice dont les points ne totalisent plus 20 |
| 3 | Durées | réintroduction d'une durée chiffrée sur I/II/III |
| 4 | Calculs | 21 résultats chiffrés recalculés |
| 5 | Anti-plagiat | recouvrement avec le FRP sur 9 fichiers |
| 6 | Images | image référencée absente, ou non déclarée dans `pack.json` |
| 7 | Assemblage | `Manuel-SVT-T9-complet.md` désynchronisé des fichiers d'unité |

Le contrôle 7 est le plus utile au quotidien : le manuel assemblé est un
**fichier dérivé**. Modifier un fichier d'unité sans relancer l'assemblage
produit deux versions divergentes, ce qui ne se voit pas à l'œil nu.

## Validation du vérificateur

Un vérificateur qui ne détecte jamais rien ne sert à rien. Six régressions ont
été injectées volontairement, puis annulées ; toutes ont été détectées :

| Régression injectée | Détectée par |
|---|---|
| Barème passé de 6 à 5 points | contrôles 2 **et** 7 |
| Durée `(5 min)` réintroduite | contrôles 3 **et** 7 |
| Fichier image supprimé | contrôle 6 |
| Entrée retirée de `pack.json` | contrôle 6 |
| Phrase modifiée dans une séance | contrôle 7 |
| Valeur attendue faussée | contrôle 4 |

Après restauration, le manuel présentait un md5 identique à l'original.

## Après toute modification du contenu

```
python3 scripts/assembler_manuel.py       # réassembler le manuel complet
python3 scripts/verifier_manuel.py        # contrôler
python3 scripts/md2docx.py Manuel-SVT-T9-complet.md Manuel-SVT-T9-complet.docx
```

La liste des calculs du contrôle 4 est **explicite** dans le script, et non
déduite du texte : c'est elle qui fait foi. Un calcul modifié dans le manuel
sans l'être ici lèvera une alerte — comportement volontaire.
