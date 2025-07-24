import type { Metadata } from "next"
import EntityCards from "@/components/entity-cards"
import EntityDefinitions from "@/components/entity-definitions"
import SupportSection from "@/components/support-section"
import FaqSection from "@/components/faq-section"
import Breadcrumbs from "@/components/breadcrumbs"
import Script from "next/script"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Get Your EIN Online Fast | Professional Federal Tax ID Filing Service",
  description:
    "Professional EIN filing service for all business types. Apply for your Federal Employer Identification Number (EIN) online with expert assistance. Same-day processing available. Secure, IRS-compliant application process.",
  keywords:
    "EIN application online, get EIN fast, Federal Tax ID application, FEIN filing service, Employer Identification Number online, EIN same day, business tax ID, IRS EIN filing, Form SS-4 help, EIN for LLC, EIN for corporation, business registration, tax identification number",
  openGraph: {
    title: "Get Your EIN Online Fast | Professional Federal Tax ID Filing Service",
    description: "Professional EIN filing service for all business types. Same-day processing available with expert assistance.",
    url: "https://einnationalfiling.com",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "EIN National Filing - Professional EIN Service",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Get Your EIN Online Fast | Professional Federal Tax ID Filing Service",
    description: "Professional EIN filing service for all business types. Same-day processing available with expert assistance.",
    images: ["/twitter-image.png"],
  },
  alternates: {
    canonical: "https://einnationalfiling.com",
  },
  other: {
    "article:publisher": "https://einnationalfiling.com",
    "og:site_name": "EIN National Filing",
  },
}

export default function Home() {
  const entityDefinitions = [
    {
      id: 1,
      name: "Sole Proprietorship",
      definition:
        "A Sole Proprietorship is the simplest and most common business structure for individuals starting a business. In this entity type, there is no legal distinction between the owner and the business—the business is not a separate legal entity. As a sole proprietor, you have complete control over business decisions, receive all profits directly, and can easily establish or dissolve the business. However, you also assume complete personal liability for all business debts, obligations, and legal issues. For tax purposes, business income and expenses are reported on Schedule C of your personal tax return (Form 1040), and you're responsible for self-employment taxes (Social Security and Medicare). While an EIN is not required if you have no employees, obtaining one can help separate personal and business finances and may be necessary for opening business bank accounts or applying for certain licenses. Sole proprietorships are ideal for low-risk businesses, freelancers, consultants, and entrepreneurs testing new business concepts before establishing more complex legal structures.",
    },
    {
      id: 2,
      name: "Single-Member LLC",
      definition:
        "A Single-Member Limited Liability Company (LLC) combines the simplicity of a sole proprietorship with the liability protection of a corporation. As the name suggests, this entity has only one owner (member) but exists as a separate legal entity from its owner under state law. This separation creates a liability shield that protects your personal assets from business debts and legal claims—a significant advantage over sole proprietorships. By default, the IRS treats Single-Member LLCs as 'disregarded entities' for tax purposes, meaning profits and losses pass through to your personal tax return, similar to a sole proprietorship. However, you can elect to be taxed as a corporation by filing Form 8832. Single-Member LLCs require filing formation documents with your state and maintaining compliance with state requirements, which may include annual reports and fees. This structure is particularly beneficial for businesses with potential liability exposure but who want operational simplicity and pass-through taxation. An EIN is required if you have employees or if you elect corporate taxation, and is recommended even if not strictly required.",
    },
    {
      id: 3,
      name: "Multi-Member LLC",
      definition:
        "A Multi-Member Limited Liability Company (LLC) is a flexible business structure owned by two or more individuals or entities (members). Like its single-member counterpart, a Multi-Member LLC provides liability protection by legally separating the business from its owners, protecting personal assets from business debts and liabilities. By default, the IRS classifies Multi-Member LLCs as partnerships for tax purposes, requiring the filing of Form 1065 (U.S. Return of Partnership Income) and issuing Schedule K-1 forms to each member reporting their share of profits and losses. Members then report this income on their personal tax returns. Alternatively, Multi-Member LLCs can elect to be taxed as corporations by filing Form 8832. Governance is typically outlined in an operating agreement—a crucial document that details ownership percentages, voting rights, profit distributions, management responsibilities, and procedures for adding or removing members. This structure offers significant flexibility in management and profit distribution compared to corporations, making it popular for family businesses, joint ventures, and businesses with multiple investors who want liability protection without the formalities of a corporation. An EIN is required for Multi-Member LLCs regardless of whether they have employees.",
    },
    {
      id: 4,
      name: "Corporation",
      definition:
        "A Corporation (often referred to as a C Corporation) is a legal entity completely separate from its owners (shareholders), offering the strongest liability protection of all business structures. This separation creates a distinct 'corporate veil' that shields shareholders' personal assets from business debts and legal claims. Corporations issue stock to shareholders, are governed by a board of directors elected by shareholders, and are managed by appointed officers. The defining characteristic of C Corporations is their tax treatment—they pay taxes on corporate profits at the corporate tax rate by filing Form 1120. When profits are distributed to shareholders as dividends, shareholders also pay personal income tax on these distributions, creating the 'double taxation' that distinguishes C Corporations. However, corporations can deduct business expenses, including salaries and benefits to employees (including shareholder-employees). Corporations must adhere to formal requirements including holding regular board and shareholder meetings, maintaining detailed minutes, following corporate bylaws, and filing annual reports with the state. This structure is ideal for businesses planning significant growth, seeking outside investment or eventual public offering, or requiring robust liability protection. All corporations must obtain an EIN for tax filing purposes.",
    },
    {
      id: 5,
      name: "S Corporation",
      definition:
        "An S Corporation is not a distinct business entity type but rather a special tax election available to qualifying corporations and LLCs. By filing Form 2553 with the IRS, eligible businesses can avoid the double taxation of C Corporations while maintaining liability protection. S Corporations are pass-through entities for federal tax purposes—business income, deductions, credits, and losses pass through to shareholders and are reported on their personal tax returns in proportion to their ownership stake. This eliminates corporate-level taxation while preserving the liability shield between the business and its owners. To qualify for S Corporation status, a business must: be a domestic corporation or LLC, have only allowable shareholders (individuals, certain trusts, and estates—no partnerships or non-resident aliens), have no more than 100 shareholders, have only one class of stock, and not be an ineligible corporation (certain financial institutions, insurance companies, and domestic international sales corporations). A significant tax advantage of S Corporations is the potential reduction in self-employment taxes—shareholders who actively work in the business must receive a 'reasonable salary' subject to employment taxes, but additional profit distributions are not subject to self-employment taxes. S Corporations must file Form 1120-S annually and provide Schedule K-1 forms to shareholders. This structure is particularly beneficial for profitable small to medium-sized businesses where owners are actively involved and want to minimize self-employment taxes while maintaining liability protection.",
    },
    {
      id: 6,
      name: "Partnership",
      definition:
        "A Partnership is a business relationship between two or more individuals or entities who agree to share in the profits, losses, and management responsibilities of a business. The three main types of partnerships are General Partnerships, Limited Partnerships, and Limited Liability Partnerships, each with distinct liability characteristics. In a General Partnership, all partners share equally in management responsibilities and have unlimited personal liability for business debts. Limited Partnerships have at least one general partner with unlimited liability who manages the business and limited partners whose liability is restricted to their investment amount but who have limited management authority. Limited Liability Partnerships (LLPs) provide liability protection to all partners for the actions of other partners, though partners remain liable for their own actions. Partnerships are pass-through entities for tax purposes—the partnership itself doesn't pay income tax but files an informational return (Form 1065) and issues Schedule K-1 forms to partners showing their share of profits and losses, which they report on their personal tax returns. Partners must also pay self-employment taxes on their share of partnership income. Partnerships are typically governed by a partnership agreement that outlines capital contributions, profit and loss allocations, management responsibilities, dispute resolution procedures, and exit strategies. This structure offers management flexibility and is common for professional service firms (law, accounting, medicine), family businesses, and joint ventures between existing businesses. All partnerships must obtain an EIN for tax filing purposes, even if they don't have employees.",
    },
    {
      id: 7,
      name: "Non-Profit",
      definition:
        "A Non-Profit Organization (NPO) is a legal entity organized and operated for purposes other than generating profit—typically charitable, educational, religious, scientific, literary, or other public benefit purposes. Unlike for-profit businesses, non-profits do not distribute earnings to owners, shareholders, or directors; instead, any surplus funds must be used to further the organization's mission and activities. The most common type of non-profit is the 501(c)(3) organization, named after the section of the Internal Revenue Code that grants tax-exempt status. To qualify, organizations must apply to the IRS using Form 1023 or 1023-EZ and demonstrate they serve approved purposes. Once granted, 501(c)(3) status provides federal income tax exemption and allows donors to deduct contributions on their tax returns. Non-profits must be incorporated at the state level before applying for federal tax exemption, requiring articles of incorporation, bylaws, and a board of directors. They must file annual information returns (Form 990 series) with the IRS and comply with state reporting requirements. Non-profits can generate income through donations, grants, program service revenue, and even unrelated business activities (though the latter may be subject to Unrelated Business Income Tax). This structure is appropriate for organizations primarily focused on mission rather than profit, including charities, foundations, religious organizations, educational institutions, and social welfare organizations. All non-profits must obtain an EIN, which is required for the tax-exemption application and for banking, hiring, and grant applications.",
    },
    {
      id: 8,
      name: "Estate",
      definition:
        "An Estate is a temporary legal entity created upon a person's death to manage and distribute their assets and handle tax obligations. It exists from the time of death until the final distribution of assets to heirs and beneficiaries. The estate consists of all property, investments, and other assets owned by the deceased (decedent) at the time of death. Estate administration is typically handled by an executor (named in the will) or an administrator (appointed by the court if there is no will), who has legal authority to collect assets, pay debts and taxes, and distribute remaining assets according to the will or state intestacy laws if no will exists. For tax purposes, an estate is a separate taxpaying entity with its own tax identification number (EIN) and must file Form 1041 (U.S. Income Tax Return for Estates and Trusts) if it generates more than $600 in annual income or has a beneficiary who is a non-resident alien. Additionally, estates exceeding certain value thresholds may be subject to federal estate tax (Form 706) and state inheritance or estate taxes. The estate remains open until all assets are distributed, debts and taxes are paid, and final tax returns are filed. During this period, income generated by estate assets (such as interest, dividends, or rental income) is taxable to the estate or its beneficiaries. Obtaining an EIN for an estate is necessary for opening estate bank accounts, transferring certain assets, and filing required tax returns. The estate entity is distinct from a trust, though some estates may include testamentary trusts created by the decedent's will.",
    },
    {
      id: 9,
      name: "Trust",
      definition:
        "A Trust is a legal arrangement where one party (the trustor or grantor) transfers assets to another party (the trustee) to hold and manage for the benefit of a third party (the beneficiary). Unlike temporary estates, trusts can exist for extended periods—even across generations—and can be established during the grantor's lifetime (living trust) or created upon death through a will (testamentary trust). Trusts serve various purposes including asset protection, tax planning, avoiding probate, providing for minors or individuals with special needs, charitable giving, and maintaining privacy regarding asset distribution. The two main categories are revocable trusts (which can be altered or terminated by the grantor during their lifetime) and irrevocable trusts (which generally cannot be modified once established). For tax purposes, trusts are classified as either grantor trusts (where the grantor retains certain powers and is taxed on trust income) or non-grantor trusts (separate taxpaying entities that file Form 1041). Non-grantor trusts receive their own EIN and may be subject to different tax rates and rules than individuals. Common types include marital trusts, bypass trusts, generation-skipping trusts, charitable trusts, special needs trusts, and spendthrift trusts—each designed for specific situations and objectives. Trusts are governed by a trust document that outlines the trustee's powers and responsibilities, beneficiary rights, distribution terms, and trust duration. While more complex and costly to establish than simple wills, trusts offer significant advantages for comprehensive estate planning, particularly for larger estates or those with complex distribution requirements. An EIN is required for most trusts except certain revocable living trusts where the grantor is also the trustee.",
    },
    {
      id: 10,
      name: "Other",
      definition:
        "The 'Other' category encompasses various specialized entity types that don't fit neatly into common business structures but may still require Federal Employer Identification Numbers (EINs) for tax purposes. This includes governmental organizations (federal, state, local agencies, and Native American tribal entities) which need EINs for tax administration even though they may be exempt from certain taxes. Religious organizations like churches, synagogues, mosques, and temples often qualify for automatic tax exemption without formal 501(c)(3) application but still need EINs for banking and employment purposes. Foreign entities doing business in the U.S. require EINs if they have U.S. income, U.S. employees, or U.S. bank accounts, even if they have no physical presence in the country. Personal service corporations (PSCs)—incorporated businesses providing services in fields like health, law, engineering, architecture, accounting, or consulting—face special tax considerations and higher flat tax rates. Farmers' cooperatives, homeowners' associations, political organizations, and certain joint ventures also fall into this category. Additionally, this classification includes unique situations like bankruptcy estates (created when individuals or businesses file for bankruptcy protection), qualified retirement plans that generate income, and certain types of trusts not covered by standard trust classifications. Each of these entity types has specific EIN requirements and tax filing obligations based on their particular circumstances and activities. If your organization doesn't clearly fit into standard business categories, consulting with a tax professional is advisable to determine the appropriate classification and compliance requirements.",
    },
  ]

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "EIN Filing", href: "/ein-filing", current: true },
  ]

  return (
    <>
      <main className="min-h-screen">
        <Breadcrumbs items={breadcrumbItems} />

        {/* Hero Section */}
        <section className="irs-section bg-secondary/30 pt-10 pb-8">
          <div className="irs-container">
            <div className="text-center mb-8">
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3">
                Get Your EIN Online Fast - Federal Tax ID Filing Service
              </h1>
              <p className="text-gray-700 max-w-3xl mx-auto mb-4">
                Apply for your Federal Employer Identification Number (EIN) online in minutes. Same-day processing available for urgent needs. Our secure, IRS-compliant application process makes getting your business tax ID simple and fast.
              </p>
              <div className="flex justify-center gap-4 mb-6">
                <Link href="/form-ss4" className="text-primary hover:text-primary/80 text-sm flex items-center">
                  View Form SS-4 Reference Guide
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="ml-1"
                  >
                    <path d="M7 7h10v10" />
                    <path d="M7 17 17 7" />
                  </svg>
                </Link>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 mb-6">
              <EntityCards />
            </div>
          </div>
        </section>

        {/* Entity Definitions Section */}
        <section className="irs-section bg-white" id="entity-definitions">
          <div className="irs-container">
            <h2 className="irs-heading">IRS Entity Definitions</h2>
            <p className="text-gray-700 mb-6">
              The Internal Revenue Service (IRS) recognizes various business entities for tax purposes. Understanding
              the differences between these entity types is crucial for determining your tax obligations and filing
              requirements. Review the definitions below to identify which entity type best describes your business or
              organization.
            </p>
            <EntityDefinitions entityDefinitions={entityDefinitions} />
          </div>
        </section>

        {/* FAQ Section */}
        <FaqSection />

        {/* Benefits Section for SEO */}
        <section className="irs-section bg-gray-50" id="benefits">
          <div className="irs-container">
            <h2 className="irs-heading">Why Apply for Your EIN Online with Us?</h2>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold text-lg mb-3 text-primary">Fast Processing</h3>
                <p className="text-gray-700">Get your Federal Tax ID in as little as 24 hours with our standard service, or same-day with express processing.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold text-lg mb-3 text-primary">IRS Compliant</h3>
                <p className="text-gray-700">Our secure application process follows all IRS requirements and guidelines for EIN applications.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold text-lg mb-3 text-primary">Expert Support</h3>
                <p className="text-gray-700">Professional assistance throughout the entire EIN application process with dedicated customer support.</p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 mt-8">
              <h3 className="text-xl font-semibold mb-4 text-primary">Helpful Resources for Your Business</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">By Business Type:</h4>
                  <ul className="space-y-1 text-sm">
                    <li><Link href="/blog/corporation-ein-requirements" className="text-primary hover:text-primary/80 hover:underline">Corporation EIN Guide</Link></li>
                    <li><Link href="/blog/llc-ein-requirements-state-guide" className="text-primary hover:text-primary/80 hover:underline">LLC EIN by State</Link></li>
                    <li><Link href="/blog/first-time-entrepreneur-ein-guide" className="text-primary hover:text-primary/80 hover:underline">First-Time Entrepreneur Guide</Link></li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Business Setup:</h4>
                  <ul className="space-y-1 text-sm">
                    <li><Link href="/blog/business-license-vs-ein-requirements" className="text-primary hover:text-primary/80 hover:underline">Business License vs EIN</Link></li>
                    <li><Link href="/blog/dba-vs-ein-requirements" className="text-primary hover:text-primary/80 hover:underline">DBA vs EIN Requirements</Link></li>
                    <li><Link href="/blog/ein-vs-itin-vs-ssn-differences" className="text-primary hover:text-primary/80 hover:underline">EIN vs ITIN vs SSN</Link></li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Application Help:</h4>
                  <ul className="space-y-1 text-sm">
                    <li><Link href="/blog/llc-ein-requirements-state-guide" className="text-primary hover:text-primary/80 hover:underline">State-Specific EIN Guide</Link></li>
                    <li><Link href="/blog/business-license-vs-ein-requirements" className="text-primary hover:text-primary/80 hover:underline">Professional vs DIY Applications</Link></li>
                    <li><Link href="/form-ss4" className="text-primary hover:text-primary/80 hover:underline">Form SS-4 Reference</Link></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Support Section */}
        <SupportSection />
      </main>

      {/* Enhanced Service Schema */}
      <Script
        id="service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "@id": "https://einnationalfiling.com/#service",
            name: "Federal Employer Identification Number (EIN) Filing Service",
            alternateName: "FEIN Filing Service",
            description: "Fast and secure Federal Tax ID Number (EIN) filing service for all entity types. Professional assistance with same-day processing available.",
            provider: {
              "@id": "https://einnationalfiling.com/#organization"
            },
            serviceType: "Tax Filing Service",
            category: "Business Services",
            audience: {
              "@type": "BusinessAudience",
              "audienceType": "Small Business Owners, Entrepreneurs, Corporations, LLCs"
            },
            areaServed: {
              "@type": "Country",
              name: "United States"
            },
            availableChannel: {
              "@type": "ServiceChannel",
              "serviceUrl": "https://einnationalfiling.com",
              "servicePhone": "(800) 555-1234",
              "availableLanguage": "English"
            },
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "EIN Filing Service Options",
              itemListElement: [
                {
                  "@type": "Offer",
                  name: "Standard EIN Filing",
                  description: "Complete EIN filing service for all entity types with 24-48 hour processing",
                  price: "249",
                  priceCurrency: "USD",
                  priceValidUntil: "2025-12-31",
                  availability: "https://schema.org/InStock",
                  validFrom: "2024-01-01"
                },
                {
                  "@type": "Offer",
                  name: "Same-Day Express EIN Filing",
                  description: "Expedited processing with same-day delivery when submitted before 1 PM EST",
                  price: "329",
                  priceCurrency: "USD",
                  priceValidUntil: "2025-12-31",
                  availability: "https://schema.org/InStock",
                  validFrom: "2024-01-01"
                }
              ]
            },
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.8",
              reviewCount: "2847",
              bestRating: "5",
              worstRating: "1"
            }
          }),
        }}
      />

      {/* Structured Data for FAQPage */}
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "What is an EIN or Federal Tax ID Number?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "An Employer Identification Number (EIN), also known as a Federal Tax Identification Number or FEIN, is a unique nine-digit number assigned by the Internal Revenue Service (IRS) to business entities operating in the United States. It's used to identify taxpayers who are required to file various business tax returns and is essential for opening business bank accounts, hiring employees, and filing taxes.",
                },
              },
              {
                "@type": "Question", 
                name: "How fast can I get my EIN online?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "With our same-day express service, you can get your EIN online within hours when you submit before 1 PM EST. Our standard service delivers your Federal Tax ID within 24-48 hours. This is much faster than applying directly with the IRS, which can take 4-6 weeks by mail.",
                },
              },
              {
                "@type": "Question",
                name: "Can I apply for an EIN online for any business type?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes! You can apply for an EIN online for any business entity type including sole proprietorships, LLCs, corporations, S-corps, partnerships, non-profits, estates, and trusts. Our service handles EIN applications for all IRS-recognized business structures.",
                },
              },
              {
                "@type": "Question",
                name: "Who needs an EIN?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "You need an EIN if you: have employees, operate your business as a corporation or partnership, file tax returns for employment, excise, or alcohol, tobacco, and firearms, withhold taxes on income, other than wages, paid to a non-resident alien, have a Keogh plan, or are involved with certain organizations.",
                },
              },
              {
                "@type": "Question",
                name: "What makes your service different?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "We're a specialized document preparation service that focuses exclusively on business formation paperwork. Our team provides personalized assistance, faster processing times, and comprehensive support throughout the entire application process.",
                },
              },
              {
                "@type": "Question",
                name: "What information do I need to apply for an EIN?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "You'll need: the legal name of your business entity, the business mailing address, the responsible party's name and Social Security Number (or ITIN), the type of entity, the reason for applying, and information about your business activities and employees.",
                },
              },
            ],
          }),
        }}
      />

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
                item: "https://einnationalfiling.com/ein-filing",
              },
            ],
          }),
        }}
      />

      {/* Structured Data for HowTo */}
      <Script
        id="howto-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HowTo",
            name: "How to Apply for an EIN Online",
            description: "Follow these steps to apply for your Federal Employer Identification Number (EIN) online.",
            totalTime: "PT15M",
            estimatedCost: {
              "@type": "MonetaryAmount",
              currency: "USD",
              value: "249.00",
            },
            step: [
              {
                "@type": "HowToStep",
                name: "Select Your Entity Type",
                text: "Choose the business structure that matches your organization from our comprehensive list of entity types.",
                url: "https://einnationalfiling.com/#entity-types",
                image: "https://einnationalfiling.com/images/select-entity.jpg",
              },
              {
                "@type": "HowToStep",
                name: "Complete Your Application",
                text: "Fill out our user-friendly form with your business information. We'll guide you through each step.",
                url: "https://einnationalfiling.com/apply",
                image: "https://einnationalfiling.com/images/complete-application.jpg",
              },
              {
                "@type": "HowToStep",
                name: "Receive Your EIN",
                text: "We'll process your application and deliver your EIN typically within 24 hours via secure email.",
                url: "https://einnationalfiling.com/confirmation",
                image: "https://einnationalfiling.com/images/receive-ein.jpg",
              },
            ],
          }),
        }}
      />
    </>
  )
}
