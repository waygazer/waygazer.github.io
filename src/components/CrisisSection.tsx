import { AlertTriangle, Trash2, Bug, Waves } from "lucide-react";

const crisisItems = [
  {
    icon: Waves,
    title: "Sewage Ingress",
    desc: "Over 10.9 million litres of untreated sewage enters the lake daily through stormwater drains, causing severe microbial contamination with high BOD and fecal coliform counts.",
  },
  {
    icon: AlertTriangle,
    title: "Water Hyacinth Invasion",
    desc: "Approximately 80% of the lake's surface is smothered by invasive water hyacinth, depleting dissolved oxygen and threatening aquatic life including the native crocodile population.",
  },
  {
    icon: Trash2,
    title: "Solid Waste & Silt",
    desc: "Years of debris accumulation, construction waste, and sedimentation have drastically reduced the lake's water-carrying capacity and self-purification ability.",
  },
  {
    icon: Bug,
    title: "Biodiversity Loss",
    desc: "Native fish species and migratory birds have declined sharply. Invasive species like tilapia have displaced indigenous aquatic life, disrupting the food chain.",
  },
];

const CrisisSection = () => (
  <section id="crisis" className="py-20 md:py-28 bg-sand">
    <div className="container mx-auto px-4">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <p className="text-earth font-semibold text-sm tracking-widest uppercase mb-3">The Crisis</p>
        <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-6">
          A Lake in Distress
        </h2>
        <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
          Dr. Rakesh Bakshi's petition to the NGT painted a grim picture — untreated sewage, invasive vegetation,
          and decades of neglect have pushed Powai Lake to the brink. The National Green Tribunal took suo motu
          cognizance and constituted a Joint Committee comprising CPCB, MPCB, and the Maharashtra State Wetland Authority.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {crisisItems.map((item) => (
          <div key={item.title} className="bg-card rounded-xl p-8 shadow-card border border-border flex gap-5">
            <div className="shrink-0 w-12 h-12 rounded-lg bg-destructive/10 flex items-center justify-center">
              <item.icon className="w-6 h-6 text-destructive" />
            </div>
            <div>
              <h3 className="font-heading text-xl font-semibold text-foreground mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default CrisisSection;
