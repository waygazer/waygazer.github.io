import { MapPin, Globe, Heart, CreditCard, Loader2 } from "lucide-react";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

declare global {
  interface Window {
    Razorpay?: new (options: Record<string, unknown>) => { open: () => void };
  }
}

const PRESETS = [500, 1000, 2500, 5000];

function loadRazorpayScript(): Promise<boolean> {
  return new Promise((resolve) => {
    if (window.Razorpay) return resolve(true);
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
}

const ContactSection = () => {
  const [amount, setAmount] = useState<number | "">(1000);
  const [donorName, setDonorName] = useState("");
  const [loading, setLoading] = useState(false);

  const handleDonate = async () => {
    const rupees = typeof amount === "number" ? amount : parseInt(String(amount), 10);
    if (!rupees || rupees < 1) {
      toast.error("Please enter a valid amount");
      return;
    }
    if (rupees > 100000) {
      toast.error("Maximum online donation is ₹1,00,000.");
      return;
    }

    setLoading(true);
    try {
      const scriptOk = await loadRazorpayScript();
      if (!scriptOk) {
        toast.error("Could not load payment gateway. Please try again.");
        return;
      }

      const { data, error } = await supabase.functions.invoke("create-razorpay-order", {
        body: {
          amount: rupees * 100, // paise
          currency: "INR",
          donor_name: donorName.trim() || undefined,
        },
      });

      if (error || !data?.order_id) {
        console.error("Order creation failed:", error, data);
        toast.error("Could not initiate payment. Please try again.");
        return;
      }

      const rzp = new window.Razorpay!({
        key: data.key_id,
        amount: data.amount,
        currency: data.currency,
        order_id: data.order_id,
        name: "Powai Lake Rejuvenation Forum",
        description: "Donation towards lake restoration",
        image: `${import.meta.env.BASE_URL}placeholder.svg`,
        prefill: donorName.trim() ? { name: donorName.trim() } : undefined,
        theme: { color: "#2e9985" },
        handler: async (response: {
          razorpay_order_id: string;
          razorpay_payment_id: string;
          razorpay_signature: string;
        }) => {
          const { data: verifyData, error: verifyErr } = await supabase.functions.invoke(
            "verify-razorpay-payment",
            { body: response },
          );
          if (verifyErr || !verifyData?.verified) {
            toast.error("Payment received but verification failed. We'll follow up.");
            return;
          }
          toast.success("Thank you for supporting Powai Lake! 🌿", {
            description: `Payment ID: ${response.razorpay_payment_id}`,
          });
        },
        modal: {
          ondismiss: () => setLoading(false),
        },
      });
      rzp.open();
    } catch (err) {
      console.error("Donate error:", err);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
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

        <div className="max-w-2xl mx-auto bg-card rounded-2xl p-8 md:p-12 shadow-card border border-border">
          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-gradient-nature mx-auto flex items-center justify-center mb-6">
              <Heart className="w-8 h-8 text-primary-foreground" />
            </div>
            <h3 className="font-heading text-xl md:text-2xl font-semibold text-foreground mb-2">
              Support the Restoration
            </h3>
            <p className="text-muted-foreground text-sm md:text-base mb-8">
              Your contribution helps fund water testing, GIS mapping, bathymetric surveys,
              and community-driven restoration efforts.
            </p>
          </div>

          {/* Online donation via Razorpay */}
          <div className="mb-10">
            <p className="text-xs font-semibold uppercase tracking-wider text-lake-light mb-4 text-center">
              Donate Online
            </p>
            <div className="flex flex-wrap gap-2 justify-center mb-4">
              {PRESETS.map((p) => (
                <button
                  key={p}
                  type="button"
                  onClick={() => setAmount(p)}
                  className={`px-4 py-2 rounded-lg border text-sm font-medium transition-colors ${
                    amount === p
                      ? "bg-primary text-primary-foreground border-primary"
                      : "bg-muted text-foreground border-border hover:bg-muted/70"
                  }`}
                >
                  ₹{p.toLocaleString("en-IN")}
                </button>
              ))}
            </div>
            <div className="grid sm:grid-cols-2 gap-3 mb-4">
              <div>
                <label className="text-xs text-muted-foreground mb-1 block">Amount (INR)</label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">₹</span>
                  <input
                    type="number"
                    min={1}
                    max={100000}
                    value={amount}
                    onChange={(e) => {
                      const v = e.target.value;
                      setAmount(v === "" ? "" : Math.max(0, parseInt(v, 10) || 0));
                    }}
                    placeholder="Enter amount"
                    className="w-full pl-7 pr-3 py-2.5 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/40"
                  />
                </div>
              </div>
              <div>
                <label className="text-xs text-muted-foreground mb-1 block">Name (optional)</label>
                <input
                  type="text"
                  maxLength={100}
                  value={donorName}
                  onChange={(e) => setDonorName(e.target.value)}
                  placeholder="Your name"
                  className="w-full px-3 py-2.5 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/40"
                />
              </div>
            </div>
            <button
              onClick={handleDonate}
              disabled={loading}
              className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" /> Processing…
                </>
              ) : (
                <>
                  <CreditCard className="w-4 h-4" />
                  Donate ₹{typeof amount === "number" ? amount.toLocaleString("en-IN") : "0"} with Razorpay
                </>
              )}
            </button>
            <p className="text-xs text-muted-foreground mt-2 text-center">
              Secure payment via Razorpay · UPI · Cards · Netbanking · Wallets
            </p>
          </div>

          <p className="text-xs text-muted-foreground mt-8 text-center">
            Supported by Concerned Citizens · Powai Lake Rejuvenation Forum
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
