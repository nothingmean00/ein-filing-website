import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

// Test endpoint to verify Resend API is working
const getResendClient = () => {
  const apiKey = process.env.RESEND_API_KEY;
  
  if (!apiKey) {
    throw new Error('RESEND_API_KEY environment variable is not set');
  }

  return new Resend(apiKey);
};

export async function POST(request: NextRequest) {
  try {
    // Check if API key is configured
    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json(
        { 
          error: 'RESEND_API_KEY environment variable is not configured',
          configured: false 
        },
        { status: 503 }
      )
    }

    const body = await request.json()
    const { to = 'test@example.com' } = body

    const resend = getResendClient();
    
    // Send test email
    const result = await resend.emails.send({
      from: 'Test <notifications@einnationalfiling.com>',
      to: [to],
      subject: 'Resend API Test - EIN National Filing',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background-color: #2563eb; color: white; padding: 20px; text-align: center;">
            <h1 style="margin: 0; font-size: 24px;">✅ Resend API Test</h1>
            <p style="margin: 10px 0 0 0;">Email delivery is working!</p>
          </div>
          
          <div style="padding: 30px; background-color: #f9fafb;">
            <p>This is a test email to verify that Resend API is properly configured.</p>
            <p><strong>Test Details:</strong></p>
            <ul>
              <li>Sent at: ${new Date().toLocaleString()}</li>
              <li>From: EIN National Filing System</li>
              <li>Status: API Working ✅</li>
            </ul>
          </div>
          
          <div style="background-color: #374151; color: white; padding: 20px; text-align: center;">
            <p style="margin: 0;">EIN National Filing - Email Test System</p>
          </div>
        </div>
      `
    })

    return NextResponse.json({ 
      success: true,
      configured: true,
      message: 'Test email sent successfully',
      emailId: result.data?.id,
      sentTo: to
    })

  } catch (error: any) {
    console.error('Resend test error:', error)
    
    // Return detailed error information
    return NextResponse.json(
      { 
        error: 'Failed to send test email',
        details: error.message,
        configured: !!process.env.RESEND_API_KEY,
        errorType: error.name || 'Unknown'
      },
      { status: 500 }
    )
  }
}

// GET endpoint to check configuration status
export async function GET() {
  return NextResponse.json({
    resendConfigured: !!process.env.RESEND_API_KEY,
    apiKeyLength: process.env.RESEND_API_KEY?.length || 0,
    apiKeyPrefix: process.env.RESEND_API_KEY?.substring(0, 8) || 'Not set'
  })
}