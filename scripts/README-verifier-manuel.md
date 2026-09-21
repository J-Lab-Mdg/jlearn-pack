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
| 6 | Images | image absente, non déclarée dans `pack.json`, ou **sur liste noire** |
| 7 | Assemblage | `Manuel-SVT-T9-complet.md` désynchronisé des fichiers d'unité |
| 8 | Non-régression pédagogique | retour d'un des trois défauts du manuel d'origine |
| 9 | Cohérence de la note d'écarts | compteurs désynchronisés, identifiant en double |
| 10 | Liens internes | lien du README ou de la note pointant vers un fichier absent |
| 11 | Couverture du Programme d'Études | contenu officiel du PE T9 non traité par le manuel |

Le contrôle 6 vérifie en outre que le décompte d'images annoncé par
`AUDIT-images-pack.md` est **retrouvable dans le document** et que toute image
mise sur liste noire y est **justifiée par écrit** — un blocage sans motif écrit
finit par être levé par quelqu'un qui en ignore la raison.

Le **contrôle 8** mérite un mot : les contrôles 1 à 7 vérifient la *forme*
(barèmes, calculs, assemblage). Rien n'empêcherait de réintroduire, à contenu
formellement valide, les trois défauts qui ont motivé la réécriture :

1. les 5 révisions rigoureusement identiques entre elles (de même les examens) ;
2. des consignes d'exercice stéréotypées répétées de séance en séance ;
3. « Schéma à légender » annoncé sans qu'aucun schéma ne soit fourni.

Le contrôle 8 les interdit — recouvrement par paire borné à 25 %, aucune
consigne répétée 3 fois ou plus, tout schéma annoncé effectivement présent.

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
| Révision S50 dupliquée depuis S34 | contrôle 8 (recouvrement 100 %) |
| Consigne répétée sur 4 séances | contrôle 8 |
| Schéma annoncé sans image fournie | contrôle 8 |
| Écart ajouté sans mise à jour des compteurs | contrôle 9 |
| Identifiant d'écart en double | contrôle 9 |
| Total en prose désynchronisé du tableau | contrôle 9 |
| Lien du README pointant vers un fichier renommé | contrôle 10 |
| Contenu officiel retiré du manuel | contrôle 11 |
| Image défectueuse insérée dans une séance | contrôle 6 |
| Décompte de l'audit d'images faussé | contrôle 6 |
| Liste noire sans justification écrite | contrôle 6 |
| Image défectueuse insérée (`cycle_eau.png`) | contrôle 6 |

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

## Intégration continue

`.github/workflows/verifier-manuel-svt-t9.yml` rejoue ces contrôles à chaque
push et chaque pull request touchant le manuel, les scripts ou `pack.json`,
et ajoute trois garde-fous :

1. **Manuel assemblé à jour** — réassemble et compare ; échoue si un fichier
   d'unité a été modifié sans relancer l'assemblage.
2. **Conversion `.docx` fidèle** — régénère le document et vérifie qu'aucun
   mot n'est perdu.
3. **`pack.json` valide** — pas de doublon d'identifiant, aucun fichier déclaré
   manquant.

Le contrôle anti-plagiat y est **automatiquement ignoré** : il dépend de
`sources-frp/`, extrait d'une ressource du Ministère volontairement exclu du
dépôt. Son absence est le cas normal en CI, et le vérificateur la signale
(`IGNORÉ`) sans échouer. **Il reste à lancer sur le poste de rédaction avant
toute publication** — c'est le seul contrôle que la CI ne peut pas couvrir.

## Liste noire d'images

La constante `IMAGES_DEFECTUEUSES` du script recense les illustrations du pack
porteuses d'un **texte incrusté fautif** — légendes en anglais, mots inexistants,
étiquettes illisibles. Les y inscrire empêche qu'elles soient réutilisées de
bonne foi par quelqu'un qui n'aurait pas ouvert le fichier.

Le détail de chaque défaut est dans `AUDIT-images-pack.md`. Lorsqu'une image est
refaite, il suffit de retirer son entrée de la constante.

## Pourquoi le contrôle 9

La note de synthèse affiche **trois décomptes des mêmes écarts** : un total en
prose, un tableau par gravité, un tableau par unité — plus la liste détaillée.
Ajouter un écart sans mettre les quatre à jour est une erreur commise deux fois
pendant la rédaction, dont un **identifiant `A9` en double** passé inaperçu à la
relecture. Le contrôle 9 rend ces incohérences impossibles.

Piège rencontré en l'écrivant : les écarts **critiques et substantiels** sont
des titres (`## ⛔ C1 — …`) tandis que les **ordinaires et ajouts** sont des
lignes de tableau (`| **O1** | … |`). Ne compter qu'une seule de ces deux formes
sous-compte le total de 36 à 25 — et laisse passer l'ajout d'un écart. Les deux
formes sont désormais comptées, et ce cas fait partie des régressions testées.

## Le contrôle 11 : conformité au programme officiel

Les contrôles précédents portent sur la cohérence interne du manuel. Le
contrôle 11 répond à une question différente : **le manuel couvre-t-il tout ce
que le Programme d'Études exige ?**

Les 31 notions listées dans `CONTENUS_PE` sont extraites du tableau des
contenus du PE T9, section « Sciences de la vie et de la terre ». Chacune
accepte **plusieurs formulations** : le PE écrit « besoin nutritionnel des
plantes » là où le manuel écrit « besoins nutritifs des plantes », et
« conséquences environnementales » là où le manuel écrit « impacts
environnementaux ». C'est la notion qui doit être couverte, pas le mot à mot —
sans quoi le contrôle signalerait des absences fictives.

Résultat au moment de l'écriture : **couverture complète, 31/31**.
