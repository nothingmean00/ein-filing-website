import {
  User,
  Shield,
  Building,
  Building2,
  Landmark,
  Users,
  Heart,
  FileText,
  Scale,
  MoreHorizontal,
} from "lucide-react"
import type { ReactNode } from "react"

export interface EntityType {
  id: number
  name: string
  slug: string
  icon: ReactNode
  description: string
}

export const entityTypes: EntityType[] = [
  {
    id: 1,
    name: "Sole Proprietorship",
    slug: "sole-proprietorship",
    icon: <User className="h-6 w-6" />,
    description:
      "A business owned and operated by one individual with no legal distinction between the owner and the business.",
  },
  {
    id: 2,
    name: "Single-Member LLC",
    slug: "single-member-llc",
    icon: <Shield className="h-6 w-6" />,
    description:
      "A limited liability company with only one member that provides liability protection with pass-through taxation.",
  },
  {
    id: 3,
    name: "Multi-Member LLC",
    slug: "multi-member-llc",
    icon: <Building className="h-6 w-6" />,
    description:
      "A limited liability company with multiple members that combines liability protection with flexible management.",
  },
  {
    id: 4,
    name: "Corporation",
    slug: "corporation",
    icon: <Building2 className="h-6 w-6" />,
    description:
      "A legal entity separate from its owners that provides the strongest liability protection but faces double taxation.",
  },
  {
    id: 5,
    name: "S Corporation",
    slug: "s-corporation",
    icon: <Landmark className="h-6 w-6" />,
    description:
      "A corporation that elects to pass corporate income, losses, deductions, and credits through to shareholders.",
  },
  {
    id: 6,
    name: "Partnership",
    slug: "partnership",
    icon: <Users className="h-6 w-6" />,
    description: "A business relationship between two or more people who share management and profits.",
  },
  {
    id: 7,
    name: "Non-Profit",
    slug: "non-profit",
    icon: <Heart className="h-6 w-6" />,
    description:
      "An organization that uses its surplus revenues to further its purpose rather than distributing them as profit.",
  },
  {
    id: 8,
    name: "Estate",
    slug: "estate",
    icon: <FileText className="h-6 w-6" />,
    description: "A legal entity created after a person's death to manage and distribute their assets.",
  },
  {
    id: 9,
    name: "Trust",
    slug: "trust",
    icon: <Scale className="h-6 w-6" />,
    description: "A fiduciary arrangement that allows a third party to hold assets on behalf of beneficiaries.",
  },
  {
    id: 10,
    name: "Other",
    slug: "other",
    icon: <MoreHorizontal className="h-6 w-6" />,
    description:
      "Other entity types including governmental organizations, religious organizations, and foreign entities.",
  },
]

export function getEntityTypeById(id: number): EntityType | undefined {
  return entityTypes.find((entity) => entity.id === id)
}

export function getEntityTypeBySlug(slug: string): EntityType | undefined {
  return entityTypes.find((entity) => entity.slug === slug)
}
