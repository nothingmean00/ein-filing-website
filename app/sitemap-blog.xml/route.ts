import { NextResponse } from 'next/server'

export async function GET() {
  const baseUrl = 'https://einnationalfiling.com'
  const currentDate = new Date().toISOString()

  const blogPosts = [
    {
      slug: 'corporation-ein-requirements',
      lastModified: '2024-12-15T10:00:00Z',
      priority: '0.8',
      changeFreq: 'monthly'
    },
    {
      slug: 'llc-ein-requirements-state-guide',
      lastModified: '2024-12-15T10:00:00Z',
      priority: '0.8',
      changeFreq: 'monthly'
    },
    {
      slug: 'ein-application-methods-comparison',
      lastModified: '2024-12-15T10:00:00Z',
      priority: '0.8',
      changeFreq: 'monthly'
    },
    {
      slug: 'ein-application-rejected-solutions',
      lastModified: '2024-12-15T10:00:00Z',
      priority: '0.8',
      changeFreq: 'monthly'
    },
    {
      slug: 'business-dissolution-ein-handling',
      lastModified: '2024-12-15T10:00:00Z',
      priority: '0.7',
      changeFreq: 'monthly'
    },
    {
      slug: 'business-license-vs-ein-requirements',
      lastModified: '2024-12-15T10:00:00Z',
      priority: '0.7',
      changeFreq: 'monthly'
    },
    {
      slug: 'first-time-entrepreneur-ein-guide',
      lastModified: '2024-12-15T10:00:00Z',
      priority: '0.8',
      changeFreq: 'monthly'
    },
    {
      slug: 'ein-vs-itin-vs-ssn-differences',
      lastModified: '2024-12-15T10:00:00Z',
      priority: '0.7',
      changeFreq: 'monthly'
    },
    {
      slug: 'dba-vs-ein-requirements',
      lastModified: '2024-12-15T10:00:00Z',
      priority: '0.7',
      changeFreq: 'monthly'
    },
    {
      slug: 'how-to-apply-for-ein-online-complete-guide',
      lastModified: '2024-12-15T10:00:00Z',
      priority: '0.8',
      changeFreq: 'monthly'
    },
    {
      slug: 'get-ein-same-day-fast-track-guide',
      lastModified: '2024-12-15T10:00:00Z',
      priority: '0.8',
      changeFreq: 'monthly'
    },
    {
      slug: 'ein-vs-federal-tax-id-difference',
      lastModified: '2024-12-15T10:00:00Z',
      priority: '0.8',
      changeFreq: 'monthly'
    },
    {
      slug: 'florida-ein-guide',
      lastModified: '2024-12-15T14:00:00Z',
      priority: '0.8',
      changeFreq: 'monthly'
    },
    {
      slug: 'texas-ein-application',
      lastModified: '2024-12-15T14:30:00Z',
      priority: '0.8',
      changeFreq: 'monthly'
    },
    {
      slug: 'california-ein-requirements',
      lastModified: '2024-12-15T12:00:00Z',
      priority: '0.8',
      changeFreq: 'monthly'
    },
    {
      slug: 'new-york-ein-application',
      lastModified: '2024-12-15T13:00:00Z',
      priority: '0.8',
      changeFreq: 'monthly'
    },
    {
      slug: 'end-of-year-ein-applications',
      lastModified: '2024-12-15T11:30:00Z',
      priority: '0.7',
      changeFreq: 'monthly'
    },
    {
      slug: 'ein-application-errors',
      lastModified: '2024-12-15T15:00:00Z',
      priority: '0.8',
      changeFreq: 'monthly'
    },
    {
      slug: 'ein-for-business-acquisition',
      lastModified: '2024-12-15T16:00:00Z',
      priority: '0.7',
      changeFreq: 'monthly'
    }
  ]

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  
  <!-- Blog Index -->
  <url>
    <loc>${baseUrl}/blog</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>

  ${blogPosts.map(post => `
  <url>
    <loc>${baseUrl}/blog/${post.slug}</loc>
    <lastmod>${post.lastModified}</lastmod>
    <changefreq>${post.changeFreq}</changefreq>
    <priority>${post.priority}</priority>
    <image:image>
      <image:loc>${baseUrl}/og-image.jpg</image:loc>
      <image:title>EIN National Filing - ${post.slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}</image:title>
      <image:caption>Professional EIN filing guidance and expert insights</image:caption>
    </image:image>
  </url>`).join('')}

</urlset>`

  return new NextResponse(sitemap, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=86400, s-maxage=86400'
    }
  })
} 