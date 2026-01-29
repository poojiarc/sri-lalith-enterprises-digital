// import { Link } from 'react-router-dom';
// import { Package, Phone, Mail, MapPin, Instagram, MessageCircle } from 'lucide-react';

// const Footer = () => {
//   const currentYear = new Date().getFullYear();

//   const quickLinks = [
//     { name: 'Home', href: '/' },
//     { name: 'About Us', href: '/about' },
//     { name: 'Products', href: '/products' },
//     { name: 'Contact Us', href: '/contact' },
//   ];

//   const products = [
//     { name: 'Packaging Tapes', href: '/products' },
//     { name: 'Tapes', href: '/tapes' },
//   ];

//   return (
//     <footer className="bg-brand-black text-white">
//       {/* Main Footer */}
//       <div className="section-container py-16">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
//           {/* Company Info */}
//           <div className="space-y-6">
//             <Link to="/" className="flex items-center gap-3 group">
//               <div className="w-12 h-12 bg-green-gradient rounded-xl flex items-center justify-center shadow-glow-green transition-transform duration-300 group-hover:scale-110">
//                 <Package className="w-7 h-7 text-white" />
//               </div>
//               <div>
//                 <h3 className="text-lg font-bold text-white leading-tight">
//                   Sri Lalith Enterprises
//                 </h3>
//                 <p className="text-xs text-gray-400">
//                   Packaging & Tape Solutions
//                 </p>
//               </div>
//             </Link>
//             <p className="text-gray-400 leading-relaxed">
//               A trusted manufacturer of premium packaging materials, self-adhesive tapes, and stretch films based in Vijayawada, India.
//             </p>
//             <div className="flex items-center gap-4">
//               <a
//                 href="https://wa.me/917013404083"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="w-10 h-10 bg-brand-red rounded-lg flex items-center justify-center hover:scale-110 transition-transform duration-300"
//                 aria-label="WhatsApp"
//               >
//                 <MessageCircle className="w-5 h-5" />
//               </a>
//               <a
//                 href="https://instagram.com/tape_manufacturer_vijayawada"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center hover:scale-110 transition-transform duration-300"
//                 aria-label="Instagram"
//               >
//                 <Instagram className="w-5 h-5" />
//               </a>
//             </div>
//           </div>

//           {/* Quick Links */}
//           <div>
//             <h4 className="text-lg font-semibold mb-6 text-white">Quick Links</h4>
//             <ul className="space-y-3">
//               {quickLinks.map((link) => (
//                 <li key={link.name}>
//                   <Link
//                     to={link.href}
//                     className="text-gray-400 hover:text-primary transition-colors duration-200 flex items-center gap-2"
//                   >
//                     <span className="w-1.5 h-1.5 bg-primary rounded-full" />
//                     {link.name}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Products */}
//           <div>
//             <h4 className="text-lg font-semibold mb-6 text-white">Our Products</h4>
//             <ul className="space-y-3">
//               {products.map((product) => (
//                 <li key={product.name}>
//                   <Link
//                     to={product.href}
//                     className="text-gray-400 hover:text-secondary transition-colors duration-200 flex items-center gap-2"
//                   >
//                     <span className="w-1.5 h-1.5 bg-secondary rounded-full" />
//                     {product.name}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Contact Info */}
//           <div>
//             <h4 className="text-lg font-semibold mb-6 text-white">Contact Us</h4>
//             <ul className="space-y-4">
//               <li>
//                 <a
//                   href="tel:+917013404083"
//                   className="flex items-start gap-3 text-gray-400 hover:text-primary transition-colors duration-200"
//                 >
//                   <Phone className="w-5 h-5 mt-0.5 flex-shrink-0" />
//                   <span>+91 7013404083</span>
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="mailto:vmodugula0@gmail.com"
//                   className="flex items-start gap-3 text-gray-400 hover:text-primary transition-colors duration-200"
//                 >
//                   <Mail className="w-5 h-5 mt-0.5 flex-shrink-0" />
//                   <span>vmodugula0@gmail.com</span>
//                 </a>
//               </li>
//               <li className="flex items-start gap-3 text-gray-400">
//                 <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
//                 <span>
//                   D.No 76-16-36, Urmila Nagar,
//                   <br />
//                   Bhavanipuram, Vijayawada – 12
//                 </span>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </div>

//       {/* Bottom Bar */}
//       <div className="border-t border-white/10">
//         <div className="section-container py-6">
//           <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400">
//             <p>© {currentYear} Sri Lalith Enterprises. All rights reserved.</p>
//             <p>Designed with ❤️ for quality packaging solutions</p>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;




import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Instagram, MessageCircle } from 'lucide-react';
import logo from '@/assets/apple-touch-icon.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Products', href: '/products' },
    { name: 'Contact Us', href: '/contact' },
  ];

  const products = [
    { name: 'Packaging Tapes', href: '/products' },
    { name: 'Tapes', href: '/tapes' },
  ];

  return (
    <footer className="bg-brand-black text-white">
      {/* Main Footer */}
      <div className="section-container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Company Info */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-3 group">
              <img
  src={logo}
  alt="Sri Lalith Enterprises Logo"
  className="w-12 h-12 object-contain transition-transform duration-300 group-hover:scale-110"
/>

              <div>
                <h3 className="text-lg font-bold text-white leading-tight">
                  Sri Lalith Enterprises
                </h3>
                <p className="text-xs text-gray-400">
                  Packaging & Tape Solutions
                </p>
              </div>
            </Link>

            <p className="text-gray-400 leading-relaxed">
              A trusted manufacturer of premium packaging materials, self-adhesive
              tapes, and stretch films based in Vijayawada, India.
            </p>

            <div className="flex items-center gap-4">
              <a
  href="https://wa.me/917013404083"
  target="_blank"
  rel="noopener noreferrer"
  className="w-10 h-10 bg-[#25D366] rounded-lg flex items-center justify-center hover:scale-110 hover:shadow-lg transition-all duration-300"
  aria-label="WhatsApp"
>
  <MessageCircle className="w-5 h-5 text-white" />
</a>

              <a
                href="https://instagram.com/tape_manufacturer_vijayawada"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center hover:scale-110 transition-transform duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-400 hover:text-primary transition-colors duration-200 flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Our Products</h4>
            <ul className="space-y-3">
              {products.map((product) => (
                <li key={product.name}>
                  <Link
                    to={product.href}
                    className="text-gray-400 hover:text-secondary transition-colors duration-200 flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 bg-secondary rounded-full" />
                    {product.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Contact Us</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+917013404083"
                  className="flex items-start gap-3 text-gray-400 hover:text-primary transition-colors duration-200"
                >
                  <Phone className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <span>+91 7013404083</span>
                </a>
              </li>

              <li>
                <a
                  href="mailto:vmodugula0@gmail.com"
                  className="flex items-start gap-3 text-gray-400 hover:text-primary transition-colors duration-200"
                >
                  <Mail className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <span>vmodugula0@gmail.com</span>
                </a>
              </li>

              <li className="flex items-start gap-3 text-gray-400">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span>
                  D.No 76-16-36, Urmila Nagar,
                  <br />
                  Bhavanipuram, Vijayawada – 12
                </span>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="section-container py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400">
            <p>© {currentYear} Sri Lalith Enterprises. All rights reserved.</p>
            <p>Designed with ❤️ for quality packaging solutions</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
