# github-sync — Synchronisation Google Drive ↔ GitHub

Ce dossier fait le lien entre le **Google Drive** de J-Learn et ce **dépôt GitHub** (`J-Lab-Mdg/jlearn-pack`).

## Les deux sens

| Sens | Destination | Statut |
|------|-------------|--------|
| **GitHub → Drive** (prioritaire) | Dossier Drive **« Github sync »** (racine du Drive) | En cours — copie lancée le 2026-11-06 (voir manifeste ci-dessous) |
| **Drive → GitHub** | Ce dossier `github-sync/` | Échantillon copié (voir `J-Learn/`) + manifeste |

## Contraintes importantes

- **GitHub refuse les fichiers > 100 Mo** et déconseille les dépôts de plusieurs Go :
  les fichiers Drive de plus de 100 Mo ne sont PAS copiés dans ce dépôt (ils restent sur Drive).
- Les **vidéos Google natives** (`application/vnd.google-apps.video`) ne sont pas téléchargeables : ignorées.
- Côté Drive, la copie GitHub → Drive n'a **aucune limite de taille**.

## Manifeste

- `manifest-drive.csv` : liste des fichiers Drive copiés/à copier (chemin, taille, type, lien Drive).
- Pour régénérer un manifeste complet de tout le Drive : utiliser `scripts/drive_manifest.py`
  (nécessite `rclone` configuré avec le remote Google Drive : `rclone lsf --csv gdrive:`).

## Relancer une synchronisation

Me demander dans Arena : « resynchronise Github sync », ou :

```bash
# Drive → GitHub (fichiers < 100 Mo uniquement)
rclone copy gdrive: jlearn-pack/github-sync/ --max-size 99M --exclude "*.tmp"

# GitHub → Drive (tout le dépôt, sans limite)
rclone copy jlearn-pack/ gdrive:"Github sync" --exclude ".git/**"
```
