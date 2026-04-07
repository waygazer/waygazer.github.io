import { FlaskConical, MapPin, Ruler, Leaf } from "lucide-react";

const initiatives = [
  {
    icon: FlaskConical,
    title: "Water & Silt Testing",
    desc: "Comprehensive laboratory analysis of water samples and silt composition to build a scientific baseline for restoration decisions. Parameters include BOD, COD, dissolved oxygen, pH, heavy metals, and microbial load.",
  },
  {
    icon: MapPin,
    title: "GIS Data Mapping",
    desc: "All analytical data values will be geo-referenced and placed on high-resolution GIS maps of the lake, enabling spatial visualization of pollution hotspots, silt distribution, and water quality gradients.",
  },
  {
    icon: Ruler,
    title: "Bathymetric Survey",
    desc: "Detailed bathymetry to map the lake bed topography, measure water depths at hundreds of points, and quantify sediment accumulation — essential for planning targeted desilting operations.",
  },
  {
    icon: Leaf,
    title: "Biodiversity Census",
    desc: "A comprehensive enumeration of the lake's aquatic ecosystem — cataloguing fish species, marsh crocodiles, migratory and resident birds, amphibians, insects, and aquatic plant communities.",
  },
];

const InitiativesSection = () => (
  <section id="initiatives" className="py-20 md:py-28 bg-gradient-hero text-primary-foreground">
    <div className="container mx-auto px-4">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <p className="text-gold-light font-semibold text-sm tracking-widest uppercase mb-3">Current Initiatives</p>
        <h2 className="font-heading text-3xl md:text-5xl font-bold mb-6">
          Science-Driven Restoration
        </h2>
        <p className="text-lake-pale/80 leading-relaxed text-base md:text-lg">
          GreenYatra and our partner organizations are deploying cutting-edge scientific methods
          to understand the lake's condition and guide evidence-based restoration.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {initiatives.map((item) => (
          <div key={item.title} className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-8 border border-primary-foreground/15 hover:bg-primary-foreground/15 transition-colors">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-lg bg-gold/20 flex items-center justify-center">
                <item.icon className="w-6 h-6 text-gold" />
              </div>
              <h3 className="font-heading text-xl font-semibold">{item.title}</h3>
            </div>
            <p className="text-lake-pale/80 text-sm leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default InitiativesSection;
