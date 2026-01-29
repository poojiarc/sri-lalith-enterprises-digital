import { CheckCircle } from 'lucide-react';
import Layout from '@/components/Layout';
import SectionTitle from '@/components/SectionTitle';
import ParticleBackground from '@/components/ParticleBackground';

import productStretchFilm from '@/assets/product-stretch-film.jpg';
import productPpStrap from '@/assets/product-pp-strap.jpg';

const strapRolls = [
  'Automatic Strap Rolls',
  'Semi-Automatic Strap Rolls',
  'Printed Strap Rolls',
  'Coloured Strap Rolls',
];

const stretchFilms = [
  'Ultra Power Stretch Film',
  'Machine Grade Stretch Film',
  'Hand Grade Stretch Film',
];

const features = [
  'Superior Adhesion',
  'Exceptional Strength',
  'Temperature Resistant',
  'Clear & Printed Options',
  'All Sizes Available',
];

const Tapes = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-32 hero-gradient overflow-hidden">
        <ParticleBackground />
        <div className="section-container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-2 bg-primary/20 text-primary rounded-full text-sm font-medium mb-6">
              Tapes & Films
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Industrial <span className="text-gradient">Strapping Solutions</span>
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed">
              Premium quality strap rolls and stretch films for all your packaging needs.
            </p>
          </div>
        </div>
      </section>

      {/* Strap Rolls Section */}
      <section className="py-20 bg-background">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionTitle
                badge="Strap Rolls"
                title="PP Strapping Solutions"
                subtitle="High-quality polypropylene straps for secure bundling and packaging."
                centered={false}
              />
              <div className="space-y-4 mt-8">
                {strapRolls.map((item) => (
                  <div key={item} className="flex items-center gap-3 p-4 bg-card rounded-xl card-hover">
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                    <span className="text-card-foreground font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img
                src={productPpStrap}
                alt="PP Strap Rolls"
                className="w-full rounded-2xl shadow-card"
              />
              <div className="absolute -bottom-6 -right-6 bg-green-gradient rounded-2xl p-6 text-white shadow-glow-green">
                <p className="text-2xl font-bold">100%</p>
                <p className="text-sm opacity-80">Quality Tested</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stretch Films Section */}
      <section className="py-20 hero-gradient relative overflow-hidden">
        <ParticleBackground />
        <div className="section-container relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative">
              <img
                src={productStretchFilm}
                alt="Stretch Films"
                className="w-full rounded-2xl shadow-lg"
              />
              <div className="absolute -bottom-6 -left-6 bg-blue-gradient rounded-2xl p-6 text-white shadow-glow-blue">
                <p className="text-2xl font-bold">Premium</p>
                <p className="text-sm opacity-80">Grade Quality</p>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <SectionTitle
                badge="Stretch Films"
                title="Pallet Wrapping Solutions"
                subtitle="High-performance stretch films for secure pallet wrapping."
                centered={false}
                light={false}
              />
              <div className="space-y-4 mt-8">
                {stretchFilms.map((item) => (
                  <div key={item} className="flex items-center gap-3 p-4 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-all">
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                    <span className="text-white font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="section-container">
          <SectionTitle
            badge="Why Choose Our Products"
            title="Superior Quality Features"
            subtitle="All our products are manufactured with precision and tested for quality."
          />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {features.map((feature, index) => (
              <div
                key={feature}
                className="bg-card rounded-2xl p-6 text-center card-hover"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-6 h-6 text-primary" />
                </div>
                <p className="font-semibold text-foreground">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-gradient">
        <div className="section-container text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Order?
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
            Get in touch with us for bulk orders and custom requirements.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            Contact Us Now
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default Tapes;
