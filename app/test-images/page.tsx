import { BlogImage } from "@/components/ui/blog-image"
import Image from "next/image"

export default function TestImages() {
  const testImages = [
    {
      name: "Direct Next.js Image (optimized path)",
      component: (
        <Image
          src="/optimized/Corporation EIN Requirements C-Corp vs S-Corp Tax ID Needs.png"
          alt="Test image"
          width={400}
          height={300}
          className="border"
        />
      )
    },
    {
      name: "BlogImage Component (optimized path)",
      component: (
        <BlogImage
          src="/optimized/Corporation EIN Requirements C-Corp vs S-Corp Tax ID Needs.png"
          alt="Test image"
          width={400}
          height={300}
          fill={false}
        />
      )
    },
    {
      name: "Direct Next.js Image (root path - should auto-optimize)",
      component: (
        <Image
          src="/Corporation EIN Requirements C-Corp vs S-Corp Tax ID Needs.png"
          alt="Test image"
          width={400}
          height={300}
          className="border"
        />
      )
    },
    {
      name: "BlogImage Component (root path - should auto-optimize)",
      component: (
        <BlogImage
          src="/Corporation EIN Requirements C-Corp vs S-Corp Tax ID Needs.png"
          alt="Test image"
          width={400}
          height={300}
          fill={false}
        />
      )
    }
  ]

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-2xl font-bold mb-8">Image Loading Test</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {testImages.map((test, index) => (
          <div key={index} className="border p-4 rounded">
            <h2 className="font-semibold mb-4">{test.name}</h2>
            <div className="w-[400px] h-[300px] bg-gray-100 flex items-center justify-center">
              {test.component}
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-8 p-4 bg-gray-100 rounded">
        <h2 className="font-semibold mb-2">Debug Info:</h2>
        <p>Check browser console for any image loading errors</p>
        <p>Check Network tab to see which image requests are made</p>
      </div>
    </div>
  )
} 