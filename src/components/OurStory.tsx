import React from 'react';
import { Heart, Users, Globe, Award, ArrowRight, Calendar, MapPin, Target } from 'lucide-react';

const OurStory = () => {
  const milestones = [
    {
      year: '2008',
      title: 'Foundation Established',
      description: 'The Hollows organization was founded with a vision to eliminate avoidable blindness in the Pacific region.',
      image: 'https://images.pexels.com/photos/6646917/pexels-photo-6646917.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
    },
    {
      year: '2012',
      title: 'First Mobile Clinic',
      description: 'Launched our first mobile eye clinic, bringing essential eye care services directly to remote communities.',
      image: 'https://images.pexels.com/photos/8926548/pexels-photo-8926548.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
    },
    {
      year: '2015',
      title: 'Training Program Launch',
      description: 'Established comprehensive training programs for local healthcare workers to build sustainable eye care capacity.',
      image: 'https://images.pexels.com/photos/5427650/pexels-photo-5427650.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
    },
    {
      year: '2018',
      title: '10,000 Lives Changed',
      description: 'Reached the milestone of restoring sight to 10,000 people across the Pacific region.',
      image: 'https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
    },
    {
      year: '2021',
      title: 'Technology Innovation',
      description: 'Introduced cutting-edge diagnostic equipment and telemedicine capabilities to remote areas.',
      image: 'https://images.pexels.com/photos/8926554/pexels-photo-8926554.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
    },
    {
      year: '2025',
      title: 'Expanding Horizons',
      description: 'Continuing our mission with new partnerships and innovative approaches to eliminate avoidable blindness.',
      image: 'https://images.pexels.com/photos/5427650/pexels-photo-5427650.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
    }
  ];

  const values = [
    {
      icon: Heart,
      title: 'Compassion',
      description: 'We approach every person with empathy, understanding that behind every statistic is a human story of struggle and hope.'
    },
    {
      icon: Users,
      title: 'Community',
      description: 'We believe in the power of local communities and work alongside them to create sustainable, long-term solutions.'
    },
    {
      icon: Globe,
      title: 'Equity',
      description: 'Everyone deserves access to quality eye care, regardless of their location, economic status, or background.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We strive for the highest standards in everything we do, from medical care to program implementation.'
    }
  ];

  const stats = [
    { number: '25,000+', label: 'Lives Transformed', icon: Heart },
    { number: '15', label: 'Countries Served', icon: Globe },
    { number: '500+', label: 'Healthcare Workers Trained', icon: Users },
    { number: '17', label: 'Years of Impact', icon: Calendar }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop" 
            alt="Background" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Our Story
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              A journey of hope, healing, and transformation across the Pacific region
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-4">
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl md:text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-blue-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Our Mission
              </h2>
              <p className="text-xl text-gray-700 mb-6 leading-relaxed">
                We exist to eliminate avoidable blindness and vision impairment in the Pacific region, 
                ensuring that everyone has access to quality eye care regardless of their circumstances.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Through innovative programs, community partnerships, and sustainable healthcare solutions, 
                we're building a future where no one loses their sight unnecessarily.
              </p>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-[#4CAF50] rounded-full flex items-center justify-center">
                  <Target className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Our Goal</h3>
                  <p className="text-gray-600">Zero avoidable blindness by 2030</p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/6646917/pexels-photo-6646917.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Eye examination"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="text-3xl font-bold text-[#4CAF50] mb-1">90%</div>
                <div className="text-gray-600 text-sm">of blindness is preventable</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These core principles guide everything we do and shape how we approach our mission
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#4CAF50] to-green-600 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From humble beginnings to transforming thousands of lives across the Pacific
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-[#4CAF50] to-green-600 hidden lg:block"></div>

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} flex-col lg:space-x-8`}>
                  {/* Content */}
                  <div className={`flex-1 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'} text-center lg:text-left mb-8 lg:mb-0`}>
                    <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                      <div className="inline-block bg-[#4CAF50] text-white px-4 py-2 rounded-full text-sm font-bold mb-4">
                        {milestone.year}
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">{milestone.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{milestone.description}</p>
                    </div>
                  </div>

                  {/* Timeline Dot */}
                  <div className="relative z-10 hidden lg:block">
                    <div className="w-6 h-6 bg-[#4CAF50] rounded-full border-4 border-white shadow-lg"></div>
                  </div>

                  {/* Image */}
                  <div className="flex-1">
                    <img
                      src={milestone.image}
                      alt={milestone.title}
                      className="w-full h-64 object-cover rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Leadership
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Dedicated professionals committed to our mission of eliminating avoidable blindness
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Dr. Sarah Mitchell',
                role: 'Chief Executive Officer',
                image: 'https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
                bio: 'Leading our organization with 20+ years of experience in international healthcare development.'
              },
              {
                name: 'Dr. James Chen',
                role: 'Medical Director',
                image: 'https://images.pexels.com/photos/6749778/pexels-photo-6749778.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
                bio: 'Renowned ophthalmologist specializing in community eye health and surgical training programs.'
              },
              {
                name: 'Maria Rodriguez',
                role: 'Program Director',
                image: 'https://images.pexels.com/photos/5327921/pexels-photo-5327921.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
                bio: 'Expert in sustainable development with extensive experience in Pacific Island communities.'
              }
            ].map((leader, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-48 h-48 object-cover rounded-full mx-auto shadow-lg group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-full"></div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{leader.name}</h3>
                <p className="text-[#4CAF50] font-medium mb-4">{leader.role}</p>
                <p className="text-gray-600 leading-relaxed">{leader.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-[#4CAF50] to-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Join Our Story
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
            Every donation, every volunteer hour, and every partnership helps us write the next chapter 
            in our mission to eliminate avoidable blindness.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="#donate" className="bg-white text-[#4CAF50] hover:bg-gray-100 px-8 py-4 rounded-full font-medium text-lg transition-colors flex items-center space-x-2">
              <span>Donate Now</span>
              <ArrowRight className="h-5 w-5" />
            </a>
            
            <a href="#volunteer" className="border-2 border-white text-white hover:bg-white hover:text-[#4CAF50] px-8 py-4 rounded-full font-medium text-lg transition-colors flex items-center space-x-2">
              <span>Get Involved</span>
              <ArrowRight className="h-5 w-5" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurStory;