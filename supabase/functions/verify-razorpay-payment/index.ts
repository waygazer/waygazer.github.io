import { corsHeaders } from 'npm:@supabase/supabase-js@2/cors';
import { z } from 'npm:zod@3.23.8';

const BodySchema = z.object({
  razorpay_order_id: z.string().min(1).max(100),
  razorpay_payment_id: z.string().min(1).max(100),
  razorpay_signature: z.string().min(1).max(256),
});

async function hmacSha256Hex(key: string, message: string): Promise<string> {
  const enc = new TextEncoder();
  const cryptoKey = await crypto.subtle.importKey(
    'raw',
    enc.encode(key),
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign'],
  );
  const sig = await crypto.subtle.sign('HMAC', cryptoKey, enc.encode(message));
  return Array.from(new Uint8Array(sig))
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('');
}

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    const keySecret = Deno.env.get('RAZORPAY_KEY_SECRET');
    if (!keySecret) {
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
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = parsed.data;

    const expected = await hmacSha256Hex(keySecret, `${razorpay_order_id}|${razorpay_payment_id}`);
    const valid = expected === razorpay_signature;

    if (!valid) {
      return new Response(
        JSON.stringify({ verified: false, error: 'Signature mismatch' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } },
      );
    }

    return new Response(
      JSON.stringify({ verified: true, payment_id: razorpay_payment_id, order_id: razorpay_order_id }),
      { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } },
    );
  } catch (err) {
    console.error('verify-razorpay-payment error:', err);
    return new Response(
      JSON.stringify({ error: 'Internal error', message: (err as Error).message }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } },
    );
  }
});
