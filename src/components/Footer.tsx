import React from 'react';
import { Heart, Facebook, Twitter, Instagram, Linkedin, ArrowRight } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          {/* Logo and Description */}
          <div className="mb-8">
            <div className="flex items-center justify-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-[#4CAF50] rounded-full flex items-center justify-center">
                <Heart className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold">The Hollows</span>
            </div>
            
            <p className="text-gray-400 mb-8 leading-relaxed max-w-2xl mx-auto">
              Building stronger communities through compassionate service, 
              innovative programs, and unwavering commitment to those in need.
            </p>
            
            <div className="flex justify-center space-x-4 mb-8">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-gray-800 hover:bg-[#4CAF50] rounded-full flex items-center justify-center transition-colors duration-200"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
            
            <div>
              <a href="#donate" className="inline-flex items-center bg-[#d32f2f] hover:bg-red-700 text-white px-6 py-3 rounded-full font-medium transition-colors">
                <span>Donate now</span>
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left">
              <p className="text-gray-400 text-sm mb-2">
                The Fred Hollows Foundation NZ is a registered charitable organisation under the Charities Act 2005.
              </p>
              <p className="text-gray-400 text-sm mb-2">
                Charities Commission registration number is CC23722.
              </p>
              <p className="text-gray-400 text-sm">
                © 2025 The Fred Hollows Foundation NZ. All rights reserved.
              </p>
            </div>
            
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#privacy" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                Privacy Statement & Donor Bill of Rights
              </a>
              <a href="#terms" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                Terms & conditions
              </a>
            </div>
          </div>
          
          <div className="mt-6 flex flex-wrap gap-4 justify-center md:justify-start">
            <img width="264" height="102" alt="Certification logo" src="https://www.hollows.org.nz/wp-content/uploads/2024/11/cid.png" className="h-12" />
            <img width="224" height="68" alt="Certification logo" src="https://www.hollows.org.nz/wp-content/uploads/2024/11/pf.png" className="h-12" />
            <img width="236" height="96" alt="Certification logo" src="https://www.hollows.org.nz/wp-content/uploads/2024/11/finz.png" className="h-12" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;