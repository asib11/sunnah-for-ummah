import heroBanner from "@/assets/hero-banner.jpg";

const HeroBanner = () => {
  return (
    <section className="relative w-full overflow-hidden">
      <div className="relative">
        <img
          src={heroBanner}
          alt="Sunnah for Ummah - Islamic Clothing Collection"
          width={1920}
          height={800}
          className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/40 to-transparent" />
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-lg">
              <p className="text-primary-foreground/80 text-xs md:text-sm uppercase tracking-[0.3em] font-body mb-2">
                Sunnah Is The Best Lifestyle Was Created By The Best Men Ever Lived On Earth
              </p>
              <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-4">
                Follow the Sunnah,{" "}
                <span className="text-gold">Elevate</span> Your Style
              </h2>
              <button className="bg-primary text-primary-foreground px-6 py-3 rounded-full text-sm font-body font-semibold hover:bg-emerald-light transition-colors">
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
