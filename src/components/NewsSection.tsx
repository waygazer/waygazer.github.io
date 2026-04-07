import { ExternalLink } from "lucide-react";

const newsItems = [
  {
    date: "Jul 2025",
    title: "NGT Constitutes Joint Committee for Powai Lake",
    source: "Free Press Journal",
    url: "https://www.freepressjournal.in/mumbai/mumbai-news-ngt-orders-joint-committee-to-assess-and-recommend-remedial-measures-for-deteriorating-powai-lake",
    desc: "The National Green Tribunal's Principal Bench directed formation of a Joint Committee comprising CPCB, MPCB, and Maharashtra State Wetland Authority to assess and recommend remedial measures.",
  },
  {
    date: "Dec 2025",
    title: "NGT Panel Recommends ₹5 Lakh Penalty on BMC Per Inlet",
    source: "Deccan Herald",
    url: "https://www.deccanherald.com/india/maharashtra/ngt-panel-moots-rs-5-lakh-per-inlet-penalty-to-bmc-for-powai-lake-lapses-3820577",
    desc: "The Joint Committee recommended strict penalties for continued discharge of untreated sewage into the lake, urging BMC accountability.",
  },
  {
    date: "2025",
    title: "BMC Launches ₹66-Crore Restoration Project",
    source: "Free Press Journal",
    url: "https://www.freepressjournal.in/mumbai/mumbai-news-bmc-launches-66-crore-powai-lake-restoration-project-with-new-stp-sewage-diversion-and-hyacinth-removal",
    desc: "BMC initiated an 8 MLD Sewage Treatment Plant, sewage line diversion, and intensified water hyacinth removal. Over 1,450 metric tons removed in just 10 days.",
  },
];

const NewsSection = () => (
  <section id="news" className="py-20 md:py-28 bg-sand">
    <div className="container mx-auto px-4">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <p className="text-earth font-semibold text-sm tracking-widest uppercase mb-3">In the News</p>
        <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-6">
          Latest Developments
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {newsItems.map((item) => (
          <a
            key={item.title}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-card rounded-xl p-6 shadow-card border border-border hover:shadow-elevated transition-all block"
          >
            <p className="text-xs text-lake-light font-semibold tracking-wider uppercase mb-2">{item.date}</p>
            <h3 className="font-heading text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
              {item.title}
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-3">{item.desc}</p>
            <span className="inline-flex items-center gap-1 text-xs text-primary font-medium">
              {item.source} <ExternalLink size={12} />
            </span>
          </a>
        ))}
      </div>
    </div>
  </section>
);

export default NewsSection;
