const {makeTopic}=require('./topic-factory');
const U={num:'III',titre:'Santé et bien-être',ras:'Résultat d’apprentissage spécifique du PE T9',valeurs:'Responsabilité et autonomie',topics:[
makeTopic('nerveux','Organisation du système nerveux','Santé et bien-être',0),
makeTopic('nerveux','Rôles des centres nerveux et des nerfs','Santé et bien-être',1),
makeTopic('reflexe','Mouvement réflexe inné','Santé et bien-être',2),
makeTopic('reflexe','Mouvement réflexe acquis','Santé et bien-être',3),
makeTopic('reflexe','Mouvement volontaire','Santé et bien-être',4),
makeTopic('reflexe','Arc réflexe et trajet de l’influx','Santé et bien-être',5),
makeTopic('psycho','Catégories de substances psychoactives','Santé et bien-être',6),
makeTopic('psycho','Effets sur l’organisme et la vie sociale','Santé et bien-être',7),
makeTopic('psycho','Prévention et mini-projet','Santé et bien-être',8),
]};module.exports=U;