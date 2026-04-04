import { Search, ShoppingCart, Heart, User, Menu, X } from "lucide-react";
import { useState, useEffect, useRef } from "react";

const searchProducts = [
  "Premium Black Embroidered Panjabi",
  "Classic White Thobe",
  "Dawah T-Shirt",
  "Navy Blue Embroidered Panjabi",
  "Premium Attar Perfume Oil Set",
  "Beige Cotton Panjabi",
  "Olive Green Chino Pants",
  "Solid Premium T-Shirt",
];

const navItems = [
  { label: "Eid Collection", href: "#" },
  { label: "Men's", href: "#" },
  { label: "Women's", href: "#" },
  { label: "Accessories", href: "#" },
  { label: "Perfume Oil (Attar)", href: "#" },
];

const useTypingPlaceholder = (words: string[], typingSpeed = 80, deleteSpeed = 40, pauseMs = 1500) => {
  const [text, setText] = useState("");
  const idx = useRef(0);
  const charIdx = useRef(0);
  const deleting = useRef(false);

  useEffect(() => {
    const tick = () => {
      const current = words[idx.current];
      if (!deleting.current) {
        charIdx.current++;
        setText(current.slice(0, charIdx.current));
        if (charIdx.current === current.length) {
          deleting.current = true;
          return pauseMs;
        }
        return typingSpeed;
      } else {
        charIdx.current--;
        setText(current.slice(0, charIdx.current));
        if (charIdx.current === 0) {
          deleting.current = false;
          idx.current = (idx.current + 1) % words.length;
          return typingSpeed;
        }
        return deleteSpeed;
      }
    };

    let timer: ReturnType<typeof setTimeout>;
    const loop = () => {
      const delay = tick();
      timer = setTimeout(loop, delay);
    };
    timer = setTimeout(loop, typingSpeed);
    return () => clearTimeout(timer);
  }, [words, typingSpeed, deleteSpeed, pauseMs]);

  return text;
};

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const typingText = useTypingPlaceholder(searchProducts);

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      {/* Top bar */}
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        {/* Search */}
        <div className="hidden md:flex items-center gap-2 bg-secondary rounded-full px-4 py-2 w-72">
          <Search className="w-4 h-4 text-muted-foreground" />
          <input
            type="text"
            placeholder={typingText || "Search"}
            className="bg-transparent outline-none text-sm text-foreground placeholder:text-muted-foreground w-full font-body"
          />
        </div>

        {/* Logo */}
        <div className="flex flex-col items-center">
          <h1 className="font-display text-xl md:text-2xl font-bold text-primary tracking-wide">
            Sunnah For Ummah
          </h1>
          <span className="uppercase tracking-[0.3em] font-body text-xs font-bold text-emerald-light">
            SUNNAH: THE LEGACY OF THE BEST.
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
                placeholder={typingText || "Search"}
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
