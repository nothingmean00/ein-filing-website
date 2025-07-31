import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'
import { Resend } from 'resend'

// Initialize clients with lazy loading
const getStripeClient = () => {
  const secretKey = process.env.STRIPE_SECRET_KEY;
  if (!secretKey) {
    throw new Error('STRIPE_SECRET_KEY environment variable is not set');
  }
  return new Stripe(secretKey);
};

const getResendClient = () => {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    throw new Error('RESEND_API_KEY environment variable is not set');
  }
  return new Resend(apiKey);
};

const FROM_EMAIL = 'notifications@einnationalfiling.com'
const TO_EMAIL = 'applications@einnationalfiling.com'

export async function POST(req: NextRequest) {
  try {
    const body = await req.text()
    const signature = req.headers.get('stripe-signature')
    
    if (!signature) {
      console.error('No Stripe signature found')
      return NextResponse.json({ error: 'No signature' }, { status: 400 })
    }

    const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET
    if (!webhookSecret) {
      console.error('STRIPE_WEBHOOK_SECRET not configured')
      return NextResponse.json({ error: 'Webhook secret not configured' }, { status: 500 })
    }

    let event: Stripe.Event

    try {
      const stripe = getStripeClient()
      event = stripe.webhooks.constructEvent(body, signature, webhookSecret)
    } catch (err: any) {
      console.error('Webhook signature verification failed:', err.message)
      return NextResponse.json({ error: 'Invalid signature' }, { status: 400 })
    }

    // Handle the payment_intent.succeeded event
    if (event.type === 'payment_intent.succeeded') {
      const paymentIntent = event.data.object as Stripe.PaymentIntent
      
      try {
        await handlePaymentSuccess(paymentIntent)
        console.log('Payment success email sent for:', paymentIntent.id)
      } catch (error) {
        console.error('Failed to send payment success email:', error)
        // Don't return error to Stripe - we still want to acknowledge receipt
      }
    }

    // Handle payment failures
    if (event.type === 'payment_intent.payment_failed') {
      const paymentIntent = event.data.object as Stripe.PaymentIntent
      
      try {
        await handlePaymentFailure(paymentIntent)
        console.log('Payment failure email sent for:', paymentIntent.id)
      } catch (error) {
        console.error('Failed to send payment failure email:', error)
      }
    }

    return NextResponse.json({ received: true })
  } catch (error) {
    console.error('Webhook error:', error)
    return NextResponse.json({ error: 'Webhook processing failed' }, { status: 500 })
  }
}

async function handlePaymentSuccess(paymentIntent: Stripe.PaymentIntent) {
  const metadata = paymentIntent.metadata
  const amount = (paymentIntent.amount / 100).toFixed(2)
  const serviceTier = metadata.serviceTier || 'standard'
  const serviceName = serviceTier === 'express' ? 'Express EIN Filing Service' : 'Standard EIN Filing Service'
  const processingTime = serviceTier === 'express' ? 'Same-day processing' : '24-48 hour processing'

  // Email to business owner (you) about the payment
  const businessEmailHtml = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <div style="background-color: #22c55e; color: white; padding: 20px; text-align: center;">
        <h1 style="margin: 0; font-size: 24px;">🚨 PAID - Process EIN</h1>
        <p style="margin: 10px 0 0 0; font-size: 16px;">Action Required: File EIN Application</p>
      </div>
      
      <div style="padding: 30px; background-color: #f9fafb;">
        <div style="background-color: #dcfce7; border: 1px solid #bbf7d0; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
          <h2 style="color: #166534; margin: 0 0 10px 0;">Payment Confirmed - File EIN Immediately</h2>
          <p style="margin: 0; color: #166534; font-weight: 600;">
            Customer has paid ${amount} for ${serviceName.toLowerCase()}. Please process their EIN application now.
          </p>
        </div>

        <div style="background-color: white; padding: 20px; border-radius: 8px; border: 1px solid #e5e7eb;">
          <h3 style="margin: 0 0 15px 0; color: #374151;">Application Details</h3>
          <table style="width: 100%; border-collapse: collapse;">
            <tr style="border-bottom: 1px solid #e5e7eb;">
              <td style="padding: 8px 0; color: #6b7280; font-weight: 500;">Application ID:</td>
              <td style="padding: 8px 0; font-weight: 600;">${metadata.applicationId}</td>
            </tr>
            <tr style="border-bottom: 1px solid #e5e7eb;">
              <td style="padding: 8px 0; color: #6b7280; font-weight: 500;">Entity Type:</td>
              <td style="padding: 8px 0; font-weight: 600;">${metadata.entityType}</td>
            </tr>
            <tr style="border-bottom: 1px solid #e5e7eb;">
              <td style="padding: 8px 0; color: #6b7280; font-weight: 500;">Service Type:</td>
              <td style="padding: 8px 0; font-weight: 600;">${serviceName}</td>
            </tr>
            <tr style="border-bottom: 1px solid #e5e7eb;">
              <td style="padding: 8px 0; color: #6b7280; font-weight: 500;">Processing Time:</td>
              <td style="padding: 8px 0; font-weight: 600;">${processingTime}</td>
            </tr>
            <tr style="border-bottom: 1px solid #e5e7eb;">
              <td style="padding: 8px 0; color: #6b7280; font-weight: 500;">Amount Paid:</td>
              <td style="padding: 8px 0; font-weight: 600; color: #22c55e;">$${amount}</td>
            </tr>
            <tr style="border-bottom: 1px solid #e5e7eb;">
              <td style="padding: 8px 0; color: #6b7280; font-weight: 500;">Payment ID:</td>
              <td style="padding: 8px 0; font-weight: 600;">${paymentIntent.id}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #6b7280; font-weight: 500;">Customer Email:</td>
              <td style="padding: 8px 0; font-weight: 600;">${metadata.customerEmail || 'Not provided'}</td>
            </tr>
          </table>
        </div>

        <div style="background-color: #fef3c7; border: 1px solid #fcd34d; padding: 20px; border-radius: 8px; margin-top: 20px;">
          <h3 style="color: #92400e; margin: 0 0 10px 0;">⏰ Action Required</h3>
          <p style="margin: 0; color: #92400e;">
            <strong>${serviceTier === 'express' ? 'URGENT - Express Service:' : 'Standard Service:'}</strong>
            ${serviceTier === 'express' 
              ? 'File EIN application within 1-2 hours. Must complete same day if payment received before 1 PM EST.' 
              : 'File EIN application within 4-6 hours during business hours.'}
          </p>
        </div>
      </div>
      
      <div style="background-color: #374151; color: white; padding: 20px; text-align: center;">
        <p style="margin: 0;">EIN National Filing - Payment Processing System</p>
        <p style="margin: 5px 0 0 0; font-size: 14px; opacity: 0.8;">
          Received: ${new Date().toLocaleString()}
        </p>
      </div>
    </div>
  `

  const resend = getResendClient()
  
  // Send notification to business
  await resend.emails.send({
    from: `EIN Processing <${FROM_EMAIL}>`,
    to: [TO_EMAIL],
    subject: `🚨 PAID - Process EIN ${metadata.applicationId} - ${serviceTier.toUpperCase()}`,
    html: businessEmailHtml,
  })

  // Send confirmation to customer if email is provided
  if (metadata.customerEmail) {
    const customerEmailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background-color: #2563eb; color: white; padding: 20px; text-align: center;">
          <h1 style="margin: 0; font-size: 24px;">Payment Confirmation</h1>
          <p style="margin: 10px 0 0 0; font-size: 16px;">Your EIN application is being processed</p>
        </div>
        
        <div style="padding: 30px; background-color: #f9fafb;">
          <div style="background-color: #dbeafe; border: 1px solid #93c5fd; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
            <h2 style="color: #1e40af; margin: 0 0 10px 0;">Thank you for your payment!</h2>
            <p style="margin: 0; color: #1e40af;">
              We've received your payment of $${amount} for ${serviceName.toLowerCase()}. Your EIN application is now being processed.
            </p>
          </div>

          <div style="background-color: white; padding: 20px; border-radius: 8px; border: 1px solid #e5e7eb; margin-bottom: 20px;">
            <h3 style="margin: 0 0 15px 0; color: #374151;">Order Summary</h3>
            <table style="width: 100%; border-collapse: collapse;">
              <tr style="border-bottom: 1px solid #e5e7eb;">
                <td style="padding: 8px 0; color: #6b7280;">Application ID:</td>
                <td style="padding: 8px 0; font-weight: 600;">${metadata.applicationId}</td>
              </tr>
              <tr style="border-bottom: 1px solid #e5e7eb;">
                <td style="padding: 8px 0; color: #6b7280;">Service Type:</td>
                <td style="padding: 8px 0; font-weight: 600;">${serviceName}</td>
              </tr>
              <tr style="border-bottom: 1px solid #e5e7eb;">
                <td style="padding: 8px 0; color: #6b7280;">Expected Delivery:</td>
                <td style="padding: 8px 0; font-weight: 600;">
                  ${serviceTier === 'express' ? 'Same day (if submitted before 1 PM EST)' : '24-48 hours'}
                </td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #6b7280;">Amount Paid:</td>
                <td style="padding: 8px 0; font-weight: 600; color: #22c55e;">$${amount}</td>
              </tr>
            </table>
          </div>

          <div style="background-color: #f0f9ff; border: 1px solid #0ea5e9; padding: 20px; border-radius: 8px;">
            <h3 style="color: #0c4a6e; margin: 0 0 10px 0;">What happens next?</h3>
            <p style="margin: 0 0 10px 0; color: #0c4a6e;">
              1. Our team will review your application for accuracy<br/>
              2. We'll file your EIN application with the IRS<br/>
              3. You'll receive your EIN confirmation via email
            </p>
            <p style="margin: 0; color: #0c4a6e; font-size: 14px;">
              Questions? Contact us at support@einnationalfiling.com
            </p>
          </div>
        </div>
        
        <div style="background-color: #374151; color: white; padding: 20px; text-align: center;">
          <p style="margin: 0;">EIN National Filing</p>
          <p style="margin: 5px 0 0 0; font-size: 14px; opacity: 0.8;">
            Confirmation sent: ${new Date().toLocaleString()}
          </p>
        </div>
      </div>
    `

    await resend.emails.send({
      from: `EIN National Filing <${FROM_EMAIL}>`,
      to: [metadata.customerEmail],
      subject: `Payment Confirmed - EIN Application ${metadata.applicationId}`,
      html: customerEmailHtml,
    })
  }
}

async function handlePaymentFailure(paymentIntent: Stripe.PaymentIntent) {
  const metadata = paymentIntent.metadata
  const amount = (paymentIntent.amount / 100).toFixed(2)

  const failureEmailHtml = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <div style="background-color: #dc2626; color: white; padding: 20px; text-align: center;">
        <h1 style="margin: 0; font-size: 24px;">❌ PAYMENT FAILED</h1>
        <p style="margin: 10px 0 0 0; font-size: 16px;">No Action Required - Customer Must Retry</p>
      </div>
      
      <div style="padding: 30px; background-color: #f9fafb;">
        <div style="background-color: #fee2e2; border: 1px solid #fecaca; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
          <h2 style="color: #dc2626; margin: 0 0 10px 0;">Payment Failed - Do Not Process EIN</h2>
          <p style="margin: 0; color: #dc2626; font-weight: 600;">
            Payment of $${amount} failed for application ${metadata.applicationId}. Customer must retry payment.
          </p>
        </div>

        <div style="background-color: white; padding: 20px; border-radius: 8px; border: 1px solid #e5e7eb;">
          <h3 style="margin: 0 0 15px 0; color: #374151;">Failed Payment Details</h3>
          <table style="width: 100%; border-collapse: collapse;">
            <tr style="border-bottom: 1px solid #e5e7eb;">
              <td style="padding: 8px 0; color: #6b7280; font-weight: 500;">Application ID:</td>
              <td style="padding: 8px 0; font-weight: 600;">${metadata.applicationId}</td>
            </tr>
            <tr style="border-bottom: 1px solid #e5e7eb;">
              <td style="padding: 8px 0; color: #6b7280; font-weight: 500;">Entity Type:</td>
              <td style="padding: 8px 0; font-weight: 600;">${metadata.entityType}</td>
            </tr>
            <tr style="border-bottom: 1px solid #e5e7eb;">
              <td style="padding: 8px 0; color: #6b7280; font-weight: 500;">Failed Amount:</td>
              <td style="padding: 8px 0; font-weight: 600; color: #dc2626;">$${amount}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #6b7280; font-weight: 500;">Payment ID:</td>
              <td style="padding: 8px 0; font-weight: 600;">${paymentIntent.id}</td>
            </tr>
          </table>
        </div>
      </div>
      
      <div style="background-color: #374151; color: white; padding: 20px; text-align: center;">
        <p style="margin: 0;">EIN National Filing - Payment Processing System</p>
        <p style="margin: 5px 0 0 0; font-size: 14px; opacity: 0.8;">
          Failed: ${new Date().toLocaleString()}
        </p>
      </div>
    </div>
  `

  const resend = getResendClient()
  
  await resend.emails.send({
    from: `EIN Processing <${FROM_EMAIL}>`,
    to: [TO_EMAIL],
    subject: `❌ PAYMENT FAILED - ${metadata.applicationId} - No Action Required`,
    html: failureEmailHtml,
  })
} 