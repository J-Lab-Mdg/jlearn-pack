# Manuel de Géographie T5 — Projet J-Learn

Manuel scolaire de **Géographie, classe de T5** (5ᵉ année du primaire, Madagascar), Collection J-Learn.
Sources officielles : `PE RAPE/PE T5.pdf` (Programme d'Études T5, section GÉOGRAPHIE, p. 155-169) et
`FRP T5 FASCICULE 2.pdf` (ressources, section GÉOGRAPHIE, p. 99-134).

## État d'avancement
- ✅ Analyse du PE T5 (5 thématiques, 33 h = 66 leçons) et du FRP T5 (5 thématiques identiques)
- ✅ **PLAN-FINAL.md** : découpage 76 numéros (66 leçons + 5 révisions + 5 examens) — **en attente de validation utilisateur**
- ⏳ U1 La planète Terre (S1-S16) → à produire
- ⏳ U2 L'île de Madagascar dans le monde (S17-S26)
- ⏳ U3 Les milieux naturels à Madagascar (S27-S55, 27 leçons — la plus grosse unité)
- ⏳ U4 Les ressources naturelles (S56-S61)
- ⏳ U5 La vie rurale et la vie urbaine (S62-S76)
- ⏳ Annexes + audit + conformité FRP T5

## Recette (héritée de la Géographie T4 — voir ../geo-t4/README.md)
Séances 30 min (fiche I/II/III = 3/22/5) ; français ; schémas scolaires `geo5_*.png` + **1 scène
semi-réaliste par leçon** (JPEG 900 px q85, mode document/illustration) ; aucune mention ministérielle ;
couleurs et conventions identiques ; audit 38 contrôles + vérifications structurelles à chaque étape.

## Reproduire / continuer
```bash
npm install docx sharp
node geo-t5/src/assemble.js          # → output/Manuel_Geographie_T5_JLearn.docx
python3 geo-t5/src/verifications.py  # structure XML
python3 geo-t5/src/audit.py          # contenu (adapté de geo-t4)
```

## Pièges hérités de T4 (à lire avant de modifier)
- Voir « Pièges déjà résolus » du README geo-t4 (courses d'écriture, méta-table, QCM « — », pKw,
  marqueurs `**`, signets = liens, patchs ancrés uniques + `node --check` systématique,
  apostrophes dans les heredocs Python, régénération du `.sha256` après chaque rebuild).
