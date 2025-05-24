import sharp from 'sharp';
import { promises as fs } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function generateFavicons() {
  const sizes = [16, 32, 96, 192, 512];
  const inputSvg = join(__dirname, '../public/icon.svg');
  
  try {
    const svgBuffer = await fs.readFile(inputSvg);
    
    for (const size of sizes) {
      const outputName = size === 16 || size === 32 
        ? `favicon-${size}x${size}.png`
        : size === 192 || size === 512
          ? `android-chrome-${size}x${size}.png`
          : `favicon.png`;
          
      await sharp(svgBuffer)
        .resize(size, size)
        .png()
        .toFile(join(__dirname, '../public/', outputName));
      
      console.log(`Generated ${outputName}`);
    }
    
    // Generate apple-touch-icon (180x180)
    await sharp(svgBuffer)
      .resize(180, 180)
      .png()
      .toFile(join(__dirname, '../public/apple-touch-icon.png'));
    
    console.log('Generated apple-touch-icon.png');
  } catch (error) {
    console.error('Error generating favicons:', error);
  }
}

generateFavicons(); 