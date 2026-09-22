# Anomalies relevées dans le pack d'illustrations

Relevé en rapprochant les 41 illustrations de `pack.json` des 51 séances du
manuel de SVT T9. Ces images sont servies par CDN à l'application J-Learn ;
les défauts ci-dessous sont donc visibles par les utilisateurs.

Aucune de ces images n'a été modifiée : ce document constate, il ne corrige pas.

---

## 1. Texte incrusté erroné — `falaise_strates.png`

L'illustration porte le mot **« Sounitet »** en haut à droite, là où il faudrait
lire **« Sommet »**. Chaîne de caractères sans signification, caractéristique
d'un texte mal rendu à la génération.

**Portée** : l'image est exploitable partout ailleurs, mais ce mot la rend
impropre à une projection en classe ou à une photocopie distribuée aux élèves.

**Correction possible** : regénérer l'image sans aucun texte, à la manière de
`svt9e_racine_zones.png` et `svt9e_arc_reflexe.png`, et laisser les légendes
être placées par l'élève. C'est la convention retenue pour les schémas de ce
manuel, et elle évite définitivement ce type de défaut.

---

## 2. Numéro de figure incrusté — `svt9e_poule.png`

L'image porte en haut à gauche **« Figure 3.1 : Anatomie externe d'une poule »**.
Ce numéro provient d'un autre document et ne correspond à rien dans le manuel
SVT T9, où l'illustration apparaît en séance 19.

**Portée** : mineure mais visible. Un numéro de figure faux est plus gênant
qu'une absence de numéro, parce qu'il invite à chercher une référence
inexistante.

**Contournement retenu** : l'image est utilisée telle quelle, la légende du
manuel ne reprenant pas ce numéro. À regénérer sans le bandeau si le pack est
repris.

---

## 3. Images sans correspondance dans le programme T9

Le pack a manifestement été constitué pour plusieurs niveaux. Les illustrations
suivantes sont de bonne qualité mais **ne correspondent à aucune séance** du
programme de T9, et n'ont donc pas été utilisées :

| Image | Pourquoi elle a été écartée |
|---|---|
| `svt9e_appareil_digestif` | aucune séance de digestion au programme T9 |
| `svt9e_habitat` | maison d'habitation avec latrines et puits — il ne s'agit pas d'un habitat d'élevage, contrairement à ce que le nom pourrait suggérer en séance 20 |
| `svt9e_vaccination` | vaccination d'un enfant en dispensaire ; la séance 21 traite de la vaccination **animale** |
| `dents`, `svt9e_dents`, `svt9e_brossage_dents` | hygiène bucco-dentaire, non traitée en T9 |
| `svt9e_oeil_*`, `svt9e_oreille_parties`, `svt9e_langue` | organes des sens, hors programme T9 |
| `squelette_humain`, `os_coupe`, `bras_muscles`, `svt9e_membre_*`, `svt9e_mouvements_bras` | appareil locomoteur, hors programme T9 |
| `peau_coupe`, `svt9e_peau_coupe`, `svt9e_gale`, `svt9e_varicelle`, `svt9e_vers_intestinaux`, `paludisme_cycle` | maladies et téguments, hors programme T9 |
| `cycle_eau`, `svt9e_arbre`, `svt9e_eau_potable`, `svt9e_hygiene_mains`, `svt9e_pieds_propres`, `svt9e_corps_parties`, `svt9e_organes` | thèmes d'hygiène et d'environnement des niveaux antérieurs |
| `pollinisation_cycle`, `fleur_coupe` | la reproduction végétale n'est pas au programme T9 ; `fleur_coupe` reste une bonne coupe de fleur, réutilisable ailleurs |
| `rat_champ` | ravageur des récoltes ; `criquet_morphologie`, plus caractéristique du contexte malgache, lui a été préféré en séance 16 |
| `falaise_strates` | la séance 48 traite des techniques d'extraction, pas de la stratigraphie ; s'ajoute le défaut de texte signalé ci-dessus |

**Ce n'est pas un reproche au pack** : une bibliothèque partagée entre niveaux
contient nécessairement des images inutiles à un niveau donné. Le point utile
est qu'un nom de fichier ne suffit pas à décider d'un emploi — `svt9e_habitat`
et `svt9e_vaccination` semblaient convenir à l'unité Élevage, et une lecture
rapide les y aurait insérées à tort.

---

## Récapitulatif

| | Nombre |
|---|---|
| Images déclarées dans `pack.json` | 41 |
| Utilisées par le manuel SVT T9 | 6 |
| Écartées faute de correspondance | 35 |
| Portant un défaut de texte incrusté | 2 |
