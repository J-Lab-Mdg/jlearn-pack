# Conversion du manuel en `.docx`

```
pip install python-docx --break-system-packages
python3 scripts/md2docx.py Manuel-SVT-T9-complet.md Manuel-SVT-T9-complet.docx
```

Le Markdown reste la **source de vérité**. Le `.docx` est un livrable régénérable :
on modifie le `.md`, on relance la commande. Ne pas éditer le `.docx` à la main
si l'on veut conserver cette propriété.

## Mise en page

A4 **paysage**, marges 1,5 cm — le tableau de déroulement à 6 colonnes est
illisible en portrait. Chaque séance commence sur une **nouvelle page**.
Couleurs du gabarit J-Learn : titres en `#C00000`, sous-titres en `#1E7B34`.

## Deux pièges rencontrés, et leur traitement

**1. La numérotation automatique de Word renumérote les questions.**
Le style `List Number` utilise un compteur global : la question « 1. » d'un
sujet d'examen s'affichait « 47. » parce que Word poursuivait la liste
précédente. Les numéros du manuel sont porteurs de sens — les corrigés y
renvoient. Ils sont donc écrits **littéralement** dans le texte, avec un simple
retrait, et non délégués à Word.

**2. Les citations de plusieurs lignes perdaient leurs sauts.**
La première version joignait les lignes d'un `>` en un seul paragraphe, ce qui
écrasait les mécanismes numérotés (étapes a/b/c de la vaccination, séquence en
4 temps de la fistule). Chaque ligne reçoit maintenant son propre paragraphe
dans l'encadré.

## Contrôle de fidélité

Après conversion, comparer le vocabulaire des deux versions. Attention :
l'extraction XML brute **sous-compte** les cellules fusionnées et donne un faux
déficit (~0,1 %). Utiliser l'API `python-docx` en dédoublonnant par `c._tc` :

| Mesure | Résultat |
|---|---|
| Tokens Markdown | 77 458 |
| Tokens `.docx` (API, dédoublonnée) | **77 458** |
| Mots du Markdown absents du `.docx` | **0** |
| Séances, numérotation 1→51 | continue ✅ |
| `TOTAL : 20 points` | 46 ✅ |
| Durées chiffrées sur I/II/III | 0 ✅ |
