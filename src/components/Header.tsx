import { Search, ShoppingCart, Heart, User, Menu, X } from "lucide-react";
import { useState } from "react";

const navItems = [
  { label: "Eid Collection", href: "#" },
  { label: "Men's", href: "#" },
  { label: "Women's", href: "#" },
  { label: "Accessories", href: "#" },
  { label: "Perfume Oil (Attar)", href: "#" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      {/* Top bar */}
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        {/* Search */}
        <div className="hidden md:flex items-center gap-2 bg-secondary rounded-full px-4 py-2 w-72">
          <Search className="w-4 h-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent outline-none text-sm text-foreground placeholder:text-muted-foreground w-full font-body"
          />
        </div>

        {/* Logo */}
        <div className="flex flex-col items-center">
          <h1 className="font-display text-xl md:text-2xl font-bold text-primary tracking-wide">
            Sunnah for Ummah
          </h1>
          <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground font-body font-semibold">
            Sunnah Is The Best Lifestyle Was Created By The Best Men Ever Lived On Earth
          </span>
        </div>

        {/* Icons */}
        <div className="flex items-center gap-3">
          <button className="md:hidden p-2" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
          <div className="hidden md:flex items-center gap-1 text-sm text-muted-foreground font-body">
            <span>৳</span>
            <span>0.00</span>
          </div>
          <button className="relative p-2 hover:text-primary transition-colors">
            <ShoppingCart className="w-5 h-5" />
            <span className="absolute -top-0.5 -right-0.5 bg-primary text-primary-foreground text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-body">
              0
            </span>
          </button>
          <button className="relative p-2 hover:text-primary transition-colors hidden md:block">
            <Heart className="w-5 h-5" />
            <span className="absolute -top-0.5 -right-0.5 bg-primary text-primary-foreground text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-body">
              0
            </span>
          </button>
          <button className="p-2 hover:text-primary transition-colors hidden md:block">
            <User className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Navigation */}
      <nav className="hidden md:block border-t border-border">
        <div className="container mx-auto flex items-center justify-center gap-8 px-4 py-2.5">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-body font-medium text-foreground hover:text-primary transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>
      </nav>

      {/* Mobile nav */}
      {mobileOpen && (
        <nav className="md:hidden border-t border-border bg-background">
          <div className="flex flex-col px-4 py-3 gap-3">
            <div className="flex items-center gap-2 bg-secondary rounded-full px-4 py-2">
              <Search className="w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search"
                className="bg-transparent outline-none text-sm text-foreground placeholder:text-muted-foreground w-full font-body"
              />
            </div>
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-body font-medium text-foreground hover:text-primary transition-colors py-1"
              >
                {item.label}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
