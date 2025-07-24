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

  // Function to get optimized image path
  const getOptimizedSrc = (originalSrc: string) => {
    // If the src already includes '/optimized/', use it as is
    if (originalSrc.includes('/optimized/')) {
      return originalSrc
    }
    
    // If it's a root path and doesn't include optimized, try to get the optimized version
    if (originalSrc.startsWith('/') && !originalSrc.includes('/optimized/')) {
      const imageName = originalSrc.split('/').pop()
      if (imageName && (imageName.includes('.png') || imageName.includes('.jpg') || imageName.includes('.jpeg'))) {
        return `/optimized/${imageName}`
      }
    }
    
    return originalSrc
  }

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

  const optimizedSrc = imageError ? src : getOptimizedSrc(src)
  const webpSrc = getWebPSrc(optimizedSrc)

  return (
    <div className={cn("relative overflow-hidden rounded-lg", className)}>
      {/* Loading placeholder */}
      {!imageLoaded && !imageError && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
          <div className="text-gray-400 text-sm">Loading...</div>
        </div>
      )}
      
      <picture>
        {/* WebP version for modern browsers */}
        <source srcSet={webpSrc} type="image/webp" />
        
        {/* Fallback to optimized or original image */}
        <Image
          src={optimizedSrc}
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
          onError={() => {
            setImageError(true)
            setImageLoaded(true)
          }}
        />
      </picture>
    </div>
  )
}

export { BlogImage }
export default BlogImage 