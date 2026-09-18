const fs = require('fs');
const path = require('path');

const projectDir = __dirname;
const publicDir = path.join(projectDir, 'public');
const publicGalleryDir = path.join(publicDir, 'gallery');

if (!fs.existsSync(publicGalleryDir)) {
  fs.mkdirSync(publicGalleryDir, { recursive: true });
}

// 1. Copy logo.png
const srcLogo = path.join(projectDir, 'logo.png');
const destLogo = path.join(publicDir, 'logo.png');
if (fs.existsSync(srcLogo)) {
  fs.copyFileSync(srcLogo, destLogo);
  console.log('Copied logo.png to public/logo.png');
}

// 2. Copy herosection.png
const srcHero = path.join(projectDir, 'herosection.png');
const destHero = path.join(publicDir, 'herosection.png');
if (fs.existsSync(srcHero)) {
  fs.copyFileSync(srcHero, destHero);
  console.log('Copied herosection.png to public/herosection.png');
}

// 3. Copy Gallery photos
const srcGallery = path.join(projectDir, 'GALLERY');
if (fs.existsSync(srcGallery)) {
  const files = fs.readdirSync(srcGallery);
  files.forEach((file) => {
    if (file.toLowerCase().endsWith('.jpg') || file.toLowerCase().endsWith('.jpeg') || file.toLowerCase().endsWith('.png')) {
      const srcFile = path.join(srcGallery, file);
      const destFile = path.join(publicGalleryDir, file);
      fs.copyFileSync(srcFile, destFile);
    }
  });
  console.log(`Copied ${files.length} gallery photos to public/gallery/`);
}
