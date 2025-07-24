import { streamText } from "ai"
import { openai } from "@ai-sdk/openai"
import { openaiClient, chatCompletionConfig } from "@/lib/openai-config"

// Allow streaming responses up to 30 seconds
export const maxDuration = 30

export async function POST(req: Request) {
  try {
    const { messages } = await req.json()

    // Verify API key is configured
    if (!process.env.OPENAI_API_KEY) {
      return new Response(
        JSON.stringify({ 
          error: "OpenAI API key not configured. Please set the OPENAI_API_KEY environment variable." 
        }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      )
    }

    const result = streamText({
      model: openai("gpt-4-turbo"),
      system: chatCompletionConfig.system_message,
      messages,
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
