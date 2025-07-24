import type { Metadata } from "next"
import { redirect } from "next/navigation"
import Script from "next/script"

export const metadata: Metadata = {
  title: "Apply for EIN Online | Fast Federal Tax ID Application",
  description:
    "Apply for your Employer Identification Number (EIN) online today. Fast, secure, and IRS-compliant Federal Tax ID application process. Get your EIN in 24 hours or same-day with express service.",
  keywords:
    "apply for EIN online, EIN application online, get EIN online, Federal Tax ID application, online EIN filing, EIN application form, apply for Federal Tax ID, business tax ID application",
  alternates: {
    canonical: "https://einnationalfiling.com/apply-ein-online",
  },
}

export default function ApplyEINOnlinePage() {
  // Redirect to homepage with anchor
  redirect("/#entity-types")

  return null
} 