# Débloquer le ZTE P615F01 nous-mêmes — protocole BROM (Unisoc)

> **Date** : 29 octobre 2026
> **Appareil** : ZTE **P615F01** · carte `ums9230_6h10` · puce **Unisoc** · **eMMC** · **A/B** · Android 15
> **Objectif** : effacer `userdata` pour que le téléphone démarre sur l'assistant de configuration
> **Contexte** : aucun compte Google → **aucune protection FRP** → pas de risque de téléphone verrouillé après coup
> **Difficulté** : moyenne à élevée · **durée** : 1 à 3 h · **matériel** : PC + câble USB de données

---

## 0. Ce qu'on va faire, en une image

```
BROM (gravé dans la puce, indestructible)
   │  ← on y entre avec Volume bas + câble USB
   ├─ faille CVE-2022-38694 à l'adresse 0x65015f08
   │     └─ permet de charger du code non signé
   ├─ FDL1 puis FDL2  (petits programmes envoyés par le PC)
   │     └─ FDL2 sait lire / écrire / effacer n'importe quelle partition
   └─ on efface userdata + metadata  →  reset  →  assistant de configuration
```

**On ne déverrouille PAS le bootloader.** On ne touche ni au `splloader`, ni à `uboot`, ni au système. On
efface seulement deux partitions de données. C'est beaucoup moins risqué que les guides de root qu'on trouve en
ligne.

---

## 1. Le paquet exact à télécharger

Il existe un paquet officiel (au sens : publié par l'auteur de la faille) **pour ta configuration précise** :

```
https://github.com/TomKing062/CVE-2022-38694_unlock_bootloader/releases/download/1.72/ums9230_universal_unlock_EMMC.zip
```

Décomposons le nom :

| Élément | Signification | Ton téléphone |
|---|---|---|
| `ums9230` | famille de puce | ✅ `ums9230_6h10` |
| `EMMC` | type de mémoire | ✅ le log d'atelier dit « Flash Type: EMMC » |
| `universal` | multi-modèles | ✅ |

⚠️ **Ne pas prendre** `ums9230_universal_unlock_UFS.dangerous.zip` : le fichier porte littéralement le mot
`dangerous`, il est fait pour des téléphones en UFS.

Ce paquet contient normalement : `spd_dump`, `fdl1-dl.bin`, `fdl2-dl.bin`, `fdl2-cboot.bin`,
`misc-wipe.bin`, `custom_exec_no_verify_65015f08.bin`, et parfois des `.bat` pour Windows.

**Vérifie son contenu toi-même avant de commencer** :

```bash
unzip -l ums9230_universal_unlock_EMMC.zip
```

Tu dois y voir `custom_exec_no_verify_65015f08.bin` — c'est le payload qui exploite la faille à l'adresse
`0x65015f08`. S'il n'y est pas, arrête tout ici.

---

## 2. Matériel et précautions

### Ce qu'il faut

- [ ] Un **PC avec Linux** (Ubuntu en clé USB live suffit : on démarre dessus sans rien installer sur le disque)
      — une version Windows existe aussi dans certains paquets, mais **Linux est le chemin le mieux documenté**
- [ ] Un **câble USB de données** (pas un câble de charge seule — c'est la panne n°1)
- [ ] Un **port USB 2.0** (les ports bleus USB 3 provoquent des échecs de connexion sur ces puces)
- [ ] Le téléphone chargé à **plus de 50 %**
- [ ] **La carte SD retirée** (et ses photos copiées sur le PC avant)

### Ce qu'on perd

- ❌ **Toutes les données internes** : photos, contacts, applications, messages. Définitif.
- ❌ Rien d'autre : pas de compte Google, donc pas de verrouillage, pas d'IMEI touché.

### Ce qu'il ne faut JAMAIS faire

| Interdit | Pourquoi |
|---|---|
| `e persist` · `e prodnv` · `e nvitem` · `e l_fixnv` | Contiennent l'**IMEI** et les calibrations d'usine. Effacés = téléphone sans réseau, définitivement |
| `e splloader` · `e uboot` | Casserait la chaîne de démarrage |
| `repartition` · `erase_all` | Détruit la table de partitions |
| Écrire un `.pac` d'un autre modèle | Brick quasi certain |
| Débrancher pendant une écriture | Brick quasi certain |

> Règle d'or : **`userdata` et `metadata`. Rien d'autre.** Ce sont les deux seules lignes d'effacement de ce
> protocole, et elles suffisent.

---

## 3. Étape 0 — Vérification gratuite avant tout : le fastboot

Avant de sortir l'artillerie, 2 minutes pour tester quelque chose de gratuit et sans risque.

1. Téléphone **éteint**, maintenir **Volume bas + Power** jusqu'à l'affichage.
2. Si un écran **FASTBOOT** apparaît, brancher au PC et taper :
   ```bash
   fastboot devices
   fastboot erase userdata
   ```
3. Si ça répond `FAILED (remote: not allowed)` → bootloader verrouillé, c'est normal, passe à l'étape 1.
   Si ça répond `OKAY` → **c'est fini**, redémarre et le téléphone est neuf.

Sur la plupart des ZTE récents ça échoue, mais ça ne coûte rien d'essayer.

---

## 4. Étape 1 — Préparer l'outil

Sur le PC Linux, dans le dossier où tu as décompressé le paquet :

```bash
sudo apt update
sudo apt install build-essential libusb-1.0-0-dev libusb-1.0-0 unzip
unzip ums9230_universal_unlock_EMMC.zip -d zte-unlock
cd zte-unlock
```

S'il y a des sources C (`spd_dump.c`, `common.c`) :

```bash
make
```

Deux vérifications importantes avant de brancher le téléphone :

```bash
./spd_dump --help                 # doit s'afficher : le binaire fonctionne
ls *.bin                          # fdl1-dl.bin, fdl2-dl.bin, custom_exec_no_verify_65015f08.bin…
```

> 📁 **Reste TOUJOURS dans ce dossier.** `spd_dump` va chercher ses fichiers de payload dans le dossier courant.
> Travailler ailleurs échoue silencieusement.

---

## 5. Étape 2 — Entrer dans le BROM

Le BROM est le code gravé dans la puce. Il ne peut **ni être effacé, ni être briqué** : c'est ton bouton de
secours permanent.

1. Téléphone **complètement éteint** (pas en veille).
2. Maintenir **Volume bas** appuyé.
3. Brancher le câble USB au PC **en gardant le bouton enfoncé**.
4. Vérifier depuis un autre terminal :

```bash
lsusb | grep 1782:4d00
```

Tu dois voir quelque chose comme `Bus 001 Device 005: ID 1782:4d00 Spreadtrum Communications Inc. ...`.

**Ça ne montre rien ?** Dans l'ordre :

- réessayer avec **Volume haut** (la touche change selon l'état de l'appareil) ;
- essayer **Volume haut + Volume bas** ensemble ;
- changer de **port USB** (prendre un port 2.0, pas bleu) ;
- changer de **câble** ;
- sur Windows : gestionnaire de périphériques → installer le pilote **SPD USB Driver**, l'appareil apparaît en
  `SPRD U2S Diag` ou périphérique inconnu.

> Si après tout ça, `1782:4d00` n'apparaît **jamais**, c'est que le BROM de ta puce a été corrigé. Il reste
> alors le test point (démonter le téléphone) ou un atelier avec une box professionnelle.

---

## 6. Étape 3 — Test à blanc : LECTURE SEULE

**Ne saute pas cette étape.** Elle prouve que l'outil parle bien au téléphone, sans rien écrire.

Le téléphone en BROM, dans le dossier du paquet :

```bash
./spd_dump --wait 300 exec_addr 0x65015f08 \
  fdl fdl1-dl.bin 0x65000800 \
  fdl fdl2-dl.bin 0x9efffe00 \
  exec read_part misc 0 64 misc_test.bin reset
```

Ce que ça fait : ouvre le BROM par la faille → charge FDL1 et FDL2 → lit 64 octets de la partition `misc` →
redémarre.

**Si ça marche**, tu obtiens un fichier `misc_test.bin` de 64 octets et le téléphone redémarre.

| Message | Signification |
|---|---|
| `find port failed` | Ferme, rebranche, relance. Ne continue pas. |
| `CHECK_BAUD FAIL` puis reconnexion | Normal sur les versions corrigées |
| `BSL_REP_VER: "SPRD3"` | ✅ Tu parles à la puce |
| Fichier `misc_test.bin` créé | ✅ Accès confirmé, tu peux continuer |

> **Ce test n'écrit rien.** C'est ta garantie de ne pas avancer à l'aveugle.

---

## 7. Étape 4 — Sauvegarder avant d'effacer

Même si `userdata` est chiffré et donc illisible, on sauvegarde les partitions sensibles par prudence. Ça permet
de restaurer en cas de bêtise.

```bash
./spd_dump --wait 300 exec_addr 0x65015f08 \
  fdl fdl1-dl.bin 0x65000800 \
  fdl fdl2-dl.bin 0x9efffe00 \
  exec r persist persist_backup.bin r misc misc_backup.bin reset
```

Deux fichiers de quelques Mo se créent. **Copie-les sur ton PC et sur le dépôt GitHub** : c'est ton filet de
sécurité.

> `persist` contient des données de calibration. On le **lit** (autorisé), on ne l'**efface** jamais.

---

## 8. Étape 5 — L'effacement

Téléphone en BROM, puis :

```bash
./spd_dump --wait 300 exec_addr 0x65015f08 \
  fdl fdl1-dl.bin 0x65000800 \
  fdl fdl2-dl.bin 0x9efffe00 \
  exec e userdata e metadata reset
```

C'est tout. Deux effacements, puis redémarrage.

**Pourquoi ces deux partitions :**

- `userdata` : contient `/data`, donc le mot de passe, les applications, les photos, les messages ;
- `metadata` : contient les clés de chiffrement. Si on efface `userdata` sans effacer `metadata`, Android ne
  peut plus déchiffrer, part en « rescue party » et redémarre en boucle.

**Ne jamais effacer l'une sans l'autre.**

### Variante « ceinture et bretelles »

Si après l'étape 5 le téléphone réclame encore un mot de passe, écrire l'ordre d'effacement dans `misc`, ce qui
demande au recovery d'usine de faire le travail lui-même au prochain démarrage :

```bash
./spd_dump --wait 300 exec_addr 0x65015f08 \
  fdl fdl1-dl.bin 0x65000800 \
  fdl fdl2-dl.bin 0x9efffe00 \
  exec w misc misc-wipe.bin reset
```

`misc-wipe.bin` est fourni dans le paquet. Au redémarrage, le téléphone exécute l'effacement tout seul. Ça peut
prendre plusieurs minutes, écran noir — **ne rien toucher**.

---

## 9. Étape 6 — Vérifier

Au redémarrage, dans l'ordre attendu :

1. Logo ZTE, puis animation de démarrage (2 à 5 minutes après un effacement) ;
2. **Assistant de configuration** : choix de la langue ;
3. **Aucune** demande de compte Google ;
4. Configuration du Wi-Fi → et là tu es sur un téléphone neuf.

Tests rapides à faire ensuite : appareil photo, son, Wi-Fi, appel téléphonique (vérifie que l'IMEI est intact),
et Play Store si tu veux.

### Si le téléphone affiche « Can't load Android system / Try again / Factory data reset »

C'est **une bonne nouvelle** : c'est l'écran de secours d'Android. Choisir **Factory data reset** → il termine le
travail tout seul. C'est même le chemin le plus simple si tu y arrives.

### Si le téléphone reclame encore le mot de passe

Faire la variante « ceinture et bretelles » de l'étape 5.

---

## 10. Panne et récupération

| Symptôme | Cause probable | Solution |
|---|---|---|
| `1782:4d00` n'apparaît pas | Mauvaise touche, câble de charge seule, port USB 3 | Changer de touche / câble / port |
| `find port failed` | Connexion perdue pendant le chargement | Relancer la commande, ne pas continuer |
| `CHECK_BAUD FAIL` en boucle | Binaire sans le correctif de reconnexion | Prendre les binaires précompilés du paquet |
| Écran noir au démarrage | Effacement en cours (variante BCB) | Attendre 10 minutes |
| Boucle sur le logo | `userdata` effacé mais pas `metadata` | Refaire l'étape 5 avec les **deux** |
| Téléphone mort, plus rien | — | **Le BROM répond toujours** : refaire l'étape 2 et restaurer |

**Le BROM ne meurt jamais.** Tant que `1782:4d00` apparaît, tu peux toujours recommencer. C'est pour ça que cette
méthode est plus sûre qu'elle n'en a l'air.

---

## 11. Honnêteté sur les risques

| Risque | Probabilité | Conséquence |
|---|---|---|
| Effacer une mauvaise partition | Faible si tu suis le protocole | IMEI perdu ou brick |
| `.bin` inadapté à ta variante | Faible (paquet dédié EMMC) | Brique, récupérable par BROM |
| BROM corrigé sur ta puce | Faible (des rapports d'atelier existent sur ce modèle) | Échec, rien de cassé |
| Perte des données | **100 %** | C'est le but |

**Bilan** : on efface un téléphone quasi vide, sans compte Google, avec un paquet fait pour sa puce exacte. Le
rapport bénéfice/risque est favorable. Mais ce n'est pas une opération « sans y penser » : lis chaque commande
avant de l'exécuter.

---

## 12. Le plan B qui reste sur place

Il faut le dire clairement : **« ne pas passer par le fabricant » ne veut pas dire « le faire seul »**.

Un réparateur de quartier à Antananarivo, équipé d'une box (Pandora, EFT Pro, UnlockTool, Chimera), fait cette
opération en 15 minutes, sur place, pour le prix d'un repas. Ce n'est ni ZTE, ni un envoi à l'étranger, ni une
garantie constructeur : c'est le technicien du coin.

Si le BROM ne répond pas, ou si une commande fait peur, c'est la voie raisonnable — et ça reste du « local ».

---

## Sources

- Paquet **`ums9230_universal_unlock_EMMC.zip`** (Unisoc UMS9230, eMMC) :
  <https://github.com/TomKing062/CVE-2022-38694_unlock_bootloader/releases/tag/1.72>
- Guide de référence sur **la même carte mère** (`UMS9230_6h10`), avec les adresses exactes `0x65015f08`,
  `0x65000800`, `0x9efffe00` :
  <https://github.com/KiMiGuel/Root-Guide-Cubot-KingKong-ES-3---Unisoc-T615-ums9230->
- Outil `spd_dump` (source) : <https://github.com/TomKing062/spreadtrum_flash>
- Description de la faille CVE-2022-38694 par NCC Group :
  <https://research.nccgroup.com/2022/09/02/theres-another-hole-in-your-soc-unisoc-rom-vulnerabilities/>
- Rapport d'atelier confirmant le BROM sur ce ZTE (`P615F01`, `ums9230_6h10`, EMMC, A/B) :
  <https://www.gsmzone.com/experience-reports/frp-reset-zte-blade-a56-pro-z2474-pandora-tool>

### Fiabilité

| Affirmation | Niveau |
|---|---|
| `0x65015f08` = adresse de la faille pour UMS9230 | certain (deux sources indépendantes) |
| `fdl1` à `0x65000800`, `fdl2` à `0x9efffe00` | certain sur `UMS9230_6h10` |
| Un paquet EMMC existe pour cette puce | certain (fichier publié, ~5 900 téléchargements) |
| Effacer `userdata` + `metadata` suffit | très probable (c'est la procédure standard sur FBE) |
| Le BROM de ce modèle n'est pas corrigé | probable (rapports d'atelier sur ce modèle en 2026) |
| Le `misc-wipe.bin` est dans le paquet | à vérifier à l'ouverture du zip |
