import Link from "next/link"
import { ChevronRight } from "lucide-react"

interface BreadcrumbItem {
  label: string
  href: string
  current?: boolean
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[]
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className="bg-gray-50 py-2 border-b border-gray-200">
      <div className="irs-container">
        <ol className="flex items-center text-sm">
          {items.map((item, index) => (
            <li key={`${index}-${item.label}`} className="flex items-center">
              {index > 0 && <ChevronRight className="h-4 w-4 mx-2 text-gray-400" />}
              {item.current ? (
                <span aria-current="page" className="font-medium text-primary">
                  {item.label}
                </span>
              ) : (
                <Link href={item.href} className="text-gray-600 hover:text-primary hover:underline">
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  )
}
