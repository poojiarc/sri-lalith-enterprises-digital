import { Link } from 'react-router-dom';
import { ArrowRight, Package, Factory, Truck, Award, Users, CheckCircle } from 'lucide-react';
import Layout from '@/components/Layout';
import ProductCard from '@/components/ProductCard';
import FeatureCard from '@/components/FeatureCard';
import SectionTitle from '@/components/SectionTitle';
import TestimonialCard from '@/components/TestimonialCard';
import ParticleBackground from '@/components/ParticleBackground';

// Product Images
import heroFactory from '@/assets/hero-factory.jpg';
import productBoppTape from '@/assets/product-bopp-tape.jpg';
import productColorTape from '@/assets/product-color-tape.jpg';
import productIndustrialTape from '@/assets/product-industrial-tape.jpg';
import productStretchFilm from '@/assets/product-stretch-film.jpg';

const featuredProducts = [
  {
    title: 'Packaging Tapes',
    description: 'High-quality BOPP tapes for secure packaging and sealing applications.',
    image: productBoppTape,
    useCases: ['E-commerce', 'Warehousing', 'Shipping'],
  },
  {
    title: 'BOPP Color Tapes',
    description: 'Vibrant colored tapes available in any color for branding and identification.',
    image: productColorTape,
    useCases: ['Branding', 'Color Coding', 'Custom'],
  },
  {
    title: 'Industrial Tapes',
    description: 'Heavy-duty tapes designed for demanding industrial applications.',
    image: productIndustrialTape,
    useCases: ['Manufacturing', 'Heavy Duty', 'Industrial'],
  },
  {
    title: 'Stretch Film',
    description: 'Premium stretch films for pallet wrapping and product protection.',
    image: productStretchFilm,
    useCases: ['Palletizing', 'Storage', 'Protection'],
  },
];

const features = [
  {
    icon: Factory,
    title: 'Manufacturing Excellence',
    description: 'State-of-the-art facility with advanced machinery ensuring consistent quality.',
  },
  {
    icon: Package,
    title: 'Printing Works',
    description: 'Custom printing solutions for branding and packaging requirements.',
  },
  {
    icon: Truck,
    title: 'Pan-India Delivery',
    description: 'Reliable logistics network ensuring timely delivery across India.',
  },
  {
    icon: Award,
    title: 'Quality Assured',
    description: 'Rigorous quality control processes for every product we manufacture.',
  },
];

const testimonials = [
  {
    content: 'Sri Lalith Enterprises has been our trusted partner for packaging solutions. Their quality and service are unmatched in the industry.',
    author: 'Rajesh Kumar',
    company: 'ABC Logistics Pvt Ltd',
  },
  {
    content: 'The custom printed tapes have significantly improved our brand visibility. Excellent quality and competitive pricing.',
    author: 'Priya Sharma',
    company: 'XYZ E-commerce',
  },
  {
    content: 'Consistent quality and timely deliveries. They truly understand industrial packaging requirements.',
    author: 'Venkat Rao',
    company: 'Industrial Solutions Inc',
  },
];

const stats = [
  { value: '500+', label: 'Happy Clients' },
  { value: '10+', label: 'Years Experience' },
  { value: '1000+', label: 'Products Delivered' },
  { value: '99%', label: 'Client Satisfaction' },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center hero-gradient overflow-hidden">
        <ParticleBackground />
        <div className="section-container relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Hero Content */}
            <div className="space-y-8 animate-fade-in">
              <span className="inline-block px-4 py-2 bg-primary/20 text-primary rounded-full text-sm font-medium">
                🏭 Trusted Manufacturer Since 2014
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Premium <span className="text-gradient">Packaging</span> Solutions for Your Business
              </h1>
              <p className="text-lg text-gray-300 leading-relaxed max-w-xl">
                Sri Lalith Enterprises is a trusted manufacturer of premium packaging materials, 
                self-adhesive tapes, and stretch films. We deliver quality, reliability, and 
                customized printing solutions for branding and packaging industries across India.
              </p>
              
              {/* Key Points */}
              <div className="flex flex-wrap gap-4">
                {['Manufacturing Excellence', 'Printing Works', 'Industrial Solutions'].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-gray-300">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-green-gradient text-white font-semibold rounded-xl shadow-glow-green hover:shadow-lg transition-all duration-300 hover:scale-105"
                >
                  Contact Us
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  to="/products"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-blue-gradient text-white font-semibold rounded-xl shadow-glow-blue hover:shadow-lg transition-all duration-300 hover:scale-105"
                >
                  View Products
                  <Package className="w-5 h-5" />
                </Link>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative animate-fade-in-right hidden lg:block">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={heroFactory}
                  alt="Sri Lalith Enterprises Manufacturing Facility"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black/50 to-transparent" />
              </div>
              {/* Floating Stats Card */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-card animate-float">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-green-gradient rounded-xl flex items-center justify-center">
                    <Users className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-foreground">500+</p>
                    <p className="text-sm text-muted-foreground">Happy Clients</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white relative">
        <div className="section-container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-2xl bg-background hover:bg-card transition-colors duration-300 card-hover"
              >
                <p className="text-4xl md:text-5xl font-bold text-gradient mb-2">{stat.value}</p>
                <p className="text-muted-foreground font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-20 bg-background animated-bg">
        <div className="section-container relative z-10">
          <SectionTitle
            badge="Our Products"
            title="Quality Packaging Solutions"
            subtitle="Discover our range of premium packaging materials designed for durability, reliability, and performance."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product, index) => (
              <div key={product.title} className="fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                <ProductCard {...product} />
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/products"
              className="inline-flex items-center gap-2 px-8 py-4 bg-green-gradient text-white font-semibold rounded-xl shadow-glow-green hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              View All Products
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 hero-gradient relative overflow-hidden">
        <ParticleBackground />
        <div className="section-container relative z-10">
          <SectionTitle
            badge="Why Choose Us"
            title="Your Trusted Packaging Partner"
            subtitle="We combine manufacturing excellence with customer-focused service to deliver the best packaging solutions."
            light={false}
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <FeatureCard key={feature.title} {...feature} delay={index * 100} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-background">
        <div className="section-container">
          <SectionTitle
            badge="Testimonials"
            title="What Our Clients Say"
            subtitle="Hear from businesses who trust Sri Lalith Enterprises for their packaging needs."
          />
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                <TestimonialCard {...testimonial} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-gradient relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/2 translate-y-1/2" />
        </div>
        <div className="section-container relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Elevate Your Packaging?
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
            Get in touch with us today for customized packaging solutions tailored to your business needs.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              Contact us
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href="tel:+917013404083"
              className="inline-flex items-center gap-2 px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-xl hover:bg-white/10 transition-all duration-300"
            >
              Call Us Now
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
