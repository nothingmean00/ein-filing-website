import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { ModalProvider } from "@/components/modal-provider"
import PerformanceMonitor from "@/components/performance-monitor"
import { Suspense } from "react"
import Script from "next/script"
import ChatButton from "@/components/chat/chat-button"
import { Analytics } from "@vercel/analytics/next"

const inter = Inter({ subsets: ["latin"] })

// Update the metadataBase URL and all other URLs in the metadata
export const metadata: Metadata = {
  metadataBase: new URL("https://einnationalfiling.com"),
  title: {
    template: "%s | EIN National Filing",
    default: "Get Your EIN Online Fast | Federal Tax ID Filing Service | EIN National Filing",
  },
  description:
    "Fast and secure Federal Employer Identification Number (EIN) filing service. Apply for your business tax ID online with our IRS-compliant application process. Same-day processing available.",
  keywords:
    "EIN online, get EIN fast, Federal Tax ID application, FEIN filing service, Employer Identification Number online, EIN same day, business tax ID, IRS EIN filing, Form SS-4 help, EIN for LLC, EIN for corporation, business registration, tax identification number, apply for EIN",
  authors: [{ name: "EIN National Filing Team" }],
  creator: "EIN National Filing",
  publisher: "EIN National Filing",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://einnationalfiling.com",
    title: "Get Your EIN Online Fast | Federal Tax ID Filing Service",
    description:
      "Fast and secure Federal Employer Identification Number (EIN) filing service. Apply for your business tax ID online with our IRS-compliant application process. Same-day processing available.",
    siteName: "EIN National Filing",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "EIN National Filing Service - Get Your Federal Tax ID Fast",
        type: "image/jpeg",
      },
      {
        url: "/logo.png",
        width: 800,
        height: 600,
        alt: "EIN National Filing Logo",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Get Your EIN Online Fast | Federal Tax ID Filing Service",
    description:
      "Fast and secure Federal Employer Identification Number (EIN) filing service. Apply for your business tax ID online with our IRS-compliant application process. Same-day processing available.",
    images: [
      {
        url: "/twitter-image.png",
        alt: "EIN National Filing - Professional EIN Service",
      },
    ],
    creator: "@einnational",
    site: "@einnational",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://einnationalfiling.com",
  },
  verification: {
    google: "google-site-verification-code",
    yandex: "yandex-verification-code",
    yahoo: "yahoo-verification-code",
  },
  other: {
    "google-site-verification": "google-site-verification-code",
    "msvalidate.01": "bing-verification-code",
    "p:domain_verify": "pinterest-verification-code",
  },
  category: "Business Services",
  classification: "Professional Services",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        {/* Preconnect to important domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Preconnect to critical external services */}
        <link rel="preconnect" href="https://api.stripe.com" />
        <link rel="preconnect" href="https://js.stripe.com" />
        <link rel="preconnect" href="https://api.openai.com" />
        <link rel="preconnect" href="https://api.resend.com" />
        
        {/* DNS prefetch for performance */}
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        
        {/* Resource hints for better performance - only preload critical above-the-fold images */}
        <link rel="preload" as="image" href="/optimized/logo.png" type="image/png" />
        <link rel="preload" as="image" href="/optimized/webp/logo.webp" type="image/webp" />
        
        {/* Preload critical fonts - Next.js will handle this automatically with Inter font import */}
        
        {/* Optimize for Core Web Vitals */}
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta name="format-detection" content="telephone=no" />

        {/* Favicon and Apple Touch Icons */}
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon-16x16.svg" sizes="16x16" type="image/svg+xml" />
        <link rel="icon" href="/favicon-32x32.svg" sizes="32x32" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.svg" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.svg" />
        {/* Fallback ICO for older browsers */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        
        {/* Manifest for PWA */}
        <link rel="manifest" href="/site.webmanifest" />
        
        {/* Theme color for mobile browsers */}
        <meta name="theme-color" content="#004b87" />
        <meta name="msapplication-TileColor" content="#004b87" />
        
        {/* Additional security and performance meta tags */}
        <meta name="referrer" content="origin-when-cross-origin" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      </head>
      <body className={inter.className}>
        <ModalProvider>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main>
              <Suspense fallback={
                <div className="min-h-screen flex items-center justify-center">
                  <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-500"></div>
                </div>
              }>
                {children}
              </Suspense>
            </main>
            <Footer />
            <ChatButton />
          </div>
        </ModalProvider>
        
        {/* Performance monitoring */}
        <PerformanceMonitor />
        
        {/* Vercel Analytics */}
        <Analytics />

        {/* Enhanced Structured Data for Organization */}
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "@id": "https://einnationalfiling.com/#organization",
              name: "EIN National Filing",
              legalName: "EIN National Filing LLC",
              description: "Professional Federal Tax ID (EIN) filing service for all business types. Fast, secure, and IRS-compliant EIN applications with same-day processing available.",
              url: "https://einnationalfiling.com",
              logo: {
                "@type": "ImageObject",
                url: "https://einnationalfiling.com/logo.png",
                width: "400",
                height: "400"
              },
              image: "https://einnationalfiling.com/og-image.jpg",
              telephone: "(800) 555-1234",
              email: "support@einnationalfiling.com",
              address: {
                "@type": "PostalAddress",
                addressCountry: "US",
                addressLocality: "United States",
                addressRegion: "Nationwide"
              },
              areaServed: {
                "@type": "Country",
                name: "United States"
              },
              serviceType: "Tax Filing Services",
              priceRange: "$249-$329",
              foundingDate: "2020",
              numberOfEmployees: "10-50",
              knowsAbout: [
                "EIN Filing",
                "Federal Tax ID",
                "Business Formation",
                "Tax Compliance",
                "IRS Forms"
              ],
              contactPoint: [
                {
                  "@type": "ContactPoint",
                  telephone: "(800) 555-1234",
                  email: "support@einnationalfiling.com",
                  contactType: "customer service",
                  availableLanguage: ["English"],
                  hoursAvailable: {
                    "@type": "OpeningHoursSpecification",
                    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                    opens: "09:00",
                    closes: "17:00",
                    timeZone: "America/New_York"
                  }
                },
                {
                  "@type": "ContactPoint",
                  telephone: "(800) 555-1234",
                  contactType: "sales",
                  availableLanguage: ["English"]
                }
              ],
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.8",
                reviewCount: "2847",
                bestRating: "5",
                worstRating: "1"
              },
              sameAs: [
                "https://www.facebook.com/einnationalfiling",
                "https://twitter.com/einnational",
                "https://www.linkedin.com/company/einnationalfiling",
                "https://www.instagram.com/einnationalfiling"
              ],
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "EIN Filing Services",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Standard EIN Filing",
                      description: "Complete EIN filing service for all entity types"
                    },
                    price: "249",
                    priceCurrency: "USD"
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Same-Day Express EIN Filing",
                      description: "Expedited processing with same-day delivery"
                    },
                    price: "329",
                    priceCurrency: "USD"
                  }
                ]
              }
            }),
          }}
        />

        {/* Enhanced WebSite Schema */}
        <Script
          id="website-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "@id": "https://einnationalfiling.com/#website",
              name: "EIN National Filing",
              description: "Professional EIN filing service for businesses across the United States",
              url: "https://einnationalfiling.com",
              publisher: {
                "@id": "https://einnationalfiling.com/#organization"
              },
              potentialAction: {
                "@type": "SearchAction",
                target: {
                  "@type": "EntryPoint",
                  urlTemplate: "https://einnationalfiling.com/search?q={search_term_string}"
                },
                "query-input": "required name=search_term_string",
              },
              mainEntity: {
                "@id": "https://einnationalfiling.com/#organization"
              }
            }),
          }}
        />

        {/* Breadcrumb List Schema - Will be overridden by page-specific breadcrumbs */}
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
                  item: "https://einnationalfiling.com"
                }
              ]
            }),
          }}
        />
      </body>
    </html>
  )
}
