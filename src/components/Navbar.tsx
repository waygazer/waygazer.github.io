import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "The Crisis", href: "#crisis" },
  { label: "12-Point Program", href: "#program" },
  { label: "Initiatives", href: "#initiatives" },
  { label: "News", href: "#news" },
  { label: "Get Involved", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/90 backdrop-blur-md border-b border-border">
      <div className="container mx-auto flex items-center justify-between py-3 px-4">
        <a href="#" className="flex items-center gap-2">
          <img src={logo} alt="PLRF Logo" className="h-10 w-10 rounded-full" />
          <div className="leading-tight">
            <span className="font-heading text-lg font-bold text-primary block">Powai Lake</span>
            <span className="text-xs text-muted-foreground tracking-wide">Rejuvenation Forum</span>
          </div>
        </a>

        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
              {l.label}
            </a>
          ))}
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden text-foreground">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-card border-b border-border px-4 pb-4 space-y-3">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block text-sm font-medium text-foreground/80 hover:text-primary">
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
