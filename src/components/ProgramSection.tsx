const programPoints = [
  { num: "01", title: "Water Quality Testing & Analysis", desc: "Comprehensive testing of water samples for BOD, COD, dissolved oxygen, heavy metals, fecal coliform, and chemical pollutants at multiple stations across the lake." },
  { num: "02", title: "Silt Composition Analysis", desc: "Laboratory analysis of sediment samples to determine contaminant load, organic matter content, and suitability for disposal or reuse." },
  { num: "03", title: "GIS Mapping of Data", desc: "All water quality and silt composition data values placed on detailed GIS maps of the lake for spatial analysis and decision support." },
  { num: "04", title: "Bathymetric Survey", desc: "Comprehensive bathymetry to assess water depths, sediment accumulation patterns, and determine the true water-carrying capacity of the lake." },
  { num: "05", title: "Desilting Operations", desc: "Scientific desilting informed by bathymetric and silt analysis data to restore the lake's depth, volume, and natural water retention capacity." },
  { num: "06", title: "Water Hyacinth Removal", desc: "Systematic removal of invasive water hyacinth and other floating vegetation to restore oxygen levels and allow sunlight penetration." },
  { num: "07", title: "Sewage Ingress Elimination", desc: "Identification and elimination of all sewage ingress points along the lake periphery, especially during dry weather flow conditions." },
  { num: "08", title: "Sewage Treatment Infrastructure", desc: "Establishment of an 8 MLD Sewage Treatment Plant and diversion of sewage lines away from the lake as part of BMC's ₹66 crore restoration plan." },
  { num: "09", title: "Biodiversity Census", desc: "Complete enumeration of all flora and fauna in the aquatic ecosystem — fish, amphibians, reptiles (including marsh crocodiles), birds, insects, and plant species." },
  { num: "10", title: "Shoreline & Wetland Restoration", desc: "Restoration of natural shoreline vegetation, creation of buffer zones, and regeneration of wetland habitats along the lake periphery." },
  { num: "11", title: "Community Engagement & Awareness", desc: "Citizen science programs, cleanup drives, and educational campaigns to involve local residents, students, and institutions in lake stewardship." },
  { num: "12", title: "Long-term Monitoring Framework", desc: "Establishment of continuous water quality monitoring stations with real-time data dashboards for transparent and accountable lake management." },
];

const ProgramSection = () => (
  <section id="program" className="py-20 md:py-28 bg-background">
    <div className="container mx-auto px-4">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <p className="text-lake-light font-semibold text-sm tracking-widest uppercase mb-3">Action Plan</p>
        <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-6">
          The 12-Point Rejuvenation Program
        </h2>
        <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
          Recommended by the NGT-constituted Joint Committee, this comprehensive program addresses
          every dimension of lake restoration — from scientific assessment to community stewardship.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {programPoints.map((p) => (
          <div
            key={p.num}
            className="group bg-card rounded-xl p-6 shadow-card border border-border hover:shadow-elevated hover:border-primary/30 transition-all"
          >
            <span className="font-heading text-4xl font-bold text-lake-pale group-hover:text-primary/20 transition-colors">
              {p.num}
            </span>
            <h3 className="font-heading text-lg font-semibold text-foreground mt-2 mb-2">{p.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{p.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ProgramSection;
