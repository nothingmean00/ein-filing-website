import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'

export async function POST(req: NextRequest) {
  try {
    console.log('Test payment API called')
    
    // Check if Stripe key exists
    if (!process.env.STRIPE_SECRET_KEY) {
      console.error('STRIPE_SECRET_KEY is missing')
      return NextResponse.json({
        error: 'STRIPE_SECRET_KEY environment variable is not set'
      }, { status: 500 })
    }
    
    console.log('STRIPE_SECRET_KEY exists, length:', process.env.STRIPE_SECRET_KEY.length)
    
    // Initialize Stripe
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)
    console.log('Stripe client initialized')
    
    // Parse request body
    const body = await req.json()
    console.log('Request body:', body)
    
    // Simple validation
    const { amount = 249 } = body
    
    if (amount !== 249 && amount !== 329) {
      return NextResponse.json({
        error: 'Invalid amount. Must be 249 or 329'
      }, { status: 400 })
    }
    
    console.log('Creating payment intent for amount:', amount)
    
    // Create PaymentIntent
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount * 100, // Convert to cents
      currency: 'usd',
      metadata: {
        applicationId: 'TEST-123',
        entityType: 'TEST',
        serviceTier: amount === 329 ? 'express' : 'standard'
      }
    })
    
    console.log('Payment intent created:', paymentIntent.id)
    
    return NextResponse.json({
      clientSecret: paymentIntent.client_secret,
      paymentIntentId: paymentIntent.id
    })
    
  } catch (error: any) {
    console.error('Test payment error:', {
      message: error.message,
      type: error.constructor.name,
      code: error.code,
      statusCode: error.statusCode,
      stack: error.stack
    })
    
    return NextResponse.json({
      error: error.message,
      type: error.constructor.name,
      code: error.code
    }, { status: 500 })
  }
}