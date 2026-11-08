const fs=require('fs'),path=require('path'),sharp=require('sharp'),jsQR=require('jsqr');
const dir=path.join(__dirname,'../assets/qr');
const ids=JSON.parse(fs.readFileSync(path.join(__dirname,'../audio/drive_state.json'),'utf8'));
async function decode(file,px){const {data,info}=await sharp(file).resize(px,px,{fit:'fill'}).ensureAlpha().raw().toBuffer({resolveWithObject:true});const r=jsQR(new Uint8ClampedArray(data),info.width,info.height);return r?.data||null;}
(async()=>{
 const problems=[];let ok=0;
 for(const [id,item] of Object.entries(ids.files||{})){
  const url=typeof item==='string'?`https://drive.google.com/uc?export=download&id=${item}`:item.url;
  const f=path.join(dir,`${id}_audio.png`);const got=await decode(f,80);
  if(got===url)ok++;else problems.push(`${id}: ${got?'mauvaise URL':'non décodé à 80 px'}`);
 }
 if(ids.zip_url){const got=await decode(path.join(dir,'audio_zip.png'),130);if(got!==ids.zip_url)problems.push('QR ZIP non décodé ou mauvaise URL');}
 if(problems.length){console.error('FAIL',problems.join('\n'));process.exit(1);}
 console.log(`PASS — ${ok} QR audio lisibles à 80 px${ids.zip_url?' + QR ZIP à 130 px':''}.`);
})().catch(e=>{console.error(e);process.exit(1)});
