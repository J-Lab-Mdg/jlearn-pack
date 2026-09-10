const { makeTopic } = require('./topic-factory');
const U={num:'III',titre:'Géologie',ras:'Corréler les propriétés et les modes de formation des roches à leurs utilisations',valeurs:'Responsabilité, démarche scientifique',topics:[
  makeTopic('rocks','Identifier une roche et ses propriétés','Géologie',0),
  makeTopic('magmatique','Les roches magmatiques : origine','Géologie',1),
  makeTopic('magmatique','Granite, basalte et refroidissement','Géologie',2),
  makeTopic('sedimentaire','Les roches sédimentaires','Géologie',3),
  makeTopic('sedimentaire','Érosion, transport et sédimentation','Géologie',4),
  makeTopic('metamorphique','Les roches métamorphiques','Géologie',5),
  makeTopic('metamorphique','Pression, température et transformation','Géologie',6),
  makeTopic('cycle','Le cycle des roches','Géologie',7),
  makeTopic('cycle','Comparer les trois groupes de roches','Géologie',8),
  makeTopic('usages','Propriétés et utilisations','Géologie',9),
  makeTopic('usages','Les roches dans la construction et l’art','Géologie',10),
  makeTopic('mad','Collection de roches locales','Géologie',11),
]};
module.exports=U;