import type { Metadata } from "next"
import Breadcrumbs from "@/components/breadcrumbs"
import Link from "next/link"
import { FileText, Home, CreditCard, FileCheck, HelpCircle, BookOpen } from "lucide-react"
import { entityTypes } from "@/lib/entity-types"

export const metadata: Metadata = {
  title: "Sitemap | Federal Tax ID Number (EIN) Filing Service",
  description: "Navigate our website easily with our comprehensive sitemap showing all available pages and resources including blog posts, entity guides, and application pages.",
  keywords: "sitemap, EIN filing navigation, website structure, site index, page directory, EIN resources",
  alternates: {
    canonical: "https://einnationalfiling.com/sitemap",
  },
  openGraph: {
    title: "Website Sitemap - EIN National Filing",
    description: "Complete navigation guide to all EIN filing resources, guides, and application pages.",
    url: "https://einnationalfiling.com/sitemap",
    type: "website",
  },
}

export default function SitemapPage() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Sitemap", href: "/sitemap", current: true },
  ]

  const sitemapSections = [
    {
      title: "Main Pages",
      icon: <Home className="h-5 w-5" />,
      links: [
        { name: "Home", url: "/" },
        { name: "Pricing", url: "/pricing" },
        { name: "Contact Us", url: "/contact" },
        { name: "Privacy Policy", url: "/privacy" },
        { name: "Terms of Service", url: "/terms" },
      ],
    },
    {
      title: "EIN Information & Guides",
      icon: <FileText className="h-5 w-5" />,
      links: [
        { name: "Apply for EIN Online", url: "/apply-ein-online" },
        { name: "Form SS-4 Information", url: "/form-ss4" },
        { name: "FAQ", url: "/faq" },
        { name: "Blog", url: "/blog" },
      ],
    },
    {
      title: "Entity-Specific Guides",
      icon: <BookOpen className="h-5 w-5" />,
      links: [
        { name: "Corporation EIN Requirements", url: "/blog/corporation-ein-requirements" },
        { name: "LLC EIN Requirements State Guide", url: "/blog/llc-ein-requirements-state-guide" },
        { name: "Florida EIN Guide", url: "/blog/florida-ein-guide" },
        { name: "Texas EIN Application", url: "/blog/texas-ein-application" },
        { name: "EIN vs Federal Tax ID", url: "/blog/ein-vs-federal-tax-id-difference" },
        { name: "Business Dissolution EIN Handling", url: "/blog/business-dissolution-ein-handling" },
      ],
    },
    {
      title: "Entity Types & Applications",
      icon: <FileCheck className="h-5 w-5" />,
      links: entityTypes.map(entity => ({
        name: `${entity.name} - Information`,
        url: `/entity-types/${entity.slug}`
      })).concat(entityTypes.map(entity => ({
        name: `Apply for ${entity.name} EIN`,
        url: `/apply/${entity.slug}`
      }))),
    },
    {
      title: "Customer Support",
      icon: <HelpCircle className="h-5 w-5" />,
      links: [
        { name: "FAQ", url: "/faq" },
        { name: "Contact Support", url: "/contact" },
        { name: "Privacy Policy", url: "/privacy" },
        { name: "Terms of Service", url: "/terms" },
      ],
    },
    {
      title: "Services & Pricing",
      icon: <CreditCard className="h-5 w-5" />,
      links: [
        { name: "Pricing Plans", url: "/pricing" },
        { name: "Apply for EIN", url: "/apply" },
        { name: "Payment Confirmation", url: "/confirmation" },
      ],
    },
  ]

  return (
    <main className="min-h-screen">
      <Breadcrumbs items={breadcrumbItems} />

      <section className="irs-section bg-white pt-10 pb-8">
        <div className="irs-container">
          <div className="mb-8">
            <h1 className="text-2xl md:text-3xl font-bold mb-3">Sitemap</h1>
            <p className="text-gray-700 max-w-3xl">
              Use our sitemap to navigate through all the pages and resources available on our website. This
              comprehensive index will help you find exactly what you're looking for.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sitemapSections.map((section) => (
              <div key={section.title} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <div className="flex items-center mb-4">
                  <div className="bg-primary/10 p-2 rounded-full mr-3">{section.icon}</div>
                  <h2 className="text-lg font-semibold text-primary">{section.title}</h2>
                </div>
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li key={link.url}>
                      <Link
                        href={link.url}
                        className="text-gray-700 hover:text-primary hover:underline flex items-center"
                      >
                        <span className="text-gray-400 mr-2">•</span>
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-secondary/30 p-6 rounded-lg border border-gray-200">
            <h2 className="text-lg font-semibold mb-4 text-primary">XML Sitemaps for Search Engines</h2>
            <p className="text-gray-700 mb-4">
              For search engines and automated tools, we provide multiple XML sitemaps organized by content type for optimal crawling and indexing.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              <Link href="/sitemap-index.xml" className="inline-flex items-center text-primary hover:underline p-3 bg-white rounded border" target="_blank">
                <FileText className="h-4 w-4 mr-2" />
                Sitemap Index
              </Link>
              <Link href="/sitemap.xml" className="inline-flex items-center text-primary hover:underline p-3 bg-white rounded border" target="_blank">
                <FileText className="h-4 w-4 mr-2" />
                Main Sitemap
              </Link>
              <Link href="/sitemap-blog.xml" className="inline-flex items-center text-primary hover:underline p-3 bg-white rounded border" target="_blank">
                <FileText className="h-4 w-4 mr-2" />
                Blog Sitemap
              </Link>
              <Link href="/sitemap-services.xml" className="inline-flex items-center text-primary hover:underline p-3 bg-white rounded border" target="_blank">
                <FileText className="h-4 w-4 mr-2" />
                Services Sitemap
              </Link>
            </div>
            <p className="text-gray-600 text-sm mt-4">
              Each sitemap includes structured data such as last modification dates, change frequencies, and priority levels to help search engines crawl and index our content efficiently.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
