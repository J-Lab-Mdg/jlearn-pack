"""Contenus spécifiques du prototype, structurés comme les leçons-modèles lues dans PE RAPE/Ressources."""
from pathlib import Path
import json
p=Path(__file__).parent/'content_bank.json'
b=json.loads(p.read_text(encoding='utf8'))
b['U1-L01']['prototype_model']={
 'intro':'Pour lire et écrire un nombre, on peut s’aider du tableau de numération. On commence par placer les chiffres en partant de la droite, du chiffre des unités simples.',
 'table_title':'Tableau de numération jusqu’à 100 000',
 'table_headers':['Dizaines de mille','Milliers','Centaines','Dizaines','Unités'],
 'table_rows':[['3','4','2','0','6'],['30 000','4 000','200','0','6']],
 'examples':['Pour lire 34 206, on lit « trente-quatre-mille-deux-cent-six ». Le zéro occupe la place des dizaines.', 'Pour écrire « soixante-dix-mille-quatre-cent-cinq » en chiffres, on place les chiffres dans le tableau, puis on ajoute l’espace : 70 405.'],
 'rules':['Tous les mots du nombre sont séparés par un tiret.', 'Mille est invariable : quatre-mille, vingt-mille.', 'Vingt et cent prennent un s lorsqu’ils terminent le nombre et indiquent plusieurs vingtaines ou centaines : quatre-vingts, trois-cents ; mais quatre-vingt-deux et trois-cent-deux.', 'Un nombre s’écrit avec un espace entre les classes de trois chiffres.'],
 'distinction':'Le chiffre des milliers de 34 206 est 4. Le nombre de milliers est 34, car 34 206 contient 34 milliers et 206 unités.',
 'attention':'Ne confonds pas le chiffre d’une position avec le nombre total d’unités, de dizaines ou de milliers.',
 'method':['Écris ou repère les classes en partant de la droite.', 'Place les chiffres dans les colonnes correspondantes.', 'Lis ou écris chaque classe sans oublier les zéros qui gardent une place.']
}
b['U4-L03']['prototype_model']={
 'intro':'Pour classer un triangle, on observe ses côtés et ses angles. Un même triangle peut avoir deux propriétés : par exemple, il peut être à la fois isocèle et rectangle.',
 'table_title':'Propriétés des triangles',
 'table_headers':['Triangle','Ce que j’observe','Propriété'],
 'table_rows':[['Équilatéral','3 côtés de même longueur','AB = BC = CA'],['Isocèle','2 côtés de même longueur','Deux côtés sont égaux'],['Rectangle','1 angle droit','Un angle mesure 90°']],
 'examples':['Un triangle de côtés 5 cm, 5 cm et 8 cm est isocèle : deux côtés sont égaux.', 'Un triangle de côtés 3 cm, 4 cm et 5 cm peut être rectangle ; on vérifie la présence de l’angle droit dans la figure.'],
 'rules':['Pour reconnaître un triangle équilatéral, compare les trois côtés.', 'Pour reconnaître un triangle isocèle, cherche deux côtés de même longueur.', 'Pour reconnaître un triangle rectangle, cherche un angle droit à l’aide de l’équerre.'],
 'distinction':'Le mot « triangle » désigne la famille. Les mots équilatéral, isocèle et rectangle précisent la propriété observée.',
 'attention':'Ne dis pas qu’un triangle est isocèle seulement parce qu’il a trois côtés : il faut que deux côtés aient la même longueur.',
 'method':['Mesure ou compare les côtés.', 'Observe les angles avec l’équerre.', 'Justifie le classement avec une propriété précise.']
}
b['U5-L03']['prototype_model']={
 'intro':'L’aire mesure la surface intérieure d’une figure. Pour la calculer, on utilise des unités carrées et une formule adaptée à la figure.',
 'table_title':'Formules de calcul de l’aire',
 'table_headers':['Figure','Formule','Exemple'],
 'table_rows':[['Rectangle','Aire = longueur × largeur','9 × 4 = 36 cm²'],['Carré','Aire = côté × côté','6 × 6 = 36 cm²']],
 'examples':['Pour un rectangle de 9 cm sur 4 cm : A = 9 × 4 = 36 cm².', 'Pour un carré de côté 6 cm : A = 6 × 6 = 36 cm².', 'Si un rectangle a une aire de 35 cm² et une longueur de 7 cm, sa largeur est 35 ÷ 7 = 5 cm.'],
 'rules':['Les deux longueurs doivent être exprimées dans la même unité.', 'Une aire s’exprime en unité carrée : cm², m², dm².', 'Pour un carré, la longueur et la largeur sont égales : côté × côté.'],
 'distinction':'Le périmètre mesure le contour ; l’aire mesure la surface intérieure. Le périmètre s’exprime en cm ou en m, l’aire en cm² ou en m².',
 'attention':'Ne calcule pas l’aire en additionnant les côtés : une addition des côtés concerne le périmètre.',
 'method':['Repère la longueur et la largeur, ou le côté du carré.', 'Choisis la formule.', 'Effectue le calcul et écris l’unité carrée.']
}
p.write_text(json.dumps(b,ensure_ascii=False,indent=2),encoding='utf8')
print('Contenu modèle ajouté pour 3 leçons')
