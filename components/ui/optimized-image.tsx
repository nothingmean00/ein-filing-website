"use client"

import Image from 'next/image'
import { useState } from 'react'

interface OptimizedImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  fill?: boolean
  sizes?: string
  className?: string
  priority?: boolean
  quality?: number
  placeholder?: "blur" | "empty"
  blurDataURL?: string
}

export function OptimizedImage({
  src,
  alt,
  width,
  height,
  fill,
  sizes,
  className,
  priority = false,
  quality = 85,
  placeholder,
  blurDataURL,
  ...props
}: OptimizedImageProps) {
  const [imageError, setImageError] = useState(false)
  
  // Try to get optimized versions
  const getOptimizedSrc = (originalSrc: string) => {
    if (originalSrc.startsWith('/') && !originalSrc.includes('/optimized/')) {
      // Check if this is a large image that should be optimized
      const imageName = originalSrc.split('/').pop()
      if (imageName && (imageName.includes('.png') || imageName.includes('.jpg') || imageName.includes('.jpeg'))) {
        return `/optimized/${imageName}`
      }
    }
    return originalSrc
  }

  const getWebPSrc = (originalSrc: string) => {
    if (originalSrc.startsWith('/') && !originalSrc.includes('/optimized/')) {
      const imageName = originalSrc.split('/').pop()
      if (imageName && (imageName.includes('.png') || imageName.includes('.jpg') || imageName.includes('.jpeg'))) {
        const webpName = imageName.replace(/\.(png|jpg|jpeg)$/i, '.webp')
        return `/optimized/webp/${webpName}`
      }
    }
    return originalSrc
  }

  const optimizedSrc = imageError ? src : getOptimizedSrc(src)
  const webpSrc = getWebPSrc(src)

  return (
    <picture>
      {/* WebP version for modern browsers */}
      <source srcSet={webpSrc} type="image/webp" />
      
      {/* Fallback to optimized or original image */}
      <Image
        src={optimizedSrc}
        alt={alt}
        width={width}
        height={height}
        fill={fill}
        sizes={sizes}
        className={className}
        priority={priority}
        quality={quality}
        placeholder={placeholder}
        blurDataURL={blurDataURL}
        onError={() => setImageError(true)}
        {...props}
      />
    </picture>
  )
} 