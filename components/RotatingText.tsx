import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, type Transition, type Variants, type Target } from 'framer-motion';

interface RotatingTextProps {
  texts: string[];
  mainClassName?: string;
  splitLevelClassName?: string;
  staggerFrom?: 'first' | 'last' | 'center';
  staggerDuration?: number;
  initial?: Target;
  animate?: Target;
  exit?: Target;
  transition?: Transition;
  rotationInterval?: number;
}

const RotatingText: React.FC<RotatingTextProps> = ({
  texts,
  mainClassName = '',
  splitLevelClassName = 'overflow-hidden',
  staggerFrom = 'first',
  staggerDuration = 0.05,
  initial = { y: '100%' },
  animate = { y: 0 },
  exit = { y: '-100%' },
  transition = { type: 'spring', stiffness: 300, damping: 30 },
  rotationInterval = 3000,
}) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % texts.length);
    }, rotationInterval);

    return () => clearInterval(interval);
  }, [texts.length, rotationInterval]);

  const currentText = texts[index];

  const containerVariants: Variants = {
    animate: {
      transition: {
        staggerChildren: staggerDuration,
        staggerDirection: staggerFrom === 'last' ? -1 : 1,
      },
    },
  };

  const letterVariants: Variants = {
    initial: initial,
    animate: { ...animate, transition },
    exit: { ...exit, transition },
  };

  return (
    <motion.div layout className={mainClassName}>
      {/* Accessibility: Announce the full text for screen readers */}
      <span className="sr-only" aria-live="polite" aria-atomic="true">
        {currentText}
      </span>

      {/* Visual Animation: Hide from screen readers to avoid confusion */}
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          className="flex"
          aria-hidden="true"
          variants={containerVariants}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          {currentText.split('').map((char, i) => (
            <div key={`${char}-${i}`} className={splitLevelClassName}>
              <motion.span
                variants={letterVariants}
                style={{ display: 'inline-block' }}
              >
                {char === ' ' ? '\u00A0' : char}
              </motion.span>
            </div>
          ))}
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
};

export default RotatingText;
