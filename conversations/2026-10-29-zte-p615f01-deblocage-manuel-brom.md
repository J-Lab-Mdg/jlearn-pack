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

## 13. Procédure Windows 10 (config réelle : câble USB-C)

Le matériel utilisé est un **PC Windows 10** avec le **câble USB-C d'origine** du téléphone. La méthode est la
même qu'en Linux, mais Windows ajoute trois obstacles qu'il faut régler **avant** de brancher quoi que ce soit.

### 13.1 Les trois pièges Windows (dans l'ordre d'apparition)

> **Lettres des étapes** (celles employées dans la conversation) : **A** câble → **B** touche 7 → **C** exclusions
> Defender → **D** extraction + `--help` → **E** pilote SPD → **F** test à blanc → **G** effacement → **H** vérification.


| # | Piège | Symptôme | Solution |
|---|---|---|---|
| 1 | **Pilote non signé** | Le téléphone apparaît comme « Périphérique inconnu », aucun `SPRD U2S Diag` | Désactiver la vérification de signature, puis installer le pilote SPD |
| 2 | **Antivirus** | `spd_dump.exe` disparaît du dossier, ou « menace supprimée » | Ajouter le dossier aux exclusions de Windows Defender **avant** d'extraire |
| 3 | **Câble USB-C de charge seule** | Aucun périphérique détecté, quel que soit le pilote | Tester le câble, en changer si besoin |

Et un quatrième, plus discret : **il faut la bibliothèque `MSVCP140.dll`** (Visual C++ Redistributable). Sans elle,
`spd_dump.exe` se ferme instantanément avec le code `0xC0000135`.

### 13.2 Étape A — Vérifier le câble USB-C AVANT tout le reste

Sur beaucoup de téléphones, le câble fourni ne transporte que l'électricité, pas les données. Test simple :

1. Brancher un **autre** appareil USB-C au PC avec ce câble (téléphone, clé USB-C, disque externe).
2. Si rien n'apparaît dans l'explorateur Windows → **le câble est inutilisable** pour cette opération.
3. Autre test : brancher le ZTE allumé au PC. Windows doit faire un bruit de connexion et afficher l'appareil
   dans le Gestionnaire de périphériques.

> Si le câble ne transporte pas de données, aucun pilote, aucun outil, aucune commande ne fonctionnera.
> C'est la cause n°1 des échecs silencieux.

### 13.3 Étape B — Autoriser les pilotes non signés (obligatoire)

> **État au 29/10** : refait après le redémarrage du matin, PC revenu sur le bureau sans erreur — autorisation
> active pour la session en cours. C'est cette session qui doit servir à installer le pilote (§13.6) puis à faire
> le test à blanc (§13.7) : **ne pas redémarrer entre-temps**.

Le pilote Unisoc (`SPRD U2S Diag`) n'est pas signé par Microsoft. Windows 10 le refuse par défaut.

1. Enregistrer son travail.
2. Menu Démarrer → clic sur **Redémarrer** en maintenant **Maj (Shift)** enfoncé.
3. **Dépannage** → **Options avancées** → **Paramètres de démarrage** → **Redémarrer**.
4. Au menu, taper **7** (ou F7) : *Désactiver la vérification obligatoire des signatures de pilote*.

Windows redémarre. **L'autorisation ne dure que jusqu'au prochain redémarrage** : installer le pilote maintenant.

> Variante persistante : `bcdedit /set {current} testsigning on` dans une invite **administrateur**, puis
> redémarrer (un filigrane « Mode test » apparaît sur le bureau). À annuler après :
> `bcdedit /set {current} testsigning off`.

### 13.3 bis — Ce que l'étape B (touche 7) fait, et ne fait PAS

Question posée : *« est-ce que ça met en danger le PC ? est-ce que je pourrai encore lire nos échanges ? »*

**Réponse : oui, tout reste accessible. L'étape B ne touche ni Internet, ni le navigateur, ni les fichiers.**

| L'étape B ne modifie PAS | L'étape B modifie |
|---|---|
| La connexion Internet, le Wi-Fi | Uniquement la règle « Windows n'accepte que les pilotes signés par Microsoft » |
| Le navigateur, la session Arena, l'historique | Et seulement **jusqu'au prochain redémarrage** |
| Les fichiers, les dossiers, les données | |
| Le compte Microsoft, les mots de passe | |
| L'antivirus, le pare-feu | |

Autrement dit : on autorise Windows à charger un pilote qui n'a pas le certificat Microsoft, pendant une seule
session. Un redémarrage normal annule tout automatiquement.

**Ce qui reste lisible après l'opération :**

- La conversation dans Arena (elle est stockée côté service, pas sur ce PC) ;
- Tout le dossier `conversations/` du dépôt GitHub, qui contient déjà cette procédure ;
- Rien de tout cela n'est affecté par un réglage de pilote.

⚠️ **Le revers** : si une étape demande un redémarrage (par exemple après l'installation du Redistributable
Visual C++), **l'autorisation F7 est perdue**. Il faut alors refaire l'étape B avant d'installer le pilote SPD.

> ⛔ Ne pas utiliser la variante `bcdedit /set {current} testsigning on` pour cette opération : elle est
> permanente et affiche un filigrane « Mode test ». La méthode **F7** est temporaire, plus simple, et suffit.

### 13.4 Étape C — Ajouter le dossier aux exclusions antivirus

Avant d'extraire le zip :

1. **Sécurité Windows** → **Protection contre les virus et menaces** → **Gérer les paramètres**.
2. Descendre à **Exclusions** → **Ajouter ou supprimer des exclusions** → **Dossier**.
3. Choisir `C:\zte-unlock` (ou le dossier retenu).

Sans ça, Defender classe `spd_dump.exe` comme *HackTool* et le supprime. Ce n'est pas une infection : c'est un
outil d'atelier, mais l'antivirus ne fait pas la différence.

### 13.5 Étape D — Extraire et inspecter le paquet

1. Clic droit sur le zip → **Extraire tout** → dossier `C:\zte-unlock`.
2. Ouvrir ce dossier, cliquer dans la barre d'adresse, taper `cmd`, valider. Une invite s'ouvre **déjà dans le
   bon dossier**.
3. Taper :

```bat
dir
```

**Ce qu'on doit y trouver :**

| Fichier | Rôle | Obligatoire |
|---|---|---|
| `spd_dump.exe` | L'outil lui-même | ✅ |
| `Channel9.dll` | Bibliothèque de communication | ✅ (si fournie) |
| `Channel.ini` | Configuration | ✅ (si fournie) |
| `fdl1-dl.bin` | Premier étage de chargement | ✅ |
| `fdl2-dl.bin` | Second étage, celui qui lit/écrit | ✅ |
| `custom_exec_no_verify_65015f08.bin` | Payload de la faille | ✅ |
| `fdl2-cboot.bin`, `misc-wipe.bin` | Déblocage bootloader, ordre d'effacement | ⬜ utile |
| `chsize.exe`, `gen_spl-unlock.exe` | Outils annexes de l'auteur | ❌ **ne pas exécuter** |
| `unlock_autopatch_9230.bat` | Automatise la séquence « unlock » du guide Cubot | ❌ **ne pas exécuter** |

**Inventaire réellement confirmé le 29/10 sur le PC** (`dir /b` dans `C:\zte-unlock`) — les six fichiers
obligatoires sont présents :

```
Channel.ini            fdl1-dl.bin   misc-wipe.bin
Channel9.dll           fdl2-cboot.bin  spd_dump.exe
chsize.exe             fdl2-dl.bin     ums9230_universal_unlock_EMMC   (sous-dossier)
custom_exec_no_verify_65015f08.bin     unlock_autopatch_9230.bat
gen_spl-unlock.exe
```

> ⚠️ **Ne jamais double-cliquer `unlock_autopatch_9230.bat`, ni lancer `gen_spl-unlock.exe` / `chsize.exe`.**
> Le `.bat` rejoue la séquence du guide Cubot : elle **efface `splloader`** et réécrit `uboot`
> (`e splloader`, `w uboot fdl2-cboot.bin`). C'est un **déverrouillage de bootloader**, hors de notre plan,
> et une erreur d'adresse y est irréversible. Nous n'utilisons que `spd_dump.exe` avec les commandes listées
> en §13.7/§13.8. `misc-wipe.bin` et `fdl2-cboot.bin` sont conservés comme **solutions de repli**, pas comme
> point de départ.

> **Si `spd_dump.exe` est absent** (le paquet peut ne contenir que les binaires Linux), il faut récupérer une
> version Windows : elle est fournie dans d'autres paquets du même auteur (dossiers UMS9620 / *universal*).
> Ne pas mélanger des `.exe` et des `.bin` provenant de paquets différents : garder l'ensemble homogène.

4. Test de démarrage :

```bat
spd_dump.exe --help
```

- Une liste de commandes s'affiche → ✅ tout est bon.
- Message sur `MSVCP140.dll` manquant → installer **Visual C++ Redistributable 2015-2022 (x64)** depuis le site
  Microsoft, puis réessayer.
- « Ce programme ne peut pas s'exécuter » / code `0xC0000135` → même cause : la bibliothèque VC++ manque.

**Résultat réellement obtenu le 29/10** (`spd_dump.exe --help` depuis `C:\zte-unlock`) — ✅ l'outil démarre :

```
branch:main, sha1:fa0becf5e3f026b3b99103c65de6eb9a8348b27c
```

Toutes les commandes utiles sont annoncées : `--wait`, `exec_addr`, `fdl FILE addr`, `exec`, `read_part`, `r`,
`e|erase_part`, `w|write_part`, `p|print`, `size_part`, `check_part`, `reset`, `poweroff`.

> Cette version **liste `baudrate`** alors que le guide de référence indique qu'une version Windows compatible ne
> devrait pas l'annoncer. Non bloquant : nous n'utiliserons **jamais** `baudrate`. Le test à blanc (§13.7) sert
> précisément à valider la chaîne réelle sur l'appareil avant tout effacement.

### 13.6 Étape E — Installer le pilote SPD

> **Le zip de l'outil ne contient aucun pilote** : vérifié le 29/10, `C:\zte-unlock` n'a que des `.exe`, `.dll`,
> `.bin`, un sous-dossier et un `.bat`. Le pilote se télécharge séparément.

**Préparation (sans le téléphone, sans risque)**

1. Télécharger le paquet de pilotes SPD/Unisoc **v4.21.39.134** (8,24 Mo) :
   <https://assets.gsm6.com/Drivers/SPRD_Unisoc_v4.21.39.134_GSM6.com.zip>
   Miroir si le lien direct tombe :
   <https://drive.google.com/drive/folders/15dJKHIHDdpJuzG5g_FKraFRJQULqw3lc>
2. Clic droit sur le zip → **Extraire tout** → destination **`C:\zte-unlock\drivers`** : à l'intérieur du dossier
   déjà exclu de Defender (§13.4), sinon l'antivirus peut supprimer les `.inf` / `.sys`.
3. Repérer les `.inf` et noter le chemin exact :

```bat
dir /s /b C:\zte-unlock\drivers\*.inf
```

   **Résultat réellement obtenu le 29/10** dans `C:\zte-unlock\drivers` (les quatre sont à la racine, pas de
   sous-dossier `x64`) :

```
C:\zte-unlock\drivers\rdavcom.inf     (RDA, inutile ici)
C:\zte-unlock\drivers\sprdadb.inf     (ADB, inutile ici)
C:\zte-unlock\drivers\sprdvcom.inf    <-- celui du port COM diag : à utiliser
C:\zte-unlock\drivers\sprdvmdm.inf    (modem, inutile ici)
```

   **On n'utilise que `sprdvcom.inf`.** Les fichiers `.sys` / `.cat` accompagnent ces `.inf` dans le même dossier :
   ne pas déplacer les `.inf` seuls, le pilote ne se chargerait pas.

   ⚠️ **Piège rencontré le 29/10** : dans la boîte « Disquette fournie… », `sprdadb.inf` est le **voisin
   alphabétique** de `sprdvcom.inf`. Si l'assistant propose les modèles **`Android Bootloader`, `ADB Interface`,
   `Composite ADB Interface`**, c'est qu'on a chargé **`sprdadb.inf`** (pilote ADB, inutile ici) : cliquer de
   nouveau sur **Disquette fournie…** et viser `sprdvcom.inf`. Le bon fichier propose **`SPRD U2S Diag`**
   (identifiants matériels `USB\VID_1782&PID_4D00`, `USB\VID_1782&PID_4D01&MI_00`, `3D00`, `3D10`, `5D03`,
   `5D04`, `5D29`).
   Astuce : dans la boîte de dialogue, au lieu de parcourir, **taper le chemin complet** dans le champ
   « Nom du fichier » → `C:\zte-unlock\drivers\sprdvcom.inf` → **OK**. Aucun risque de se tromper de ligne.
   Annuler l'assistant n'installe rien et n'abîme rien.

**Installation (le téléphone doit être branché — refaire §13.3 juste avant)**

4. **Téléphone éteint**, maintenir **Volume bas**, brancher le câble USB-C au PC.
5. Gestionnaire de périphériques (clic droit sur Démarrer) : chercher un périphérique inconnu, souvent nommé
   `SPRD U2S Diag`, `SCI USB2Serial` ou `Unknown Device`.
6. Clic droit → **Mettre à jour le pilote** → **Rechercher un pilote sur mon ordinateur** →
   **Choisir dans une liste de pilotes disponibles** → **Disquette fournie…** → pointer sur le fichier `.inf`
   repéré à l'étape 3.
7. Ignorer l'avertissement de signature, puis vérifier : le périphérique doit apparaître sous
   **Ports (COM et LPT)** en `SPRD U2S Diag (COMx)`.

> Le périphérique peut n'apparaître que **quelques secondes**. Faire la manipulation sans traîner, ou laisser le
> gestionnaire ouvert avant de brancher.

**Méthode recommandée — `pnputil`, sans assistant et sans liste de modèles**

L'assistant graphique pose deux problèmes vécus le 29/10 :

- il **réutilise le dernier `.inf` chargé** : après avoir ouvert `sprdadb.inf` une fois, re-sélectionner
  `sprdvcom.inf` peut réafficher la même liste (`Android Bootloader`, `ADB Interface`, `Composite ADB Interface`)
  sans erreur visible ;
- il oblige à **choisir un modèle à la main**, alors que Windows sait très bien associer le pilote à l'appareil
  par son identifiant matériel.

On contourne les deux avec **une commande**, dans une invite **exécutée en administrateur** :

```bat
pnputil /add-driver C:\zte-unlock\drivers\sprdvcom.inf /install
```

Sortie attendue : `Package de pilotes ajouté avec succès` + un nom `oemXX.inf`. La mention « aucun périphérique
correspondant » est **normale** à ce stade : elle signifie que le paquet est enregistré et attend l'appareil.
Au premier branchement en mode BROM, Windows reconnaît `USB\VID_1782&PID_4D00` tout seul et crée le COM.

Si `pnputil` refuse le paquet (erreur de signature), c'est que la touche **7** n'est plus active → refaire §13.3.

> **Résultat réel du 29/10** : `Package de pilotes correctement ajouté` — nom publié **`oem29.inf`**. Mais
> `pnputil` a lié le paquet à des interfaces **`USB\VID_18D1&PID_4EE8&MI_01 / MI_02 / MI_03`** — c'est-à-dire
> **VID Google/Android**, et **pas** `VID_1782` (Spreadtrum). Deux enseignements :
>
> 1. **un appareil Android était branché au PC** au moment de la commande. À débrancher avant l'entrée en mode
>    BROM : `spd_dump` doit voir **un seul** port, et un téléphone allumé qui bascule en MTP/ADB vient perturber
>    la détection.
> 2. le `sprdvcom.inf` **de ce paquet** contient réellement des entrées ADB (`Android Bootloader`,
>    `ADB Interface`, `Composite ADB Interface`). La liste vue dans l'assistant n'était donc **pas** un simple
>    effet de mémoire de la boîte de dialogue : l'hypothèse « mauvais fichier chargé » était fausse.
>
> **Vérification faite le 29/10** : `findstr /i "VID_1782"` confirme la ligne décisive dans `sprdvcom.inf` :
>
> ```
> %USBCOMM_DL%  = Serial_Inst, USB\VID_1782&PID_4D00
> %SPRD.DIAG%   = Serial_Inst, USB\VID_1782&PID_4D01&MI_01
> ```
>
> `VID_1782&PID_4D00` **est** l'identifiant du mode BROM/DIAG du téléphone. Le paquet `oem29.inf` déjà enregistré
> couvre donc l'appareil : **aucune installation supplémentaire, aucune liste de modèles à choisir**. Au premier
> branchement en mode BROM, Windows crée le port COM tout seul.
>
> **Périphériques à ne pas débrancher** : souris et clavier (même amovible) sont des périphériques HID — ils ne
> créent pas de port COM et `spd_dump` ne cherche que le périphérique Spreadtrum. Seul un **autre téléphone**
> branché en mode transfert doit être débranché.

**Variante graphique** (si `pnputil` est indisponible) : Gestionnaire de périphériques → clic sur le nom de
l'ordinateur en haut de la liste → menu **Action** → **Ajouter un matériel d'ancienne version**
(« hérité » selon la version de Windows) → **Installer le matériel que je sélectionne manuellement dans une
liste** → **Afficher tous les périphériques** → **Disquette fournie…** → taper le **chemin complet** de
`sprdvcom.inf` dans le champ « Nom du fichier ».

### 13.7 Étape F — Test à blanc (lecture seule, n'écrit rien)

**Toujours dans `cmd`, dans le dossier du paquet.** Lancer la commande **avant** de brancher le téléphone :

```bat
spd_dump.exe --wait 300 --kick exec_addr 0x65015f08 fdl fdl1-dl.bin 0x65000800 fdl fdl2-dl.bin 0x9efffe00 exec read_part misc 0 64 misc_test.bin reset
```

> ### 🔑 `--kick` : la vraie clé pour un ZTE UMS9230 (retour d'expérience)
>
> Sur un **ZTE Blade A36 (UMS9230, eMMC)** — plateforme identique à celle de ce téléphone — `spd_dump` **fonctionne sans appuyer sur aucune touche**, à condition d'utiliser l'option `--kick` (issue #330 du dépôt). Le déroulé observé par cet utilisateur :
>
> 1. câble branché sur un téléphone **éteint**, aucune touche ;
> 2. l'écran affiche **« Calibration Mode »** pendant environ 3 secondes ;
> 3. l'écran devient **noir** ;
> 4. `spd_dump` se connecte en `boot_diag`, envoie le *kick*, bascule en `dl_diag` (BROM) et affiche `BSL_REP_VER: "SPRD4:AutoD"`.
>
> Sans `--kick`, l'outil n'attend que `dl_diag` : il rate la première interface et sort en `device removed, exiting...` — exactement ce qu'on a vu. `--kick` suit la route complète `boot_diag → cali_diag → dl_diag`.
>
> Si `--kick` ne suffit pas, l'auteur conseille `--kickto 2` (même route, forcée sur `dl_diag`).
>
> Combinaisons de touches : à essayer **seulement** si `--kick` échoue — voir l'encadré ci-dessous. (encadré ci-dessous) : câble déjà branché, puis **Power + Volume haut maintenus 7 à 10 secondes**.

> ### 🔑 Comment entrer en mode download — méthode officielle
>
> Source : wiki du projet (`Unlock` + `SupportList`), écrit par l'auteur de `spd_dump`.
>
> > « To enter U2S DIAG mode, it is **power + vol up** / **power + vol down** (most common) / **power + vol up + vol down**, if all not work, then have to find testpoint on motherboard. »
> > « **Press key combination for 7-10 seconds** to enter download mode. »
>
> Autrement dit : ce n'est **pas** « maintenir Volume et brancher le câble ». Il faut **Power + une touche de volume**, tenues **7 à 10 secondes**, câble **déjà branché**. C'est l'oubli des deux premiers essais : le téléphone se contentait de démarrer normalement (recovery avec Volume bas, animation de charge avec Vol+ + Vol−).
>
> ⚠️ **Mais pour un ZTE UMS9230, commencer par `--kick` sans aucune touche** (voir l'encadré `--kick` ci-dessus) : c'est la méthode qui a fonctionné sur un modèle de la même famille. Les combinaisons ci-dessus ne servent qu'en repli.
>
> Ordre des essais : **Power + Vol+** → **Power + Vol−** → **Power + Vol+ + Vol−**. Si aucun ne marche : *test point* sur la carte mère (démontage).

| Ce qui s'affiche | Signification |
|---|---|
| `waiting for device` puis rien | Le téléphone n'est pas vu : pilote, câble ou touche |
| `BSL_REP_VER: "SPRD3"` | ✅ Communication établie |
| `misc_test.bin` apparaît dans le dossier | ✅ **Accès en lecture confirmé, tu peux continuer** |
| `find port failed` | Connexion perdue, relancer, ne pas continuer |
| `CHECK_BAUD FAIL` | Normal sur les versions corrigées : le binaire se reconnecte seul |
| `Successfully connected to port: N` | ✅ Le pilote fonctionne : Windows a bien créé un COM pour le téléphone |
| `Successfully connected` **puis** `usb_send failed (0 / 1)` | Le port s'est ouvert mais l'appareil a quitté le mode BROM aussitôt : voir l'encadré ci-dessous |

> ### ✅ Résultat réel du 29/10 — essai 5 (`--kick`, aucune touche) : **SUCCÈS**
>
> ```text
> Waiting for boot_diag/cali_diag/dl_diag connection (300s)
> Successfully connected to port: 5      ← interface boot_diag/cali_diag
> Unknown response  7e 00 00 00 00 08 00 d5 00 7e     ← sans conséquence, reconnexion automatique
> Successfully connected to port: 5      ← dl_diag
> CHECK_BAUD bootrom
> BSL_REP_VER: "SPRD4"
> CMD_CONNECT bootrom
> EXEC FDL1
> CHECK_BAUD FDL1
> BSL_REP_VER: "SPRD4:AutoD\0"
> CMD_CONNECT FDL1
> KEEP_CHARGE FDL1
> FDL2: incompatible partition          ← message normal, présent aussi sur les autres ZTE
> EXEC FDL2
> DISABLE_TRANSCODE
> Reading Partition List
> ...
> Total number of partitions: 77
> Storage is emmc
> Device is using slot b
> Read Part Done: misc+0x0, target: 0x40, read: 0x40
> ```
>
> **Accès complet confirmé** : FDL1 **et** FDL2 exécutés, table de partitions lue, `misc_test4.bin` de **64 octets** écrit dans `C:\zte-unlock`. FDL2 = la couche qui écrit : on a donc aussi le droit d'écriture, sans avoir rien écrit.
>
> **`--kick` est indispensable sur ce modèle.** C'est la différence entre `device removed, exiting...` et un accès complet.

#### Table de partitions relevée le 29/10 (eMMC, A/B, 77 partitions)

| # | Partition | Taille | Rôle |
|---|---|---|---|
| 0 | `splloader` | 256 KB | **interdit** |
| 1 | `prodnv` | 64 MB | **interdit** |
| 2 | `miscdata` | 1 MB | **interdit** |
| 3 | `misc` | 1 MB | drapeau de démarrage (BCB) |
| 21 | `persist` | 2 MB | **interdit** |
| 22 | `ztecfg` / `ztepersist` | 8 / 32 MB | **interdit** |
| 55 | `metadata` | 64 MB | clés de chiffrement → **à effacer avec `userdata`** |
| 77 | `userdata` | **104 920 MB** | code d'écran + données → **à effacer** |

> ### ⚠️ Résultat réel du 29/10 — première tentative
>
> ```text
> Waiting for dl_diag connection (300s)
> Successfully connected to port: 5
> usb_send failed (0 / 1)
> Appuyez sur une touche pour continuer...
> ```
>
> puis le téléphone a démarré sur **Android recovery** (et non sur l'écran de verrouillage).
>
> **Lecture :** `Successfully connected to port: 5` = le pilote `oem29.inf` **fonctionne**, Windows a bien créé un port COM pour le téléphone — c'était le point bloquant de toute la journée. `usb_send failed (0 / 1)` = le tout premier octet de synchronisation n'a pas pu être écrit : l'appareil avait **déjà quitté** le mode BROM au moment de l'échange. Cause : **Volume bas maintenu** est interprété par la chaîne de démarrage de ce modèle comme « démarrer en recovery » — l'appareil s'est donc réinitialisé juste après l'ouverture du port.
>
> **Aucune écriture n'a eu lieu** : `misc_test.bin` n'a pas été créé, rien n'a été modifié dans le téléphone.
>
> ### ⚠️ Résultat réel du 29/10 — deuxième tentative (Vol+ + Vol− maintenus)
>
> ```text
> Waiting for dl_diag connection (300s)
> Successfully connected to port: 5
> device removed, exiting...
> ```
>
> Le port COM s'est ouvert **puis** a disparu : l'appareil a quitté le mode avant tout échange. Différent de la première tentative (`usb_send failed`) : plus de démarrage en recovery, donc la combinaison change bien le comportement, mais la fenêtre est trop courte côté Windows.
>
> **Toujours aucune écriture.** `misc_test2.bin` n'a pas été créé.
>
> **Point à vérifier avant chaque essai :** le téléphone doit être **complètement éteint** (écran noir obtenu par « Éteindre », pas une simple mise en veille), et l'écran doit **rester noir** pendant l'opération. Si l'écran s'allume (logo, chargeur, Android), l'appareil n'est pas en BROM : les octets envoyés par `spd_dump` partent vers l'interface Android (`VID_18D1`), que le paquet `oem29.inf` accepte aussi — piège à connaître.
>
> **Correction :** sur ZTE, la combinaison documentée du *Download Mode* est **Volume haut + Volume bas enfoncés ensemble**, puis brancher le câble (Volume bas seul = recovery, c'est ce qu'on a obtenu). Ordre des essais :
>
> 1. **Vol+ et Vol− ensemble**, câble branché, maintenir 3–5 s puis relâcher — écran **noir**, c'est normal ;
> 2. **Vol+ seul** ;
> 3. **aucune touche** (beaucoup d'appareils Unisoc entrent en download mode tout seuls câble branché, téléphone éteint).

> En `cmd`, tout tient sur **une seule ligne** (pas de `\` de continuation comme sous Linux).

### 13.8 Étape G — Effacer

```bat
spd_dump.exe --wait 300 --kick exec_addr 0x65015f08 fdl fdl1-dl.bin 0x65000800 fdl fdl2-dl.bin 0x9efffe00 exec e userdata e metadata reset
```

Procédure : téléphone **éteint** → lancer la commande → **brancher le câble, aucune touche** → attendre la lecture de la table (≈ 30 s) puis l'effacement. **Ne rien débrancher** pendant l'opération. Sur 104 Go, l'effacement peut durer plusieurs minutes sans affichage de progression.

Puis **ne rien toucher**. Le téléphone redémarre seul.

### 13.9 Étape H — Vérifier

Au `reset`, le téléphone redémarre et le **premier démarrage est long** (10 à 20 minutes) : il recrée `userdata` et les clés. Ne pas s'inquiéter, ne pas débrancher, ne pas forcer l'extinction.

Assistant de configuration, choix de la langue, **aucune demande de compte Google**. Si un mot de passe est
encore demandé, appliquer la variante « ceinture et bretelles » (§8) avec `misc-wipe.bin`.

### 13.10 Dépannage spécifique Windows

| Symptôme | Cause | Action |
|---|---|---|
| Rien dans le Gestionnaire de périphériques | Câble de charge seule, ou mauvais port | Changer de câble, prendre un port USB **2.0** à l'arrière du PC |
| « Périphérique inconnu » avec triangle jaune | Pilote non installé, ou signature réactivée | Refaire §13.3 puis §13.6 (l'autorisation expire à chaque redémarrage) |
| Code 10 / Code 52 | Code 52 = signature encore bloquée | Redémarrer avec F7, réinstaller |
| `spd_dump.exe` disparaît | Defender l'a supprimé | Exclusion de dossier (§13.4), ré-extraire le zip |
| Fenêtre qui se ferme en 1 seconde | `MSVCP140.dll` manquant | Installer le Redistributable VC++ x64 |
| `Channel9.dll` introuvable | DLL absente ou mauvais dossier courant | Vérifier `dir`, rester dans le dossier du paquet |
| Le téléphone apparaît puis disparaît | Fenêtre courte, batterie faible, câble instable | Charger à 50 %+, relancer la commande **avant** de brancher |
| `find port failed` répété | USB 3, hub, câble long | Port USB 2.0 direct sur la carte mère, câble court |
| `Successfully connected to port: N` puis `usb_send failed (0 / 1)` | L'appareil a quitté le mode BROM avant le premier échange — le plus souvent parce que la touche était **encore maintenue** | Relâcher la touche dès l'apparition du port ; essayer **Volume haut** ; vérifier que le téléphone était bien **éteint** et non en veille |
| `Successfully connected to port: N` puis `device removed, exiting...` | Le port COM est apparu puis a disparu tout de suite : l'appareil a changé de mode USB (fin de fenêtre BROM, passage au chargeur, à Android ou au bootloader) | Arrêter **complètement** le téléphone (écran noir), puis essayer les combinaisons dans l'ordre : **Vol+ + Vol−**, **Vol+ + Vol− + Power**, **Vol+ seul**, **aucune touche**. Relancer avec `--verbose` pour voir l'identifiant du périphérique |
| Après la commande, le téléphone démarre en **Android recovery** | Volume bas maintenu = déclencheur du recovery sur ce modèle (constaté le 29/10) | « Reboot system now » → éteindre complètement → refaire la séquence en relâchant la touche |
| Écran **noir quelques secondes puis animation de charge** | Démarrage normal sur chargeur — le téléphone n'est **jamais** entré en download mode | La combinaison doit inclure **Power** et être tenue **7–10 s** (voir l'encadré de §13.7) |
| Interminable suite de `CurTime: x, CurPort: 0` | `--verbose 1` affiche chaque demi-seconde l'attente du port ; **`CurPort: 0` = aucun port détecté** | `Ctrl+C` pour arrêter (ou fermer la fenêtre, sans risque). Ajouter `--kick` |
| `device removed, exiting...` dès le branchement | L'outil n'écoute que `dl_diag` et rate l'interface `boot_diag/cali_diag` du début de démarrage | Lancer avec **`--kick`** (route complète), puis `--kickto 2` si besoin |
| Le téléphone démarre en Android normal | La touche n'a pas été lue comme « download mode » | Éteindre, refaire avec **Power + Vol+** tenu 7–10 s |
| `usb_send failed` alors qu'aucune touche n'était enfoncée | Le port COM ouvert était celui du diag Android (`PID_4D01`), pas le BROM (`PID_4D00`) | `pnputil /enum-devices /connected /class Ports` doit montrer `VID_1782&PID_4D00` ; sinon le téléphone n'était pas en BROM |
| `Accès refusé.` juste après avoir tapé quelque chose comme `C:\zte-unlock>)` | Le **prompt** affiché dans la documentation a été collé comme s'il s'agissait d'une commande | Le prompt n'est pas une commande : taper `cd /d C:\zte-unlock` (voir ligne suivante) |
| Le prompt affiche `C:\Windows\system32` | `cmd` a été ouvert depuis le menu Démarrer, pas depuis le dossier du paquet | `cd /d C:\zte-unlock`, ou rouvrir `cmd` depuis la barre d'adresse du dossier |
| On ne sait plus où le zip a été extrait | — | `dir /b C:\zte-unlock` **d'abord** : la recherche `where /r %USERPROFILE%` ne voit **que** le profil (Bureau, Téléchargements, Documents, OneDrive) et renvoie donc « impossible de trouver » même quand tout est en place dans `C:\zte-unlock` |
| `where /r %USERPROFILE% spd_dump.exe` renvoie « impossible de trouver » | Normal si l'extraction est dans `C:\zte-unlock` (hors profil), ou si le zip est encore **dans** son `.zip` | Ne pas conclure à un fichier manquant : `dir /b C:\zte-unlock`, puis `dir /s /b "%USERPROFILE%\Downloads\*.zip"` |

### 13.11 Ce qu'il faut m'envoyer pour continuer

1. La sortie de `dir` dans le dossier extrait (ou une capture).
2. Le résultat de `spd_dump.exe --help`.
3. Une capture du Gestionnaire de périphériques après branchement en mode BROM.

Avec ces trois éléments, la suite peut être donnée **ligne par ligne**, sans approximation.

---

## 14. Sources

- **Wiki officiel de l'outil** (TomKing062) — <https://github.com/TomKing062/CVE-2022-38694_unlock_bootloader/wiki/Unlock> et <https://github.com/TomKing062/CVE-2022-38694_unlock_bootloader/wiki/SupportList> : « power + vol up / power + vol down / power + vol up + vol down », **tenues 7 à 10 secondes** ; à défaut, *test point* sur la carte mère. Le wiki précise aussi que le pilote SPRD et le pilote libusb sont **incompatibles** : un seul à la fois dans Windows.
- **Issue #330 du dépôt** — <https://github.com/TomKing062/CVE-2022-38694_unlock_bootloader/issues/330> : ZTE Blade A36 (UMS9230, eMMC). Téléphone **éteint, aucune touche** : l'écran affiche « Calibration Mode » ~3 s puis devient noir, et `spd_dump --wait 300 --kick …` se connecte (`boot_diag` → `dl_diag`, `BSL_REP_VER: "SPRD4:AutoD"`). L'auteur recommande `--kickto 2` en secours.
- **README de `spd_dump`** — <https://github.com/TomKing062/spreadtrum_flash> : options `--wait`, `--kick` (route `boot_diag → cali_diag → dl_diag`), `--verbose <0|1|2>` (le niveau est **obligatoire**), `-r/--reconnect`, `--kickto`, commandes `timeout`, `baudrate`, `read_part`, `w`, `e`, `r all|all_lite`.

- Paquet **`ums9230_universal_unlock_EMMC.zip`** (Unisoc UMS9230, eMMC) :
  <https://github.com/TomKing062/CVE-2022-38694_unlock_bootloader/releases/tag/1.72>
- Guide de référence sur **la même carte mère** (`UMS9230_6h10`), avec les adresses exactes `0x65015f08`,
  `0x65000800`, `0x9efffe00` :
  <https://github.com/KiMiGuel/Root-Guide-Cubot-KingKong-ES-3---Unisoc-T615-ums9230->
- Outil `spd_dump` (source) : <https://github.com/TomKing062/spreadtrum_flash>
- Description de la faille CVE-2022-38694 par NCC Group :
  <https://research.nccgroup.com/2022/09/02/theres-another-hole-in-your-soc-unisoc-rom-vulnerabilities/>
- Outil multi-plateforme documentant `spd_dump.exe` + `Channel9.dll` + pilote `SPRD U2S Diag` sous Windows :
  <https://github.com/Milordick/unisoc-tool-rs>
- Installation des pilotes Unisoc/Spreadtrum et désactivation de la vérification de signature (Hovatek) :
  <https://www.hovatek.com/forum/thread-827.html>
- Procédure de désactivation de la vérification de signature (Windows 10/11, pas à pas) :
  <https://rompalace.com/guides/install-usb-drivers/>
- Paquets de pilotes SPD/Unisoc 4.2x (non signés, Windows 7 à 11) :
  <https://gsm6.com/spreadtrum-unisoc-spd-drivers-download-latest/>
  — lien direct du paquet v4.21.39.134 (8,24 Mo), INF `sprdvcom.inf` / `SciU2S.inf` / `Spreadtrum_Jungo.inf`,
  procédure « Ajouter un matériel hérité » :
  <https://assets.gsm6.com/Drivers/SPRD_Unisoc_v4.21.39.134_GSM6.com.zip>
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
| Le `misc-wipe.bin` est dans le paquet | **certain** (vu dans `C:\zte-unlock` le 29/10) |
| `spd_dump.exe` + `Channel9.dll` = chaîne Windows de référence | certain (documenté par plusieurs projets) |
| Le pilote `SPRD U2S Diag` n'est pas signé → F7 obligatoire | certain |
| `spd_dump.exe` exige `MSVCP140.dll` | certain (erreur 0xC0000135 documentée) |
| Le paquet EMMC contient des binaires Windows | **certain** : `spd_dump.exe` + `Channel9.dll` extraits le 29/10 |
| Le dossier d'extraction échappe à `where /r %USERPROFILE%` | certain (`C:\zte-unlock` est hors profil) |
| `spd_dump.exe --help` fonctionne sur ce PC | **certain** (29/10, `sha1:fa0becf5…`) |
| Le zip de l'outil contient un pilote | **faux** : aucun `.inf` — pilote à télécharger séparément |
| Le pilote utile est `sprdvcom.inf` | **certain** : présent dans `C:\zte-unlock\drivers` depuis le 29/10 |
