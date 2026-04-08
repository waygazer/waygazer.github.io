import { Droplets, Trees, Building2 } from "lucide-react";

const stats = [
  { value: "2.34", unit: "km²", label: "Lake Area" },
  { value: "30%", unit: "", label: "Surface covered by Water Hyacinth" },
  { value: "18", unit: "MLD", label: "Untreated Sewage Inflow" },
  { value: "₹66", unit: "Cr", label: "BMC Restoration Budget" },
];

const AboutSection = () => (
  <section id="about" className="py-20 md:py-28 bg-background">
    <div className="container mx-auto px-4">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <p className="text-lake-light font-semibold text-sm tracking-widest uppercase mb-3">About the Lake</p>
        <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-6">
          Mumbai's Iconic Freshwater Reservoir
        </h2>
        <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
          Powai Lake, nestled in Mumbai's northern suburbs, is encircled by the Sanjay Gandhi National Park,
          the prestigious IIT Bombay, and the Hiranandani Gardens. Once a vital backup source of potable water,
          the lake boasted a rich aquatic ecosystem of freshwater fish, migratory birds, marsh crocodiles, and native plant species.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
        {stats.map((s) => (
          <div key={s.label} className="bg-card rounded-xl p-6 text-center shadow-card border border-border">
            <p className="font-heading text-3xl md:text-4xl font-bold text-primary">
              {s.value}<span className="text-lg text-lake-light">{s.unit}</span>
            </p>
            <p className="text-muted-foreground text-sm mt-1">{s.label}</p>
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {[
          { icon: Droplets, title: "Freshwater Ecosystem", desc: "Home to marsh crocodiles, native fish species, and diverse aquatic flora that support Mumbai's urban biodiversity." },
          { icon: Trees, title: "Natural Heritage", desc: "Adjacent to the Sanjay Gandhi National Park, forming a critical green-blue corridor in one of the world's densest cities." },
          { icon: Building2, title: "Urban Landmark", desc: "Surrounded by IIT Bombay, Hiranandani Gardens, and major IT parks — a hub of education, business, and community life." },
        ].map((item) => (
          <div key={item.title} className="bg-card rounded-xl p-8 shadow-card border border-border hover:shadow-elevated transition-shadow">
            <div className="w-12 h-12 rounded-lg bg-lake-pale flex items-center justify-center mb-4">
              <item.icon className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-heading text-xl font-semibold text-foreground mb-2">{item.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default AboutSection;
