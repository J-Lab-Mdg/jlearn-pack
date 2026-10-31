"""Ajoute une première banque d'évaluation réellement distincte pour l'unité Nombre."""
from pathlib import Path
import json
import sys
sys.path.insert(0, str(Path(__file__).parent))
from content_bank import BANK

PATCHES = {
"U1-L01": ([
 "Représente 58 304 dans un tableau de numération.",
 "Décompose 70 406 selon les valeurs de rang.",
 "Compare 58 304 et 58 034 avec le signe correct.",
 "Explique le rôle du zéro dans 50 006."
 ], [
 "Le tableau contient 5 dizaines de mille, 8 milliers, 3 centaines, 0 dizaine et 4 unités.",
 "70 000 + 400 + 6.",
 "58 304 > 58 034.",
 "Le zéro garde la place des dizaines et les autres chiffres ne glissent pas."
 ]),
"U1-L02": ([
 "Compare 87 650 et 87 605 en indiquant le premier rang qui change.",
 "Range 45 090 ; 45 900 ; 40 590 dans l’ordre croissant.",
 "Intercale 72 500 entre 72 050 et 75 200.",
 "Explique pourquoi 100 000 est plus grand que 99 999."
 ], [
 "87 650 > 87 605 ; la première différence est au rang des dizaines.",
 "40 590 < 45 090 < 45 900.",
 "72 050 < 72 500 < 75 200.",
 "100 000 possède six chiffres et 99 999 seulement cinq."
 ]),
"U1-L03": ([
 "Compose 60 000 + 4 000 + 500 + 20 + 8.",
 "Décompose 92 017 selon les valeurs de rang.",
 "Écris 47 305 avec des multiplications par 10 000, 1 000, 100, 10 et 1.",
 "Explique la différence entre composer et décomposer."
 ], [
 "64 528.",
 "90 000 + 2 000 + 10 + 7.",
 "(4 × 10 000) + (7 × 1 000) + (3 × 100) + (0 × 10) + 5.",
 "Composer réunit les valeurs ; décomposer sépare le nombre en valeurs de rang."
 ]),
"U1-L04": ([
 "Représente 5/8 sur une bande partagée en huit parts égales.",
 "Dans une collection de 12 billes, 3 sont rouges : écris la fraction correspondante.",
 "Écris la fraction représentée par 2 parts prises sur 6.",
 "Explique pourquoi les parts doivent être égales."
 ], [
 "Une bande en huit parts égales dont cinq sont colorées : 5/8.",
 "3/12.",
 "2/6.",
 "Sans parts égales, chaque part n’aurait pas la même valeur et la fraction ne représenterait pas correctement le tout."
 ]),
"U1-L05": ([
 "Complète 2/5 = …/10.",
 "Donne une fraction équivalente à 3/7 en multipliant par 3.",
 "Réduis 4/8 à une fraction équivalente plus simple.",
 "Explique pourquoi multiplier le numérateur et le dénominateur par le même nombre conserve la quantité."
 ], [
 "4/10.",
 "9/21.",
 "4/8 = 1/2.",
 "Les parts sont subdivisées de la même façon en haut et en bas ; la quantité représentée reste identique."
 ]),
"U1-L06": ([
 "Simplifie 12/16.",
 "Compare 5/8 et 7/8.",
 "Range 1/3 ; 2/3 ; 1/6 dans l’ordre croissant.",
 "Explique une méthode pour comparer deux fractions de même dénominateur."
 ], [
 "12/16 = 3/4.",
 "5/8 < 7/8.",
 "1/6 < 1/3 < 2/3.",
 "On garde le dénominateur et on compare les numérateurs."
 ]),
"U1-L07": ([
 "Écris en chiffres : quinze virgule zéro huit.",
 "Décompose 7,42 en unités, dixièmes et centièmes.",
 "Quelle est la valeur du chiffre 6 dans 18,64 ?",
 "Explique le rôle de la virgule dans un nombre décimal."
 ], [
 "15,08.",
 "7 + 0,4 + 0,02.",
 "6 dixièmes, soit 0,6.",
 "Elle sépare la partie entière de la partie décimale."
 ]),
"U1-L08": ([
 "Écris 0,45 sous forme de fraction décimale.",
 "Compare 6,09 et 6,9.",
 "Range 3,4 ; 3,04 ; 3,14 dans l’ordre croissant.",
 "Explique pourquoi 3,4 peut s’écrire 3,40."
 ], [
 "45/100.",
 "6,09 < 6,9.",
 "3,04 < 3,14 < 3,4.",
 "Le zéro placé à droite des centièmes ne change pas la valeur du nombre."
 ]),
"U1-L09": ([
 "Écris 14 en chiffres romains.",
 "Lis LXIV.",
 "Écris 490 en chiffres romains.",
 "Explique la différence entre IV et VI."
 ], [
 "XIV.",
 "64.",
 "CDXC.",
 "IV signifie 5 − 1 = 4 ; VI signifie 5 + 1 = 6."
 ]),
"U1-L10": ([
 "Décompose 90 507.",
 "Simplifie 8/12.",
 "Compare 4,5 et 4,05.",
 "Écris 2026 en chiffres romains."
 ], [
 "90 000 + 500 + 7.",
 "8/12 = 2/3.",
 "4,5 > 4,05.",
 "MMXXVI."
 ])
}
APPLICATION_EXTRAS = {
"U1-L01": ("Écris 40 205 en lettres.", "quarante mille deux cent cinq."),
"U1-L02": ("Compare 80 005 et 80 050.", "80 005 < 80 050."),
"U1-L03": ("Compose 90 000 + 700 + 6.", "90 706."),
"U1-L04": ("Une bande a 10 parts égales et 7 sont colorées. Écris la fraction.", "7/10."),
"U1-L05": ("Complète 4/9 = …/18.", "8/18."),
"U1-L06": ("Simplifie 15/20.", "15/20 = 3/4."),
"U1-L07": ("Écris 9,04 en unités, dixièmes et centièmes.", "9 unités, 0 dixième et 4 centièmes."),
"U1-L08": ("Écris 0,32 sous forme de fraction décimale.", "32/100."),
"U1-L09": ("Écris 27 en chiffres romains.", "XXVII."),
"U1-L10": ("Écris 64 en chiffres romains.", "LXIV.")
}
for key,(items,answers) in PATCHES.items():
    BANK[key]["evaluation"] = items
    BANK[key]["evaluation_corrections"] = answers
    BANK[key]["extra_application"] = [APPLICATION_EXTRAS[key][0]]
    BANK[key]["extra_application_corrections"] = [APPLICATION_EXTRAS[key][1]]

if __name__ == '__main__':
    out=Path(__file__).parent/'content_bank.json'
    out.write_text(json.dumps(BANK,ensure_ascii=False,indent=2),encoding='utf8')
    print('Enrichissement U1 exporté :',len(PATCHES),'leçons')
