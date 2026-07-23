Add a donation call-to-action and dedicated donation section to the single-page PLRF website.

## Changes

1. **Hero CTA**
   - Add a "Donate" button alongside the existing "Explore the 12-Point Program" and "Join the Movement" buttons in `src/components/HeroSection.tsx`.
   - The button scrolls to the new `#donate` section.

2. **New Donate section**
   - Create `src/components/DonateSection.tsx`.
   - Content: a brief appeal for contributions, a UPI ID display (e.g. `powailake@upi`), a QR-code placeholder image, and a note that donors can give any amount of their wish.
   - Use the existing blue-green nature color palette and card/shadow styles.
   - Add `id="donate"` so the hero button can scroll to it.

3. **Page integration**
   - Import and render `DonateSection` in `src/pages/Index.tsx`, placing it between `NewsSection` and `ContactSection`.

4. **Navigation**
   - Add a "Donate" link to the nav array in `src/components/Navbar.tsx`, pointing to `#donate`.

## No payment integration

This is a simple informational donation section (UPI ID + QR placeholder) as requested, so no backend, payments, or Lovable Cloud setup is needed.
