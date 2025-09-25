import React from 'react';
import { motion } from 'framer-motion';

const Rewards: React.FC = () => {
  return (
    <section id="rewards" className="relative py-16 md:py-24 text-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center blur-sm" 
        style={{ backgroundImage: "url('https://i.postimg.cc/jSzf8c68/Adobe-Stock-1619342844.jpg')" }}
        aria-hidden="true"
      ></div>
      <div className="absolute inset-0 bg-[#F58220]/75" aria-hidden="true"></div>
      
      <div className="relative container mx-auto px-6">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-white mb-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.5 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          Rewards That Matter
        </motion.h2>
        <motion.p 
          className="text-2xl md:text-3xl font-bold text-white mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.5 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
        >
          Total Prize Pool: ₹5 Lakhs+
        </motion.p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 mb-8">
          
          <motion.div 
            className="flex flex-col items-center justify-center order-1 md:order-1"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ amount: 0.5 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <div className="w-72 h-72 rounded-full bg-gradient-to-br from-yellow-400/50 to-amber-500/50 backdrop-blur-lg flex flex-col items-center justify-center p-4 shadow-2xl border-2 border-yellow-300/70 relative transition-transform duration-300 hover:scale-110">
              <span className="absolute -top-5 bg-white text-amber-900 font-bold px-5 py-1.5 rounded-full text-lg shadow-md">Winner</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-white" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M8 21l8 0" /><path d="M12 17l0 4" /><path d="M7 4l10 0" /><path d="M17 4v8a5 5 0 0 1 -10 0v-8" /><path d="M5 9m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M19 9m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                </svg>
              <p className="text-5xl font-bold text-white mt-2 drop-shadow-md">₹2,00,000</p>
            </div>
          </motion.div>

          <motion.div 
            className="flex flex-col items-center justify-center order-2 md:order-2"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ amount: 0.5 }}
            transition={{ duration: 0.5, ease: 'easeOut', delay: 0.2 }}
          >
            <div className="w-60 h-60 rounded-full bg-white/50 backdrop-blur-lg flex flex-col items-center justify-center p-4 shadow-2xl border-2 border-white/60 relative transition-transform duration-300 hover:scale-110">
              <span className="absolute -top-4 bg-gray-400 text-[#1a1a1a] font-bold px-4 py-1 rounded-full text-md">2nd Place</span>
              <p className="text-4xl font-bold text-gray-900 mt-4">₹1,00,000</p>
              <p className="text-lg font-semibold text-gray-600 mt-1">Runner-up</p>
            </div>
          </motion.div>
          
          <motion.div 
            className="flex flex-col items-center justify-center order-3 md:order-3"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ amount: 0.5 }}
            transition={{ duration: 0.5, ease: 'easeOut', delay: 0.4 }}
          >
            <div className="w-60 h-60 rounded-full bg-white/50 backdrop-blur-lg flex flex-col items-center justify-center p-4 shadow-2xl border-2 border-white/60 relative transition-transform duration-300 hover:scale-110">
               <span className="absolute -top-4 bg-[#0D61A9] text-white font-bold px-4 py-1 rounded-full">For Participants</span>
               <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-[#0D61A9]" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M15 15l6 -6" /><path d="M21 6v5h-5" /><path d="M3 10h11" /><path d="M3 6h11" /><path d="M3 14h5" /><path d="M3 18h5" />
               </svg>
              <p className="text-2xl font-semibold text-center text-gray-900 mt-2">Official Certificates</p>
            </div>
          </motion.div>
        </div>
        <motion.p 
            className="text-lg text-white"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ amount: 0.8 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.5 }}
        >
          Media recognition, Networking Opportunities, and More!
        </motion.p>
      </div>
    </section>
  );
};

export default Rewards;