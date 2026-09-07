# Comparaison — Manuel Math 7e (amélioré) vs Fiches Math 8e (amélioré)

Analyse programmatique des deux `.docx` livrés (dossier `telechargements/`).

## 1. Volume

| Critère | 7e | 8e |
|---|---:|---:|
| Paragraphes | 5 942 | 3 197 |
| Caractères de texte | 225 611 | 124 073 |
| Tableaux | 189 | 131 |
| Images intégrées | **14** | **149** |
| Séances | **81** | **47** |

Le 7e est ~1,8× plus volumineux en texte ; le 8e est très visuel (149 images contre 14).

## 2. Structure des titres

| | 7e | 8e |
|---|---|---|
| Style H1 | `Heading1` × 95 | `Titre1` × 57 |
| Style H2 | `Heading2` × 164 | `Titre2` × 47 |
| Libellé H1 | `SÉANCE n / 81` | `FICHE DE PRÉPARATION — SÉANCE n` |
| Libellé H2 | `LEÇON` + `EXERCICES` (2 par fiche) | `EXERCICES — Séance n : <titre>` (1 par fiche) |
| Séparateurs trimestre en H1 | oui (TRIMESTRE 1/2/3) | non |

⚠️ **Différence technique importante** : le 7e utilise les identifiants de style anglais (`Heading1/2`), le 8e les identifiants français (`Titre1/2`). Les deux s'affichent bien dans le volet de navigation Word, mais ce ne sont pas les mêmes styles — une fusion des deux documents casserait la hiérarchie.

Le 8e a en plus des H1 de tête : *Avant-propos*, *Comment utiliser ce manuel*, *Table des matières*. Le 7e place son sommaire en tableau et ajoute 2 H1 d'annexes.

## 3. Navigation

| | 7e | 8e |
|---|---:|---:|
| Bookmarks uniques | 92 | 57 |
| Liens internes (`w:anchor`) | 92 | 53 |
| Liens orphelins | 0 | **4** |

Le 7e est parfaitement apparié (92/92) après la correction des 47 ancres. Le 8e a 53 liens pour 57 bookmarks — 4 signets ne sont ciblés par aucun lien (bénin, mais 4 entrées de navigation ne sont pas atteignables depuis la table des matières).

## 4. Barème et pédagogie

| | 7e | 8e |
|---|---|---|
| Mention « Total : 20 points » | **84** | **0** |
| Barèmes détaillés | 324 × (1,25 pt), 100 × (2 pts), 100 × (4 pts) | 15 × (4 pts) seulement |
| Étiquette « Application » | 81 | 48 |
| Étiquette « Évaluation » | 82 | 49 |
| Blocs « Corrigé » | 388 | 50 |
| Options QCM (comptage des `d)`) | 368 | 183 |

Le 7e est **nettement plus normé** : chaque fiche porte un total sur 20 et un barème par question. Le 8e n'a quasiment pas de barème chiffré.

Le 7e a aussi bien plus de corrigés (388 vs 50) car chaque exercice est corrigé individuellement, alors que le 8e regroupe tous les corrigés en fin de fiche.

## 5. Mise en forme

| | 7e | 8e |
|---|---|---|
| Police | Times New Roman (uniforme, 6 732 runs) | héritée du style (aucun override) |
| Saumon (titres/corrigés) | `#E9704F` × 926 | `#E9967A` × 780 |
| Vert étiquettes | `#1E7B34` × 357 | `#1E7B34` × 233 |
| Bleu | `#1F4E79` × 424 | `#1F4E79` × 119 |
| Rouge | `#C00000` × 262 | `#C00000` × 54 |
| Gris | — | `#555555` × 186 |

⚠️ **Le saumon n'est pas le même** : 7e = `#E9704F`, 8e = `#E9967A` (*dark salmon*). Côte à côte, les deux manuels ne sont pas identiques visuellement. Vert, bleu et rouge sont en revanche parfaitement alignés.

## 6. Présentation des QCM

- **7e** : options sur 2 colonnes tabulées (`a) 458 ⇥ b) 548` / `c) 584 ⇥ d) 485`), corrigé immédiat avec justification et points — `1. c) 584 (1,25 pt)`.
- **8e** : options sur une seule ligne continue, corrigés renvoyés en bloc à la fin, sans points.

## 7. Ce que le 7e a en plus

- ANNEXE 1 — Mémento des formules
- ANNEXE 2 — 40 sujets types CEPE originaux corrigés (Partie A opérations / Partie B problèmes)
- Séparateurs de trimestre en H1
- Blocs RÉVISION / SUJET / SOUTIEN de fin de trimestre
- Mention de durée (24 occurrences ; 3 seulement dans le 8e)

## 8. Ce que le 8e a en plus

- 149 illustrations (contre 14) — beaucoup plus imagé
- Avant-propos et « Comment utiliser ce manuel » en sections dédiées
- Style de listes Word (`Paragraphedeliste` × 41), absent du 7e

## Recommandations pour aligner les deux

1. **Unifier le saumon** : passer le 8e de `#E9967A` à `#E9704F` (780 runs) — c'est l'écart visuel le plus visible.
2. **Unifier les identifiants de style** : convertir `Titre1/Titre2` du 8e en `Heading1/Heading2`, ou l'inverse.
3. **Ajouter les barèmes au 8e** : « Total : 20 points » par fiche + points par question, comme le 7e.
4. **Réparer les 4 signets orphelins** du 8e.
5. **Homogénéiser les corrigés** : placer les corrigés du 8e après chaque exercice plutôt qu'en bloc.
6. **Compléter le 7e en illustrations** : 14 images pour 81 séances, c'est peu au regard du 8e.
