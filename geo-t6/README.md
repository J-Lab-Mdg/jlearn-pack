# Manuel de Géographie T6 — Collection J-Learn

Manuel scolaire de Géographie pour la classe de **T6** (Madagascar), conforme au programme d'études officiel, généré programmatiquement en DOCX (bibliothèque `docx` de Node.js).

**78 numéros** — 66 séances de leçon + 6 séances de révision + 6 sujets d'examen, en 6 unités thématiques (cf. `PLAN-FINAL.md`).

## État d'avancement

| Élément | État |
|---|---|
| Plan de découpage (78 numéros, 6 unités) | ✅ Terminé et validé (`PLAN-FINAL.md`) |
| Générateur de séances (seance-generator.js, adapté T6) | ✅ Terminé |
| **Unité 1 — Les régions administratives de Madagascar (S1-S10)** | ✅ **Terminée et intégrée au build** |
| **Unité 2 — L'utilisation des ressources naturelles (S11-S26)** | ✅ **Terminée et intégrée au build** |
| **Unité 3 — La population malgache (S27-S38)** | ✅ **Terminée et intégrée au build** |
| **Unité 4 — L'exode rural à Madagascar (S39-S50)** | ✅ **Terminée et intégrée au build** |
| **Unité 5 — Les grandes zones économiques et les activités économiques (S51-S66)** | ✅ **Terminée et intégrée au build** |
| **Unité 6 — Le village écologique (S67-S78)** | ✅ **Terminée et intégrée au build** |
| **Annexes (glossaire, cartes muettes, auto-évaluation, table des illustrations, sources)** | ✅ **Terminées et intégrées au build** |
| **Audit final** | ✅ **audit.py : 76/76 contrôles OK ; verifications.py : ✅** |

## Protection anti-revente
- Page **« Authenticité et droits »** après la couverture, avec avertissement public et QR code vérifiable.
- Filigrane diagonal discret **« COPIE OFFICIELLE J-LEARN »** sur toutes les pages intérieures.
- Pied de page anti-revente avec pagination et lien cliquable vers l'unique page de vente officielle : `https://web.facebook.com/profile.php?id=61575599505051`.
- Composant commun : `jlearn-protection.js` ; QR officiel : `jlearn_facebook_officiel_qr.png`.
- Pour la distribution commerciale, conserver le DOCX privé et privilégier un PDF exporté afin de rendre le retrait de ces protections plus difficile.

## Contenu produit

- `src/data-unite1.js` — Séances S1-S8 : division administrative (24 régions, districts, communes, fokontany), chefs-lieux du Centre, de l'Est, du Nord-Ouest et du Sud, districts et communes, fokontany/quartiers/secteurs, situer sa région (délimitation, superficie).
- `src/data-unite1-rev.js` — S9 révision (tableau récapitulatif 20 notions + 15 questions) et S10 sujet d'examen (4 exercices × 5 pts, corrigé).
- `src/data-unite2.js` — Séances S11-S17 : ressources renouvelables (eau et forêts, halieutiques, faune et flore, minerais, énergies), ressources de sa région, les quatre utilisations.
- `src/data-unite2b.js` — Séances S18-S24 : gestion des ressources, déséquilibre population/ressources, ressources mal exploitées et espèces disparues, changement climatique, solutions (×2), mini-projet (étang piscicole).
- `src/data-unite2-rev.js` — S25 révision (tableau 24 notions + 15 questions) et S26 sujet d'examen (4 exercices × 5 pts, barème 20, corrigé).
- `src/data-unite3.js` / `data-unite3b.js` — Séances S27-S36 : répartition inégale de la population, densité, zones peuplées, évolution (natalité, mortalité, accroissement naturel), migrations (émigration, immigration, mouvement pendulaire), croissance, pyramide des âges, impacts.
- `src/data-unite3-rev.js` — S37 révision + S38 sujet d'examen.
- `src/data-unite4.js` / `data-unite4b.js` — Séances S39-S48 : notion de l'exode rural, causes (pauvreté, insécurité, chômage, problèmes fonciers, infrastructures), conséquences rurales et urbaines, solutions socio-économiques.
- `src/data-unite4-rev.js` — S49 révision + S50 sujet d'examen.
- `src/data-unite5.js` / `data-unite5b.js` — Séances S51-S64 : les sept zones économiques, cultures vivrières/commerciales/industrielles, élevage, pêche, forêt, mines, artisanat, industrie, tourisme, commerce, transport, nouvelle technologie et IA.
- `src/data-unite5-rev.js` — S65 révision (tableau 32 notions + 18 questions) et S66 sujet d'examen.
- `src/data-unite6.js` — Séances S67-S71 : notion de village écologique, organisation juridique (autorité locale et notables, droits coutumiers, Dina), organisation socioéconomique (modes de vie, loisirs), activités économiques.
- `src/data-unite6b.js` — Séances S72-S76 : habitation et architecture, infrastructures économiques et sites naturels, normes (environnement/topographie, traditions/implantation), comparaison village/village écologique et maquette.
- `src/data-unite6-rev.js` — S77 révision (tableau 21 notions + 20 questions) et S78 sujet d'examen final (4 exercices × 5 pts, barème 20, corrigé).
- `src/assemble.js` — Assemblage du manuel (couverture, avant-propos, mode d'emploi, TdM interactive, tableaux de bord, 6 unités complètes ; annexes optionnelles par `src/annexes.js` s'il existe).
- `src/builders.js`, `src/seance-generator.js` — Copiés de geo-t5, adaptés (classe T6, chemins des scènes).
- `src/verifications.py` — Vérifications structurelles ; contrôle anti-mention-ministérielle en regex `\bminist\w*` (le vocabulaire officiel « régions administratives » reste autorisé, toute mention de ministère reste bloquée).
- `svg/` — 66 schémas pédagogiques (`geo6_*.png`) : U1 (8) + U2 (14) + U3 (10) + U4 (14) + U5 (14) + U6 (10 : notion, organisation juridique, Dina, modes de vie et loisirs, activités, habitation, infrastructures et sites, topographie, traditions, maquette comparée).
- `scenes/` — 66 scènes semi-réalistes (une par leçon, JPEG 900 px q88) : 8 (U1) + 14 (U2) + 10 (U3) + 10 (U4) + 14 (U5) + 10 (U6).
- `src/annexes.js` — Annexes : glossaire (64 termes du vocabulaire officiel T6), 8 cartes muettes, auto-évaluation par compétences (6 unités, 28 compétences), table des illustrations (66 leçons + annexe), Sources (programme d'études officiel T6).
- `src/audit.py` — Audit de contenu : séquençage, unités, fiches, barèmes des 6 sujets d'examen, corrigés, mots interdits, typographie, images, annexes (8 cartes), vocabulaire officiel et protection anti-revente — 76 contrôles.
- `svg/make-svg-annexes.js` — 8 cartes muettes (`geo6_carte_muette_*`) à contour réel de Madagascar (projection lat/lon réelle, îles Nosy Be et Sainte-Marie) : les 24 régions (badges sur les chefs-lieux), la répartition de la population, les grandes villes, les ressources naturelles, les zones économiques, l'exode rural, les voies de communication, le village écologique à légender.
- `output/Manuel_Geographie_T6_JLearn.docx` — **Build V10 — édition complète protégée** (18 688 Ko) : couverture image ; polices +2 pt ; leçons sans puces d’exemples ; 8 cartes muettes au contour réel de Madagascar ; section « Sources » ; page d’authenticité, QR Facebook officiel, filigrane et pied de page anti-revente ; 78/78 numéros ; 72 fiches ; 142 images ; 66 documents d’appui ; verifications.py ✅ ; audit.py 76/76 ✅.
- Empreinte SHA-256 du build V10 : `524057f617184706fd2e43a7e61ba219da18bcb7e5838465018d08b28c2d4dea`.

## Générer le manuel

```bash
npm install docx sharp
node geo-t6/src/assemble.js
cd geo-t6 && python3 src/verifications.py && cd ..
python3 geo-t6/src/audit.py
```

## Structure d'une séance (leçon)

Fiche de préparation (I. Révision / II. Nouvelle leçon en 6 étapes / III. Évaluation), leçon rédigée en 3 sections, 2 exercices d'application + 2 exercices d'évaluation avec corrigés notés, mots clés, questions de révision pour la séance suivante. Chaque leçon embarque un schéma pédagogique et une scène semi-réaliste en document d'appui.

## Conventions

- Séances de 30 minutes ; numérotation globale « Séance N / 78 » ; français uniquement ; manuel complet standard (révisions + sujets d'examen + annexes).
- Fil rouge U1 : Hery et Miora, jumeaux d'Antsirabe ; leur papa chauffeur de taxi-brousse ; leur maman Rasoa ; les cousins Tojo (Toamasina) et Tantely (Toliara) ; Mme Randriamampionona, l'institutrice. Fil rouge U2 : grand-père Maitso et son village des Hautes Terres, tante Vololona, le guide d'Andasibe, le doyen du conseil ; mini-projet filée par le groupe de Hery et Miora (étang piscicole). Fil rouge U3 : Rasoa et son cousin Rado ; fil rouge U4 : Rado le fils aîné parti à Antananarivo ; fil rouge U5 : le taxi-brousse de papa à travers les sept zones économiques ; fil rouge U6 : le village de grand-père Maitso devenu village écologique (chef Rakotomalala, doyenne Soa, la famille Ravao).
- Aucune mention ministérielle ; prénoms malgaches ; jamais de dates calendaires ; jamais « Oral » en support.
- Source officielle : `PE RAPE/PE T6.pdf`, section GÉOGRAPHIE, p. 164-182 (aucun FRP T6 dans le dépôt).
- Chef-lieux vérifiés : le PE T6 inverse Androy/Anosy ; le manuel retient les chefs-lieux officiels (Androy → Ambovombe, Anosy → Taolanaro).
