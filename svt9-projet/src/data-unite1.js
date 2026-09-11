const {makeTopic}=require('./topic-factory');
const U={num:'I',titre:'Alimentation de l’homme',ras:'Résultat d’apprentissage spécifique du PE T9',valeurs:'Responsabilité et autonomie',topics:[
makeTopic('ration','Ration alimentaire et groupes d’aliments','Alimentation de l’homme',0),
makeTopic('ration','Glucides, lipides et protéines','Alimentation de l’homme',1),
makeTopic('nutriments','Vitamines, sels minéraux et eau','Alimentation de l’homme',2),
makeTopic('nutriments','Valeur énergétique des nutriments','Alimentation de l’homme',3),
makeTopic('energie','Métabolisme et besoins énergétiques','Alimentation de l’homme',4),
makeTopic('energie','Calculer les besoins énergétiques','Alimentation de l’homme',5),
makeTopic('menu','Construire un menu varié','Alimentation de l’homme',6),
makeTopic('menu','Importance de l’équilibre alimentaire','Alimentation de l’homme',7),
makeTopic('malnutrition','Malnutrition aiguë et carences','Alimentation de l’homme',8),
makeTopic('malnutrition','Surpoids, obésité et menus d’appoint','Alimentation de l’homme',9),
]};module.exports=U;