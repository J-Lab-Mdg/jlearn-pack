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

## Utilisation dans une leçon

Insérer dans le contenu HTML d'une leçon le marqueur :
```
[[IMG:nouvelle_image|Légende courte|Commentaire optionnel]]
```

L'app J-Learn téléchargera automatiquement l'image depuis ce dépôt et la stockera dans la mémoire locale du téléphone pour usage hors-ligne.

## Licence

Contenu placé sous Creative Commons Zero (CC0) — réutilisable librement pour l'éducation.
