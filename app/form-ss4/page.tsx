import type { Metadata } from "next"
import Breadcrumbs from "@/components/breadcrumbs"
import FormSS4Reference from "@/components/form-ss4-reference"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { FileText, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Form SS-4 Reference | Federal Tax ID Number (EIN) Filing Service",
  description:
    "Reference guide for IRS Form SS-4 (Application for Employer Identification Number). Learn what information you'll need to provide when applying for an EIN.",
  keywords: "Form SS-4, EIN application form, Employer Identification Number application, IRS form, tax ID application",
}

export default function FormSS4Page() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Form SS-4 Reference", href: "/form-ss4", current: true },
  ]

  return (
    <main className="min-h-screen">
      <Breadcrumbs items={breadcrumbItems} />

      <section className="irs-section bg-white pt-8 pb-12">
        <div className="irs-container max-w-4xl">
          <div className="mb-8">
            <h1 className="text-2xl md:text-3xl font-bold mb-3">IRS Form SS-4 Reference Guide</h1>
            <p className="text-gray-700 mb-6">
              Form SS-4 is the official IRS application for an Employer Identification Number (EIN). Our service helps
              you complete this form correctly and submit it to the IRS. Below is a reference of all the information
              you'll need to provide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button asChild>
                <Link href="/" className="flex items-center">
                  <ArrowRight className="h-4 w-4 mr-2" />
                  Start Your EIN Application
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <a
                  href="https://www.irs.gov/pub/irs-pdf/fss4.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center"
                >
                  <FileText className="h-4 w-4 mr-2" />
                  Download Official IRS Form
                </a>
              </Button>
            </div>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mb-6">
            <h2 className="text-lg font-semibold mb-2 text-primary">How Our Service Works</h2>
            <p className="text-gray-700 mb-4">
              Instead of filling out this complex form yourself, our service guides you through a simple online
              application process. We'll:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-gray-700 mb-4">
              <li>Ask you for all required information in a user-friendly format</li>
              <li>Ensure your application is complete and accurate</li>
              <li>Submit the form to the IRS on your behalf</li>
              <li>Deliver your EIN typically within 24 hours</li>
            </ul>
            <p className="text-gray-700">
              The form below is provided as a reference so you can see what information you'll need to gather before
              starting your application.
            </p>
          </div>

          <FormSS4Reference />

          <div className="mt-8 bg-primary/10 p-6 rounded-lg border border-primary/20">
            <h2 className="text-lg font-semibold mb-3 text-primary">Ready to Apply for Your EIN?</h2>
            <p className="text-gray-700 mb-4">
              Our streamlined application process makes it easy to get your EIN without dealing with complex government
              forms.
            </p>
            <Button asChild>
              <Link href="/">Start Your Application Now</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
