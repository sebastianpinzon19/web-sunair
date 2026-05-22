const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const folders = [
  path.join(__dirname, '..', 'public', 'images'),
  path.join(__dirname, '..', 'warranty-system', 'public', 'images'),
];

const exts = ['.jpg', '.jpeg', '.png'];

async function processFile(filePath) {
  try {
    const { dir, name, ext } = path.parse(filePath);
    if (!exts.includes(ext.toLowerCase())) return;
    const webpPath = path.join(dir, `${name}.webp`);
    // Skip if webp already exists and is newer
    if (fs.existsSync(webpPath)) {
      const webpStat = fs.statSync(webpPath);
      const fileStat = fs.statSync(filePath);
      if (webpStat.mtimeMs >= fileStat.mtimeMs) return;
    }

    await sharp(filePath)
      .resize({ width: 1600, withoutEnlargement: true })
      .webp({ quality: 80 })
      .toFile(webpPath);
    console.log('Created', webpPath);
  } catch (err) {
    console.error('Error processing', filePath, err.message);
  }
}

async function walkAndProcess(folder) {
  if (!fs.existsSync(folder)) return;
  const items = fs.readdirSync(folder);
  for (const item of items) {
    const full = path.join(folder, item);
    const stat = fs.statSync(full);
    if (stat.isDirectory()) {
      await walkAndProcess(full);
    } else {
      await processFile(full);
    }
  }
}

(async () => {
  for (const f of folders) {
    await walkAndProcess(f);
  }
  console.log('Done');
})();
