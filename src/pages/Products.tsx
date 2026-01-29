import Layout from '@/components/Layout';
import ProductCard from '@/components/ProductCard';
import SectionTitle from '@/components/SectionTitle';
import ParticleBackground from '@/components/ParticleBackground';

// Product Images
import productBoppTape from '@/assets/product-bopp-tape.jpg';
import productColorTape from '@/assets/product-color-tape.jpg';
import productIndustrialTape from '@/assets/product-industrial-tape.jpg';
import productTransparentTape from '@/assets/product-transparent-tape.jpg';
import productAluminiumTape from '@/assets/product-aluminium-tape.jpg';
import productHighAdhesiveTape from '@/assets/product-high-adhesive-tape.jpg';
import productStretchFilm from '@/assets/product-stretch-film.jpg';
import productPpStrap from '@/assets/product-pp-strap.jpg';

const products = [
  {
    title: 'Packaging Tapes',
    description: 'High-quality BOPP packaging tapes designed for secure sealing and carton closure. Ideal for e-commerce, warehousing, and logistics.',
    image: productBoppTape,
    useCases: ['E-commerce', 'Warehousing', 'Shipping'],
  },
  {
    title: 'BOPP Color Tapes',
    description: 'Vibrant colored BOPP tapes available in any color of your choice. Perfect for branding, color coding, and product identification.',
    image: productColorTape,
    useCases: ['Branding', 'Color Coding', 'Custom'],
  },
  {
    title: 'Industrial Tapes',
    description: 'Heavy-duty industrial tapes engineered for demanding applications. Provides superior bonding strength and durability.',
    image: productIndustrialTape,
    useCases: ['Manufacturing', 'Heavy Duty', 'Industrial'],
  },
  {
    title: 'BOPP Transparent Tape',
    description: 'Crystal clear transparent tape for clean and professional packaging. Offers excellent clarity and adhesion properties.',
    image: productTransparentTape,
    useCases: ['Office', 'Retail', 'Packaging'],
  },
  {
    title: 'Aluminium Foil Tape',
    description: 'Premium aluminium foil tape for HVAC, insulation, and heat sealing applications. Heat resistant and highly durable.',
    image: productAluminiumTape,
    useCases: ['HVAC', 'Insulation', 'Heat Sealing'],
  },
  {
    title: 'High Adhesive BOPP Tape',
    description: 'Extra strong adhesive BOPP tape for secure carton sealing. Provides exceptional bonding even on challenging surfaces.',
    image: productHighAdhesiveTape,
    useCases: ['Heavy Boxes', 'Secure Sealing', 'Logistics'],
  },
  {
    title: 'Stretch Film',
    description: 'Premium stretch film for pallet wrapping and product protection. Excellent cling properties and puncture resistance.',
    image: productStretchFilm,
    useCases: ['Palletizing', 'Storage', 'Protection'],
  },
  {
    title: 'PP Strap',
    description: 'Polypropylene strapping for bundling and securing heavy loads. Available in various colors and widths.',
    image: productPpStrap,
    useCases: ['Bundling', 'Strapping', 'Heavy Loads'],
  },
];

const Products = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-32 hero-gradient overflow-hidden">
        <ParticleBackground />
        <div className="section-container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-2 bg-primary/20 text-primary rounded-full text-sm font-medium mb-6">
              Our Products
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Premium <span className="text-gradient">Packaging Solutions</span>
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed">
              Explore our comprehensive range of packaging materials designed for quality, durability, and performance.
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-background animated-bg">
        <div className="section-container relative z-10">
          <SectionTitle
            badge="8 Premium Products"
            title="Quality You Can Trust"
            subtitle="Each product is manufactured with precision and undergoes strict quality control."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product, index) => (
              <div
                key={product.title}
                className="fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <ProductCard {...product} href="/products" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-gradient">
        <div className="section-container text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Need Custom Solutions?
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
            We offer customized packaging solutions including printed tapes and custom sizes.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            Contact us
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default Products;
