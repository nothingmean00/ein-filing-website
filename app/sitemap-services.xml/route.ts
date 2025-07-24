import { NextResponse } from 'next/server'
import { entityTypes } from '@/lib/entity-types'

export async function GET() {
  const baseUrl = 'https://einnationalfiling.com'
  const currentDate = new Date().toISOString()

  const servicePriority: { [key: string]: string } = {
    'sole-proprietorship': '0.9',
    'llc': '0.9',
    'corporation': '0.9',
    's-corporation': '0.9',
    'partnership': '0.8',
    'non-profit': '0.7',
    'trust': '0.6',
    'estate': '0.6',
    'other': '0.5'
  }

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  
  <!-- Main Application Pages -->
  <url>
    <loc>${baseUrl}/apply-ein-online</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
    <image:image>
      <image:loc>${baseUrl}/og-image.jpg</image:loc>
      <image:title>Apply for EIN Online - Professional Filing Service</image:title>
      <image:caption>Fast and secure EIN application process</image:caption>
    </image:image>
  </url>

  <url>
    <loc>${baseUrl}/get-ein-fast</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>

  <url>
    <loc>${baseUrl}/federal-tax-id</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>

  <url>
    <loc>${baseUrl}/pricing</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>

  <url>
    <loc>${baseUrl}/form-ss4</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>

  <!-- Entity Application Pages -->
  ${entityTypes.map(entity => `
  <url>
    <loc>${baseUrl}/apply/${entity.slug}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${servicePriority[entity.slug] || '0.7'}</priority>
    <image:image>
      <image:loc>${baseUrl}/og-image.jpg</image:loc>
      <image:title>EIN Application for ${entity.name} - Professional Service</image:title>
      <image:caption>Expert EIN filing assistance for ${entity.name} entities</image:caption>
    </image:image>
  </url>`).join('')}

  <!-- Entity Information Pages -->
  ${entityTypes.map(entity => `
  <url>
    <loc>${baseUrl}/entity-types/${entity.slug}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
    <image:image>
      <image:loc>${baseUrl}/og-image.jpg</image:loc>
      <image:title>${entity.name} Information and EIN Requirements</image:title>
      <image:caption>Complete guide to ${entity.name} EIN requirements and filing</image:caption>
    </image:image>
  </url>`).join('')}

  <!-- Support and Information Pages -->
  <url>
    <loc>${baseUrl}/faq</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>

  <url>
    <loc>${baseUrl}/contact</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>

  <url>
    <loc>${baseUrl}/payment</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>

  <url>
    <loc>${baseUrl}/confirmation</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.5</priority>
  </url>

</urlset>`

  return new NextResponse(sitemap, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=86400, s-maxage=86400'
    }
  })
} 