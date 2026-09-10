const { makeTopic } = require('./topic-factory');
const U={num:'II',titre:'Reproduction humaine',ras:'Participer à la lutte contre les IST et le SIDA',valeurs:'Responsabilité, démarche scientifique',topics:[
  makeTopic('ist','Les IST : caractéristiques','Reproduction humaine',0),
  makeTopic('ist','Agents responsables des IST','Reproduction humaine',1),
  makeTopic('transmission','Modes de transmission','Reproduction humaine',2),
  makeTopic('transmission','Évolution et facteurs de risque','Reproduction humaine',3),
  makeTopic('prevention','Prévention individuelle','Reproduction humaine',4),
  makeTopic('prevention','Dépistage et traitement','Reproduction humaine',5),
  makeTopic('prevention','Prévention collective et lutte contre les discriminations','Reproduction humaine',6),
]};
module.exports=U;