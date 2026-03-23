import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Sobre', href: '#sobre' },
    { name: 'Benefícios', href: '#beneficios' },
    { name: 'Como Funciona', href: '#como-funciona' },
    { name: 'Projetos', href: '#projetos' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contato', href: '#contato' },
  ];

  const goToSection = (href) => {
    const element = document.querySelector(href);

    if (!element) return;

    setIsMobileMenuOpen(false);

    setTimeout(() => {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }, 250);
  };

  const handleDesktopClick = (e, href) => {
    e.preventDefault();

    const element = document.querySelector(href);
    if (!element) return;

    const headerOffset = 80;
    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
    const offsetPosition = elementPosition - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg shadow-[#8DBA2F]/5'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a
            href="#home"
            onClick={(e) => handleDesktopClick(e, '#home')}
            className="flex items-center gap-3 group"
          >
            <img
              src="https://horizons-cdn.hostinger.com/95a23b10-fddd-4873-a058-6a7606035ad6/8d15df6e1dfbb9b5213d5dd9ad56ac61.png"
              alt="Light Energy Solar Logo"
              className="w-12 h-12 object-contain"
            />
            <div>
              <span
                className={`text-xl font-bold transition-colors duration-300 ${
                  isScrolled ? 'text-gray-900' : 'text-white'
                }`}
              >
                Light Energy Solar
              </span>
            </div>
          </a>

          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleDesktopClick(e, link.href)}
                className={`font-medium transition-colors duration-200 hover:text-[#8DBA2F] ${
                  isScrolled ? 'text-gray-700' : 'text-white/90'
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 rounded-xl transition-colors duration-200 ${
              isScrolled
                ? 'text-gray-900 hover:bg-gray-100'
                : 'text-white hover:bg-white/10'
            }`}
            aria-label="Toggle menu"
            type="button"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden bg-white border-t border-gray-200 shadow-xl"
          >
            <nav className="max-w-7xl mx-auto px-4 py-6 flex flex-col gap-2">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  type="button"
                  onClick={() => goToSection(link.href)}
                  className="text-left text-gray-700 font-medium py-3 px-1 hover:text-[#8DBA2F] transition-colors duration-200"
                >
                  {link.name}
                </button>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Header;