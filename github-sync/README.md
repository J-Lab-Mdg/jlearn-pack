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

## Reprendre la copie GitHub → Drive (upload-remaining.tsv)

Le fichier `upload-remaining.tsv` contient la liste des fichiers du dépôt **pas encore copiés**
dans le dossier Drive « Github sync » (format : `id_dossier_drive<TAB>nom<TAB>chemin_dans_le_dépôt`,
état au 2026-11-06 : 836 fichiers restants sur 942). Les uploads via l'API Drive sont soumis à une
limite de débit longue à se réinitialiser : reprendre par petits lots (≤ 15 fichiers par tentative,
attendre quelques minutes entre les lots) quand la limite est atteinte.

Pour régénérer cette liste à partir de zéro (le dossier Drive conserve l'état réel) :

```bash
cd jlearn-pack
# 1) lister les fichiers déjà présents côté Drive (dossier « Github sync » et sous-dossiers)
# 2) lister les fichiers du dépôt : find . -path ./.git -prune -o -path ./github-sync -prune -o -type f -print
# 3) la différence = fichiers à uploader
```

## Relancer une synchronisation

Me demander dans Arena : « resynchronise Github sync », ou :

```bash
# Drive → GitHub (fichiers < 100 Mo uniquement)
rclone copy gdrive: jlearn-pack/github-sync/ --max-size 99M --exclude "*.tmp"

# GitHub → Drive (tout le dépôt, sans limite)
rclone copy jlearn-pack/ gdrive:"Github sync" --exclude ".git/**"
```
