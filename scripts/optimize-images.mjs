import imagemin from 'imagemin';
import imageminMozjpeg from 'imagemin-mozjpeg';
import imageminPngquant from 'imagemin-pngquant';
import imageminWebp from 'imagemin-webp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function optimizeImages() {
  console.log('🖼️  Starting image optimization...');
  
  const publicDir = path.join(__dirname, '..', 'public');
  const imagesDir = path.join(__dirname, '..', 'Images');
  const optimizedDir = path.join(publicDir, 'optimized');
  
  // Create optimized directory if it doesn't exist
  if (!fs.existsSync(optimizedDir)) {
    fs.mkdirSync(optimizedDir, { recursive: true });
  }
  
  try {
    // Optimize PNG files from public directory
    console.log('📸 Optimizing PNG files from public directory...');
    await imagemin([`${publicDir}/*.png`], {
      destination: optimizedDir,
      plugins: [
        imageminPngquant({
          quality: [0.6, 0.8],
          strip: true
        })
      ]
    });
    
    // Optimize PNG files from Images directory
    console.log('📸 Optimizing PNG files from Images directory...');
    await imagemin([`${imagesDir}/*.png`], {
      destination: optimizedDir,
      plugins: [
        imageminPngquant({
          quality: [0.6, 0.8],
          strip: true
        })
      ]
    });
    
    // Optimize JPG files from public directory
    console.log('📸 Optimizing JPG files from public directory...');
    await imagemin([`${publicDir}/*.{jpg,jpeg}`], {
      destination: optimizedDir,
      plugins: [
        imageminMozjpeg({
          quality: 85,
          progressive: true
        })
      ]
    });
    
    // Optimize JPG files from Images directory
    console.log('📸 Optimizing JPG files from Images directory...');
    await imagemin([`${imagesDir}/*.{jpg,jpeg}`], {
      destination: optimizedDir,
      plugins: [
        imageminMozjpeg({
          quality: 85,
          progressive: true
        })
      ]
    });
    
    // Create WebP versions from public directory
    console.log('🌐 Creating WebP versions from public directory...');
    await imagemin([`${publicDir}/*.{png,jpg,jpeg}`], {
      destination: path.join(optimizedDir, 'webp'),
      plugins: [
        imageminWebp({
          quality: 80,
          method: 6
        })
      ]
    });
    
    // Create WebP versions from Images directory
    console.log('🌐 Creating WebP versions from Images directory...');
    await imagemin([`${imagesDir}/*.{png,jpg,jpeg}`], {
      destination: path.join(optimizedDir, 'webp'),
      plugins: [
        imageminWebp({
          quality: 80,
          method: 6
        })
      ]
    });
    
    console.log('✅ Image optimization complete!');
    console.log(`Optimized images saved to: ${optimizedDir}`);
    
    // Show file size comparison for public directory
    console.log('\n📊 Public Directory Images:');
    const publicFiles = fs.readdirSync(publicDir).filter(file => 
      file.match(/\.(png|jpg|jpeg)$/i)
    );
    
    let publicOriginalSize = 0;
    let publicOptimizedSize = 0;
    
    publicFiles.forEach(file => {
      const originalPath = path.join(publicDir, file);
      const optimizedPath = path.join(optimizedDir, file);
      
      if (fs.existsSync(originalPath)) {
        publicOriginalSize += fs.statSync(originalPath).size;
      }
      if (fs.existsSync(optimizedPath)) {
        publicOptimizedSize += fs.statSync(optimizedPath).size;
      }
    });
    
    const publicSavings = publicOriginalSize > 0 ? ((publicOriginalSize - publicOptimizedSize) / publicOriginalSize * 100).toFixed(1) : 0;
    console.log(`Size reduction: ${(publicOriginalSize / 1024 / 1024).toFixed(2)}MB → ${(publicOptimizedSize / 1024 / 1024).toFixed(2)}MB (${publicSavings}% smaller)`);
    
    // Show file size comparison for Images directory
    console.log('\n📊 Images Directory:');
    const imageFiles = fs.readdirSync(imagesDir).filter(file => 
      file.match(/\.(png|jpg|jpeg)$/i)
    );
    
    let imagesOriginalSize = 0;
    let imagesOptimizedSize = 0;
    
    imageFiles.forEach(file => {
      const originalPath = path.join(imagesDir, file);
      const optimizedPath = path.join(optimizedDir, file);
      
      if (fs.existsSync(originalPath)) {
        imagesOriginalSize += fs.statSync(originalPath).size;
      }
      if (fs.existsSync(optimizedPath)) {
        imagesOptimizedSize += fs.statSync(optimizedPath).size;
      }
    });
    
    const imagesSavings = imagesOriginalSize > 0 ? ((imagesOriginalSize - imagesOptimizedSize) / imagesOriginalSize * 100).toFixed(1) : 0;
    console.log(`Size reduction: ${(imagesOriginalSize / 1024 / 1024).toFixed(2)}MB → ${(imagesOptimizedSize / 1024 / 1024).toFixed(2)}MB (${imagesSavings}% smaller)`);
    
    // Total savings
    const totalOriginalSize = publicOriginalSize + imagesOriginalSize;
    const totalOptimizedSize = publicOptimizedSize + imagesOptimizedSize;
    const totalSavings = totalOriginalSize > 0 ? ((totalOriginalSize - totalOptimizedSize) / totalOriginalSize * 100).toFixed(1) : 0;
    
    console.log('\n📊 Total:');
    console.log(`Size reduction: ${(totalOriginalSize / 1024 / 1024).toFixed(2)}MB → ${(totalOptimizedSize / 1024 / 1024).toFixed(2)}MB (${totalSavings}% smaller)`);
    
  } catch (error) {
    console.error('❌ Error optimizing images:', error);
  }
}

// Run the optimization
optimizeImages(); 