import ProductCard from "./ProductCard";
import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";
import product4 from "@/assets/product-4.jpg";
import product5 from "@/assets/product-5.jpg";
import product6 from "@/assets/product-6.jpg";
import product7 from "@/assets/product-7.jpg";
import product8 from "@/assets/product-8.jpg";

const products = [
  { name: "Premium Black Embroidered Panjabi", price: 2490, image: product1, badge: "New" },
  { name: "Classic White Thobe - Premium Cotton", price: 1990, image: product2 },
  { name: "Dawah T-Shirt - Calligraphy Edition", price: 590, image: product3, badge: "New" },
  { name: "Navy Blue Embroidered Panjabi", price: 2290, originalPrice: 2790, image: product4 },
  { name: "Premium Attar Perfume Oil Set", price: 1250, image: product5, badge: "Bestseller" },
  { name: "Beige Cotton Panjabi - Classic Fit", price: 1690, originalPrice: 1990, image: product6 },
  { name: "Olive Green Chino Pants", price: 890, image: product7 },
  { name: "Solid Premium T-Shirt - Gray", price: 490, originalPrice: 590, image: product8 },
];

const NewArrivals = () => {
  return (
    <section className="container mx-auto px-4 py-12">
      <div className="flex items-center justify-between mb-8">
        <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">
          New Arrivals
        </h2>
        <a
          href="#"
          className="font-body text-sm font-medium text-primary hover:text-emerald-light transition-colors underline underline-offset-4"
        >
          View All
        </a>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {products.map((product, i) => (
          <ProductCard key={i} {...product} />
        ))}
      </div>
    </section>
  );
};

export default NewArrivals;
