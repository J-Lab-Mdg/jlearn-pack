"""Enrichit l'unité Algèbre avec des exercices distincts et corrigés."""
from pathlib import Path
import json
import sys
sys.path.insert(0, str(Path(__file__).parent))
from content_bank import BANK
import enrich_u2  # applique U1 et U2 avant l'export global

PATCHES = {
"U3-L01": ("Prolonge le motif : ★ ● ● ★ ● ● … .", "Le terme suivant est ★.", ["Complète : rouge, bleu, rouge, bleu, …, … .", "Décris le motif de A, B, B, A, B, B.", "Crée un motif de quatre formes puis écris ses deux termes suivants.", "Explique comment reconnaître la longueur d’un motif répété."], ["rouge, bleu.", "Le motif A–B–B se répète.", "Réponse possible : ▲, ■, ●, ◆, puis ▲, ■.", "On cherche le plus petit groupe qui se répète sans changement."]),
"U3-L02": ("Prolonge : 3, 6, 9, … .", "12.", ["Donne les deux termes suivants : 1, 3, 5, … .", "Prolonge : 4, 8, 12, … .", "Décris la régularité de 2, 5, 8, 11.", "Quelle figure vient après 1 carré, 2 carrés, 3 carrés si on ajoute un carré à chaque fois ?"], ["7 et 9.", "16.", "On ajoute 3.", "Un groupe de 4 carrés."]),
"U3-L03": ("Donne les deux termes suivants : 25, 30, 35, … .", "40 et 45.", ["Donne les deux termes suivants : 7, 14, 21, … .", "Quel est le terme de rang 6 dans 4, 8, 12, 16, … ?", "Quelle règle produit 100, 90, 80, 70 ?", "Donne le terme de rang 5 dans 2, 5, 8, 11, … ."], ["28 et 35.", "24.", "On soustrait 10.", "14."]),
"U3-L04": ("Complète la table : rang 1, 2, 3, 4 ; terme 4, 7, 10, … .", "Le terme de rang 4 est 13.", ["Avec la règle +4 à partir de 3, donne le terme de rang 5.", "Complète : rang 1, 2, 3, 4 ; terme 6, 12, 18, … .", "Quelle règle relie les termes 5, 10, 15, 20 ?", "Pourquoi associe-t-on chaque terme à un rang ?"], ["19.", "24.", "On ajoute 5, ou terme = 5 × rang.", "Le rang indique la position du terme dans la suite."]),
"U3-L05": ("Crée une suite de quatre termes qui augmente de 4 à partir de 10.", "Réponse : 10, 14, 18, 22.", ["Crée une suite de six termes qui augmente de 3 à partir de 2.", "Crée une suite de quatre termes qui diminue de 4 à partir de 20.", "Explique la règle de 9, 18, 27, 36.", "Justifie la règle de 4, 8, 12, 16."], ["2, 5, 8, 11, 14, 17.", "20, 16, 12, 8.", "On ajoute 9.", "On ajoute 4 à chaque terme."]),
"U3-L06": ("Complète : 15 − 7 = … .", "8.", ["Vrai ou faux : 7 + 5 = 6 + 6 ?", "Écris deux expressions différentes qui valent 20.", "Vrai ou faux : 12 − 4 = 10 ? Corrige si nécessaire.", "Explique ce que représentent les deux membres d’une égalité."], ["Vrai : les deux membres valent 12.", "Réponse possible : 10 + 10 = 20 et 4 × 5 = 20.", "Faux ; 12 − 4 = 8.", "Ce sont les deux expressions placées de part et d’autre du signe = ; elles ont la même valeur."]),
"U3-L07": ("Transforme 9 + 14 en utilisant la commutativité.", "14 + 9.", ["Complète : 7 × … = 7.", "Complète : 18 + … = 18.", "Transforme 25 + 13 en utilisant la commutativité.", "Calcule 9 + 7 par compensation en faisant 10 + 6."], ["1.", "0.", "13 + 25.", "16."]),
"U3-L08": ("Trouve la valeur manquante : □ + 7 = 18.", "11.", ["Trouve □ : □ − 8 = 15.", "Trouve □ : 5 × □ = 45.", "Trouve □ : 42 ÷ □ = 6.", "Comment vérifier la réponse de □ + 7 = 18 ?"], ["23.", "9.", "7.", "11 + 7 = 18."]),
"U3-L09": ("Prolonge : 4, 8, 12, … .", "16.", ["Trouve □ : 15 + □ = 27.", "Trouve □ : 8 × □ = 56.", "Vrai ou faux : 27 − 9 = 18 ?", "Décris une stratégie pour vérifier une valeur manquante."], ["12.", "7.", "Vrai.", "On remplace la valeur trouvée dans l’égalité et on calcule les deux membres."])
}
for key,(extra,extra_answer,items,answers) in PATCHES.items():
    BANK[key]['extra_application']=[extra]
    BANK[key]['extra_application_corrections']=[extra_answer]
    BANK[key]['evaluation']=items
    BANK[key]['evaluation_corrections']=answers

if __name__ == '__main__':
    out=Path(__file__).parent/'content_bank.json'
    out.write_text(json.dumps(BANK,ensure_ascii=False,indent=2),encoding='utf8')
    print('Enrichissement U1 + U2 + U3 exporté :',len(PATCHES),'leçons U3')
