// Prépare 10 clips parlés, chacun contenant 3 consignes séparées par une pause.
// Les segments sont ensuite découpés aux silences longs par split_audio.js.
const fs = require('fs');
const path = require('path');
const all = [
 ...require('./data_dessin'), ...require('./data_sculpture'), ...require('./data_peinture'),
 ...require('./data_musique'), ...require('./data_danse'), ...require('./data_dramatique'),
].sort((a,b)=>a.session-b.session || String(a.part||'').localeCompare(String(b.part||'')));
const nums={1:'un',2:'deux',3:'trois',4:'quatre',5:'cinq',6:'six',7:'sept',8:'huit',9:'neuf',10:'dix',11:'onze',12:'douze',13:'treize',14:'quatorze',15:'quinze',16:'seize',17:'dix-sept',18:'dix-huit',19:'dix-neuf',20:'vingt',21:'vingt et un',22:'vingt-deux',23:'vingt-trois',24:'vingt-quatre',25:'vingt-cinq',26:'vingt-six',27:'vingt-sept',28:'vingt-huit',29:'vingt-neuf',30:'trente',31:'trente et un',32:'trente-deux',33:'trente-trois'};
const missing = all.filter(x=>!x.audio);
if (missing.length !== 30) throw new Error('Attendu 30 nouvelles consignes, trouvé '+missing.length);
const batches=[];
for(let i=0;i<missing.length;i+=3){
  const group=missing.slice(i,i+3);
  const segments=group.map(x=>{
    const part=x.part ? `, ${x.part.toLowerCase()}` : '';
    const title=x.title.replace(/ : /g, '. ').replace(/[«»]/g,'');
    const practice=x.practice.title.replace(/ : /g, '. ');
    const phrase=x.steps[0].phrase;
    return `Séance ${nums[x.session]}${part}. ${x.domain}. ${title}. ${practice}. ${phrase} ${x.practice.consigne}`;
  });
  batches.push({name:`consignes_batch_${String(i/3+1).padStart(2,'0')}`, ids:group.map(x=>x.id), segments, text:segments.join('\n\n')});
}
fs.mkdirSync(path.join(__dirname,'../../assets/manual/audio'),{recursive:true});
fs.writeFileSync(path.join(__dirname,'audio_batches.json'),JSON.stringify(batches,null,2));
console.log(batches.map(b=>`${b.name}: ${b.ids.join(', ')} (${b.text.length} caractères)`).join('\n'));
for(const b of batches){ console.log('\n--- '+b.name+' ---\n'+b.text); }
