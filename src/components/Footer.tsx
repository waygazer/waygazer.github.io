import logo from "@/assets/logo.png";

const Footer = () => (
  <footer className="bg-gradient-hero text-primary-foreground py-12">
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <img src={logo} alt="PLRF Logo" className="h-10 w-10 rounded-full brightness-200" loading="lazy" />
          <div>
            <p className="font-heading font-bold text-lg">Powai Lake Rejuvenation Forum</p>
            <p className="text-lake-pale/70 text-xs">Restoring Mumbai's Urban Oasis</p>
          </div>
        </div>
        <div className="text-center md:text-right">
          <p className="text-lake-pale/70 text-xs">
            Domain: powailake.in &middot; Supported by Concerned Citizens
          </p>
          <p className="text-lake-pale/50 text-xs mt-1">
            &copy; {new Date().getFullYear()} Powai Lake Rejuvenation Forum. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
