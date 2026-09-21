# jlearn-pack

Pack officiel d'illustrations pour **J-Learn**, manuels scolaires numériques pour Madagascar.

## Adresse stable

Les fichiers de ce dépôt sont distribués automatiquement par le CDN gratuit jsDelivr :

```
https://cdn.jsdelivr.net/gh/J-Lab-Mdg/jlearn-pack@main/
```

Exemples :
- Manifeste : https://cdn.jsdelivr.net/gh/J-Lab-Mdg/jlearn-pack@main/pack.json
- Une image : https://cdn.jsdelivr.net/gh/J-Lab-Mdg/jlearn-pack@main/peau_coupe.png

## Ajouter une nouvelle illustration

1. Déposer le fichier image (`.png`, `.jpg`, `.webp` ou `.svg`) à la racine du dépôt. Le nom du fichier (sans l'extension) devient l'identifiant utilisé dans les leçons.
2. Ouvrir `pack.json` et ajouter une nouvelle ligne dans le tableau `images` :
   ```json
   { "id": "nouvelle_image", "url": "/nouvelle_image.png", "type": "image/png" }
   ```
3. Valider (commit) les changements. jsDelivr met l'image à disposition dans la minute.

### Règle : pas de texte incrusté dans l'image

Une illustration ne doit porter **aucun mot incrusté** : ni titre, ni légende, ni
étiquette. Les noms se placent dans le marqueur `[[IMG:...]]` décrit plus bas, où
ils restent relisibles, corrigeables et traduisibles.

Cette règle vient d'un constat : plusieurs images du pack sont inutilisables à
cause d'un texte incrusté fautif — un mot inexistant (« Sounitet »), des légendes
en anglais dans un pack francophone, une étiquette de flacon illisible, « Pupile »
pour « pupille ». Un texte généré dans une image ne peut plus être corrigé sans
tout régénérer.

Le texte n'est pas le seul risque : une image peut aussi véhiculer une **erreur de
fond**. `svt9e_langue.png` reproduit la « carte des saveurs » de la langue, un
mythe scientifique réfuté. Une illustration fausse s'imprime durablement, et
l'élève devra la désapprendre.

Le détail est dans [`AUDIT-images-pack.md`](AUDIT-images-pack.md).

Avantage annexe : une image muette peut servir d'**exercice à légender**, l'élève
plaçant lui-même les noms.

## Utilisation dans une leçon

Insérer dans le contenu HTML d'une leçon le marqueur :
```
[[IMG:nouvelle_image|Légende courte|Commentaire optionnel]]
```

L'app J-Learn téléchargera automatiquement l'image depuis ce dépôt et la stockera dans la mémoire locale du téléphone pour usage hors-ligne.

## Licence

Contenu placé sous Creative Commons Zero (CC0) — réutilisable librement pour l'éducation.
