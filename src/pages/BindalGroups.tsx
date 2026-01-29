import { Building2, Award, Users, Shield, Target, TrendingUp } from 'lucide-react';
import Layout from '@/components/Layout';
import SectionTitle from '@/components/SectionTitle';
import ParticleBackground from '@/components/ParticleBackground';

const strengths = [
  {
    icon: Building2,
    title: 'Business Background',
    description: 'Established with a vision to provide quality packaging solutions, Bindal Groups has grown to become a trusted name in the industry.',
  },
  {
    icon: Award,
    title: 'Manufacturing Expertise',
    description: 'Our state-of-the-art manufacturing facility is equipped with advanced machinery and skilled professionals.',
  },
  {
    icon: Shield,
    title: 'Quality Standards',
    description: 'We adhere to strict quality control processes ensuring every product meets the highest industry standards.',
  },
  {
    icon: TrendingUp,
    title: 'Industry Leadership',
    description: 'As leaders in the packaging industry, we continuously innovate to stay ahead of market demands.',
  },
  {
    icon: Users,
    title: 'Customer Trust',
    description: 'Built on a foundation of reliability and excellence, we have earned the trust of 500+ satisfied clients.',
  },
  {
    icon: Target,
    title: 'Future Vision',
    description: 'Committed to sustainable growth and expanding our reach to serve businesses across India and beyond.',
  },
];

const BindalGroups = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-32 hero-gradient overflow-hidden">
        <ParticleBackground />
        <div className="section-container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-2 bg-primary/20 text-primary rounded-full text-sm font-medium mb-6">
              Bindal Groups
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              A Legacy of <span className="text-gradient">Excellence</span>
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed">
              Bindal Groups represents our commitment to quality, innovation, and customer satisfaction in the packaging industry.
            </p>
          </div>
        </div>
      </section>

      {/* About Bindal Groups */}
      <section className="py-20 bg-background">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <SectionTitle
              badge="Our Heritage"
              title="Building Trust Through Quality"
            />
            <div className="prose prose-lg max-w-none text-card-foreground space-y-6">
              <p className="leading-relaxed">
                Bindal Groups, under the umbrella of Sri Lalith Enterprises, represents our commitment 
                to excellence in packaging manufacturing. With years of experience and dedication, 
                we have established ourselves as a reliable partner for businesses seeking quality 
                packaging solutions.
              </p>
              <p className="leading-relaxed">
                Our journey began with a simple vision: to provide packaging products that businesses 
                can trust. Today, we serve over 500 clients across India, offering a comprehensive 
                range of tapes, films, and packaging materials.
              </p>
              <p className="leading-relaxed">
                What sets us apart is our unwavering commitment to quality. Every product that 
                leaves our facility undergoes rigorous quality checks to ensure it meets our 
                high standards and your expectations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Strengths Grid */}
      <section className="py-20 hero-gradient relative overflow-hidden">
        <ParticleBackground />
        <div className="section-container relative z-10">
          <SectionTitle
            badge="Our Strengths"
            title="What Makes Us Different"
            subtitle="Discover the pillars that support our commitment to excellence."
            light={false}
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {strengths.map((strength, index) => (
              <div
                key={strength.title}
                className="p-8 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-500 hover:border-primary/30 group"
              >
                <div className="w-16 h-16 bg-green-gradient rounded-2xl flex items-center justify-center mb-6 shadow-glow-green group-hover:scale-110 transition-transform duration-300">
                  <strength.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{strength.title}</h3>
                <p className="text-gray-400 leading-relaxed">{strength.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-background">
        <div className="section-container">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { value: '10+', label: 'Years of Excellence' },
              { value: '500+', label: 'Satisfied Clients' },
              { value: '1000+', label: 'Products Delivered' },
              { value: '24/7', label: 'Customer Support' },
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center p-8 bg-card rounded-2xl card-hover"
              >
                <p className="text-4xl md:text-5xl font-bold text-gradient mb-3">{stat.value}</p>
                <p className="text-muted-foreground font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-gradient">
        <div className="section-container text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Partner with Bindal Groups
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
            Join hundreds of businesses who trust us for their packaging needs.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            Contact Us Today
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default BindalGroups;
