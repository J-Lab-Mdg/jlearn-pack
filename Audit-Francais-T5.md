# Audit — Manuel de Français T5 (collection J-Learn)

Audit demandé : conformité au PE officiel (section Français, `PE-T5-Francais-extrait.txt`, pages 22–45 de `PE RAPE/PE T5.pdf`) + relecture qualité du `.docx`.

## 1. Conformité au PE — TABLEAU DES CONTENUS : 54/54 ✔

Chaque contenu du tableau officiel a été recherché dans les sources du manuel (unit1–6.js, annexes.js) puis confirmé.

| Thématique | Contenus du PE | Couverture |
|---|---|---|
| U1 L'environnement | type descriptif (but/caractéristiques/structure) ; lexique dégradation ; lexique protection ; mots de transition ; compléments du nom ; CC de lieu ; voir/apercevoir/regarder/se trouver (présent + imparfait) | 7/7 — S1–S12 |
| U2 Le voyage | établissements ; moyens de transport ; préparation du voyage ; paysage ; champs lexicaux ; prépositions de lieu ; CC de lieu ; adjectifs qualificatifs ; pluriel en -aux ; aller/faire/venir/prendre/mettre (présent + conditionnel) | 10/10 — S13–S24 |
| U3 Les services publics | noms des services (banque, poste, bureau) ; vie quotidienne ; rôles ; remplir/envoyer/lire au présent ; CC de but ; pronoms relatifs qui/que/où | 6/6 — S25–S36 |
| U4 Les loisirs | type explicatif ; types de loisirs ; règles et déroulement d'un jeu ; avantages/inconvénients ; synonymie/antonymie ; formation des mots ; adverbes ; pronoms interrogatifs ; sujet composé ; phrase négative ; présent de l'indicatif ; verbes en -cer/-ger | 12/12 — S37–S48 |
| U5 Les métiers | secteurs d'activités ; lieux de travail ; activités rurales/urbaines ; matières premières ; outils ; expression de la cause ; cultiver/construire/pêcher/bâtir | 7/7 — S49–S60 |
| U6 Les contes et légendes | schéma narratif ; caractéristiques du conte ; formule d'ouverture ; indicateurs de temps ; connecteurs ; formule de fin ; personnages ; verbes 1er/2e groupe + pronominaux (présent/imparfait/futur/passé composé) ; accords (sujet composé, PP avec être, PP avec avoir + COD antéposé) ; pluriel en -eau/-au/-eu | 12/12 — S61–S72 |

Les 6 composantes officielles (CO, CE, PO, PE, fonctionnement de la langue, lecture-fluidité) sont présentes dans chaque thématique ; la lecture-fluidité apparaît dans les 6 unités et l'annexe 5 reprend les stratégies de lecture officielles.

## 2. Relecture qualité du .docx

Contrôles passés :
- 72 séances numérotées en continu (SÉANCE 1 → 72 / 72), signets = ancres (sommaire interactif intact), `sectPr` unique conservé.
- Aucune trace d'atelier (github/arena : 0) ; aucune date calendaire.
- Vérification orthographique automatisée (dictionnaire français) : aucune coquille réelle. Les formes « lancons / nagons / faisez » détectées sont des **exemples d'erreurs volontaires** de la leçon -cer/-ger (S44) et de la fiche conjugaison U2 — à conserver.
- Les « doubles espaces » détectés relèvent de la convention typographique du lexique (mot  —  explication), identique aux tomes anglais.
- « Classe : » ×63 = 60 fiches + 3 consignes de classement légitimes (U5).

Défaut trouvé et **corrigé** :
- Les 6 bannières de fin d'unité affichaient « UNITÉ X — I CAN… » (anglais résiduel) → remplacées par « UNITÉ X — JE SAIS… » (`builders.js`), manuel régénéré et revérifié.

## 3. Point restant (hors manuel)

- **Audio** : les 6 MP3 de compréhension orale (S1, S13, S25, S37, S49, S61) sont dans `manuel-francais-t5/audio/` mais le dossier Google Drive public « JLearn Français T5 » n'existe pas encore. Dès sa création par l'éditeur : insérer les liens + QR dans les 6 séances CO.
