const parts = [
  ...require('./data_dessin'), ...require('./data_sculpture'), ...require('./data_peinture'),
  ...require('./data_musique'), ...require('./data_danse'), ...require('./data_dramatique'),
].map(x => ({ ...x, audio: x.audio || `manual/audio/${x.id}.mp3` }))
 .sort((a,b)=>a.session-b.session || String(a.part||'').localeCompare(String(b.part||'')));
const domains = ['Dessin','Sculpture','Peinture','Musique','Danse','Art dramatique'];
const sessions = [];
for(let s=1;s<=33;s++) sessions.push({ session:s, parts:parts.filter(p=>p.session===s) });
function validate() {
  const errors=[];
  if(parts.length!==36) errors.push('36 parties attendues, trouvé '+parts.length);
  if(parts.reduce((s,x)=>s+x.minutes,0)!==3960) errors.push('Total minutes != 3960');
  for(const d of domains){ const ps=parts.filter(x=>x.domain===d); if(ps.reduce((s,x)=>s+x.minutes,0)!==660) errors.push(d+' != 660 min'); }
  for(const s of sessions){ if(s.parts.reduce((a,x)=>a+x.minutes,0)!==120) errors.push('Séance '+s.session+' != 120 min'); }
  const pivots=sessions.filter(s=>s.parts.length>1).map(s=>s.session); if(JSON.stringify(pivots)!==JSON.stringify([6,17,28])) errors.push('Charnières != 6,17,28');
  const ids=new Set(); for(const p of parts){ if(ids.has(p.id)) errors.push('id dupliqué '+p.id); ids.add(p.id); if(p.steps.length!==4) errors.push(p.id+' steps !=4'); if(p.practice.criteria.length<3) errors.push(p.id+' critères <3'); }
  if(errors.length) throw new Error(errors.join('\n'));
  return {parts:parts.length,sessions:sessions.length,hours:66,pivots};
}
module.exports={parts,domains,sessions,validate};
