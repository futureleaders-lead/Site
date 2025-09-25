import React from 'react';
import { motion } from 'framer-motion';

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
        <div className="inline-block bg-[#F58220] px-6 py-2 rounded-md mb-8 shadow-lg">
          <h2 className="text-3xl md:text-4xl font-bold text-white">It's not just a contest, it's a movement!</h2>
        </div>
        <p className="text-lg md:text-xl text-gray-800 leading-relaxed">
          Future Leaders is India's largest platform to discover, nurture, and celebrate students with the vision to be leaders and changemakers. From classroom challenges to district-level showdowns and an electrifying grand finale, this is where passion transforms into opportunity.
        </p>
      </motion.div>
    </motion.section>
  );
};

export default About;
