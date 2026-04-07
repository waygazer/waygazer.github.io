import heroImg from "@/assets/hero-lake.jpg";

const HeroSection = () => (
  <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
    <img
      src={heroImg}
      alt="Aerial view of Powai Lake, Mumbai"
      className="absolute inset-0 w-full h-full object-cover"
      width={1920}
      height={1080}
    />
    <div className="absolute inset-0 bg-gradient-hero opacity-70" />
    <div className="absolute inset-0 bg-gradient-to-t from-lake-deep/90 via-transparent to-transparent" />

    <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
      <p className="animate-fade-up text-gold-light font-body text-sm md:text-base tracking-[0.3em] uppercase mb-4">
        A Citizen Scientists' Initiative
      </p>
      <h1 className="animate-fade-up-delay-1 font-heading text-4xl sm:text-5xl md:text-7xl font-bold text-primary-foreground leading-tight mb-6">
        Powai Lake<br />
        <span className="text-gold">Rejuvenation Forum</span>
      </h1>
      <p className="animate-fade-up-delay-2 text-lake-pale/90 text-base md:text-xl max-w-2xl mx-auto mb-8 font-light leading-relaxed">
        Restoring Mumbai's iconic freshwater ecosystem through science-driven action,
        community engagement, and a comprehensive 12-point rejuvenation program.
      </p>
      <div className="animate-fade-up-delay-3 flex flex-col sm:flex-row gap-4 justify-center">
        <a href="#program" className="inline-block px-8 py-3 rounded-lg bg-gold text-accent-foreground font-semibold text-sm hover:brightness-110 transition-all shadow-elevated">
          Explore the 12-Point Program
        </a>
        <a href="#contact" className="inline-block px-8 py-3 rounded-lg border-2 border-primary-foreground/40 text-primary-foreground font-semibold text-sm hover:bg-primary-foreground/10 transition-all">
          Join the Movement
        </a>
      </div>
    </div>

    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
      <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/40 flex items-start justify-center p-1">
        <div className="w-1.5 h-3 rounded-full bg-primary-foreground/60" />
      </div>
    </div>
  </section>
);

export default HeroSection;
