# Français 9e (T3/CE) — V2 — décisions et plan de fusion

Établi le 2026-09-08. Traitement C (Node.js + docx). Toutes décisions validées par
l'utilisateur ce jour.

---

## 1. Décisions Étape 0 (validées)

| Question | Réponse |
|---|---|
| Version malgache | **NON** — français uniquement |
| Numéro de version | **V2** (V1 = le PDF du Drive, qu'on améliore) |
| Couleur du corrigé | **rose saumon `#E9704F`** (cohérent avec le 10e) |
| Illustrations | **OUI** — scènes (génération d'images) **ET** schémas SVG |

### Chaîne SVG vérifiée fonctionnelle
`sharp` (npm) convertit SVG → PNG avec rendu correct (texte rouge, formes, fond crème
vérifiés visuellement). **Le blocage du 10e (« pas d'outil SVG→PNG ») est levé ici.**
Scènes : outil de génération d'images (10 par tour).

---

## 2. Sources (3, toutes lues)

| Source | Rôle |
|---|---|
| RAPE T3 2025-2026 (`hay.education.mg`, explnum_id=37) | **autorité de programme en vigueur** — 5 périodes |
| `FRA FRANCAIS 9ème.docx` (`FRA et FRM.zip`) | ancien programme — 8 thèmes |
| PDF `Francais_9eme_…V1_COMPLET.pdf` (Drive) | référence de style/structure (séances 1-14 lisibles) |

Doctrine (SKILL.md « Fusion de deux programmes officiels concurrents ») :
**tout garder, taguer la source de chaque thème, expliquer en avant-propos.**

---

## 3. Plan des 10 thèmes fusionnés (avec tag de source)

| # | Thème | Source | Période RAPE / Trimestre ancien |
|---|---|---|---|
| 1 | Les aliments | RAPE | P1 |
| 2 | La famille élargie | RAPE | P2 |
| 3 | Le temps et l'environnement scolaire | les deux (RAPE P3 ≈ ancien « école ») | P3 |
| 4 | La maison | ancien | T1 |
| 5 | Le village | ancien | T1 |
| 6 | La ferme | les deux (RAPE P4 ≈ ancien « ferme ») | P4 |
| 7 | Les travaux des champs / maladies | ancien | T2 |
| 8 | Le marché | les deux (RAPE P5 ≈ ancien « marché ») | P5 |
| 9 | Les métiers | ancien | T2-T3 |
| 10 | Le voyage / temps et saisons | ancien | T3 |

Chaque thème → une ou plusieurs séances par sous-discipline (EO, Vocabulaire, Lecture,
Grammaire, Conjugaison, Orthographe, EE), numérotation continue, durée 30 min.

## 4. Annexes par thème (nouvelle structure, demande utilisateur)

4 blocs : **A. Conjugaison détaillée** (quand / comment / pourquoi / pièges),
**B. Résumé grammaire**, **C. Résumé orthographe**, **D. Résumé vocabulaire**.
Voir `francais-9e-projet-SOURCES-ET-ANNEXES.md` § 4.
Conjugaisons du programme : être/avoir aux 3 temps, 1er groupe aux 3 temps,
3e groupe aux 3 temps, pronominaux 1er groupe (présent, passé composé),
vouloir/pouvoir/devoir, futur proche.

## 5. Découpage en relais (4 blocs)

- **Bloc 1** : thèmes 1-3 (RAPE P1-P3) + leurs annexes
- Bloc 2 : thèmes 4-6 · Bloc 3 : thèmes 7-8 · Bloc 4 : thèmes 9-10 + annexes générales

Vérifications après chaque génération : `verify_docx.py` TOUT CONFORME.
