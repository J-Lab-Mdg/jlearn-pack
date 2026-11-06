// Décodage réel des QR assets utilisés par le manuel : 36 audios Drive + ZIP + dossier + officiel.
const fs=require('fs'),path=require('path'),sharp=require('sharp'),jsQR=require('jsqr');
const {parts}=require('./curriculum');
const drive=require('./drive_audio.json');
const A=path.join(__dirname,'../../assets/manual/qr');
const OFFICIAL='https://web.facebook.com/profile.php?id=61575599505051';
const audioUrlFor=id=>drive.individual_url_template.replace('{id}',drive.files[id]);
async function decode(file){const {data,info}=await sharp(file).ensureAlpha().raw().toBuffer({resolveWithObject:true});const r=jsQR(new Uint8ClampedArray(data),info.width,info.height);return r?r.data:null;}
(async()=>{const errors=[];let ok=0;const targets=[];
 for(const p of parts)targets.push([`${p.id}_audio.png`,audioUrlFor(p.id)]);
 targets.push(['audio_zip.png',drive.zip_url],['audio_folder.png',drive.folder_url],['official_jlearn.png',OFFICIAL]);
 for(const [name,expected] of targets){const file=path.join(A,name);if(!fs.existsSync(file)){errors.push(name+' absent');continue;}const got=await decode(file);if(got!==expected)errors.push(`${name}: décodé=${got} attendu=${expected}`);else ok++;}
 console.log(JSON.stringify({checked:targets.length,ok,errors},null,2));if(errors.length)process.exit(1);console.log('VALIDATION QR : OK');})().catch(e=>{console.error(e);process.exit(1);});
