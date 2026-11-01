# Continuité multi-session — relais entre comptes

Contexte : l'utilisateur travaille avec plusieurs comptes Claude free en relais, à cause de la limite de messages. Ce fichier documente comment découper le travail et transmettre l'état d'avancement d'un relais au suivant.

**Rappel technique important** : les fichiers produits par une session ne sont pas accessibles à la session suivante, même avec le même skill — chaque conversation tourne dans un environnement à part qui disparaît à la fin. La transmission entre relais dépend entièrement de l'utilisateur : il doit télécharger les fichiers produits et les ré-uploader au relais suivant, avec la lettre de passation.

---

## Découpage — par bloc de contenu, pas par couche

Chaque relais prend en charge un **bloc de thèmes complets** (fiche + leçon + exercices + corrigés pour chaque séance du bloc), jamais une couche transversale sur tout le livre (ex. "tout le squelette d'abord, puis tout le contenu ensuite") — un relais interrompu en plein milieu d'une couche laisse tout le livre incomplet, alors qu'un relais interrompu en plein milieu d'un bloc ne laisse que ce bloc à reprendre.

Le nombre de thèmes par bloc **n'est pas fixe** — il dépend du nombre réel de thèmes du manuel et de ce qui tient avant la limite de messages. Peut être 2 relais comme 5, selon le manuel. S'appuie sur l'architecture déjà en place (`technical-notes.md`) : un fichier `data-tN.js` par thème/trimestre, ce qui rend le découpage par bloc naturel.

Le dernier relais d'un manuel prend en charge, en plus de ses thèmes : les illustrations restantes, la vérification finale (XML + conversion PDF, voir `technical-notes.md` et `audit-conformite.md`), et l'assemblage du manuel complet.

---

## Lettre de passation

Générée par Claude à la fin de chaque relais (fichier `.md`) — l'utilisateur la télécharge et la ré-upload au relais suivant, **avec les fichiers produits** (la lettre seule ne suffit pas).

```
LETTRE DE PASSATION — [Nom du manuel] — Relais n°[X]

1. ÉTAT D'AVANCEMENT
   - Blocs/thèmes terminés : [liste]
   - Bloc en cours si interrompu en plein milieu : [lequel, à quelle séance/étape précise]
   - Blocs restants : [liste]

2. FICHIERS À RÉ-UPLOADER AVEC CETTE LETTRE
   - [liste : data-tN.js déjà produits, dernier .docx généré, etc.]

3. VERSION DU SKILL
   - jlearn-manuel-scolaire-skill-vXX.zip — toujours la dernière version, à réuploader aussi
   - Inclut vocabulaire-langues.md et fiabilite-malgache.md mis à jour si des termes ont été validés pendant ce relais (voir section 5)

4. DÉCISIONS PROPRES À CE MANUEL (absentes du skill générique)
   - Sous-discipline(s) confirmée(s), regroupement par thème activé (sur quels thèmes ?),
     processus "brouillon malgache" activé, niveau/langue/version/couleur du corrigé si non standard

5. LEXIQUE / CORRECTIONS VALIDÉES PENDANT CE RELAIS
   - [résumé des nouveaux termes/corrections — le détail est dans vocabulaire-langues.md et/ou
     fiabilite-malgache.md mis à jour, livrés en plus de cette lettre]

6. À FAIRE EN PRIORITÉ PAR LE PROCHAIN RELAIS
   - [tâche précise]

7. QUESTIONS EN SUSPENS POUR L'UTILISATEUR
   - [...]
```

**Gestion du lexique entre relais (point 5)** : à la fin de chaque relais où un nouveau terme malgache a été validé, **livrer une version mise à jour de `vocabulaire-langues.md` et/ou `fiabilite-malgache.md`** en plus de la lettre de passation — pas seulement une note dans la lettre. Plus fiable contre l'oubli qu'une simple mention à reporter manuellement. L'utilisateur réuploade ces fichiers mis à jour avec le reste du skill au relais suivant.

---

## À l'ouverture d'un nouveau relais

Si l'utilisateur fournit une lettre de passation en début de session : la lire en entier avant de commencer, appliquer immédiatement les décisions listées en section 4 sans les redemander, intégrer le lexique de la section 5 comme déjà validé (pas à revérifier), et reprendre exactement où le relais précédent s'est arrêté (section 1) plutôt que de redemander le contexte à l'utilisateur.
