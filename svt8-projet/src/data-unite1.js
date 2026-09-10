const { makeTopic } = require('./topic-factory');
const U={num:'I',titre:'Santé et bien-être',ras:'Analyser le fonctionnement des systèmes respiratoire et circulatoire et déterminer la compatibilité des groupes sanguins',valeurs:'Responsabilité, démarche scientifique',topics:[
  makeTopic('respiratoire','Le système respiratoire : organes','Santé et bien-être',0),
  makeTopic('respiratoire','Les mouvements respiratoires','Santé et bien-être',1),
  makeTopic('circulation','Les échanges gazeux dans les poumons','Santé et bien-être',2),
  makeTopic('circulation','Le cœur et les vaisseaux','Santé et bien-être',3),
  makeTopic('circulation','La circulation pulmonaire','Santé et bien-être',4),
  makeTopic('sang','La circulation générale','Santé et bien-être',5),
  makeTopic('sang','Le lien respiration-circulation','Santé et bien-être',6),
  makeTopic('abo','Maquette de circulation','Santé et bien-être',7),
  makeTopic('abo','Les constituants du sang','Santé et bien-être',8),
  makeTopic('sang','Les rôles des constituants du sang','Santé et bien-être',9),
  makeTopic('abo','Les groupes sanguins ABO','Santé et bien-être',10),
  makeTopic('abo','La compatibilité des groupes sanguins','Santé et bien-être',11),
]};
module.exports=U;