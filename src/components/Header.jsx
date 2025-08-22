import { useState, useEffect } from "react";
import { cn } from "../lib/utils";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: "Home", href: "https://www.choicefinefoods.com/", external: true },
    { name: "Catalog", href: "https://www.choicefinefoods.com/", external: true },
  ];

  const desktopNavigation = [
    ...navigation,
    { name: "Shop", href: "https://www.choicefinefoods.com/shop-3", external: true }
  ];

  const isActive = (href) => {
    if (href === "/") return window.location.pathname === "/";
    return window.location.pathname.startsWith(href);
  };

  return (
    <header className={cn(
      "shadow-sm fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300",
      isScrolled ? "bg-white/60 backdrop-blur-lg" : "bg-white"
    )}>
      <nav className="w-full" style={{ padding: '0.25rem 1rem' }}>
        {/* Mobile Layout - Menu button centered at top */}
        <div className="lg:hidden flex justify-center">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="focus-ring p-3 rounded-xl bg-white/80 shadow-md"
          >
            {isMobileMenuOpen ? (
              <svg className="h-6 w-6 text-neutralBlack" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6 text-neutralBlack" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Desktop Layout - Logo, Navigation, and Auth */}
        <div className="hidden lg:flex items-center justify-between px-4 w-full">
          {/* Logo - Desktop only - Left with margin */}
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center ml-8">
              <img 
                src="/logo.png" 
                alt="Choice Foods Logo" 
                className="h-24 md:h-28 lg:h-32 w-auto object-contain hover:scale-105 transition-transform duration-200"
              />
            </a>
          </div>

          {/* Desktop Navigation - Centered */}
          <div className="flex items-center justify-center space-x-12 flex-1">
            {desktopNavigation.map((item) => (
              item.external ? (
                <a
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "font-medium transition-colors hover:text-primaryBlue focus-ring px-4 py-2 rounded-lg text-lg text-neutralBlack"
                  )}
                  style={{ fontFamily: 'Gilroy, Gilroy Bold, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif', fontWeight: 700 }}
                >
                  {item.name}
                </a>
              ) : (
                <a
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "font-medium transition-colors hover:text-primaryBlue focus-ring px-4 py-2 rounded-lg text-lg",
                    isActive(item.href) ? "text-primaryBlue" : "text-neutralBlack"
                  )}
                  style={{ fontFamily: 'Gilroy, Gilroy Bold, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif', fontWeight: 700 }}
                >
                  {item.name}
                </a>
              )
            ))}
          </div>

          {/* Right spacer for balance */}
          <div className="flex-shrink-0 w-40">
            {/* Auth Section Placeholder - for future login functionality */}
          </div>

        </div>

        {/* Mobile Navigation - Enhanced */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 py-6 border-t border-gray-200/50 bg-white/95 backdrop-blur-md rounded-xl shadow-xl mx-4">
            <div className="space-y-2 px-6">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "flex items-center px-4 py-4 rounded-xl font-medium transition-colors text-lg touch-target",
                    isActive(item.href) ? "text-primaryBlue bg-primaryBlue/10 shadow-sm" : "text-neutralBlack hover:text-primaryBlue hover:bg-lightGrey"
                  )}
                  onClick={() => setIsMobileMenuOpen(false)}
                  style={{ fontFamily: 'Gilroy, Gilroy Bold, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif', fontWeight: 700 }}
                >
                  {item.name}
                </a>
              ))}
              
              {/* Mobile Contact Info */}
              <div className="pt-4 border-t border-gray-200 space-y-3">
                <div className="px-4">
                  <h4 className="text-sm font-semibold text-neutralBlack mb-3" style={{ fontFamily: 'Gilroy, Gilroy Bold, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif', fontWeight: 700 }}>Contact</h4>
                  <div className="space-y-2">
                    <a href="tel:336-782-8283" className="flex items-center space-x-3 text-sm text-gray-600 hover:text-primaryBlue transition-colors touch-target">
                      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <span>336-782-8283</span>
                    </a>
                    <a href="mailto:choicefoods@hotmail.com" className="flex items-center space-x-3 text-sm text-gray-600 hover:text-primaryBlue transition-colors touch-target">
                      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <span>choicefoods@hotmail.com</span>
                    </a>
                  </div>
                </div>
                <a
                  href="/contact"
                  className="block btn-primary text-center mx-4 touch-target"
                  onClick={() => setIsMobileMenuOpen(false)}
                  style={{ fontFamily: 'Gilroy, Gilroy Bold, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif', fontWeight: 700 }}
                >
                  Get In Touch
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}