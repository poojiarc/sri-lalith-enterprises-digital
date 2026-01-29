import { Target, Eye, Heart, Award, Users, Shield } from 'lucide-react';
import Layout from '@/components/Layout';
import SectionTitle from '@/components/SectionTitle';
import ParticleBackground from '@/components/ParticleBackground';

const values = [
  {
    icon: Award,
    title: 'Quality Excellence',
    description: 'We maintain the highest standards in every product we manufacture.',
  },
  {
    icon: Users,
    title: 'Customer Focus',
    description: 'Our customers are at the heart of everything we do.',
  },
  {
    icon: Shield,
    title: 'Reliability',
    description: 'Consistent quality and timely delivery you can count on.',
  },
  {
    icon: Heart,
    title: 'Innovation',
    description: 'Continuously improving our processes and products.',
  },
];

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-32 hero-gradient overflow-hidden">
        <ParticleBackground />
        <div className="section-container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-2 bg-primary/20 text-primary rounded-full text-sm font-medium mb-6">
              About Us
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Your Trusted Partner in <span className="text-gradient">Packaging Solutions</span>
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed">
              Sri Lalith Enterprises is dedicated to manufacturing premium quality packaging materials and industrial tapes.
            </p>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-20 bg-background">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <SectionTitle
                badge="Our Story"
                title="Excellence in Packaging Since Day One"
                centered={false}
              />
              <div className="space-y-4 text-card-foreground leading-relaxed">
                <p>
                  Sri Lalith Enterprises is dedicated to manufacturing premium quality packaging materials 
                  and industrial tapes. With advanced machinery and skilled professionals, we ensure 
                  consistent quality, durability, and performance.
                </p>
                <p>
                  Our factory in Vijayawada, Andhra Pradesh stands as a symbol of our commitment to 
                  innovation and customer satisfaction. We continuously strive to exceed industry 
                  standards and deliver long-term value.
                </p>
                <p>
                  We promote a positive work culture that encourages creativity, growth, and continuous 
                  improvement. Our mission is to provide superior products and contribute to our 
                  customers' success in competitive markets.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-6">
                  <div className="bg-card rounded-2xl p-8 card-hover">
                    <Target className="w-12 h-12 text-primary mb-4" />
                    <h3 className="text-xl font-bold text-foreground mb-2">Our Mission</h3>
                    <p className="text-muted-foreground">
                      To provide superior packaging products that help businesses thrive in competitive markets.
                    </p>
                  </div>
                  <div className="bg-green-gradient rounded-2xl p-8 text-white">
                    <p className="text-4xl font-bold mb-2">10+</p>
                    <p className="opacity-80">Years of Experience</p>
                  </div>
                </div>
                <div className="space-y-6 mt-12">
                  <div className="bg-blue-gradient rounded-2xl p-8 text-white">
                    <p className="text-4xl font-bold mb-2">500+</p>
                    <p className="opacity-80">Happy Clients</p>
                  </div>
                  <div className="bg-card rounded-2xl p-8 card-hover">
                    <Eye className="w-12 h-12 text-secondary mb-4" />
                    <h3 className="text-xl font-bold text-foreground mb-2">Our Vision</h3>
                    <p className="text-muted-foreground">
                      To be the leading manufacturer of packaging solutions in India.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 hero-gradient relative overflow-hidden">
        <ParticleBackground />
        <div className="section-container relative z-10">
          <SectionTitle
            badge="Our Values"
            title="What Drives Us Forward"
            subtitle="Our core values guide everything we do at Sri Lalith Enterprises."
            light={false}
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="p-6 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-500 hover:border-primary/30"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 bg-green-gradient rounded-xl flex items-center justify-center mb-5 shadow-glow-green">
                  <value.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">{value.title}</h3>
                <p className="text-gray-400 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Factory Section */}
      <section className="py-20 bg-background">
        <div className="section-container">
          <SectionTitle
            badge="Our Facility"
            title="State-of-the-Art Manufacturing"
            subtitle="Our modern factory is equipped with advanced machinery and follows strict quality control processes."
          />
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card rounded-2xl p-8 card-hover text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Quality Control</h3>
              <p className="text-muted-foreground">
                Rigorous testing at every stage ensures consistent product quality.
              </p>
            </div>
            <div className="bg-card rounded-2xl p-8 card-hover text-center">
              <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Advanced Machinery</h3>
              <p className="text-muted-foreground">
                Modern equipment for precision manufacturing and high output.
              </p>
            </div>
            <div className="bg-card rounded-2xl p-8 card-hover text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-accent-foreground" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Skilled Team</h3>
              <p className="text-muted-foreground">
                Experienced professionals dedicated to excellence.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
