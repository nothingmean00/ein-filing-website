import type { Metadata } from "next"
import Breadcrumbs from "@/components/breadcrumbs"

export const metadata: Metadata = {
  title: "Terms of Service | Federal Tax ID Number (EIN) Filing Service",
  description:
    "Our terms of service outline the rules, guidelines, and legal agreements between you and our EIN filing service.",
  keywords: "terms of service, legal agreement, EIN filing terms, service conditions, user agreement",
}

export default function TermsPage() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Terms of Service", href: "/terms", current: true },
  ]

  return (
    <main className="min-h-screen bg-gray-50">
      <Breadcrumbs items={breadcrumbItems} />

      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Terms of Service</h1>
            <p className="text-lg text-gray-600">Last Updated: May 14, 2023</p>
          </div>

          {/* Main Content */}
          <div className="bg-white rounded-lg shadow-sm p-8 md:p-12">
            
            {/* Introduction */}
            <div className="mb-12">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Please read these Terms of Service ("Terms", "Terms of Service") carefully before using the
                https://einnationalfiling.com website (the "Service") operated by EIN National Filing ("us", "we", or
                "our").
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Your access to and use of the Service is conditioned on your acceptance of and compliance with these
                Terms. These Terms apply to all visitors, users, and others who access or use the Service.
              </p>
              <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-lg">
                <p className="text-red-800 font-semibold">
                  By accessing or using the Service you agree to be bound by these Terms. If you disagree with any part of
                  the terms, then you may not access the Service.
                </p>
              </div>
            </div>

            {/* Service Description */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-3">
                1. Service Description
              </h2>
              <div className="space-y-6">
                <p className="text-gray-700 leading-relaxed">
                  EIN National Filing provides assistance with filing applications for Employer Identification Numbers
                  (EINs) with the Internal Revenue Service (IRS). We are a private, third-party service provider and are not
                  affiliated with, endorsed by, or connected with the IRS or any other government agency.
                </p>
                <div className="bg-blue-50 p-6 rounded-lg">
                  <p className="text-gray-700">
                    You acknowledge that you can obtain an EIN directly from the IRS for free by visiting www.irs.gov or by
                    submitting Form SS-4 directly to the IRS. Our service is offered for the convenience of processing your
                    EIN application and providing customer support throughout the process.
                  </p>
                </div>
              </div>
            </section>

            {/* User Accounts */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-3">
                2. User Accounts
              </h2>
              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-gray-800 mb-3">Account Creation Requirements</h3>
                  <p className="text-gray-700">
                    When you create an account with us, you must provide information that is accurate, complete, and current
                    at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate
                    termination of your account on our Service.
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-gray-800 mb-3">Account Security</h3>
                  <p className="text-gray-700">
                    You are responsible for safeguarding the password that you use to access the Service and for any
                    activities or actions under your password. You agree not to disclose your password to any third party. You
                    must notify us immediately upon becoming aware of any breach of security or unauthorized use of your
                    account.
                  </p>
                </div>
              </div>
            </section>

            {/* Fees and Payment */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-3">
                3. Fees and Payment
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="font-semibold text-gray-800">Service Fees</h3>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2 mt-1">•</span>
                      Service fees are clearly displayed before purchase
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2 mt-1">•</span>
                      All fees are non-refundable unless specified
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2 mt-1">•</span>
                      Refunds subject to our refund policy or law
                    </li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h3 className="font-semibold text-gray-800">Payment Information</h3>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2 mt-1">✓</span>
                      Provide current and accurate payment details
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2 mt-1">✓</span>
                      Update payment information promptly
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2 mt-1">✓</span>
                      Keep contact information current
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Accuracy of Information */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-3">
                4. Accuracy of Information
              </h2>
              <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-lg mb-6">
                <h3 className="font-semibold text-yellow-800 mb-3">Your Responsibility</h3>
                <p className="text-yellow-700">
                  You are solely responsible for the accuracy and completeness of all information provided to us for the
                  purpose of filing your EIN application. Providing false, misleading, or inaccurate information may result
                  in delays or rejection of your application by the IRS, and may constitute a violation of federal law.
                </p>
              </div>
              <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg">
                <h3 className="font-semibold text-blue-800 mb-3">Our Service</h3>
                <p className="text-blue-700">
                  We will make reasonable efforts to ensure your application is processed correctly based on the information
                  you provide, but we cannot guarantee approval of your application by the IRS.
                </p>
              </div>
            </section>

            {/* Intellectual Property */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-3">
                5. Intellectual Property
              </h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700 leading-relaxed">
                  The Service and its original content, features, and functionality are and will remain the exclusive
                  property of EIN National Filing and its licensors. The Service is protected by copyright, trademark, and
                  other laws of both the United States and foreign countries. Our trademarks and trade dress may not be used
                  in connection with any product or service without the prior written consent of EIN National Filing.
                </p>
              </div>
            </section>

            {/* Limitation of Liability */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-3">
                6. Limitation of Liability
              </h2>
              <div className="bg-red-50 border border-red-200 p-6 rounded-lg">
                <h3 className="font-semibold text-red-800 mb-3">Important Limitation</h3>
                <p className="text-red-700 text-sm leading-relaxed">
                  In no event shall EIN National Filing, nor its directors, employees, partners, agents, suppliers, or
                  affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including
                  without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from:
                </p>
                <ul className="mt-4 space-y-2 text-red-700 text-sm">
                  <li className="flex items-start">
                    <span className="mr-2 mt-1">•</span>
                    Your access to or use of or inability to access or use the Service
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 mt-1">•</span>
                    Any conduct or content of any third party on the Service
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 mt-1">•</span>
                    Any content obtained from the Service
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 mt-1">•</span>
                    Unauthorized access, use or alteration of your transmissions or content
                  </li>
                </ul>
              </div>
            </section>

            {/* Disclaimer */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-3">
                7. Disclaimer
              </h2>
              <div className="space-y-6">
                <div className="bg-orange-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-orange-800 mb-3">Service Provided "AS IS"</h3>
                  <p className="text-orange-700">
                    Your use of the Service is at your sole risk. The Service is provided on an "AS IS" and "AS AVAILABLE"
                    basis. The Service is provided without warranties of any kind, whether express or implied, including, but
                    not limited to, implied warranties of merchantability, fitness for a particular purpose, non-infringement,
                    or course of performance.
                  </p>
                </div>
                <div className="bg-orange-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-orange-800 mb-3">No Guarantees</h3>
                  <p className="text-orange-700">
                    EIN National Filing does not warrant that the Service will function uninterrupted, secure, or
                    available at any particular time or location; any errors or defects will be corrected; the Service is free of viruses or other harmful components; or the results of using the Service will meet
                    your requirements.
                  </p>
                </div>
              </div>
            </section>

            {/* Governing Law */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-3">
                8. Governing Law
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-gray-800 mb-3">Applicable Law</h3>
                  <p className="text-gray-700">
                    These Terms shall be governed and construed in accordance with the laws of the United States, without
                    regard to its conflict of law provisions.
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-gray-800 mb-3">Enforcement</h3>
                  <p className="text-gray-700">
                    Our failure to enforce any right or provision of these Terms will not be considered a waiver of those
                    rights. If any provision is held invalid, the remaining provisions remain in effect.
                  </p>
                </div>
              </div>
            </section>

            {/* Changes to Terms */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-3">
                9. Changes to Terms
              </h2>
              <div className="bg-purple-50 p-6 rounded-lg">
                <p className="text-gray-700 leading-relaxed mb-4">
                  We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision
                  is material, we will try to provide at least 30 days' notice prior to any new terms taking effect. What
                  constitutes a material change will be determined at our sole discretion.
                </p>
                <p className="text-gray-700">
                  By continuing to access or use our Service after those revisions become effective, you agree to be bound
                  by the revised terms. If you do not agree to the new terms, please stop using the Service.
                </p>
              </div>
            </section>

            {/* Contact Information */}
            <section className="bg-gray-50 p-8 rounded-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">10. Contact Us</h2>
              <p className="text-gray-700 mb-4">
                If you have any questions about these Terms, please contact us at:
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
