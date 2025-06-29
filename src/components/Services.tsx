import React from 'react';
import { BookOpen, Home, Briefcase, Users, Heart, Shield, ArrowRight } from 'lucide-react';

const Services = () => {
  const handleReadMoreClick = (section: string) => {
    // For demo purposes, scroll to the programs section or show an alert
    // In a real application, these would navigate to dedicated pages
    const programsSection = document.getElementById('news');
    if (programsSection) {
      programsSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    } else {
      // Fallback: show information about the section
      const sectionInfo = {
        'restoring-sight': 'Our sight restoration programs include cataract surgery, diabetic retinopathy treatment, and comprehensive eye examinations.',
        'training': 'We train local healthcare workers, ophthalmologists, and community health advocates to build sustainable eye care capacity.',
        'healthcare-systems': 'We work with governments and local organizations to strengthen eye healthcare infrastructure and systems.'
      };
      
      alert(`${sectionInfo[section as keyof typeof sectionInfo] || 'Learn more about our comprehensive eye care programs and services.'}`);
    }
  };

  const handleDonateClick = () => {
    // Trigger the global donation modal
    const event = new CustomEvent('openDonationModal');
    window.dispatchEvent(event);
  };

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            From a single surgery to the whole eye care system.
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Here is how we are working towards ending avoidable blindness and vision impairment in the Pacific.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 group">
            <div className="relative overflow-hidden">
              <img
                src="https://images.pexels.com/photos/5427650/pexels-photo-5427650.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
                alt="Restoring sight"
                className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            
            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Restoring and preserving sight
              </h3>
              
              <div className="mb-4">
                <div className="w-16 h-16 bg-[#4CAF50] rounded-lg flex items-center justify-center mb-4">
                  <Heart className="h-8 w-8 text-white" />
                </div>
              </div>
              
              <button 
                onClick={() => handleReadMoreClick('restoring-sight')}
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-xl font-medium transition-colors cursor-pointer"
              >
                Read more
              </button>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 group">
            <div className="relative overflow-hidden">
              <img
                src="https://images.pexels.com/photos/8926548/pexels-photo-8926548.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
                alt="Training eye care workers"
                className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            
            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Training the next generation of eye care workers
              </h3>
              
              <div className="mb-4">
                <div className="w-16 h-16 bg-[#4CAF50] rounded-lg flex items-center justify-center mb-4">
                  <BookOpen className="h-8 w-8 text-white" />
                </div>
              </div>
              
              <button 
                onClick={() => handleReadMoreClick('training')}
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-xl font-medium transition-colors cursor-pointer"
              >
                Read more
              </button>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 group">
            <div className="relative overflow-hidden">
              <img
                src="https://images.pexels.com/photos/5427650/pexels-photo-5427650.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
                alt="Eye healthcare systems"
                className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            
            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Eye healthcare systems are managed locally
              </h3>
              
              <div className="mb-4">
                <div className="w-16 h-16 bg-[#4CAF50] rounded-lg flex items-center justify-center mb-4">
                  <Shield className="h-8 w-8 text-white" />
                </div>
              </div>
              
              <button 
                onClick={() => handleReadMoreClick('healthcare-systems')}
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-xl font-medium transition-colors cursor-pointer"
              >
                Read more
              </button>
            </div>
          </div>
        </div>

        {/* Impact Calculator */}
        <div className="bg-gray-100 rounded-2xl p-8 mb-16">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">How you can help</h3>
            <p className="text-gray-600">Use our Impact Calculator to discover the difference your support can make</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            <div className="bg-white rounded-lg shadow p-4 text-center">
              <img 
                src="https://images.pexels.com/photos/6646917/pexels-photo-6646917.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop" 
                alt="Donation impact" 
                className="w-full h-32 object-cover rounded-lg mb-4"
              />
              <h4 className="text-xl font-bold text-gray-900">$15</h4>
              <p className="text-gray-600 text-sm">can provide up to 5 pairs of glasses</p>
            </div>
            
            <div className="bg-white rounded-lg shadow p-4 text-center">
              <img 
                src="https://images.pexels.com/photos/8926554/pexels-photo-8926554.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop" 
                alt="Donation impact" 
                className="w-full h-32 object-cover rounded-lg mb-4"
              />
              <h4 className="text-xl font-bold text-gray-900">$25</h4>
              <p className="text-gray-600 text-sm">can help restore sight to one person</p>
            </div>
            
            <div className="bg-white rounded-lg shadow p-4 text-center">
              <img 
                src="https://images.pexels.com/photos/5427650/pexels-photo-5427650.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop" 
                alt="Donation impact" 
                className="w-full h-32 object-cover rounded-lg mb-4"
              />
              <h4 className="text-xl font-bold text-gray-900">$50</h4>
              <p className="text-gray-600 text-sm">can help restore sight to up to two people</p>
            </div>
            
            <div className="bg-white rounded-lg shadow p-4 text-center">
              <img 
                src="https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop" 
                alt="Donation impact" 
                className="w-full h-32 object-cover rounded-lg mb-4"
              />
              <h4 className="text-xl font-bold text-gray-900">$100</h4>
              <p className="text-gray-600 text-sm">can manufacture up to 11 intraocular lenses used in cataract surgery</p>
            </div>
            
            <div className="bg-white rounded-lg shadow p-4 text-center">
              <img 
                src="https://images.pexels.com/photos/8926548/pexels-photo-8926548.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop" 
                alt="Donation impact" 
                className="w-full h-32 object-cover rounded-lg mb-4"
              />
              <h4 className="text-xl font-bold text-gray-900">$250</h4>
              <p className="text-gray-600 text-sm">could help restore sight to up to five people</p>
            </div>
            
            <div className="bg-white rounded-lg shadow p-4 text-center">
              <img 
                src="https://images.pexels.com/photos/5427650/pexels-photo-5427650.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop" 
                alt="Donation impact" 
                className="w-full h-32 object-cover rounded-lg mb-4"
              />
              <h4 className="text-xl font-bold text-gray-900">$500</h4>
              <p className="text-gray-600 text-sm">could cover the cost of a diagnostic lens — used to see the back of the eye</p>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <button 
              onClick={handleDonateClick}
              className="inline-flex items-center bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full font-medium transition-colors cursor-pointer"
            >
              <span>Donate now</span>
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-blue-900 text-white rounded-2xl p-12 relative overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <img 
              src="https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=1920&h=600&fit=crop" 
              alt="Background" 
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="relative z-10 max-w-3xl">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              One operation can change a life in an instant – permanent access to high quality eye care across the Pacific will change many lives.
            </h3>
            
            <button 
              onClick={handleDonateClick}
              className="inline-flex items-center bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full font-medium transition-colors cursor-pointer"
            >
              <span>Donate now</span>
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;