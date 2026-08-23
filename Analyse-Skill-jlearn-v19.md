# Analyse exhaustive — skill `jlearn-manuel-scolaire` v19

12 fichiers, 2147 lignes au total.

## 1. Vue d'ensemble

| Fichier | Lignes | Rôle |
|---|---|---|
| SKILL.md | 494 | Fichier maître : règles critiques, structure des séances, design, traitements A/B/C |
| technical-notes.md | 367 | Implémentation XML (Traitement A/B) et Node.js/docx (Traitement C) |
| vocabulaire-langues.md | 221 | Gabarits FR/MG/EN, terminologie |
| design-fiche.md | 298 | Spécifications visuelles détaillées de la fiche |
| fiabilite-malgache.md | 148 | Sources, grammaire, pièges, lexique évolutif malgache |
| mathematiques.md | 97 | Spécificités maths (VOAMBOLANA, équations natives, distracteurs) |
| manuel-structure.md | 206 | Structure complète du manuel (couverture → annexes) |
| illustrations.md | 70 | 3(+1) approches images, redimensionnement, nommage |
| audit-conformite.md | 69 | Procédure de mise à jour d'un manuel existant |
| CHANGELOG.md | 68 | Historique v8 → v19 |
| discipline-malagasy.md | 50 | Spécificités matière Malagasy |
| continuite-multi-session.md | 59 | Relais entre comptes (limite de messages) |

Le skill est très bien structuré : SKILL.md fait office de routeur, chaque fichier annexe a un périmètre net, et le CHANGELOG explique le *pourquoi* de chaque évolution — utile pour l'audit d'un manuel ancien.

## 2. ⚠️ Contradiction interne détectée entre deux fichiers

**C'est le point le plus important de cette analyse.**

`SKILL.md` (ligne 100 et section "Structure des séances") est catégorique :
> "Structure unique — il n'existe qu'une seule structure valide, plus de choix à faire ni de variante '8 étapes à plat'."

Et plus loin (design-fiche.md, section 7) :
> "Fichiers source existants (Traitement A/B) : si le fichier utilise encore l'ancienne numérotation '1 à 8 à plat', le convertir vers cette structure à 3 grandes étapes plutôt que la conserver telle quelle."

Or **`vocabulaire-langues.md` est resté à l'ancienne structure "8 étapes à plat"** dans toute sa section "Gabarits validés par étape" (Malgache/Français/Anglais, lignes ~63-221) : les tableaux numérotent encore 1. Révision, 2. Mise en situation… 8. Évaluation, sans les 3 grandes étapes I/II/III ni la fusion "II. NOUVELLE LEÇON" en ligne de section. Le fichier lui-même dit explicitement "Les 8 étapes (structure unique)" à la ligne 63.

**Conséquence pratique** : SKILL.md renvoie explicitement vers ces gabarits comme référence à suivre "impérativement" pour un manuel en malgache ou en anglais intégral (SKILL.md, sections "Version malgache" et "Version anglaise" : *"Ce gabarit prime sur les règles génériques de design-fiche.md pour ce cas précis"*). Si ces gabarits ne sont jamais mis à jour vers la structure I/II/III, un manuel MG ou EN produit avec le skill actuel risque de repartir sur l'ancienne structure à 8 étapes plates — contredisant la règle critique la plus insistante du fichier maître.

À en juger par le CHANGELOG, la bascule vers "3 grandes étapes / 6 sous-étapes sans durée individuelle" semble une évolution relativement ancienne du skill (probablement pré-v15, "Avant v8" ou entre les deux), mais `vocabulaire-langues.md` n'a jamais suivi cette refonte structurelle — seul son contenu terminologique (colonnes, 3 langues) a été mis à jour en v8.

**Recommandation** : avant le prochain manuel MG/EN complet, réécrire les 3 tableaux "Gabarits validés par étape" de `vocabulaire-langues.md` pour refléter I. Révision / II. NOUVELLE LEÇON (1-6 sans durée) / III. Évaluation, comme le reste du skill.

## 3. Règles critiques (SKILL.md) — les 16 invariants

Notables au-delà de l'évident (EPS/préscolaire intouchables, logo, sectPr unique, namespaces) :
- **Règle 15 (droit d'auteur)** : distinction fine entre faits réels (à garder) et exemples pédagogiques fictifs du livre source (à remplacer + reformuler si le récit est trop proche) — avec un piège spécifique sur les formes grammaticales malgaches agglutinées (`-dRakoto`) qu'un simple remplacement par limite de mot peut manquer.
- **Règle 16 (sur-précision)** : ne jamais ajouter de méta-commentaire sur ce que l'élève ne fait pas ou fait implicitement — appliquée aux 3 langues, avec instruction de vérifier les 3 langues dès qu'une erreur est corrigée dans une seule.
- **Règle 14 (relecture externe)** : ne jamais appliquer une correction externe en bloc — vérifier contre le texte source, avec l'exemple concret de la confusion "affirmation du cours" vs "item V/F volontairement faux".

## 4. Structure pédagogique — logique interne solide

La structure I/II/III avec proportionnalité de durée (pas de gabarit figé recopié d'un manuel à l'autre) est bien pensée : évite l'erreur classique de coller un ratio 3/22/5 min à une séance de 2h. La règle sur les distracteurs (piège plausible sur le sujet même de la séance, jamais une phrase vraie hors-sujet ou une négation artificielle) revient de façon cohérente dans SKILL.md, design-fiche.md, technical-notes.md, mathematiques.md et discipline-malagasy.md — chaque déclinaison matière l'adapte correctement (erreur de calcul en maths, faute grammaticale en Malagasy).

## 5. Fiabilité linguistique — dispositif robuste

`fiabilite-malgache.md` est le fichier le plus mûr techniquement : hiérarchie de sources à 6 niveaux, distinction méthodique des types d'erreur (tsipelina/grammaire/vocabulaire/registre/traduction), lexique qui s'enrichit manuel après manuel avec règle "ne jamais changer une traduction validée sans justification". Le principe de vérification web systématique (pas seulement "en cas de doute perçu") est une garde-fou pertinente contre l'angle mort du rédacteur non-natif.

Point d'attention mineur : la règle "Ne jamais confondre isika/izahay" et "ne jamais traduire mot à mot" sont de bons réflexes, mais restent qualitatifs — rien dans le skill ne permet de vérifier automatiquement (contrairement au XML ou aux maths) qu'une phrase malgache respecte effectivement la bonne voix verbale. C'est une limite structurelle assumée (le rédacteur n'est pas natif), pas un défaut du skill lui-même.

## 6. Mathématiques — seul module avec vérification automatisable

`mathematiques.md` est le seul fichier matière à imposer une **vérification numérique par calcul réel** (bash tool) des corrigés, en plus des vérifications XML habituelles qui ne détectent jamais une erreur de calcul. Bonne granularité sur VOAMBOLANA (11e/10e uniquement, sourcé strictement des documents uploadés, jamais improvisé/recherché).

## 7. Illustrations — évolution v19 pertinente

Le changement principal de v19 (SVG en priorité, génération externe réservée au non-géométrique) répond à un vrai problème observé (Gemini gère mal les chiffres/données précises dans une figure). L'extension de l'emplacement (pas seulement en haut de la page LEÇON) et la convention de nommage `_a`/`_b` pour plusieurs images par séance comblent un manque logique de la version précédente.

## 8. Points de gouvernance (multi-session, audit)

`continuite-multi-session.md` et `audit-conformite.md` sont deux fichiers "process" bien conçus pour un usage réel avec limite de messages : découpage par bloc thématique complet (jamais par couche), lettre de passation structurée, et surtout l'audit en 4 temps qui impose de lister tous les écarts *avant* de corriger (cohérent avec la règle critique 14).

## 9. Autres observations mineures

- Le remplacement "BEPC" → "Sujet d'examen [niveau]" est appliqué de façon cohérente dans SKILL.md et manuel-structure.md.
- La check-list technique (sectPr=1, ns0=0, 6 colonnes, Times New Roman, doubles espaces) est dupliquée à l'identique dans SKILL.md et technical-notes.md — redondance volontaire et sans risque (les deux versions sont synchronisées), mais à surveiller si l'une est modifiée sans l'autre lors d'une future version.
- `discipline-malagasy.md` référence "la structure générale (8 étapes, 3 grandes parties I/II/III)" (ligne 3) — même relent de l'ancienne numérotation que dans vocabulaire-langues.md, bien que la logique décrite ensuite (leçon de règle, minimums par notion) reste cohérente avec le reste. Formulation à nettoyer en même temps que le point 2 ci-dessus.

---

**Priorité d'action suggérée** : mettre à jour `vocabulaire-langues.md` (et la mention résiduelle dans `discipline-malagasy.md`) vers la structure I/II/III avant le prochain manuel malgache ou anglais complet — c'est le seul écart qui pourrait produire un manuel réellement non conforme à la règle la plus insistante du skill.
