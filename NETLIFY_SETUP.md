# Netlify Deployment Setup Guide

## Environment Variables Configuration

To deploy your application securely on Netlify, you need to configure environment variables in the Netlify dashboard.

### Step 1: Access Netlify Environment Variables

1. Log in to your Netlify account
2. Navigate to your site
3. Go to **Site settings** > **Environment variables**
4. Click **Add a variable**

### Step 2: Add Required Environment Variables

Add the following environment variables with your actual values:

#### Client-side Variables (VITE_ prefix - exposed to browser)

**VITE_SUPABASE_URL**
- Value: Your Supabase project URL (e.g., `https://your-project-id.supabase.co`)
- Scope: All deploy contexts

**VITE_SUPABASE_ANON_KEY**
- Value: Your Supabase anonymous key (starts with `eyJ...`)
- Scope: All deploy contexts

**VITE_STRIPE_PUBLIC_KEY**
- Value: Your Stripe publishable key (starts with `pk_live_` or `pk_test_`)
- Scope: Production (use `pk_live_`), Deploy previews (use `pk_test_`)

**VITE_APP_VERSION**
- Value: `1.0.0` (or your current version)
- Scope: All deploy contexts

#### Server-side Variables (NOT exposed to browser)

**STRIPE_SECRET_KEY**
- Value: Your Stripe secret key (starts with `sk_live_` or `sk_test_`)
- Scope: Production only
- ⚠️ **CRITICAL:** Never expose this key in client-side code

**SUPABASE_SERVICE_ROLE_KEY**
- Value: Your Supabase service role key
- Scope: Production only
- ⚠️ **CRITICAL:** Never expose this key in client-side code

**NODE_ENV**
- Value: `production`
- Scope: Production
- Note: This is already set in netlify.toml

### Step 3: Verify Environment Variables

After adding all variables:
1. Check that all variables are listed correctly
2. Verify scopes are set appropriately (production vs all contexts)
3. Save changes

### Step 4: Redeploy

1. Trigger a new deployment from Netlify
2. Monitor the build logs
3. Ensure no secrets are detected in the build output

## Security Best Practices

### ✅ DO:
- Use environment variables for all sensitive data
- Set appropriate scopes (production vs preview)
- Use test keys for preview deployments
- Use live keys only for production
- Keep server-side keys separate from client-side keys
- Regularly rotate API keys

### ❌ DON'T:
- Commit `.env` files to version control
- Expose secret keys in client-side code
- Use production keys in development
- Share API keys via email or messaging
- Hardcode API keys in source code

## Troubleshooting

### Build Fails with "Secrets detected"

If you see this error:
1. Ensure `.env` file is in `.gitignore`
2. Remove any hardcoded secrets from source code
3. Clear Git history if secrets were previously committed
4. Verify all secrets are only in Netlify environment variables

### Environment Variables Not Loading

1. Check variable names match exactly (case-sensitive)
2. Verify scopes are set correctly
3. Redeploy after adding variables
4. Check Netlify build logs for any errors

### Stripe/Supabase Connection Errors

1. Verify all keys are correct in Netlify dashboard
2. Check that keys match your project (test vs live mode)
3. Ensure Supabase URL includes `https://`
4. Test keys locally first before deploying

## Additional Security Measures

### Content Security Policy (CSP)
Consider adding CSP headers in `netlify.toml`:

```toml
[[headers]]
  for = "/*"
  [headers.values]
    Content-Security-Policy = "default-src 'self'; script-src 'self' 'unsafe-inline' https://js.stripe.com; connect-src 'self' https://*.supabase.co https://api.stripe.com;"
```

### Rate Limiting
Consider implementing rate limiting for API endpoints.

### Monitoring
Set up monitoring to detect unusual activity:
- Stripe Dashboard for payment monitoring
- Supabase Dashboard for database activity
- Netlify Analytics for traffic patterns

## Support

For additional help:
- Netlify Docs: https://docs.netlify.com/
- Stripe Docs: https://stripe.com/docs
- Supabase Docs: https://supabase.com/docs

---

**Remember:** Security is paramount. Never share or expose your secret keys!
