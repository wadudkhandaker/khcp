import React from 'react';
import { Mail, ArrowRight } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Get impact in your inbox
          </h2>
        </div>

        <div className="max-w-xl mx-auto">
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-white/10 border border-gray-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400"
                  placeholder="First name"
                />
              </div>
              <div>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-white/10 border border-gray-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400"
                  placeholder="Last name"
                />
              </div>
            </div>
            
            <div>
              <input
                type="email"
                className="w-full px-4 py-3 bg-white/10 border border-gray-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400"
                placeholder="Email address"
              />
            </div>
            
            <button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 px-6 rounded-xl font-medium transition-all duration-200 flex items-center justify-center space-x-2 hover:scale-105"
            >
              <span>Submit</span>
              <ArrowRight className="h-5 w-5" />
            </button>
          </form>
          
          <div className="flex items-center text-sm text-gray-400 mt-6">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2">
              <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 100-16 8 8 0 000 16zm-1-5h2v2h-2v-2zm0-8h2v6h-2V7z" fill="currentColor"/>
            </svg>
            <span>Secure form. This form is protected by encryption.</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;