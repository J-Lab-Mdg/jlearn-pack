# Ce qu'il faut importer du 8e dans le 7e

Analyse inversée : le **8e sert de modèle**, on identifie ses points forts et ce qui manque au 7e.

---

## 🔴 PRIORITÉ 1 — Les illustrations (l'écart le plus grave)

| | 7e | 8e |
|---|---:|---:|
| Images | **14** | **149** |
| Objets graphiques insérés | 18 | 172 |
| Séances | 81 | 47 |
| **Images par séance** | **0,17** | **3,2** |

Le 8e a **19× plus d'illustrations par séance**. C'est de loin le point le plus fort du 8e et la plus grosse faiblesse du 7e : 81 séances pour 14 images, la majorité des fiches du 7e n'ont **aucun visuel**.

Le 8e illustre systématiquement : tableau de numération, ligne graduée, opération posée, scène de mise en situation, figures géométriques.

**À faire** : viser ~2 visuels par séance du 7e (tableau de numération, droite graduée, opération posée, schéma). Beaucoup peuvent être générés en tableaux Word plutôt qu'en images, donc sans alourdir le fichier.

---

## 🔴 PRIORITÉ 2 — Les légendes grises sous les visuels

Le 8e a **165 légendes** en gris `#555555` / 8,5 pt sous chaque illustration :

> *Au marché de Mahamasina, à Antananarivo.*
> *Tableau de numération : 2 609*
> *Repérage sur une ligne graduée*
> *Addition posée*

Le 7e : **0 légende grise**. Aucun visuel n'est nommé ni commenté.

**À faire** : ajouter le style légende grise (`#555555`, 8,5 pt, centré) et légender chaque visuel du 7e.

---

## 🔴 PRIORITÉ 3 — Les encadrés « pièges à éviter » (❌)

Excellente trouvaille du 8e, totalement absente du 7e :

> 1 848 : Mille huit cent quarante-huit (❌ un mille …)
> 30009 : Trente mille neuf. (❌ 0000 : Attention !)
> 10 100 : Dix mille cent (❌ un cent)

Signalisation visuelle immédiate de l'erreur classique. Le 7e traite ça en prose (« Attention : … » × 86) — beaucoup moins lisible.

**À faire** : convertir les 86 « Attention » du 7e en encadrés ❌ avec la forme *écriture fautive → écriture correcte*.

---

## 🟠 PRIORITÉ 4 — La lisibilité (tailles de police)

| Élément | 7e | 8e |
|---|---|---|
| Corps de texte | **9,5 pt** (2 576 runs) | ~11 pt (hérité du style) |
| Titre de leçon | 12 pt | **14 pt** |
| Sous-titres numérotés | 10,5 pt | **11 pt** |
| Titre H1 fiche | **9 pt** (!) | **13 pt** |
| Étiquette Application/Évaluation | 9 pt | 11 pt |

Le 7e est **beaucoup plus tassé** : corps à 9,5 pt et surtout titres de séance à **9 pt**, plus petits que le corps de texte du 8e. Pour des élèves de 7e (plus jeunes que ceux de 8e), c'est un contresens.

**À faire** : remonter le corps à 10,5–11 pt et les H1 à 13 pt. Cela allongera le document, mais c'est le prix de la lisibilité.

---

## 🟠 PRIORITÉ 5 — La palette de fonds colorés

| Fond | 7e | 8e | usage dans le 8e |
|---|---:|---:|---|
| `F5F5F5` gris | 486 | 282 | zones neutres |
| `DDEEFF` bleu | 463 | 241 | en-têtes de tableaux |
| `FFE0B2` orange | **0** | 47 | encadrés « à retenir » |
| `FEF9E7` jaune | **0** | 20 | exemples |
| `E8F8F5` menthe | **0** | 17 | corrigés |
| `EBF5FB` bleu clair | **0** | 5 | notes |
| `FDEDEC` rose | **0** | 2 | pièges |
| `EDEDED` | 81 | 0 | (7e uniquement) |

Le 7e n'a que **3 fonds**, le 8e en a **7**, dont 5 fonds thématiques qui codent le type de contenu d'un coup d'œil. Le 7e ne distingue visuellement rien.

**À faire** : reprendre les 5 fonds thématiques du 8e pour distinguer retenir / exemple / corrigé / note / piège.

---

## 🟠 PRIORITÉ 6 — Le saumon et les vraies listes Word

- **Saumon** : 8e = `#E9967A` (*dark salmon*), 7e = `#E9704F`. Le 8e est plus doux, moins agressif à l'impression. À trancher, mais il faut **une seule** valeur pour la collection.
- **Listes** : le 8e utilise 40 listes numérotées Word natives (`numPr`) ; le 7e **0** — tout est tapé à la main en « a) b) c) ». Conséquence : pas de renumérotation automatique et un alignement fragile.
- **Tabulations** : le 7e n'utilise aucune tabulation Word réelle pour ses QCM sur 2 colonnes — l'alignement repose sur des espaces, ce qui casse dès qu'on change la police.

---

## 🟡 PRIORITÉ 7 — Les pages d'accueil

Le 8e ouvre sur trois sections en H1 que le 7e n'a pas :
- **Avant-propos**
- **Comment utiliser ce manuel** ← guide de lecture pour l'enseignant
- **Table des matières**

Le 7e a un sommaire en tableau mais pas de mode d'emploi.

---

## ✅ Ce que le 7e fait DÉJÀ MIEUX (à ne surtout pas casser)

Pour être juste, le 7e est supérieur au 8e sur plusieurs points — à conserver tels quels :

| Point | 7e | 8e |
|---|---|---|
| Barème « Total : 20 points » | **84** | 0 |
| Points par question | 324 × (1,25 pt) + 200 autres | 15 seulement |
| Champ « Documentation » (référence au programme officiel) | **81** | **0** |
| Corrigés individuels par exercice | 388 | 50 (groupés en fin de fiche) |
| Contexte malgache chiffré (ariary) | **413** | 8 |
| En-tête de fiche | 7 lignes × 4 col. | 6 lignes × 2 col. |
| Séparateurs de trimestre en H1 | oui | non |
| Annexes (Mémento + 40 sujets CEPE) | oui | non |
| Liens de sommaire | 92/92 valides | 4 signets orphelins |

Le 7e est **plus rigoureux pédagogiquement** (barèmes, corrigés en place, ancrage malgache, référence au programme). Le 8e est **mieux conçu visuellement**.

---

## Plan d'action proposé pour le 7e

| # | Action | Effort | Impact |
|---|---|---|---|
| 1 | Légendes grises `#555555` 8,5 pt sous chaque visuel | faible | fort |
| 2 | Encadrés ❌ « pièges » (conversion des 86 « Attention ») | faible | fort |
| 3 | Remonter les tailles : corps 10,5 pt, H1 13 pt, titre leçon 14 pt | faible | fort |
| 4 | Palette de 5 fonds thématiques du 8e | moyen | fort |
| 5 | Ajouter « Comment utiliser ce manuel » + Avant-propos | moyen | moyen |
| 6 | Vraies listes Word + tabulations réelles pour les QCM | moyen | moyen |
| 7 | Unifier le saumon sur toute la collection | faible | moyen |
| 8 | **Enrichir de ~150 visuels** (tableaux de numération, droites graduées, opérations posées) | **élevé** | **très fort** |

Les points 1 à 4 et 7 sont automatisables de façon sûre et transformeraient déjà nettement le rendu. Le point 8 est le vrai chantier.
