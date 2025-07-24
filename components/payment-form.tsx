"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { AlertCircle, CheckCircle, CreditCard } from "lucide-react"
import { loadStripe } from '@stripe/stripe-js'
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js'

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!)

interface PaymentFormProps {
  applicationId: string
  entityType?: string
}

export default function PaymentForm({ applicationId, entityType }: PaymentFormProps) {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    cardName: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    billingAddress: "",
    billingCity: "",
    billingState: "",
    billingZip: "",
  })
  const [errors, setErrors] = useState<Record<string, string>>({})

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target

    // Format card number with spaces
    if (name === "cardNumber") {
      const formattedValue = value
        .replace(/\s/g, "")
        .replace(/(.{4})/g, "$1 ")
        .trim()
        .slice(0, 19)

      setFormData({
        ...formData,
        [name]: formattedValue,
      })
    }
    // Format expiry date with slash
    else if (name === "expiryDate") {
      const cleaned = value.replace(/\D/g, "")
      let formattedValue = cleaned

      if (cleaned.length > 2) {
        formattedValue = `${cleaned.slice(0, 2)}/${cleaned.slice(2, 4)}`
      }

      setFormData({
        ...formData,
        [name]: formattedValue,
      })
    }
    // Handle other fields normally
    else {
      setFormData({
        ...formData,
        [name]: value,
      })
    }

    // Clear error when user types
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: "",
      })
    }
  }

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.cardName.trim()) {
      newErrors.cardName = "Name on card is required"
    }

    if (!formData.cardNumber.trim()) {
      newErrors.cardNumber = "Card number is required"
    } else if (!/^\d{4}\s\d{4}\s\d{4}\s\d{4}$/.test(formData.cardNumber)) {
      newErrors.cardNumber = "Enter a valid 16-digit card number"
    }

    if (!formData.expiryDate.trim()) {
      newErrors.expiryDate = "Expiry date is required"
    } else if (!/^\d{2}\/\d{2}$/.test(formData.expiryDate)) {
      newErrors.expiryDate = "Enter a valid expiry date (MM/YY)"
    } else {
      // Check if card is expired
      const [month, year] = formData.expiryDate.split("/")
      const expiryDate = new Date(2000 + Number.parseInt(year), Number.parseInt(month) - 1)
      const currentDate = new Date()

      if (expiryDate < currentDate) {
        newErrors.expiryDate = "Card has expired"
      }
    }

    if (!formData.cvv.trim()) {
      newErrors.cvv = "CVV is required"
    } else if (!/^\d{3,4}$/.test(formData.cvv)) {
      newErrors.cvv = "Enter a valid CVV (3 or 4 digits)"
    }

    if (!formData.billingAddress.trim()) {
      newErrors.billingAddress = "Billing address is required"
    }

    if (!formData.billingCity.trim()) {
      newErrors.billingCity = "City is required"
    }

    if (!formData.billingState.trim()) {
      newErrors.billingState = "State is required"
    }

    if (!formData.billingZip.trim()) {
      newErrors.billingZip = "ZIP code is required"
    } else if (!/^\d{5}(-\d{4})?$/.test(formData.billingZip)) {
      newErrors.billingZip = "Enter a valid ZIP code"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (validateForm()) {
      setIsSubmitting(true)

      // Simulate payment processing
      setTimeout(() => {
        setIsSubmitting(false)
        // Redirect to confirmation page
        router.push(`/confirmation?applicationId=${applicationId}&entityType=${entityType || ""}`)
      }, 2000)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-4">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-lg font-medium">Card Information</h3>
          <div className="flex space-x-2">
            <img src="/visa.png" alt="Visa" className="h-6" />
            <img src="/mastercard.png" alt="Mastercard" className="h-6" />
            <img src="/amex.png" alt="American Express" className="h-6" />
            <img src="/discover.png" alt="Discover" className="h-6" />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="cardName" className="flex items-center">
            Name on Card
            <span className="text-red-500 ml-1">*</span>
          </Label>
          <Input
            id="cardName"
            name="cardName"
            value={formData.cardName}
            onChange={handleInputChange}
            placeholder="Enter name as it appears on card"
            className={errors.cardName ? "border-red-500" : ""}
          />
          {errors.cardName && (
            <p className="text-red-500 text-xs mt-1 flex items-center">
              <AlertCircle className="h-3.5 w-3.5 mr-1" />
              {errors.cardName}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="cardNumber" className="flex items-center">
            Card Number
            <span className="text-red-500 ml-1">*</span>
          </Label>
          <div className="relative">
            <Input
              id="cardNumber"
              name="cardNumber"
              value={formData.cardNumber}
              onChange={handleInputChange}
              placeholder="XXXX XXXX XXXX XXXX"
              className={`pl-10 ${errors.cardNumber ? "border-red-500" : ""}`}
              maxLength={19}
            />
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
              <CreditCard className="h-4 w-4" />
            </div>
          </div>
          {errors.cardNumber && (
            <p className="text-red-500 text-xs mt-1 flex items-center">
              <AlertCircle className="h-3.5 w-3.5 mr-1" />
              {errors.cardNumber}
            </p>
          )}
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="expiryDate" className="flex items-center">
              Expiry Date
              <span className="text-red-500 ml-1">*</span>
            </Label>
            <Input
              id="expiryDate"
              name="expiryDate"
              value={formData.expiryDate}
              onChange={handleInputChange}
              placeholder="MM/YY"
              className={errors.expiryDate ? "border-red-500" : ""}
              maxLength={5}
            />
            {errors.expiryDate && (
              <p className="text-red-500 text-xs mt-1 flex items-center">
                <AlertCircle className="h-3.5 w-3.5 mr-1" />
                {errors.expiryDate}
              </p>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="cvv" className="flex items-center">
              CVV
              <span className="text-red-500 ml-1">*</span>
            </Label>
            <Input
              id="cvv"
              name="cvv"
              value={formData.cvv}
              onChange={handleInputChange}
              placeholder="XXX"
              className={errors.cvv ? "border-red-500" : ""}
              maxLength={4}
              type="password"
            />
            {errors.cvv && (
              <p className="text-red-500 text-xs mt-1 flex items-center">
                <AlertCircle className="h-3.5 w-3.5 mr-1" />
                {errors.cvv}
              </p>
            )}
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200 pt-6 mt-6">
        <h3 className="text-lg font-medium mb-4">Billing Address</h3>

        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="billingAddress" className="flex items-center">
              Street Address
              <span className="text-red-500 ml-1">*</span>
            </Label>
            <Input
              id="billingAddress"
              name="billingAddress"
              value={formData.billingAddress}
              onChange={handleInputChange}
              placeholder="Enter billing address"
              className={errors.billingAddress ? "border-red-500" : ""}
            />
            {errors.billingAddress && (
              <p className="text-red-500 text-xs mt-1 flex items-center">
                <AlertCircle className="h-3.5 w-3.5 mr-1" />
                {errors.billingAddress}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="billingCity" className="flex items-center">
              City
              <span className="text-red-500 ml-1">*</span>
            </Label>
            <Input
              id="billingCity"
              name="billingCity"
              value={formData.billingCity}
              onChange={handleInputChange}
              placeholder="Enter city"
              className={errors.billingCity ? "border-red-500" : ""}
            />
            {errors.billingCity && (
              <p className="text-red-500 text-xs mt-1 flex items-center">
                <AlertCircle className="h-3.5 w-3.5 mr-1" />
                {errors.billingCity}
              </p>
            )}
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="billingState" className="flex items-center">
                State
                <span className="text-red-500 ml-1">*</span>
              </Label>
              <Input
                id="billingState"
                name="billingState"
                value={formData.billingState}
                onChange={handleInputChange}
                placeholder="Enter state"
                className={errors.billingState ? "border-red-500" : ""}
              />
              {errors.billingState && (
                <p className="text-red-500 text-xs mt-1 flex items-center">
                  <AlertCircle className="h-3.5 w-3.5 mr-1" />
                  {errors.billingState}
                </p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="billingZip" className="flex items-center">
                ZIP Code
                <span className="text-red-500 ml-1">*</span>
              </Label>
              <Input
                id="billingZip"
                name="billingZip"
                value={formData.billingZip}
                onChange={handleInputChange}
                placeholder="Enter ZIP code"
                className={errors.billingZip ? "border-red-500" : ""}
              />
              {errors.billingZip && (
                <p className="text-red-500 text-xs mt-1 flex items-center">
                  <AlertCircle className="h-3.5 w-3.5 mr-1" />
                  {errors.billingZip}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200 pt-6 mt-6">
        <div className="bg-gray-50 p-4 rounded-md mb-6">
          <div className="flex items-start">
            <div className="mr-3 mt-1">
              <CheckCircle className="h-5 w-5 text-primary" />
            </div>
            <div>
              <p className="text-sm text-gray-700">
                By clicking "Complete Payment", you agree to our{" "}
                <a href="/terms" className="text-primary hover:underline">
                  Terms of Service
                </a>{" "}
                and{" "}
                <a href="/privacy" className="text-primary hover:underline">
                  Privacy Policy
                </a>
                . Your card will be charged $249.00.
              </p>
            </div>
          </div>
        </div>

        <Button type="submit" className="w-full" disabled={isSubmitting}>
          {isSubmitting ? (
            <>
              <svg
                className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
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
              Processing Payment...
            </>
          ) : (
            <>Complete Payment - $249.00</>
          )}
        </Button>
      </div>
    </form>
  )
}
