# MalagasyWord Offline — Mode Complet (Usage Personnel)

Application locale autonome permettant d'aspirer proprement et de consulter **100 % hors-ligne** tout le dictionnaire encyclopédique **malagasyword.org / motmalgache.org / tenymalagasy.org** :
- **~109 000 entrées malgaches** avec **explications détaillées en malgache, français et anglais** sur chaque fiche (`/bins/teny2/<mot>`)
- **Exemples littéraires**, **radicaux (`fototeny`)**, **morphologie**, **dérivés**, **synonymes**, **anagrammes** et **noms scientifiques**
- **~34 000 entrées françaises** et **~15 000 entrées anglaises** indexées
- **~8 000 proverbes malgaches (`Ohabolana`)** dédupliqués avec leurs variantes, traductions et interprétations (`/bins/ohabolana/<mot>`)
- **Zéro dépendance externe (`pip install` inutile)** : utilise uniquement la bibliothèque standard de Python 3 (SQLite + recherche plein-texte FTS5 intégrée).

---

## 1. Démarrage en 1 clic sur votre ordinateur

### Sous Windows (aucune installation requise !)
1. Décompressez le dossier `malagasyword-offline`.
2. Double-cliquez sur **`LANCER_WINDOWS.bat`**.
   - Si Python 3 n'est pas installé sur votre PC, le script **télécharge et décompresse tout seul une version portable officielle de Python 3.12 (~11 Mo)** dans le sous-dossier `runtime\python\` (une seule fois, sans droits administrateur ni installation système, puis fonctionne **100 % hors-ligne** pour toujours).
3. Votre navigateur s'ouvre automatiquement sur **`http://127.0.0.1:8765`**.

### Sous Linux / macOS / Android (Termux)
```bash
chmod +x lancer.sh
./lancer.sh
```

---

## 2. Télécharger toute la base hors-ligne (Mode Complet)

1. Dans l'interface ouverte sur votre navigateur, cliquez en haut à droite sur **« Synchroniser (Hors-ligne) »**.
2. Vérifiez que **Mode Complet** est sélectionné puis cliquez sur **« ▶ Démarrer / Reprendre le téléchargement »**.
3. Le téléchargement procède intelligemment en **3 étapes** (vous pouvez déjà chercher des mots dès la fin de l'Étape 1 !) :
   - **Étape 1 (~1 à 2 min, ~120 pages)** : récupère l'index complet des **109 000 mots malgaches + 34 000 mots français + 15 000 mots anglais** ainsi que la liste des proverbes. **Dès cette étape finie, tout le dictionnaire est déjà cherchable hors-ligne !**
   - **Étape 2 (~8 à 15 min)** : télécharge et déduplique les **~8 000 proverbes (`Ohabolana`)** avec leurs traductions et interprétations.
   - **Étape 3 (en tâche de fond, ~60–100 Mo au total)** : télécharge toutes les fiches complètes `/bins/teny2/<mot>`, en commençant automatiquement par les **racines (`fototeny`) et mots principaux**, puis toutes les formes dérivées.

### Coupure Internet ou coupure de courant ? Aucun souci !
Toutes les données sont enregistrées en continu dans **`data/malagasyword.db`** (mode SQLite WAL).
- Vous pouvez cliquer sur **Pause**, fermer la fenêtre ou éteindre l'ordinateur à tout moment.
- Quand vous relancerez la synchronisation demain ou la semaine prochaine, elle **reprendra exactement au mot où elle s'était arrêtée**, sans rien retélécharger.

---

## 3. Option ligne de commande pure (sans navigateur)

Si vous préférez lancer l'aspiration directement dans un terminal :
```bash
# Mode Complet (définitions détaillées + exemples + proverbes)
python3 malagasyword_offline.py --sync --mode complet --speed equilibre

# Mode Express (~10 min : 109 000 mots indexés + 8 000 proverbes complets)
python3 malagasyword_offline.py --sync --mode express --speed equilibre

# Voir les statistiques de votre base locale
python3 malagasyword_offline.py --status
```

---

## 4. Utiliser aussi sur votre téléphone Android / iPhone (sans consommer de data)

- **Via le Wi-Fi local / partage de connexion local** : tant que `malagasyword_offline.py` tourne sur votre PC, ouvrez sur le navigateur de votre téléphone l'adresse locale affichée dans la console (ex. `http://192.168.1.XX:8765`). Aucune donnée mobile Internet n'est consommée !
- **100 % autonome sur Android (sans PC)** : installez l'application gratuite **Termux** (depuis F-Droid), tapez `pkg install python`, copiez le dossier `malagasyword-offline` (avec votre fichier `data/malagasyword.db` déjà rempli sur PC !) puis lancez `python malagasyword_offline.py --no-browser` et ouvrez `http://127.0.0.1:8765` dans Chrome Android (menu `⋮` → *Ajouter à l'écran d'accueil*).

---

## Note importante (Usage personnel)
Les contenus de `malagasyword.org` / `motmalgache.org` / `tenymalagasy.org` sont l'œuvre de **Jean-Marie de La Beaujardière** et de ses collaborateurs (`© 2001–2026`). Cet outil est conçu strictement comme **cache de consultation personnelle hors-ligne** avec limitation de débit respectueuse du serveur. Ne redistribuez pas publiquement la base extraite sans l'accord des auteurs.
