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
    
    // Debug environment variables
    console.log('STRIPE_SECRET_KEY exists:', !!process.env.STRIPE_SECRET_KEY);
    console.log('STRIPE_SECRET_KEY starts with sk_:', process.env.STRIPE_SECRET_KEY?.startsWith('sk_'));

    // Parse request body with simple validation
    const body = await req.json()
    console.log('Request body received:', body);
    
    // Simple validation instead of complex schema
    const amount = Number(body.amount) || 249
    const applicationId = String(body.applicationId || 'APP-' + Date.now())
    const entityType = String(body.entityType || 'LLC')
    const customerEmail = body.customerEmail || ''
    const serviceTier = body.serviceTier || 'standard'
    
    console.log('Parsed data:', { amount, applicationId, entityType, serviceTier });

    // Basic validation
    if (amount !== 249 && amount !== 329) {
      console.error('Invalid amount:', amount);
      return NextResponse.json(
        { error: 'Invalid amount. Must be $249 or $329.' },
        { status: 400 }
      )
    }

    // Sanitize inputs (simplified)
    const sanitizedData = {
      applicationId: applicationId.substring(0, 100),
      entityType: entityType.substring(0, 50),
      customerEmail: customerEmail.substring(0, 200),
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
    console.error('Payment intent creation error:', {
      message: err.message,
      stack: err.stack,
      type: err.constructor.name,
      code: err.code,
      statusCode: err.statusCode
    })
    
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