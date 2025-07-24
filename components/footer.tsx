import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-primary text-white py-8 mt-auto">
      <div className="irs-container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-6">
          <div>
            <h3 className="font-semibold mb-3 text-lg text-white border-b border-white/20 pb-2">Quick Links</h3>
            <ul className="text-sm text-gray-200 space-y-2">
              <li>
                <Link href="/apply-ein-online" className="hover:underline">
                  Apply for EIN
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:underline">
                  Pricing & Services
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:underline">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/form-ss4" className="hover:underline">
                  Form SS-4 Reference
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:underline">
                  EIN Filing Guide
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-3 text-lg text-white border-b border-white/20 pb-2">Our Service</h3>
            <p className="text-sm text-gray-200 mb-3">
              Professional EIN filing assistance with expert guidance, fast processing, and dedicated support throughout your application.
            </p>
            <ul className="text-sm text-gray-200 space-y-1">
              <li>• Same-day processing available</li>
              <li>• Expert application review</li>
              <li>• Secure document handling</li>
              <li>• Customer support included</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-3 text-lg text-white border-b border-white/20 pb-2">Contact & Support</h3>
            <div className="text-sm text-gray-200 space-y-2">
              <p>
                <strong>Email:</strong>{" "}
                <a href="mailto:support@einnationalfiling.com" className="underline text-blue-200">
                  support@einnationalfiling.com
                </a>
              </p>
              <p>
                <strong>Hours:</strong><br />
                Monday - Friday<br />
                9:00 AM - 5:00 PM EST
              </p>
              <p className="pt-2">
                <Link href="/contact" className="underline text-blue-200">
                  Contact Form →
                </Link>
              </p>
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-3 text-lg text-white border-b border-white/20 pb-2">Important Notice</h3>
            <p className="text-sm text-gray-300 leading-relaxed">
              You can apply for an EIN directly from the IRS at no cost by visiting{" "}
              <Link href="https://www.irs.gov" className="underline text-blue-200" target="_blank" rel="noopener noreferrer">
                irs.gov
              </Link>
              .
            </p>
            <p className="text-sm text-gray-300 mt-3 leading-relaxed">
              We are an independent document preparation service that charges fees for professional assistance, expert review, and expedited processing.
            </p>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-4 flex flex-wrap justify-center md:justify-between gap-4 text-sm">
          <div className="flex flex-wrap gap-6 justify-center md:justify-start">
            <Link href="/privacy" className="hover:underline">
              Privacy Policy
            </Link>
            <Link href="/contact" className="hover:underline">
              Contact
            </Link>
            <Link href="/terms" className="hover:underline">
              Terms
            </Link>
            <Link href="/sitemap" className="hover:underline">
              Sitemap
            </Link>
          </div>
          <div className="text-gray-300 text-xs">
            &copy; {new Date().getFullYear()} EIN National Filing. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}
