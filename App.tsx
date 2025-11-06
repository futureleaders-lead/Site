import React, { useState, useMemo } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import WhyJoin from './components/WhyJoin';
import Stages from './components/Stages';
import Stage1Announcement from './components/Stage1Announcement';
import Rewards from './components/Rewards';
import Ambassador from './components/Ambassador';
import Footer from './components/Footer';
import JoinChatModal from './components/JoinChatModal';
import JoinMovementButton from './components/JoinMovementButton';
import { motion, AnimatePresence, type Variants } from 'framer-motion';

// --- DATA ---
export interface Candidate {
  name: string;
  college: string;
}

const csvData = `Name,College
NANDA GOPAL,MMNSS COLLEGE
Remin J Reji,CATHOLICATE COLLEGE
Harikrishnan T V,NSS COLLEGE OF ENGINEERING PALAKKAD
Syama P,MARY MATHA COLLEGE MANANTHAVADY
Mohammed Athiq Ashraf PK,MDIT KOZHIKODE
Navya Kannan,MERCY COLLEGE PALAKKAD
Muhammed Siyan P,NAM COLLEGE KALLIKANDY
Mohammed Fizan Faisal,AL SHIFA COLLEGE OF ARTS AND SCIENCE
Harsha Surendran K T,COLLEGE OF APPLIED SCIENCE IHRD KOZHIKODE
Malavika Brijeesh,MODEL COLLEGE (IHRD) MEENANGADI
Muhammed Fahad,METS COLLEGE OF ADVANCED STUDIES
Suryakiran M P Pradeep M R,SREE NARAYANA COLLEGE NATTIKA
Sreehari P,CCSIT PALAKKAD
Pooja Rajeevan,VERGHESE KURIEN INSTITUTE OF DAIRY AND FOOD TECHNOLOGY
Deepak Thomas Beban,SB COLLEGE
Aman Krishna,KUNNAMANGALAM GOVT ARTS AND SCIENCE COLLEGE KOZHIKODE
Adarsh Mathilingal,NSS NEMMARA
Adarsh A J,DR G R DAMODARAN COLLEGE OF SCIENCE
Nandana Prakash,CSI COLLEGE FOR ADVANCED STUDIES
Abhishek K,NSS COLLEGE NEMMARA
Sreeraj Mu,UNIVERSAL ENGINEERING COLLEGE
Aman Krishna,KUNNAMANGALAM GOVT ARTS AND SCIENCE COLLEGE
Ebin Thomas,JAYASREE ARTS AND SCIENCE COLLEGE PULPALLY WAYANAD
Abhijith M,PEOPLES CO-OPERATIVE ARTS AND SCIENCE COLLEGE MUNNAD
Amarnath N S,SNES COLLEGE OF ARTS COMMERCE AND MANAGEMENT CHETHUKADAVU
Mohammed Nabeel PK,KOTTAKKAL FAROOK ARTS AND SCIENCE COLLEGE
Limna Fathima,PSMO COLLEGE TIRURANGADI
Haseena A,MAR THOMA COLLEGE CHUNGATHARA
Anjana Raj,BJM GOVT COLLEGE CHAVARA
Vivek K Kumar,SNGS COLLEGE PATTAMBI
Anakha Mohan,ST MARY'S COLLEGE AUTONOMOUS THRISSUR
Nabil Hussain PP,MUSLIM ORPHANAGE COLLEGE OF ARTS AND SCIENCE
Nekha Nandakumar K,DE PAUL INSTITUTE OF SCIENCE AND TECHNOLOGY
Mohammed Nishan Arikkanchola,MOULANA COLLEGE OF ARTS SCIENCE AND COMMERCE CHENNARA
Muhammad Shahil PK,MAMO COLLEGE MANASSERY
Abhiram K V,UNION CHRISTIAN COLLEGE
B S Vishnu Nath,SANTHOM MALANKARA ARTS AND SCIENCE COLLEGE
Mohammed Mehfil,KMCT COLLEGE OF ENGINEERING
Adithyan Reji,IMT PUNNAPRA
Sachu S,ELDHO MOR BASELIOUS COLLEGE
Muhammed Irfan,SUNNIYYA ARABIC COLLEGE CHENNAMANGALUR
Amal Krishna V A,AJK COLLEGE OF ARTS AND SCIENCE COIMBATORE
Nasmi R,MG COLLEGE
Archana Suresh,EMBC SULTHAN BATHERY
Muhammed Adil CK,MES MAMPAD COLLEGE
Deeksha Raj R,COCHIN ARTS AND SCIENCE COLLEGE MANAKKADAVU KAKKANAD
Mrinalini M Nair,UC COLLEGE
Afra Sherin PV,AL IRSHAD ARTS AND SCIENCE COLLEGE FOR WOMEN
Joyel E J,BETHANIA INSTITUTE OF MANAGEMENT STUDIES
Adithyan K,VLB JANAKIAMMAL COLLEGE OF ARTS AND SCIENCE
Aslaha Farhath,KMEA ENGINEERING COLLEGE
Amal Faisal CK,SUNNIYYA ARABIC COLLEGE
Abishek Varghese,COLLEGE OF ENGINEERING ARANMULA
Muhammed Shakkir PS,NAJATH ARTS AND SCIENCE COLLEGE
Sneha Joby,UNIVERSITY COLLEGE OF ENGINEERING MUTTOM
Fayiz AP,MARKAZ COLLEGE OF ARTS AND SCIENCE
Akash MP,AMC ALLIED MANAGEMENT COLLEGE
Shima Santhosh K P,GOVERNMENT ENGINEERING COLLEGE THRISSUR
Abhidarsh OV,SANATANA ARTS AND SCIENCE COLLEGE KOTTAPARA
Amana Ashraf,LITTLE FLOWER COLLEGE GURUVAYUR
Ajeesh T,IHRD PAZHAYANNUR
Anamika Gandhi,MAR THOMA COLLEGE OF SCIENCE AND TECHNOLOGY AYUR
Ajvad K,JAMIA NADDWIYA ARTS AND SCIENCE COLLEGE EDAVANNA
Dona Lonappan,SAHRDAYA COLLEGE OF ENGINEERING AND TECHNOLOGY KODAKARA THRISSUR
Muhammed Razi K,MG COLLEGE IRITTY
Abeyson Siby,CMS COLLEGE
Abin K J,COLLEGE OF APPLIED SCIENCE CHELAKKARA IHRD
Sonu Krishna M,IHRD COLLEGE CHELAKKARA
Rejo Alexander,ST JOSEPH COLLEGE OF COMMUNICATION
Muhammad Farhan PP,ANVARUL ISLAM ARABIC COLLEGE KUNIYIL
Salma Thaslam,MUSALIAR COLLEGE OF ENGINEERING CHIRAYINKEEZHU
Faheem Musthafa CP,MALABAR COLLEGE OF ADVANCED STUDIES
Ajiep Varghese Prasad,MAR AUGUSTHINOS COLLEGE RAMAPURAM KOTTAYAM
Bharath PB,COLLEGE OF APPLIED SCIENCE CHELAKKARA
Anamika,CHRIST COLLEGE
Athilu Alfaj,MORES
Nithin,COE TRIKKARIPPUR
Alna N R,THARANANELLUR ARTS AND SCIENCE COLLEGE THANISSERY
Vishnu P Shaji,COLLEGE OF APPLIED SCIENCE KANJIRAPPALLY
Hafees Javad,FEDERAL INSTITUTE OF SCIENCE AND TECHNOLOGY
Muhammed Samer M,SREEPATHY INSTITUTE OF ADVANCED STUDIES
Christy Philip,ST ALOYSIUS COLLEGE EDATHUA
Dhanush C K,KODIYERI BALAKRISHNAN SMARAKA GOVERNMENT COLLEGE THALASSERY
JK Adithyan,SREE SANKARA VIDYAPEETOM
Abhinav Shibukumar,VIDYA ACADEMY OF SCIENCE AND TECHNOLOGY THALAKOTTUKARA
Fazil Sali,ST GEORGE’S COLLEGE ARUVITHURA
Milan K Joy,CMS COLLEGE KOTTAYAM
Kailasnadh K K,GOVERNMENT ENGINEERING COLLEGE THRISSUR
Goutham Santhosh K S,CHRIST COLLEGE OF ENGINEERING IRINJALAKUDA
Arjun V A,MANGALAM MC VARGHESE COLLEGE OF ARTS AND SCIENCE ETTUMANOOR
Abu Fhad,DHARMAGIRI COLLEGE OF ARTS AND SCIENCE KUNNUMPURAM CHERUPPADIMALA
Nandana I R,ST JOSEPH'S COLLEGE
Shalvin Biju,ST STEPHEN'S COLLEGE UZHAVOOR
Nandak AR,SCMS SCHOOL OF ENGINEERING AND TECHNOLOGY
Augusty Jussa,PRESENTATION COLLEGE OF APPLIED SCIENCES
Farhan Ali PP,MANKADA GOVERNMENT COLLEGE
Shazwan V S,VIT CHENNAI
Arshin Giril,NIRMALA COLLEGE OF ARTS AND SCIENCE
Alfiyas Muhammed P,ST MARY'S COLLEGE SULTHAN BATHERY
Arjith M,GOVT VICTORIA COLLEGE
Sreekutty KR,SREE NARAYANA GURU COLLEGE OF ADVANCED STUDIES
Muhammed Sebin,AMC GROUP OF EDUCATIONAL INSTITUTIONS MANISSERI
Muhammed Farhan A H,ALPHONSA ARTS AND SCIENCE COLLEGE SULTHAN BATHERY
Muhammed Shibil K,CHMKM GOVT ARTS AND SCIENCE COLLEGE KODUVALY
Mohamed Anas,KMCT ARTS AND SCIENCE COLLEGE KUTTIPPURAM
Muhammed Shahim UK,KUNIYA COLLEGE OF ARTS AND SCIENCE
Ajmal Aju,ST ANNE'S DEGREE COLLEGE VIRAJPET
Shahzad S,GOVT ARTS AND SCIENCE COLLEGE PATHIRIPALA
Muhammed Roshan,AIMER BUSINESS SCHOOL
Noufal Sha,Saintgits College of Applied Science
Adith P V,MPMM SN TRUSTS COLLEGE SHORANUR
Abdul Hanan P,SREE KERALAVARMA COLLEGE THRISSUR
Sreeram L,AHALIA SCHOOL OF ENGINEERING AND TECHNOLOGY
Milan M Shaji,KRISTU JYOTI COLLEGE OF MANAGEMENT AND TECHNOLOGY CHANGANASSERY
Fazil Ahammed,PSMO COLLEGE THIRURANGADI
Muhammed Dilshad,MARKAZ ARTS AND SCIENCE COLLEGE KARTHALA ATHAVANADU
Mubarak Ibrahim,TKM COLLEGE OF ARTS AND SCIENCE
Akbarsha S,KUMBALATHU SANKUPPILLAI MEMORIAL DB COLLEGE SASTHAMCOTTA
Aswin Shibu,MANGALAM COLLEGE OF ENGINEERING ETTUMANOOR
Airyn Tony,VIMALA COLLEGE AUTONOMOUS THRISSUR
Amal Joy,ST JOSEPH'S COLLEGE DEVAGIRI
Suhana Nizar,NIRMALA COLLEGE MUVATTUPUZHA
Abdulla Thahnoon MK,PEEKAY COLLEGE
Vasudev Maheswar P R,PRAJYOTI NIKETAN COLLEGE
Abhina M V,GOVERNMENT COLLEGE OF ENGINEERING KANNUR
Bivek B,SARABHAI INSTITUTE OF SCIENCE AND TECHNOLOGY VELLANAD
Sanal C S,IHRD MALAMPUZHA
Shahla Shirin T S,THE ELEGANT ARTS AND SCIENCE COLLEGE
Fathima Sulthana,GOVERNMENT COLLEGE CHITTUR
Muhammed Fahad,UNIVERSITY OF DELHI
Devi M,ST JOSEPH'S UNIVERSITY
Ashwin Abhilash,DCSMAT VAGAMON
Pemmadi Manoj,VELAGAPUDI RAMAKRISHNA SIDDHARTHA ENGINEERING COLLEGE
Muhammed Mujeer T L,DR B R AMBEDKAR MEMORIAL GOVT ARTS AND SCIENCE COLLEGE BALUSSERY
Dhaleela M S,ST TERESA'S COLLEGE
Adhil Rifayin K S,METS COLLEGE OF ADVANCED STUDIES MALA
Safna Kattil,NOBLE WOMEN'S COLLEGE
Ali Fidhan,SAFI INSTITUTE OF ADVANCED STUDY
Dino Davis,ADISANKARA INSTITUTE OF ENGINEERING AND TECHNOLOGY
Afeefa M S,FISAT
Haniel Henry,JYOTHI ENGINEERING COLLEGE
Aflah Ali,IES COLLEGE OF ENGINEERING CHITILAPILLY
Muhammed Midhilaj OV,BLOSSOM ARTS AND SCIENCE COLLEGE
Vishnu VS,AHALIA SCHOOL OF ENGINEERING AND TECHNOLOGY
Solomon Vallupara Prinson,MADRAS CHRISTIAN COLLEGE
Mohammed Shibili A,MADIN ARTS AND SCIENCE COLLEGE
Pavithra P B,RAJAGIRI COLLEGE OF SOCIAL SCIENCES
Tej Mohammed,MADRAS CHRISTIAN COLLEGE
Vijil Krishna,SNGC ALATHUR
Vismay,UNION CHRISTIAN COLLEGE ALUVA
Meghna R Shenoy,CHINMAYA COLLEGE OF ARTS COMMERCE AND SCIENCE TRIPUNITHURA
Hannah K G,NAIPUNNYA INSTITUTE OF MANAGEMENT AND INFORMATION TECHNOLOGY PONGAM
Anand Maheshwar,COLLEGE OF ENGINEERING TRIVANDRUM
Ashirvad R V,NEHRU ARTS AND SCIENCE COLLEGE COIMBATORE
Fathima Natha C,LEMENT COLLEGE OF ADVANCED STUDIES PATTAMBI
Nandana Prakash,CSI COLLEGE FOR ADVANCED STUDIES PUNNAKKAD
Ahamed Shan,DGM MES MAMPAD COLLEGE
Vishnu Narayanan T,YUVASHETRA INSTITUTE OF MANAGEMENT STUDIES
P Sreeraj,COLLEGE OF AGRICULTURE VELLAYANI
Muhammad Sinan S M,MARY MATHA ARTS AND SCIENCE COLLEGE MANANTHAVADY
Neerav Vampulliparambil Sivan,SAHRDAYA COLLEGE OF ADVANCED STUDIES
Christo David,PEAFOWL ACADEMY
S D Alan,UKF COLLEGE OF ENGINEERING
Muhammed Aslih P,RAJIV GANDHI MEMORIAL ARTS AND SCIENCE COLLEGE ATTAPPADI
Saniya Thomas,ST THOMAS COLLEGE AUTONOMOUS THRISSUR
Abel C Boban,SAINTGITS COLLEGE OF APPLIED SCIENCES
Meron Manual,SACRED HEART COLLEGE
Berlin Binu Mathews,BISHOP ABRAHAM MEMORIAL COLLEGE THURUTHICADU
Muhammad Farzeen,MES ASMABI COLLEGE
Hadi Rashad V K,FAROOK COLLEGE KOZHIKODE
Aman Hisham,ROUZ U ARABIC COLLEGE
Muhammed Shamil,JDT ISLAMIC COLLEGE
Devang Pradeep,PROVIDENCE COLLEGE OF ENGINEERING
Mufeed P M,JAYASREE ARTS AND SCIENCE COLLEGE PULPALLY WAYANAD
Nafid K P,GASC KONDOTTY
Hariprakash K,ST ALOYSIUS COLLEGE
Sreeraj P,ALLIED MANAGEMENT COLLEGE MANISSERY
Davis S Olickal,MAR THOMA COLLEGE TIRUVALLA
Devika K S,SSV COLLEGE VALAYANCHIRANGARA
Anvar Sadiq M A,LNASC MAYANNUR
Sudheesh Krishna S P,MARIAN ENGINEERING COLLEGE
Muhammed Barsan S H,MAR GREGORIOUS COLLEGE OF ARTS AND SCIENCE
Megha M,ADOOR
Farhan Mubheen,SACRED HEART COLLEGE THEVARA
Aslam Shajahan,BJM COLLEGE
S Malavika,SREE NARAYANA COLLEGE FOR WOMEN KOLLAM
Muhammed Arshed,CPA COLLEGE OF GLOBAL STUDIES
Gauri Vinod Nair,SCMS SCHOOL OF ENGINEERING AND TECHNOLOGY
Muhammad Sinan,DIGNITY KOZHIKODE
Vishnu Banarji,GOVT COLLEGE ELANTHOOR
Ashish Udayan,SANTHOM MALANKARA ARTS AND SCIENCE COLLEGE EDANJI
Shamhan KK,MTM COLLEGE VELIANCODE
Nandana S,COCHIN ARTS AND SCIENCE COLLEGE
Muhammed Sirajudeen,ERANAD KNOWLEDGE CITY COLLEGE OF COMMERCE AND SCIENCE
Mohammed Rishad KC,CPA COLLEGE OF GLOBAL STUDIES
Manasa Sunil,CHRIST COLLEGE PULIYANMALA
S Harsha,HOLY CROSS IMT
R Gokul Krishnan,KERALA INSTITUTE OF TOURISM AND TRAVEL STUDIES
Muhammed Bilal,GOVERNMENT COLLEGE MOKERI
Ronwole Raymond,CCSIT PERAMANGALAM
Ananya P,NSS COLLEGE OF ENGINEERING
Flemin Wilson,ST ALOYSIUS COLLEGE
Afsibah Musthafa C,MES PONNANI COLLEGE`;

export const candidates: Candidate[] = csvData
  .split('\n')
  .slice(1) // Skip header
  .filter(line => line.trim() !== '')
  .map(line => {
    const parts = line.split(',');
    const name = parts[0].trim();
    const college = parts.slice(1).join(',').trim();
    return { name, college };
  });

// --- MODAL COMPONENT ---
interface CandidatesModalProps {
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

const CandidatesModal: React.FC<CandidatesModalProps> = ({ isOpen, onClose }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredCandidates = useMemo(() => {
        if (!searchTerm) {
            return candidates;
        }
        return candidates.filter(
            c =>
                c.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                c.college.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }, [searchTerm]);

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
                    aria-modal="true"
                    role="dialog"
                >
                    <motion.div
                        className="bg-white/60 backdrop-blur-xl rounded-2xl shadow-2xl p-6 md:p-8 w-full max-w-2xl h-[80vh] flex flex-col relative border border-white/30"
                        variants={modalVariants}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button onClick={onClose} className="absolute top-3 right-3 text-gray-400 hover:text-gray-800 transition-colors z-20" aria-label="Close dialog">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 text-center">Registered Ambassadors</h2>
                        
                        <div className="mb-4">
                            <input
                                type="text"
                                placeholder="Search by name or college..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full px-4 py-2 bg-white/50 border border-gray-300/50 rounded-md shadow-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#F58220] focus:border-transparent"
                                aria-label="Search candidates"
                            />
                        </div>
                        
                        <div className="flex-grow overflow-y-auto pr-2">
                            {filteredCandidates.length > 0 ? (
                                <ul className="space-y-2">
                                    {filteredCandidates.map((candidate, index) => (
                                        <li key={index} className="bg-white/30 p-3 rounded-lg shadow-sm">
                                            <p className="font-semibold text-gray-800">{candidate.name}</p>
                                            <p className="text-sm text-gray-600">{candidate.college}</p>
                                        </li>
                                    ))}
                                </ul>
                            ) : (
                                <p className="text-center text-gray-600 mt-8">No candidates found.</p>
                            )}
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};


const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCandidatesModalOpen, setIsCandidatesModalOpen] = useState(false);

  const handleOpenCandidatesModal = () => {
    // Analytics: track when users open the candidate modal
    console.log('Analytics Event: candidate_modal_opened');
    setIsCandidatesModalOpen(true);
  };

  return (
    <div className="bg-transparent">
      <Header />
      <main>
        <Hero 
          onOpenChatModal={() => setIsModalOpen(true)} 
          onOpenCandidatesModal={handleOpenCandidatesModal} 
          candidates={candidates}
        />
        <About />
        <WhyJoin />
        <Stages />
        <Stage1Announcement />
        <Rewards />
        <Ambassador onOpenChatModal={() => setIsModalOpen(true)} />
      </main>
      <Footer />
      <JoinChatModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <CandidatesModal isOpen={isCandidatesModalOpen} onClose={() => setIsCandidatesModalOpen(false)} />
      <JoinMovementButton />
    </div>
  );
};

export default App;