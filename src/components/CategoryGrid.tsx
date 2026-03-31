import catPanjabi from "@/assets/cat-panjabi.jpg";
import catThobe from "@/assets/cat-thobe.jpg";
import catTshirt from "@/assets/cat-tshirt.jpg";
import catKifaya from "@/assets/cat-kifaya.jpg";
import catAttar from "@/assets/cat-attar.jpg";
import catAccessories from "@/assets/cat-accessories.jpg";

const categories = [
  { name: "Premium Panjabi", image: catPanjabi },
  { name: "Thobe", image: catThobe },
  { name: "Dawah T-Shirt", image: catTshirt },
  { name: "Kifaya", image: catKifaya },
  { name: "Perfume Oil (Attar)", image: catAttar },
  { name: "Accessories", image: catAccessories },
];

const CategoryGrid = () => {
  return (
    <section className="container mx-auto px-4 py-12">
      <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground text-center mb-8">
        Shop by Category
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
        {categories.map((cat) => (
          <a
            key={cat.name}
            href="#"
            className="group relative overflow-hidden rounded-xl aspect-square"
          >
            <img
              src={cat.image}
              alt={cat.name}
              loading="lazy"
              width={640}
              height={640}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-3">
              <span className="font-body text-sm font-semibold text-primary-foreground capitalize">
                {cat.name}
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default CategoryGrid;
