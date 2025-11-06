import React, { useState, useEffect } from 'react';
// Fix: Import Variants type from framer-motion to resolve type errors.
import { motion, AnimatePresence, type Variants } from 'framer-motion';

interface JoinChatModalProps {
  isOpen: boolean;
  onClose: () => void;
}

// Fix: Explicitly type variants with `Variants` for type safety.
const backdropVariants: Variants = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

// Fix: Explicitly type variants with `Variants` to fix type incompatibility with the 'type' property.
const modalVariants: Variants = {
  hidden: { y: "-50%", opacity: 0, scale: 0.95 },
  visible: { 
    y: "0", 
    opacity: 1, 
    scale: 1,
    transition: { delay: 0.1, type: 'spring', stiffness: 150, damping: 20 } 
  },
  exit: { y: "50%", opacity: 0, scale: 0.95, transition: { duration: 0.2 } }
};


const JoinChatModal: React.FC<JoinChatModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [year, setYear] = useState('');
  const [course, setCourse] = useState('');
  const [college, setCollege] = useState('');
  const [phone, setPhone] = useState('');

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEsc);

    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [onClose]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !year || !course || !college || !phone) {
        alert('Please fill in all fields.');
        return;
    }

    // --- Background Google Form Submission ---
    const GOOGLE_FORM_ACTION_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSdMc2bhuyVSDoZvvS4Kru5SDxZslfyNb5QtaMJ2nD84dKaxrA/formResponse';
    const NAME_ENTRY_ID = 'entry.907798525';
    const YEAR_ENTRY_ID = 'entry.577533794';
    const COURSE_ENTRY_ID = 'entry.1607036172';
    const COLLEGE_ENTRY_ID = 'entry.280603916';
    const PHONE_ENTRY_ID = 'entry.1254547351';

    const formData = new FormData();
    formData.append(NAME_ENTRY_ID, name);
    formData.append(YEAR_ENTRY_ID, year);
    formData.append(COURSE_ENTRY_ID, course);
    formData.append(COLLEGE_ENTRY_ID, college);
    formData.append(PHONE_ENTRY_ID, phone);
    
    // This sends the data in the background. We use 'no-cors' mode because Google Forms
    // doesn't provide the necessary headers for a browser to read the response.
    // The user experience is unaffected as we don't wait for a response.
    fetch(GOOGLE_FORM_ACTION_URL, {
        method: 'POST',
        mode: 'no-cors',
        body: formData,
    }).catch(error => console.error('Error submitting to Google Form:', error));

    // --- WhatsApp Redirection (existing logic) ---
    const message = `Hello, I am interested to know more about Future Leaders. My name is ${name}. I am a ${year} ${course} student of ${college}. My phone number is ${phone}.`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/918089146479?text=${encodedMessage}`;

    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    
    setName('');
    setYear('');
    setCourse('');
    setCollege('');
    setPhone('');
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex justify-center items-center p-4"
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          onClick={onClose}
        >
          <motion.div
            className="bg-white/60 backdrop-blur-xl rounded-2xl shadow-2xl p-8 w-full max-w-lg relative border border-white/30"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={(e) => e.stopPropagation()}
            aria-modal="true"
            role="dialog"
            aria-labelledby="modal-title"
          >
            <button onClick={onClose} className="absolute top-3 right-3 text-gray-400 hover:text-gray-800 transition-colors" aria-label="Close dialog">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
            <h2 id="modal-title" className="text-2xl font-bold text-gray-900 mb-2">Join via WhatsApp</h2>
            <p className="text-gray-700 mb-6">Please provide your details so that we can contact you back.</p>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required className="mt-1 block w-full px-3 py-2 bg-white/50 border border-gray-300/50 rounded-md shadow-sm placeholder-gray-500 focus:outline-none focus:ring-[#F58220] focus:border-[#F58220] sm:text-sm" />
              </div>

              <div>
                <label htmlFor="year" className="block text-sm font-medium text-gray-700">Year of Study</label>
                <select id="year" value={year} onChange={(e) => setYear(e.target.value)} required className="mt-1 block w-full px-3 py-2 bg-white/50 border border-gray-300/50 rounded-md shadow-sm focus:outline-none focus:ring-[#F58220] focus:border-[#F58220] sm:text-sm">
                  <option value="" disabled>Select Year</option>
                  <option value="1st Year">1st Year</option>
                  <option value="2nd Year">2nd Year</option>
                  <option value="3rd Year">3rd Year</option>
                  <option value="4th Year">4th Year</option>
                  <option value="5th Year">5th Year</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="course" className="block text-sm font-medium text-gray-700">Course (e.g., B.Tech CSE)</label>
                <input type="text" id="course" value={course} onChange={(e) => setCourse(e.target.value)} required className="mt-1 block w-full px-3 py-2 bg-white/50 border border-gray-300/50 rounded-md shadow-sm placeholder-gray-500 focus:outline-none focus:ring-[#F58220] focus:border-[#F58220] sm:text-sm" />
              </div>

              <div>
                <label htmlFor="college" className="block text-sm font-medium text-gray-700">College Name</label>
                <input type="text" id="college" value={college} onChange={(e) => setCollege(e.target.value)} required className="mt-1 block w-full px-3 py-2 bg-white/50 border border-gray-300/50 rounded-md shadow-sm placeholder-gray-500 focus:outline-none focus:ring-[#F58220] focus:border-[#F58220] sm:text-sm" />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
                <input type="tel" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} required className="mt-1 block w-full px-3 py-2 bg-white/50 border border-gray-300/50 rounded-md shadow-sm placeholder-gray-500 focus:outline-none focus:ring-[#F58220] focus:border-[#F58220] sm:text-sm" />
              </div>

              <button type="submit" className="w-full inline-flex justify-center items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-all duration-300 transform hover:scale-105">
                Continue to WhatsApp
              </button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default JoinChatModal;
