"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Label } from "./ui/label"
import {
  CheckCircle,
  CreditCard,
  Building,
  User,
  Mail,
  AlertCircle,
  HelpCircle,
  ChevronRight,
  Lock,
  ArrowLeft,
  FileText,
} from "lucide-react"
import type { EntityType } from "@/lib/entity-types"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Textarea } from "@/components/ui/textarea"
import PricingTierSelector from "@/components/pricing-tier-selector"

interface ApplicationFormProps {
  entityType: EntityType
}

export default function ApplicationForm({ entityType }: ApplicationFormProps) {
  const router = useRouter()
  const [step, setStep] = useState(1)
  const totalSteps = 5  // Increased to include pricing tier selection
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [selectedTier, setSelectedTier] = useState<{id: string, name: string, price: number} | null>({
    id: "standard",
    name: "Standard Filing", 
    price: 249
  })
  const [formData, setFormData] = useState({
    // Basic Business Information
    businessName: "",
    tradeName: "",
    businessAddress: "",
    businessCity: "",
    businessState: "",
    businessZip: "",
    countyAndState: "",
    mailingAddressSame: true,
    mailingAddress: "",
    mailingCity: "",
    mailingState: "",
    mailingZip: "",

    // Responsible Party Information
    contactName: "",
    contactSSN: "",
    contactEmail: "",
    contactPhone: "",

    // Entity-Specific Information
    isLLC: entityType.id === 2 || entityType.id === 3,
    llcMembers: entityType.id === 3 ? "2" : "1",
    llcOrganizedInUS: true,
    incorporationState: "",
    incorporationCountry: "United States",

    // Business Details
    reasonForApplying: "",
    startDate: "",
    closingMonth: "December",
    employeesAgricultural: "0",
    employeesHousehold: "0",
    employeesOther: "0",
    firstWageDate: "",
    hasEmployees: false,
    principalActivity: "",
    principalProductsServices: "",
    previousEIN: false,
    previousEINNumber: "",

    // Third Party Designee
    useThirdParty: true,

    // Terms
    agreeToTerms: false,
  })
  const [errors, setErrors] = useState<Record<string, string>>({})

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    const checked = type === "checkbox" ? (e.target as HTMLInputElement).checked : undefined

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

    // Handle special cases
    if (name === "mailingAddressSame" && checked) {
      setFormData((prev) => ({
        ...prev,
        [name]: checked,
        mailingAddress: prev.businessAddress,
        mailingCity: prev.businessCity,
        mailingState: prev.businessState,
        mailingZip: prev.businessZip,
      }))
    }

    if (name === "hasEmployees" && !checked) {
      setFormData((prev) => ({
        ...prev,
        hasEmployees: false,
        employeesAgricultural: "0",
        employeesHousehold: "0",
        employeesOther: "0",
        firstWageDate: "",
      }))
    }
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData({
      ...formData,
      [name]: value,
    })

    // Clear error
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: "",
      })
    }
  }

  const handleCheckboxChange = (name: string, checked: boolean) => {
    setFormData({
      ...formData,
      [name]: checked,
    })

    // Clear error
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: "",
      })
    }

    // Handle special cases
    if (name === "mailingAddressSame" && checked) {
      setFormData((prev) => ({
        ...prev,
        mailingAddress: prev.businessAddress,
        mailingCity: prev.businessCity,
        mailingState: prev.businessState,
        mailingZip: prev.businessZip,
      }))
    }

    if (name === "hasEmployees" && !checked) {
      setFormData((prev) => ({
        ...prev,
        hasEmployees: false,
        employeesAgricultural: "0",
        employeesHousehold: "0",
        employeesOther: "0",
        firstWageDate: "",
      }))
    }
  }

  const validateStep = (currentStep: number) => {
    const newErrors: Record<string, string> = {}

    if (currentStep === 1) {
      // Business Information Validation
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
      if (!formData.countyAndState.trim()) {
        newErrors.countyAndState = "County and state are required"
      }

      // Validate mailing address if different
      if (!formData.mailingAddressSame) {
        if (!formData.mailingAddress.trim()) {
          newErrors.mailingAddress = "Mailing address is required"
        }
        if (!formData.mailingCity.trim()) {
          newErrors.mailingCity = "City is required"
        }
        if (!formData.mailingState.trim()) {
          newErrors.mailingState = "State is required"
        }
        if (!formData.mailingZip.trim()) {
          newErrors.mailingZip = "ZIP code is required"
        } else if (!/^\d{5}(-\d{4})?$/.test(formData.mailingZip)) {
          newErrors.mailingZip = "Enter a valid ZIP code"
        }
      }
    }

    if (currentStep === 2) {
      // Responsible Party Validation
      if (!formData.contactName.trim()) {
        newErrors.contactName = "Contact name is required"
      }
      if (!formData.contactSSN.trim()) {
        newErrors.contactSSN = "SSN or ITIN is required"
      } else if (!/^\d{3}-\d{2}-\d{4}$/.test(formData.contactSSN) && !/^\d{9}$/.test(formData.contactSSN)) {
        newErrors.contactSSN = "Enter a valid SSN (XXX-XX-XXXX) or 9-digit ITIN"
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

      // Entity-specific validation
      if (formData.isLLC) {
        if (!formData.llcMembers) {
          newErrors.llcMembers = "Number of LLC members is required"
        }
      }

      if (entityType.id === 4 || entityType.id === 5) {
        // Corporation or S Corporation
        if (!formData.incorporationState.trim()) {
          newErrors.incorporationState = "State of incorporation is required"
        }
      }
    }

    if (currentStep === 3) {
      // Business Details Validation
      if (!formData.reasonForApplying) {
        newErrors.reasonForApplying = "Reason for applying is required"
      }

      if (!formData.startDate.trim()) {
        newErrors.startDate = "Business start date is required"
      }

      if (!formData.closingMonth) {
        newErrors.closingMonth = "Closing month is required"
      }

      if (formData.hasEmployees && !formData.firstWageDate.trim()) {
        newErrors.firstWageDate = "First wage date is required"
      }

      if (!formData.principalActivity) {
        newErrors.principalActivity = "Principal activity is required"
      }

      if (!formData.principalProductsServices.trim()) {
        newErrors.principalProductsServices = "Principal products/services is required"
      }

      if (formData.previousEIN && !formData.previousEINNumber.trim()) {
        newErrors.previousEINNumber = "Previous EIN is required"
      }
    }

    if (currentStep === 4) {
      if (!selectedTier || !selectedTier.id) {
        newErrors.pricingTier = "Please select a service level"
      }
    }

    if (currentStep === 5) {
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
        // Scroll to top
        window.scrollTo({ top: 0, behavior: "smooth" })
      } else {
        // Submit form
        handleSubmit({} as React.FormEvent)
      }
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    // e.preventDefault() // No event needed

    if (validateStep(step)) {
      setIsSubmitting(true)

      // Simulate API call
      setTimeout(() => {
        setIsSubmitting(false)
        // Redirect to payment page instead of showing confirmation
        const applicationId = `EIN-${Date.now().toString().slice(-6)}`
        const tierParam = selectedTier ? `&tier=${selectedTier.id}&price=${selectedTier.price}` : ''
        router.push(`/payment?applicationId=${applicationId}&entityType=${entityType.name}${tierParam}`)
      }, 1500)
    }
  }

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1)
      window.scrollTo({ top: 0, behavior: "smooth" })
    } else {
      router.push("/")
    }
  }

  const handleNewApplication = () => {
    setStep(1)
    setIsSubmitted(false)
    setFormData({
      // Reset to defaults
      businessName: "",
      tradeName: "",
      businessAddress: "",
      businessCity: "",
      businessState: "",
      businessZip: "",
      countyAndState: "",
      mailingAddressSame: true,
      mailingAddress: "",
      mailingCity: "",
      mailingState: "",
      mailingZip: "",

      contactName: "",
      contactSSN: "",
      contactEmail: "",
      contactPhone: "",

      isLLC: entityType.id === 2 || entityType.id === 3,
      llcMembers: entityType.id === 3 ? "2" : "1",
      llcOrganizedInUS: true,
      incorporationState: "",
      incorporationCountry: "United States",

      reasonForApplying: "",
      startDate: "",
      closingMonth: "December",
      employeesAgricultural: "0",
      employeesHousehold: "0",
      employeesOther: "0",
      firstWageDate: "",
      hasEmployees: false,
      principalActivity: "",
      principalProductsServices: "",
      previousEIN: false,
      previousEINNumber: "",

      useThirdParty: true,

      agreeToTerms: false,
    })
    setErrors({})
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const getEntitySpecificInfo = () => {
    switch (entityType.id) {
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

  const getReasonOptions = () => {
    const commonOptions = [
      { value: "started_new_business", label: "Started new business" },
      { value: "banking_purpose", label: "Banking purpose" },
      { value: "hired_employees", label: "Hired employees" },
      { value: "compliance", label: "Compliance with IRS withholding regulations" },
      { value: "other", label: "Other" },
    ]

    switch (entityType.id) {
      case 1: // Sole Proprietorship
        return commonOptions
      case 4: // Corporation
      case 5: // S Corporation
        return [...commonOptions, { value: "changed_type", label: "Changed type of organization" }]
      case 7: // Non-Profit
        return [...commonOptions, { value: "created_nonprofit", label: "Created a non-profit organization" }]
      case 8: // Estate
        return [
          { value: "created_estate", label: "Created an estate" },
          { value: "banking_purpose", label: "Banking purpose" },
          { value: "other", label: "Other" },
        ]
      case 9: // Trust
        return [
          { value: "created_trust", label: "Created a trust" },
          { value: "banking_purpose", label: "Banking purpose" },
          { value: "other", label: "Other" },
        ]
      default:
        return commonOptions
    }
  }

  const getActivityOptions = () => {
    return [
      { value: "construction", label: "Construction" },
      { value: "real_estate", label: "Real Estate" },
      { value: "rental", label: "Rental & Leasing" },
      { value: "manufacturing", label: "Manufacturing" },
      { value: "transportation", label: "Transportation & Warehousing" },
      { value: "finance", label: "Finance & Insurance" },
      { value: "healthcare", label: "Health Care & Social Assistance" },
      { value: "accommodation", label: "Accommodation & Food Service" },
      { value: "wholesale_agent", label: "Wholesale—Agent/Broker" },
      { value: "wholesale_other", label: "Wholesale—Other" },
      { value: "retail", label: "Retail" },
      { value: "other", label: "Other" },
    ]
  }

  const getMonthOptions = () => {
    return [
      { value: "January", label: "January" },
      { value: "February", label: "February" },
      { value: "March", label: "March" },
      { value: "April", label: "April" },
      { value: "May", label: "May" },
      { value: "June", label: "June" },
      { value: "July", label: "July" },
      { value: "August", label: "August" },
      { value: "September", label: "September" },
      { value: "October", label: "October" },
      { value: "November", label: "November" },
      { value: "December", label: "December" },
    ]
  }

  return (
    <div className="max-w-3xl mx-auto">
      <div className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden">
        {/* Header */}
        <div className="bg-primary text-white p-6 flex items-center">
          <div className="bg-white/10 p-2 rounded-md mr-3">{entityType.icon}</div>
          <div>
            <h1 className="text-xl font-bold text-white">
              {isSubmitted ? "Application Submitted" : `${entityType.name} EIN Application`}
            </h1>
            <p className="text-sm text-white/80">
              {isSubmitted
                ? "Your application has been successfully submitted"
                : "Complete the form below to apply for your Federal Tax ID"}
            </p>
          </div>
        </div>

        {/* Progress Bar */}
        {!isSubmitted && (
          <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
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

            <div className="flex mb-2">
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
                    {i === 0 ? "Business" : i === 1 ? "Contact" : i === 2 ? "Details" : i === 3 ? "Pricing" : "Review"}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Form Content */}
        <div className="p-6">
          {isSubmitting ? (
            <div className="flex flex-col items-center py-8">
              <div className="mb-6">
                <svg
                  className="animate-spin h-12 w-12 text-primary"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
              </div>
              <h2 className="text-2xl font-semibold mb-4 text-center">Processing Your Application</h2>
              <p className="text-gray-600 text-center mb-6 max-w-md">
                Please wait while we save your application details...
              </p>
            </div>
          ) : (
            <>
              {step === 1 && (
                <div className="space-y-6">
                  <div className="bg-blue-50 p-4 rounded-md border border-blue-100 mb-6">
                    <div className="flex">
                      <div className="mr-3 mt-0.5">
                        <Building className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-gray-900">Business Information</h4>
                        <p className="text-sm text-gray-600">
                          Please provide your business details as they should appear on your EIN documentation.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="businessName" className="flex items-center">
                      Legal Name of Entity
                      <span className="text-red-500 ml-1">*</span>
                      <div className="relative ml-1 group">
                        <HelpCircle className="h-3.5 w-3.5 text-gray-400" />
                        <div className="absolute left-0 bottom-full mb-2 w-80 bg-gray-800 text-white text-xs rounded p-3 hidden group-hover:block z-10">
                          Enter the legal name of your business as it will appear on tax documents. For sole
                          proprietors, this is your full name.
                          <div className="absolute left-0 top-full h-2 w-2 bg-gray-800 transform rotate-45 -mt-1 ml-1"></div>
                        </div>
                      </div>
                    </Label>
                    <Input
                      id="businessName"
                      name="businessName"
                      value={formData.businessName}
                      onChange={handleInputChange}
                      placeholder={entityType.id === 1 ? "Enter your full name" : "Enter legal business name"}
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
                    <Label htmlFor="tradeName" className="flex items-center">
                      Trade Name (if different)
                      <div className="relative ml-1 group">
                        <HelpCircle className="h-3.5 w-3.5 text-gray-400" />
                        <div className="absolute left-0 bottom-full mb-2 w-80 bg-gray-800 text-white text-xs rounded p-3 hidden group-hover:block z-10">
                          If you operate under a name different from your legal name, enter it here. Also known as DBA
                          (Doing Business As).
                          <div className="absolute left-0 top-full h-2 w-2 bg-gray-800 transform rotate-45 -mt-1 ml-1"></div>
                        </div>
                      </div>
                    </Label>
                    <Input
                      id="tradeName"
                      name="tradeName"
                      value={formData.tradeName}
                      onChange={handleInputChange}
                      placeholder="Enter trade name or DBA (optional)"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="businessAddress" className="flex items-center">
                      Business Address (Physical Location)
                      <span className="text-red-500 ml-1">*</span>
                    </Label>
                    <Input
                      id="businessAddress"
                      name="businessAddress"
                      value={formData.businessAddress}
                      onChange={handleInputChange}
                      placeholder="Enter street address (no P.O. boxes)"
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

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="businessState" className="flex items-center">
                        State
                        <span className="text-red-500 ml-1">*</span>
                        <div className="relative ml-1 group">
                          <HelpCircle className="h-3.5 w-3.5 text-gray-400" />
                          <div className="absolute left-0 bottom-full mb-2 w-80 bg-gray-800 text-white text-xs rounded p-3 hidden group-hover:block z-10">
                            Enter the state where your business is physically located. This should be the state where you conduct business operations, not necessarily where you're incorporated. Use the full state name (e.g., "California" not "CA").
                            <div className="absolute left-0 top-full h-2 w-2 bg-gray-800 transform rotate-45 -mt-1 ml-1"></div>
                          </div>
                        </div>
                      </Label>
                      <Input
                        id="businessState"
                        name="businessState"
                        value={formData.businessState}
                        onChange={handleInputChange}
                        placeholder="e.g., California, Texas, New York"
                        className={errors.businessState ? "border-red-500" : ""}
                      />
                      {errors.businessState && (
                        <p className="text-red-500 text-xs mt-1 flex items-center">
                          <AlertCircle className="h-3.5 w-3.5 mr-1" />
                          {errors.businessState}
                        </p>
                      )}
                      <p className="text-xs text-gray-500 mt-1">
                        💡 This is where your business physically operates, not where it's incorporated
                      </p>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="businessZip" className="flex items-center">
                        ZIP Code
                        <span className="text-red-500 ml-1">*</span>
                        <div className="relative ml-1 group">
                          <HelpCircle className="h-3.5 w-3.5 text-gray-400" />
                          <div className="absolute left-0 bottom-full mb-2 w-64 bg-gray-800 text-white text-xs rounded p-2 hidden group-hover:block z-10">
                            Enter the 5-digit ZIP code for your business location. You can include the 4-digit extension if known (e.g., 12345-6789).
                            <div className="absolute left-0 top-full h-2 w-2 bg-gray-800 transform rotate-45 -mt-1 ml-1"></div>
                          </div>
                        </div>
                      </Label>
                      <Input
                        id="businessZip"
                        name="businessZip"
                        value={formData.businessZip}
                        onChange={handleInputChange}
                        placeholder="12345 or 12345-6789"
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

                  <div className="space-y-2">
                    <Label htmlFor="countyAndState" className="flex items-center">
                      County and State Where Principal Business is Located
                      <span className="text-red-500 ml-1">*</span>
                      <div className="relative ml-1 group">
                        <HelpCircle className="h-3.5 w-3.5 text-gray-400" />
                        <div className="absolute left-0 bottom-full mb-2 w-80 bg-gray-800 text-white text-xs rounded p-3 hidden group-hover:block z-10">
                          Enter both the county name and state. This is required by the IRS for tax jurisdiction purposes. Example formats: "Los Angeles County, California" or "Orange County, Florida"
                          <div className="absolute left-0 top-full h-2 w-2 bg-gray-800 transform rotate-45 -mt-1 ml-1"></div>
                        </div>
                      </div>
                    </Label>
                    <Input
                      id="countyAndState"
                      name="countyAndState"
                      value={formData.countyAndState}
                      onChange={handleInputChange}
                      placeholder="e.g., Orange County, California"
                      className={errors.countyAndState ? "border-red-500" : ""}
                    />
                    {errors.countyAndState && (
                      <p className="text-red-500 text-xs mt-1 flex items-center">
                        <AlertCircle className="h-3.5 w-3.5 mr-1" />
                        {errors.countyAndState}
                      </p>
                    )}
                    <p className="text-xs text-gray-500 mt-1">
                      💡 Not sure of your county? Search "[your city] county" online
                    </p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-start space-x-2">
                      <Checkbox
                        id="mailingAddressSame"
                        checked={formData.mailingAddressSame}
                        onCheckedChange={(checked) => handleCheckboxChange("mailingAddressSame", checked as boolean)}
                      />
                      <div className="grid gap-1.5 leading-none">
                        <label
                          htmlFor="mailingAddressSame"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Mailing address is the same as business address
                        </label>
                      </div>
                    </div>
                  </div>

                  {!formData.mailingAddressSame && (
                    <div className="space-y-4 border-t border-gray-200 pt-4 mt-4">
                      <h4 className="text-sm font-medium text-gray-900">Mailing Address</h4>

                      <div className="space-y-2">
                        <Label htmlFor="mailingAddress" className="flex items-center">
                          Mailing Address
                          <span className="text-red-500 ml-1">*</span>
                        </Label>
                        <Input
                          id="mailingAddress"
                          name="mailingAddress"
                          value={formData.mailingAddress}
                          onChange={handleInputChange}
                          placeholder="Enter mailing address"
                          className={errors.mailingAddress ? "border-red-500" : ""}
                        />
                        {errors.mailingAddress && (
                          <p className="text-red-500 text-xs mt-1 flex items-center">
                            <AlertCircle className="h-3.5 w-3.5 mr-1" />
                            {errors.mailingAddress}
                          </p>
                        )}
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="mailingCity" className="flex items-center">
                          City
                          <span className="text-red-500 ml-1">*</span>
                        </Label>
                        <Input
                          id="mailingCity"
                          name="mailingCity"
                          value={formData.mailingCity}
                          onChange={handleInputChange}
                          placeholder="Enter city"
                          className={errors.mailingCity ? "border-red-500" : ""}
                        />
                        {errors.mailingCity && (
                          <p className="text-red-500 text-xs mt-1 flex items-center">
                            <AlertCircle className="h-3.5 w-3.5 mr-1" />
                            {errors.mailingCity}
                          </p>
                        )}
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="mailingState" className="flex items-center">
                            State
                            <span className="text-red-500 ml-1">*</span>
                          </Label>
                          <Input
                            id="mailingState"
                            name="mailingState"
                            value={formData.mailingState}
                            onChange={handleInputChange}
                            placeholder="Enter state"
                            className={errors.mailingState ? "border-red-500" : ""}
                          />
                          {errors.mailingState && (
                            <p className="text-red-500 text-xs mt-1 flex items-center">
                              <AlertCircle className="h-3.5 w-3.5 mr-1" />
                              {errors.mailingState}
                            </p>
                          )}
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="mailingZip" className="flex items-center">
                            ZIP Code
                            <span className="text-red-500 ml-1">*</span>
                          </Label>
                          <Input
                            id="mailingZip"
                            name="mailingZip"
                            value={formData.mailingZip}
                            onChange={handleInputChange}
                            placeholder="Enter ZIP code"
                            className={errors.mailingZip ? "border-red-500" : ""}
                          />
                          {errors.mailingZip && (
                            <p className="text-red-500 text-xs mt-1 flex items-center">
                              <AlertCircle className="h-3.5 w-3.5 mr-1" />
                              {errors.mailingZip}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {step === 2 && (
                <div className="space-y-6">
                  <div className="bg-blue-50 p-4 rounded-md border border-blue-100 mb-6">
                    <div className="flex">
                      <div className="mr-3 mt-0.5">
                        <User className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-gray-900">Responsible Party Information</h4>
                        <p className="text-sm text-gray-600">{getEntitySpecificInfo()}</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="contactName" className="flex items-center">
                      Name of Responsible Party
                      <span className="text-red-500 ml-1">*</span>
                      <div className="relative ml-1 group">
                        <HelpCircle className="h-3.5 w-3.5 text-gray-400" />
                        <div className="absolute left-0 bottom-full mb-2 w-80 bg-gray-800 text-white text-xs rounded p-3 hidden group-hover:block z-10">
                          The responsible party is the person who controls, manages, or directs the entity and the
                          disposition of its funds and assets.
                          <div className="absolute left-0 top-full h-2 w-2 bg-gray-800 transform rotate-45 -mt-1 ml-1"></div>
                        </div>
                      </div>
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
                    <Label htmlFor="contactSSN" className="flex items-center">
                      Social Security Number
                      <span className="text-red-500 ml-1">*</span>
                      <div className="relative ml-1 group">
                        <HelpCircle className="h-3.5 w-3.5 text-gray-400" />
                        <div className="absolute left-0 bottom-full mb-2 w-80 bg-gray-800 text-white text-xs rounded p-3 hidden group-hover:block z-10">
                          This must be the SSN of the person responsible for the entity. For sole proprietors, use your own SSN. For businesses, use the SSN of the person with control or substantial ownership. This is required by IRS regulations.
                          <div className="absolute left-0 top-full h-2 w-2 bg-gray-800 transform rotate-45 -mt-1 ml-1"></div>
                        </div>
                      </div>
                    </Label>
                    <div className="relative">
                      <Input
                        id="contactSSN"
                        name="contactSSN"
                        value={formData.contactSSN}
                        onChange={handleInputChange}
                        placeholder="XXX-XX-XXXX"
                        className={`pl-9 ${errors.contactSSN ? "border-red-500" : ""}`}
                      />
                      <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                        <Lock className="h-4 w-4" />
                      </div>
                    </div>
                    {errors.contactSSN ? (
                      <p className="text-red-500 text-xs mt-1 flex items-center">
                        <AlertCircle className="h-3.5 w-3.5 mr-1" />
                        {errors.contactSSN}
                      </p>
                    ) : (
                      <p className="text-xs text-gray-500 mt-1 flex items-center">
                        <Lock className="h-3.5 w-3.5 mr-1" />
                        Your information is encrypted and secure. Required by IRS regulations.
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="contactEmail" className="flex items-center">
                      Email Address
                      <span className="text-red-500 ml-1">*</span>
                      <div className="relative ml-1 group">
                        <HelpCircle className="h-3.5 w-3.5 text-gray-400" />
                        <div className="absolute left-0 bottom-full mb-2 w-64 bg-gray-800 text-white text-xs rounded p-2 hidden group-hover:block z-10">
                          We'll use this email to send you updates about your application and deliver your EIN documentation.
                          <div className="absolute left-0 top-full h-2 w-2 bg-gray-800 transform rotate-45 -mt-1 ml-1"></div>
                        </div>
                      </div>
                    </Label>
                    <Input
                      id="contactEmail"
                      name="contactEmail"
                      value={formData.contactEmail}
                      onChange={handleInputChange}
                      type="email"
                      placeholder="your@email.com"
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
                      <div className="relative ml-1 group">
                        <HelpCircle className="h-3.5 w-3.5 text-gray-400" />
                        <div className="absolute left-0 bottom-full mb-2 w-64 bg-gray-800 text-white text-xs rounded p-2 hidden group-hover:block z-10">
                          Provide a phone number where you can be reached if the IRS needs to verify your application.
                          <div className="absolute left-0 top-full h-2 w-2 bg-gray-800 transform rotate-45 -mt-1 ml-1"></div>
                        </div>
                      </div>
                    </Label>
                    <Input
                      id="contactPhone"
                      name="contactPhone"
                      value={formData.contactPhone}
                      onChange={handleInputChange}
                      placeholder="(555) 123-4567"
                      className={errors.contactPhone ? "border-red-500" : ""}
                    />
                    {errors.contactPhone && (
                      <p className="text-red-500 text-xs mt-1 flex items-center">
                        <AlertCircle className="h-3.5 w-3.5 mr-1" />
                        {errors.contactPhone}
                      </p>
                    )}
                  </div>

                  {/* Entity-specific fields */}
                  {(entityType.id === 2 || entityType.id === 3) && (
                    <div className="space-y-4 border-t border-gray-200 pt-4 mt-4">
                      <div className="bg-amber-50 p-3 rounded-lg border border-amber-200">
                        <div className="flex items-start">
                          <div className="mr-2 mt-0.5">
                            <Building className="h-4 w-4 text-amber-600" />
                          </div>
                          <div>
                            <h4 className="text-sm font-medium text-amber-800">LLC-Specific Information</h4>
                            <p className="text-xs text-amber-700 mt-1">
                              This information helps the IRS determine your tax classification and filing requirements.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="llcMembers" className="flex items-center">
                          Number of LLC Members
                          <span className="text-red-500 ml-1">*</span>
                          <div className="relative ml-1 group">
                            <HelpCircle className="h-3.5 w-3.5 text-gray-400" />
                            <div className="absolute left-0 bottom-full mb-2 w-80 bg-gray-800 text-white text-xs rounded p-3 hidden group-hover:block z-10">
                              Count all owners/members of the LLC. Single-member LLCs are taxed as sole proprietorships by default. Multi-member LLCs are taxed as partnerships. This affects your tax filing requirements.
                              <div className="absolute left-0 top-full h-2 w-2 bg-gray-800 transform rotate-45 -mt-1 ml-1"></div>
                            </div>
                          </div>
                        </Label>
                        <Select
                          value={formData.llcMembers}
                          onValueChange={(value) => handleSelectChange("llcMembers", value)}
                        >
                          <SelectTrigger className={errors.llcMembers ? "border-red-500" : ""}>
                            <SelectValue placeholder="Select number of members" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="1">1 (Single Member)</SelectItem>
                            <SelectItem value="2">2</SelectItem>
                            <SelectItem value="3">3</SelectItem>
                            <SelectItem value="4">4</SelectItem>
                            <SelectItem value="5">5</SelectItem>
                            <SelectItem value="6">6+</SelectItem>
                          </SelectContent>
                        </Select>
                        {errors.llcMembers && (
                          <p className="text-red-500 text-xs mt-1 flex items-center">
                            <AlertCircle className="h-3.5 w-3.5 mr-1" />
                            {errors.llcMembers}
                          </p>
                        )}
                        <p className="text-xs text-gray-500 mt-1">
                          💡 This determines your default tax classification with the IRS
                        </p>
                      </div>

                      <div className="space-y-2">
                        <Label className="flex items-center">
                          Was the LLC organized in the United States?
                          <div className="relative ml-1 group">
                            <HelpCircle className="h-3.5 w-3.5 text-gray-400" />
                            <div className="absolute left-0 bottom-full mb-2 w-64 bg-gray-800 text-white text-xs rounded p-2 hidden group-hover:block z-10">
                              Select "Yes" if your LLC was formed under the laws of any U.S. state or territory.
                              <div className="absolute left-0 top-full h-2 w-2 bg-gray-800 transform rotate-45 -mt-1 ml-1"></div>
                            </div>
                          </div>
                        </Label>
                        <div className="flex space-x-4">
                          <div className="flex items-center">
                            <input
                              type="radio"
                              id="llcOrganizedYes"
                              name="llcOrganizedInUS"
                              checked={formData.llcOrganizedInUS === true}
                              onChange={() => handleSelectChange("llcOrganizedInUS", "true")}
                              className="mr-2"
                            />
                            <label htmlFor="llcOrganizedYes">Yes</label>
                          </div>
                          <div className="flex items-center">
                            <input
                              type="radio"
                              id="llcOrganizedNo"
                              name="llcOrganizedInUS"
                              checked={formData.llcOrganizedInUS === false}
                              onChange={() => handleSelectChange("llcOrganizedInUS", "false")}
                              className="mr-2"
                            />
                            <label htmlFor="llcOrganizedNo">No</label>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {(entityType.id === 4 || entityType.id === 5) && (
                    <div className="space-y-4 border-t border-gray-200 pt-4 mt-4">
                      <div className="bg-blue-50 p-3 rounded-lg border border-blue-200">
                        <div className="flex items-start">
                          <div className="mr-2 mt-0.5">
                            <Building className="h-4 w-4 text-blue-600" />
                          </div>
                          <div>
                            <h4 className="text-sm font-medium text-blue-800">Corporation Information</h4>
                            <p className="text-xs text-blue-700 mt-1">
                              Information about where your corporation was legally formed.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="incorporationState" className="flex items-center">
                          State Where Incorporated
                          <span className="text-red-500 ml-1">*</span>
                          <div className="relative ml-1 group">
                            <HelpCircle className="h-3.5 w-3.5 text-gray-400" />
                            <div className="absolute left-0 bottom-full mb-2 w-80 bg-gray-800 text-white text-xs rounded p-3 hidden group-hover:block z-10">
                              Enter the state where you filed your Articles of Incorporation. This may be different from where your business operates. Popular incorporation states include Delaware, Nevada, and Wyoming.
                              <div className="absolute left-0 top-full h-2 w-2 bg-gray-800 transform rotate-45 -mt-1 ml-1"></div>
                            </div>
                          </div>
                        </Label>
                        <Input
                          id="incorporationState"
                          name="incorporationState"
                          value={formData.incorporationState}
                          onChange={handleInputChange}
                          placeholder="e.g., Delaware, California, Nevada"
                          className={errors.incorporationState ? "border-red-500" : ""}
                        />
                        {errors.incorporationState && (
                          <p className="text-red-500 text-xs mt-1 flex items-center">
                            <AlertCircle className="h-3.5 w-3.5 mr-1" />
                            {errors.incorporationState}
                          </p>
                        )}
                        <p className="text-xs text-gray-500 mt-1">
                          💡 This is where you filed incorporation papers, not where you operate
                        </p>
                      </div>

                      {formData.incorporationState.toLowerCase() === "foreign" && (
                        <div className="space-y-2">
                          <Label htmlFor="incorporationCountry" className="flex items-center">
                            Country Where Incorporated
                            <span className="text-red-500 ml-1">*</span>
                          </Label>
                          <Input
                            id="incorporationCountry"
                            name="incorporationCountry"
                            value={formData.incorporationCountry}
                            onChange={handleInputChange}
                            placeholder="Enter country of incorporation"
                          />
                        </div>
                      )}
                    </div>
                  )}
                </div>
              )}

              {step === 3 && (
                <div className="space-y-6">
                  <div className="bg-blue-50 p-4 rounded-md border border-blue-100 mb-6">
                    <div className="flex">
                      <div className="mr-3 mt-0.5">
                        <FileText className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-gray-900">Business Details</h4>
                        <p className="text-sm text-gray-600">
                          Please provide additional information about your business operations.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="reasonForApplying" className="flex items-center">
                      Reason for Applying for EIN
                      <span className="text-red-500 ml-1">*</span>
                      <div className="relative ml-1 group">
                        <HelpCircle className="h-3.5 w-3.5 text-gray-400" />
                        <div className="absolute left-0 bottom-full mb-2 w-80 bg-gray-800 text-white text-xs rounded p-3 hidden group-hover:block z-10">
                          Select the primary reason you need an EIN. This helps the IRS understand your business needs and determine your filing requirements.
                          <div className="absolute left-0 top-full h-2 w-2 bg-gray-800 transform rotate-45 -mt-1 ml-1"></div>
                        </div>
                      </div>
                    </Label>
                    <Select
                      value={formData.reasonForApplying}
                      onValueChange={(value) => handleSelectChange("reasonForApplying", value)}
                    >
                      <SelectTrigger className={errors.reasonForApplying ? "border-red-500" : ""}>
                        <SelectValue placeholder="Select reason" />
                      </SelectTrigger>
                      <SelectContent>
                        {getReasonOptions().map((option) => (
                          <SelectItem key={option.value} value={option.value}>
                            {option.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {errors.reasonForApplying && (
                      <p className="text-red-500 text-xs mt-1 flex items-center">
                        <AlertCircle className="h-3.5 w-3.5 mr-1" />
                        {errors.reasonForApplying}
                      </p>
                    )}
                    <p className="text-xs text-gray-500 mt-1">
                      💡 Most businesses select "Started new business" or "Banking purpose"
                    </p>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="startDate" className="flex items-center">
                      Date Business Started or Acquired
                      <span className="text-red-500 ml-1">*</span>
                      <div className="relative ml-1 group">
                        <HelpCircle className="h-3.5 w-3.5 text-gray-400" />
                        <div className="absolute left-0 bottom-full mb-2 w-80 bg-gray-800 text-white text-xs rounded p-3 hidden group-hover:block z-10">
                          Enter the date you started or acquired this business. For new businesses, this can be the date you first conducted business activities or plan to start. Format: MM/DD/YYYY
                          <div className="absolute left-0 top-full h-2 w-2 bg-gray-800 transform rotate-45 -mt-1 ml-1"></div>
                        </div>
                      </div>
                    </Label>
                    <Input
                      id="startDate"
                      name="startDate"
                      value={formData.startDate}
                      onChange={handleInputChange}
                      placeholder="MM/DD/YYYY"
                      className={errors.startDate ? "border-red-500" : ""}
                    />
                    {errors.startDate && (
                      <p className="text-red-500 text-xs mt-1 flex items-center">
                        <AlertCircle className="h-3.5 w-3.5 mr-1" />
                        {errors.startDate}
                      </p>
                    )}
                    <p className="text-xs text-gray-500 mt-1">
                      💡 For new businesses, you can use today's date or your planned start date
                    </p>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="closingMonth" className="flex items-center">
                      Closing Month of Accounting Year
                      <span className="text-red-500 ml-1">*</span>
                      <div className="relative ml-1 group">
                        <HelpCircle className="h-3.5 w-3.5 text-gray-400" />
                        <div className="absolute left-0 bottom-full mb-2 w-80 bg-gray-800 text-white text-xs rounded p-3 hidden group-hover:block z-10">
                          Choose the last month of your business's fiscal year. Most businesses use December (calendar year). This determines when your annual tax returns are due.
                          <div className="absolute left-0 top-full h-2 w-2 bg-gray-800 transform rotate-45 -mt-1 ml-1"></div>
                        </div>
                      </div>
                    </Label>
                    <Select
                      value={formData.closingMonth}
                      onValueChange={(value) => handleSelectChange("closingMonth", value)}
                    >
                      <SelectTrigger className={errors.closingMonth ? "border-red-500" : ""}>
                        <SelectValue placeholder="Select month" />
                      </SelectTrigger>
                      <SelectContent>
                        {getMonthOptions().map((option) => (
                          <SelectItem key={option.value} value={option.value}>
                            {option.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {errors.closingMonth && (
                      <p className="text-red-500 text-xs mt-1 flex items-center">
                        <AlertCircle className="h-3.5 w-3.5 mr-1" />
                        {errors.closingMonth}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-start space-x-2">
                      <Checkbox
                        id="hasEmployees"
                        checked={formData.hasEmployees}
                        onCheckedChange={(checked) => handleCheckboxChange("hasEmployees", checked as boolean)}
                      />
                      <div className="grid gap-1.5 leading-none">
                        <label
                          htmlFor="hasEmployees"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex items-center"
                        >
                          Do you expect to have employees within the next 12 months?
                          <div className="relative ml-1 group">
                            <HelpCircle className="h-3.5 w-3.5 text-gray-400" />
                            <div className="absolute left-0 bottom-full mb-2 w-80 bg-gray-800 text-white text-xs rounded p-3 hidden group-hover:block z-10">
                              Check this if you plan to hire employees, contractors who will receive W-2s, or if you'll be paying yourself a salary. This helps the IRS set up your payroll tax obligations.
                              <div className="absolute left-0 top-full h-2 w-2 bg-gray-800 transform rotate-45 -mt-1 ml-1"></div>
                            </div>
                          </div>
                        </label>
                      </div>
                    </div>
                  </div>

                  {formData.hasEmployees && (
                    <div className="space-y-4 border-t border-gray-200 pt-4 mt-4">
                      <div className="bg-green-50 p-3 rounded-lg border border-green-200">
                        <div className="flex items-start">
                          <div className="mr-2 mt-0.5">
                            <User className="h-4 w-4 text-green-600" />
                          </div>
                          <div>
                            <h4 className="text-sm font-medium text-green-800">Employee Information</h4>
                            <p className="text-xs text-green-700 mt-1">
                              Provide the expected number of employees in each category for the next 12 months.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-3 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="employeesAgricultural" className="text-xs flex items-center">
                            Agricultural
                            <div className="relative ml-1 group">
                              <HelpCircle className="h-3 w-3 text-gray-400" />
                              <div className="absolute left-0 bottom-full mb-2 w-48 bg-gray-800 text-white text-xs rounded p-2 hidden group-hover:block z-10">
                                Farm workers, ranch hands, agricultural laborers
                                <div className="absolute left-0 top-full h-2 w-2 bg-gray-800 transform rotate-45 -mt-1 ml-1"></div>
                              </div>
                            </div>
                          </Label>
                          <Input
                            id="employeesAgricultural"
                            name="employeesAgricultural"
                            value={formData.employeesAgricultural}
                            onChange={handleInputChange}
                            placeholder="0"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="employeesHousehold" className="text-xs flex items-center">
                            Household
                            <div className="relative ml-1 group">
                              <HelpCircle className="h-3 w-3 text-gray-400" />
                              <div className="absolute left-0 bottom-full mb-2 w-48 bg-gray-800 text-white text-xs rounded p-2 hidden group-hover:block z-10">
                                Housekeepers, nannies, gardeners, personal assistants
                                <div className="absolute left-0 top-full h-2 w-2 bg-gray-800 transform rotate-45 -mt-1 ml-1"></div>
                              </div>
                            </div>
                          </Label>
                          <Input
                            id="employeesHousehold"
                            name="employeesHousehold"
                            value={formData.employeesHousehold}
                            onChange={handleInputChange}
                            placeholder="0"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="employeesOther" className="text-xs flex items-center">
                            Other
                            <div className="relative ml-1 group">
                              <HelpCircle className="h-3 w-3 text-gray-400" />
                              <div className="absolute left-0 bottom-full mb-2 w-48 bg-gray-800 text-white text-xs rounded p-2 hidden group-hover:block z-10">
                                Regular business employees, office workers, sales staff
                                <div className="absolute left-0 top-full h-2 w-2 bg-gray-800 transform rotate-45 -mt-1 ml-1"></div>
                              </div>
                            </div>
                          </Label>
                          <Input
                            id="employeesOther"
                            name="employeesOther"
                            value={formData.employeesOther}
                            onChange={handleInputChange}
                            placeholder="0"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="firstWageDate" className="flex items-center">
                          First Date Wages Were/Will Be Paid
                          <span className="text-red-500 ml-1">*</span>
                          <div className="relative ml-1 group">
                            <HelpCircle className="h-3.5 w-3.5 text-gray-400" />
                            <div className="absolute left-0 bottom-full mb-2 w-64 bg-gray-800 text-white text-xs rounded p-2 hidden group-hover:block z-10">
                              Enter the date you first paid or will pay wages to employees. This can be a future date.
                              <div className="absolute left-0 top-full h-2 w-2 bg-gray-800 transform rotate-45 -mt-1 ml-1"></div>
                            </div>
                          </div>
                        </Label>
                        <Input
                          id="firstWageDate"
                          name="firstWageDate"
                          value={formData.firstWageDate}
                          onChange={handleInputChange}
                          placeholder="MM/DD/YYYY"
                          className={errors.firstWageDate ? "border-red-500" : ""}
                        />
                        {errors.firstWageDate && (
                          <p className="text-red-500 text-xs mt-1 flex items-center">
                            <AlertCircle className="h-3.5 w-3.5 mr-1" />
                            {errors.firstWageDate}
                          </p>
                        )}
                      </div>
                    </div>
                  )}

                  <div className="space-y-2">
                    <Label htmlFor="principalActivity" className="flex items-center">
                      Principal Activity of Your Business
                      <span className="text-red-500 ml-1">*</span>
                      <div className="relative ml-1 group">
                        <HelpCircle className="h-3.5 w-3.5 text-gray-400" />
                        <div className="absolute left-0 bottom-full mb-2 w-80 bg-gray-800 text-white text-xs rounded p-3 hidden group-hover:block z-10">
                          Select the category that best describes your main business activity. This helps the IRS classify your business for tax and statistical purposes.
                          <div className="absolute left-0 top-full h-2 w-2 bg-gray-800 transform rotate-45 -mt-1 ml-1"></div>
                        </div>
                      </div>
                    </Label>
                    <Select
                      value={formData.principalActivity}
                      onValueChange={(value) => handleSelectChange("principalActivity", value)}
                    >
                      <SelectTrigger className={errors.principalActivity ? "border-red-500" : ""}>
                        <SelectValue placeholder="Select activity" />
                      </SelectTrigger>
                      <SelectContent>
                        {getActivityOptions().map((option) => (
                          <SelectItem key={option.value} value={option.value}>
                            {option.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {errors.principalActivity && (
                      <p className="text-red-500 text-xs mt-1 flex items-center">
                        <AlertCircle className="h-3.5 w-3.5 mr-1" />
                        {errors.principalActivity}
                      </p>
                    )}
                    <p className="text-xs text-gray-500 mt-1">
                      💡 Choose the category that generates the most revenue for your business
                    </p>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="principalProductsServices" className="flex items-center">
                      Principal Products/Services Provided
                      <span className="text-red-500 ml-1">*</span>
                      <div className="relative ml-1 group">
                        <HelpCircle className="h-3.5 w-3.5 text-gray-400" />
                        <div className="absolute left-0 bottom-full mb-2 w-80 bg-gray-800 text-white text-xs rounded p-3 hidden group-hover:block z-10">
                          Briefly describe the main products or services your business provides. Be specific but concise. Examples: "Web design services", "Retail clothing sales", "Restaurant meals", "Consulting services"
                          <div className="absolute left-0 top-full h-2 w-2 bg-gray-800 transform rotate-45 -mt-1 ml-1"></div>
                        </div>
                      </div>
                    </Label>
                    <Textarea
                      id="principalProductsServices"
                      name="principalProductsServices"
                      value={formData.principalProductsServices}
                      onChange={handleInputChange}
                      placeholder="e.g., Web design and development services for small businesses"
                      className={errors.principalProductsServices ? "border-red-500" : ""}
                      rows={3}
                    />
                    {errors.principalProductsServices && (
                      <p className="text-red-500 text-xs mt-1 flex items-center">
                        <AlertCircle className="h-3.5 w-3.5 mr-1" />
                        {errors.principalProductsServices}
                      </p>
                    )}
                    <p className="text-xs text-gray-500 mt-1">
                      💡 Keep it simple - one or two sentences describing what you sell or do
                    </p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-start space-x-2">
                      <Checkbox
                        id="previousEIN"
                        checked={formData.previousEIN}
                        onCheckedChange={(checked) => handleCheckboxChange("previousEIN", checked as boolean)}
                      />
                      <div className="grid gap-1.5 leading-none">
                        <label
                          htmlFor="previousEIN"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex items-center"
                        >
                          Has this business ever applied for and received an EIN before?
                          <div className="relative ml-1 group">
                            <HelpCircle className="h-3.5 w-3.5 text-gray-400" />
                            <div className="absolute left-0 bottom-full mb-2 w-80 bg-gray-800 text-white text-xs rounded p-3 hidden group-hover:block z-10">
                              Only check this if THIS EXACT business entity previously received an EIN that was lost or you need for reference. Most new applications should leave this unchecked.
                              <div className="absolute left-0 top-full h-2 w-2 bg-gray-800 transform rotate-45 -mt-1 ml-1"></div>
                            </div>
                          </div>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {step === 4 && (
                <div className="space-y-6">
                  <div className="bg-blue-50 p-4 rounded-md border border-blue-100 mb-6">
                    <div className="flex">
                      <div className="mr-3 mt-0.5">
                        <CreditCard className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-gray-900">Service Level</h4>
                        <p className="text-sm text-gray-600">
                          Choose the processing speed that works best for your timeline.
                        </p>
                      </div>
                    </div>
                  </div>

                  <PricingTierSelector 
                    selectedTier={selectedTier?.id}
                    onTierSelect={(tier) => setSelectedTier(tier)}
                  />
                  
                  {errors.pricingTier && (
                    <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-md">
                      <p className="text-red-600 text-sm flex items-center">
                        <AlertCircle className="h-4 w-4 mr-2" />
                        {errors.pricingTier}
                      </p>
                    </div>
                  )}
                </div>
              )}

              {step === 5 && (
                <div className="space-y-6">
                  <div className="bg-blue-50 p-4 rounded-md border border-blue-100 mb-6">
                    <div className="flex">
                      <div className="mr-3 mt-0.5">
                        <CheckCircle className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-gray-900">Review & Submit</h4>
                        <p className="text-sm text-gray-600">
                          Please review your information before submitting your application.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-5 rounded-md border border-gray-200 mb-6">
                    <h5 className="font-medium text-gray-900 mb-4 flex items-center">
                      <Building className="h-4 w-4 mr-2 text-gray-500" />
                      Business Information
                    </h5>
                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between pb-2 border-b border-gray-200">
                        <span className="text-gray-500">Legal Name:</span>
                        <span className="font-medium text-gray-900">{formData.businessName || "—"}</span>
                      </div>
                      {formData.tradeName && (
                        <div className="flex justify-between pb-2 border-b border-gray-200">
                          <span className="text-gray-500">Trade Name:</span>
                          <span className="font-medium text-gray-900">{formData.tradeName}</span>
                        </div>
                      )}
                      <div className="flex justify-between pb-2 border-b border-gray-200">
                        <span className="text-gray-500">Business Address:</span>
                        <span className="font-medium text-gray-900">{formData.businessAddress || "—"}</span>
                      </div>
                      <div className="flex justify-between pb-2 border-b border-gray-200">
                        <span className="text-gray-500">City, State, ZIP:</span>
                        <span className="font-medium text-gray-900">
                          {formData.businessCity
                            ? `${formData.businessCity}, ${formData.businessState} ${formData.businessZip}`
                            : "—"}
                        </span>
                      </div>
                      <div className="flex justify-between pb-2 border-b border-gray-200">
                        <span className="text-gray-500">County and State:</span>
                        <span className="font-medium text-gray-900">{formData.countyAndState || "—"}</span>
                      </div>
                      {!formData.mailingAddressSame && (
                        <>
                          <div className="flex justify-between pb-2 border-b border-gray-200">
                            <span className="text-gray-500">Mailing Address:</span>
                            <span className="font-medium text-gray-900">{formData.mailingAddress || "—"}</span>
                          </div>
                          <div className="flex justify-between pb-2 border-b border-gray-200">
                            <span className="text-gray-500">Mailing City, State, ZIP:</span>
                            <span className="font-medium text-gray-900">
                              {formData.mailingCity
                                ? `${formData.mailingCity}, ${formData.mailingState} ${formData.mailingZip}`
                                : "—"}
                            </span>
                          </div>
                        </>
                      )}
                    </div>
                  </div>

                  <div className="bg-gray-50 p-5 rounded-md border border-gray-200 mb-6">
                    <h5 className="font-medium text-gray-900 mb-4 flex items-center">
                      <User className="h-4 w-4 mr-2 text-gray-500" />
                      Responsible Party Information
                    </h5>
                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between pb-2 border-b border-gray-200">
                        <span className="text-gray-500">Name:</span>
                        <span className="font-medium text-gray-900">{formData.contactName || "—"}</span>
                      </div>
                      <div className="flex justify-between pb-2 border-b border-gray-200">
                        <span className="text-gray-500">SSN/ITIN:</span>
                        <span className="font-medium text-gray-900">
                          {formData.contactSSN ? "••••••" + formData.contactSSN.slice(-4) : "—"}
                        </span>
                      </div>
                      <div className="flex justify-between pb-2 border-b border-gray-200">
                        <span className="text-gray-500">Email:</span>
                        <span className="font-medium text-gray-900">{formData.contactEmail || "—"}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500">Phone:</span>
                        <span className="font-medium text-gray-900">{formData.contactPhone || "—"}</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-5 rounded-md border border-gray-200 mb-6">
                    <h5 className="font-medium text-gray-900 mb-4 flex items-center">
                      <CreditCard className="h-4 w-4 mr-2 text-gray-500" />
                      Selected Service
                    </h5>
                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between pb-2 border-b border-gray-200">
                        <span className="text-gray-500">Service Type:</span>
                        <span className="font-medium text-gray-900">
                          {selectedTier?.name || "Standard Filing"}
                        </span>
                      </div>
                      <div className="flex justify-between pb-2 border-b border-gray-200">
                        <span className="text-gray-500">Processing Time:</span>
                        <span className="font-medium text-gray-900">
                          {selectedTier?.id === 'express' ? 'Same-day processing' : '24-48 hour processing'}
                        </span>
                      </div>
                      <div className="flex justify-between pb-2 border-b border-gray-200">
                        <span className="text-gray-500">Price:</span>
                        <span className="font-medium text-gray-900">
                          ${selectedTier?.price || 249}.00
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-5 rounded-md border border-gray-200 mb-6">
                    <h5 className="font-medium text-gray-900 mb-4 flex items-center">
                      <FileText className="h-4 w-4 mr-2 text-gray-500" />
                      Business Details
                    </h5>
                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between pb-2 border-b border-gray-200">
                        <span className="text-gray-500">Entity Type:</span>
                        <span className="font-medium text-gray-900">{entityType.name}</span>
                      </div>
                      {(entityType.id === 2 || entityType.id === 3) && (
                        <>
                          <div className="flex justify-between pb-2 border-b border-gray-200">
                            <span className="text-gray-500">LLC Members:</span>
                            <span className="font-medium text-gray-900">{formData.llcMembers}</span>
                          </div>
                          <div className="flex justify-between pb-2 border-b border-gray-200">
                            <span className="text-gray-500">Organized in US:</span>
                            <span className="font-medium text-gray-900">
                              {formData.llcOrganizedInUS ? "Yes" : "No"}
                            </span>
                          </div>
                        </>
                      )}
                      {(entityType.id === 4 || entityType.id === 5) && (
                        <div className="flex justify-between pb-2 border-b border-gray-200">
                          <span className="text-gray-500">State of Incorporation:</span>
                          <span className="font-medium text-gray-900">{formData.incorporationState || "—"}</span>
                        </div>
                      )}
                      <div className="flex justify-between pb-2 border-b border-gray-200">
                        <span className="text-gray-500">Reason for Applying:</span>
                        <span className="font-medium text-gray-900">
                          {formData.reasonForApplying
                            ? getReasonOptions().find((o) => o.value === formData.reasonForApplying)?.label
                            : "—"}
                        </span>
                      </div>
                      <div className="flex justify-between pb-2 border-b border-gray-200">
                        <span className="text-gray-500">Business Start Date:</span>
                        <span className="font-medium text-gray-900">{formData.startDate || "—"}</span>
                      </div>
                      <div className="flex justify-between pb-2 border-b border-gray-200">
                        <span className="text-gray-500">Closing Month:</span>
                        <span className="font-medium text-gray-900">{formData.closingMonth}</span>
                      </div>
                      <div className="flex justify-between pb-2 border-b border-gray-200">
                        <span className="text-gray-500">Has Employees:</span>
                        <span className="font-medium text-gray-900">{formData.hasEmployees ? "Yes" : "No"}</span>
                      </div>
                      {formData.hasEmployees && (
                        <>
                          <div className="flex justify-between pb-2 border-b border-gray-200">
                            <span className="text-gray-500">Number of Employees:</span>
                            <span className="font-medium text-gray-900">
                              {Number.parseInt(formData.employeesAgricultural || "0") +
                                Number.parseInt(formData.employeesHousehold || "0") +
                                Number.parseInt(formData.employeesOther || "0")}
                            </span>
                          </div>
                          <div className="flex justify-between pb-2 border-b border-gray-200">
                            <span className="text-gray-500">First Wage Date:</span>
                            <span className="font-medium text-gray-900">{formData.firstWageDate || "—"}</span>
                          </div>
                        </>
                      )}
                      <div className="flex justify-between pb-2 border-b border-gray-200">
                        <span className="text-gray-500">Principal Activity:</span>
                        <span className="font-medium text-gray-900">
                          {formData.principalActivity
                            ? getActivityOptions().find((o) => o.value === formData.principalActivity)?.label
                            : "—"}
                        </span>
                      </div>
                      <div className="flex justify-between pb-2 border-b border-gray-200">
                        <span className="text-gray-500">Products/Services:</span>
                        <span className="font-medium text-gray-900">{formData.principalProductsServices || "—"}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500">Previous EIN:</span>
                        <span className="font-medium text-gray-900">
                          {formData.previousEIN ? formData.previousEINNumber : "No"}
                        </span>
                      </div>
                    </div>
                  </div>



                  <div className="mt-4">
                    <div className="flex items-start">
                      <Checkbox
                        id="agreeToTerms"
                        checked={formData.agreeToTerms}
                        onCheckedChange={(checked) => handleCheckboxChange("agreeToTerms", checked as boolean)}
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
                          . I declare that I have examined this application, and to the best of my knowledge and belief,
                          it is true, correct, and complete.
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

        {/* Footer */}
        {!isSubmitted && (
          <div className="flex justify-between p-6 border-t border-gray-200 bg-gray-50">
            <Button variant="outline" onClick={handleBack} className="flex items-center">
              <ArrowLeft className="h-4 w-4 mr-2" />
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

      {/* Additional Information */}
      {!isSubmitted && (
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-lg font-medium mb-3 text-primary">About {entityType.name}</h3>
            <p className="text-gray-600 text-sm mb-4">{entityType.description}</p>
            <Link
              href={`/entity-types/${entityType.slug}`}
              className="text-primary hover:underline text-sm flex items-center"
            >
              Learn more about {entityType.name}
              <ChevronRight className="h-4 w-4 ml-1" />
            </Link>
          </div>

          <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-lg font-medium mb-3 text-primary">Need Help?</h3>
            <p className="text-gray-600 text-sm mb-4">
              Our support team is available to assist you with your EIN application. Contact us if you have any
              questions.
            </p>
            <Button variant="outline" asChild size="sm" className="w-full">
              <a href="mailto:support@einnationalfiling.com" className="flex items-center justify-center">
                <Mail className="h-4 w-4 mr-2" />
                Email Support
              </a>
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}
