import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function formatBytes(bytes) {
  if (bytes === 0) return '0 B';
  const k = 1024;
  const sizes = ['B', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

function checkImagePerformance() {
  console.log('🔍 Analyzing Image Performance...\n');
  
  const publicDir = path.join(__dirname, '..', 'public');
  const imagesDir = path.join(__dirname, '..', 'Images');
  const optimizedDir = path.join(publicDir, 'optimized');
  const webpDir = path.join(optimizedDir, 'webp');
  
  // Get all image files in public directory
  const publicImageFiles = fs.readdirSync(publicDir).filter(file => 
    file.match(/\.(png|jpg|jpeg|gif|webp)$/i) && 
    !file.includes('favicon') && 
    !file.includes('icon')
  );
  
  // Get all image files in Images directory
  const imagesImageFiles = fs.readdirSync(imagesDir).filter(file => 
    file.match(/\.(png|jpg|jpeg|gif|webp)$/i)
  );
  
  // Combine both sets of files with their source directories
  const allImageFiles = [
    ...publicImageFiles.map(file => ({ file, dir: 'public' })),
    ...imagesImageFiles.map(file => ({ file, dir: 'Images' }))
  ];
  
  let totalOriginalSize = 0;
  let totalOptimizedSize = 0;
  let optimizedCount = 0;
  let webpCount = 0;
  const recommendations = [];
  
  console.log('📊 Image Analysis Report\n');
  console.log('Directory'.padEnd(10) + 'File Name'.padEnd(40) + 'Original'.padEnd(12) + 'Optimized'.padEnd(12) + 'WebP'.padEnd(12) + 'Status');
  console.log('-'.repeat(90));
  
  allImageFiles.forEach(({ file, dir }) => {
    const sourceDir = dir === 'public' ? publicDir : imagesDir;
    const originalPath = path.join(sourceDir, file);
    const optimizedPath = path.join(optimizedDir, file);
    const webpName = file.replace(/\.(png|jpg|jpeg)$/i, '.webp');
    const webpPath = path.join(webpDir, webpName);
    
    let originalSize = 0;
    let optimizedSize = 0;
    let hasWebp = false;
    let status = '';
    
    if (fs.existsSync(originalPath)) {
      originalSize = fs.statSync(originalPath).size;
      totalOriginalSize += originalSize;
    }
    
    if (fs.existsSync(optimizedPath)) {
      optimizedSize = fs.statSync(optimizedPath).size;
      totalOptimizedSize += optimizedSize;
      optimizedCount++;
      status = '✅ Optimized';
    } else {
      status = '❌ Not optimized';
      recommendations.push(`Optimize ${dir}/${file} - current size: ${formatBytes(originalSize)}`);
    }
    
    if (fs.existsSync(webpPath)) {
      hasWebp = true;
      webpCount++;
    } else if (originalSize > 50000) { // Files larger than 50KB should have WebP
      recommendations.push(`Create WebP version of ${dir}/${file}`);
    }
    
    console.log(
      dir.padEnd(10) + 
      file.padEnd(40) + 
      formatBytes(originalSize).padEnd(12) + 
      formatBytes(optimizedSize).padEnd(12) + 
      (hasWebp ? '✅' : '❌').padEnd(12) + 
      status
    );
  });
  
  console.log('-'.repeat(90));
  console.log(`Total Original Size: ${formatBytes(totalOriginalSize)}`);
  console.log(`Total Optimized Size: ${formatBytes(totalOptimizedSize)}`);
  const savings = totalOriginalSize > 0 ? ((totalOriginalSize - totalOptimizedSize) / totalOriginalSize * 100) : 0;
  console.log(`Total Savings: ${formatBytes(totalOriginalSize - totalOptimizedSize)} (${savings.toFixed(1)}%)`);
  
  console.log(`\n📈 Optimization Status:`);
  console.log(`Images optimized: ${optimizedCount}/${allImageFiles.length}`);
  console.log(`WebP versions: ${webpCount}/${allImageFiles.length}`);
  
  // Performance score
  const optimizationScore = (optimizedCount / allImageFiles.length * 50) + (webpCount / allImageFiles.length * 50);
  console.log(`\n🎯 Performance Score: ${optimizationScore.toFixed(0)}/100`);
  
  if (optimizationScore < 80) {
    console.log('❌ Needs improvement');
  } else if (optimizationScore < 95) {
    console.log('⚠️  Good but can be better');
  } else {
    console.log('✅ Excellent optimization!');
  }
  
  // Recommendations
  if (recommendations.length > 0) {
    console.log(`\n💡 Recommendations:`);
    recommendations.forEach((rec, index) => {
      console.log(`${index + 1}. ${rec}`);
    });
    console.log(`\nRun 'npm run optimize-images' to fix these issues.`);
  }
  
  // Check for large unoptimized files
  const largeFiles = allImageFiles.filter(({ file, dir }) => {
    const filePath = path.join(dir === 'public' ? publicDir : imagesDir, file);
    const fileSize = fs.existsSync(filePath) ? fs.statSync(filePath).size : 0;
    return fileSize > 500000; // 500KB
  });
  
  if (largeFiles.length > 0) {
    console.log(`\n⚠️  Large files detected (>500KB):`);
    largeFiles.forEach(({ file, dir }) => {
      const filePath = path.join(dir === 'public' ? publicDir : imagesDir, file);
      const fileSize = fs.statSync(filePath).size;
      console.log(`- ${dir}/${file}: ${formatBytes(fileSize)}`);
    });
  }
  
  console.log(`\n📚 For detailed optimization guide, see: docs/IMAGE_OPTIMIZATION_GUIDE.md`);
}

// Run the analysis
checkImagePerformance(); 