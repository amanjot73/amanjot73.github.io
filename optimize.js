import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const inputPath = path.join(__dirname, 'src', 'assets', 'profile.png');
const outputPath = path.join(__dirname, 'src', 'assets', 'profile.webp');

async function optimizeImage() {
  try {
    await sharp(inputPath)
      .resize(800, 800, {
        fit: sharp.fit.inside,
        withoutEnlargement: true
      })
      .webp({ quality: 80 })
      .toFile(outputPath);
    
    console.log('Image optimized successfully!');
    // Delete the original huge file
    fs.unlinkSync(inputPath);
    console.log('Original image deleted.');
  } catch (error) {
    console.error('Error optimizing image:', error);
  }
}

optimizeImage();
