# Manuel de Géographie T6 — Collection J-Learn

Manuel scolaire de Géographie pour la classe de **T6** (Madagascar), conforme au programme d'études officiel, généré programmatiquement en DOCX (bibliothèque `docx` de Node.js).

**Cible : 78 numéros** — 66 séances de leçon + 6 séances de révision + 6 sujets d'examen, en 6 unités thématiques (cf. `PLAN-FINAL.md`).

## État d'avancement

| Élément | État |
|---|---|
| Plan de découpage (78 numéros, 6 unités) | ✅ Terminé et validé (`PLAN-FINAL.md`) |
| Générateur de séances (seance-generator.js, adapté T6) | ✅ Terminé |
| **Unité 1 — Les régions administratives de Madagascar (S1-S10)** | ✅ **Terminée et intégrée au build** |
| **Unité 2 — L'utilisation des ressources naturelles (S11-S26)** | ⬜ À venir |
| **Unité 3 — La population malgache (S27-S38)** | ⬜ À venir |
| **Unité 4 — L'exode rural à Madagascar (S39-S50)** | ⬜ À venir |
| **Unité 5 — Les grandes zones économiques et les activités économiques (S51-S66)** | ⬜ À venir |
| **Unité 6 — Le village écologique (S67-S78)** | ⬜ À venir |
| Annexes + audit final | ⬜ Fin de projet |

## Contenu produit

- `src/data-unite1.js` — Séances S1-S8 : division administrative (24 régions, districts, communes, fokontany), chefs-lieux du Centre, de l'Est, du Nord-Ouest et du Sud, districts et communes, fokontany/quartiers/secteurs, situer sa région (délimitation, superficie).
- `src/data-unite1-rev.js` — S9 révision (tableau récapitulatif 20 notions + 15 questions) et S10 sujet d'examen (4 exercices × 5 pts, corrigé).
- `src/assemble.js` — Assemblage du manuel (couverture, avant-propos, mode d'emploi, TdM interactive, tableaux de bord, unités disponibles, unités à paraître).
- `src/builders.js`, `src/seance-generator.js` — Copiés de geo-t5, adaptés (classe T6, chemins des scènes).
- `src/verifications.py` — Vérifications structurelles ; contrôle anti-mention-ministérielle en regex `\bminist\w*` (le vocabulaire officiel « régions administratives » reste autorisé, toute mention de ministère reste bloquée).
- `svg/` — 8 schémas pédagogiques (`geo6_*.png`) : pyramide de la division administrative, 4 cartes de groupes de régions avec chefs-lieux, districts et communes, fokontany, situer sa région.
- `scenes/` — 8 scènes semi-réalistes (une par leçon, JPEG 900 px q85), intégrées comme documents d'appui.
- `output/Manuel_Geographie_T6_JLearn.docx` — Build V1 — Unité 1 (**1 884 Ko**, 10 séances, 16 images).

## Générer le manuel

```bash
npm install docx sharp
node geo-t6/src/assemble.js
python3 geo-t6/src/verifications.py geo-t6/output/Manuel_Geographie_T6_JLearn.docx
```

## Structure d'une séance (leçon)

Fiche de préparation (I. Révision / II. Nouvelle leçon en 6 étapes / III. Évaluation), leçon rédigée en 3 sections, 2 exercices d'application + 2 exercices d'évaluation avec corrigés notés, mots clés, questions de révision pour la séance suivante. Chaque leçon embarque un schéma pédagogique et une scène semi-réaliste en document d'appui.

## Conventions

- Séances de 30 minutes ; numérotation globale « Séance N / 78 » ; français uniquement ; manuel complet standard (révisions + sujets d'examen + annexes en fin de projet).
- Fil rouge : Hery et Miora, jumeaux d'Antsirabe ; leur papa chauffeur de taxi-brousse ; leur maman Rasoa ; les cousins Tojo (Toamasina) et Tantely (Toliara) ; Mme Randriamampionona, l'institutrice.
- Aucune mention ministérielle ; prénoms malgaches ; jamais de dates calendaires ; jamais « Oral » en support.
- Source officielle : `PE RAPE/PE T6.pdf`, section GÉOGRAPHIE, p. 164-182 (aucun FRP T6 dans le dépôt).
- Chef-lieux vérifiés : le PE T6 inverse Androy/Anosy ; le manuel retient les chefs-lieux officiels (Androy → Ambovombe, Anosy → Taolanaro).
