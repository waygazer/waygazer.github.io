import { Mail, MapPin, Globe } from "lucide-react";

const ContactSection = () => (
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

      <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        <div className="bg-card rounded-xl p-8 shadow-card border border-border text-center">
          <div className="w-14 h-14 rounded-full bg-lake-pale mx-auto flex items-center justify-center mb-4">
            <Mail className="w-6 h-6 text-primary" />
          </div>
          <h3 className="font-heading text-lg font-semibold text-foreground mb-1">Write to Us</h3>
          <p className="text-muted-foreground text-sm">info@powailake.in</p>
        </div>
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
    </div>
  </section>
);

export default ContactSection;
