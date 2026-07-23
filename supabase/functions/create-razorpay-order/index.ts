import { corsHeaders } from 'npm:@supabase/supabase-js@2/cors';
import { z } from 'npm:zod@3.23.8';

const BodySchema = z.object({
  amount: z.number().int().min(100).max(10000000), // paise: ₹1 to ₹1,00,000
  currency: z.literal('INR').default('INR'),
  donor_name: z.string().trim().max(100).optional(),
});

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    const keyId = Deno.env.get('RAZORPAY_KEY_ID');
    const keySecret = Deno.env.get('RAZORPAY_KEY_SECRET');
    if (!keyId || !keySecret) {
      return new Response(
        JSON.stringify({ error: 'Razorpay credentials not configured' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } },
      );
    }

    const raw = await req.json().catch(() => null);
    const parsed = BodySchema.safeParse(raw);
    if (!parsed.success) {
      return new Response(
        JSON.stringify({ error: 'Invalid input', details: parsed.error.flatten().fieldErrors }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } },
      );
    }
    const { amount, currency, donor_name } = parsed.data;

    const auth = btoa(`${keyId}:${keySecret}`);
    const orderRes = await fetch('https://api.razorpay.com/v1/orders', {
      method: 'POST',
      headers: {
        'Authorization': `Basic ${auth}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        amount,
        currency,
        notes: donor_name ? { donor_name } : undefined,
      }),
    });

    if (!orderRes.ok) {
      const errBody = await orderRes.text();
      console.error(`Razorpay order create failed [${orderRes.status}]: ${errBody}`);
      return new Response(
        JSON.stringify({ error: 'Failed to create order', status: orderRes.status, details: errBody }),
        { status: orderRes.status, headers: { ...corsHeaders, 'Content-Type': 'application/json' } },
      );
    }

    const order = await orderRes.json();
    return new Response(
      JSON.stringify({
        order_id: order.id,
        amount: order.amount,
        currency: order.currency,
        key_id: keyId,
      }),
      { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } },
    );
  } catch (err) {
    console.error('create-razorpay-order error:', err);
    return new Response(
      JSON.stringify({ error: 'Internal error', message: (err as Error).message }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } },
    );
  }
});
