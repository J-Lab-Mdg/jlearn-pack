const data=require('./data_all');
const texts=data.map(d=>{
 const ordinal=String(d.session);
 const part=d.part==='Première heure'?' première heure':d.part==='Seconde heure'?' seconde heure':'';
 const source=d.id==='s01'?d.practice.trace:(d.practice.trace||d.practice.consigne);
 const text=`Arts, séance ${ordinal}${part}. ${d.domain}. ${d.title}. ${d.observe.phrase} ${source}`.replace(/\s+/g,' ').trim();
 return {id:d.id,session:d.session,domain:d.domain,text};
});
if(texts.length!==36||new Set(texts.map(x=>x.id)).size!==36)throw Error('Il faut exactement 36 textes distincts');
for(const x of texts)if(x.text.length>1500)throw Error(`${x.id}: ${x.text.length} caractères`);
module.exports=texts;
