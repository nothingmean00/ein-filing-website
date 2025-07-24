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
  return (
    <div className={cn("relative overflow-hidden rounded-lg", className)}>
      <Image
        src={src}
        alt={alt}
        fill={fill}
        width={!fill ? width : undefined}
        height={!fill ? height : undefined}
        sizes={sizes}
        priority={priority}
        className="object-cover"
      />
    </div>
  )
}

export { BlogImage }
export default BlogImage 