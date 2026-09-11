function fig(file,legende){return {file,legende,place:'lecon'};}
const F={ration:'gen/ration-alimentaire.jpg',mal:'gen/malnutrition.jpg',plante:'gen/besoins-plante.jpg',protection:'gen/protection-plantes.jpg',elevage:'gen/elevage-madagascar.jpg',nerveux:'gen/systeme-nerveux.jpg',reflexe:'gen/arc-reflexe.jpg',psycho:'gen/substances-psychoactives.jpg',sante:'gen/sante-femmes.jpg',gemme:'gen/pierres-gemmes-madagascar.jpg'};
const L={ration:'Ration alimentaire et menu équilibré.',mal:'Formes de malnutrition et prévention.',plante:'Besoins et soins des plantes locales.',protection:'Protection contre les bio-agresseurs.',elevage:'Techniques d’élevage à Madagascar.',nerveux:'Organisation du système nerveux.',reflexe:'Arc réflexe et réactions comportementales.',psycho:'Substances psychoactives et prévention.',sante:'Prévention et soins de santé reproductive.',gemme:'Pierres gemmes de Madagascar.'};
const map={};const add=(u,arr)=>arr.forEach((k,i)=>map[`${u}:${i}`]=[fig(F[k],L[k])]);
add('I',['ration','ration','ration','ration','ration','ration','ration','ration','mal','mal']);
add('II',['plante','plante','plante','protection','protection','protection','elevage','elevage','elevage','elevage']);
add('III',['nerveux','nerveux','reflexe','reflexe','reflexe','reflexe','psycho','psycho','psycho']);
add('IV',['sante','sante','sante','sante','sante','sante']);
add('V',['gemme','gemme','gemme','gemme','gemme','gemme']);
const REVISION_IMAGES={I:fig(F.ration,'Bilan de l’alimentation et de la malnutrition.'),II:fig(F.plante,'Bilan des plantes et de l’élevage.'),III:fig(F.nerveux,'Bilan du système nerveux et des substances psychoactives.'),IV:fig(F.sante,'Bilan de la prévention et de la santé reproductive.'),V:fig(F.gemme,'Bilan des pierres gemmes de Madagascar.')};
const EXAM_IMAGES={I:[REVISION_IMAGES.I],II:[REVISION_IMAGES.II],III:[REVISION_IMAGES.III],IV:[REVISION_IMAGES.IV],V:[REVISION_IMAGES.V]};
const ANNEXE_IMAGES=[REVISION_IMAGES.V];
function apply(n,t){t.forEach((x,i)=>{if(map[`${n}:${i}`]){x.images=map[`${n}:${i}`];x.exoImage=x.images[0];x.corrigeImage=x.images[0];}});return t;}
module.exports={IMG:map,REVISION_IMAGES,EXAM_IMAGES,ANNEXE_IMAGES,apply};
