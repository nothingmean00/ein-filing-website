"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Label } from "./ui/label"
import { X, CheckCircle } from "lucide-react"

interface ProgressModalProps {
  isOpen: boolean
  entityType: any
  onClose: () => void
}

function ProgressModalContent({ isOpen, entityType, onClose }: ProgressModalProps) {
  const [step, setStep] = useState(1)
  const totalSteps = 3
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleNext = () => {
    if (step < totalSteps) {
      setStep(step + 1)
    } else {
      // Submit form
      setIsSubmitting(true)

      // Simulate API call
      setTimeout(() => {
        setIsSubmitting(false)
        setIsSubmitted(true)
      }, 1500)
    }
  }

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1)
    } else {
      onClose()
    }
  }

  const handleNewApplication = () => {
    setStep(1)
    setIsSubmitted(false)
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-white rounded-md shadow-lg w-full max-w-md"
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20 }}
          >
            <div className="flex justify-between items-center p-4 border-b border-gray-200 bg-primary text-white">
              <h3 className="text-lg font-semibold">
                {isSubmitted ? "Application Submitted" : `${entityType?.name} Application`}
              </h3>
              <button onClick={onClose} className="text-white hover:text-gray-200" aria-label="Close">
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="p-5">
              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center py-6">
                  <div className="bg-green-100 p-3 rounded-full mb-4">
                    <CheckCircle className="h-12 w-12 text-green-500" />
                  </div>
                  <h2 className="text-xl font-semibold mb-2 text-center">Application Submitted Successfully!</h2>
                  <p className="text-gray-600 text-center mb-4">
                    Your EIN application for a {entityType?.name} has been received. You will receive a confirmation
                    email shortly with your application details.
                  </p>
                  <div className="bg-gray-50 p-4 rounded-md w-full mb-6">
                    <p className="text-sm text-gray-600">
                      <strong>Application ID:</strong> EIN-{Date.now().toString().slice(-6)}
                    </p>
                    <p className="text-sm text-gray-600">
                      <strong>Estimated Processing Time:</strong> 24-48 hours
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <Button variant="outline" onClick={onClose}>
                      Close
                    </Button>
                    <Button onClick={handleNewApplication}>Start New Application</Button>
                  </div>
                </div>
              ) : (
                <>
                  <div className="mb-6">
                    <div className="flex justify-between text-sm mb-2">
                      <span className="font-medium">
                        Step {step} of {totalSteps}
                      </span>
                      <span>{Math.round((step / totalSteps) * 100)}% Complete</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-primary h-2 rounded-full transition-all duration-300"
                        style={{ width: `${(step / totalSteps) * 100}%` }}
                      ></div>
                    </div>
                  </div>

                  {step === 1 && (
                    <div className="space-y-4">
                      <h4 className="font-medium text-primary">Basic Information</h4>
                      <div className="space-y-2">
                        <Label htmlFor="business-name">Business Name</Label>
                        <Input id="business-name" placeholder="Enter business name" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="business-address">Business Address</Label>
                        <Input id="business-address" placeholder="Enter business address" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="business-city">City</Label>
                        <Input id="business-city" placeholder="Enter city" />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="business-state">State</Label>
                          <Input id="business-state" placeholder="Enter state" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="business-zip">ZIP Code</Label>
                          <Input id="business-zip" placeholder="Enter ZIP code" />
                        </div>
                      </div>
                    </div>
                  )}

                  {step === 2 && (
                    <div className="space-y-4">
                      <h4 className="font-medium text-primary">Contact Information</h4>
                      <div className="space-y-2">
                        <Label htmlFor="contact-name">Contact Name</Label>
                        <Input id="contact-name" placeholder="Enter contact name" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="contact-email">Email Address</Label>
                        <Input id="contact-email" type="email" placeholder="Enter email address" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="contact-phone">Phone Number</Label>
                        <Input id="contact-phone" placeholder="Enter phone number" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="ssn-ein">Social Security Number or ITIN</Label>
                        <Input id="ssn-ein" placeholder="Enter SSN or ITIN" />
                        <p className="text-xs text-gray-500 mt-1">
                          Required by the IRS for the responsible party. This information is encrypted and secure.
                        </p>
                      </div>
                    </div>
                  )}

                  {step === 3 && (
                    <div className="space-y-4">
                      <h4 className="font-medium text-primary">Review & Submit</h4>
                      <p className="text-sm text-gray-600">
                        Please review your information before submitting your application. Once submitted, you will
                        receive a confirmation email with your application details.
                      </p>
                      <div className="bg-secondary/50 p-3 rounded-md text-sm space-y-2">
                        <p>
                          <strong>Entity Type:</strong> {entityType?.name}
                        </p>
                        <p>
                          <strong>Application ID:</strong> TEMP-{Date.now().toString().slice(-6)}
                        </p>
                        <p>
                          <strong>Processing Time:</strong> 24-48 hours
                        </p>
                      </div>
                      <div className="bg-gray-50 p-3 rounded-md border border-gray-200">
                        <h5 className="font-medium text-gray-900 mb-2">Service Fee</h5>
                        <div className="flex justify-between text-sm mb-1">
                          <span>EIN Filing Service:</span>
                          <span>$69.99</span>
                        </div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Processing Fee:</span>
                          <span>$5.00</span>
                        </div>
                        <div className="flex justify-between font-medium border-t border-gray-200 pt-2 mt-2">
                          <span>Total:</span>
                          <span>$74.99</span>
                        </div>
                      </div>
                      <div className="text-xs text-gray-500 mt-2">
                        By clicking "Submit Application", you agree to our{" "}
                        <a href="/terms" className="text-primary hover:underline">
                          Terms of Service
                        </a>{" "}
                        and{" "}
                        <a href="/privacy" className="text-primary hover:underline">
                          Privacy Policy
                        </a>
                        .
                      </div>
                    </div>
                  )}
                </>
              )}
            </div>

            {!isSubmitted && (
              <div className="flex justify-between p-4 border-t border-gray-200 bg-gray-50">
                <Button variant="outline" onClick={handleBack}>
                  {step === 1 ? "Cancel" : "Back"}
                </Button>
                <Button onClick={handleNext} disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <span className="mr-2">Processing...</span>
                      <svg
                        className="animate-spin h-4 w-4 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                    </>
                  ) : step === totalSteps ? (
                    "Submit Application"
                  ) : (
                    "Next"
                  )}
                </Button>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

// This is just a placeholder component that gets rendered in the page
// The actual modal content is managed by the ModalProvider
export default function ProgressModal() {
  return null
}
