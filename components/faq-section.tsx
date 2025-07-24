"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

interface FaqItem {
  question: string
  answer: string
}

export default function FaqSection() {
  const [openItem, setOpenItem] = useState<number | null>(null)

  const toggleItem = (index: number) => {
    setOpenItem(openItem === index ? null : index)
  }

  const faqs: FaqItem[] = [
    {
      question: "What is an EIN or Federal Tax ID Number?",
      answer:
        "An Employer Identification Number (EIN), also known as a Federal Tax Identification Number, is a unique nine-digit number assigned by the Internal Revenue Service (IRS) to business entities operating in the United States. It's used to identify taxpayers who are required to file various business tax returns. Think of it as a Social Security Number for your business.",
    },
    {
      question: "Who needs an EIN?",
      answer:
        "You need an EIN if you: have employees, operate your business as a corporation or partnership, file tax returns for employment, excise, or alcohol, tobacco, and firearms, withhold taxes on income, other than wages, paid to a non-resident alien, have a Keogh plan, or are involved with certain organizations. Most banks require an EIN to open a business bank account, even for sole proprietors.",
    },
    {
      question: "How long does it take to get an EIN?",
      answer:
        "With our service, you can typically receive your EIN within 24 hours of submitting a complete application. If you apply directly with the IRS, it may take 4-6 weeks to receive your EIN confirmation by mail, though you may be able to get it immediately if you apply online through the IRS website during their business hours.",
    },
    {
      question: "What makes your service different?",
      answer:
        "We're a specialized document preparation service that focuses exclusively on business formation paperwork. Our team provides personalized assistance, faster processing times, and comprehensive support throughout the entire application process. While there are various ways to handle business filings, our clients appreciate the convenience and expertise we bring to what can be a complex process.",
    },
    {
      question: "What information do I need to apply for an EIN?",
      answer:
        "You'll need: the legal name of your business entity, the business mailing address, the responsible party's name and Social Security Number (or ITIN), the type of entity, the reason for applying, and information about your business activities and employees. Our application process will guide you through all required information step by step. You can also view our Form SS-4 reference guide to see all the information that will be needed.",
    },
    {
      question: "What is Form SS-4?",
      answer:
        "Form SS-4 is the official IRS application form for an Employer Identification Number (EIN). When you use our service, we help you complete this form correctly and submit it to the IRS on your behalf. You can view our Form SS-4 reference guide to see what information is required on the official form.",
    },
    {
      question: "Can I apply for an EIN if I don't have a Social Security Number?",
      answer:
        "If you don't have a Social Security Number, you may be able to obtain an EIN by using an Individual Taxpayer Identification Number (ITIN). If you don't have an ITIN either, you can still apply for an EIN by mail or fax using Form SS-4 and following special instructions. Our service can help guide you through this process.",
    },
    {
      question: "Can I change my business structure after getting an EIN?",
      answer:
        "Yes, you can change your business structure after obtaining an EIN. However, depending on the type of change, you may need to apply for a new EIN. For example, if you change from a sole proprietorship to a corporation or partnership, you'll need a new EIN. Our customer support team can help determine if your specific change requires a new EIN.",
    },
  ]

  return (
    <section className="irs-section bg-secondary/30" id="faq">
      <div className="irs-container">
        <h2 className="irs-heading">Frequently Asked Questions</h2>
        <p className="text-gray-700 mb-6 max-w-3xl">
          Find answers to common questions about Federal Employer Identification Numbers (EINs) and our filing service.
          If you don't see your question answered here, please contact our support team via email.
        </p>

        <div className="bg-white rounded-md shadow-sm border border-gray-200 overflow-hidden">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-200 last:border-b-0">
              <button
                className={`w-full flex justify-between items-center p-4 text-left transition-colors ${
                  openItem === index ? "bg-secondary text-primary font-medium" : "hover:bg-gray-50"
                }`}
                onClick={() => toggleItem(index)}
                aria-expanded={openItem === index}
                aria-controls={`faq-answer-${index}`}
              >
                <span className="font-medium">{faq.question}</span>
                <ChevronDown
                  className={`h-5 w-5 text-gray-500 transition-transform ${
                    openItem === index ? "transform rotate-180 text-primary" : ""
                  }`}
                />
              </button>
              <div
                id={`faq-answer-${index}`}
                className={`transition-all duration-200 ${
                  openItem === index ? "max-h-96" : "max-h-0 overflow-hidden p-0"
                }`}
              >
                <div className="p-4 bg-white border-t border-gray-200">
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
