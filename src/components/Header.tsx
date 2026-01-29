// import { useState, useEffect } from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import { Menu, X, Package, ChevronDown } from 'lucide-react';
// import { cn } from '@/lib/utils';

// const navigation = [
//   { name: 'Home', href: '/' },
//   { name: 'About Us', href: '/about' },
//   { name: 'Bindal Groups', href: '/bindal-groups' },
//   {
//     name: 'Products',
//     href: '/products',
//     children: [
//       { name: 'Packaging Products', href: '/packaging-products' },
//       { name: 'Tapes', href: '/tapes' },
//     ],
//   },
//   { name: 'Contact Us', href: '/contact' },
// ];

// const Header = () => {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [openDropdown, setOpenDropdown] = useState<string | null>(null);
//   const location = useLocation();

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 20);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   useEffect(() => {
//     setIsMobileMenuOpen(false);
//     setOpenDropdown(null);
//   }, [location]);

//   const isActive = (href: string) => {
//     if (href === '/') return location.pathname === '/';
//     return location.pathname.startsWith(href);
//   };

//   return (
//     <header
//       className={cn(
//         'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
//         isScrolled
//           ? 'bg-brand-black/95 backdrop-blur-lg shadow-lg py-2'
//           : 'bg-brand-black py-4'
//       )}
//     >
//       <div className="section-container">
//         <nav className="flex items-center justify-between">
//           {/* Logo */}
//           <Link to="/" className="flex items-center gap-3 group">
//             <div className="w-12 h-12 bg-green-gradient rounded-xl flex items-center justify-center shadow-glow-green transition-transform duration-300 group-hover:scale-110">
//               <Package className="w-7 h-7 text-white" />
//             </div>
//             <div className="hidden sm:block">
//               <h1 className="text-lg font-bold text-white leading-tight">
//                 Sri Lalith Enterprises
//               </h1>
//               <p className="text-xs text-muted-foreground">
//                 Packaging & Tape Solutions
//               </p>
//             </div>
//           </Link>

//           {/* Desktop Navigation */}
//           <div className="hidden lg:flex items-center gap-1">
//             {navigation.map((item) => (
//               <div
//                 key={item.name}
//                 className="relative"
//                 onMouseEnter={() => item.children && setOpenDropdown(item.name)}
//                 onMouseLeave={() => setOpenDropdown(null)}
//               >
//                 <Link
//                   to={item.href}
//                   className={cn(
//                     'px-4 py-2 rounded-lg font-medium transition-all duration-300 flex items-center gap-1',
//                     isActive(item.href)
//                       ? 'text-primary bg-primary/10'
//                       : 'text-gray-300 hover:text-white hover:bg-white/5'
//                   )}
//                 >
//                   {item.name}
//                   {item.children && (
//                     <ChevronDown
//                       className={cn(
//                         'w-4 h-4 transition-transform duration-300',
//                         openDropdown === item.name && 'rotate-180'
//                       )}
//                     />
//                   )}
//                 </Link>

//                 {/* Dropdown */}
//                 {item.children && openDropdown === item.name && (
//                   <div className="absolute top-full left-0 mt-2 w-56 bg-brand-black/95 backdrop-blur-lg rounded-xl shadow-xl border border-white/10 overflow-hidden animate-scale-in">
//                     {item.children.map((child) => (
//                       <Link
//                         key={child.name}
//                         to={child.href}
//                         className={cn(
//                           'block px-4 py-3 transition-all duration-200',
//                           isActive(child.href)
//                             ? 'text-primary bg-primary/10'
//                             : 'text-gray-300 hover:text-white hover:bg-white/5'
//                         )}
//                       >
//                         {child.name}
//                       </Link>
//                     ))}
//                   </div>
//                 )}
//               </div>
//             ))}
//           </div>

//           {/* CTA Button - Desktop */}
//           <Link
//             to="/contact"
//             className="hidden lg:inline-flex items-center gap-2 px-6 py-2.5 bg-green-gradient text-white font-semibold rounded-xl shadow-glow-green hover:shadow-lg transition-all duration-300 hover:scale-105"
//           >
//             Contact us
//           </Link>

//           {/* Mobile Menu Button */}
//           <button
//             onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//             className="lg:hidden p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
//           >
//             {isMobileMenuOpen ? (
//               <X className="w-6 h-6" />
//             ) : (
//               <Menu className="w-6 h-6" />
//             )}
//           </button>
//         </nav>

//         {/* Mobile Menu */}
//         <div
//           className={cn(
//             'lg:hidden overflow-hidden transition-all duration-300',
//             isMobileMenuOpen ? 'max-h-[500px] mt-4' : 'max-h-0'
//           )}
//         >
//           <div className="bg-white/5 rounded-xl p-4 space-y-2">
//             {navigation.map((item) => (
//               <div key={item.name}>
//                 <Link
//                   to={item.href}
//                   className={cn(
//                     'block px-4 py-3 rounded-lg font-medium transition-all duration-200',
//                     isActive(item.href)
//                       ? 'text-primary bg-primary/10'
//                       : 'text-gray-300 hover:text-white hover:bg-white/5'
//                   )}
//                 >
//                   {item.name}
//                 </Link>
//                 {item.children && (
//                   <div className="ml-4 mt-2 space-y-1">
//                     {item.children.map((child) => (
//                       <Link
//                         key={child.name}
//                         to={child.href}
//                         className={cn(
//                           'block px-4 py-2 rounded-lg text-sm transition-all duration-200',
//                           isActive(child.href)
//                             ? 'text-primary bg-primary/10'
//                             : 'text-gray-400 hover:text-white hover:bg-white/5'
//                         )}
//                       >
//                         {child.name}
//                       </Link>
//                     ))}
//                   </div>
//                 )}
//               </div>
//             ))}
//             <Link
//               to="/contact"
//               className="block mt-4 px-4 py-3 bg-green-gradient text-white font-semibold rounded-xl text-center shadow-glow-green"
//             >
//               Contact us
//             </Link>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;



import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import logo from "@/assets/favicon.svg";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Bindal Groups", href: "/bindal-groups" },
  {
    name: "Products",
    href: "/products",
    children: [
      { name: "Packaging Products", href: "/packaging-products" },
      { name: "Tapes", href: "/tapes" },
    ],
  },
  { name: "Contact Us", href: "/contact" },
];

const HEADER_HEIGHT = 96; // px — SAFE for mobile & desktop

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setOpenDropdown(null);
  }, [location]);

  const isActive = (href: string) =>
    href === "/"
      ? location.pathname === "/"
      : location.pathname.startsWith(href);

  return (
    <>
      {/* FIXED HEADER */}
      <header
        style={{ height: HEADER_HEIGHT }}
        className="fixed top-0 left-0 right-0 z-50 bg-brand-black flex items-center"
      >
        <div className="section-container w-full">
          <nav className="flex items-center justify-between">
            {/* LOGO */}
            <Link to="/" className="flex items-center gap-3">
              <img
                src={logo}
                alt="Sri Lalith Enterprises Logo"
                className="w-12 h-12 object-contain"
              />
              <div className="hidden sm:block">
                <h1 className="text-lg font-bold text-white leading-tight">
                  Sri Lalith Enterprises
                </h1>
                <p className="text-xs text-muted-foreground">
                  Packaging & Tape Solutions
                </p>
              </div>
            </Link>

            {/* DESKTOP NAV */}
            <div className="hidden lg:flex items-center gap-1">
              {navigation.map((item) => (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => item.children && setOpenDropdown(item.name)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <Link
                    to={item.href}
                    className={cn(
                      "px-4 py-2 rounded-lg flex items-center gap-1 font-medium transition",
                      isActive(item.href)
                        ? "text-primary bg-primary/10"
                        : "text-gray-300 hover:text-white hover:bg-white/5"
                    )}
                  >
                    {item.name}
                    {item.children && (
                      <ChevronDown
                        className={cn(
                          "w-4 h-4 transition-transform",
                          openDropdown === item.name && "rotate-180"
                        )}
                      />
                    )}
                  </Link>

                  {item.children && openDropdown === item.name && (
                    <div className="absolute top-full left-0 mt-2 w-56 bg-brand-black rounded-xl shadow-xl border border-white/10">
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          to={child.href}
                          className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-white/5"
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* CTA */}
            <Link
              to="/contact"
              className="hidden lg:inline-flex px-6 py-2.5 bg-green-gradient text-white font-semibold rounded-xl"
            >
              Contact Us
            </Link>

            {/* MOBILE MENU BUTTON */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-white rounded-lg hover:bg-white/10"
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </button>
          </nav>
        </div>
      </header>

      {/* 🔑 GLOBAL SPACER (PREVENTS OVERLAP EVERYWHERE) */}
      <div style={{ height: HEADER_HEIGHT }} />
    </>
  );
};

export default Header;