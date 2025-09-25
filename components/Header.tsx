import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#stages', label: 'Stages' },
  { href: '#rewards', label: 'Rewards' },
  { href: '#ambassador', label: 'Ambassadors' },
  { href: '#contact', label: 'Contact' },
];

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false); // Close mobile menu on click
    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const menuVariants = {
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

  const itemVariants = {
    closed: { opacity: 0, y: -10 },
    open: { opacity: 1, y: 0 },
  };

  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-full px-4 sm:w-auto">
      <div className="container mx-auto flex justify-center items-center">
        {/* Desktop Navigation */}
        <nav className="hidden md:block bg-white/30 backdrop-blur-xl border border-white/40 shadow-xl rounded-full">
          <ul className="flex space-x-2 p-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="font-semibold text-gray-800 hover:text-white hover:bg-[#F58220]/80 transition-all duration-300 relative cursor-pointer px-6 py-3 rounded-full block"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Navigation */}
        <div className="md:hidden w-full">
          <div className="flex justify-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="bg-white/30 backdrop-blur-xl border border-white/40 shadow-lg rounded-full p-4 text-gray-800 focus:outline-none"
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
          <AnimatePresence>
            {isOpen && (
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
                        className="block w-full text-center font-semibold text-gray-800 hover:text-white hover:bg-[#F58220]/80 transition-colors duration-300 cursor-pointer p-3 rounded-lg"
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
