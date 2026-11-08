const fs=require('fs'),path=require('path'),QR=require('qrcode');
const statePath=process.argv[2]||path.join(__dirname,'../audio/drive_state.json');
const state=JSON.parse(fs.readFileSync(statePath,'utf8'));
const dir=path.join(__dirname,'../assets/qr');fs.mkdirSync(dir,{recursive:true});
(async()=>{
 for(const [id,item] of Object.entries(state.files||{})){
  const url=typeof item==='string'?`https://drive.google.com/uc?export=download&id=${item}`:item.url;
  if(!url)throw Error('URL manquante: '+id);
  await QR.toFile(path.join(dir,`${id}_audio.png`),url,{width:360,margin:1,errorCorrectionLevel:'M'});
 }
 if(state.zip_url)await QR.toFile(path.join(dir,'audio_zip.png'),state.zip_url,{width:360,margin:1,errorCorrectionLevel:'M'});
 if(state.folder_url)await QR.toFile(path.join(dir,'audio_folder.png'),state.folder_url,{width:360,margin:1,errorCorrectionLevel:'M'});
 console.log('QR écrits:',Object.keys(state.files||{}).length,'audios',state.zip_url?'+ ZIP':'');
})().catch(e=>{console.error(e);process.exit(1)});
