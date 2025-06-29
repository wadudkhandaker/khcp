import React, { useState } from 'react';
import { Heart, Menu, X, Search } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false);
    if (href.startsWith('#')) {
      window.location.hash = href;
      // Force a page reload to ensure proper navigation and scroll to top
      window.location.reload();
    }
  };

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-lg z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-2 cursor-pointer" onClick={() => handleNavClick('#home')}>
            <div className="w-10 h-10 bg-[#4CAF50] rounded-full flex items-center justify-center">
              <Heart className="h-6 w-6 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-gray-900">KHCP</span>
              <span className="text-xs text-gray-600">Kailakuri Health Care Project</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <button 
              onClick={() => handleNavClick('#home')}
              className="text-gray-700 hover:text-[#4CAF50] px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 cursor-pointer"
            >
              Home
            </button>
            <button 
              onClick={() => handleNavClick('#about')}
              className="text-gray-700 hover:text-[#4CAF50] px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 cursor-pointer"
            >
              Our Story
            </button>
            <button 
              onClick={() => handleNavClick('#projects')}
              className="text-gray-700 hover:text-[#4CAF50] px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 cursor-pointer"
            >
              Projects
            </button>
            <button 
              onClick={() => handleNavClick('#get-involved')}
              className="text-gray-700 hover:text-[#4CAF50] px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 cursor-pointer"
            >
              Get Involved
            </button>
            <button 
              onClick={() => handleNavClick('#contact')}
              className="text-gray-700 hover:text-[#4CAF50] px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 cursor-pointer"
            >
              Contact
            </button>
          </div>

          {/* Right side buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="text-gray-700 hover:text-[#4CAF50] p-2">
              <Search className="h-5 w-5" />
            </button>
            <a href="#donate" className="bg-[#d32f2f] hover:bg-red-700 text-white px-6 py-2 rounded-full font-medium transition-colors duration-200">
              Donate Now
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-[#4CAF50] p-2"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
              <button
                onClick={() => handleNavClick('#home')}
                className="text-gray-700 hover:text-[#4CAF50] block px-3 py-2 rounded-md text-base font-medium cursor-pointer w-full text-left"
              >
                Home
              </button>
              <button
                onClick={() => handleNavClick('#about')}
                className="text-gray-700 hover:text-[#4CAF50] block px-3 py-2 rounded-md text-base font-medium cursor-pointer w-full text-left"
              >
                Our Story
              </button>
              <button
                onClick={() => handleNavClick('#projects')}
                className="text-gray-700 hover:text-[#4CAF50] block px-3 py-2 rounded-md text-base font-medium cursor-pointer w-full text-left"
              >
                Projects
              </button>
              <button
                onClick={() => handleNavClick('#get-involved')}
                className="text-gray-700 hover:text-[#4CAF50] block px-3 py-2 rounded-md text-base font-medium cursor-pointer w-full text-left"
              >
                Get Involved
              </button>
              <button
                onClick={() => handleNavClick('#contact')}
                className="text-gray-700 hover:text-[#4CAF50] block px-3 py-2 rounded-md text-base font-medium cursor-pointer w-full text-left"
              >
                Contact
              </button>
              <a href="#donate" className="w-full mt-4 bg-[#d32f2f] hover:bg-red-700 text-white px-6 py-2 rounded-full font-medium transition-colors duration-200 block text-center">
                Donate Now
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;