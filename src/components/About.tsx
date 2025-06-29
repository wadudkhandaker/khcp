import React from 'react';
import { Users, Target, Award, Heart, ArrowRight } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Users, number: '10,000+', label: 'People Helped' },
    { icon: Target, number: '25+', label: 'Programs Running' },
    { icon: Award, number: '15+', label: 'Years of Service' },
    { icon: Heart, number: '500+', label: 'Volunteers' },
  ];

  const handleWhatWeDoClick = () => {
    // Scroll to the services section
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const handleEyeHealthClick = () => {
    // Scroll to the services section which contains eye health information
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            9 out of 10 people who are blind don't need to be; their condition is preventable or treatable.
          </h2>
          <div className="mt-8">
            <button 
              onClick={handleWhatWeDoClick}
              className="inline-flex items-center bg-[#4CAF50] hover:bg-green-600 text-white px-6 py-3 rounded-full font-medium transition-colors cursor-pointer"
            >
              <span>What we do</span>
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img
              src="https://images.pexels.com/photos/6646917/pexels-photo-6646917.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
              alt="Eye examination in progress"
              className="rounded-2xl shadow-2xl"
            />
          </div>
          
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-900">
              Countries in the Pacific have unacceptably high rates of blindness and vision impairment.
            </h3>
            
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="bg-[#4CAF50] text-white text-3xl font-bold rounded-lg p-4 flex items-center justify-center min-w-16">
                  90%
                </div>
                <div>
                  <p className="text-gray-700 font-semibold">of vision loss in the Pacific is preventable or treatable.</p>
                  <p className="text-gray-600">Yet today, those treatments can take months to be accessed, if they can be accessed at all.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-[#4CAF50] text-white text-3xl font-bold rounded-lg p-4 flex items-center justify-center min-w-16">
                  39K
                </div>
                <div>
                  <p className="text-gray-700 font-semibold">people in the Pacific experience blindness.</p>
                  <p className="text-gray-600">For marginalized communities such as women and people with disabilities, the challenge of avoidable blindness is even higher.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-[#4CAF50] text-white text-3xl font-bold rounded-lg p-4 flex items-center justify-center min-w-16">
                  1.2M
                </div>
                <div>
                  <p className="text-gray-700 font-semibold">people live with vision impairment in the Pacific region.</p>
                  <p className="text-gray-600">Without change, projections show that vision loss will increase by 55% over the next 30 years.</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <button 
                onClick={handleEyeHealthClick}
                className="inline-flex items-center bg-[#4CAF50] hover:bg-green-600 text-white px-6 py-3 rounded-full font-medium transition-colors cursor-pointer"
              >
                <span>Learn more about the current state of eye health</span>
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;