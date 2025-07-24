"use client"

import Image from "next/image"
import { useState } from "react"
import { cn } from "@/lib/utils"

interface BlogImageProps {
  src: string
  alt: string
  fill?: boolean
  sizes?: string
  className?: string
  priority?: boolean
  width?: number
  height?: number
}

const BlogImage = ({
  src,
  alt,
  fill = true,
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
  className = "",
  priority = false,
  width,
  height,
}: BlogImageProps) => {
  const [imageError, setImageError] = useState(false)
  const [imageLoaded, setImageLoaded] = useState(false)

  // Function to get WebP version
  const getWebPSrc = (originalSrc: string) => {
    if (originalSrc.includes('/optimized/') && !originalSrc.includes('/webp/')) {
      const imageName = originalSrc.split('/').pop()
      if (imageName && (imageName.includes('.png') || imageName.includes('.jpg') || imageName.includes('.jpeg'))) {
        const webpName = imageName.replace(/\.(png|jpg|jpeg)$/i, '.webp')
        return `/optimized/webp/${webpName}`
      }
    }
    return originalSrc
  }

  // Simplify - just use the src directly
  console.log('BlogImage rendering:', { src, imageError, imageLoaded })

  return (
    <div className={cn("relative overflow-hidden rounded-lg", className)}>
      {/* Use regular Image component - Next.js handles optimization */}
      <Image
        src={src}
        alt={alt}
        fill={fill}
        width={!fill ? width : undefined}
        height={!fill ? height : undefined}
        sizes={sizes}
        priority={priority}
                 className="object-cover"
        quality={85}
        onLoad={() => setImageLoaded(true)}
         onError={(e) => {
           console.error('Image failed to load:', src, e)
          setImageError(true)
          setImageLoaded(true)
        }}
      />
    </div>
  )
}

export { BlogImage }
export default BlogImage 