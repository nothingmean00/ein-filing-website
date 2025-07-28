import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'

// Lazy initialization to avoid build-time errors
const getStripeClient = () => {
  const secretKey = process.env.STRIPE_SECRET_KEY;
  
  if (!secretKey) {
    throw new Error('STRIPE_SECRET_KEY environment variable is not set');
  }

  return new Stripe(secretKey, {
    apiVersion: '2025-06-30.basil',
  });
};

export async function POST(req: NextRequest) {
  try {
    const { amount, applicationId, entityType, customerEmail, serviceTier } = await req.json()

    // Get Stripe client with lazy initialization
    const stripe = getStripeClient();

    // Create a PaymentIntent with the order amount and currency
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount * 100, // Stripe expects cents
      currency: 'usd',
      metadata: {
        applicationId,
        entityType,
        customerEmail: customerEmail || '',
        serviceTier: serviceTier || 'standard',
      },
    })

    return NextResponse.json({
      clientSecret: paymentIntent.client_secret,
    })
  } catch (err: any) {
    return NextResponse.json(
      { error: err.message },
      { status: 500 }
    )
  }
} 