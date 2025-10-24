# Quick Start: Secure Deployment to Netlify

## 🚀 What Changed?

All secrets have been removed from your codebase and the build configuration has been optimized for Netlify. Your application is now secure and ready to deploy.

### Build Configuration

The project is now configured with:
- ✅ **Vite**: v5.4.2 in devDependencies
- ✅ **Build command**: `npm run build`
- ✅ **NPM_FLAGS**: `--include=dev` (ensures Vite and other dev dependencies install during build)
- ✅ **NODE_ENV**: `production`
- ✅ **NODE_VERSION**: 18
- ✅ **Publish directory**: `dist`

This configuration ensures that:
- Vite will be available during the build process
- No "vite: not found" errors will occur
- All devDependencies are properly installed for production builds

## ⚡ Quick Steps to Deploy

### 1. Set Up Environment Variables in Netlify (REQUIRED)

1. Log in to [Netlify Dashboard](https://app.netlify.com/)
2. Select your site
3. Go to **Site settings** → **Environment variables**
4. Click **Add a variable** and add each of these:

| Variable Name | Value | Where to Get It |
|---------------|-------|-----------------|
| `VITE_SUPABASE_URL` | Your Supabase project URL | [Supabase Dashboard](https://app.supabase.com/) → Project Settings → API |
| `VITE_SUPABASE_ANON_KEY` | Your Supabase anon key | [Supabase Dashboard](https://app.supabase.com/) → Project Settings → API |
| `VITE_STRIPE_PUBLIC_KEY` | Your Stripe publishable key | [Stripe Dashboard](https://dashboard.stripe.com/apikeys) |
| `VITE_APP_VERSION` | `1.0.0` | You can set this to any version |
| `NODE_ENV` | `production` | Set this manually |

**Optional** (only if using Netlify Functions or webhooks):
| Variable Name | Value | Where to Get It |
|---------------|-------|-----------------|
| `STRIPE_SECRET_KEY` | Your Stripe secret key | [Stripe Dashboard](https://dashboard.stripe.com/apikeys) → Reveal secret key |
| `SUPABASE_SERVICE_ROLE_KEY` | Your Supabase service role key | [Supabase Dashboard](https://app.supabase.com/) → Project Settings → API |

### 2. Push Changes to GitHub (if not done already)

Ensure your latest changes are pushed to GitHub:
```bash
git add .
git commit -m "Configure Netlify deployment with proper build settings"
git push origin main
```

### 3. Deploy

After adding all environment variables:
1. Click **Save** in Netlify environment variables
2. Go to **Deploys** tab
3. Netlify will automatically deploy, or click **Trigger deploy** → **Deploy site**
4. Monitor the build logs - you should see:
   ```
   Installing dependencies
   npm install --include=dev
   ...
   Build command from netlify.toml
   npm run build
   ...
   vite v5.4.8 building for production...
   ✓ built in Xs
   ...
   Site is live ✓
   ```

## ✅ What's Been Fixed

### Security
- ✅ Removed all secrets from `.env` file
- ✅ Created `.env.example` with safe placeholder values
- ✅ Updated `.gitignore` to prevent secret files from being committed
- ✅ Verified build output contains no secrets
- ✅ Updated all documentation with security best practices

### Build Configuration
- ✅ Updated `netlify.toml` with `NPM_FLAGS=--include=dev`
- ✅ Verified Vite is in devDependencies
- ✅ Tested production build locally (successful)
- ✅ Configured proper environment variable handling

## 🔐 For Local Development

To run the application locally:

1. Copy the example environment file:
   ```bash
   cp .env.example .env
   ```

2. Open `.env` and add your actual credentials:
   ```env
   VITE_SUPABASE_URL=https://your-project-id.supabase.co
   VITE_SUPABASE_ANON_KEY=your_actual_anon_key
   VITE_STRIPE_PUBLIC_KEY=pk_test_your_actual_test_key
   ```

3. Start the development server:
   ```bash
   npm install
   npm run dev
   ```

**Note:** The `.env` file is ignored by git and will never be committed.

## 🔍 Verify Successful Deployment

After deployment, verify everything works:

1. **Visit your site URL**
2. **Check the console** (F12) for any errors
3. **Test key features:**
   - Navigation works
   - Products display correctly
   - Cart functionality works
   - Supabase connection is active

4. **Check Netlify deploy logs:**
   - Build completed successfully
   - No errors during `npm install`
   - No errors during `npm run build`
   - Site published to production

## 📚 More Information

For detailed guides, see:
- **NETLIFY_SETUP.md** - Complete Netlify deployment guide
- **SECURITY_CHECKLIST.md** - Full security checklist and best practices
- **README.md** - General project setup and information

## 🆘 Troubleshooting

### Build Fails with "vite: not found"

**This should now be fixed!** The `netlify.toml` now includes `NPM_FLAGS=--include=dev` which ensures Vite installs during the build.

If you still see this error:
1. Verify `netlify.toml` contains:
   ```toml
   [build.environment]
   NPM_FLAGS = "--include=dev"
   ```
2. Clear build cache and redeploy
3. Check that `vite` is listed in `devDependencies` in `package.json`

### Build Still Fails with "Secrets detected"

1. Clear Netlify cache:
   - Go to Site settings → Build & deploy → Build settings
   - Click **Clear cache and retry deploy**

2. Verify no secrets in repository:
   ```bash
   # Search for secrets in your code
   grep -r "sk_test_\|sk_live_\|whsec_" . --exclude-dir=node_modules
   ```

3. If found, remove them and commit changes

### Application Not Loading After Deploy

1. Check Netlify deploy logs for errors
2. Verify all environment variables are set correctly
3. Check browser console for specific error messages
4. Ensure environment variable names match exactly (case-sensitive)

### Stripe/Supabase Not Connecting

1. Double-check API keys in Netlify dashboard
2. Verify you're using the correct keys (test vs live mode)
3. Check that URLs include `https://`
4. Test the same keys locally to verify they work

---

**You're all set!** Your application is now secure and ready for deployment. 🎉
