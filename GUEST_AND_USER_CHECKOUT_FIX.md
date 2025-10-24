# Guest and User Checkout Fix

## Issue
The checkout was failing with a Stripe API error:
```
Stripe API error: 400 - {
  "error": {
    "code": "email_invalid",
    "doc_url": "https://stripe.com/docs/error-codes/email-invalid",
    "message": "Invalid email address",
    "param": "customer_email",
    "type": "invalid_request_error"
  }
}
```

The problem was that the system was passing `customer_email: null` to Stripe, which Stripe rejects as invalid. An email should either be a valid email address or completely omitted from the request.

## Root Cause
The checkout function was always including `customer_email: null` in the request body, regardless of whether the user was logged in or not. Stripe doesn't accept `null` or empty strings for the email field.

## Solution

### 1. Updated Stripe Checkout Function (`src/lib/stripe.ts`)

**Added optional user email parameter:**
```typescript
export const createCheckoutSession = async (
  items: Array<{...}>,
  userEmail?: string | null  // NEW: Optional parameter for user's email
) => {
  // ...

  const requestBody: any = {
    line_items: lineItems,
    success_url: `${window.location.origin}/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${window.location.origin}/shop`,
    metadata: {
      source: 'eoa_line_website',
      user_type: userEmail ? 'logged_in' : 'guest',  // Track user type
      items: JSON.stringify(...)
    }
  };

  // Only include customer_email if user is logged in
  if (userEmail) {
    requestBody.customer_email = userEmail;
  }
}
```

**Key changes:**
- Added `userEmail` parameter to function signature
- Only add `customer_email` to request body if email exists
- Added `user_type` to metadata to track guest vs logged-in checkouts

### 2. Updated Cart Modal (`src/components/Cart/CartModal.tsx`)

**Imported and used Auth context:**
```typescript
import { useAuth } from '../../contexts/AuthContext';

const CartModal: React.FC<CartModalProps> = ({ ... }) => {
  const { user } = useAuth();  // Get current user

  const handleSecureCheckout = async () => {
    try {
      const { createCheckoutSession } = await import('../../lib/stripe');
      await createCheckoutSession(items, user?.email);  // Pass user email
    } catch (error: any) {
      // Error handling
    }
  };
}
```

**Key changes:**
- Import `useAuth` hook to access current user
- Pass `user?.email` to checkout function (undefined for guests, email for logged-in users)

### 3. Updated Edge Function (`supabase/functions/create-checkout-session/index.ts`)

**Conditionally add email to Stripe request:**
```typescript
const params = new URLSearchParams({
  'mode': 'payment',
  'success_url': success_url,
  'cancel_url': cancel_url,
  'payment_method_types[0]': 'card',
  'billing_address_collection': 'required',
  'locale': 'auto',
});

// Only add customer_email if provided and not empty
if (customer_email && customer_email.trim() !== '') {
  params.append('customer_email', customer_email);
}
```

**Key changes:**
- Removed `customer_email: ''` from initial params
- Only append `customer_email` if it exists and is not empty
- This prevents sending empty or null emails to Stripe

## How It Works Now

### For Guest Users:
1. User adds items to cart (no login required)
2. User clicks checkout
3. `createCheckoutSession` is called with `userEmail = undefined`
4. Request to Stripe **does not include** `customer_email` field
5. Stripe checkout opens, asks user to enter email during checkout
6. Payment proceeds normally

### For Logged-In Users:
1. User logs in with email/password
2. User adds items to cart
3. User clicks checkout
4. `createCheckoutSession` is called with `userEmail = user.email`
5. Request to Stripe **includes** `customer_email` with user's email
6. Stripe checkout opens with email pre-filled
7. Payment proceeds normally

## Benefits

1. **No Login Required** - Guests can shop and checkout without creating an account
2. **Better UX for Logged-In Users** - Email is pre-filled at checkout
3. **Stripe Compliant** - No invalid email errors
4. **Tracking** - Metadata includes whether checkout was by guest or logged-in user
5. **Flexible** - Works for both user types seamlessly

## Testing

### Test Guest Checkout:
1. Clear browser cookies/logout
2. Add product to cart
3. Click "SICHER BEZAHLEN" (Secure Checkout)
4. Verify Stripe checkout opens without errors
5. Verify email field is empty and editable

### Test Logged-In Checkout:
1. Log in to the website
2. Add product to cart
3. Click "SICHER BEZAHLEN" (Secure Checkout)
4. Verify Stripe checkout opens without errors
5. Verify email field is pre-filled with user's email

## Files Modified

1. **src/lib/stripe.ts**
   - Added `userEmail` parameter to `createCheckoutSession`
   - Conditional email inclusion in request body
   - Added user type tracking in metadata

2. **src/components/Cart/CartModal.tsx**
   - Import `useAuth` hook
   - Get current user from auth context
   - Pass user email to checkout function

3. **supabase/functions/create-checkout-session/index.ts**
   - Conditional addition of customer_email to Stripe params
   - Validation that email is not empty before sending

## Technical Details

### Why This Approach?

**Option 1 (Chosen):** Conditionally include email field
- ✅ Stripe handles missing email gracefully
- ✅ Email field is empty and editable for guests
- ✅ Email is pre-filled for logged-in users
- ✅ No validation errors

**Option 2 (Rejected):** Always send empty string
- ❌ Stripe returns validation error
- ❌ Not acceptable by Stripe API

**Option 3 (Rejected):** Always require login
- ❌ Poor user experience
- ❌ Reduces conversion rate
- ❌ Not necessary for purchases

### Metadata Tracking

The checkout now includes `user_type` in metadata:
```json
{
  "source": "eoa_line_website",
  "user_type": "guest",  // or "logged_in"
  "items": "[...]"
}
```

This allows you to:
- Track conversion rates for guests vs logged-in users
- Send different follow-up emails
- Analyze purchasing behavior
- Improve marketing strategies

## Security Considerations

1. **Email Privacy** - Guest emails are collected by Stripe securely during checkout
2. **No Forced Registration** - Users are not required to create an account
3. **Optional Account Creation** - You can offer account creation after successful purchase
4. **Auth Context** - User authentication is properly handled by Supabase Auth

## Next Steps (Optional Enhancements)

1. **Post-Purchase Account Creation**
   - After successful payment, offer guests to create account
   - Pre-fill with email from Stripe checkout
   - Store order history automatically

2. **Email Marketing**
   - Collect guest emails from completed orders
   - Send promotional emails (with consent)
   - Encourage account creation

3. **Order Tracking**
   - Allow guests to track orders via email + order number
   - No login required for basic tracking

4. **Saved Payment Methods**
   - Logged-in users can save payment methods
   - Faster checkout for repeat customers
