"""Enrichit l'unité Géométrie avec des exercices distincts et corrigés."""
from pathlib import Path
import json
import sys
sys.path.insert(0, str(Path(__file__).parent))
from content_bank import BANK
import enrich_u3  # applique U1 à U3 avant l'export global

PATCHES = {
"U4-L01": ("Classe un angle de 30°.", "Angle aigu.", ["Classe un angle de 90°.", "Classe un angle de 150°.", "Lequel est le plus grand : 70° ou 110° ?", "Explique pourquoi un angle plat mesure 180°."], ["Angle droit.", "Angle obtus.", "110°.", "Un angle plat forme une ligne droite et vaut deux angles droits : 2 × 90° = 180°."]),
"U4-L02": ("Compare 110° et 95°.", "110° est le plus grand.", ["Trace un angle de 120° au rapporteur.", "Lequel est le plus petit : 45° ou 75° ?", "Quelle est la différence entre un angle droit et un angle plat ?", "Où placer le centre du rapporteur pour mesurer un angle ?"], ["Construction avec le rapporteur et les deux côtés de l’angle.", "45°.", "L’angle droit mesure 90° ; l’angle plat mesure 180°.", "Sur le sommet de l’angle."]),
"U4-L03": ("Un triangle de côtés 5 cm, 5 cm et 8 cm est-il isocèle ?", "Oui, deux côtés mesurent 5 cm.", ["Quel type de triangle a trois côtés égaux ?", "Quel type de triangle possède un angle droit ?", "Un triangle de côtés 3 cm, 4 cm et 5 cm peut-il être rectangle ?", "Donne une propriété d’un triangle isocèle."], ["Triangle équilatéral.", "Triangle rectangle.", "Oui, c’est un triplet de longueurs qui forme un triangle rectangle.", "Il possède deux côtés de même longueur."]),
"U4-L04": ("Quelles longueurs et quels instruments faut-il pour construire un triangle de côtés 5 cm, 6 cm et 7 cm ?", "Règle et compas ; reporter 5 cm, 6 cm et 7 cm.", ["Construis un segment AB de 6 cm puis place C à 5 cm de A et 7 cm de B.", "Quelle longueur faut-il vérifier après la construction ?", "Pourquoi utilise-t-on le compas pour reporter une longueur ?", "Les longueurs 2 cm, 3 cm et 6 cm peuvent-elles former un triangle ? Justifie."], ["Tracer AB = 6 cm ; arcs de centres A et B avec rayons 5 cm et 7 cm ; relier C à A et B.", "AC = 5 cm, BC = 7 cm et AB = 6 cm.", "Pour conserver exactement la distance donnée.", "Non, car 2 + 3 < 6."]),
"U4-L05": ("Un quadrilatère a quatre côtés égaux et quatre angles droits. Comment s’appelle-t-il ?", "Un carré.", ["Cite deux propriétés d’un rectangle.", "Quel quadrilatère possède ses côtés opposés parallèles et égaux ?", "Un carré est-il aussi un rectangle ? Justifie.", "Combien de paires de côtés parallèles possède un parallélogramme ?"], ["Il possède quatre angles droits et ses côtés opposés sont égaux.", "Le parallélogramme.", "Oui, il possède quatre angles droits.", "Deux paires de côtés parallèles."]),
"U4-L06": ("Décris un rectangle de longueur 6 cm et de largeur 3 cm.", "Deux côtés de 6 cm, deux côtés de 3 cm et quatre angles droits.", ["Construis un carré de côté 5 cm.", "Construis un rectangle de 7 cm sur 3 cm.", "Comment vérifier qu’un carré est correctement construit ?", "Quel instrument permet de vérifier un angle droit ?"], ["Quatre côtés de 5 cm et quatre angles droits.", "Deux côtés de 7 cm, deux de 3 cm et quatre angles droits.", "Mesurer les quatre côtés et vérifier les quatre angles droits.", "L’équerre."]),
"U4-L07": ("Un cercle a un diamètre de 14 cm. Quel est son rayon ?", "7 cm.", ["Un cercle a un rayon de 8 cm. Quel est son diamètre ?", "Un cercle a un diamètre de 18 cm. Quel est son rayon ?", "Quel point fixe sert de centre au tracé du cercle ?", "Que devient le diamètre si le rayon double de 4 cm à 8 cm ?"], ["16 cm.", "9 cm.", "Le centre du cercle.", "Il double aussi : de 8 cm à 16 cm."]),
"U4-L08": ("Quel solide possède six faces carrées ?", "Le cube.", ["Quel solide possède une surface courbe sans sommet ?", "Quel solide possède deux bases circulaires ?", "Combien de sommets possède un cône ?", "Cite un solide qui possède des faces planes rectangulaires."], ["La sphère ou la boule.", "Le cylindre.", "Un sommet.", "Le pavé droit."]),
"U4-L09": ("Combien de faces faut-il pour fabriquer le patron d’un cube ?", "Six faces carrées.", ["Combien de faces possède un pavé droit ?", "Que faut-il vérifier avant de découper un patron ?", "Cite les étapes pour fabriquer un objet en carton.", "Pourquoi les languettes d’un patron sont-elles utiles ?"], ["Six faces.", "Les longueurs, les angles et l’assemblage des faces.", "Tracer, mesurer, découper, plier puis coller.", "Elles permettent de coller les faces entre elles."]),
"U4-L10": ("Décris une translation de 3 carreaux à droite et 2 carreaux vers le haut.", "Chaque point est déplacé de 3 carreaux à droite et 2 vers le haut.", ["Une translation conserve-t-elle la forme et les longueurs ?", "Une translation fait-elle tourner la figure ?", "Le point A est déplacé de 4 carreaux à gauche. Où placer son image ?", "Comment vérifier deux figures obtenues par translation ?"], ["Oui, elle conserve la forme et les longueurs.", "Non.", "À 4 carreaux à gauche de A.", "Vérifier que tous les points ont le même déplacement et la même direction."]),
"U4-L11": ("A est à 4 carreaux à droite de l’axe. Où placer son image par réflexion ?", "À 4 carreaux à gauche de l’axe.", ["Une réflexion conserve-t-elle les angles ?", "Si B est à 2 carreaux à gauche de l’axe, où placer son image ?", "La réflexion conserve-t-elle la taille de la figure ?", "Que représente l’axe de réflexion pour un point et son image ?"], ["Oui.", "À 2 carreaux à droite de l’axe.", "Oui.", "L’axe est la médiatrice du segment qui relie le point à son image."]),
"U4-L12": ("Classe un angle de 45°.", "Angle aigu.", ["Classe un angle de 90°.", "Le diamètre d’un cercle de rayon 11 cm mesure combien ?", "Une figure est déplacée sans tourner : quelle transformation est utilisée ?", "Une figure et son image sont à la même distance de l’axe : quelle transformation ?"], ["Angle droit.", "22 cm.", "Une translation.", "Une réflexion."])
}
for key,(extra,extra_answer,items,answers) in PATCHES.items():
    BANK[key]['extra_application']=[extra]
    BANK[key]['extra_application_corrections']=[extra_answer]
    BANK[key]['evaluation']=items
    BANK[key]['evaluation_corrections']=answers

if __name__ == '__main__':
    out=Path(__file__).parent/'content_bank.json'
    out.write_text(json.dumps(BANK,ensure_ascii=False,indent=2),encoding='utf8')
    print('Enrichissement U1 à U4 exporté :',len(PATCHES),'leçons U4')
