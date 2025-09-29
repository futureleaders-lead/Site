import React from 'react';
// Fix: Import Variants type from framer-motion to resolve type errors.
import { motion, type Variants } from 'framer-motion';

// Fix: Explicitly type variants with `Variants` for type safety.
const logoVariants: Variants = {
  hidden: { opacity: 0, scale: 0.6 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: 'anticipate',
    },
  },
};

const textContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.6,
      staggerChildren: 0.3,
    },
  },
};

// Fix: Explicitly type variants with `Variants` to fix type incompatibility with the 'ease' property.
const textItemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

interface HeroProps {
  onOpenChatModal: () => void;
}

const Hero: React.FC<HeroProps> = ({ onOpenChatModal }) => {
  return (
    <section id="hero" className="relative text-gray-800 text-center py-32 md:py-48 overflow-hidden min-h-screen flex items-center justify-center">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        aria-hidden="true"
      >
        <source src="https://files.catbox.moe/grfmaf.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-white/75" aria-hidden="true"></div>
       <motion.div
        className="absolute top-1/4 left-1/4 w-32 h-32 bg-[#F58220]/20 rounded-full filter blur-2xl"
        animate={{ y: [0, 20, 0], x: [0, -10, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        aria-hidden="true"
      ></motion.div>
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-[#1E90FF]/20 rounded-full filter blur-2xl"
        animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        aria-hidden="true"
      ></motion.div>
      <div className="relative container mx-auto px-6 flex flex-col items-center">
        <motion.div
          className="mb-8"
          variants={logoVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.img
            src="https://i.postimg.cc/YjcBHvbx/Future-LEADers-Final-Logo-AI-file.png"
            alt="Future Leaders Logo"
            className="max-w-xs md:max-w-2xl"
            animate={{
              scale: [1, 1.02, 1],
            }}
            transition={{
              duration: 3,
              ease: 'easeInOut',
              repeat: Infinity,
            }}
          />
        </motion.div>
        <motion.div
          className="relative"
          variants={textContainerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h2 variants={textItemVariants} className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 leading-tight">Your Stage to Lead & Moment to Rise</motion.h2>
          <motion.p variants={textItemVariants} className="text-2xl md:text-3xl font-semibold my-4 text-[#F58220]">SEASON 1 | OCT 2025 - FEB 2026</motion.p>
          <motion.p variants={textItemVariants} className="text-lg md:text-xl tracking-wider text-gray-600">Organized by LEAD College (Autonomous)</motion.p>
          <motion.div variants={textItemVariants} className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://tinyurl.com/futureleaders-ca"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#F58220] hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg animate-[pulse-bright_2s_ease-in-out_infinite] w-full sm:w-auto text-center"
            >
              Register as Ambassador
            </a>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                onOpenChatModal();
              }}
              className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg w-full sm:w-auto text-center"
            >
              <img src="https://i.postimg.cc/7YxjtqRF/whatsapp.png" alt="WhatsApp" className="h-6 w-6" />
              <span>Chat with Us to Join</span>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;