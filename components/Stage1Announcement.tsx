import React from 'react';
import { motion, Variants } from 'framer-motion';

const tasks = [
  {
    title: 'Campus Cleaning Initiative',
    objective: 'Promote responsibility, hygiene, and leadership through hands-on community action.',
    task: 'Clean a 100 square feet area within your college campus.',
    outcome: 'A cleaner and more organized environment that demonstrates teamwork, commitment, and social responsibility.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#0D61A9]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
    )
  },
  {
    title: 'Tree Plantation / Gardening',
    objective: 'Contribute to sustainability and environmental awareness.',
    task: 'Plant a tree or establish a small gardening project within the campus.',
    outcome: 'A green initiative that symbolizes growth, nurturing, and long-term vision.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#0D61A9]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7.014A8.003 8.003 0 0117.657 18.657z" /><path strokeLinecap="round" strokeLinejoin="round" d="M9.879 16.121A3 3 0 1014.12 11.88l-4.242 4.242z" /></svg>
    )
  },
  {
    title: 'Poster Creation',
    objective: 'Encourage creativity and awareness-building.',
    task: 'Design a poster on a relevant topic (social issues, leadership, sustainability, innovation, etc.).',
    outcome: 'A visually impactful poster that spreads awareness and reflects the creativity of future leaders.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#0D61A9]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
    )
  },
  {
    title: 'Short Video Creation',
    objective: 'Develop communication and digital storytelling skills.',
    task: 'Create a 30–60 second video on a relevant theme that conveys a powerful message.',
    outcome: 'A concise and engaging video that showcases ideas in an impactful way.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#0D61A9]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
    )
  },
  {
    title: 'Crowd-Pulling Activity & Future Leaders Introduction',
    objective: 'Test event management, team coordination, and crowd engagement abilities.',
    task: 'Plan and conduct an interactive game (5–10 minutes) that can attract at least 25 participants. Record a video introduction of “Future Leaders” during or after the activity.',
    outcome: 'An energetic, well-organized activity that demonstrates leadership, inclusivity, and the ability to inspire a group.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#0D61A9]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.653-.124-1.282-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.653.124-1.282.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
    )
  }
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' }
  },
};

const Stage1Announcement: React.FC = () => {
  return (
    <section id="stage1-details" className="relative py-16 md:py-24">
       <div 
        className="absolute inset-0 bg-cover bg-center blur-sm" 
        style={{ backgroundImage: "url('https://i.postimg.cc/RFPK7014/Adobe-Stock-677124043.jpg')" }}
        aria-hidden="true"
      ></div>
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/70 to-indigo-800/80" aria-hidden="true"></div>

      <div className="relative container mx-auto px-6">
        <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.5 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
        >
            <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">Campus Action Round</h2>
            <p className="text-xl md:text-2xl text-amber-300 font-semibold mt-2">Future Leaders Stage 1</p>
            <p className="mt-4 text-lg text-gray-200 max-w-3xl mx-auto">
                Stage 1 of the Future Leaders Movement is about to commence! 🚀 This stage will focus on institution-level competitions, which will serve as the selection criteria for advancing to the next stage. All participating teams are required to complete the following tasks within their own campuses:
            </p>
        </motion.div>

        <motion.div 
            className="grid md:grid-cols-2 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.2 }}
        >
            {tasks.map((task, index) => (
                <motion.div
                    key={index}
                    className={`bg-white/40 backdrop-blur-lg p-8 shadow-xl rounded-2xl border border-white/50 ${index === 4 ? 'md:col-span-2' : ''}`}
                    variants={itemVariants}
                >
                    <div className="flex items-start mb-4">
                        {task.icon}
                        <h3 className="text-xl font-bold text-gray-900 ml-4">{index + 1}. {task.title}</h3>
                    </div>
                    <div className="space-y-3 pl-12 text-gray-700">
                        <p><strong className="font-semibold text-gray-800">Objective:</strong> {task.objective}</p>
                        <p><strong className="font-semibold text-gray-800">Task:</strong> {task.task}</p>
                        <p><strong className="font-semibold text-gray-800">Expected Outcome:</strong> {task.outcome}</p>
                    </div>
                </motion.div>
            ))}
        </motion.div>

        <motion.div 
            className="mt-12 bg-white/50 backdrop-blur-xl p-8 rounded-2xl shadow-2xl border border-white/60"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.5 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
        >
            <h3 className="text-2xl font-bold text-[#0D61A9] mb-4 text-center">Important Notes</h3>
            <ul className="space-y-3 text-gray-800 max-w-2xl mx-auto">
                <li className="flex items-start"><span className="text-green-600 font-bold text-2xl mr-2 mt-px leading-none">✓</span> All activities should be conducted and documented within your campus.</li>
                <li className="flex items-start"><span className="text-green-600 font-bold text-2xl mr-2 mt-px leading-none">✓</span> Teams must submit photo/video proof for each task.</li>
                <li className="flex items-start"><span className="text-green-600 font-bold text-2xl mr-2 mt-px leading-none">✓</span> Submissions will be evaluated based on creativity, execution quality, teamwork, and impact.</li>
            </ul>
            <div className="mt-8 text-center">
                 <p className="text-lg font-bold text-gray-900 bg-amber-300 inline-block px-4 py-2 rounded-lg shadow">
                    📌 Deadline for submission: November 30, 2025
                </p>
                <p className="mt-4 text-xl font-semibold text-gray-900">
                    👉 Don’t miss this opportunity to be part of the Future Leaders Movement and secure your place in the next stage!
                </p>
            </div>
        </motion.div>

      </div>
    </section>
  )
}

export default Stage1Announcement;