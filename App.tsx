import React, { useState } from 'react';
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

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="bg-transparent">
      <Header />
      <main>
        <Hero onOpenChatModal={() => setIsModalOpen(true)} />
        <About />
        <WhyJoin />
        <Stages />
        <Stage1Announcement />
        <Rewards />
        <Ambassador onOpenChatModal={() => setIsModalOpen(true)} />
      </main>
      <Footer />
      <JoinChatModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <JoinMovementButton />
    </div>
  );
};

export default App;