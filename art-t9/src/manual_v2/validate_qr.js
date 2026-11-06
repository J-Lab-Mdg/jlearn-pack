// Décodage réel des QR assets : sources + réduction numérique utilisée en pied de page.
// Ce test ne remplace pas un scan physique après impression ; il évite les QR trop petits.
const fs=require('fs'),path=require('path'),sharp=require('sharp'),jsQR=require('jsqr');
const {parts}=require('./curriculum');
const drive=require('./drive_audio.json');
const A=path.join(__dirname,'../../assets/manual/qr');
const OFFICIAL='https://web.facebook.com/profile.php?id=61575599505051';
const FOOTER_PX=80;
const audioUrlFor=id=>drive.individual_url_template.replace('{id}',drive.files[id]);
async function decode(file,size){
  let img=sharp(file);
  if(size) img=img.resize(size,size,{kernel:'lanczos3'});
  const {data,info}=await img.ensureAlpha().raw().toBuffer({resolveWithObject:true});
  const r=jsQR(new Uint8ClampedArray(data),info.width,info.height);
  return r?r.data:null;
}
(async()=>{
  const errors=[]; let sourceOk=0,footerOk=0;
  const targets=parts.map(p=>[`${p.id}_audio.png`,audioUrlFor(p.id)]);
  targets.push(['audio_zip.png',drive.zip_url],['audio_folder.png',drive.folder_url],['official_jlearn.png',OFFICIAL]);
  for(const [name,expected] of targets){
    const file=path.join(A,name);
    if(!fs.existsSync(file)){errors.push(name+' absent');continue;}
    const got=await decode(file);
    if(got!==expected) errors.push(`${name}: décodé=${got} attendu=${expected}`); else sourceOk++;
  }
  for(const p of parts){
    const file=path.join(A,`${p.id}_audio.png`);
    if(!fs.existsSync(file)) continue;
    const got=await decode(file,FOOTER_PX);
    const expected=audioUrlFor(p.id);
    if(got!==expected) errors.push(`pied de page ${p.id} réduit à ${FOOTER_PX}px: décodé=${got} attendu=${expected}`); else footerOk++;
  }
  const report={source_checked:targets.length,source_ok:sourceOk,footer_checked:parts.length,footer_ok:footerOk,footer_px:FOOTER_PX,checked:targets.length+parts.length,ok:sourceOk+footerOk,errors};
  console.log(JSON.stringify(report,null,2));
  if(errors.length) process.exit(1);
  console.log('VALIDATION QR : OK');
})().catch(e=>{console.error(e);process.exit(1);});
