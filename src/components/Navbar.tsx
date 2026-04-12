import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { label: "Courses", href: "/#courses" },
    { label: "About Us", href: "/about" },
    { label: "Contact Us", href: "/contact" },
  ];

  return (
    <nav 
      className={`sticky top-0 z-[100] transition-all duration-300 ${
        scrolled ? 'py-3' : 'py-4'
      }`}
      style={{
        backgroundColor: scrolled ? 'rgba(255,255,255,0.85)' : 'rgba(255,255,255,0.98)',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        boxShadow: scrolled ? '0 1px 0 #E5E7EB' : 'none'
      }}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center group">
            <img 
              src="/edu_logo.svg" 
              alt="Edutainer Logo" 
              className="h-8 w-auto transition-transform duration-300 group-hover:scale-110"
              style={{ maxHeight: '32px' }}
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Button 
              variant="ghost" 
              size="sm" 
              className="text-gray-700 hover:text-blue-600 hover:bg-blue-50 font-medium"
              onClick={() => window.location.href = '/signin'}
            >
              Sign In
            </Button>
            <Button 
              size="sm" 
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium shadow-sm hover:shadow-md transition-all duration-200"
              onClick={() => window.location.href = '/register'}
            >
              Register
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        <div
          className={`md:hidden fixed inset-y-0 right-0 w-64 bg-white shadow-2xl transform transition-transform duration-250 ease-in-out ${
            mobileOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          style={{ top: scrolled ? '48px' : '56px', zIndex: 90 }}
        >
          <div className="p-6 space-y-4">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="block px-4 py-3 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="flex flex-col gap-3 pt-4 border-t border-gray-100">
              <Button 
                variant="ghost" 
                size="sm" 
                className="justify-start text-gray-700 hover:text-blue-600 hover:bg-blue-50"
                onClick={() => window.location.href = '/signin'}
              >
                Sign In
              </Button>
              <Button 
                size="sm" 
                className="justify-start bg-blue-600 hover:bg-blue-700 text-white"
                onClick={() => window.location.href = '/register'}
              >
                Register
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Overlay */}
        {mobileOpen && (
          <div
            className="md:hidden fixed inset-0 bg-black/20 backdrop-blur-sm"
            style={{ top: scrolled ? '48px' : '56px', zIndex: 80 }}
            onClick={() => setMobileOpen(false)}
          />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
