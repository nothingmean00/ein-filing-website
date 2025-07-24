import { Button } from "./ui/button"
import { Mail, Clock } from "lucide-react"
import Link from "next/link"

export default function SupportSection() {
  return (
    <section className="irs-section bg-white" id="support">
      <div className="irs-container">
        <div className="text-center mb-10">
          {" "}
          {/* Increased bottom margin */}
          <h2 className="irs-heading">Customer Support</h2>
          <p className="text-slate-700 max-w-2xl mx-auto text-base md:text-lg">
            {" "}
            {/* Slightly larger text, slate color */}
            Our dedicated support team is here to help you with any questions about your EIN application. We're
            committed to providing exceptional service throughout your filing process.
          </p>
        </div>

        {/* Support Options Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          {" "}
          {/* Increased gap and bottom margin */}
          {/* Business Hours Card */}
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 md:p-8 shadow-md flex flex-col items-center text-center transition-all hover:shadow-lg">
            <div className="bg-primary/10 text-primary p-4 rounded-full mb-5 inline-flex items-center justify-center">
              <Clock className="h-8 w-8 md:h-10 md:w-10" />
            </div>
            <h3 className="text-xl md:text-2xl font-semibold text-slate-800 mb-3">Business Hours</h3>
            <div className="text-slate-600 text-sm md:text-base leading-relaxed">
              <p>Monday - Friday</p>
              <p>9:00 AM - 5:00 PM EST</p>
            </div>
          </div>
          {/* Email Support Card */}
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 md:p-8 shadow-md flex flex-col items-center text-center transition-all hover:shadow-lg">
            <div className="bg-primary/10 text-primary p-4 rounded-full mb-5 inline-flex items-center justify-center">
              <Mail className="h-8 w-8 md:h-10 md:w-10" />
            </div>
            <h3 className="text-xl md:text-2xl font-semibold text-slate-800 mb-3">Email Support</h3>
            <div className="text-slate-600 text-sm md:text-base leading-relaxed">
              <p>
                <a href="mailto:support@einnationalfiling.com" className="font-medium text-primary hover:underline">
                  support@einnationalfiling.com
                </a>
              </p>
              <p className="text-xs text-slate-500 mt-1">Typically responds within 24 hours</p>{" "}
              {/* More specific than "24/7 response" */}
            </div>
          </div>
        </div>

        {/* Contact Button */}
        <div className="flex justify-center">
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-3">
            <Link href="/contact">Contact Our Team</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
