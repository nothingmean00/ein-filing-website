import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest) {
  try {
    // Check environment variables
    const stripeKeyExists = !!process.env.STRIPE_SECRET_KEY
    const stripeKeyFormat = process.env.STRIPE_SECRET_KEY?.startsWith('sk_') || false
    const stripeKeyLength = process.env.STRIPE_SECRET_KEY?.length || 0
    
    // Check other environment variables
    const openaiKeyExists = !!process.env.OPENAI_API_KEY
    const resendKeyExists = !!process.env.RESEND_API_KEY
    const webhookSecretExists = !!process.env.STRIPE_WEBHOOK_SECRET
    
    return NextResponse.json({
      environment: {
        STRIPE_SECRET_KEY: {
          exists: stripeKeyExists,
          validFormat: stripeKeyFormat,
          length: stripeKeyLength,
          preview: process.env.STRIPE_SECRET_KEY?.substring(0, 8) + '...'
        },
        OPENAI_API_KEY: {
          exists: openaiKeyExists
        },
        RESEND_API_KEY: {
          exists: resendKeyExists
        },
        STRIPE_WEBHOOK_SECRET: {
          exists: webhookSecretExists
        }
      },
      timestamp: new Date().toISOString()
    })
  } catch (error: any) {
    return NextResponse.json({
      error: error.message,
      stack: error.stack
    }, { status: 500 })
  }
}