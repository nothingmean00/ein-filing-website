import { notFound } from "next/navigation"
import ApplicationForm from "@/components/application-form"
import Breadcrumbs from "@/components/breadcrumbs"
import { getEntityTypeBySlug } from "@/lib/entity-types"
import type { Metadata, ResolvingMetadata } from "next"
import Script from "next/script"

interface ApplicationPageProps {
  params: Promise<{
    entityType: string
  }>
}

export async function generateMetadata({ params }: ApplicationPageProps, parent: ResolvingMetadata): Promise<Metadata> {
  const resolvedParams = await params
  const entityType = getEntityTypeBySlug(resolvedParams.entityType)

  if (!entityType) {
    return {
      title: "Application Not Found",
    }
  }

  // Use the parent metadata as a base
  const previousImages = (await parent).openGraph?.images || []

  return {
    title: `Apply for ${entityType.name} EIN | Federal Tax ID Number Filing Service`,
    description: `Apply for a Federal Employer Identification Number (EIN) for your ${entityType.name}. Complete our secure online application to get your EIN in as little as 24 hours.`,
    keywords: `${entityType.name} EIN, ${entityType.name} tax ID, apply for ${entityType.name} EIN, ${entityType.name} Federal Tax ID, business registration, IRS filing, Form SS-4`,
    openGraph: {
      title: `Apply for ${entityType.name} EIN | Federal Tax ID Number Filing Service`,
      description: `Apply for a Federal Employer Identification Number (EIN) for your ${entityType.name}. Complete our secure online application to get your EIN in as little as 24 hours.`,
      images: previousImages,
    },
    alternates: {
      canonical: `https://einnationalfiling.com/apply/${resolvedParams.entityType}`,
    },
  }
}

export default async function ApplicationPage({ params }: ApplicationPageProps) {
  const resolvedParams = await params
  const entityType = getEntityTypeBySlug(resolvedParams.entityType)

  if (!entityType) {
    notFound()
  }

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "EIN Filing", href: "/#entity-types" },
    { label: `${entityType.name} Application`, href: `/apply/${resolvedParams.entityType}`, current: true },
  ]

  return (
    <main className="min-h-screen bg-gray-50">
      <Breadcrumbs items={breadcrumbItems} />

      <div className="irs-container py-8">
        <ApplicationForm entityType={entityType} />
      </div>

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
                name: "EIN Filing",
                item: "https://einnationalfiling.com",
              },
              {
                "@type": "ListItem",
                position: 3,
                name: `${entityType.name} Application`,
                item: `https://einnationalfiling.com/apply/${resolvedParams.entityType}`,
              },
            ],
          }),
        }}
      />
    </main>
  )
}
