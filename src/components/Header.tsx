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

const HEADER_HEIGHT = 96;

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setOpenDropdown(null);
  }, [location]);

  const isActive = (href: string) =>
    href === "/" ? location.pathname === "/" : location.pathname.startsWith(href);

  return (
    <>
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
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              className="lg:hidden p-2 text-white rounded-lg hover:bg-white/10"
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </button>
          </nav>
        </div>
      </header>

      {/* MOBILE MENU */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black/60 lg:hidden">
          <div
            style={{ top: HEADER_HEIGHT }}
            className="fixed left-0 right-0 bg-brand-black border-t border-white/10"
          >
            <nav className="flex flex-col p-4 space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    "px-4 py-3 rounded-lg text-base font-medium transition",
                    isActive(item.href)
                      ? "text-primary bg-primary/10"
                      : "text-gray-300 hover:text-white hover:bg-white/5"
                  )}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}

      {/* REMOVED: The Spacer Div that was causing the white gap */}
    </>
  );
};

export default Header;
