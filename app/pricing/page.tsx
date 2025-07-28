import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { CheckCircle, Clock, Zap, Star } from "lucide-react"
import Link from "next/link"
import Script from "next/script"

export const metadata: Metadata = {
  title: "EIN Filing Service Pricing | Standard & Express Options",
  description:
    "Choose between our Standard ($249) and Express ($329) EIN filing services. Both include full IRS filing, customer support, and money-back guarantee.",
  keywords: "EIN filing cost, tax ID price, business license fee, express EIN service",
}

const pricingTiers = [
  {
    id: "standard",
    name: "Standard Filing",
    price: 249,
    description: "Perfect for most businesses with flexible timelines",
    processingTime: "24-48 Hours",
    features: [
      "Complete IRS EIN application filing",
      "24-48 hour processing time",
      "Email delivery of EIN certificate", 
      "Dedicated customer support",
      "Money-back guarantee",
      "Free consultation included",
      "All required IRS forms completed"
    ],
    icon: <Clock className="h-8 w-8" />,
    popular: false
  },
  {
    id: "express",
    name: "Express Filing",
    price: 329,
    description: "For urgent business needs requiring same-day service",
    processingTime: "Same Day",
    features: [
      "Complete IRS EIN application filing",
      "Same-day processing (submit by 1 PM EST)",
      "Priority handling and review",
      "Email delivery of EIN certificate",
      "Priority customer support",
      "Money-back guarantee", 
      "Free consultation included",
      "All required IRS forms completed",
      "Expedited service guarantee"
    ],
    icon: <Zap className="h-8 w-8" />,
    popular: true
  }
]

export default function PricingPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 to-secondary/10 py-20">
        <div className="irs-container max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Choose the processing speed that works best for your business. Both options include complete EIN filing with full support.
          </p>
          <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
            <CheckCircle className="h-5 w-5 text-green-500" />
            <span>No hidden fees • Money-back guarantee • Full IRS compliance</span>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20">
        <div className="irs-container max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {pricingTiers.map((tier) => (
              <div
                key={tier.id}
                className={`relative border-2 rounded-xl p-8 transition-all duration-200 hover:shadow-lg ${
                  tier.popular
                    ? "border-primary bg-primary/5 shadow-md scale-105"
                    : "border-gray-200 hover:border-gray-300"
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-primary text-white px-6 py-2 rounded-full text-sm font-medium flex items-center gap-2">
                      <Star className="h-4 w-4" />
                      Most Popular
                    </div>
                  </div>
                )}

                <div className="text-center mb-8">
                  <div className={`inline-flex p-3 rounded-lg mb-4 ${
                    tier.popular ? "bg-primary text-white" : "bg-gray-100 text-gray-600"
                  }`}>
                    {tier.icon}
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                  <p className="text-gray-600 mb-6">{tier.description}</p>
                  
                  <div className="mb-4">
                    <span className="text-5xl font-bold">${tier.price}</span>
                    <span className="text-gray-600 ml-2">one-time</span>
                  </div>
                  
                  <div className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium ${
                    tier.popular 
                      ? "bg-primary/20 text-primary" 
                      : "bg-gray-100 text-gray-700"
                  }`}>
                    <Clock className="h-4 w-4 mr-2" />
                    {tier.processingTime}
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                  {tier.features.map((feature, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button 
                  asChild 
                  className={`w-full ${
                    tier.popular 
                      ? "bg-primary hover:bg-primary/90" 
                      : "bg-gray-900 hover:bg-gray-800"
                  }`}
                >
                  <Link href="/">
                    Get Started with {tier.name}
                  </Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-50 py-20">
        <div className="irs-container max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600">Common questions about our EIN filing services</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold mb-2">What's included in both services?</h3>
                <p className="text-gray-600 text-sm">
                  Both Standard and Express services include complete IRS EIN application filing, 
                  customer support, money-back guarantee, and email delivery of your EIN.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">How fast is Express service?</h3>
                <p className="text-gray-600 text-sm">
                  Express service provides same-day processing when submitted before 1 PM EST on business days. 
                  You'll receive your EIN within hours, not days.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">Is there a money-back guarantee?</h3>
                <p className="text-gray-600 text-sm">
                  Yes! If your EIN application is rejected by the IRS due to our error, 
                  we provide a full refund. We're confident in our service quality.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="font-semibold mb-2">Can I upgrade to Express later?</h3>
                <p className="text-gray-600 text-sm">
                  Service level must be selected during the application process. 
                  Choose Express if you need your EIN urgently for banking or business setup.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">What payment methods do you accept?</h3>
                <p className="text-gray-600 text-sm">
                  We accept all major credit cards (Visa, Mastercard, American Express, Discover) 
                  processed securely through Stripe with 256-bit SSL encryption.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">Do you offer customer support?</h3>
                <p className="text-gray-600 text-sm">
                  Yes! All customers receive dedicated email support. Express customers get 
                  priority support for faster response times during business hours.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="irs-container max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Your EIN?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of businesses who trust us with their EIN filing. 
            Choose your service level and get started in minutes.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="outline">
              <Link href="/">Start Standard Application</Link>
            </Button>
            <Button asChild size="lg">
              <Link href="/">Start Express Application</Link>
            </Button>
          </div>
          
          <p className="text-sm text-gray-500 mt-6">
            Questions? <Link href="/contact" className="text-primary hover:underline">Contact our support team</Link>
          </p>
        </div>
      </section>

      {/* Structured Data */}
      <Script
        id="pricing-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "EIN Filing Service",
            provider: {
              "@type": "Organization",
              name: "EIN Filing Service",
              url: "https://www.ein-filing-service.com",
            },
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "EIN Filing Services",
              itemListElement: pricingTiers.map((tier) => ({
                "@type": "Offer",
                name: tier.name,
                price: tier.price.toString(),
                priceCurrency: "USD",
                description: tier.description,
                availability: "https://schema.org/InStock",
              })),
            },
          }),
        }}
      />
    </main>
  )
} 