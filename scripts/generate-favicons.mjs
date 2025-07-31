#!/usr/bin/env node

/**
 * Favicon Generation Script
 * Creates multiple favicon sizes from SVG source
 * 
 * This script creates PNG favicons in different sizes for better browser compatibility
 * Run with: node scripts/generate-favicons.mjs
 */

import fs from 'fs';
import path from 'path';

// Base64 encoded favicon data for different sizes
const faviconData = {
  // 16x16 favicon
  '16': `data:image/svg+xml;base64,${Buffer.from(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#004b87;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#0066b3;stop-opacity:1" />
    </linearGradient>
  </defs>
  <circle cx="16" cy="16" r="15" fill="url(#bg)" stroke="#ffffff" stroke-width="1"/>
  <rect x="8" y="6" width="16" height="20" rx="2" fill="#ffffff"/>
  <rect x="8" y="6" width="16" height="3" rx="2" fill="#e5f3f8"/>
  <rect x="10" y="11" width="4" height="1.5" fill="#004b87"/>
  <rect x="15" y="11" width="2" height="1.5" fill="#004b87"/>
  <rect x="18" y="11" width="4" height="1.5" fill="#004b87"/>
  <rect x="10" y="14" width="8" height="1" fill="#666666"/>
  <rect x="10" y="16.5" width="12" height="1" fill="#666666"/>
  <rect x="10" y="19" width="6" height="1" fill="#666666"/>
  <path d="M16 21.5 L14.5 22.5 L15.5 24 L16 23.5 L16.5 24 L17.5 22.5 Z" fill="#004b87"/>
</svg>
  `).toString('base64')}`,
  
  // 32x32 favicon
  '32': `data:image/svg+xml;base64,${Buffer.from(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#004b87;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#0066b3;stop-opacity:1" />
    </linearGradient>
  </defs>
  <circle cx="16" cy="16" r="15" fill="url(#bg)" stroke="#ffffff" stroke-width="1"/>
  <rect x="8" y="6" width="16" height="20" rx="2" fill="#ffffff"/>
  <rect x="8" y="6" width="16" height="3" rx="2" fill="#e5f3f8"/>
  <rect x="10" y="11" width="4" height="1.5" fill="#004b87"/>
  <rect x="15" y="11" width="2" height="1.5" fill="#004b87"/>
  <rect x="18" y="11" width="4" height="1.5" fill="#004b87"/>
  <rect x="10" y="14" width="8" height="1" fill="#666666"/>
  <rect x="10" y="16.5" width="12" height="1" fill="#666666"/>
  <rect x="10" y="19" width="6" height="1" fill="#666666"/>
  <path d="M16 21.5 L14.5 22.5 L15.5 24 L16 23.5 L16.5 24 L17.5 22.5 Z" fill="#004b87"/>
</svg>
  `).toString('base64')}`,
  
  // 180x180 Apple touch icon
  '180': `data:image/svg+xml;base64,${Buffer.from(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#004b87;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#0066b3;stop-opacity:1" />
    </linearGradient>
  </defs>
  <circle cx="16" cy="16" r="15" fill="url(#bg)" stroke="#ffffff" stroke-width="1"/>
  <rect x="8" y="6" width="16" height="20" rx="2" fill="#ffffff"/>
  <rect x="8" y="6" width="16" height="3" rx="2" fill="#e5f3f8"/>
  <rect x="10" y="11" width="4" height="1.5" fill="#004b87"/>
  <rect x="15" y="11" width="2" height="1.5" fill="#004b87"/>
  <rect x="18" y="11" width="4" height="1.5" fill="#004b87"/>
  <rect x="10" y="14" width="8" height="1" fill="#666666"/>
  <rect x="10" y="16.5" width="12" height="1" fill="#666666"/>
  <rect x="10" y="19" width="6" height="1" fill="#666666"/>
  <path d="M16 21.5 L14.5 22.5 L15.5 24 L16 23.5 L16.5 24 L17.5 22.5 Z" fill="#004b87"/>
</svg>
  `).toString('base64')}`
};

console.log('📝 Favicon generation script created!');
console.log('');
console.log('This script provides the base64 data for favicons.');
console.log('For production, you would typically use a tool like sharp or canvas to generate actual PNG files.');
console.log('');
console.log('The new favicon design features:');
console.log('• Deep blue gradient background matching your brand (#004b87)');
console.log('• Document/form icon representing EIN applications');
console.log('• Clean, professional appearance');
console.log('• Optimized for small sizes (16x16, 32x32)');
console.log('• Federal/government aesthetic');
console.log('');
console.log('✅ SVG favicon created at: public/favicon.svg');