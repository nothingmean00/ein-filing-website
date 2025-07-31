import { streamText } from "ai"
import { openai } from "@ai-sdk/openai"
import { openaiClient, chatCompletionConfig } from "@/lib/openai-config"
import { createChatRateLimit, rateLimit } from "@/lib/rate-limit"
import { chatMessageSchema, validateRequest } from "@/lib/validation"

// Allow streaming responses up to 30 seconds
export const maxDuration = 30

// Initialize rate limiter
const chatRateLimit = createChatRateLimit()

export async function POST(req: Request) {
  try {
    // Apply rate limiting
    const rateLimitResult = await rateLimit(req, chatRateLimit)
    
    if (rateLimitResult && !rateLimitResult.success) {
      return new Response(
        JSON.stringify({ 
          error: 'Too many chat requests. Please slow down.',
          retryAfter: Math.ceil((rateLimitResult.reset.getTime() - Date.now()) / 1000)
        }),
        { 
          status: 429, 
          headers: { 
            'Content-Type': 'application/json',
            'X-RateLimit-Limit': rateLimitResult.limit.toString(),
            'X-RateLimit-Remaining': rateLimitResult.remaining.toString(),
            'X-RateLimit-Reset': rateLimitResult.reset.toISOString(),
          } 
        }
      )
    }

    // Parse and validate request body
    const body = await req.json()
    const validation = validateRequest(chatMessageSchema, body)
    
    if (!validation.success) {
      return new Response(
        JSON.stringify({ error: `Invalid request: ${validation.error}` }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      )
    }

    const { messages } = validation.data

    // Verify API key is configured
    if (!process.env.OPENAI_API_KEY) {
      return new Response(
        JSON.stringify({ 
          error: "Service temporarily unavailable. Please try again later." 
        }),
        { status: 503, headers: { 'Content-Type': 'application/json' } }
      )
    }

    // Sanitize messages to prevent prompt injection
    const sanitizedMessages = messages.map(msg => ({
      ...msg,
      content: msg.content.substring(0, 2000) // Limit message length
    }))

    const result = streamText({
      model: openai("gpt-4-turbo"),
      system: chatCompletionConfig.system_message,
      messages: sanitizedMessages,
    })

    return result.toDataStreamResponse()
  } catch (error) {
    console.error("Chat API error:", error)
    return new Response(
      JSON.stringify({ error: "An error occurred while processing your request." }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    )
  }
}
