import { NextResponse } from "next/server"
import { createGeneralRateLimit, rateLimit } from "@/lib/rate-limit"
import { einApplicationSchema, validateRequest, sanitizeString, sanitizeEmail, sanitizePhone } from "@/lib/validation"

// Initialize rate limiter
const einRateLimit = createGeneralRateLimit()

export async function POST(request: Request) {
  try {
    // Apply rate limiting
    const rateLimitResult = await rateLimit(request, einRateLimit)
    
    if (rateLimitResult && !rateLimitResult.success) {
      return NextResponse.json(
        { 
          success: false,
          error: 'Too many application attempts. Please try again later.',
          retryAfter: Math.ceil((rateLimitResult.reset.getTime() - Date.now()) / 1000)
        },
        { 
          status: 429,
          headers: {
            'X-RateLimit-Limit': rateLimitResult.limit.toString(),
            'X-RateLimit-Remaining': rateLimitResult.remaining.toString(),
            'X-RateLimit-Reset': rateLimitResult.reset.toISOString(),
          }
        }
      )
    }

    // Parse and validate request body
    const body = await request.json()
    const validation = validateRequest(einApplicationSchema, body)
    
    if (!validation.success) {
      return NextResponse.json(
        { 
          success: false, 
          error: `Validation failed: ${validation.error}` 
        },
        { status: 400 }
      )
    }

    const validatedData = validation.data

    // Sanitize sensitive data
    const sanitizedData = {
      ...validatedData,
      businessName: sanitizeString(validatedData.businessName),
      businessAddress: sanitizeString(validatedData.businessAddress),
      businessCity: sanitizeString(validatedData.businessCity),
      contactName: sanitizeString(validatedData.contactName),
      contactEmail: sanitizeEmail(validatedData.contactEmail),
      contactPhone: sanitizePhone(validatedData.contactPhone),
      businessPurpose: sanitizeString(validatedData.businessPurpose),
    }

    // Simulate processing time
    await new Promise((resolve) => setTimeout(resolve, 500))

    // Include rate limit headers in successful response
    const responseHeaders: Record<string, string> = {}
    if (rateLimitResult) {
      responseHeaders['X-RateLimit-Limit'] = rateLimitResult.limit.toString()
      responseHeaders['X-RateLimit-Remaining'] = rateLimitResult.remaining.toString()
      responseHeaders['X-RateLimit-Reset'] = rateLimitResult.reset.toISOString()
    }

    // Return a stub response
    return NextResponse.json(
      {
        success: true,
        message: "Application received and validated",
        applicationId: `EIN-${Date.now()}`,
        entityType: sanitizedData.entityType,
        estimatedProcessingTime: "24-48 hours",
      },
      { headers: responseHeaders }
    )
  } catch (error) {
    console.error("Error processing EIN application:", error)
    return NextResponse.json(
      { 
        success: false, 
        message: "Failed to process application. Please try again." 
      }, 
      { status: 500 }
    )
  }
}
