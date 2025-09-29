import React from 'react';
// Fix: Import Variants type from framer-motion to resolve type errors.
import { motion, type Variants } from 'framer-motion';

const stagesData = [
  {
    number: '01',
    title: 'STAGE 1 - Campus Action Round',
    description: 'Form a team of 5 to take on leadership challenges, quizzes, and case activities - with the top 2 teams from each college advancing to the next stage.',
  },
  {
    number: '02',
    title: 'STAGE 2 - District Level',
    description: 'One-day action-packed leadership festival featuring cross-college collaboration and real-world problem-solving -- with district winners advancing to the grand finale.',
  },
  {
    number: '03',
    title: 'STAGE 3 - The Grand Finale',
    description: '2-day mega event at LEAD College packed with intense leadership, creative, and problem-solving challenges -- culminating in crowning the champions who win ₹2,00,000 and lifelong memories.',
  },
];

// Fix: Explicitly type variants with `Variants` for type safety.
const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

// Fix: Explicitly type variants with `Variants` to fix type incompatibility with the 'ease' property.
const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' }
  },
};


const StageCard: React.FC<{ number: string; title: string; description: string }> = ({ number, title, description }) => (
  <motion.div 
    className="bg-white/40 backdrop-blur-xl text-gray-800 p-8 rounded-2xl shadow-xl w-full max-w-md h-full transition-transform duration-300 hover:-translate-y-2 flex flex-col relative overflow-hidden border border-white/50"
    variants={itemVariants}
    >
    <div className="absolute -top-4 -left-4 text-9xl font-black text-gray-500 opacity-10 z-0">{number}</div>
    <div className="relative z-10">
      <h3 className="text-2xl font-bold text-[#0D61A9] mb-4 flex items-center gap-2">
         <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
        {title}
      </h3>
      <p className="text-gray-700 leading-relaxed">{description}</p>
    </div>
  </motion.div>
);

const Stages: React.FC = () => {
  return (
    <section id="stages" className="py-16 md:py-24">
      <div className="container mx-auto px-6">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.5 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          The Competition Stages
        </motion.h2>
        <motion.div 
          className="flex flex-wrap justify-center gap-8 items-stretch"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.2 }}
        >
          {stagesData.map((stage) => (
             <StageCard key={stage.title} number={stage.number} title={stage.title} description={stage.description} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Stages;