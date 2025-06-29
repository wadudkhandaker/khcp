import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Programs from './components/Programs';
import Contact from './components/Contact';
import Footer from './components/Footer';
import OurStory from './components/OurStory';
import Projects from './components/Projects';
import GetInvolved from './components/GetInvolved';
import ContactPage from './components/ContactPage';
import NewsPage from './components/NewsPage';
import DonationModal from './components/DonationModal';

function App() {
  const [isDonationModalOpen, setIsDonationModalOpen] = useState(false);
  
  // Simple routing based on hash
  const currentPage = window.location.hash.slice(1) || 'home';

  // Scroll to top when page changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  // Global donation handler
  const handleDonateClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsDonationModalOpen(true);
  };

  // Add global click handler for donate links and custom events
  useEffect(() => {
    const handleGlobalClick = (e: Event) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' && target.getAttribute('href') === '#donate') {
        e.preventDefault();
        setIsDonationModalOpen(true);
      }
    };

    const handleCustomDonationEvent = () => {
      setIsDonationModalOpen(true);
    };

    document.addEventListener('click', handleGlobalClick);
    window.addEventListener('openDonationModal', handleCustomDonationEvent);
    
    return () => {
      document.removeEventListener('click', handleGlobalClick);
      window.removeEventListener('openDonationModal', handleCustomDonationEvent);
    };
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case 'about':
      case 'our-story':
        return <OurStory />;
      case 'projects':
        return <Projects />;
      case 'get-involved':
        return <GetInvolved />;
      case 'contact':
        return <ContactPage />;
      case 'news':
        return <NewsPage />;
      case 'home':
      default:
        return (
          <main>
            <Hero />
            <About />
            <Services />
            <Programs />
            <Contact />
          </main>
        );
    }
  };

  return (
    <div className="min-h-screen">
      <Header />
      {renderPage()}
      <Footer />
      
      {/* Global Donation Modal */}
      <DonationModal 
        isOpen={isDonationModalOpen} 
        onClose={() => setIsDonationModalOpen(false)} 
      />
    </div>
  );
}

export default App;