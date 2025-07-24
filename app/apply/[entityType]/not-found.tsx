import Link from "next/link"
import { Button } from "@/components/ui/button"
import { AlertTriangle } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center">
      <div className="max-w-md w-full text-center p-6">
        <div className="bg-yellow-100 p-3 rounded-full inline-flex mb-6">
          <AlertTriangle className="h-10 w-10 text-yellow-600" />
        </div>
        <h1 className="text-2xl font-bold mb-2">Entity Type Not Found</h1>
        <p className="text-gray-600 mb-6">The entity type you're looking for doesn't exist or may have been moved.</p>
        <Button asChild>
          <Link href="/">Return to Home</Link>
        </Button>
      </div>
    </div>
  )
}
