import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import pkgHajjCombo from "@/assets/pkg-hajj-combo.jpg";
import pkgHajjMen from "@/assets/pkg-hajj-men.jpg";
import pkgHajjMenPremium from "@/assets/pkg-hajj-men-premium.jpg";
import pkgHajjWomen from "@/assets/pkg-hajj-women.jpg";
import pkgUmrahCombo from "@/assets/pkg-umrah-combo.jpg";
import pkgUmrahMen from "@/assets/pkg-umrah-men.jpg";
import pkgUmrahWomen from "@/assets/pkg-umrah-women.jpg";

type Package = {
  title: string;
  bangla: string;
  price: number;
  oldPrice?: number;
  badge?: string;
  image: string;
};

const packages: Package[] = [
  {
    title: "Hajj Package (Men & Women)",
    bangla: "হজ্জ প্যাকেজ (পুরুষ ও মহিলা)",
    price: 10500,
    oldPrice: 12000,
    badge: "Best Value",
    image: pkgHajjCombo,
  },
  {
    title: "Hajj Package (Men)",
    bangla: "হজ্জ প্যাকেজ (পুরুষ)",
    price: 6000,
    image: pkgHajjMen,
  },
  {
    title: "Hajj Package (Men) Premium",
    bangla: "হজ্জ প্যাকেজ (পুরুষ) প্রিমিয়াম",
    price: 8000,
    badge: "Premium",
    image: pkgHajjMenPremium,
  },
  {
    title: "Hajj Package (Women)",
    bangla: "হজ্জ প্যাকেজ (মহিলা)",
    price: 6000,
    image: pkgHajjWomen,
  },
  {
    title: "Umrah Package (Men & Women)",
    bangla: "উমরা প্যাকেজ (পুরুষ ও মহিলা)",
    price: 4700,
    oldPrice: 4900,
    badge: "Popular",
    image: pkgUmrahCombo,
  },
  {
    title: "Umrah Package (Men)",
    bangla: "উমরা প্যাকেজ (পুরুষ)",
    price: 2500,
    image: pkgUmrahMen,
  },
  {
    title: "Umrah Package (Women)",
    bangla: "উমরা প্যাকেজ (মহিলা)",
    price: 2400,
    image: pkgUmrahWomen,
  },
];

const HajjPackages = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-secondary/40 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="font-body text-sm font-semibold tracking-[0.2em] uppercase text-accent">
            Hajj &amp; Umrah Kits
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2">
            Choose Your Package
          </h2>
          <p className="font-body text-muted-foreground mt-3 max-w-xl mx-auto">
            Select the perfect kit for your sacred journey — carefully curated, quality-assured.
          </p>
          <div className="w-16 h-1 bg-accent mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {packages.map((pkg) => {
            const savings = pkg.oldPrice ? pkg.oldPrice - pkg.price : 0;
            return (
              <article
                key={pkg.title}
                className="group relative flex flex-col rounded-2xl overflow-hidden bg-card border border-border shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-hover)] transition-all duration-500 hover:-translate-y-1"
              >
                {pkg.badge && (
                  <span className="absolute top-3 left-3 z-10 font-body text-[10px] font-bold tracking-[0.15em] uppercase px-3 py-1 rounded-full bg-accent text-accent-foreground shadow-md">
                    {pkg.badge}
                  </span>
                )}

                <div className="relative aspect-square overflow-hidden bg-muted">
                  <img
                    src={pkg.image}
                    alt={pkg.title}
                    loading="lazy"
                    width={800}
                    height={800}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                <div className="flex flex-col flex-1 p-5">
                  <h3 className="font-display text-lg font-bold text-foreground leading-snug">
                    {pkg.title}
                  </h3>
                  <p className="font-body text-sm text-muted-foreground mt-1">
                    {pkg.bangla}
                  </p>

                  <div className="mt-4 flex items-baseline gap-2">
                    <span className="font-display text-2xl font-bold text-primary">
                      ৳{pkg.price.toLocaleString()}
                    </span>
                    {pkg.oldPrice && (
                      <span className="font-body text-sm text-muted-foreground line-through">
                        ৳{pkg.oldPrice.toLocaleString()}
                      </span>
                    )}
                  </div>
                  {savings > 0 && (
                    <span className="mt-1 inline-flex items-center gap-1 font-body text-xs font-semibold text-accent">
                      <Check className="w-3 h-3" /> Save ৳{savings.toLocaleString()}
                    </span>
                  )}

                  <Button
                    className="mt-5 w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                    size="sm"
                  >
                    Select Package
                  </Button>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HajjPackages;
