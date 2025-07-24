import type { Metadata } from "next"
import { redirect } from "next/navigation"
import Breadcrumbs from "@/components/breadcrumbs"
import StripePaymentForm from "@/components/stripe-payment-form"
import { LockIcon, ShieldCheckIcon, CreditCardIcon } from "lucide-react"
import Script from "next/script"

export const metadata: Metadata = {
  title: "Complete Your Payment | Federal Tax ID Number (EIN) Filing Service",
  description:
    "Complete your payment to process your EIN application. Secure payment processing with instant confirmation.",
  keywords: "EIN payment, tax ID application payment, business filing payment, secure payment",
}

export default function PaymentPage({
  searchParams,
}: {
  searchParams: { applicationId?: string; entityType?: string }
}) {
  // If no application ID is provided, redirect to home
  if (!searchParams.applicationId) {
    redirect("/")
  }

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Application", href: "#" },
    { label: "Payment", href: "/payment", current: true },
  ]

  return (
    <main className="min-h-screen">
      <Breadcrumbs items={breadcrumbItems} />

      <section className="irs-section bg-secondary/30 pt-10 pb-16">
        <div className="irs-container max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-2xl md:text-3xl font-bold mb-3">Complete Your Payment</h1>
            <p className="text-gray-700 max-w-3xl mx-auto">
              Your EIN application has been saved. Please complete the payment to process your application.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                <div className="p-6">
                  <h2 className="text-xl font-semibold mb-6">Payment Details</h2>
                  <StripePaymentForm 
                    applicationId={searchParams.applicationId} 
                    entityType={searchParams.entityType}
                    amount={249}
                  />
                </div>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden mb-6">
                <div className="p-6">
                  <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
                  <div className="space-y-3">
                    <div className="flex justify-between pb-3 border-b border-gray-100">
                      <span className="text-gray-600">Application ID</span>
                      <span className="font-medium">{searchParams.applicationId}</span>
                    </div>
                    <div className="flex justify-between pb-3 border-b border-gray-100">
                      <span className="text-gray-600">Entity Type</span>
                      <span className="font-medium">{searchParams.entityType || "Business Entity"}</span>
                    </div>
                    <div className="flex justify-between pb-3 border-b border-gray-100">
                      <span className="text-gray-600">EIN Filing Service</span>
                      <span className="font-medium">$249.00</span>
                    </div>
                    <div className="flex justify-between font-semibold text-lg pt-2">
                      <span>Total</span>
                      <span className="text-primary">$249.00</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                <div className="p-6">
                  <h2 className="text-lg font-semibold mb-4">Secure Payment</h2>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="bg-primary/10 p-2 rounded-full mr-3">
                        <LockIcon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium text-sm">Encrypted & Secure</h3>
                        <p className="text-gray-600 text-xs">
                          Your payment information is protected with 256-bit SSL encryption.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-primary/10 p-2 rounded-full mr-3">
                        <ShieldCheckIcon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium text-sm">Money-Back Guarantee</h3>
                        <p className="text-gray-600 text-xs">
                          If your EIN application is rejected due to our error, we'll provide a full refund.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-primary/10 p-2 rounded-full mr-3">
                        <CreditCardIcon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium text-sm">Accepted Payment Methods</h3>
                        <div className="flex space-x-2 mt-2">
                          <img src="/visa.png" alt="Visa" className="h-6" />
                          <img src="/mastercard.png" alt="Mastercard" className="h-6" />
                          <img src="/amex.png" alt="American Express" className="h-6" />
                          <img src="/discover.png" alt="Discover" className="h-6" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Structured Data for Payment Page */}
      <Script
        id="payment-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CheckoutPage",
            provider: {
              "@type": "Organization",
              name: "EIN Filing Service",
              url: "https://www.ein-filing-service.com",
            },
            offers: {
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
