# Stripe Payment Setup Guide

## 1. Create Stripe Account
1. Go to [stripe.com](https://stripe.com) and create an account
2. Complete the verification process
3. Go to the Dashboard

## 2. Get API Keys
1. In your Stripe dashboard, go to **Developers** > **API keys**
2. Copy your **Publishable key** (starts with `pk_test_`)
3. Click "Reveal test key" and copy your **Secret key** (starts with `sk_test_`)

## 3. Environment Variables
Create a `.env.local` file in your project root with:

```bash
# Stripe Configuration
STRIPE_SECRET_KEY=sk_test_YOUR_SECRET_KEY_HERE
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_YOUR_PUBLISHABLE_KEY_HERE
STRIPE_WEBHOOK_SECRET=whsec_YOUR_WEBHOOK_SECRET_HERE

# Email Configuration (optional)
RESEND_API_KEY=re_YOUR_RESEND_KEY_HERE
```

## 4. Set Up Webhooks
1. In Stripe dashboard, go to **Developers** > **Webhooks**
2. Click **Add endpoint**
3. Endpoint URL: `https://yourdomain.com/api/webhooks/stripe`
4. Select events: `payment_intent.succeeded`
5. Copy the webhook signing secret (starts with `whsec_`)

## 5. Test the Integration
- Use test card: `4242 4242 4242 4242`
- Any future expiry date
- Any 3-digit CVC
- Any billing ZIP

## 6. Go Live
1. Complete Stripe account verification
2. Switch to live API keys in production
3. Update webhook endpoint to production URL

## Processing Fees
- **Stripe**: 2.9% + 30¢ per transaction
- **Your $249 charge**: ~$7.50 in fees per sale
- **Net revenue**: ~$241.50 per sale

## Security Notes
- Never commit API keys to version control
- Use test keys for development
- Validate webhooks with signing secrets
- Store customer data securely 