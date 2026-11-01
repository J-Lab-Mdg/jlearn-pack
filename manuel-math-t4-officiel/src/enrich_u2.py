"""Enrichit l'unité Opération avec des exercices Application et Évaluation distincts."""
from pathlib import Path
import json
import sys
sys.path.insert(0, str(Path(__file__).parent))
from content_bank import BANK
# Réapplique l'enrichissement U1 afin que cet export soit reproductible seul.
import enrich_u1  # noqa: F401

PATCHES = {
"U2-L01": {
 "application": ("Représente 4 × 7 par une addition répétée.", "7 + 7 + 7 + 7 = 28."),
 "evaluation": (["Écris la multiplication correspondant à 9 groupes de 6.", "Calcule 8 × 7 puis 7 × 8.", "Une boîte contient 12 craies. Combien de craies dans 4 boîtes ?", "Explique pourquoi 0 × 25 = 0."], ["9 × 6 = 54.", "56 dans les deux cas.", "4 × 12 = 48 craies.", "Zéro groupe de 25 ne contient aucun objet."])
},
"U2-L02": {
 "application": ("Pose et calcule 234 × 6.", "1 404."),
 "evaluation": (["Pose et calcule 407 × 8.", "Pose et calcule 132 × 15.", "Pose et calcule 204 × 12.", "Explique pourquoi on additionne les produits partiels."], ["3 256.", "1 980.", "2 448.", "Chaque chiffre du multiplicateur représente une partie de la multiplication ; les produits partiels sont additionnés."])
},
"U2-L03": {
 "application": ("Partage 45 objets en 5 parts égales.", "45 ÷ 5 = 9 objets par part."),
 "evaluation": (["Calcule 72 ÷ 8.", "Partage 37 objets entre 5 personnes : quotient et reste ?", "Calcule 96 ÷ 12.", "Explique pourquoi le reste doit être inférieur au diviseur."], ["9.", "37 ÷ 5 = 7 reste 2.", "8.", "Si le reste était au moins égal au diviseur, on pourrait encore former une part entière."])
},
"U2-L04": {
 "application": ("Calcule 648 ÷ 18.", "36."),
 "evaluation": (["Calcule 1 536 ÷ 16.", "Calcule 2 015 ÷ 15 et donne le reste.", "Calcule 987 ÷ 9 et donne le reste.", "Vérifie 1 536 ÷ 16 par une multiplication."], ["96.", "134 reste 5.", "109 reste 6.", "16 × 96 = 1 536."])
},
"U2-L05": {
 "application": ("135 est-il divisible par 5 ? Justifie.", "Oui : 135 ÷ 5 = 27."),
 "evaluation": (["72 est-il divisible par 8 ? Justifie.", "143 est-il divisible par 3 ? Justifie par la somme des chiffres.", "246 est-il divisible par 2 ?", "Explique ce que signifie une division exacte."], ["Oui : 72 ÷ 8 = 9.", "Non : 1 + 4 + 3 = 8, qui n’est pas un multiple de 3.", "Oui, car 246 est pair et 246 ÷ 2 = 123.", "Le reste est égal à zéro."])
},
"U2-L06": {
 "application": ("Calcule 3/11 + 5/11.", "8/11."),
 "evaluation": (["Calcule 9/14 − 4/14.", "Calcule 3/8 + 2/8.", "Calcule 11/15 − 6/15 et simplifie si possible.", "Explique pourquoi le dénominateur ne change pas."], ["5/14.", "5/8.", "5/15 = 1/3.", "Les parts ont la même taille ; on additionne ou soustrait seulement le nombre de parts."])
},
"U2-L07": {
 "application": ("Calcule 7,25 + 1,80.", "9,05."),
 "evaluation": (["Calcule 12,50 − 3,75.", "Calcule 2,35 + 4,6.", "Calcule 20 − 7,85.", "Explique pourquoi on aligne les virgules."], ["8,75.", "6,95.", "12,15.", "On aligne les unités, dixièmes et centièmes de même rang."])
},
"U2-L08": {
 "application": ("Calcule 45 × 1 000.", "45 000."),
 "evaluation": (["Calcule 72 × 100.", "Calcule 64 000 ÷ 1 000.", "Calcule 5 × 100.", "Explique le déplacement des chiffres quand on multiplie par 10, 100 ou 1 000."], ["7 200.", "64.", "500.", "Les chiffres se décalent vers la gauche dans l’écriture ; on ajoute les zéros nécessaires."])
},
"U2-L09": {
 "application": ("Calcule mentalement 48 + 52 en regroupant les compléments à 100.", "100."),
 "evaluation": (["Calcule mentalement 68 + 27.", "Calcule mentalement 1 000 − 386.", "Calcule 245 + 199 en transformant 199 en 200 − 1.", "Décris une stratégie pour calculer 49 + 36 sans poser l’opération."], ["95.", "614.", "444.", "49 + 36 = 50 + 36 − 1 = 85."])
},
"U2-L10": {
 "application": ("8 boîtes contiennent chacune 24 crayons. Combien de crayons en tout ?", "8 × 24 = 192 crayons."),
 "evaluation": (["245 livres sont répartis sur 5 étagères égales. Combien par étagère ?", "Une recette utilise 3/10 L puis 4/10 L. Quelle quantité totale ?", "7 sacs pèsent chacun 18 kg. Quelle masse totale ?", "Choisis l’opération pour 156 élèves répartis en 12 groupes égaux et justifie."], ["245 ÷ 5 = 49 livres.", "3/10 + 4/10 = 7/10 L.", "7 × 18 = 126 kg.", "La division : 156 ÷ 12 = 13 élèves par groupe."])
}
}
for key, patch in PATCHES.items():
    extra, extra_answer = patch['application']
    BANK[key]['extra_application'] = [extra]
    BANK[key]['extra_application_corrections'] = [extra_answer]
    BANK[key]['evaluation'] = patch['evaluation'][0]
    BANK[key]['evaluation_corrections'] = patch['evaluation'][1]

if __name__ == '__main__':
    out=Path(__file__).parent/'content_bank.json'
    out.write_text(json.dumps(BANK,ensure_ascii=False,indent=2),encoding='utf8')
    print('Enrichissement U1 + U2 exporté :',len(PATCHES),'leçons U2')
