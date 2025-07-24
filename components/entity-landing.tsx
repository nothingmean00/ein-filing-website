import Link from "next/link"
import { Button } from "@/components/ui/button"
import type { EntityType } from "@/lib/entity-types"
import { CheckCircle } from "lucide-react"

interface EntityLandingProps {
  entityType: EntityType
}

export default function EntityLanding({ entityType }: EntityLandingProps) {
  const benefits = [
    "Secure online application process",
    "Fast processing - receive your EIN in as little as 24 hours",
    "Expert guidance specific to your entity type",
    "Avoid common application errors",
    "Digital delivery of your EIN confirmation letter",
    "Dedicated customer support",
  ]

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-2/3">
          <h1 className="text-2xl font-bold mb-4 text-primary">{entityType.name} EIN Application</h1>
          <p className="text-gray-700 mb-4">
            Apply for a Federal Employer Identification Number (EIN) for your {entityType.name}. Our streamlined
            application process makes it easy to get your business tax ID quickly and securely.
          </p>

          <h2 className="text-lg font-semibold mb-2 text-gray-800">Benefits of Using Our Service</h2>
          <ul className="space-y-2 mb-6">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex items-start">
                <CheckCircle className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
                <span className="text-gray-700">{benefit}</span>
              </li>
            ))}
          </ul>

          <Button size="lg" className="w-full md:w-auto" asChild>
            <Link href={`/apply/${entityType.slug}`}>Start Your {entityType.name} EIN Application</Link>
          </Button>
        </div>

        <div className="md:w-1/3">
          <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
            <div className="flex justify-center mb-4">
              <div className="bg-primary/10 p-3 rounded-full">{entityType.icon}</div>
            </div>
            <h3 className="text-center font-semibold mb-2">About {entityType.name} EINs</h3>
            <p className="text-sm text-gray-600 mb-4">{entityType.description}</p>
            <div className="text-center">
              <Link href="/#entity-definitions" className="text-primary hover:underline text-sm">
                Learn more about {entityType.name}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
