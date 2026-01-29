import { useState } from 'react';
import { Phone, Mail, MapPin, Send, MessageCircle, Instagram, Clock, CheckCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import Layout from '@/components/Layout';
import SectionTitle from '@/components/SectionTitle';
import ParticleBackground from '@/components/ParticleBackground';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const contactInfo = [
  {
    icon: Phone,
    title: 'Phone / WhatsApp',
    value: '+91 7013404083',
    href: 'tel:+917013404083',
  },
  {
    icon: Mail,
    title: 'Email',
    value: 'vmodugula0@gmail.com',
    href: 'mailto:vmodugula0@gmail.com',
  },
  {
    icon: MapPin,
    title: 'Address',
    value: 'D.No 76-16-36, Urmila Nagar, Bhavanipuram, Vijayawada – 12',
    href: 'https://maps.google.com',
  },
  {
    icon: Clock,
    title: 'Business Hours',
    value: 'Mon - Sat: 9:00 AM - 6:00 PM',
    href: null,
  },
];

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (!formData.name.trim()) {
      toast({ title: 'Please enter your name', variant: 'destructive' });
      return;
    }
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      toast({ title: 'Please enter a valid email', variant: 'destructive' });
      return;
    }
    if (!formData.phone.trim() || formData.phone.length < 10) {
      toast({ title: 'Please enter a valid phone number', variant: 'destructive' });
      return;
    }
    if (!formData.message.trim()) {
      toast({ title: 'Please enter your message', variant: 'destructive' });
      return;
    }

    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    toast({
      title: 'Message Sent!',
      description: 'Thank you for contacting us. We will get back to you soon.',
    });
    
    setFormData({ name: '', email: '', phone: '', message: '' });
    setIsSubmitting(false);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-32 hero-gradient overflow-hidden">
        <ParticleBackground />
        <div className="section-container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-2 bg-primary/20 text-primary rounded-full text-sm font-medium mb-6">
              Contact Us
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Let's <span className="text-gradient">Connect</span>
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed">
              Have questions or need a quote? We're here to help. Reach out to us today!
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-background">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div>
              <SectionTitle
                badge="Get in Touch"
                title="Contact Information"
                subtitle="Reach out to us through any of these channels."
                centered={false}
              />
              <div className="space-y-6 mt-8">
                {contactInfo.map((info) => (
                  <div key={info.title} className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{info.title}</h3>
                      {info.href ? (
                        <a
                          href={info.href}
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-muted-foreground">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div className="mt-12">
                <h3 className="font-semibold text-foreground mb-4">Follow Us</h3>
                <div className="flex gap-4">
                  <a
                    href="https://wa.me/917013404083"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-brand-red rounded-xl flex items-center justify-center text-white hover:scale-110 transition-transform duration-300"
                    aria-label="WhatsApp"
                  >
                    <MessageCircle className="w-6 h-6" />
                  </a>
                  <a
                    href="https://instagram.com/tape_manufacturer_vijayawada"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center text-white hover:scale-110 transition-transform duration-300"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-card rounded-2xl p-8 card-hover">
              <h3 className="text-2xl font-bold text-foreground mb-6">Send us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Full Name *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className="w-full"
                    maxLength={100}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email Address *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    className="w-full"
                    maxLength={255}
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                    Phone Number *
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter your phone number"
                    className="w-full"
                    maxLength={15}
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your requirements..."
                    className="w-full min-h-[120px]"
                    maxLength={1000}
                  />
                </div>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-green-gradient hover:opacity-90 text-white py-6 text-lg font-semibold rounded-xl shadow-glow-green"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      Send Message
                      <Send className="w-5 h-5" />
                    </span>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 hero-gradient relative overflow-hidden">
        <ParticleBackground />
        <div className="section-container relative z-10">
          <SectionTitle
            badge="Why Contact Us"
            title="What You Can Expect"
            subtitle="When you reach out to Sri Lalith Enterprises, you get:"
            light={false}
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              'Quick Response Time',
              'Expert Consultation',
              'Custom Solutions',
              'Competitive Pricing',
            ].map((item, index) => (
              <div
                key={item}
                className="flex items-center gap-3 p-4 bg-white/5 rounded-xl border border-white/10"
              >
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                <span className="text-white font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
