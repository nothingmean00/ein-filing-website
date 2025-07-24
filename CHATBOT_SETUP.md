# Chatbot Setup Instructions

## OpenAI API Key Setup

To set up the chatbot with your OpenAI API key, follow these steps:

1. **Create a `.env.local` file** in the root directory of your project:

```bash
touch .env.local
```

2. **Add your OpenAI API key** to the `.env.local` file:

```
OPENAI_API_KEY=your_openai_api_key_here
```

Replace `your_openai_api_key_here` with your actual OpenAI API key.

3. **IMPORTANT: Security Best Practices**
   - Never commit your `.env.local` file to version control
   - Make sure `.env.local` is in your `.gitignore` file
   - Rotate your API key regularly
   - Set appropriate usage limits in your OpenAI dashboard

## Starting the Development Server

After setting up your API key, start the development server:

```bash
npm run dev
```

If port 3005 is already in use, specify a different port:

```bash
npx next dev -p 3006
```

## Testing the Chatbot

1. Open your browser and navigate to `http://localhost:3006` (or whichever port you're using)
2. Click on the chat icon in the bottom right corner
3. Test the chatbot with questions about EIN filing

## Customizing the Chatbot

You can customize the chatbot's behavior by editing:
- System message in `lib/openai-config.ts`
- UI components in `components/chat/`
- API handling in `app/api/chat/route.ts`

## Production Deployment

For production deployment:
1. Set up environment variables on your hosting platform
2. Never hardcode API keys in your codebase
3. Consider implementing rate limiting to control API usage costs

## Troubleshooting

If you encounter issues:
1. Check that your API key is valid and has sufficient credits
2. Verify the `.env.local` file is in the correct location
3. Restart the development server after making changes to environment variables
4. Check browser console and server logs for error messages 