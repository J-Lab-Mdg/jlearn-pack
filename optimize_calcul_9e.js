// optimize_calcul_9e.js - Optimizes images inside Manuel_Calcul_9e_JLearn.docx
const AdmZip = require('adm-zip');
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function optimizeDocxImages(filePath) {
  console.log("Loading " + filePath + "...");
  const fileBuffer = fs.readFileSync(filePath);
  const zip = new AdmZip(fileBuffer);
  const entries = zip.getEntries();

  let optimizedCount = 0;
  let originalMediaBytes = 0;
  let newMediaBytes = 0;

  for (const entry of entries) {
    if (entry.entryName.startsWith('word/media/') && !entry.isDirectory) {
      const origBuffer = entry.getData();
      const origSize = origBuffer.length;
      originalMediaBytes += origSize;

      // Only optimize if image is > 50 KB
      if (origSize > 50 * 1024) {
        try {
          const metadata = await sharp(origBuffer).metadata();
          let targetWidth = metadata.width;
          if (metadata.width > 1100) {
            targetWidth = 1100;
          }

          let newBuffer;
          if (metadata.format === 'png') {
            newBuffer = await sharp(origBuffer)
              .resize({ width: targetWidth, withoutEnlargement: true })
              .png({ quality: 80, compressionLevel: 9 })
              .toBuffer();
          } else if (metadata.format === 'jpeg' || metadata.format === 'jpg') {
            newBuffer = await sharp(origBuffer)
              .resize({ width: targetWidth, withoutEnlargement: true })
              .jpeg({ quality: 80 })
              .toBuffer();
          } else {
            newBuffer = origBuffer;
          }

          if (newBuffer.length < origSize) {
            zip.updateFile(entry.entryName, newBuffer);
            newMediaBytes += newBuffer.length;
            optimizedCount++;
            console.log(`  [OK] ${path.basename(entry.entryName)} (${metadata.width}x${metadata.height}) : ${Math.round(origSize/1024)} Ko -> ${Math.round(newBuffer.length/1024)} Ko`);
          } else {
            newMediaBytes += origSize;
          }
        } catch (err) {
          console.log(`  [SKIP] ${entry.entryName}:`, err.message);
          newMediaBytes += origSize;
        }
      } else {
        newMediaBytes += origSize;
      }
    }
  }

  console.log(`\nImages optimisées : ${optimizedCount}`);
  console.log(`Poids initial des médias : ${Math.round(originalMediaBytes / 1024)} Ko`);
  console.log(`Nouveau poids des médias : ${Math.round(newMediaBytes / 1024)} Ko`);
  console.log(`Gain d'espace : ${Math.round((originalMediaBytes - newMediaBytes) / 1024)} Ko`);

  const outputBuffer = zip.toBuffer();
  fs.writeFileSync(filePath, outputBuffer);
  console.log(`Fichier final enregistré : ${filePath} (${Math.round(outputBuffer.length / 1024)} Ko)`);
}

optimizeDocxImages('Manuel_Calcul_9e_JLearn.docx').catch(err => {
  console.error("Erreur lors de l'optimisation :", err);
});
