import { NextResponse } from 'next/server'

export async function GET() {
  const baseUrl = 'https://einationalfiling.com'
  
  // Blog post images with SEO-optimized information
  const blogImages = [
    {
      url: `${baseUrl}/optimized/webp/Corporation EIN Requirements C-Corp vs S-Corp Tax ID Needs.webp`,
      title: 'Corporation EIN Requirements Guide - C-Corp vs S-Corp Tax ID',
      caption: 'Corporation EIN requirements guide showing C-Corp vs S-Corp tax ID application process and federal tax identification needs for business formation',
      license: 'https://einationalfiling.com/terms'
    },
    {
      url: `${baseUrl}/optimized/webp/Do I Need an EIN for My LLC State-by-State Requirements.webp`,
      title: 'LLC EIN Requirements State-by-State Guide',
      caption: 'LLC EIN requirements state-by-state guide showing federal tax ID application process and business formation requirements across United States',
      license: 'https://einationalfiling.com/terms'
    },
    {
      url: `${baseUrl}/optimized/webp/EIN Application Methods Online vs Phone vs Mail vs Professional Service.webp`,
      title: 'EIN Application Methods Comparison Chart',
      caption: 'EIN application methods comparison chart showing online, phone, mail, and professional service options for federal tax ID number filing',
      license: 'https://einationalfiling.com/terms'
    },
    {
      url: `${baseUrl}/optimized/webp/EIN Application Rejected Common Reasons and Professional Solutions.webp`,
      title: 'EIN Application Rejection Solutions Guide',
      caption: 'EIN application rejection solutions guide showing common reasons for federal tax ID denials and professional filing services assistance',
      license: 'https://einationalfiling.com/terms'
    },
    {
      url: `${baseUrl}/optimized/webp/EIN vs ITIN vs SSN.webp`,
      title: 'Tax Identification Numbers Comparison Chart',
      caption: 'Tax identification numbers comparison chart showing EIN vs ITIN vs SSN differences for business and individual federal tax ID requirements',
      license: 'https://einationalfiling.com/terms'
    },
    {
      url: `${baseUrl}/optimized/webp/First-Time Entrepreneur Guide.webp`,
      title: 'First-Time Entrepreneur Business Setup Guide',
      caption: 'First-time entrepreneur business setup guide showing EIN application, licensing requirements, and startup formation process for new business owners',
      license: 'https://einationalfiling.com/terms'
    },
    {
      url: `${baseUrl}/optimized/webp/Business License vs EIN.webp`,
      title: 'Business License vs EIN Comparison Guide',
      caption: 'Business license vs EIN comparison guide showing legal authorization requirements versus federal tax ID needs for business compliance',
      license: 'https://einationalfiling.com/terms'
    },
    {
      url: `${baseUrl}/optimized/webp/DBA vs EIN.webp`,
      title: 'DBA vs EIN Requirements Comparison',
      caption: 'DBA vs EIN requirements comparison showing business name registration versus federal tax ID application process and legal differences',
      license: 'https://einationalfiling.com/terms'
    },
    {
      url: `${baseUrl}/optimized/webp/Business Dissolution.webp`,
      title: 'Business Dissolution EIN Handling Guide',
      caption: 'Business dissolution EIN handling guide showing federal tax ID closure process and IRS account termination procedures for closing businesses',
      license: 'https://einationalfiling.com/terms'
    },
    {
      url: `${baseUrl}/optimized/webp/How to Apply Ein Online.webp`,
      title: 'How to Apply for EIN Online 2024 Complete Guide',
      caption: 'How to apply for EIN online 2024 complete guide showing federal tax ID application process, requirements, and professional filing services',
      license: 'https://einationalfiling.com/terms'
    },
    {
      url: `${baseUrl}/optimized/webp/Get Your Ein Same Day.webp`,
      title: 'Same Day EIN Application Fast Track Guide',
      caption: 'Same day EIN application fast track guide showing immediate federal tax ID processing options and professional expedited filing services',
      license: 'https://einationalfiling.com/terms'
    },
    {
      url: `${baseUrl}/optimized/webp/EIN vs Federal Tax.webp`,
      title: 'EIN vs Federal Tax ID Difference Explanation',
      caption: 'EIN vs Federal Tax ID difference explanation showing business tax identification number requirements and application process comparison',
      license: 'https://einationalfiling.com/terms'
    },
    {
      url: `${baseUrl}/optimized/webp/California Ein Requirements.webp`,
      title: 'California EIN Requirements Guide',
      caption: 'California EIN requirements guide showing CA business federal tax ID application process, SEIN registration, and state-specific filing needs',
      license: 'https://einationalfiling.com/terms'
    },
    {
      url: `${baseUrl}/optimized/webp/New York Ein Application.webp`,
      title: 'New York EIN Application Guide',
      caption: 'New York EIN application guide showing NY business federal tax ID requirements, NYC registration process, and professional filing services',
      license: 'https://einationalfiling.com/terms'
    },
    {
      url: `${baseUrl}/optimized/webp/End-of-Year EIN Applications.webp`,
      title: 'End-of-Year EIN Application Guide',
      caption: 'End-of-year EIN application guide showing tax planning strategies, year-end federal tax ID filing deadlines, and emergency processing options',
      license: 'https://einationalfiling.com/terms'
    },
    {
      url: `${baseUrl}/optimized/webp/EIN Application Errors.webp`,
      title: 'EIN Application Errors Guide',
      caption: 'EIN application errors guide showing top 10 mistakes that delay federal tax ID processing and professional solutions to avoid filing problems',
      license: 'https://einationalfiling.com/terms'
    },
    {
      url: `${baseUrl}/optimized/webp/EIN for Business Acquisition.webp`,
      title: 'EIN for Business Acquisition Guide',
      caption: 'EIN for business acquisition guide showing asset purchase vs stock purchase tax strategies and federal tax ID requirements for M&A transactions',
      license: 'https://einationalfiling.com/terms'
    },
    {
      url: `${baseUrl}/optimized/webp/Florida EIN Guide.webp`,
      title: 'Florida EIN Guide',
      caption: 'Florida EIN guide showing Sunshine State business formation advantages, federal tax ID requirements, and no state income tax benefits for FL businesses',
      license: 'https://einationalfiling.com/terms'
    },
    {
      url: `${baseUrl}/optimized/webp/Texas EIN Application.webp`,
      title: 'Texas EIN Application Guide',
      caption: 'Texas EIN application guide showing Lone Star State business formation advantages, federal tax ID requirements, and TX business-friendly regulations',
      license: 'https://einationalfiling.com/terms'
    }
  ]

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  ${blogImages.map(image => `
  <url>
    <loc>${baseUrl}/blog</loc>
    <image:image>
      <image:loc>${image.url}</image:loc>
      <image:title>${image.title}</image:title>
      <image:caption>${image.caption}</image:caption>
      <image:license>${image.license}</image:license>
    </image:image>
  </url>`).join('')}
</urlset>`

  return new NextResponse(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  })
} 