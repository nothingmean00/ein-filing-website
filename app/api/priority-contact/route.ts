import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

// Lazy initialization to avoid build-time errors
const getResendClient = () => {
  const apiKey = process.env.RESEND_API_KEY;
  
  if (!apiKey) {
    throw new Error('RESEND_API_KEY environment variable is not set');
  }

  return new Resend(apiKey);
};

const TO_EMAIL = "support@einnationalfiling.com"
const FROM_EMAIL = "support@einnationalfiling.com" // Or your verified Resend domain email

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, subject, message, urgency } = body

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Create priority email content
    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background-color: #dc2626; color: white; padding: 20px; text-align: center;">
          <h1 style="margin: 0; font-size: 24px;">🚨 PRIORITY Support Request</h1>
          <p style="margin: 10px 0 0 0;">Urgent response required within 1 hour</p>
        </div>
        
        <div style="padding: 30px; background-color: #f9f9f9;">
          <h2 style="color: #dc2626; margin-top: 0;">Priority Contact Details</h2>
          
          <div style="background-color: white; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
            <p><strong>Subject:</strong> ${subject}</p>
            <p><strong>Urgency Level:</strong> HIGH PRIORITY</p>
          </div>
          
          <div style="background-color: white; padding: 20px; border-radius: 8px;">
            <h3 style="margin-top: 0; color: #333;">Message:</h3>
            <p style="line-height: 1.6; white-space: pre-wrap;">${message}</p>
          </div>
          
          <div style="background-color: #fef2f2; border: 1px solid #fecaca; padding: 15px; border-radius: 8px; margin-top: 20px;">
            <p style="margin: 0; color: #dc2626; font-weight: bold;">
              ⏰ Response Required: Within 1 hour during business hours (9 AM - 6 PM EST, Mon-Fri)
            </p>
          </div>
        </div>
        
        <div style="background-color: #374151; color: white; padding: 20px; text-align: center;">
          <p style="margin: 0;">EIN National Filing - Priority Support System</p>
          <p style="margin: 5px 0 0 0; font-size: 14px; opacity: 0.8;">
            Submitted: ${new Date().toLocaleString()}
          </p>
        </div>
      </div>
    `

    // Send priority email
    const resend = getResendClient();
    await resend.emails.send({
      from: `Priority Support <${FROM_EMAIL}>`,
      to: [TO_EMAIL],
      subject: `🚨 PRIORITY: ${subject} - ${name}`,
      html: emailHtml,
    })

    return NextResponse.json({ 
      success: true, 
      message: 'Priority support request sent successfully' 
    })

  } catch (error) {
    console.error('Priority contact error:', error)
    return NextResponse.json(
      { error: 'Failed to send priority support request' },
      { status: 500 }
    )
  }
} 