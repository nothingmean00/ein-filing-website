import type { MetadataRoute } from "next"
import { entityTypes } from "@/lib/entity-types" // From lib/entity-types.tsx

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://einnationalfiling.com"

  const mainPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl, // Homepage - highest priority
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/pricing`, // Key conversion page
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: `${baseUrl}/apply-ein-online`, // Primary landing page
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/get-ein-fast`, // Secondary landing page
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/federal-tax-id`, // SEO landing page
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/faq`, // High-value content page
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/form-ss4`, // Resource page
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`, // Blog index
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.75,
    },
    {
      url: `${baseUrl}/contact`, // Contact page
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/sitemap`, // HTML sitemap
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/privacy`, // Legal pages
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms`, // Legal pages
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ]

  const entityPages: MetadataRoute.Sitemap = entityTypes.map((entity) => ({
    url: `${baseUrl}/apply/${entity.slug}`, // Corresponds to: app/apply/[entityType]/page.tsx
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.8,
  }))

  // Add entity-specific information pages for SEO
  const entityInfoPages: MetadataRoute.Sitemap = entityTypes.map((entity) => ({
    url: `${baseUrl}/entity-types/${entity.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly", 
    priority: 0.7,
  }))

  // Blog posts with structured data
  const blogPosts: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/blog/corporation-ein-requirements`,
      lastModified: new Date("2024-12-15"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/llc-ein-requirements-state-guide`,
      lastModified: new Date("2024-12-15"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/ein-application-methods-comparison`,
      lastModified: new Date("2024-12-15"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/ein-application-rejected-solutions`,
      lastModified: new Date("2024-12-15"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/business-dissolution-ein-handling`,
      lastModified: new Date("2024-12-15"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/business-license-vs-ein-requirements`,
      lastModified: new Date("2024-12-15"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/first-time-entrepreneur-ein-guide`,
      lastModified: new Date("2024-12-15"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/ein-vs-itin-vs-ssn-differences`,
      lastModified: new Date("2024-12-15"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/dba-vs-ein-requirements`,
      lastModified: new Date("2024-12-15"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/how-to-apply-for-ein-online-complete-guide`,
      lastModified: new Date("2024-12-15"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/get-ein-same-day-fast-track-guide`,
      lastModified: new Date("2024-12-15"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/ein-vs-federal-tax-id-difference`,
      lastModified: new Date("2024-12-15"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/florida-ein-guide`,
      lastModified: new Date("2024-12-15"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/texas-ein-application`,
      lastModified: new Date("2024-12-15"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/california-ein-requirements`,
      lastModified: new Date("2024-12-15"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/new-york-ein-application`,
      lastModified: new Date("2024-12-15"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/end-of-year-ein-applications`,
      lastModified: new Date("2024-12-15"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/ein-application-errors`,
      lastModified: new Date("2024-12-15"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/ein-for-business-acquisition`,
      lastModified: new Date("2024-12-15"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ]

  return [...mainPages, ...entityPages, ...entityInfoPages, ...blogPosts]
}
