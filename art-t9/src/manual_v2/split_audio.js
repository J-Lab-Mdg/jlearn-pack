const fs=require('fs'), path=require('path'), cp=require('child_process');
const ffmpeg='/home/user/.venv/lib/python3.11/site-packages/imageio_ffmpeg/binaries/ffmpeg-linux-x86_64-v9.0.2';
const root=path.join(__dirname,'../../assets/manual/audio');
const batches=require('./audio_batches.json');
function silences(file,d){
  const r=cp.spawnSync(ffmpeg,['-hide_banner','-i',file,'-af',`silencedetect=noise=-35dB:d=${d}`,'-f','null','-'],{encoding:'utf8'});
  const log=r.stderr||''; const starts=[...log.matchAll(/silence_start: ([\d.]+)/g)].map(m=>+m[1]);
  const ends=[...log.matchAll(/silence_end: ([\d.]+)/g)].map(m=>+m[1]);
  return starts.map((s,i)=>({s,e:ends[i]??s,d:(ends[i]??s)-s}));
}
function duration(file){ const r=cp.spawnSync(ffmpeg,['-hide_banner','-i',file],{encoding:'utf8'}); const m=(r.stderr||'').match(/Duration: (\d+):(\d+):([\d.]+)/); return m?+m[1]*3600+ +m[2]*60+ +m[3]:0; }
const report=[];
for(const b of batches){
  const input=path.join(root,b.name+'.mp3'); if(!fs.existsSync(input)) throw new Error('Absent '+input);
  const total=duration(input); const sil=silences(input,0.18).filter(x=>x.d>=0.18);
  const expected=b.segments.map(s=>s.length/b.text.length*total);
  const targets=[expected[0],expected[0]+expected[1]];
  const chosen=[];
  for(const target of targets){
    const candidates=sil.filter(x=>Math.abs((x.s+x.e)/2-target)<=5 && !chosen.some(c=>Math.abs((c.s+c.e)/2-(x.s+x.e)/2)<2));
    if(!candidates.length) throw new Error('Pas de silence proche '+b.name+' cible '+target);
    candidates.sort((a,b)=>(b.d-0.3*Math.abs((b.s+b.e)/2-target))-(a.d-0.3*Math.abs((a.s+a.e)/2-target)));
    chosen.push(candidates[0]);
  }
  const cuts=[0,...chosen.map(x=>(x.s+x.e)/2),total];
  for(let i=0;i<3;i++){
    const out=path.join(root,b.ids[i]+'.mp3'); const start=cuts[i], end=cuts[i+1];
    cp.spawnSync(ffmpeg,['-y','-hide_banner','-loglevel','error','-ss',String(start),'-to',String(end),'-i',input,'-c:a','libmp3lame','-q:a','4',out],{stdio:'inherit'});
    const d=duration(out); report.push({id:b.ids[i],batch:b.name,start:+start.toFixed(2),end:+end.toFixed(2),duration:+d.toFixed(2),expected:+expected[i].toFixed(2),ratio:+(d/expected[i]).toFixed(2)});
  }
}
fs.writeFileSync(path.join(__dirname,'audio_split_report.json'),JSON.stringify(report,null,2));
console.table(report);
const bad=report.filter(r=>r.ratio<0.65||r.ratio>1.45||r.duration<8);
if(bad.length){ console.error('Découpe à vérifier',bad); process.exitCode=2; } else console.log('Découpe audio : 30 segments cohérents.');
