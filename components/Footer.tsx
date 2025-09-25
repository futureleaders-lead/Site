import React from 'react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="relative text-white py-16">
      <div 
        className="absolute inset-0 bg-cover bg-center" 
        style={{ backgroundImage: "url('https://i.postimg.cc/m2v2FzkY/IMG-4043.jpg')" }}
        aria-hidden="true"
      ></div>
      <div className="absolute inset-0 bg-gradient-to-t from-[#052b4d]/70 to-[#1E90FF]/60" aria-hidden="true"></div>
      
      <div className="relative container mx-auto px-6">
        <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-12 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.5 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          Contact
        </motion.h2>

        <div className="flex flex-col md:flex-row justify-center items-center md:items-start gap-12 lg:gap-20 max-w-4xl mx-auto">
          {/* Left: Contact Info */}
          <motion.div 
              className="bg-white/20 backdrop-blur-lg p-8 rounded-2xl shadow-2xl border border-white/30 w-full max-w-md"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ amount: 0.4 }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          >
            <div className="space-y-3 text-lg text-center md:text-left">
              <p className="font-bold text-xl text-white">Sagar Pradeep</p>
              <p className="text-gray-300 -mt-2">Student Coordinator</p>
              <p className="pt-3 font-semibold text-white">+91 95266 60400</p>
              <p>
                <a href="mailto:futureleaders@lead.ac.in" className="text-[#F58220] hover:underline">futureleaders@lead.ac.in</a>
              </p>
              <p className="pt-3 text-gray-300">LEAD College (Autonomous), Dhoni, Palakkad - 678009</p>
            </div>
          </motion.div>
          
          {/* Right: Logos */}
          <motion.div 
            className="flex flex-col items-center justify-center gap-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ amount: 0.4 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.4 }}
          >
              <img
                  src="https://i.postimg.cc/XJjv7RJt/LEAD-LOGO-WHITE.png"
                  alt="LEAD College Logo"
                  className="h-24"
              />
              <img
                  src="https://i.postimg.cc/VN76cFMB/white-Future-LEADers-Final-Logo-AI-file.png"
                  alt="Future Leaders Logo"
                  className="h-14"
              />
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
