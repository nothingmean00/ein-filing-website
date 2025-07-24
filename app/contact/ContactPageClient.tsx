"use client"

import type React from "react"

import { useState } from "react"
import Breadcrumbs from "@/components/breadcrumbs"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Mail, Clock, Send, CheckCircle, AlertTriangle } from "lucide-react"
import PrioritySupportModal from "@/components/priority-support-modal"
import { Textarea } from "@/components/ui/textarea"

export default function ContactPageClient() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submissionStatus, setSubmissionStatus] = useState<"idle" | "success" | "error">("idle")
  const [submissionMessage, setSubmissionMessage] = useState("")
  const [isPriorityModalOpen, setIsPriorityModalOpen] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmissionStatus("idle")
    setSubmissionMessage("")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formState),
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.error || "Failed to send message.")
      }

      setSubmissionStatus("success")
      setSubmissionMessage(result.message || "Your message has been sent successfully!")
      setFormState({ name: "", email: "", phone: "", subject: "", message: "" })
    } catch (error) {
      console.error("Contact form submission error:", error)
      setSubmissionStatus("error")
      const errorMessage = error instanceof Error ? error.message : "An unexpected error occurred."
      setSubmissionMessage(`Failed to send message. ${errorMessage}`)
    } finally {
      setIsSubmitting(false)
    }
  }

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Contact", href: "/contact", current: true },
  ]

  return (
    <main className="min-h-screen">
      <Breadcrumbs items={breadcrumbItems} />

      <section className="irs-section bg-secondary/30 pt-10 pb-8">
        <div className="irs-container">
          <div className="text-center mb-8">
            <h1 className="text-2xl md:text-3xl font-bold mb-3">Contact Our Support Team</h1>
            <p className="text-gray-700 max-w-3xl mx-auto">
              Have questions about our EIN filing service? Our dedicated support team is here to help. Fill out the form
              below or use our contact information to reach us.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                {submissionStatus === "success" ? (
                  <div className="flex flex-col items-center justify-center py-8 text-center">
                    <div className="bg-primary/10 p-3 rounded-full mb-4">
                      <CheckCircle className="h-12 w-12 text-primary" />
                    </div>
                    <h2 className="text-xl font-semibold mb-2">Thank You!</h2>
                    <p className="text-gray-600 max-w-md mb-6">{submissionMessage}</p>
                    <Button
                      onClick={() => {
                        setSubmissionStatus("idle")
                        setSubmissionMessage("")
                      }}
                    >
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formState.name}
                          onChange={handleChange}
                          placeholder="John Doe"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formState.email}
                          onChange={handleChange}
                          placeholder="your@email.com"
                          required
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number (Optional)</Label>
                        <Input
                          id="phone"
                          name="phone"
                          value={formState.phone}
                          onChange={handleChange}
                          placeholder="(123) 456-7890"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="subject">Subject</Label>
                        <Input
                          id="subject"
                          name="subject"
                          value={formState.subject}
                          onChange={handleChange}
                          placeholder="EIN Application Question"
                          required
                        />
                      </div>
                    </div>
                    <div className="space-y-2 mb-6">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formState.message}
                        onChange={handleChange}
                        rows={5}
                        className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                        placeholder="Please describe how we can help you..."
                        required
                      />
                    </div>
                    {submissionStatus === "error" && <p className="text-sm text-red-500 mb-4">{submissionMessage}</p>}
                    <Button type="submit" className="w-full md:w-auto" disabled={isSubmitting}>
                      {isSubmitting ? (
                        <>
                          <span className="mr-2">Sending...</span>
                          <span className="animate-spin">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="M21 12a9 9 0 1 1-6.219-8.56" />
                            </svg>
                          </span>
                        </>
                      ) : (
                        <>
                          <Send className="h-4 w-4 mr-2" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </div>
            </div>

            <div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 mb-6">
                <h2 className="text-lg font-semibold mb-4 text-primary">Contact Information</h2>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-primary/10 p-2 rounded-full mr-3">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">Email</h3>
                      <p className="text-gray-600 text-sm">
                        <a href="mailto:support@einnationalfiling.com" className="hover:underline">
                          support@einnationalfiling.com
                        </a>
                      </p>
                      <p className="text-gray-500 text-xs">24/7 response</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-primary/10 p-2 rounded-full mr-3">
                      <Clock className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">Business Hours</h3>
                      <p className="text-gray-600 text-sm">
                        Monday - Friday
                        <br />
                        9:00 AM - 5:00 PM EST
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-primary/10 p-6 rounded-lg border border-primary/20">
                <h2 className="text-lg font-semibold mb-3 text-primary">Need Immediate Assistance?</h2>
                <p className="text-gray-700 text-sm mb-4">
                  For urgent inquiries about your EIN application, please use our priority support channel.
                </p>
                <Button
                  variant="outline"
                  className="w-full flex items-center justify-center"
                  onClick={() => setIsPriorityModalOpen(true)}
                >
                  <AlertTriangle className="h-4 w-4 mr-2 text-yellow-500" />
                  Request Priority Support
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <PrioritySupportModal isOpen={isPriorityModalOpen} onClose={() => setIsPriorityModalOpen(false)} />
    </main>
  )
}
