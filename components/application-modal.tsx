"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Label } from "./ui/label"
import {
  X,
  CheckCircle,
  CreditCard,
  Building,
  User,
  Mail,
  AlertCircle,
  HelpCircle,
  ChevronRight,
  Lock,
} from "lucide-react"

interface EntityType {
  id: number
  name: string
  icon: React.ReactNode
}

interface ApplicationModalProps {
  isOpen: boolean
  entityType: EntityType | null
  onClose: () => void
}

export default function ApplicationModal({ isOpen, entityType, onClose }: ApplicationModalProps) {
  const [step, setStep] = useState(1)
  const totalSteps = 3
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    businessName: "",
    businessAddress: "",
    businessCity: "",
    businessState: "",
    businessZip: "",
    contactName: "",
    contactEmail: "",
    contactPhone: "",
    ssnEin: "",
    agreeToTerms: false,
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [showModal, setShowModal] = useState(false)

  // Animation timing
  useEffect(() => {
    if (isOpen) {
      // Small delay to allow the backdrop to appear first
      const timer = setTimeout(() => {
        setShowModal(true)
      }, 50)
      return () => clearTimeout(timer)
    } else {
      setShowModal(false)
    }
  }, [isOpen])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    })

    // Clear error when user types
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: "",
      })
    }
  }

  const validateStep = (currentStep: number) => {
    const newErrors: Record<string, string> = {}

    if (currentStep === 1) {
      if (!formData.businessName.trim()) {
        newErrors.businessName = "Business name is required"
      }
      if (!formData.businessAddress.trim()) {
        newErrors.businessAddress = "Business address is required"
      }
      if (!formData.businessCity.trim()) {
        newErrors.businessCity = "City is required"
      }
      if (!formData.businessState.trim()) {
        newErrors.businessState = "State is required"
      }
      if (!formData.businessZip.trim()) {
        newErrors.businessZip = "ZIP code is required"
      } else if (!/^\d{5}(-\d{4})?$/.test(formData.businessZip)) {
        newErrors.businessZip = "Enter a valid ZIP code"
      }
    }

    if (currentStep === 2) {
      if (!formData.contactName.trim()) {
        newErrors.contactName = "Contact name is required"
      }
      if (!formData.contactEmail.trim()) {
        newErrors.contactEmail = "Email is required"
      } else if (!/\S+@\S+\.\S+/.test(formData.contactEmail)) {
        newErrors.contactEmail = "Enter a valid email address"
      }
      if (!formData.contactPhone.trim()) {
        newErrors.contactPhone = "Phone number is required"
      } else if (!/^[\d\s()-]{10,15}$/.test(formData.contactPhone)) {
        newErrors.contactPhone = "Enter a valid phone number"
      }
      if (!formData.ssnEin.trim()) {
        newErrors.ssnEin = "SSN or ITIN is required"
      } else if (!/^\d{3}-\d{2}-\d{4}$/.test(formData.ssnEin) && !/^\d{9}$/.test(formData.ssnEin)) {
        newErrors.ssnEin = "Enter a valid SSN (XXX-XX-XXXX) or 9-digit ITIN"
      }
    }

    if (currentStep === 3) {
      if (!formData.agreeToTerms) {
        newErrors.agreeToTerms = "You must agree to the terms"
      }
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleNext = () => {
    if (validateStep(step)) {
      if (step < totalSteps) {
        setStep(step + 1)
        // Scroll to top of modal content
        const modalContent = document.getElementById("modal-content")
        if (modalContent) {
          modalContent.scrollTop = 0
        }
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
  }

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1)
    } else {
      handleClose()
    }
  }

  const handleNewApplication = () => {
    setStep(1)
    setIsSubmitted(false)
    setFormData({
      businessName: "",
      businessAddress: "",
      businessCity: "",
      businessState: "",
      businessZip: "",
      contactName: "",
      contactEmail: "",
      contactPhone: "",
      ssnEin: "",
      agreeToTerms: false,
    })
    setErrors({})
  }

  const handleClose = () => {
    setShowModal(false)
    // Delay actual closing to allow animation to complete
    setTimeout(() => {
      onClose()
    }, 300)
  }

  const getEntitySpecificInfo = () => {
    switch (entityType?.id) {
      case 1: // Sole Proprietorship
        return "As a Sole Proprietorship, you'll need to provide your personal information as the business owner."
      case 2: // Single-Member LLC
      case 3: // Multi-Member LLC
        return "For an LLC, you'll need to provide information about the responsible party who will control, manage, or direct the entity."
      case 4: // Corporation
      case 5: // S Corporation
        return "For a Corporation, you'll need to provide information about an officer, director or shareholder."
      case 7: // Non-Profit
        return "For a Non-Profit, you'll need to provide information about an officer or director."
      default:
        return "Please provide the information for the responsible party who will control, manage, or direct the entity."
    }
  }

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-0 transition-all duration-300"
      style={{ backgroundColor: showModal ? "rgba(0, 0, 0, 0.5)" : "rgba(0, 0, 0, 0)" }}
      onClick={handleClose}
    >
      <div
        className={`bg-white rounded-lg shadow-xl w-full max-w-md transform transition-all duration-300 ${
          showModal ? "scale-100 opacity-100" : "scale-95 opacity-0"
        }`}
        style={{ maxHeight: "90vh" }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center p-4 border-b border-gray-200 bg-primary text-white rounded-t-lg">
          <div className="flex items-center">
            {entityType?.icon && <div className="mr-2 bg-white/10 p-1.5 rounded-md">{entityType.icon}</div>}
            <h3 className="text-lg font-semibold">
              {isSubmitted ? "Application Submitted" : `${entityType?.name} Application`}
            </h3>
          </div>
          <button
            onClick={handleClose}
            className="text-white hover:text-gray-200 bg-white/10 hover:bg-white/20 rounded-full p-1.5 transition-colors"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div id="modal-content" className="p-5 overflow-y-auto" style={{ maxHeight: "calc(90vh - 140px)" }}>
          {isSubmitted ? (
            <div className="flex flex-col items-center justify-center py-6">
              <div className="bg-green-100 p-4 rounded-full mb-4">
                <CheckCircle className="h-12 w-12 text-green-500" />
              </div>
              <h2 className="text-xl font-semibold mb-2 text-center">Application Submitted Successfully!</h2>
              <p className="text-gray-600 text-center mb-4">
                Your EIN application for a {entityType?.name} has been received. You will receive a confirmation email
                shortly with your application details.
              </p>
              <div className="bg-gray-50 p-4 rounded-md w-full mb-6 border border-gray-200">
                <p className="text-sm text-gray-600 mb-2">
                  <strong>Application ID:</strong> EIN-{Date.now().toString().slice(-6)}
                </p>
                <p className="text-sm text-gray-600 mb-2">
                  <strong>Entity Type:</strong> {entityType?.name}
                </p>
                <p className="text-sm text-gray-600">
                  <strong>Estimated Processing Time:</strong> 24-48 hours
                </p>
              </div>
              <div className="bg-blue-50 p-4 rounded-md w-full mb-6 border border-blue-100">
                <div className="flex items-start">
                  <div className="mr-3 mt-0.5">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-900">Check Your Email</h4>
                    <p className="text-xs text-gray-600">
                      We've sent a confirmation to {formData.contactEmail}. Please check your inbox and spam folder.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex gap-3">
                <Button variant="outline" onClick={handleClose}>
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
                <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
                  <div
                    className="bg-primary h-2.5 rounded-full transition-all duration-500"
                    style={{ width: `${(step / totalSteps) * 100}%` }}
                  ></div>
                </div>

                <div className="flex mb-6">
                  {[...Array(totalSteps)].map((_, i) => (
                    <div key={i} className="flex-1 flex flex-col items-center">
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center mb-1 ${
                          step > i + 1
                            ? "bg-primary text-white"
                            : step === i + 1
                              ? "bg-primary text-white"
                              : "bg-gray-200 text-gray-500"
                        }`}
                      >
                        {step > i + 1 ? <CheckCircle className="h-5 w-5" /> : <span>{i + 1}</span>}
                      </div>
                      <span className={`text-xs ${step === i + 1 ? "text-primary font-medium" : "text-gray-500"}`}>
                        {i === 0 ? "Business" : i === 1 ? "Contact" : "Review"}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {step === 1 && (
                <div className="space-y-4">
                  <div className="bg-blue-50 p-3 rounded-md border border-blue-100 mb-4">
                    <div className="flex">
                      <div className="mr-3 mt-0.5">
                        <Building className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-gray-900">Business Information</h4>
                        <p className="text-xs text-gray-600">
                          Please provide your business details as they should appear on your EIN documentation.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="businessName" className="flex items-center">
                      Business Name
                      <span className="text-red-500 ml-1">*</span>
                      <div className="relative ml-1 group">
                        <HelpCircle className="h-3.5 w-3.5 text-gray-400" />
                        <div className="absolute left-0 bottom-full mb-2 w-48 bg-gray-800 text-white text-xs rounded p-2 hidden group-hover:block z-10">
                          Enter the legal name of your business as it will appear on tax documents.
                          <div className="absolute left-0 top-full h-2 w-2 bg-gray-800 transform rotate-45 -mt-1 ml-1"></div>
                        </div>
                      </div>
                    </Label>
                    <Input
                      id="businessName"
                      name="businessName"
                      value={formData.businessName}
                      onChange={handleInputChange}
                      placeholder="Enter legal business name"
                      className={errors.businessName ? "border-red-500" : ""}
                    />
                    {errors.businessName && (
                      <p className="text-red-500 text-xs mt-1 flex items-center">
                        <AlertCircle className="h-3.5 w-3.5 mr-1" />
                        {errors.businessName}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="businessAddress" className="flex items-center">
                      Business Address
                      <span className="text-red-500 ml-1">*</span>
                    </Label>
                    <Input
                      id="businessAddress"
                      name="businessAddress"
                      value={formData.businessAddress}
                      onChange={handleInputChange}
                      placeholder="Enter street address"
                      className={errors.businessAddress ? "border-red-500" : ""}
                    />
                    {errors.businessAddress && (
                      <p className="text-red-500 text-xs mt-1 flex items-center">
                        <AlertCircle className="h-3.5 w-3.5 mr-1" />
                        {errors.businessAddress}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="businessCity" className="flex items-center">
                      City
                      <span className="text-red-500 ml-1">*</span>
                    </Label>
                    <Input
                      id="businessCity"
                      name="businessCity"
                      value={formData.businessCity}
                      onChange={handleInputChange}
                      placeholder="Enter city"
                      className={errors.businessCity ? "border-red-500" : ""}
                    />
                    {errors.businessCity && (
                      <p className="text-red-500 text-xs mt-1 flex items-center">
                        <AlertCircle className="h-3.5 w-3.5 mr-1" />
                        {errors.businessCity}
                      </p>
                    )}
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="businessState" className="flex items-center">
                        State
                        <span className="text-red-500 ml-1">*</span>
                      </Label>
                      <Input
                        id="businessState"
                        name="businessState"
                        value={formData.businessState}
                        onChange={handleInputChange}
                        placeholder="Enter state"
                        className={errors.businessState ? "border-red-500" : ""}
                      />
                      {errors.businessState && (
                        <p className="text-red-500 text-xs mt-1 flex items-center">
                          <AlertCircle className="h-3.5 w-3.5 mr-1" />
                          {errors.businessState}
                        </p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="businessZip" className="flex items-center">
                        ZIP Code
                        <span className="text-red-500 ml-1">*</span>
                      </Label>
                      <Input
                        id="businessZip"
                        name="businessZip"
                        value={formData.businessZip}
                        onChange={handleInputChange}
                        placeholder="Enter ZIP code"
                        className={errors.businessZip ? "border-red-500" : ""}
                      />
                      {errors.businessZip && (
                        <p className="text-red-500 text-xs mt-1 flex items-center">
                          <AlertCircle className="h-3.5 w-3.5 mr-1" />
                          {errors.businessZip}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-4">
                  <div className="bg-blue-50 p-3 rounded-md border border-blue-100 mb-4">
                    <div className="flex">
                      <div className="mr-3 mt-0.5">
                        <User className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-gray-900">Contact Information</h4>
                        <p className="text-xs text-gray-600">{getEntitySpecificInfo()}</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="contactName" className="flex items-center">
                      Contact Name
                      <span className="text-red-500 ml-1">*</span>
                    </Label>
                    <Input
                      id="contactName"
                      name="contactName"
                      value={formData.contactName}
                      onChange={handleInputChange}
                      placeholder="Enter full name"
                      className={errors.contactName ? "border-red-500" : ""}
                    />
                    {errors.contactName && (
                      <p className="text-red-500 text-xs mt-1 flex items-center">
                        <AlertCircle className="h-3.5 w-3.5 mr-1" />
                        {errors.contactName}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="contactEmail" className="flex items-center">
                      Email Address
                      <span className="text-red-500 ml-1">*</span>
                    </Label>
                    <Input
                      id="contactEmail"
                      name="contactEmail"
                      value={formData.contactEmail}
                      onChange={handleInputChange}
                      type="email"
                      placeholder="Enter email address"
                      className={errors.contactEmail ? "border-red-500" : ""}
                    />
                    {errors.contactEmail && (
                      <p className="text-red-500 text-xs mt-1 flex items-center">
                        <AlertCircle className="h-3.5 w-3.5 mr-1" />
                        {errors.contactEmail}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="contactPhone" className="flex items-center">
                      Phone Number
                      <span className="text-red-500 ml-1">*</span>
                    </Label>
                    <Input
                      id="contactPhone"
                      name="contactPhone"
                      value={formData.contactPhone}
                      onChange={handleInputChange}
                      placeholder="Enter phone number"
                      className={errors.contactPhone ? "border-red-500" : ""}
                    />
                    {errors.contactPhone && (
                      <p className="text-red-500 text-xs mt-1 flex items-center">
                        <AlertCircle className="h-3.5 w-3.5 mr-1" />
                        {errors.contactPhone}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="ssnEin" className="flex items-center">
                      Social Security Number or ITIN
                      <span className="text-red-500 ml-1">*</span>
                      <div className="relative ml-1 group">
                        <HelpCircle className="h-3.5 w-3.5 text-gray-400" />
                        <div className="absolute left-0 bottom-full mb-2 w-48 bg-gray-800 text-white text-xs rounded p-2 hidden group-hover:block z-10">
                          Required by the IRS to identify the responsible party. Format: XXX-XX-XXXX
                          <div className="absolute left-0 top-full h-2 w-2 bg-gray-800 transform rotate-45 -mt-1 ml-1"></div>
                        </div>
                      </div>
                    </Label>
                    <div className="relative">
                      <Input
                        id="ssnEin"
                        name="ssnEin"
                        value={formData.ssnEin}
                        onChange={handleInputChange}
                        placeholder="XXX-XX-XXXX"
                        className={`pl-9 ${errors.ssnEin ? "border-red-500" : ""}`}
                      />
                      <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                        <Lock className="h-4 w-4" />
                      </div>
                    </div>
                    {errors.ssnEin ? (
                      <p className="text-red-500 text-xs mt-1 flex items-center">
                        <AlertCircle className="h-3.5 w-3.5 mr-1" />
                        {errors.ssnEin}
                      </p>
                    ) : (
                      <p className="text-xs text-gray-500 mt-1 flex items-center">
                        <Lock className="h-3.5 w-3.5 mr-1" />
                        Your information is encrypted and secure
                      </p>
                    )}
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="space-y-4">
                  <div className="bg-blue-50 p-3 rounded-md border border-blue-100 mb-4">
                    <div className="flex">
                      <div className="mr-3 mt-0.5">
                        <CheckCircle className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-gray-900">Review & Submit</h4>
                        <p className="text-xs text-gray-600">
                          Please review your information before submitting your application.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-md border border-gray-200">
                    <h5 className="font-medium text-gray-900 mb-3 flex items-center">
                      <Building className="h-4 w-4 mr-2 text-gray-500" />
                      Business Information
                    </h5>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-500">Business Name:</span>
                        <span className="font-medium text-gray-900">{formData.businessName || "—"}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500">Address:</span>
                        <span className="font-medium text-gray-900">{formData.businessAddress || "—"}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500">City:</span>
                        <span className="font-medium text-gray-900">{formData.businessCity || "—"}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500">State:</span>
                        <span className="font-medium text-gray-900">{formData.businessState || "—"}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500">ZIP Code:</span>
                        <span className="font-medium text-gray-900">{formData.businessZip || "—"}</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-md border border-gray-200">
                    <h5 className="font-medium text-gray-900 mb-3 flex items-center">
                      <User className="h-4 w-4 mr-2 text-gray-500" />
                      Contact Information
                    </h5>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-500">Name:</span>
                        <span className="font-medium text-gray-900">{formData.contactName || "—"}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500">Email:</span>
                        <span className="font-medium text-gray-900">{formData.contactEmail || "—"}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500">Phone:</span>
                        <span className="font-medium text-gray-900">{formData.contactPhone || "—"}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500">SSN/ITIN:</span>
                        <span className="font-medium text-gray-900">
                          {formData.ssnEin ? "••••••" + formData.ssnEin.slice(-4) : "—"}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-md border border-gray-200">
                    <h5 className="font-medium text-gray-900 mb-3 flex items-center">
                      <CreditCard className="h-4 w-4 mr-2 text-gray-500" />
                      Service Fee
                    </h5>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-500">EIN Filing Service:</span>
                        <span className="font-medium text-gray-900">$69.99</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500">Processing Fee:</span>
                        <span className="font-medium text-gray-900">$5.00</span>
                      </div>
                      <div className="flex justify-between pt-2 mt-2 border-t border-gray-200">
                        <span className="font-medium text-gray-900">Total:</span>
                        <span className="font-medium text-primary">$74.99</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4">
                    <div className="flex items-start">
                      <input
                        type="checkbox"
                        id="agreeToTerms"
                        name="agreeToTerms"
                        checked={formData.agreeToTerms}
                        onChange={handleInputChange}
                        className="mt-1 mr-2"
                      />
                      <div>
                        <label htmlFor="agreeToTerms" className="text-sm text-gray-700">
                          I agree to the{" "}
                          <a href="/terms" className="text-primary hover:underline">
                            Terms of Service
                          </a>{" "}
                          and{" "}
                          <a href="/privacy" className="text-primary hover:underline">
                            Privacy Policy
                          </a>
                        </label>
                        {errors.agreeToTerms && (
                          <p className="text-red-500 text-xs mt-1 flex items-center">
                            <AlertCircle className="h-3.5 w-3.5 mr-1" />
                            {errors.agreeToTerms}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </>
          )}
        </div>

        {!isSubmitted && (
          <div className="flex justify-between p-4 border-t border-gray-200 bg-gray-50 rounded-b-lg">
            <Button variant="outline" onClick={handleBack}>
              {step === 1 ? "Cancel" : "Back"}
            </Button>
            <Button onClick={handleNext} disabled={isSubmitting} className="relative group">
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
              ) : (
                <>
                  {step === totalSteps ? "Submit Application" : "Continue"}
                  <ChevronRight className="h-4 w-4 ml-1 group-hover:translate-x-0.5 transition-transform" />
                </>
              )}
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}
