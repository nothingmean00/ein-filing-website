"use client"

import Image from "next/image"
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
  // The component should return the Image directly, not wrap it in a div.
  // The passed `className` is merged with the base `object-cover`.
  return (
    <Image
      src={src}
      alt={alt}
      fill={fill}
      width={!fill ? width : undefined}
      height={!fill ? height : undefined}
      sizes={sizes}
      priority={priority}
      className={cn("object-cover", className)}
      quality={85}
      // Add a simple error handler in case an image is missing
      onError={(e) => {
        e.currentTarget.src = "/placeholder.svg"
      }}
    />
  )
}

export { BlogImage }
export default BlogImage 