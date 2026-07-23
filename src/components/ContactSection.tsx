import { MapPin, Globe, Heart, Copy, Check } from "lucide-react";
import { useState } from "react";
import qrPlaceholder from "@/assets/placeholder.svg";

const ContactSection = () => {
  const [copied, setCopied] = useState(false);
  const upiId = "powailake@upi";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(upiId);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // ignore clipboard errors
    }
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-lake-light font-semibold text-sm tracking-widest uppercase mb-3">Get Involved</p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-6">
            Join the Rejuvenation Movement
          </h2>
          <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
            Whether you're a resident, researcher, environmentalist, or institution —
            your participation is vital to restoring Powai Lake for future generations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto mb-16">
          <div className="bg-card rounded-xl p-8 shadow-card border border-border text-center">
            <div className="w-14 h-14 rounded-full bg-lake-pale mx-auto flex items-center justify-center mb-4">
              <MapPin className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-heading text-lg font-semibold text-foreground mb-1">Location</h3>
            <p className="text-muted-foreground text-sm">Powai, Mumbai 400076<br/>Maharashtra, India</p>
          </div>
          <div className="bg-card rounded-xl p-8 shadow-card border border-border text-center">
            <div className="w-14 h-14 rounded-full bg-lake-pale mx-auto flex items-center justify-center mb-4">
              <Globe className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-heading text-lg font-semibold text-foreground mb-1">Website</h3>
            <p className="text-muted-foreground text-sm">www.powailake.in</p>
          </div>
        </div>

        <div className="max-w-2xl mx-auto bg-card rounded-2xl p-8 md:p-12 shadow-card border border-border text-center">
          <div className="w-16 h-16 rounded-full bg-gradient-nature mx-auto flex items-center justify-center mb-6">
            <Heart className="w-8 h-8 text-primary-foreground" />
          </div>

          <h3 className="font-heading text-xl md:text-2xl font-semibold text-foreground mb-2">
            Donate Any Amount You Wish
          </h3>
          <p className="text-muted-foreground text-sm md:text-base mb-8">
            Your contribution helps fund water testing, GIS mapping, bathymetric surveys,
            and community-driven restoration efforts.
          </p>

          <div className="flex flex-col items-center gap-6">
            <div className="bg-white rounded-xl p-4 shadow-soft border border-border">
              <img
                src={qrPlaceholder}
                alt="UPI QR code placeholder for donating to Powai Lake Rejuvenation Forum"
                className="w-48 h-48 md:w-56 md:h-56 object-contain"
              />
            </div>

            <div className="w-full max-w-sm">
              <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">UPI ID</p>
              <button
                onClick={handleCopy}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg border border-border bg-muted hover:bg-muted/80 transition-colors"
                aria-label="Copy UPI ID"
              >
                <span className="font-mono text-base md:text-lg text-foreground">{upiId}</span>
                {copied ? <Check className="w-4 h-4 text-forest" /> : <Copy className="w-4 h-4 text-muted-foreground" />}
              </button>
              {copied && (
                <p className="text-xs text-forest mt-2 text-center">UPI ID copied to clipboard</p>
              )}
            </div>
          </div>

          <p className="text-xs text-muted-foreground mt-8">
            Supported by Concerned Citizens · Powai Lake Rejuvenation Forum
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
