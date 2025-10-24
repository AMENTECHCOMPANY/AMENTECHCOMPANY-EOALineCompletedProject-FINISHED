import Stripe from 'stripe';
import * as dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config({ path: join(__dirname, '..', '.env') });

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2023-10-16',
});

async function fetchPrices() {
  console.log('====================================');
  console.log('FETCHING STRIPE PRODUCTS AND PRICES');
  console.log('====================================\n');

  try {
    const products = await stripe.products.list({ limit: 100, active: true });
    const priceMapping = {};
    const productDetails = [];

    console.log(`Found ${products.data.length} active products\n`);

    for (const product of products.data) {
      const prices = await stripe.prices.list({
        product: product.id,
        active: true,
      });

      if (prices.data.length > 0) {
        const price = prices.data[0];
        const sku = product.metadata.sku || 'NO-SKU';

        priceMapping[sku] = price.id;

        productDetails.push({
          name: product.name,
          sku: sku,
          productId: product.id,
          priceId: price.id,
          amount: `$${(price.unit_amount / 100).toFixed(2)}`,
          currency: price.currency.toUpperCase(),
        });

        console.log(`✓ ${product.name}`);
        console.log(`  SKU: ${sku}`);
        console.log(`  Product ID: ${product.id}`);
        console.log(`  Price ID: ${price.id}`);
        console.log(`  Amount: $${(price.unit_amount / 100).toFixed(2)} ${price.currency.toUpperCase()}\n`);
      }
    }

    console.log('\n====================================');
    console.log('STRIPE_PRICES MAPPING');
    console.log('====================================\n');
    console.log('Copy this to src/lib/stripe.ts:\n');
    console.log('export const STRIPE_PRICES = {');
    for (const [sku, priceId] of Object.entries(priceMapping)) {
      console.log(`  '${sku}': '${priceId}',`);
    }
    console.log('};\n');

  } catch (error) {
    console.error('Error fetching products:', error.message);
  }
}

fetchPrices();
