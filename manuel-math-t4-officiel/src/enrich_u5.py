"""Enrichit l'unité Mesure avec des exercices distincts et corrigés."""
from pathlib import Path
import json
import sys
sys.path.insert(0, str(Path(__file__).parent))
from content_bank import BANK
import enrich_u4  # applique U1 à U4 avant l'export global

PATCHES = {
"U5-L01": ("Un rectangle mesure 6 m sur 3 m. Donne son périmètre et son aire.", "Périmètre 18 m ; aire 18 m².", ["Un carré de côté 5 cm a quel périmètre ?", "Un rectangle de 7 cm sur 2 cm a quelle aire ?", "Quelle unité convient pour le contour d’une cour : m ou m² ?", "Explique la différence entre périmètre et aire."], ["20 cm.", "14 cm².", "Le mètre (m), car on mesure une longueur.", "Le périmètre mesure le contour ; l’aire mesure la surface intérieure."]),
"U5-L02": ("Compte les carrés d’un rectangle de 5 lignes et 7 colonnes.", "35 unités carrées.", ["Une figure contient 32 carrés unités. Quelle est son aire ?", "Pourquoi ne faut-il pas superposer les carrés unités ?", "Un carré de 6 lignes et 6 colonnes contient combien de carrés ?", "Quelle unité carrée utiliser pour mesurer une feuille en cm ?"], ["32 unités carrées.", "Chaque carré doit couvrir une partie différente de la figure.", "36 carrés.", "Le cm²."]),
"U5-L03": ("Calcule l’aire d’un carré de côté 8 cm.", "64 cm².", ["Calcule l’aire d’un rectangle de 12 cm sur 5 cm.", "Calcule l’aire d’un carré de côté 7 cm.", "Un rectangle a une aire de 48 cm² et une largeur de 6 cm. Quelle est sa longueur ?", "Quelle unité donne-t-on pour une aire de rectangle ?"], ["60 cm².", "49 cm².", "8 cm, car 48 ÷ 6 = 8.", "Une unité carrée, par exemple cm²."]),
"U5-L04": ("Calcule l’aire d’un parallélogramme de base 12 cm et hauteur 4 cm.", "48 cm².", ["Un trapèze a pour bases 10 cm et 6 cm et une hauteur de 4 cm. Aire ?", "Calcule l’aire d’un parallélogramme de base 7 cm et hauteur 5 cm.", "Écris la formule de l’aire du trapèze.", "Pourquoi ne prend-on pas le côté oblique comme hauteur ?"], ["(10 + 6) × 4 ÷ 2 = 32 cm².", "35 cm².", "(grande base + petite base) × hauteur ÷ 2.", "La hauteur est la distance perpendiculaire entre les bases."]),
"U5-L05": ("Calcule l’aire d’un triangle de base 10 cm et hauteur 6 cm.", "30 cm².", ["Calcule l’aire d’un triangle de base 12 cm et hauteur 7 cm.", "Calcule l’aire d’un losange de diagonales 8 cm et 5 cm.", "Un triangle a une aire de 24 cm² et une base de 8 cm. Quelle est sa hauteur ?", "Pourquoi divise-t-on par 2 pour l’aire d’un triangle ?"], ["42 cm².", "20 cm².", "6 cm, car 24 × 2 ÷ 8 = 6.", "Un triangle représente la moitié d’un parallélogramme de même base et de même hauteur."]),
"U5-L06": ("Convertis 2,5 m en cm.", "250 cm.", ["Convertis 4 km en m.", "Convertis 6 m² en dm².", "Convertis 3 ha en m².", "Pourquoi le facteur de conversion d’une aire est-il différent de celui d’une longueur ?"], ["4 000 m.", "600 dm².", "30 000 m².", "Une aire est une longueur multipliée par une longueur ; le facteur est donc mis au carré."]),
"U5-L07": ("Convertis 2 h 30 min en minutes.", "150 min.", ["Convertis 90 min en heures et minutes.", "Un trajet commence à 16 h 45 et dure 2 h 20. Heure d’arrivée ?", "Convertis 360 s en minutes.", "Comment calculer une durée entre deux horaires ?"], ["1 h 30 min.", "19 h 05.", "6 min.", "On soustrait l’heure de départ de l’heure d’arrivée, en convertissant dans la même unité."]),
"U5-L08": ("Calcule l’aire d’un rectangle de 12 m sur 5 m.", "60 m².", ["Calcule l’aire d’un carré de côté 11 m.", "Convertis 3 h 20 min en minutes.", "Un rectangle de 18 m sur 6 m est partagé en 3 parties égales. Aire d’une partie ?", "Quelle formule choisis-tu pour l’aire d’un rectangle ?"], ["121 m².", "200 min.", "36 m².", "Longueur × largeur."])
}
for key,(extra,extra_answer,items,answers) in PATCHES.items():
    BANK[key]['extra_application']=[extra]
    BANK[key]['extra_application_corrections']=[extra_answer]
    BANK[key]['evaluation']=items
    BANK[key]['evaluation_corrections']=answers

if __name__ == '__main__':
    out=Path(__file__).parent/'content_bank.json'
    out.write_text(json.dumps(BANK,ensure_ascii=False,indent=2),encoding='utf8')
    print('Enrichissement U1 à U5 exporté :',len(PATCHES),'leçons U5')
