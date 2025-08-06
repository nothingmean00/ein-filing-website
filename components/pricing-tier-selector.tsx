"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { CheckCircle, Clock, Zap } from "lucide-react"

interface PricingTier {
  id: string
  name: string
  price: number
  description: string
  features: string[]
  popular?: boolean
  icon: React.ReactNode
}

interface PricingTierSelectorProps {
  selectedTier?: string
  onTierSelect: (tier: PricingTier) => void
}

const tiers: PricingTier[] = [
  {
    id: "standard",
    name: "Standard Filing",
    price: 249,
    description: "Perfect for most businesses with no rush",
    features: [
      "24-48 hour processing",
      "IRS form completion",
      "Email delivery of EIN",
      "Customer support",
      "Money-back guarantee"
    ],
    icon: <Clock className="h-6 w-6" />
  },
  {
    id: "express",
    name: "Express Filing",
    price: 329,
    description: "For urgent business needs requiring same-day service",
    features: [
      "Same-day processing",
      "Submit before 1 PM EST",
      "Priority handling",
      "IRS form completion",
      "Email delivery of EIN",
      "Priority customer support",
      "Money-back guarantee"
    ],
    popular: true,
    icon: <Zap className="h-6 w-6" />
  }
]

export default function PricingTierSelector({ selectedTier, onTierSelect }: PricingTierSelectorProps) {
  const [selected, setSelected] = useState<string>(selectedTier || "standard")

  // Auto-select standard tier on component mount if no tier is selected
  useEffect(() => {
    if (!selectedTier) {
      const standardTier = tiers.find(tier => tier.id === "standard")
      if (standardTier) {
        onTierSelect(standardTier)
      }
    }
  }, [selectedTier, onTierSelect])

  const handleTierSelect = (tier: PricingTier) => {
    setSelected(tier.id)
    onTierSelect(tier)
  }

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-bold mb-3">Choose Your Service Level</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Select the processing speed that works best for your business needs. Both options include full IRS filing and support.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {tiers.map((tier) => (
          <div
            key={tier.id}
            className={`relative border-2 rounded-lg p-6 cursor-pointer transition-all duration-200 hover:shadow-lg ${
              selected === tier.id
                ? "border-primary bg-primary/5 shadow-md"
                : "border-gray-200 hover:border-gray-300"
            } ${tier.popular ? "md:scale-105" : ""}`}
            onClick={() => handleTierSelect(tier)}
          >
            {tier.popular && (
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-primary text-white px-4 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </span>
              </div>
            )}

            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center">
                <div className={`p-2 rounded-lg mr-3 ${
                  selected === tier.id ? "bg-primary text-white" : "bg-gray-100 text-gray-600"
                }`}>
                  {tier.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold">{tier.name}</h3>
                  <p className="text-gray-600 text-sm">{tier.description}</p>
                </div>
              </div>
              
              <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                selected === tier.id 
                  ? "border-primary bg-primary" 
                  : "border-gray-300"
              }`}>
                {selected === tier.id && (
                  <CheckCircle className="h-4 w-4 text-white" />
                )}
              </div>
            </div>

            <div className="mb-6">
              <div className="flex items-baseline">
                <span className="text-3xl font-bold">${tier.price}</span>
                <span className="text-gray-600 ml-2">one-time</span>
              </div>
            </div>

            <div className="space-y-3">
              {tier.features.map((feature, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-sm text-gray-700">{feature}</span>
                </div>
              ))}
            </div>

            {selected === tier.id && (
              <div className="mt-6 pt-4 border-t border-gray-200">
                <div className="flex items-center text-primary text-sm font-medium">
                  <CheckCircle className="h-4 w-4 mr-2" />
                  Selected Service
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-8 text-center text-sm text-gray-600">
        <p>
          Both services include the same comprehensive EIN filing with full customer support. 
          The only difference is processing speed.
        </p>
      </div>
    </div>
  )
} 