# Audit des illustrations du pack

Le dépôt `jlearn-pack` sert **41 illustrations** par CDN jsDelivr à l'application
J-Learn. Elles ont été inspectées **visuellement** à l'occasion de la rédaction du
manuel de SVT T9, pour décider lesquelles pouvaient y être reprises.

Cet audit ne concerne pas seulement ce manuel : ces images sont servies à toutes
les applications qui consomment le pack. Les défauts relevés ci-dessous sont donc
signalés aux mainteneurs, indépendamment de l'usage qui en a été fait ici.

> Inspection **visuelle** : aucun moteur OCR n'est disponible dans l'environnement
> de travail. Les images non listées ici n'ont pas été ouvertes une à une ; le
> présent document ne prétend donc pas à l'exhaustivité.

## Défauts bloquants

Ces images comportent une erreur visible par un élève ou un enseignant. Elles ne
devraient pas être affichées en classe en l'état.

| Image | Défaut constaté |
|---|---|
| `cycle_eau.png` | **Légendes en anglais** (`RIVER`, `RUNOFF`, `EVAPARATION`, `PRECIPITATION`) dans un pack francophone. `EVAPARATION` est de surcroît mal orthographié, et le mot **`MADOQGAECA`** n'existe dans aucune langue. Les deux flèches hautes sont par ailleurs **interverties** : la légende « évaporation » surmonte une averse, « précipitation » désigne le mouvement vers le soleil |
| `falaise_strates.png` | Porte le mot **« Sounitet »**, inexistant en français — probablement une déformation de « Sommet » |
| `svt9e_vaccination.png` | Étiquette de flacon illisible (**« VECCAS BCA »**) et boîte marquée « KIT DE PREMIERS SECOURS » à l'orthographe brouillée |
| `pollinisation_cycle.png` | **Erreur scientifique, et non de texte** : les deux fleurs sont étiquetées « Fleur mâle » et « Fleur femelle », alors que l'une comme l'autre sont dessinées avec **étamines *et* pistil** — donc hermaphrodites, cas le plus répandu chez les plantes à fleurs. L'étiquetage contredit le dessin et installe une confusion durable entre *fleur unisexuée* et *organe mâle/femelle d'une même fleur*. Légendes correctes : « fleur émettrice » et « fleur réceptrice » ; sinon, redessiner deux fleurs réellement unisexuées |

## Défauts mineurs

Utilisables, mais à corriger à l'occasion.

| Image | Défaut constaté |
|---|---|
| `paludisme_cycle.png` | Deux fautes d'accord : « moustique anophèle **infecté** » — *anophèle* est ici accordé au masculin alors que la tournure vise le moustique femelle, seule piqueuse — et « **Nouveau** moustique pique » |
| `squelette_humain.png` | L'avant-bras ne comporte qu'**un seul os** ; il en faut deux, radius et ulna. Sans texte, donc sans faute de langue, mais anatomiquement inexact |
| `svt9e_appareil_digestif.png` | Correcte, mais l'enfant représenté est à **peau claire** : peu représentatif du public visé, alors que les autres images du pack montrent des personnages malgaches |

## Images vérifiées sans réserve

`rat_champ.png` · `svt9e_vers_intestinaux.png` · `fleur_coupe.png` ·
`plante_organes.png` · `criquet_morphologie.png` · `svt9e_poule.png` ·
`svt9e_zebu.png` · `svt9e_racine_zones.png` · `svt9e_arc_reflexe.png`

## Enseignement pour la production d'illustrations

Les trois défauts bloquants ont la **même origine** : du texte incrusté dans
l'image au moment de sa génération. Un modèle d'image produit un texte
plausible en apparence mais souvent fautif, et ce texte ne peut plus être
corrigé sans régénérer l'illustration entière.

Les deux schémas ajoutés pour le manuel T9 (`svt9e_racine_zones.png`,
`svt9e_arc_reflexe.png`) ont pour cette raison été demandés **entièrement
dépourvus de texte**, les noms étant portés par la légende Markdown, qui reste
relisible et corrigeable. C'est la règle qu'il est recommandé de suivre pour
toute nouvelle illustration du pack.
