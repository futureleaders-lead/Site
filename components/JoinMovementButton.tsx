import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';

// Animate `bottom` position instead of `y` transform to avoid CSS class conflicts.
const buttonVariants: Variants = {
  hidden: { opacity: 0, bottom: '-100px' },
  visible: { opacity: 1, bottom: '32px' }, // 32px is tailwind's `bottom-8`
  exit: { opacity: 0, bottom: '-100px' },
};

const JoinMovementButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolledDown = window.scrollY > 300;
      let ctaReached = false;
      const ambassadorCtaSection = document.getElementById('ambassador-cta');
      if (ambassadorCtaSection) {
        const ctaRect = ambassadorCtaSection.getBoundingClientRect();
        if (ctaRect.top < window.innerHeight) {
          ctaReached = true;
        }
      }
      setIsVisible(scrolledDown && !ctaReached);
    };
    
    handleScroll();
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    const heroElement = document.getElementById('hero');
    if (heroElement) {
      heroElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          onClick={scrollToTop}
          // The `bottom-8` class is removed as its function is now handled by the animation variants.
          // Centering and scaling classes will now work without conflict.
          className="fixed left-1/2 -translate-x-1/2 md:left-auto md:right-8 md:translate-x-0 bg-[#F58220] text-white font-bold py-3 px-5 md:py-4 md:px-6 rounded-full text-base md:text-lg shadow-2xl z-50 transform scale-75 md:scale-100 transition-transform duration-200 hover:scale-[0.825] md:hover:scale-105"
          style={{ animation: 'pulse-glow-orange 2.5s infinite ease-in-out' }}
          variants={buttonVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          transition={{ type: 'spring', stiffness: 150, damping: 20 }}
          aria-label="Join the movement, scroll to top"
        >
          Join The Movement
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default JoinMovementButton;