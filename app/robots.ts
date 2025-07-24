import type { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/api/",
          "/admin/",
          "/dashboard/",
          "/_next/",
          "/private/",
          "*.pdf$",
          "/search?*",
          "/confirmation?*"
        ],
        crawlDelay: 1,
      },
      {
        userAgent: "Googlebot",
        allow: "/",
        disallow: ["/api/", "/admin/", "/dashboard/", "/private/"],
      },
      {
        userAgent: "Bingbot",
        allow: "/",
        disallow: ["/api/", "/admin/", "/dashboard/", "/private/"],
        crawlDelay: 2,
      }
    ],
    sitemap: [
      "https://einnationalfiling.com/sitemap.xml",
      "https://einnationalfiling.com/sitemap-blog.xml"
    ],
    host: "https://einnationalfiling.com",
  }
}
