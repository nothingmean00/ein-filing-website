import type { Metadata } from "next"
import Breadcrumbs from "@/components/breadcrumbs"

export const metadata: Metadata = {
  title: "Privacy Policy | Federal Tax ID Number (EIN) Filing Service",
  description:
    "Our privacy policy explains how we collect, use, and protect your personal information when you use our EIN filing service.",
  keywords: "privacy policy, data protection, information security, EIN filing privacy, personal data",
}

export default function PrivacyPage() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Privacy Policy", href: "/privacy", current: true },
  ]

  return (
    <main className="min-h-screen bg-gray-50">
      <Breadcrumbs items={breadcrumbItems} />

      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
            <p className="text-lg text-gray-600">Last Updated: May 14, 2023</p>
          </div>

          {/* Main Content */}
          <div className="bg-white rounded-lg shadow-sm p-8 md:p-12">
            
            {/* Introduction */}
            <div className="mb-12">
              <p className="text-lg text-gray-700 leading-relaxed">
                At EIN National Filing, we take your privacy seriously. This Privacy Policy explains how we collect,
                use, disclose, and safeguard your information when you visit our website and use our EIN filing service.
                Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy,
                please do not access the site.
              </p>
            </div>

            {/* Information We Collect */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-3">
                Information We Collect
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Personal Information You Provide</h3>
                  <p className="text-gray-700 mb-4">
                    We collect information that you provide directly to us when you register for an account, file for an EIN,
                    or communicate with us. This information may include:
                  </p>
                  <ul className="space-y-2 text-gray-600 ml-6">
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2 mt-2">•</span>
                      Personal identifiers (name, email address, phone number, postal address)
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2 mt-2">•</span>
                      Business information (business name, address, entity type)
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2 mt-2">•</span>
                      Tax identification numbers (SSN, ITIN, or existing EINs)
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2 mt-2">•</span>
                      Payment information (credit card details, billing address)
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2 mt-2">•</span>
                      Communication records (customer service inquiries, feedback)
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Automatically Collected Information</h3>
                  <p className="text-gray-700 mb-4">
                    We also automatically collect certain information when you visit, use, or navigate our website. This
                    information does not reveal your specific identity but may include:
                  </p>
                  <ul className="space-y-2 text-gray-600 ml-6">
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2 mt-2">•</span>
                      Device and usage information (IP address, browser and device characteristics)
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2 mt-2">•</span>
                      Location information (general geographic location based on IP address)
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2 mt-2">•</span>
                      Cookies and similar technologies (see our Cookie Policy for more details)
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* How We Use Your Information */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-3">
                How We Use Your Information
              </h2>
              <p className="text-gray-700 mb-6">We may use the information we collect for various purposes, including to:</p>
              <div className="grid md:grid-cols-2 gap-6">
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-1">✓</span>
                    Process and complete your EIN application
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-1">✓</span>
                    Create and maintain your account
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-1">✓</span>
                    Process your payments
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-1">✓</span>
                    Provide customer service and respond to inquiries
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-1">✓</span>
                    Send administrative information and service updates
                  </li>
                </ul>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-1">✓</span>
                    Send marketing and promotional communications (with your consent)
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-1">✓</span>
                    Improve our website and services
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-1">✓</span>
                    Protect against fraudulent or illegal activity
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-1">✓</span>
                    Comply with legal obligations
                  </li>
                </ul>
              </div>
            </section>

            {/* Information Sharing */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-3">
                Information Sharing and Disclosure
              </h2>
              <p className="text-gray-700 mb-6">We may share your information in the following situations:</p>
              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-gray-800 mb-2">With Service Providers</h3>
                  <p className="text-gray-600">
                    We may share your information with third-party vendors, service providers, and contractors who perform services for us or on our behalf.
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-gray-800 mb-2">For Business Transfers</h3>
                  <p className="text-gray-600">
                    We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business.
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-gray-800 mb-2">With Your Consent</h3>
                  <p className="text-gray-600">
                    We may disclose your information for any other purpose with your consent.
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-gray-800 mb-2">Legal Requirements</h3>
                  <p className="text-gray-600">
                    We may disclose your information where required to do so by law or in response to valid requests by public authorities.
                  </p>
                </div>
              </div>
            </section>

            {/* Data Security */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-3">
                Data Security
              </h2>
              <div className="bg-blue-50 p-6 rounded-lg">
                <p className="text-gray-700 leading-relaxed">
                  We have implemented appropriate technical and organizational security measures designed to protect the
                  security of any personal information we process. However, despite our safeguards, no security system is
                  impenetrable. We cannot guarantee the security of our databases, nor can we guarantee that information you
                  supply will not be intercepted while being transmitted to us over the Internet.
                </p>
              </div>
            </section>

            {/* Your Privacy Rights */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-3">
                Your Privacy Rights
              </h2>
              <p className="text-gray-700 mb-6">
                Depending on your location, you may have certain rights regarding your personal information, such as the
                right to:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-2 mt-1">→</span>
                    Access and receive a copy of your personal information
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-2 mt-1">→</span>
                    Rectify inaccurate personal information
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-2 mt-1">→</span>
                    Request deletion of your personal information
                  </li>
                </ul>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-2 mt-1">→</span>
                    Object to or restrict the processing of your personal information
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-2 mt-1">→</span>
                    Data portability
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-2 mt-1">→</span>
                    Withdraw your consent
                  </li>
                </ul>
              </div>
              <p className="text-gray-600 mt-6">
                To exercise these rights, please contact us using the contact information provided below. Please note that
                we may ask you to verify your identity before responding to such requests.
              </p>
            </section>

            {/* Children's Privacy */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-3">
                Children's Privacy
              </h2>
              <div className="bg-yellow-50 p-6 rounded-lg">
                <p className="text-gray-700">
                  Our services are not directed to individuals under the age of 18. We do not knowingly collect personal
                  information from children. If you are a parent or guardian and believe your child has provided us with
                  personal information, please contact us so that we can delete the information.
                </p>
              </div>
            </section>

            {/* Changes to Policy */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-3">
                Changes to This Privacy Policy
              </h2>
              <p className="text-gray-700">
                We may update our privacy policy from time to time. We will notify you of any changes by posting the new
                privacy policy on this page and updating the "Last Updated" date. You are advised to review this privacy
                policy periodically for any changes.
              </p>
            </section>

            {/* Contact Information */}
            <section className="bg-gray-50 p-8 rounded-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Us</h2>
              <p className="text-gray-700 mb-4">
                If you have questions or comments about this privacy policy, please contact us at:
              </p>
              <div className="bg-white p-4 rounded border-l-4 border-blue-500">
                <p className="font-semibold text-gray-800">EIN National Filing</p>
                <p className="text-gray-600">Email: support@einnationalfiling.com</p>
              </div>
            </section>
          </div>
        </div>
      </section>
    </main>
  )
}
