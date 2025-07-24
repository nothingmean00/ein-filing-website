import type { Metadata } from "next"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import Link from "next/link"
import { BlogImage } from "@/components/ui/blog-image"
import { ArrowRightIcon, CalendarDaysIcon, UserIcon } from "lucide-react"

export const metadata: Metadata = {
  title: "EIN Filing Blog | Expert Guides & Business Tax ID Resources | EIN National Filing",
  description: "Expert guides on EIN filing, business formation, and tax requirements. Read comprehensive articles about Federal Tax ID applications, state requirements, and professional filing services.",
  keywords: "EIN filing guides, business tax ID articles, federal tax ID resources, EIN application help, business formation guides, tax identification articles",
  alternates: {
    canonical: "https://einnationalfiling.com/blog",
  },
  openGraph: {
    title: "EIN Filing Blog - Expert Guides & Business Resources",
    description: "Expert guides on EIN filing, business formation, and tax requirements for entrepreneurs and business owners.",
    url: "https://einnationalfiling.com/blog",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "EIN Filing Blog - Expert Guides & Business Resources",
    description: "Expert guides on EIN filing, business formation, and tax requirements for entrepreneurs and business owners.",
  },
}

// Sample blog post data - replace with actual data fetching later
const blogPosts = [
  {
    slug: "corporation-ein-requirements",
    title: "Corporation EIN Requirements: C-Corp vs S-Corp Tax ID Needs",
    excerpt:
      "Learn the essential EIN requirements for C-Corporations and S-Corporations. Expert guidance on tax ID needs, filing deadlines, and compliance requirements for both corporate structures.",
    imageUrl: "/optimized/Corporation EIN Requirements C-Corp vs S-Corp Tax ID Needs.png",
    imageAlt: "Corporation EIN requirements guide showing C-Corp vs S-Corp tax ID application process and federal tax identification needs for business formation",
    author: "EIN Filing Experts",
    date: "December 15, 2024",
  },
  {
    slug: "llc-ein-requirements-state-guide",
    title: "Do I Need an EIN for My LLC? State-by-State Requirements",
    excerpt:
      "Complete guide to LLC EIN requirements by state. Learn federal requirements, state-specific rules, and when your LLC needs a tax ID number for optimal business operations.",
    imageUrl: "/optimized/Do I Need an EIN for My LLC State-by-State Requirements.png",
    imageAlt: "LLC EIN requirements state-by-state guide showing federal tax ID application process and business formation requirements across United States",
    author: "EIN Filing Experts",
    date: "December 15, 2024",
  },
  {
    slug: "ein-vs-itin-vs-ssn-differences",
    title: "EIN vs ITIN vs SSN: Business Tax ID Number Differences",
    excerpt:
      "Complete comparison of tax identification numbers for businesses. Professional guidance on EIN, ITIN, and SSN differences, requirements, and when each is needed.",
    imageUrl: "/optimized/EIN vs ITIN vs SSN.png",
    imageAlt: "Tax identification numbers comparison chart showing EIN vs ITIN vs SSN differences for business and individual federal tax ID requirements",
    author: "EIN Filing Experts",
    date: "December 15, 2024",
  },
  {
    slug: "first-time-entrepreneur-ein-guide",
    title: "First-Time Entrepreneur Guide: EIN, Licenses, and Business Setup",
    excerpt:
      "Essential startup guide covering EIN requirements, business licenses, and professional setup services. Expert guidance for new entrepreneurs launching their first business.",
    imageUrl: "/optimized/First-Time Entrepreneur Guide.png",
    imageAlt: "First-time entrepreneur business setup guide showing EIN application, licensing requirements, and startup formation process for new business owners",
    author: "EIN Filing Experts",
    date: "December 15, 2024",
  },
  {
    slug: "business-license-vs-ein-requirements",
    title: "Business License vs EIN: Legal vs Tax Requirements Explained",
    excerpt:
      "Understand the distinct purposes of business licenses and EINs for complete legal compliance. Professional guidance on legal authorization vs tax identification.",
    imageUrl: "/optimized/Business License vs EIN.png",
    imageAlt: "Business license vs EIN comparison guide showing legal authorization requirements versus federal tax ID needs for business compliance",
    author: "EIN Filing Experts",
    date: "December 15, 2024",
  },
  {
    slug: "dba-vs-ein-requirements",
    title: "DBA vs EIN: Business Name Registration vs Tax ID Requirements",
    excerpt:
      "Professional guidance on the differences between business name registration and federal tax identification. Complete comparison of DBA and EIN requirements.",
    imageUrl: "/optimized/DBA vs EIN.png",
    imageAlt: "DBA vs EIN requirements comparison showing business name registration versus federal tax ID application process and legal differences",
    author: "EIN Filing Experts",
    date: "December 15, 2024",
  },
  {
    slug: "business-dissolution-ein-handling",
    title: "Business Dissolution: What Happens to Your EIN When Closing",
    excerpt:
      "Professional guidance on handling your EIN and tax obligations during business dissolution. Learn proper procedures for closing your IRS business account.",
    imageUrl: "/optimized/Business Dissolution.png",
    imageAlt: "Business dissolution EIN handling guide showing federal tax ID closure process and IRS account termination procedures for closing businesses",
    author: "EIN Filing Experts",
    date: "December 15, 2024",
  },
  {
    slug: "ein-vs-federal-tax-id-difference",
    title: "EIN vs Federal Tax ID: What's the Difference?",
    excerpt:
      "Confused about business tax IDs? Learn about the differences between EIN and Federal Tax ID, when you need them, and why many entrepreneurs choose professional guidance.",
    imageUrl: "/optimized/EIN vs Federal Tax.png",
    imageAlt: "EIN vs Federal Tax ID difference explanation showing business tax identification number requirements and application process comparison",
    author: "EIN Filing Experts",
    date: "December 15, 2024",
  },
  {
    slug: "new-york-ein-application",
    title: "New York EIN Application: Complete NY Business Tax ID Guide",
    excerpt:
      "Complete guide to New York EIN applications. Learn NY business tax ID requirements, state registrations, and professional filing services for NYC businesses.",
    imageUrl: "/optimized/New York Ein Application.png",
    imageAlt: "New York EIN application guide showing NY business federal tax ID requirements, NYC registration process, and professional filing services",
    author: "EIN Filing Experts",
    date: "December 15, 2024",
  },
  {
    slug: "ein-for-business-acquisition",
    title: "EIN for Business Acquisition: Asset vs Stock Purchase Tax Strategy",
    excerpt:
      "Learn when you need an EIN for business acquisitions, asset purchases, and stock deals. Expert guidance on M&A tax implications and EIN requirements.",
    imageUrl: "/optimized/EIN for Business Acquisition.png",
    imageAlt: "EIN for business acquisition guide showing asset purchase vs stock purchase tax strategies and federal tax ID requirements for M&A transactions",
    author: "EIN Filing Experts",
    date: "December 15, 2024",
  },
  {
    slug: "florida-ein-guide",
    title: "Florida EIN Guide: Business Formation in the Sunshine State",
    excerpt:
      "Florida's business-friendly environment and no state income tax make it an attractive formation state. Learn all Florida EIN requirements and advantages.",
    imageUrl: "/optimized/Florida EIN Guide.png",
    imageAlt: "Florida EIN guide showing Sunshine State business formation advantages, federal tax ID requirements, and no state income tax benefits for FL businesses",
    author: "EIN Filing Experts",
    date: "December 15, 2024",
  },
  {
    slug: "texas-ein-application",
    title: "Texas EIN Application: Complete Guide for Lone Star State Businesses",
    excerpt:
      "Texas offers significant business advantages with no state income tax and business-friendly regulations. Complete guide to Texas EIN requirements.",
    imageUrl: "/optimized/Texas EIN Application.png",
    imageAlt: "Texas EIN application guide showing Lone Star State business formation advantages, federal tax ID requirements, and TX business-friendly regulations",
    author: "EIN Filing Experts",
    date: "December 15, 2024",
  },
]

export default function BlogPage() {
  return (
    <div className="bg-secondary/30">
      <div className="irs-container py-8 md:py-12">
        <Breadcrumb className="mb-8">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="/">Home</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Blog</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <header className="mb-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">Insights & Updates</h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto">
            Your source for the latest articles, tips, and news on EIN filing, business formation, and tax compliance.
          </p>
        </header>

        {blogPosts.length > 0 ? (
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {blogPosts.map((post) => (
              <Card
                key={post.slug}
                className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white"
              >
                <CardHeader className="p-0">
                  <Link href={`/blog/${post.slug}`} aria-label={`Read more about ${post.title}`}>
                    <div className="relative w-full h-56 md:h-64 bg-white p-4">
                      <BlogImage
                        src={post.imageUrl || "/placeholder.svg"}
                        alt={post.imageAlt || `Featured image for ${post.title}`}
                        className="transition-transform duration-300 hover:scale-105"
                        priority={false}
                      />
                    </div>
                  </Link>
                </CardHeader>
                <CardContent className="flex-grow p-5">
                  <CardTitle className="text-xl font-semibold mb-2 leading-tight text-primary hover:text-primary/80">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </CardTitle>
                  <CardDescription className="text-gray-600 mb-3 text-sm line-clamp-3">{post.excerpt}</CardDescription>
                  <div className="text-xs text-gray-500 space-y-1">
                    <div className="flex items-center">
                      <UserIcon className="w-3.5 h-3.5 mr-1.5" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center">
                      <CalendarDaysIcon className="w-3.5 h-3.5 mr-1.5" />
                      <span>{post.date}</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="p-5 pt-0">
                  <Button asChild variant="link" className="p-0 h-auto text-primary hover:text-primary/80">
                    <Link href={`/blog/${post.slug}`}>
                      Read More <ArrowRightIcon className="w-4 h-4 ml-1" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </section>
        ) : (
          <section className="text-center py-12">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">No Blog Posts Yet</h2>
            <p className="text-gray-500">We're working on creating insightful content. Please check back soon!</p>
          </section>
        )}

        {/* Optional: Add a section for newsletter signup or featured service */}
        <section className="mt-16 py-12 bg-primary/10 rounded-lg text-center">
          <h2 className="text-2xl font-semibold text-primary mb-3">Stay Updated with EIN National Filing</h2>
          <p className="text-gray-700 mb-6 max-w-xl mx-auto">
            Get your EIN quickly and easily with our expert services. Or, subscribe to our newsletter for more tips.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Link href="/#entity-selection">Apply for an EIN Now</Link>
            </Button>
          </div>
        </section>
      </div>
    </div>
  )
}
