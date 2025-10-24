// Stripe configuration and utilities for E.O.A Line
export const STRIPE_PUBLIC_KEY = import.meta.env.VITE_STRIPE_PUBLIC_KEY || '';

export const STRIPE_PRODUCTS = {
  'LV-JK-F-BG': { priceId: 'price_1SJfwIJzeNOSL3oyuQFbvHfy', productId: 'prod_TGCK1E89Na8qYv' },
  'LV-JK-F-BLK': { priceId: 'price_1SJfpqJzeNOSL3oyS355QtOn', productId: 'prod_TGCEy0uEPFMoxy' },
  'LV-JK-M-BG': { priceId: 'price_1SKcBKJzeNOSL3oyafR2g0cx', productId: 'prod_THAWhUzrwYty43' },
  'LV-JK-M-BLK': { priceId: 'price_1SKbUEJzeNOSL3oypaNKrQyh', productId: 'prod_TH9nQ8regDZ0Lz' },
  'LV-SH-F-BG': { priceId: 'price_1SKcCeJzeNOSL3oyy2SomUtV', productId: 'prod_THAXoFGzigthpC' },
  'LV-SH-F-BLK': { priceId: 'price_1SKcACJzeNOSL3oyoG5iH5Zl', productId: 'prod_THAVY1ZQoHKiWh' },
  'LV-SH-M-BG': { priceId: 'price_1SKcExJzeNOSL3oyoF12rt30', productId: 'prod_THAaBqCOUZBpDE' },
  'LV-SH-M-BLK': { priceId: 'price_1SKcEBJzeNOSL3oyy0eMjYjc', productId: 'prod_THAZLLiIbLCz81' },
  'LV-SET-JK-SK-F-BG': { priceId: 'price_1SKcGaJzeNOSL3oybv1wkWRo', productId: 'prod_THAbSSdw3oCE0W' },
  'LV-SET-JK-SK-F-BLK': { priceId: 'price_1SKcFtJzeNOSL3oycTrKkWej', productId: 'prod_THAbvew40BUMiR' },
  'LV-SET-JK-SH-F-BG': { priceId: 'price_1SKcJ7JzeNOSL3oyg1WJVWXm', productId: 'prod_THAeVEyitopXAP' },
  'LV-SET-JK-SH-F-BLK': { priceId: 'price_1SKcI4JzeNOSL3oyxTI5HFPk', productId: 'prod_THAdOlIs2vySmn' },
  'LV-SET-JK-SH-M-BG': { priceId: 'price_1SKcLDJzeNOSL3oyD99p53nQ', productId: 'prod_THAgL6r2YwD8Q4' },
  'LV-SET-JK-SH-M-BLK': { priceId: 'price_1SKcKAJzeNOSL3oy0VKyhlhI', productId: 'prod_THAfRps8pzZw6e' },
  'TM-JK-F-BG': { priceId: 'price_1SKdiyJzeNOSL3oyT53ThMsm', productId: 'prod_THC7FwAIYRF2xB' },
  'TM-JK-F-BLK': { priceId: 'price_1SKdiQJzeNOSL3oyjO1a2vO9', productId: 'prod_THC6JXhkJVv5qf' },
  'TM-JK-M-BG': { priceId: 'price_1SKdk2JzeNOSL3oy2u2qYFv5', productId: 'prod_THC8Jne5GbK5Rr' },
  'TM-JK-M-BLK': { priceId: 'price_1SKdjYJzeNOSL3oyTyqYPKsK', productId: 'prod_THC7CZH5M2O0GL' },
  'TM-TS-F-BG': { priceId: 'price_1SKdmEJzeNOSL3oyrU2EkwEa', productId: 'prod_THCAfzq3QcHsWW' },
  'TM-TS-F-WHT': { priceId: 'price_1SKdlfJzeNOSL3oyb5ChW5Tv', productId: 'prod_THC9CYw31gnRpC' },
  'TM-TS-F-BLK': { priceId: 'price_1SKdlBJzeNOSL3oyc8mobQHC', productId: 'prod_THC9kbbCsujmse' },
  'TM-TS-M-BG': { priceId: 'price_1SKdoKJzeNOSL3oyod2bz2NT', productId: 'prod_THCC9wFPxAOdhN' },
  'TM-TS-M-WHT': { priceId: 'price_1SKdnlJzeNOSL3oyS9MzzTzP', productId: 'prod_THCCuQdl1mlaWq' },
  'TM-TS-M-BLK': { priceId: 'price_1SKdn7JzeNOSL3oytrsBZKgs', productId: 'prod_THCBTKbIpY61CE' },
  'TM-HD-F-BLK': { priceId: 'price_1SKhsoJzeNOSL3oycwm1NQ0s', productId: 'prod_THGPZktnEVb9X4' },
  'TM-HD-M-BLK': { priceId: 'price_1SKhuwJzeNOSL3oy0pSeyVJz', productId: 'prod_THGR749YxtBlzy' },
  'TM-SP-F-BLK': { priceId: 'price_1SKhwXJzeNOSL3oyr9ulxrL5', productId: 'prod_THGTEHQOEh4R1Q' },
  'TM-SP-M-BLK': { priceId: 'price_1SKhyQJzeNOSL3oyuFoUdTHE', productId: 'prod_THGV4j8joShFaP' },
  'TM-FS-F-BLK': { priceId: 'price_1SKhzHJzeNOSL3oyT4a1NGQE', productId: 'prod_THGW5qqqFaoafj' },
  'TM-FS-M-BLK': { priceId: 'price_1SKi07JzeNOSL3oyMvxoIUi3', productId: 'prod_THGXr83rWgQxxY' },
};

export const STRIPE_PRICES = Object.fromEntries(
  Object.entries(STRIPE_PRODUCTS).map(([sku, data]) => [sku, data.priceId])
);

const normalizeColorCode = (color?: string): string => {
  if (!color) return '';

  const colorMap: { [key: string]: string } = {
    'BLACK': 'BLK',
    'BEIGE': 'BG',
    'WHITE': 'WHT',
    'BLK': 'BLK',
    'BG': 'BG',
    'WHT': 'WHT'
  };

  const normalized = color.toUpperCase();
  return colorMap[normalized] || normalized;
};

export const generateSKU = (product: any, selectedColor?: string, selectedSize?: string) => {
  const colorCode = selectedColor ? `-${normalizeColorCode(selectedColor)}` : '';

  if (product.sku) {
    const baseSKU = product.sku;
    const fullSKU = `${baseSKU}${colorCode}`;

    if (STRIPE_PRODUCTS[fullSKU as keyof typeof STRIPE_PRODUCTS]) {
      return fullSKU;
    }

    return baseSKU;
  }

  const name = product.name.toUpperCase();
  let baseSKU = '';

  if (name.includes('LA VEIRA') && name.includes('JACKET') && name.includes('FEMALE')) {
    baseSKU = 'LV-JK-F';
  } else if (name.includes('LA VEIRA') && name.includes('JACKET') && name.includes('MALE')) {
    baseSKU = 'LV-JK-M';
  } else if (name.includes('TUMI') && name.includes('JACKET') && name.includes('FEMALE')) {
    baseSKU = 'TM-JK-F';
  } else if (name.includes('TUMI') && name.includes('JACKET') && name.includes('MALE')) {
    baseSKU = 'TM-JK-M';
  } else if (name.includes('TUMI') && name.includes('T-SHIRT') && name.includes('FEMALE')) {
    baseSKU = 'TM-TS-F';
  } else if (name.includes('TUMI') && name.includes('T-SHIRT') && name.includes('MALE')) {
    baseSKU = 'TM-TS-M';
  } else if (name.includes('TUMI') && name.includes('HOODIE') && name.includes('FEMALE')) {
    baseSKU = 'TM-HD-F';
  } else if (name.includes('TUMI') && name.includes('HOODIE') && name.includes('MALE')) {
    baseSKU = 'TM-HD-M';
  } else if (name.includes('TUMI') && name.includes('SWEAT PANTS') && name.includes('FEMALE')) {
    baseSKU = 'TM-SP-F';
  } else if (name.includes('TUMI') && name.includes('SWEAT PANTS') && name.includes('MALE')) {
    baseSKU = 'TM-SP-M';
  } else if (name.includes('TUMI') && name.includes('FULL SET') && name.includes('FEMALE')) {
    baseSKU = 'TM-FS-F';
  } else if (name.includes('TUMI') && name.includes('FULL SET') && name.includes('MALE')) {
    baseSKU = 'TM-FS-M';
  } else if (name.includes('LA VEIRA') && name.includes('SHORT') && name.includes('FEMALE') && !name.includes('SET')) {
    baseSKU = 'LV-SH-F';
  } else if (name.includes('LA VEIRA') && name.includes('SHORT') && name.includes('MALE') && !name.includes('SET')) {
    baseSKU = 'LV-SH-M';
  } else if (name.includes('LA VEIRA') && name.includes('SKIRT') && name.includes('SET')) {
    baseSKU = 'LV-SET-JK-SK-F';
  } else if (name.includes('LA VEIRA') && name.includes('SHORT') && name.includes('SET') && name.includes('FEMALE')) {
    baseSKU = 'LV-SET-JK-SH-F';
  } else if (name.includes('LA VEIRA') && name.includes('SHORT') && name.includes('SET') && name.includes('MALE')) {
    baseSKU = 'LV-SET-JK-SH-M';
  }

  if (!baseSKU) {
    console.warn('Could not generate SKU for product:', product.name);
    return 'UNKNOWN';
  }

  const fullSKU = `${baseSKU}${colorCode}`;

  if (STRIPE_PRODUCTS[fullSKU as keyof typeof STRIPE_PRODUCTS]) {
    return fullSKU;
  }

  return baseSKU;
};

// Initialize Stripe checkout with real integration
export const createCheckoutSession = async (
  items: Array<{
    product: any;
    quantity: number;
    selectedSize?: string;
    selectedColor?: string;
  }>,
  userEmail?: string | null
) => {
  try {
    console.log('Creating Stripe checkout session for items:', items);
    console.log('User email:', userEmail || 'Guest checkout');

    const lineItems = items.map(item => {
      const sku = generateSKU(item.product, item.selectedColor, item.selectedSize);
      console.log(`Generated SKU: ${sku} for product: ${item.product.name}, color: ${item.selectedColor}`);

      const priceId = STRIPE_PRICES[sku as keyof typeof STRIPE_PRICES];

      if (!priceId) {
        console.error(`No price ID found for SKU: ${sku}`);
        console.error(`Available SKUs:`, Object.keys(STRIPE_PRICES));
        throw new Error(`No Stripe price configured for ${item.product.name} (${item.selectedColor}). Please contact support.`);
      }

      console.log(`Mapped to Price ID: ${priceId}`);

      return {
        price: priceId,
        quantity: item.quantity,
      };
    });

    const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
    const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

    if (!supabaseUrl || !supabaseAnonKey) {
      throw new Error('Supabase configuration missing');
    }

    console.log('Calling edge function with line items:', lineItems);

    const requestBody: any = {
      line_items: lineItems,
      success_url: `${window.location.origin}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${window.location.origin}/shop`,
      metadata: {
        source: 'eoa_line_website',
        user_type: userEmail ? 'logged_in' : 'guest',
        items: JSON.stringify(items.map(item => ({
          name: item.product.name,
          sku: generateSKU(item.product, item.selectedColor, item.selectedSize),
          size: item.selectedSize,
          color: item.selectedColor,
          quantity: item.quantity
        })))
      }
    };

    if (userEmail) {
      requestBody.customer_email = userEmail;
    }

    const response = await fetch(`${supabaseUrl}/functions/v1/create-checkout-session`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${supabaseAnonKey}`,
      },
      body: JSON.stringify(requestBody),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({ error: 'Unknown error' }));
      console.error('Edge function error:', errorData);
      throw new Error(errorData.error || `Failed to create checkout session (${response.status})`);
    }

    const { url } = await response.json();

    if (!url) {
      throw new Error('No checkout URL returned');
    }

    console.log('Redirecting to:', url);
    window.location.href = url;

    return {
      success: true,
      message: 'Redirecting to secure checkout...'
    };

  } catch (error: any) {
    console.error('Error creating checkout session:', error);
    throw error;
  }
};

// Format price for display
export const formatPrice = (price: number, currency: string = 'EUR') => {
  return new Intl.NumberFormat('de-DE', {
    style: 'currency',
    currency: currency,
  }).format(price);
};

// Validate Stripe configuration
export const validateStripeConfig = () => {
  if (!STRIPE_PUBLIC_KEY || STRIPE_PUBLIC_KEY === '') {
    console.warn('Stripe public key not configured');
    return false;
  }
  return true;
};

// Initialize Stripe
export const initializeStripe = async () => {
  try {
    if (typeof window !== 'undefined') {
      const { loadStripe } = await import('@stripe/stripe-js');
      const stripe = await loadStripe(STRIPE_PUBLIC_KEY);
      return stripe;
    }
    return null;
  } catch (error) {
    console.error('Failed to initialize Stripe:', error);
    return null;
  }
};

// Handle successful payment
export const handlePaymentSuccess = (sessionId: string) => {
  console.log('Payment successful:', sessionId);
  // Clear cart
  localStorage.removeItem('eoa-cart');
  // Show success message
  return {
    success: true,
    message: 'Payment completed successfully!'
  };
};

// Handle payment cancellation
export const handlePaymentCancel = () => {
  console.log('Payment cancelled by user');
  return {
    success: false,
    message: 'Payment was cancelled'
  };
};