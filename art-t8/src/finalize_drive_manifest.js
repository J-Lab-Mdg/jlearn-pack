const fs=require('fs'),path=require('path');
const statePath=process.argv[2]||path.join(__dirname,'../audio/drive_state.json');
const state=JSON.parse(fs.readFileSync(statePath,'utf8'));
const expected=['s01','s02','s03','s04','s05','s06a','s06b','s07','s08','s09','s10','s11','s12','s13','s14','s15','s16','s17a','s17b','s18','s19','s20','s21','s22','s23','s24','s25','s26','s27','s28a','s28b','s29','s30','s31','s32','s33'];
const missing=expected.filter(id=>!state.files?.[id]?.id||!state.files?.[id]?.url);
if(missing.length!==0||Object.keys(state.files||{}).length!==36||!state.zip_id||!state.zip_url)throw Error('Manifeste Drive incomplet: '+missing.join(', '));
const out={folder_id:state.folder_id,folder_url:state.folder_url,zip_id:state.zip_id,zip_url:state.zip_url,files:state.files};
const dest=path.join(__dirname,'drive_audio_t8.json');fs.writeFileSync(dest,JSON.stringify(out,null,2)+'\n');
console.log('Manifeste complet:',dest,'36 audios + ZIP');
