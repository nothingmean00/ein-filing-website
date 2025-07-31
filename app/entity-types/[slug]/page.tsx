import { notFound } from "next/navigation"
import Breadcrumbs from "@/components/breadcrumbs"
import { getEntityTypeBySlug } from "@/lib/entity-types"
import type { Metadata, ResolvingMetadata } from "next"
import Script from "next/script"
import EntityLanding from "@/components/entity-landing"
import FaqSection from "@/components/faq-section"
import SupportSection from "@/components/support-section"

interface EntityPageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateMetadata({ params }: EntityPageProps, parent: ResolvingMetadata): Promise<Metadata> {
  const { slug } = await params
  const entityType = getEntityTypeBySlug(slug)

  if (!entityType) {
    return {
      title: "Entity Type Not Found",
    }
  }

  // Use the parent metadata as a base
  const previousImages = (await parent).openGraph?.images || []

  return {
    title: `${entityType.name} EIN Application | Federal Tax ID Number Filing Service`,
    description: `Apply for a Federal Employer Identification Number (EIN) for your ${entityType.name}. Learn about ${entityType.name} tax requirements and get your EIN in as little as 24 hours.`,
    keywords: `${entityType.name} EIN, ${entityType.name} tax ID, apply for ${entityType.name} EIN, ${entityType.name} Federal Tax ID, business registration, IRS filing, Form SS-4`,
    openGraph: {
      title: `${entityType.name} EIN Application | Federal Tax ID Number Filing Service`,
      description: `Apply for a Federal Employer Identification Number (EIN) for your ${entityType.name}. Learn about ${entityType.name} tax requirements and get your EIN in as little as 24 hours.`,
      images: previousImages,
    },
    alternates: {
      canonical: `https://einnationalfiling.com/entity-types/${slug}`,
    },
  }
}

export default async function EntityPage({ params }: EntityPageProps) {
  const { slug } = await params
  const entityType = getEntityTypeBySlug(slug)

  if (!entityType) {
    notFound()
  }

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Entity Types", href: "/#entity-definitions" },
    { label: entityType.name, href: `/entity-types/${slug}`, current: true },
  ]

  return (
    <main className="min-h-screen">
      <Breadcrumbs items={breadcrumbItems} />

      <section className="irs-section bg-secondary/30 pt-10 pb-8">
        <div className="irs-container">
          <EntityLanding entityType={entityType} />
        </div>
      </section>

      <FaqSection />
      <SupportSection />

      {/* Structured Data for BreadcrumbList */}
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://einnationalfiling.com",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Entity Types",
                item: "https://einnationalfiling.com/#entity-definitions",
              },
              {
                "@type": "ListItem",
                position: 3,
                name: entityType.name,
                item: `https://einnationalfiling.com/entity-types/${slug}`,
              },
            ],
          }),
        }}
      />

      {/* Structured Data for Service */}
      <Script
        id="service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: `${entityType.name} EIN Filing Service`,
            description: `Fast and secure Federal Tax ID Number (EIN) filing service for ${entityType.name} entities.`,
            provider: {
              "@type": "Organization",
              name: "EIN National Filing",
              url: "https://einnationalfiling.com",
            },
            serviceType: "Tax Filing Service",
            areaServed: {
              "@type": "Country",
              name: "United States",
            },
            offers: {
              "@type": "Offer",
              price: "249.00",
              priceCurrency: "USD",
            },
          }),
        }}
      />
    </main>
  )
}
