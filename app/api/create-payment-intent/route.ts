import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'
import { createPaymentRateLimit, rateLimit } from "@/lib/rate-limit"
import { createPaymentIntentSchema, validateRequest, sanitizeString, sanitizeEmail } from "@/lib/validation"

// Lazy initialization to avoid build-time errors
const getStripeClient = () => {
  const secretKey = process.env.STRIPE_SECRET_KEY;
  
  if (!secretKey) {
    throw new Error('STRIPE_SECRET_KEY environment variable is not set');
  }

  return new Stripe(secretKey);
};

// Initialize rate limiter
const paymentRateLimit = createPaymentRateLimit()

export async function POST(req: NextRequest) {
  try {
    // Rate limiting completely disabled for testing - TEMP FIX
    console.log('Payment API called at:', new Date().toISOString());

    // Parse and validate request body
    const body = await req.json()
    const validation = validateRequest(createPaymentIntentSchema, body)
    
    if (!validation.success) {
      return NextResponse.json(
        { error: `Validation failed: ${validation.error}` },
        { status: 400 }
      )
    }

    const { amount, applicationId, entityType, customerEmail, serviceTier } = validation.data

    // Sanitize inputs
    const sanitizedData = {
      applicationId: sanitizeString(applicationId),
      entityType: sanitizeString(entityType),
      customerEmail: customerEmail ? sanitizeEmail(customerEmail) : '',
      serviceTier,
    }

    // Get Stripe client with lazy initialization
    const stripe = getStripeClient();

    // Create a PaymentIntent with the order amount and currency
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount * 100, // Stripe expects cents
      currency: 'usd',
      metadata: {
        applicationId: sanitizedData.applicationId,
        entityType: sanitizedData.entityType,
        customerEmail: sanitizedData.customerEmail,
        serviceTier: sanitizedData.serviceTier || 'standard',
      },
    })

    // Rate limiting disabled - return success without headers
    return NextResponse.json({
      clientSecret: paymentIntent.client_secret,
    })
  } catch (err: any) {
    console.error('Payment intent creation error:', err)
    
    // Don't expose internal error details to client
    const errorMessage = err.message?.includes('Stripe') 
      ? 'Payment processing error. Please try again.'
      : 'An error occurred while processing your request.'
    
    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    )
  }
} 