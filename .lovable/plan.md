## Goal
Replace the UPI-only donation block with a working **Razorpay** donation flow (India-friendly, supports UPI, cards, netbanking, wallets) while keeping the existing UPI/QR option as a fallback.

## Approach
Razorpay isn't a built-in Lovable integration, so we'll wire it up as a bring-your-own-key setup using Lovable Cloud + an edge function. This is the standard, secure pattern (secret key never touches the browser).

## Steps

1. **Enable Lovable Cloud** on the project (needed for the edge function + secret storage).

2. **Collect Razorpay credentials from you** (after Cloud is on):
   - `RAZORPAY_KEY_ID` (public-ish, but stored as a secret)
   - `RAZORPAY_KEY_SECRET` (server-only)
   - You'll get these from Razorpay Dashboard → Settings → API Keys. Test-mode keys work for validating the flow before you go live.

3. **Create edge function `create-razorpay-order`**
   - Accepts `{ amount, currency: "INR", donor_name? }` from the client.
   - Validates input (min amount, integer paise).
   - Calls Razorpay Orders API using the secret key.
   - Returns `{ order_id, amount, currency, key_id }` to the client.

4. **Create edge function `verify-razorpay-payment`**
   - Accepts `{ razorpay_order_id, razorpay_payment_id, razorpay_signature }`.
   - Verifies HMAC-SHA256 signature with the secret key.
   - Returns success/failure. (No DB write for now — pure verification.)

5. **Update `ContactSection.tsx` (Get Involved)**
   - Keep the UPI ID + QR card as-is (fallback).
   - Add a new "Donate Online" card with:
     - Amount input + preset chips (₹500 / ₹1000 / ₹2500 / ₹5000 / Custom).
     - "Donate with Razorpay" button.
   - On click: call `create-razorpay-order`, load Razorpay Checkout script, open modal, then call `verify-razorpay-payment` in the handler and show a thank-you toast.

6. **Styling** — match existing teal/green theme, semantic tokens only.

## Technical notes
- Razorpay Checkout script loaded dynamically from `https://checkout.razorpay.com/v1/checkout.js` when the user clicks Donate (no perf cost on page load).
- Amounts sent to Razorpay in **paise** (₹100 = 10000).
- No user accounts / no DB persistence in v1 — just checkout + verification. We can add a `donations` table later if you want a receipt log or admin dashboard.
- Both edge functions run with `verify_jwt = false` (public donations, no login required) and include CORS headers.

## Not included (ask if you want them)
- Storing donations in a database / donor receipts by email.
- Razorpay webhook handler (useful for async payment methods like some UPI flows; can add later).
- 80G tax-receipt PDFs.

Confirm and I'll enable Lovable Cloud and start building.