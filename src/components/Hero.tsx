import React from 'react';
import { ArrowRight } from 'lucide-react';
import DonationForm from './DonationForm';

const Hero = () => {
  const handleLearnMoreClick = () => {
    // Scroll to the about section
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const handleDonateClick = () => {
    // This will be handled by the global donation handler in App.tsx
    const event = new CustomEvent('openDonationModal');
    window.dispatchEvent(event);
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
          alt="Community helping hands"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/60"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between w-full">
        {/* Left Content */}
        <div className="flex-1 max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Providing healthcare to those who need it most
          </h1>
          
          <p className="text-xl text-white/90 mb-8">
            Kailakuri Health Care Project delivers quality healthcare to the poorest communities in Bangladesh
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 items-start">
            <button 
              onClick={handleLearnMoreClick}
              className="group bg-[#4CAF50] hover:bg-green-600 text-white px-8 py-4 rounded-full font-medium text-lg transition-all duration-200 flex items-center space-x-2 hover:scale-105"
            >
              <span>Learn More</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button 
              onClick={handleDonateClick}
              className="group bg-[#d32f2f] hover:bg-red-700 text-white px-8 py-4 rounded-full font-medium text-lg transition-all duration-200 flex items-center space-x-2 hover:scale-105"
            >
              <span>Donate Now</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Right Sidebar - Sticky Donation Form */}
        <div className="hidden lg:block ml-8">
          <div className="sticky top-24">
            <DonationForm />
          </div>
        </div>
      </div>

      {/* Mobile Donation Form */}
      <div className="lg:hidden fixed bottom-4 right-4 z-50">
        <button 
          onClick={handleDonateClick}
          className="bg-[#d32f2f] hover:bg-red-700 text-white px-6 py-3 rounded-full font-medium shadow-lg transition-colors flex items-center space-x-2"
        >
          <span>Donate</span>
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce lg:hidden">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;