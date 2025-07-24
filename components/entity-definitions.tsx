"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

interface EntityDefinition {
  id: number
  name: string
  definition: string
}

interface EntityDefinitionsProps {
  entityDefinitions: EntityDefinition[]
}

export default function EntityDefinitions({ entityDefinitions }: EntityDefinitionsProps) {
  const [openItem, setOpenItem] = useState<number | null>(null)

  const toggleItem = (id: number) => {
    setOpenItem(openItem === id ? null : id)
  }

  return (
    <div className="space-y-1">
      {entityDefinitions.map((entity) => (
        <div key={entity.id} className="border border-gray-200 rounded-md overflow-hidden">
          <button
            className={`w-full flex justify-between items-center p-3 text-left transition-colors ${
              openItem === entity.id ? "bg-secondary text-primary font-medium" : "bg-gray-50 hover:bg-gray-100"
            }`}
            onClick={() => toggleItem(entity.id)}
            aria-expanded={openItem === entity.id}
            aria-controls={`definition-${entity.id}`}
          >
            <span className={openItem === entity.id ? "font-medium" : ""}>{entity.name}</span>
            <ChevronDown
              className={`h-5 w-5 text-gray-500 transition-transform ${
                openItem === entity.id ? "transform rotate-180 text-primary" : ""
              }`}
            />
          </button>
          <div
            id={`definition-${entity.id}`}
            className={`transition-all duration-200 ${
              openItem === entity.id ? "max-h-[800px]" : "max-h-0 overflow-hidden p-0"
            }`}
          >
            <div className="p-4 bg-white border-t border-gray-200">
              <p className="text-gray-700 text-sm leading-relaxed">{entity.definition}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
