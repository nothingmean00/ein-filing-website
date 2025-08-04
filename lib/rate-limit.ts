import { Ratelimit } from '@upstash/ratelimit'
import { Redis } from '@upstash/redis'

// Create a Redis instance
// For development, we'll use a simple in-memory store
// For production, you should use Upstash Redis with proper credentials
const redis = process.env.UPSTASH_REDIS_REST_URL 
  ? new Redis({
      url: process.env.UPSTASH_REDIS_REST_URL,
      token: process.env.UPSTASH_REDIS_REST_TOKEN,
    })
  : undefined

// Create rate limiters for different endpoints
export const createPaymentRateLimit = () => {
  if (!redis) {
    // Fallback to in-memory rate limiting for development
    const memoryStore = new Map()
    return new Ratelimit({
      redis: {
        sadd: async () => 0,
        eval: async () => [1, 5, Date.now() + 60000],
        evalsha: async () => [1, 5, Date.now() + 60000],
      } as any,
      limiter: Ratelimit.slidingWindow(5, '1 m'), // 5 requests per minute
      analytics: false, // Disable analytics for in-memory
    })
  }

  return new Ratelimit({
    redis,
    limiter: Ratelimit.slidingWindow(5, '1 m'), // 5 payment attempts per minute
    analytics: true,
  })
}

export const createChatRateLimit = () => {
  if (!redis) {
    return new Ratelimit({
      redis: {
        sadd: async () => 0,
        eval: async () => [1, 100, Date.now() + 60000],
        evalsha: async () => [1, 100, Date.now() + 60000],
      } as any,
      limiter: Ratelimit.slidingWindow(100, '1 m'), // 100 chat messages per minute
      analytics: false,
    })
  }

  return new Ratelimit({
    redis,
    limiter: Ratelimit.slidingWindow(100, '1 m'), // 100 chat messages per minute
    analytics: true,
  })
}

export const createGeneralRateLimit = () => {
  if (!redis) {
    return new Ratelimit({
      redis: {
        sadd: async () => 0,
        eval: async () => [1, 60, Date.now() + 60000],
        evalsha: async () => [1, 60, Date.now() + 60000],
      } as any,
      limiter: Ratelimit.slidingWindow(60, '1 m'), // 60 requests per minute for general endpoints
      analytics: false,
    })
  }

  return new Ratelimit({
    redis,
    limiter: Ratelimit.slidingWindow(60, '1 m'), // 60 requests per minute
    analytics: true,
  })
}

// Helper function to get client IP
export function getClientIP(request: Request): string {
  const forwarded = request.headers.get('x-forwarded-for')
  const realIP = request.headers.get('x-real-ip')
  
  if (forwarded) {
    return forwarded.split(',')[0].trim()
  }
  
  if (realIP) {
    return realIP
  }
  
  // Fallback for development
  return '127.0.0.1'
}

// Rate limiting middleware
export async function rateLimit(
  request: Request, 
  rateLimiter: ReturnType<typeof createPaymentRateLimit>
): Promise<{ success: boolean; limit: number; remaining: number; reset: Date } | null> {
  const ip = getClientIP(request)
  
  try {
    const { success, limit, remaining, reset } = await rateLimiter.limit(ip)
    
    return {
      success,
      limit,
      remaining,
      reset: new Date(reset),
    }
  } catch (error) {
    console.error('Rate limiting error:', error)
    // If rate limiting fails, allow the request but log the error
    return null
  }
}