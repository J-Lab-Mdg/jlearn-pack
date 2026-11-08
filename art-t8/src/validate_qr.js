// Contrôle des QR embarqués dans le lot pilote T8.
// Leçon du T9 : un QR de pied de page à 60 px ne décode plus (0/36) ; à 80 px, 36/36.
// Le lot pilote n'a pas de QR audio, mais il réutilise le QR du canal officiel : on le vérifie
// à la taille réellement imprimée, et on vérifie le seuil de 80 px pour le futur lot médias.
const fs = require('fs'), path = require('path'), sharp = require('sharp'), jsQR = require('jsqr');
const A9 = path.join(__dirname, '../../art-t9/assets');
const OFFICIAL_URL = 'https://web.facebook.com/profile.php?id=61575599505051';
async function decode(file, px) {
  const { data, info } = await sharp(file).resize(px, px, { fit: 'fill' }).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  const r = jsQR(new Uint8ClampedArray(data), info.width, info.height);
  return r ? r.data : null;
}
async function main() {
  const errors = [];
  const official = path.join(A9, 'manual/qr/official_jlearn.png');
  for (const px of [130, 110]) {
    const got = await decode(official, px);
    console.log(`QR officiel ${px}px :`, got || 'NON DÉCODÉ');
    if (got !== OFFICIAL_URL) errors.push(`QR officiel illisible à ${px}px`);
  }
  // Seuil retenu pour les QR audio du lot médias : 80 px, contrôlé sur un échantillon T9.
  let ok = 0, n = 0;
  for (const id of ['s01', 's07', 's14', 's19', 's25', 's33']) {
    const f = path.join(A9, 'manual/qr', `${id}_audio.png`);
    if (!fs.existsSync(f)) continue;
    n++; const got = await decode(f, 80);
    if (got) ok++; else errors.push(`QR audio T9 ${id} illisible à 80px`);
  }
  console.log(`Seuil 80px vérifié sur ${ok}/${n} QR audio T9 (gabarit du futur lot médias T8).`);
  if (errors.length) { console.error('ÉCHEC :\n' + errors.join('\n')); process.exit(1); }
  console.log('PASS — QR du lot pilote et seuil du gabarit audio.');
}
main().catch((e) => { console.error(e); process.exit(1); });
