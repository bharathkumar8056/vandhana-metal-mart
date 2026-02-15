// Node.js script to re-compress the last 3 images with better quality
// Run with: node recompress-last-images.js

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const assetsPath = path.join(__dirname, 'public', 'assets');

console.log('\n========================================');
console.log('  Re-compress Last 3 Images');
console.log('========================================\n');

// Check if sharp is installed
let sharpInstalled = false;
try {
  require.resolve('sharp');
  sharpInstalled = true;
} catch (e) {
  console.log('Installing sharp package...\\n');
  try {
    execSync('npm install sharp', { stdio: 'inherit' });
    sharpInstalled = true;
    console.log('\n✓ Sharp installed successfully\n');
  } catch (installError) {
    console.log('\n✗ Failed to install sharp');
    process.exit(1);
  }
}

const sharp = require('sharp');

// Files to re-compress
const filesToRecompress = ['vessel-46.jpg', 'vessel-47.jpg', 'vessel-48.jpg'];

console.log('Re-compressing last 3 images with better quality...\n');

(async () => {
  for (const file of filesToRecompress) {
    const filePath = path.join(assetsPath, file);
    const tempPath = path.join(assetsPath, `temp_${file}`);
    
    if (!fs.existsSync(filePath)) {
      console.log(`⚠ ${file} not found, skipping...`);
      continue;
    }
    
    try {
      const beforeSize = fs.statSync(filePath).size;
      
      // Re-compress with better quality settings
      await sharp(filePath)
        .jpeg({ 
          quality: 85,  // Higher quality
          progressive: true,
          mozjpeg: true  // Better compression algorithm
        })
        .resize(1000, 1000, { 
          fit: 'inside', 
          withoutEnlargement: true,
          kernel: sharp.kernel.lanczos3  // Better resizing algorithm
        })
        .toFile(tempPath);
      
      const afterSize = fs.statSync(tempPath).size;
      
      // Replace original with re-compressed
      fs.unlinkSync(filePath);
      fs.renameSync(tempPath, filePath);
      
      console.log(`✓ ${file}: ${(beforeSize/1024).toFixed(2)}KB → ${(afterSize/1024).toFixed(2)}KB`);
      
    } catch (error) {
      console.log(`✗ Error processing ${file}: ${error.message}`);
      // Clean up temp file if it exists
      if (fs.existsSync(tempPath)) {
        fs.unlinkSync(tempPath);
      }
    }
  }
  
  console.log('\n========================================');
  console.log('  ✓ Re-compression Complete!');
  console.log('========================================\n');
  console.log('The last 3 images now have better quality and should look sharper.\n');
})();

