# Launch Checklist - Email-Based EIN Filing Service

## ✅ Pre-Launch Setup

### 1. Email Setup (Resend)
- [x] Sign up for Resend account
- [x] Verify your domain (optional but recommended)
- [x] Add `RESEND_API_KEY` to `.env.local`
- [ ] Test email sending from contact form

### 2. Payment Setup (Stripe)
- [ ] Create Stripe account
- [ ] Get test API keys from Stripe dashboard
- [ ] Add to `.env.local`:
  ```
  STRIPE_SECRET_KEY=sk_test_...
  NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
  ```
- [ ] Test payment flow with test card: 4242 4242 4242 4242
- [ ] Set up webhook endpoint in Stripe dashboard:
  - URL: `https://einnationalfiling.com/api/webhooks/stripe`
  - Events: `payment_intent.succeeded`, `payment_intent.payment_failed`
- [ ] Add `STRIPE_WEBHOOK_SECRET` to `.env.local`

### 3. Domain & Hosting
- [ ] Deploy to Vercel/Netlify/your hosting platform
- [ ] Set up custom domain
- [ ] Configure environment variables on hosting platform
- [ ] Test production deployment

### 4. Legal & Compliance
- [ ] Review terms of service
- [ ] Update privacy policy
- [ ] Ensure compliant with local business regulations
- [ ] Set up business entity if needed

### 5. Security Implementation ✅
- [x] Rate limiting on all API endpoints (5 payment attempts/min, 20 chat messages/min)
- [x] Server-side input validation with Zod schemas
- [x] Comprehensive security headers (XSS, CSRF, clickjacking protection)
- [x] Input sanitization and length limits
- [x] Error message sanitization
- [x] Build-time security checks enabled

## ✅ Launch Day

### 1. Final Testing
- [ ] Test complete application flow
- [ ] Verify emails are received
- [ ] Test payment processing
- [ ] Check webhook functionality
- [ ] Test on mobile devices

### 2. Go Live
- [ ] Switch Stripe to live keys
- [ ] Update webhook URL to production
- [ ] Set up Google Ads account
- [ ] Create first ad campaigns
- [ ] Monitor email inbox for orders

## ✅ Google Ads Setup

### 1. Campaign Structure
**Campaign 1: EIN Filing - Broad**
- Keywords: "EIN application", "federal tax id", "employer identification number"
- Budget: $50-100/day to start
- Location: US nationwide
- Ad copy: Focus on same-day service

**Campaign 2: EIN Filing - Specific**
- Keywords: "LLC EIN", "Corporation EIN", "apply for EIN online"
- Budget: $30-50/day
- Location: US nationwide
- Ad copy: Entity-specific benefits

### 2. Landing Page Strategy
- All ads point to homepage
- Clear entity type selection
- Prominent pricing ($249/$329)
- Trust signals (reviews, guarantees)

### 3. Tracking Setup
- [ ] Google Analytics
- [ ] Google Tag Manager
- [ ] Conversion tracking for payments
- [ ] Call tracking (if offering phone support)

## ✅ Fulfillment Process

### 1. Order Monitoring
- [ ] Check email every 2-4 hours during business hours
- [ ] Set up phone notifications for payment emails
- [ ] Have IRS online application bookmarked
- [ ] Prepare customer email templates

### 2. Processing Workflow
**When you receive "🚨 PAID - Process EIN" email:**
1. **Immediately** file EIN with IRS online
2. Save EIN confirmation
3. Email EIN to customer within 4-6 hours
4. File customer info for records

### 3. Customer Service
- [ ] Set up support email: support@einnationalfiling.com
- [ ] Create FAQ responses
- [ ] Prepare status update templates
- [ ] Set expectations for response times

## ✅ Week 1 Optimization

### 1. Monitor Performance
- [ ] Track ad spend vs revenue
- [ ] Monitor conversion rates
- [ ] Check customer satisfaction
- [ ] Review fulfillment speed

### 2. Adjust Campaigns
- [ ] Pause low-performing keywords
- [ ] Increase budget on profitable campaigns
- [ ] Test new ad copy
- [ ] Adjust bidding strategy

### 3. Scale Fulfillment
- [ ] Streamline IRS filing process
- [ ] Improve customer communication
- [ ] Consider hiring help if volume increases
- [ ] Document processes for consistency

## ✅ Success Metrics (Week 1)

### Revenue Targets
- **Conservative**: 2-3 orders/day = $500-750/day
- **Realistic**: 5-10 orders/day = $1,250-2,500/day
- **Optimistic**: 15+ orders/day = $3,750+/day

### Key Performance Indicators
- **Conversion Rate**: 2-5% (homepage visitors to payment)
- **Cost Per Acquisition**: $25-50 (ad spend to get 1 customer)
- **Customer Satisfaction**: 95%+ (based on email responses)
- **Fulfillment Speed**: 4-6 hours average

## ✅ Emergency Procedures

### If IRS System is Down
1. Use phone application: 800-829-4933
2. Email customer about delay
3. Provide regular updates
4. Offer partial refund if excessive delay

### If Too Many Orders
1. Temporarily pause ads
2. Email customers about processing times
3. Consider hiring immediate help
4. Prioritize express service customers

### If Payment Issues
1. Check Stripe dashboard
2. Contact Stripe support
3. Don't process EIN without payment confirmation
4. Help customer retry payment

## 🎯 Ready to Launch?

When you can check all boxes above, you're ready to:
1. **Launch Google Ads**
2. **Start taking orders**
3. **Monitor and optimize**
4. **Scale gradually**

The email-based system lets you validate your business and start generating revenue immediately without complex infrastructure! 