import type { Metadata } from "next"
import ContactPageClient from "./ContactPageClient"

export const metadata: Metadata = {
  title: "Contact Us | Federal Tax ID Number (EIN) Filing Service",
  description:
    "Contact our customer support team for assistance with your EIN application or questions about our services.",
  keywords: "contact EIN service, tax ID support, EIN filing help, business tax ID assistance, IRS EIN contact",
}

export default function ContactPage() {
  return <ContactPageClient />
}
