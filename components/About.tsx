import React from 'react';
import { motion } from 'framer-motion';
import RotatingText from './RotatingText';

const About: React.FC = () => {
  return (
    <motion.section
      id="about"
      className="py-16 md:py-24"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ amount: 0.3 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <motion.div 
        className="container mx-auto px-6 max-w-4xl bg-white/30 backdrop-blur-xl rounded-2xl p-10 md:p-16 shadow-lg border border-white/40 text-center"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ amount: 0.5 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      >
        <div className="flex items-center justify-center mb-8 h-16">
          <motion.h2
            layout
            transition={{ type: 'spring', damping: 30, stiffness: 400 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mr-2"
          >
            It's
          </motion.h2>
          
          <RotatingText
            texts={['not just a contest,', 'a movement!']}
            mainClassName="px-2 sm:px-2 md:px-3 bg-[#F58220] text-white overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg flex items-center font-bold text-3xl md:text-4xl whitespace-nowrap shadow-lg"
            splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
            staggerFrom={'last'}
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-120%" }}
            staggerDuration={0.025}
            transition={{ type: "spring", damping: 30, stiffness: 400 }}
            rotationInterval={3000}
          />
        </div>
        <p className="text-lg md:text-xl text-gray-800 leading-relaxed">
          Future Leaders is India's largest platform to discover, nurture, and celebrate students with the vision to be leaders and changemakers. From classroom challenges to district-level showdowns and an electrifying grand finale, this is where passion transforms into opportunity.
        </p>
      </motion.div>
    </motion.section>
  );
};

export default About;