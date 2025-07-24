# Manual EIN Fulfillment Guide

## Overview
This is a simple email-based fulfillment system that lets you start taking orders immediately without complex database setup.

## Email Setup Required

Add these to your `.env.local`:
```
RESEND_API_KEY=your_resend_api_key_here
STRIPE_SECRET_KEY=your_stripe_secret_key_here
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key_here
STRIPE_WEBHOOK_SECRET=your_stripe_webhook_secret_here
```

## Order Flow

### 1. Customer Places Order
- Customer fills out application form
- **You receive email**: "New EIN Application - EIN-123456"
- Contains all application details formatted for IRS filing

### 2. Customer Pays
- **You receive email**: "🚨 PAID - Process EIN EIN-123456"  
- Contains payment confirmation and customer email
- **ACTION REQUIRED**: File EIN with IRS immediately

### 3. File EIN with IRS
**IRS Online Application (Fastest):**
- Go to: https://www.irs.gov/businesses/small-businesses-self-employed/apply-for-an-employer-identification-number-ein-online
- Use data from application email
- Available Mon-Fri 7am-10pm ET

**IRS Phone Application:**
- Call: 800-829-4933
- Mon-Fri 7am-7pm local time
- Have application details ready

### 4. Email EIN to Customer
**Subject**: "Your EIN is Ready - [Application ID]"

**Email Template**:
```
Dear [Customer Name],

Great news! Your EIN application has been approved by the IRS.

Your Federal Tax ID Number (EIN): XX-XXXXXXX

Application Details:
- Application ID: EIN-123456
- Business Name: [Business Name]
- Entity Type: [Entity Type]
- Date Processed: [Date]

Important Information:
- This is your official Employer Identification Number
- Keep this number secure and confidential
- You'll need this for business banking, tax filings, and hiring employees

What's Next:
1. Set up business banking account
2. Register for state tax accounts if needed
3. Set up payroll if hiring employees
4. File appropriate tax returns

Thank you for choosing our EIN filing service!

Best regards,
EIN National Filing Team
support@einnationalfiling.com
```

## Processing Times

### Standard Service ($249):
- **Promise**: 24-48 hours
- **Reality**: File within 4-6 hours of payment
- **Same day** if payment received before 2pm

### Express Service ($329):
- **Promise**: Same day
- **Reality**: File within 1-2 hours of payment
- **Must complete** same day if payment before 1pm

## Common Issues

### EIN Application Rejected:
1. Review rejection reason
2. Correct application data
3. Resubmit to IRS
4. Email customer update

### Customer Requests Update:
1. Check original application email
2. Provide status update
3. Set expectations for completion

### Payment Issues:
- Failed payments send "❌ PAYMENT FAILED" email
- Do NOT process EIN for failed payments
- Customer must retry payment

## Scaling Tips

### Week 1-2: Manual Process
- Handle 1-10 orders/day manually
- Use email notifications
- File EINs immediately

### Week 3+: Semi-Automated
- Create email templates
- Set up IRS bookmarks
- Batch process during IRS hours

### Month 2+: Consider Database
- Add order tracking
- Customer portal
- Automated emails
- Analytics dashboard

## Key Success Factors

1. **Speed**: File EIN within hours of payment
2. **Communication**: Email customer updates
3. **Accuracy**: Double-check all application data
4. **Availability**: Process during IRS business hours
5. **Backup**: Have phone number ready if online fails

## Emergency Contacts

- IRS EIN Helpline: 800-829-4933
- Stripe Support: https://support.stripe.com
- Resend Support: https://resend.com/support

This system lets you start immediately and validate your business before building complex infrastructure! 