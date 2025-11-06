import React, { useState, useEffect } from 'react';
// Fix: Import Variants type from framer-motion to resolve type errors.
import { motion, AnimatePresence, type Variants } from 'framer-motion';

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#stages', label: 'Stages' },
  { href: '#stage1-details', label: 'Campus Round' },
  { href: '#rewards', label: 'Rewards' },
  { href: '#ambassador', label: 'Ambassadors' },
  { href: '#contact', label: 'Contact' },
];

// Fix: Explicitly type variants with `Variants` for type safety.
const menuVariants: Variants = {
  closed: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.2,
    },
  },
  open: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      staggerChildren: 0.05,
    },
  },
};

// Fix: Explicitly type variants with `Variants` for type safety.
const itemVariants: Variants = {
  closed: { opacity: 0, y: -10 },
  open: { opacity: 1, y: 0 },
};

// Fix: Explicitly type variants with `Variants` to fix type incompatibility with the 'ease' property.
const navContainerVariants: Variants = {
  initial: { y: -20, opacity: 0 },
  animate: { y: 0, opacity: 1, transition: { duration: 0.4, ease: 'easeOut' } },
  exit: { y: -20, opacity: 0, transition: { duration: 0.2, ease: 'easeIn' } },
};

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDesktopMenuOpen, setIsDesktopMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
        setIsDesktopMenuOpen(false); // Close dropdown on scroll
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);


  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    setIsDesktopMenuOpen(false);
    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 z-50 w-full p-4">
      <div className="container mx-auto">
        {/* --- Desktop & Tablet Navigation --- */}
        <div className="hidden md:block">
          <AnimatePresence mode="wait">
            {!scrolled ? (
              <motion.div
                key="desktop-nav-full"
                className="flex justify-center"
                variants={navContainerVariants}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                <nav className="bg-white/30 backdrop-blur-xl border border-white/40 shadow-xl rounded-full">
                  <ul className="flex space-x-2 p-2">
                    {navLinks.map((link) => (
                      <li key={link.href}>
                        <a
                          href={link.href}
                          onClick={(e) => handleNavClick(e, link.href)}
                          className={`font-semibold text-gray-800 hover:text-white hover:bg-[#F58220]/80 transition-all duration-300 relative cursor-pointer px-6 py-3 rounded-full block ${link.label === 'Campus Round' ? 'shine-highlight' : ''}`}
                        >
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
              </motion.div>
            ) : (
              <motion.div
                key="desktop-nav-scrolled"
                className="flex justify-end"
                variants={navContainerVariants}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                <div className="relative">
                  <button
                    onClick={() => setIsDesktopMenuOpen(!isDesktopMenuOpen)}
                    className="bg-white/30 backdrop-blur-xl border border-white/40 shadow-lg rounded-full p-4 text-gray-800 focus:outline-none"
                    aria-label="Toggle menu"
                    aria-expanded={isDesktopMenuOpen}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                       {isDesktopMenuOpen ? (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      ) : (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                      )}
                    </svg>
                  </button>
                  <AnimatePresence>
                    {isDesktopMenuOpen && (
                      <motion.nav
                        className="absolute top-full right-0 mt-3 bg-white/50 backdrop-blur-2xl border border-white/40 shadow-xl rounded-2xl p-4 w-64"
                        initial="closed"
                        animate="open"
                        exit="closed"
                        variants={menuVariants}
                      >
                        <ul className="flex flex-col items-center space-y-2">
                          {navLinks.map((link) => (
                            <motion.li key={link.href} variants={itemVariants} className="w-full">
                              <a
                                href={link.href}
                                onClick={(e) => handleNavClick(e, link.href)}
                                className={`block w-full text-center font-semibold text-gray-800 hover:text-white hover:bg-[#F58220]/80 transition-colors duration-300 cursor-pointer p-3 rounded-lg ${link.label === 'Campus Round' ? 'shine-highlight' : ''}`}
                              >
                                {link.label}
                              </a>
                            </motion.li>
                          ))}
                        </ul>
                      </motion.nav>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* --- Mobile Navigation --- */}
        <div className="md:hidden w-full">
          <div
            className={`flex ${scrolled ? 'justify-end' : 'justify-center'}`}
          >
            <motion.button
              layout
              transition={{ duration: 0.5, type: 'spring', stiffness: 120 }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="bg-white/30 backdrop-blur-xl border border-white/40 shadow-lg rounded-full p-4 text-gray-800 focus:outline-none"
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </motion.button>
          </div>
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.nav
                className="mt-4 bg-white/50 backdrop-blur-2xl border border-white/40 shadow-xl rounded-2xl p-4"
                initial="closed"
                animate="open"
                exit="closed"
                variants={menuVariants}
              >
                <ul className="flex flex-col items-center space-y-2">
                  {navLinks.map((link) => (
                    <motion.li key={link.href} variants={itemVariants} className="w-full">
                      <a
                        href={link.href}
                        onClick={(e) => handleNavClick(e, link.href)}
                        className={`block w-full text-center font-semibold text-gray-800 hover:text-white hover:bg-[#F58220]/80 transition-colors duration-300 cursor-pointer p-3 rounded-lg ${link.label === 'Campus Round' ? 'shine-highlight' : ''}`}
                      >
                        {link.label}
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </motion.nav>
            )}
          </AnimatePresence>
        </div>
      </div>
    </header>
  );
};

export default Header;