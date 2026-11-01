"""Banque longue utilisée uniquement pour le prototype de trois séances V2."""
from pathlib import Path
import json
p=Path(__file__).parent/'content_bank.json'
bank=json.loads(p.read_text(encoding='utf8'))

bank['U1-L01']['prototype_exercises']=[
 'Lis 34 206 en lettres.',
 'Écris en chiffres : soixante-douze mille quatre cent cinq.',
 'Place 58 304 dans un tableau de numération.',
 'Décompose 70 406 selon les valeurs de rang.',
 'Compare 58 304 et 58 034 avec le signe correct.',
 'Encadre 45 620 entre deux milliers consécutifs.',
 'Range 40 590, 45 090 et 45 900 dans l’ordre croissant.',
 'Vrai ou faux : dans 50 006, le zéro vaut zéro et ne sert à rien. Justifie.',
 'Corrige l’erreur : 90 018 se lit « neuf mille dix-huit ».',
 'La bibliothèque reçoit 3 dizaines de mille, 4 milliers et 25 livres. Combien reçoit-elle de livres ?',
 'Écris le plus grand nombre de cinq chiffres avec 3, 0, 7, 2 et 5, puis le plus petit.',
 'Recherche : trouve deux nombres de cinq chiffres qui ont 4 comme chiffre des milliers et explique lequel est le plus grand.'
]
bank['U1-L01']['prototype_corrections']=[
 'trente-quatre mille deux cent six.', '72 405.',
 '5 dizaines de mille, 8 milliers, 3 centaines, 0 dizaine, 4 unités.',
 '70 000 + 400 + 6.', '58 304 > 58 034.',
 '45 000 < 45 620 < 46 000.', '40 590 < 45 090 < 45 900.',
 'Faux : le zéro garde la place des dizaines.',
 '90 018 se lit « quatre-vingt-dix mille dix-huit ».',
 '34 025 livres.', '75 320 ; 20 357.',
 'Réponse possible : 42 105 et 41 999 ; 42 105 est le plus grand car son chiffre des dizaines de mille est supérieur.'
]

bank['U4-L03']['prototype_exercises']=[
 'Classe un triangle dont les trois côtés mesurent 6 cm.',
 'Classe un triangle qui possède un angle de 90°.',
 'Un triangle de côtés 5 cm, 5 cm et 8 cm est-il isocèle ? Justifie.',
 'Un triangle de côtés 4 cm, 4 cm et 4 cm est-il équilatéral ? Justifie.',
 'Trace un triangle ABC tel que AB = AC = 5 cm et BC = 6 cm.',
 'Relie : trois côtés égaux ; deux côtés égaux ; un angle droit, avec équilatéral, isocèle, rectangle.',
 'Vrai ou faux : tout triangle équilatéral possède trois angles égaux. Justifie.',
 'Corrige l’erreur : « Un triangle de côtés 3 cm, 4 cm et 5 cm est isocèle parce qu’il a trois côtés. »',
 'Dessine un triangle isocèle et marque ses deux côtés de même longueur.',
 'Un panneau triangulaire a deux côtés de 40 cm et une base de 30 cm. Quel type de triangle reconnais-tu ?',
 'Recherche : trouve un exemple de triangle qui est à la fois isocèle et rectangle.',
 'Explique pourquoi on doit observer les côtés et les angles avant de classer un triangle.'
]
bank['U4-L03']['prototype_corrections']=[
 'Équilatéral.', 'Rectangle.',
 'Oui, il est isocèle car deux côtés mesurent 5 cm.',
 'Oui, il est équilatéral.',
 'Construction avec deux côtés de 5 cm et une base de 6 cm.',
 'Trois côtés égaux → équilatéral ; deux côtés égaux → isocèle ; angle droit → rectangle.',
 'Vrai : ses trois côtés et ses trois angles sont égaux.',
 'Il n’est pas isocèle : 3, 4 et 5 sont tous différents.',
 'Dessin attendu avec deux côtés marqués de la même manière.',
 'Isocèle, car deux côtés mesurent 40 cm.',
 'Réponse possible : un triangle rectangle isocèle avec deux côtés perpendiculaires de même longueur.',
 'Les côtés renseignent sur équilatéral/isocèle et les angles sur rectangle ; les deux observations évitent une classification fausse.'
]

bank['U5-L03']['prototype_exercises']=[
 'Calcule l’aire d’un rectangle de 9 cm sur 4 cm.',
 'Calcule l’aire d’un carré de côté 6 cm.',
 'Un rectangle a une aire de 35 cm² et une longueur de 7 cm. Trouve sa largeur.',
 'Complète la formule : aire du rectangle = … × … .',
 'Sur un quadrillage, un rectangle couvre 6 lignes de 5 carreaux. Quelle est son aire en carreaux unités ?',
 'Compare l’aire d’un rectangle 8 cm × 3 cm et celle d’un carré de côté 5 cm.',
 'Vrai ou faux : un rectangle de 10 cm × 2 cm a la même aire qu’un carré de côté 5 cm. Justifie.',
 'Corrige l’erreur : « L’aire d’un rectangle de 7 cm × 4 cm est 22 cm² car 7 + 4 + 7 + 4 = 22. »',
 'Une natte rectangulaire mesure 3 m sur 2 m. Quelle surface couvre-t-elle ?',
 'Construis sur quadrillage deux rectangles différents ayant chacun une aire de 12 carreaux unités.',
 'Recherche : donne deux rectangles de dimensions entières ayant une aire de 24 cm².',
 'Explique la différence entre calculer le périmètre et calculer l’aire d’un rectangle.'
]
bank['U5-L03']['prototype_corrections']=[
 '36 cm².', '36 cm².', '5 cm.',
 'longueur × largeur.', '30 carreaux unités.',
 '8 × 3 = 24 cm² ; 5 × 5 = 25 cm² ; le carré a 1 cm² de plus.',
 'Faux : 10 × 2 = 20 cm² et 5 × 5 = 25 cm².',
 '7 × 4 = 28 cm² ; la somme 22 cm correspond à un calcul de périmètre faux ici.',
 '3 × 2 = 6 m².',
 'Réponses possibles : 3 × 4 et 2 × 6.',
 'Réponses possibles : 1 × 24, 2 × 12, 3 × 8 ou 4 × 6.',
 'Le périmètre mesure le contour et s’exprime en unités de longueur ; l’aire mesure la surface et s’exprime en unités carrées.'
]
p.write_text(json.dumps(bank,ensure_ascii=False,indent=2),encoding='utf8')
print('Banque prototype : 3 séances × 12 exercices')
