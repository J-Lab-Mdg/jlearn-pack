"""Construit les métadonnées éditoriales PE/PS utilisées par la version complète."""
from pathlib import Path
import json
ROOT=Path(__file__).resolve().parents[1]
inv=json.loads((ROOT/'inventaire_lecons.json').read_text(encoding='utf8'))
bank=json.loads((ROOT/'src/content_bank.json').read_text(encoding='utf8'))

PS_NOTES={
'U1-L01':'L’ancien programme scolaire développe aussi la lecture et l’écriture de nombres au-delà de 100 000, jusqu’au million et au milliard. Cette extension n’est pas exigible dans le PE T4 ; elle peut servir de support documentaire.',
'U1-L02':'L’ancien programme scolaire compare aussi des nombres jusqu’au million et au milliard. Dans le PE T4, le périmètre obligatoire reste limité à 100 000.',
'U1-L03':'L’ancien programme scolaire prolonge la composition et la décomposition au-delà de 100 000. Cette extension est documentaire et ne remplace pas le contenu PE.',
'U2-L03':'L’ancien programme scolaire travaille aussi la division par un chiffre. Le PE T4 demande principalement la division par un diviseur de deux ou trois chiffres ; la division par un chiffre est conservée comme prérequis utile.',
'U4-L08':'L’ancien programme scolaire développe le volume du cube et du parallélépipède rectangle. Le PE T4 demande ici l’identification des propriétés des solides ; le volume est un complément PS.',
'U4-L09':'La fabrication détaillée de patrons et d’objets en carton est mobilisée comme support de construction. Les développements de volume de l’ancien PS restent complémentaires.',
'U5-L06':'L’ancien programme scolaire traite également des conversions de masse et de capacité. La présente leçon principale reste limitée aux longueurs, surfaces et unités agraires du PE T4.',
'U5-L07':'L’ancien programme scolaire propose des problèmes de temps plus étendus. Le PE T4 retient la lecture et la conversion des unités de temps.',
'U5-L08':'Les problèmes de masse, capacité et volume de l’ancien programme scolaire sont conservés dans l’annexe documentaire ; cette séance principale consolide les mesures prévues par le PE T4.'
}
ANNEXES=[
('PS-A01','Droite, demi-droite et segment de droite'),
('PS-A02','Mesures de masse'),
('PS-A03','Multiplication et division des nombres décimaux'),
('PS-A04','Prix d’achat, frais et prix de revient'),
('PS-A05','Capacités : litre et sous-multiples'),
('PS-A06','Prix de vente, bénéfice et perte'),
('PS-A07','Capacités : multiples du litre'),
('PS-A08','Problèmes de capacité'),
('PS-A09','Budget familial'),
('PS-A10','Proportionnalité'),
('PS-A11','Épargne et placement'),
('PS-A12','Partages inégaux'),
('PS-A13','Volume, capacité et masse'),
('PS-A14','Droites parallèles, perpendiculaires et sécantes'),
('PS-A15','Nombres au-delà de 100 000 — extension jusqu’au milliard'),
]
UNIT_STYLE={
'Nombre':('Classement et représentation','Toujours placer les chiffres de droite à gauche dans le tableau de numération ; une classe incomplète conserve ses zéros.'),
'Opération':('Calcul et vérification','Choisir l’opération, poser les nombres selon leur valeur de position, calculer puis vérifier le résultat.'),
'Algèbre':('Régularité et relation','Observer plusieurs termes, formuler la règle, puis vérifier cette règle sur un autre terme.'),
'Géométrie':('Propriété et construction','Observer les côtés, les angles ou les éléments caractéristiques, puis justifier la propriété reconnue.'),
'Mesure':('Unité, formule et résultat','Mettre les mesures dans la même unité, choisir la formule adaptée et écrire l’unité du résultat.'),
'Traitement de données':('Collecte, organisation et interprétation','Recueillir les réponses, les compter sans doublon, organiser les résultats puis conclure sans inventer de cause.')
}
def formula(title):
 t=title.lower()
 if 'aire du rectangle' in t: return 'A = L × l'
 if 'aire du carré' in t: return 'A = c × c'
 if 'aire' in t and 'parallélogramme' in t: return 'A = base × hauteur'
 if 'trapèze' in t: return 'A = (grande base + petite base) × hauteur ÷ 2'
 if 'triangles et du losange' in t: return 'A triangle = (base × hauteur) ÷ 2 ; A losange = (D × d) ÷ 2'
 if 'périmètre' in t: return 'P = somme des longueurs des côtés'
 if 'multiplication' in t: return 'Produit = multiplicande × multiplicateur'
 if 'division' in t: return 'Dividende = diviseur × quotient + reste'
 if 'fractions de même' in t: return 'a/b + c/b = (a + c)/b'
 if 'nombres décimaux' in t and ('additionner' in t or 'soustraire' in t): return 'Aligner les virgules avant de calculer.'
 if 'multiplier et diviser mentalement' in t: return '× 10, × 100, × 1 000 : les chiffres se décalent vers la gauche.'
 if 'égalité' in t: return 'Les deux membres d’une égalité ont la même valeur.'
 if 'angle' in t: return 'Angle droit = 90° ; angle plat = 180°.'
 if 'cercle' in t: return 'd = 2 × r'
 if 'surface' in t: return 'Aire = nombre d’unités carrées couvertes.'
 if 'temps' in t: return '1 h = 60 min ; 1 min = 60 s.'
 if 'effectifs' in t: return 'Effectif = nombre de fois où une réponse apparaît.'
 return ''
style={}
for unit in inv['unites']:
 unit_name=unit['nom']
 sub, attention=UNIT_STYLE[unit_name]
 for lesson in unit['lecons']:
  d=bank[lesson['id']]
  style[lesson['id']]={
   'intro': lesson['activite'],
   'section_title': lesson['titre'],
   'section_text': ' '.join(d['retain']),
   'example': d['example'],
   'formula': formula(lesson['titre']),
   'method_title': f'{sub} — {lesson["titre"]}',
   'method_steps':[f'Lire la consigne et repérer les données de « {lesson["titre"]} ».', f'Utiliser la représentation ou la propriété indiquée : {d["retain"][0]}', f'Vérifier le résultat avec {d["retain"][1] if len(d["retain"])>1 else "une représentation ou un calcul inverse"}.'],
   'attention': attention,
   'retain': [d['retain'][0], d['retain'][1] if len(d['retain'])>1 else d['example'], d['example'], attention],
   'ps_note': PS_NOTES.get(lesson['id'],'')
  }
out={'lessons':style,'annexes':ANNEXES}
(ROOT/'src/pe_ps_style_bank.json').write_text(json.dumps(out,ensure_ascii=False,indent=2),encoding='utf8')
print('Style PE/PS généré pour',len(style),'leçons ; annexes',len(ANNEXES))
