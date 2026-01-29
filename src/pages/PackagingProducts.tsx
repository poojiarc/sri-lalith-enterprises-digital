import { Package, Clock } from 'lucide-react';
import Layout from '@/components/Layout';
import SectionTitle from '@/components/SectionTitle';
import ParticleBackground from '@/components/ParticleBackground';

const PackagingProducts = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-32 hero-gradient overflow-hidden">
        <ParticleBackground />
        <div className="section-container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-2 bg-primary/20 text-primary rounded-full text-sm font-medium mb-6">
              Packaging Products
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Complete <span className="text-gradient">Packaging Range</span>
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed">
              Discover our specialized packaging products designed for various industries.
            </p>
          </div>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="py-20 bg-background">
        <div className="section-container">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-24 h-24 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-8">
              <Clock className="w-12 h-12 text-accent-foreground" />
            </div>
            <SectionTitle
              title="Products Coming Soon"
              subtitle="We're working on expanding our packaging products range. Check back soon for exciting new additions!"
            />
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
              {[1, 2, 3].map((item) => (
                <div
                  key={item}
                  className="bg-card rounded-2xl p-8 card-hover flex flex-col items-center"
                >
                  <div className="w-20 h-20 bg-muted rounded-2xl flex items-center justify-center mb-4">
                    <Package className="w-10 h-10 text-muted-foreground" />
                  </div>
                  <div className="h-4 w-32 bg-muted rounded animate-pulse mb-2" />
                  <div className="h-3 w-24 bg-muted rounded animate-pulse" />
                </div>
              ))}
            </div>
            <div className="mt-12">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-green-gradient text-white font-semibold rounded-xl shadow-glow-green hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                Contact Us for Updates
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PackagingProducts;
