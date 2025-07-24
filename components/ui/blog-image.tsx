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

  // Use the src as-is since blog data already has correct paths
  const imageSrc = src
  const webpSrc = getWebPSrc(imageSrc)
  
  // Debug logging
  console.log('BlogImage rendering:', { src, imageSrc, webpSrc, imageError, imageLoaded })
  
  // Also try URL encoding the path for spaces
  const encodedSrc = encodeURI(imageSrc)

  return (
    <div className={cn("relative overflow-hidden rounded-lg", className)}>
      {/* Loading placeholder */}
      {!imageLoaded && !imageError && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
          <div className="text-gray-400 text-sm">Loading...</div>
        </div>
      )}
      
      {/* Use regular Image component - Next.js handles optimization */}
      <Image
        src={encodedSrc}
        alt={alt}
        fill={fill}
        width={!fill ? width : undefined}
        height={!fill ? height : undefined}
        sizes={sizes}
        priority={priority}
        className={cn("object-cover transition-opacity duration-300", {
          "opacity-0": !imageLoaded && !imageError,
          "opacity-100": imageLoaded || imageError
        })}
        quality={85}
        onLoad={() => setImageLoaded(true)}
                 onError={(e) => {
           console.error('Image failed to load:', imageSrc, 'encoded:', encodedSrc, e)
          setImageError(true)
          setImageLoaded(true)
        }}
      />
    </div>
  )
}

export { BlogImage }
export default BlogImage 