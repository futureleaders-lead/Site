import React from 'react';
import { motion, Variants } from 'framer-motion';

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

const missions = [
  'Register & guide at least 5 teams from your college',
  'Coordinate with faculty & administration to ensure smooth selections',
  'Organize the college-level round and encourage maximum participation',
  'Motivate and mentor your teams to perform their best',
  'Communicate official updates & deadlines to all participants without fail',
  'Attend orientation & ambassador meetings with the Future Leaders team',
  'Accompany and support your college teams at District & Final rounds',
];

const rewards = [
  { 
    text: 'Cash Prizes up to ₹20,000', 
    description: 'turn leadership into rewards!', 
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-[#1E90FF] mr-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
  },
  { 
    text: 'Travel Reimbursement', 
    description: 'we’ve got your journey covered.',
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-[#1E90FF] mr-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>
  },
  { 
    text: 'Free Food & Stay at the Grand Finale', 
    description: 'experience the festivity in style.',
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-[#1E90FF] mr-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
  },
  { 
    text: 'Official Recognition Certificate',
    description: 'a shining badge on your profile.',
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-[#1E90FF] mr-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg>
  },
  { 
    text: 'Exclusive Future Leaders Hoodie',
    description: 'wear your pride, lead with style.',
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-[#1E90FF] mr-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M5.936 3.516A2.25 2.25 0 018.25 2.25h7.5A2.25 2.25 0 0118.064 3.516L20.25 9A2.25 2.25 0 0118 11.25H6A2.25 2.25 0 013.75 9l2.186-5.484z" /><path strokeLinecap="round" strokeLinejoin="round" d="M6 11.25v8.25A2.25 2.25 0 008.25 21.75h7.5A2.25 2.25 0 0018 19.5V11.25" /></svg>
  },
];

const whyJoinPoints = [
    'Boost your leadership & influence on campus',
    'Build powerful connections & networks',
    'Add a prestigious role to your resume',
    'Be the one who puts your college in the spotlight at Future Leaders 2025',
];


const MissionCheckIcon = () => (
    <div className="h-7 w-7 bg-[#F58220]/20 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#F58220]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
    </div>
);

interface AmbassadorProps {
  onOpenChatModal: () => void;
}

const Ambassador: React.FC<AmbassadorProps> = ({ onOpenChatModal }) => {
    return (
        <section id="ambassador" className="py-16 md:py-24 text-gray-800 overflow-hidden">
            <div className="container mx-auto px-6 max-w-7xl">
                <motion.div 
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ amount: 0.5 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">FUTURE LEADERS CAMPUS AMBASSADOR</h2>
                    <p className="text-xl md:text-2xl text-[#F58220] font-semibold mt-2">Step up. Lead your campus. Make an impact.</p>
                    <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                        Take charge, represent your college, and be part of the biggest student leadership movement!
                    </p>
                </motion.div>
                
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
                    <motion.div 
                        className="lg:col-span-3 bg-white/30 backdrop-blur-xl p-8 rounded-2xl shadow-xl border border-white/40"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ amount: 0.2 }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                    >
                        <h3 className="text-3xl font-bold mb-8 text-gray-900 border-b-4 border-[#F58220] pb-3 inline-block">Your Mission</h3>
                        <motion.ul 
                            className="space-y-5 text-lg"
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                        >
                            {missions.map((mission, index) => (
                                <motion.li key={index} className="flex items-start" variants={itemVariants}>
                                    <MissionCheckIcon />
                                    <span className="text-gray-700">{mission}</span>
                                </motion.li>
                            ))}
                        </motion.ul>
                    </motion.div>

                    <motion.div 
                        className="lg:col-span-2 flex flex-col gap-10"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ amount: 0.2 }}
                        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
                    >
                        <div className="bg-white/30 backdrop-blur-xl p-8 rounded-2xl shadow-xl border border-white/40">
                            <h3 className="text-3xl font-bold mb-8 text-gray-900 border-b-4 border-[#1E90FF] pb-3 inline-block">Your Rewards</h3>
                            <div className="space-y-5">
                                {rewards.map((reward, index) => (
                                    <div key={index} className="flex items-center">
                                        {reward.icon}
                                        <div>
                                            <p className="font-semibold text-gray-800">{reward.text}</p>
                                            <p className="text-sm text-gray-600">{reward.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="bg-white/50 backdrop-blur-xl p-8 rounded-2xl shadow-xl border-l-8 border-[#F58220]">
                           <h4 className="text-2xl font-bold mb-4 text-gray-900">Why Join?</h4>
                             <ul className="space-y-3 list-disc list-inside text-gray-700 marker:text-[#F58220]">
                                {whyJoinPoints.map((point, index) => (
                                    <li key={index}>{point}</li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                </div>
                
                <motion.div 
                    id="ambassador-cta"
                    className="mt-20 text-center bg-gradient-to-r from-[#1E90FF]/80 to-[#0D61A9]/80 backdrop-blur-lg text-white p-10 rounded-2xl shadow-2xl border border-white/30"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ amount: 0.5 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                >
                    <h4 className="text-2xl md:text-3xl font-bold mb-4">
                        This isn’t just a role, it’s an opportunity to shine, inspire, and create history!
                    </h4>
                    <p className="mt-6 text-xl font-semibold">Season 1 Awaits You!</p>
                    <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
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
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default Ambassador;