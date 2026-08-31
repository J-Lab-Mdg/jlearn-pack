# Analyse — Math 8e Fiche de préparation leçon exercices corrigé J-learn.docx

Audit du manuel selon la procédure `audit-conformite.md` du skill `jlearn-manuel-scolaire` (version présente dans `skill v18.zip`, identique à `jlearn-manuel-scolaire-skill-v18v.zip`). Extraction faite via python-docx + inspection XML brute (pas de survol visuel).

## 1. Vue d'ensemble du document

- **47 séances** (numérotation continue, Trimestre 1 → 3, dans l'ordre du sommaire).
- Chaque séance suit l'ordre : **Fiche de préparation → Leçon → EXERCICES (Application/Évaluation + Corrigé)**, conforme à `manuel-structure.md` section 6.
- Avant-propos + "Comment utiliser ce manuel" + Table des matières présents en tête, sans EPS/préscolaire (matière = Calcul/Mathématiques 8ème, non concernée par l'exclusion).
- 152 images intégrées (`word/media/`), tables de numération, schémas de figures géométriques.

## 2. Vérifications techniques obligatoires (checklist SKILL.md/audit-conformite.md)

| Vérification | Résultat | Conforme ? |
|---|---|---|
| `<w:sectPr>` | 1 occurrence | ✅ |
| Namespace `ns0:` | 0 occurrence | ✅ |
| Namespaces `<w:document>` | 35 (le skill en attend "32" comme repère indicatif — l'important est 0 `ns0`, ce qui est le cas) | ✅ |
| "Times New Roman" (police par défaut du document) | Défini dans `styles.xml` → `w:docDefaults` (hérité par tout le texte, cohérent avec la règle "Times New Roman partout") | ✅ |
| Titres "FICHE DE PRÉPARATION" | 48 occurrences (47 séances + 1 dans "Comment utiliser ce manuel") = cohérent avec 47 séances | ✅ |
| Bookmarks vs hyperliens du sommaire | 47 hyperliens vers `seance1`…`seance47`, tous résolus vers un bookmark existant ; 3 bookmarks non liés (`avant-propos`, `mode-emploi`, `sommaire` — posés mais pas utilisés en lien retour, sans impact) | ✅ (sommaire interactif fonctionnel) |
| Colonnes du tableau de déroulement | 47 tables à 6 colonnes (une par séance) | ✅ |
| ">Oral<" résiduel | 0 occurrence | ✅ |
| "BEPC" résiduel | 0 occurrence | ✅ |
| Dates calendaires précises | 0 occurrence (aucune année scolaire figée trouvée) | ✅ |
| Séparateur décimal | Virgule partout (aucun point décimal détecté dans les nombres) | ✅ |

## 3. Structure pédagogique (I / II / III)

- Structure à 3 grandes étapes bien appliquée : **I. Révision** (durée affichée), **II. NOUVELLE LEÇON** (durée globale affichée sur une ligne fusionnée), **III. Évaluation** (durée affichée) — aucune durée individuelle sur les 6 sous-étapes 1 à 6, conforme à la règle.
- Étape **I. Révision** : support "—" dans toutes les occurrences vérifiées (jamais de support consultable), conforme.
- Étape **3. Observation** : les élèves "observent silencieusement", pas de réponse à ce stade — conforme.
- Étape **5. Synthèse** : commence systématiquement par "Donc, …", énoncée par l'enseignant — conforme.
- Couleurs de la leçon : rouge `#C00000` (titre, 65 occurrences), vert `#1E7B34` (sous-titres, 218), bleu `#1F4E79` (mots-clés, 124) — bien présentes. Trois couleurs additionnelles apparaissent dans le contenu mathématique : `#117A65` (formules type "P = …"), `#B7950B` (calculs d'application numérique) et `#2C3E50` (énoncés d'exemple) — pas prévues explicitement par `mathematiques.md`/`design-fiche.md`, mais cohérentes avec l'esprit de mise en valeur des formules/exemples, et une seule teinte "alerte" (`#C0392B`, rouge/brique) pour deux encadrés "⚠ Attention au piège" — à faire valider si vous souhaitez rester strictement dans la palette documentée.
- **Corrigé des exercices** : la couleur utilisée est **`#E9967A`** (saumon clair) et non le `#C2185B` (rose/bordeaux) prévu par défaut dans `SKILL.md`. `#E9967A` reste dans la famille rose/saumon autorisée par la règle ("jamais jaune, vert, bleu"), et une teinte saumon a déjà été validée dans un précédent projet du même auteur (`#E9704F` dans `Lettre-de-passation-Relais2.md`) — donc probablement un choix délibéré, mais à confirmer explicitement puisque ce n'est pas la valeur par défaut du skill.

## 4. Volume des exercices — écart à la règle des "≥4 items"

La règle SKILL.md impose **au moins 4 items par exercice**, avec une exception négociable à 2-3 items *si l'utilisateur le demande explicitement*.

Sur les 186 exercices dénombrés (Application + Évaluation, sur les 47 séances) :
- **74 exercices (~40 %) ont moins de 4 items** — presque systématiquement le deuxième exercice de chaque étape (QCM à 1 item, Vrai/Faux à 2 items), alors que le premier exercice de la paire respecte bien les 4 items.

C'est l'écart le plus important trouvé. Deux issues possibles : (a) c'est un compromis volontaire pour maîtriser le volume du manuel (47 séances × 2 exercices × 2 étapes), auquel cas il faudrait le documenter comme dans le manuel Calcul 7e (voir `Lettre-de-passation-Relais2.md`, qui mentionne un compromis similaire validé) ; (b) sinon, il faudrait étoffer chaque deuxième exercice à 4 items.

## 5. Erreurs de contenu trouvées (vérification numérique et cohérence interne)

Trois erreurs concrètes trouvées en comparant le corrigé de la **fiche de préparation** (étape 6. Application / III. Évaluation) au corrigé de la section **EXERCICES** correspondante — ces deux corrigés portent sur les mêmes énoncés et devraient toujours concorder :

1. **Séance 47 — Application, question 4** : énoncé *"3 semaines = ? jours"*.
   - Corrigé dans la **fiche** (étape 6, cellule Apprenants) : **"48 heures"** ❌ (copié-collé de la réponse précédente, erreur d'unité en plus d'être un calcul faux).
   - Corrigé dans la section **EXERCICES** (même énoncé) : **"21 jours (3 × 7 = 21 jours)"** ✅ (correct : 3 × 7 = 21).
   → La fiche contient la mauvaise réponse, à corriger en "21 jours".

2. **Séance 42 — Évaluation**, items 3 et 4 sont un doublon exact : *"Calcule le volume d'un cube de côté 13 cm"* apparaît deux fois (au lieu de 4 valeurs différentes) — les deux corrigés (2197 cm³) sont mathématiquement corrects mais l'exercice ne teste que 3 cas distincts sur 4 items affichés.

3. **Séance 43 — Application**, items 1 et 2 sont un doublon exact : *"5 minutes = ? secondes"* répété deux fois — même remarque, le corrigé (300 s) est juste mais l'exercice manque de variété.

4. **Séance 34 — Application**, deuxième exercice (division de fractions) : items 2 et 3 sont un doublon exact : *"8/11 ÷ 6 = ?"* apparaît deux fois.

5. **Séance 37 — Application**, items 2 et 4 du premier exercice : *"2 minutes = ? secondes"* répété deux fois.

Ces doublons (séances 34, 37, 42, 43) ne sont pas des erreurs de calcul (les corrigés associés sont numériquement exacts), mais un défaut de génération : un item recopié au lieu d'être varié, ce qui réduit la valeur pédagogique de l'exercice concerné.

**Vérification par calcul réel** (échantillon élargi, conformément à `mathematiques.md`) : tous les autres corrigés numériques testés (additions/soustractions de la Séance 1-3, aires de parallélogramme/losange/trapèze/cube Séance 20/26/42, comparaisons de fractions Séance 29, conversions de longueur Séance 5) se sont révélés **exacts**. Aucune autre erreur de calcul détectée au-delà du cas Séance 47 ci-dessus.

## 6. Fiabilité / droits — noms et situations

- Les scénarios contextuels (marché de Mahamasina, cantine scolaire d'Antananarivo, taxi-brousse, commerçant vendant du riz) sont des mises en situation génériques sans personnage nommé — le manuel n'utilise **aucun prénom** de la liste suggérée par le skill (Rova, Nivo, Soa, Koto…), ce qui écarte de fait tout risque de reprise d'un nom fictif d'un manuel source. Rien à signaler ici.
- Pas de section Bibliographie/Webographie ("Loharanom-Baovao") détectée dans les 2573 paragraphes analysés — normal si aucun contenu emprunté à une source externe n'a nécessité de vérification (le contenu mathématique de 8e est factuel/procédural, pas sujet à des faits vérifiables comme en Histoire/Géographie).

## 7. Éléments non trouvés (peut-être normal, à confirmer)

- Pas de section **Annexes** identifiée (Glossaire, Formules et théorèmes, Auto-évaluation…) — pertinent pour les mathématiques selon `manuel-structure.md` section 8. Peut être volontairement absent si non demandé par vous.
- Pas de **Tableau de bord par unité** (section 5 de `manuel-structure.md`) — même remarque.
- Pas de **VOAMBOLANA** — normal et conforme, cette exigence ne s'applique qu'à la 11e/10e (`mathematiques.md`), pas à la 8e.
- Notation mathématique en **texte brut** ("3/4", "8/11 ÷ 6") plutôt qu'en équations natives Word (`Math`/`MathFraction`, OMML) — `mathematiques.md` demande explicitement les équations natives. Ici, aucune balise `m:oMath` n'est présente dans tout le document : toutes les fractions sont du texte simple avec `/`. C'est un écart par rapport à la règle documentée (mais un choix pragmatique fréquent en pratique, car plus simple à relire/modifier).

## 8. Résumé — priorités si vous souhaitez corriger

| # | Écart | Sévérité |
|---|---|---|
| 1 | Réponse fausse en Séance 47 (fiche : "48 heures" au lieu de "21 jours") | 🔴 Élevée — erreur factuelle transmise à l'enseignant |
| 2 | ~40 % des exercices (74/186) ont moins de 4 items | 🟠 Moyenne — écart à la règle, à valider comme compromis volontaire ou à corriger |
| 3 | 4 doublons d'items (séances 34, 37, 42, 43) | 🟡 Faible — réduit la variété pédagogique sans fausser le corrigé |
| 4 | Fractions/notation en texte brut, pas en équations natives Word | 🟡 Faible — écart de forme documenté dans `mathematiques.md`, sans impact sur la justesse du contenu |
| 5 | Couleur du corrigé `#E9967A` au lieu du `#C2185B` par défaut | ⚪ Info — reste dans la famille autorisée, probablement un choix assumé à confirmer |
| 6 | Pas d'annexes ni de tableau de bord par unité | ⚪ Info — à confirmer si voulu pour ce manuel |

Aucun problème détecté sur : structure I/II/III, sectPr/namespaces, sommaire interactif, séparateur décimal, dates calendaires, "Oral" résiduel, "BEPC" résiduel, noms fictifs de source externe.

---

*Souhaitez-vous que je corrige l'erreur de la Séance 47 (priorité 1) et/ou que j'étoffe les exercices à moins de 4 items (priorité 2) ? Je n'appliquerai aucune modification sans votre feu vert, conformément à la règle critique n°1 du skill.*
