import type { Metadata } from "next"
import { redirect } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle, Download, Mail, ArrowRight } from "lucide-react"
import Script from "next/script"

export const metadata: Metadata = {
  title: "Payment Confirmation | Federal Tax ID Number (EIN) Filing Service",
  description: "Your EIN application payment has been processed successfully. Track your application status.",
  keywords: "EIN confirmation, tax ID payment confirmation, EIN application status",
}

export default function ConfirmationPage({
  searchParams,
}: {
  searchParams: { applicationId?: string; entityType?: string }
}) {
  // If no application ID is provided, redirect to home
  if (!searchParams.applicationId) {
    redirect("/")
  }

  return (
    <main className="min-h-screen">
      <section className="irs-section bg-secondary/30 pt-10 pb-16">
        <div className="irs-container max-w-3xl mx-auto">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            <div className="bg-primary text-white p-6 text-center">
              <div className="bg-white/10 p-3 rounded-full inline-flex mb-4">
                <CheckCircle className="h-8 w-8" />
              </div>
              <h1 className="text-2xl md:text-3xl font-bold mb-2">Payment Successful</h1>
              <p className="text-white/80">
                Your payment has been processed and your EIN application is now being reviewed.
              </p>
            </div>

            <div className="p-8">
              <div className="bg-green-50 border border-green-100 rounded-lg p-6 mb-8">
                <div className="flex">
                  <div className="mr-4 mt-1">
                    <CheckCircle className="h-6 w-6 text-green-500" />
                  </div>
                  <div>
                    <h2 className="text-lg font-semibold text-gray-900 mb-2">Thank You for Your Order</h2>
                    <p className="text-gray-700 mb-4">
                      We've received your payment of <span className="font-semibold">$249.00</span> and your EIN
                      application is now being processed. You will receive your EIN typically within 24-48 hours.
                    </p>
                    <div className="bg-white rounded-md p-4 border border-green-100">
                      <h3 className="font-medium text-gray-900 mb-3">Order Details</h3>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between pb-2 border-b border-gray-100">
                          <span className="text-gray-600">Order Number:</span>
                          <span className="font-medium">ORD-{Date.now().toString().slice(-6)}</span>
                        </div>
                        <div className="flex justify-between pb-2 border-b border-gray-100">
                          <span className="text-gray-600">Application ID:</span>
                          <span className="font-medium">{searchParams.applicationId}</span>
                        </div>
                        <div className="flex justify-between pb-2 border-b border-gray-100">
                          <span className="text-gray-600">Entity Type:</span>
                          <span className="font-medium">{searchParams.entityType || "Business Entity"}</span>
                        </div>
                        <div className="flex justify-between pb-2 border-b border-gray-100">
                          <span className="text-gray-600">Date:</span>
                          <span className="font-medium">{new Date().toLocaleDateString()}</span>
                        </div>
                        <div className="flex justify-between pb-2 border-b border-gray-100">
                          <span className="text-gray-600">Amount Paid:</span>
                          <span className="font-medium">$249.00</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Payment Status:</span>
                          <span className="font-medium text-green-600">Completed</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-lg font-semibold">What Happens Next?</h3>

                <div className="space-y-4">
                  <div className="flex">
                    <div className="bg-primary/10 p-2 rounded-full mr-3 h-8 w-8 flex items-center justify-center shrink-0">
                      <span className="text-primary font-medium">1</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">Application Review</h4>
                      <p className="text-gray-600 text-sm">
                        Our team will review your application to ensure all information is accurate and complete.
                      </p>
                    </div>
                  </div>

                  <div className="flex">
                    <div className="bg-primary/10 p-2 rounded-full mr-3 h-8 w-8 flex items-center justify-center shrink-0">
                      <span className="text-primary font-medium">2</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">IRS Filing</h4>
                      <p className="text-gray-600 text-sm">
                        We'll submit your application to the IRS and monitor its progress.
                      </p>
                    </div>
                  </div>

                  <div className="flex">
                    <div className="bg-primary/10 p-2 rounded-full mr-3 h-8 w-8 flex items-center justify-center shrink-0">
                      <span className="text-primary font-medium">3</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">EIN Delivery</h4>
                      <p className="text-gray-600 text-sm">
                        Once approved, we'll email your EIN confirmation letter to the address you provided.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 p-5 rounded-md border border-blue-100 mt-6">
                  <div className="flex">
                    <div className="mr-4 mt-1">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-md font-medium text-gray-900 mb-1">Check Your Email</h4>
                      <p className="text-sm text-gray-600 mb-2">
                        We've sent a payment confirmation to your email address. You'll receive another email when your
                        EIN is ready.
                      </p>
                      <p className="text-sm text-gray-600">
                        If you have any questions, please contact our support team at{" "}
                                      <a href="mailto:support@einnationalfiling.com" className="text-primary hover:underline">
                support@einnationalfiling.com
              </a>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 mt-8">
                  <Button variant="outline" asChild className="flex-1">
                    <a href="#" className="flex items-center justify-center">
                      <Download className="h-4 w-4 mr-2" />
                      Download Receipt
                    </a>
                  </Button>
                  <Button asChild className="flex-1">
                    <Link href="/" className="flex items-center justify-center">
                      Return to Home
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Structured Data for Confirmation Page */}
      <Script
        id="confirmation-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "OrderConfirmationPage",
            provider: {
              "@type": "Organization",
              name: "EIN National Filing",
              url: "https://einnationalfiling.com",
            },
            orderNumber: `ORD-${Date.now().toString().slice(-6)}`,
            orderStatus: "https://schema.org/OrderProcessing",
            acceptedOffer: {
              "@type": "Offer",
              price: "249.00",
              priceCurrency: "USD",
              name: "EIN Filing Service",
              description: "Professional EIN application filing service",
            },
          }),
        }}
      />
    </main>
  )
}
