"use client"
import Link from "next/link"
import { entityTypes } from "@/lib/entity-types"
import { ChevronRight } from "lucide-react"

export default function EntityCards() {
  return (
    <div className="space-y-6">
      <div className="text-center border-b pb-6">
        <h2 className="text-3xl font-bold text-gray-900 mb-3 tracking-tight">
          Start Your Application
        </h2>
        <p className="text-gray-600 text-base max-w-2xl mx-auto">
          Select your business entity type to begin your EIN application
        </p>
      </div>

      <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
        <ul className="divide-y divide-gray-200">
          {entityTypes.map((entity) => (
            <li key={entity.id}>
              <Link
                href={`/apply/${entity.slug}`}
                className="group block p-5 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-colors duration-200"
                role="button"
                aria-label={`Apply for ${entity.name} EIN`}
              >
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors duration-200">
                      {entity.icon}
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-semibold text-gray-900 group-hover:text-primary transition-colors duration-200">
                      {entity.name}
                    </h3>
                    <p className="text-sm text-gray-600 mt-1 line-clamp-2">
                      {entity.description}
                    </p>
                  </div>
                  <div className="flex-shrink-0">
                    <ChevronRight className="h-5 w-5 text-gray-400 group-hover:text-primary transition-colors duration-200" />
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="text-center p-4 bg-gray-50 rounded-lg border border-gray-200">
        <p className="text-sm text-gray-700">
          <strong>Need help choosing?</strong> Each option corresponds to an official IRS entity classification. 
          <Link href="#entity-definitions" className="text-primary hover:text-primary/80 ml-1">
            View detailed definitions below
          </Link>
        </p>
      </div>
    </div>
  )
}
