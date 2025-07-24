import type { Metadata } from "next"
import Breadcrumbs from "@/components/breadcrumbs"
import Link from "next/link"

export const metadata: Metadata = {
  title: "EIN Filing FAQ - Common Questions About Federal Tax ID Numbers | EIN National Filing",
  description: "Get answers to frequently asked questions about EIN filing, federal tax ID numbers, IRS requirements, processing times, and business formation. Expert guidance for your EIN application.",
  keywords: "EIN FAQ, federal tax ID questions, EIN filing help, tax ID number requirements, IRS EIN process, business formation questions, EIN application help",
  openGraph: {
    title: "EIN Filing FAQ - Common Questions About Federal Tax ID Numbers",
    description: "Get answers to frequently asked questions about EIN filing, federal tax ID numbers, IRS requirements, processing times, and business formation.",
    type: "website",
  },
}

const faqData = [
  {
    category: "EIN Basics",
    questions: [
      {
        question: "What is an EIN and do I need one for my business?",
        answer: "An Employer Identification Number (EIN), also called a Federal Tax ID Number, is a unique nine-digit number assigned by the IRS to identify your business for tax purposes. You need an EIN if you have employees, operate as a partnership, LLC, or corporation, have a Keogh plan, are involved in certain types of organizations, or want to open a business bank account. Even sole proprietors without employees often get an EIN to separate business and personal finances.",
        keywords: ["what is an EIN", "do I need an EIN", "federal tax ID number"]
      },
      {
        question: "What's the difference between an EIN and Federal Tax ID Number?",
        answer: "There is no difference - EIN and Federal Tax ID Number are two names for the exact same thing. The IRS officially calls it an Employer Identification Number (EIN), but it's commonly referred to as a Federal Tax ID Number, Business Tax ID, or simply Tax ID. All these terms refer to the same nine-digit number format: XX-XXXXXXX.",
        keywords: ["EIN vs federal tax ID", "tax ID number difference"]
      },
      {
        question: "What are my options for getting an EIN?",
        answer: "You have several choices when applying for an EIN. You can handle the paperwork yourself through various government channels, though this often involves longer wait times and navigating complex forms without assistance. Alternatively, professional services like ours handle everything for you - from form completion to submission - with faster processing and expert guidance throughout. Most businesses choose the approach that best fits their timeline and comfort level with paperwork.",
        keywords: ["EIN filing options", "EIN application methods", "professional EIN assistance"]
      }
    ]
  },
  {
    category: "Application Process",
    questions: [
      {
        question: "How long does it take to get an EIN?",
        answer: "Processing times vary by application method. The IRS online system (when working) provides immediate results, but is often down and has limited availability. Phone applications can take several hours of wait time. Mail and fax applications take 4-6 weeks. Our service typically processes EIN applications the same business day by working directly with IRS systems and handling any issues that arise during the process.",
        keywords: ["EIN processing time", "how long EIN application", "same day EIN"]
      },
      {
        question: "What information do I need to apply for an EIN?",
        answer: "You'll need: your legal business name and any trade names, complete business address (cannot be a P.O. Box), your Social Security Number or existing EIN as the responsible party, business structure type (LLC, Corporation, Partnership, etc.), the reason you're applying for an EIN, expected number of employees in the next 12 months, business start date, principal business activity, and your business phone number.",
        keywords: ["EIN application requirements", "what information needed for EIN", "EIN documentation"]
      },
      {
        question: "Can I apply for an EIN if I don't have employees?",
        answer: "Absolutely! Despite the name 'Employer' Identification Number, you don't need employees to get an EIN. Many sole proprietors, single-member LLCs, and businesses without employees get EINs to open business bank accounts, establish business credit, keep personal and business finances separate, or because their business structure requires it.",
        keywords: ["EIN without employees", "sole proprietor EIN", "single member LLC EIN"]
      },
      {
        question: "What if I make a mistake on my EIN application?",
        answer: "Minor errors can often be corrected by contacting the IRS, but significant mistakes may require canceling the EIN and applying for a new one. This process can take months and create complications with banks and vendors. Our service includes expert review of your application before submission to prevent errors, and we handle any corrections needed with the IRS on your behalf.",
        keywords: ["EIN application mistakes", "correct EIN errors", "EIN application review"]
      }
    ]
  },
  {
    category: "Business Structures & EIN Requirements",
    questions: [
      {
        question: "Does my LLC need an EIN?",
        answer: "Multi-member LLCs are required to have an EIN. Single-member LLCs aren't required to have an EIN unless they have employees, but most get one anyway to open business bank accounts, establish business credit, and maintain separation between personal and business finances. Many banks require an EIN to open a business account for an LLC.",
        keywords: ["LLC EIN requirement", "does LLC need EIN", "single member LLC EIN"]
      },
      {
        question: "Do I need an EIN for my corporation or S-Corp?",
        answer: "Yes, all corporations (C-Corp and S-Corp) are required to have an EIN, regardless of whether they have employees. You'll need the EIN to file your corporate tax returns, open business bank accounts, and handle other business activities. If you're electing S-Corp status, you'll need the EIN before making that election.",
        keywords: ["corporation EIN requirement", "S-Corp EIN", "C-Corp EIN"]
      },
      {
        question: "Does a partnership need an EIN?",
        answer: "Yes, all partnerships must have an EIN to file their annual tax returns (Form 1065), regardless of whether they have employees. This includes general partnerships, limited partnerships, and limited liability partnerships. Each partner will receive a Schedule K-1 showing their share of partnership income, deductions, and credits.",
        keywords: ["partnership EIN requirement", "partnership tax ID"]
      },
      {
        question: "Can I use my Social Security Number instead of an EIN?",
        answer: "For sole proprietors without employees, you can sometimes use your SSN instead of an EIN for tax purposes. However, most banks require an EIN to open a business account, and using your SSN for business purposes exposes your personal information. Getting an EIN provides better privacy protection and is generally recommended for all business activities.",
        keywords: ["SSN vs EIN", "sole proprietor EIN vs SSN"]
      }
    ]
  },
  {
    category: "EIN Usage & Management",
    questions: [
      {
        question: "How do I use my EIN once I receive it?",
        answer: "Use your EIN on all business tax returns, when opening business bank accounts, applying for business licenses, setting up payroll, establishing business credit, applying for business loans, and on any official business documents. Always use the format XX-XXXXXXX (two digits, hyphen, seven digits). Keep your EIN letter in a safe place as proof of assignment.",
        keywords: ["how to use EIN", "EIN format", "business tax ID usage"]
      },
      {
        question: "Can I have multiple EINs for one business?",
        answer: "Generally, no. Each business entity should have only one EIN. However, you may need separate EINs if you have multiple legal entities (like separate LLCs), if you change your business structure significantly, or if you have subsidiaries. Using multiple EINs incorrectly can cause tax complications, so consult with a tax professional if you think you need more than one.",
        keywords: ["multiple EINs", "one business multiple EINs", "separate EIN entities"]
      },
      {
        question: "What if I never received my EIN letter from the IRS?",
        answer: "If you applied directly with the IRS and never received your EIN letter, you can call the IRS Business & Specialty Tax Line at (800) 829-4933 to request a replacement. You'll need to verify your identity and business information. Our service provides secure delivery confirmation and immediate access to your EIN documentation, eliminating this common issue.",
        keywords: ["lost EIN letter", "EIN replacement", "never received EIN"]
      },
      {
        question: "Does my EIN expire or need to be renewed?",
        answer: "No, EINs do not expire and do not need to be renewed. Once assigned, your EIN is yours permanently unless you close your business or undergo a significant structural change. However, you must keep your business active and file required tax returns to maintain good standing with the IRS.",
        keywords: ["EIN expiration", "EIN renewal", "permanent EIN"]
      }
    ]
  },
  {
    category: "Banking & Financial",
    questions: [
      {
        question: "Can I open a business bank account with just an EIN?",
        answer: "An EIN is typically required for business bank accounts, but banks also require additional documentation such as your business formation documents (Articles of Incorporation, Operating Agreement, etc.), a business license (if applicable), and personal identification. The specific requirements vary by bank, but having an EIN is the first step in opening any business account.",
        keywords: ["business bank account EIN", "EIN banking requirements"]
      },
      {
        question: "Will getting an EIN affect my personal credit?",
        answer: "No, simply obtaining an EIN will not affect your personal credit score. An EIN is just an identification number for tax purposes. However, if you later apply for business credit or loans using your EIN, those applications may involve personal guarantees that could impact your personal credit. The EIN itself creates a separate business credit profile.",
        keywords: ["EIN personal credit impact", "business credit EIN"]
      },
      {
        question: "Can I use my EIN to establish business credit?",
        answer: "Yes, an EIN is essential for building business credit. It allows you to apply for business credit cards, establish trade credit with suppliers, and build a business credit profile separate from your personal credit. However, building business credit takes time and requires maintaining good payment history with business accounts.",
        keywords: ["EIN business credit", "build business credit with EIN"]
      }
    ]
  },
  {
    category: "Online Business & E-commerce",
    questions: [
      {
        question: "Do I need an EIN for my online business or e-commerce store?",
        answer: "If your online business is structured as an LLC, corporation, or partnership, you'll need an EIN. Even sole proprietors often get an EIN for online businesses to open merchant accounts, work with payment processors like Stripe or PayPal Business, open business bank accounts, and maintain professional credibility with suppliers and customers.",
        keywords: ["online business EIN", "e-commerce EIN requirement", "EIN for online store"]
      },
      {
        question: "Can I sell on Amazon, eBay, or Etsy without an EIN?",
        answer: "You can start selling on these platforms as an individual using your SSN, but as your business grows, you'll likely need an EIN. An EIN is required if you form an LLC or corporation, want to open a business bank account, need to collect sales tax in multiple states, or want to establish business credit. Many successful sellers get an EIN early to separate business and personal finances.",
        keywords: ["Amazon EIN requirement", "eBay business EIN", "Etsy seller EIN"]
      },
      {
        question: "Do I need an EIN for affiliate marketing or dropshipping?",
        answer: "While not always legally required, an EIN is highly recommended for affiliate marketing and dropshipping businesses. It helps you open business bank accounts, work with affiliate networks that require business information, maintain professional relationships with suppliers, and properly track business income and expenses for tax purposes.",
        keywords: ["affiliate marketing EIN", "dropshipping EIN", "online marketing business EIN"]
      }
    ]
  },
  {
    category: "Taxes & Compliance",
    questions: [
      {
        question: "What taxes do I need to file with my EIN?",
        answer: "The taxes you file depend on your business structure. Sole proprietors typically file Schedule C with their personal tax return. LLCs file Form 1065 (partnerships) or may be taxed as sole proprietors or corporations. Corporations file Form 1120 (C-Corp) or Form 1120S (S-Corp). You may also need to file employment tax returns if you have employees. Your EIN is required on all business tax filings.",
        keywords: ["EIN tax filing requirements", "business tax forms EIN"]
      },
      {
        question: "When is my first tax filing due after getting an EIN?",
        answer: "Your first tax filing deadline depends on your business structure and when you started operations. Most businesses file annually by March 15th (partnerships and S-Corps) or April 15th (sole proprietors and C-Corps). If you have employees, you'll need to file employment tax returns quarterly. The IRS will send you information about your filing requirements after you receive your EIN.",
        keywords: ["first tax filing deadline EIN", "new business tax requirements"]
      },
      {
        question: "Do I need to file taxes even if my business made no money?",
        answer: "Yes, certain business structures must file tax returns even with no income. Partnerships and S-Corps must file annual returns regardless of income. C-Corps must file if they had gross receipts. LLCs taxed as partnerships must file. Even if no tax is owed, failing to file required returns can result in penalties. Consult with a tax professional about your specific situation.",
        keywords: ["file taxes no income business", "zero income business tax filing"]
      }
    ]
  },
  {
    category: "Special Situations",
    questions: [
      {
        question: "Can a non-US citizen or foreign business get an EIN?",
        answer: "Yes, foreign individuals and businesses can obtain an EIN if they need to conduct business in the United States. Non-US citizens without an SSN can apply by phone or mail/fax, but cannot use the online system. Foreign businesses often need an EIN to open US bank accounts, hire US employees, or conduct business with US companies.",
        keywords: ["foreign business EIN", "non-US citizen EIN", "international business EIN"]
      },
      {
        question: "What if I'm starting a nonprofit organization?",
        answer: "Nonprofit organizations need an EIN before applying for tax-exempt status with the IRS. You'll first get your EIN, then file Form 1023 or 1023-EZ for 501(c)(3) status. The EIN application process is the same, but you'll select 'Other nonprofit organization' as your entity type and indicate your planned activities.",
        keywords: ["nonprofit EIN", "501c3 EIN requirement", "charity organization EIN"]
      },
      {
        question: "Do I need a new EIN if I change my business structure?",
        answer: "It depends on the type of change. You typically need a new EIN if you incorporate a sole proprietorship, convert from sole proprietorship to partnership, change from partnership to corporation, or undergo certain other structural changes. Minor changes like business name or address don't require a new EIN. Contact the IRS or consult with a professional for complex structural changes.",
        keywords: ["change business structure EIN", "new EIN business conversion"]
      },
      {
        question: "Can I transfer my EIN to a new owner?",
        answer: "No, EINs cannot be transferred between owners. If you sell your business, the new owner will typically need to apply for their own EIN. However, in some cases involving asset purchases vs. stock purchases, the EIN might remain with the business entity. This is a complex area that requires professional guidance to ensure proper compliance.",
        keywords: ["transfer EIN new owner", "sell business EIN transfer"]
      }
    ]
  }
]

export default function FAQPage() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "FAQ", href: "/faq", current: true },
  ]

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.flatMap(category => 
      category.questions.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    )
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      <main className="min-h-screen">
        <Breadcrumbs items={breadcrumbItems} />

        <section className="irs-section bg-white pt-10 pb-16">
          <div className="irs-container max-w-4xl">
            <div className="mb-12 text-center">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                Frequently Asked Questions About EIN Filing
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Get expert answers to the most common questions about Federal Tax ID Numbers, 
                EIN applications, and business formation requirements.
              </p>
            </div>

            <div className="mb-8 p-6 bg-blue-50 rounded-lg border border-blue-200">
              <h2 className="text-lg font-semibold text-blue-900 mb-2">Need immediate help?</h2>
              <p className="text-blue-800 mb-4">
                Can't find the answer you're looking for? Our EIN specialists are here to help with your specific situation.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/apply-ein-online"
                  className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors text-center"
                >
                  Start Your EIN Application
                </Link>
                <Link
                  href="/contact"
                  className="inline-block bg-white text-blue-600 px-6 py-3 rounded-lg font-medium border border-blue-600 hover:bg-blue-50 transition-colors text-center"
                >
                  Contact Our Experts
                </Link>
              </div>
            </div>

            <div className="space-y-12">
              {faqData.map((category, categoryIndex) => (
                <div key={categoryIndex} className="border-b border-gray-200 pb-8 last:border-b-0">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                    <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">
                      {categoryIndex + 1}
                    </span>
                    {category.category}
                  </h2>
                  
                  <div className="space-y-6">
                    {category.questions.map((faq, questionIndex) => (
                      <div key={questionIndex} className="bg-gray-50 rounded-lg p-6">
                        <h3 className="text-lg font-semibold text-gray-900 mb-3">
                          {faq.question}
                        </h3>
                        <p className="text-gray-700 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg p-8 text-center text-white">
              <h2 className="text-2xl font-bold mb-4">Ready to Get Your EIN?</h2>
              <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                Skip the hassle of dealing with IRS phone lines and confusing forms. Our expert team 
                handles your EIN application with professional accuracy and same-day processing.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/apply-ein-online"
                  className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
                >
                  Start Your Application
                </Link>
                <Link
                  href="/pricing"
                  className="bg-blue-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-400 transition-colors border border-blue-400"
                >
                  View Pricing
                </Link>
              </div>
            </div>

            <div className="mt-12 text-center">
              <p className="text-gray-600">
                Still have questions? <Link href="/contact" className="text-blue-600 hover:text-blue-700 font-medium">Contact our EIN experts</Link> for personalized assistance.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  )
} 