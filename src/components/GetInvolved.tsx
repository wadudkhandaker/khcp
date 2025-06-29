import React, { useState } from 'react';
import { Heart, Users, Calendar, Mail, Phone, MapPin, ArrowRight, DollarSign, Clock, Globe, Award, BookOpen, Briefcase, Camera, Megaphone, Wrench, Stethoscope } from 'lucide-react';

const GetInvolved = () => {
  const [activeTab, setActiveTab] = useState('donate');
  const [volunteerForm, setVolunteerForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    skills: '',
    availability: '',
    interests: [],
    experience: '',
    motivation: ''
  });

  const involvementOptions = [
    {
      id: 'donate',
      title: 'Donate',
      icon: Heart,
      description: 'Make a direct impact with financial support',
      color: 'bg-red-500'
    },
    {
      id: 'volunteer',
      title: 'Volunteer',
      icon: Users,
      description: 'Share your time and skills with us',
      color: 'bg-blue-500'
    },
    {
      id: 'fundraise',
      title: 'Fundraise',
      icon: DollarSign,
      description: 'Organize events and campaigns',
      color: 'bg-green-500'
    },
    {
      id: 'advocate',
      title: 'Advocate',
      icon: Megaphone,
      description: 'Spread awareness and support our cause',
      color: 'bg-purple-500'
    }
  ];

  const donationOptions = [
    {
      amount: 25,
      impact: 'Provides eye examination for 1 person',
      description: 'Basic screening and consultation'
    },
    {
      amount: 50,
      impact: 'Funds cataract surgery for 1 person',
      description: 'Complete surgical procedure and recovery'
    },
    {
      amount: 100,
      impact: 'Supports mobile clinic for 1 day',
      description: 'Reaches 20-30 people in remote areas'
    },
    {
      amount: 250,
      impact: 'Trains 1 healthcare worker',
      description: 'Complete certification program'
    },
    {
      amount: 500,
      impact: 'Equips mobile clinic with supplies',
      description: 'Medical equipment and medications'
    },
    {
      amount: 1000,
      impact: 'Sponsors emergency response deployment',
      description: 'Rapid response to disaster areas'
    }
  ];

  const volunteerOpportunities = [
    {
      title: 'Medical Volunteers',
      icon: Stethoscope,
      description: 'Doctors, nurses, and medical professionals',
      requirements: ['Medical qualification', 'Minimum 2 weeks commitment', 'Tropical medicine experience preferred'],
      locations: ['Fiji', 'Samoa', 'Vanuatu', 'Solomon Islands']
    },
    {
      title: 'Administrative Support',
      icon: Briefcase,
      description: 'Help with office work, data entry, and coordination',
      requirements: ['Computer literacy', 'Attention to detail', 'Flexible schedule'],
      locations: ['Remote', 'Auckland Office', 'Wellington Office']
    },
    {
      title: 'Community Outreach',
      icon: Users,
      description: 'Engage with communities and raise awareness',
      requirements: ['Communication skills', 'Cultural sensitivity', 'Local language helpful'],
      locations: ['Pacific Islands', 'New Zealand Communities']
    },
    {
      title: 'Technical Support',
      icon: Wrench,
      description: 'Maintain and repair medical equipment',
      requirements: ['Technical background', 'Problem-solving skills', 'Equipment experience'],
      locations: ['Field locations', 'Maintenance centers']
    },
    {
      title: 'Photography & Media',
      icon: Camera,
      description: 'Document our work and create content',
      requirements: ['Photography/video skills', 'Storytelling ability', 'Ethical approach'],
      locations: ['Various project sites']
    },
    {
      title: 'Training & Education',
      icon: BookOpen,
      description: 'Develop and deliver training programs',
      requirements: ['Teaching experience', 'Subject matter expertise', 'Curriculum development'],
      locations: ['Training centers', 'Remote delivery']
    }
  ];

  const fundraisingIdeas = [
    {
      title: 'Community Events',
      description: 'Organize local fundraising events',
      examples: ['Charity runs', 'Bake sales', 'Quiz nights', 'Auction events'],
      support: 'Event planning toolkit and promotional materials'
    },
    {
      title: 'Corporate Partnerships',
      description: 'Engage your workplace in fundraising',
      examples: ['Workplace giving', 'Team challenges', 'Sponsored activities', 'Matching donations'],
      support: 'Corporate engagement resources and presentations'
    },
    {
      title: 'Online Campaigns',
      description: 'Use digital platforms to raise funds',
      examples: ['Social media campaigns', 'Crowdfunding', 'Birthday fundraisers', 'Memorial donations'],
      support: 'Digital assets and campaign templates'
    },
    {
      title: 'Special Occasions',
      description: 'Turn celebrations into fundraising opportunities',
      examples: ['Wedding favors', 'Birthday donations', 'Anniversary gifts', 'Holiday campaigns'],
      support: 'Personalized donation pages and materials'
    }
  ];

  const advocacyActions = [
    {
      title: 'Social Media Advocacy',
      description: 'Share our mission on your social platforms',
      actions: ['Follow and share our posts', 'Use our hashtags', 'Create your own content', 'Tag friends and family']
    },
    {
      title: 'Community Speaking',
      description: 'Present to local groups and organizations',
      actions: ['Speak at community groups', 'Present to schools', 'Engage service clubs', 'Attend health fairs']
    },
    {
      title: 'Policy Advocacy',
      description: 'Support policy changes for better eye health',
      actions: ['Contact local representatives', 'Sign petitions', 'Attend public meetings', 'Submit testimonials']
    },
    {
      title: 'Educational Outreach',
      description: 'Raise awareness about preventable blindness',
      actions: ['Distribute educational materials', 'Host information sessions', 'Create awareness campaigns', 'Engage media']
    }
  ];

  const handleVolunteerFormChange = (field: string, value: string | string[]) => {
    setVolunteerForm(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleInterestToggle = (interest: string) => {
    setVolunteerForm(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }));
  };

  const handleVolunteerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Volunteer application submitted:', volunteerForm);
    // Handle form submission
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-green-900 via-green-800 to-green-900 text-white overflow-hidden">
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
              Get Involved
            </h1>
            <p className="text-xl md:text-2xl text-green-100 max-w-3xl mx-auto leading-relaxed">
              Join us in our mission to eliminate avoidable blindness across the Pacific region
            </p>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '500+', label: 'Active Volunteers' },
              { number: '25+', label: 'Ways to Help' },
              { number: '12', label: 'Countries Served' },
              { number: '15+', label: 'Years of Impact' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-green-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="py-8 bg-gray-50 sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {involvementOptions.map((option) => (
              <button
                key={option.id}
                onClick={() => setActiveTab(option.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                  activeTab === option.id
                    ? `${option.color} text-white shadow-lg`
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                <option.icon className="h-5 w-5" />
                <span>{option.title}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Donate Section */}
          {activeTab === 'donate' && (
            <div>
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Make a Donation</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Your financial support directly funds our life-changing programs across the Pacific region
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                {donationOptions.map((option, index) => (
                  <div key={index} className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                    <div className="text-center mb-6">
                      <div className="text-4xl font-bold text-[#4CAF50] mb-2">${option.amount}</div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">{option.impact}</h3>
                      <p className="text-gray-600">{option.description}</p>
                    </div>
                    <button className="w-full bg-[#4CAF50] hover:bg-green-600 text-white py-3 px-6 rounded-xl font-medium transition-colors">
                      Donate ${option.amount}
                    </button>
                  </div>
                ))}
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl p-8 text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Other Ways to Give</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-white rounded-xl p-6 shadow-md">
                    <Calendar className="h-8 w-8 text-blue-500 mx-auto mb-3" />
                    <h4 className="font-semibold mb-2">Monthly Giving</h4>
                    <p className="text-sm text-gray-600">Provide sustained support with recurring donations</p>
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-md">
                    <Award className="h-8 w-8 text-green-500 mx-auto mb-3" />
                    <h4 className="font-semibold mb-2">Legacy Gifts</h4>
                    <p className="text-sm text-gray-600">Include us in your will or estate planning</p>
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-md">
                    <Briefcase className="h-8 w-8 text-purple-500 mx-auto mb-3" />
                    <h4 className="font-semibold mb-2">Corporate Giving</h4>
                    <p className="text-sm text-gray-600">Partner with us through your business</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Volunteer Section */}
          {activeTab === 'volunteer' && (
            <div>
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Volunteer With Us</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Share your skills, time, and passion to help us restore sight and transform lives
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-8 mb-16">
                {volunteerOpportunities.map((opportunity, index) => (
                  <div key={index} className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                        <opportunity.icon className="h-6 w-6 text-blue-600" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">{opportunity.title}</h3>
                    </div>
                    
                    <p className="text-gray-600 mb-6">{opportunity.description}</p>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Requirements:</h4>
                      <ul className="space-y-2">
                        {opportunity.requirements.map((req, idx) => (
                          <li key={idx} className="flex items-center text-sm text-gray-600">
                            <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Locations:</h4>
                      <div className="flex flex-wrap gap-2">
                        {opportunity.locations.map((location, idx) => (
                          <span key={idx} className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm">
                            {location}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-xl font-medium transition-colors">
                      Apply Now
                    </button>
                  </div>
                ))}
              </div>

              {/* Volunteer Application Form */}
              <div className="bg-gray-50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Volunteer Application</h3>
                <form onSubmit={handleVolunteerSubmit} className="max-w-4xl mx-auto">
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">First Name *</label>
                      <input
                        type="text"
                        required
                        value={volunteerForm.firstName}
                        onChange={(e) => handleVolunteerFormChange('firstName', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Last Name *</label>
                      <input
                        type="text"
                        required
                        value={volunteerForm.lastName}
                        onChange={(e) => handleVolunteerFormChange('lastName', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                      <input
                        type="email"
                        required
                        value={volunteerForm.email}
                        onChange={(e) => handleVolunteerFormChange('email', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                      <input
                        type="tel"
                        value={volunteerForm.phone}
                        onChange={(e) => handleVolunteerFormChange('phone', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Areas of Interest</label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {['Medical Support', 'Administrative', 'Community Outreach', 'Technical Support', 'Photography', 'Training'].map((interest) => (
                        <label key={interest} className="flex items-center space-x-2 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={volunteerForm.interests.includes(interest)}
                            onChange={() => handleInterestToggle(interest)}
                            className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                          />
                          <span className="text-sm text-gray-700">{interest}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Skills & Experience</label>
                    <textarea
                      value={volunteerForm.experience}
                      onChange={(e) => handleVolunteerFormChange('experience', e.target.value)}
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Tell us about your relevant skills and experience..."
                    />
                  </div>

                  <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Why do you want to volunteer with us?</label>
                    <textarea
                      value={volunteerForm.motivation}
                      onChange={(e) => handleVolunteerFormChange('motivation', e.target.value)}
                      rows={3}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Share your motivation for volunteering..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-xl font-medium transition-colors flex items-center justify-center space-x-2"
                  >
                    <span>Submit Application</span>
                    <ArrowRight className="h-5 w-5" />
                  </button>
                </form>
              </div>
            </div>
          )}

          {/* Fundraise Section */}
          {activeTab === 'fundraise' && (
            <div>
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Fundraise for Us</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Organize events, campaigns, and activities to raise funds and awareness for our cause
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-16">
                {fundraisingIdeas.map((idea, index) => (
                  <div key={index} className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{idea.title}</h3>
                    <p className="text-gray-600 mb-6">{idea.description}</p>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Ideas & Examples:</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {idea.examples.map((example, idx) => (
                          <div key={idx} className="flex items-center text-sm text-gray-600">
                            <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                            {example}
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="bg-green-50 rounded-xl p-4 mb-6">
                      <h4 className="font-semibold text-green-800 mb-2">We Provide:</h4>
                      <p className="text-sm text-green-700">{idea.support}</p>
                    </div>
                    
                    <button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-xl font-medium transition-colors">
                      Get Started
                    </button>
                  </div>
                ))}
              </div>

              <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8 text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Fundraising Support</h3>
                <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                  We're here to help you succeed! Our fundraising team provides resources, guidance, and support for all your fundraising efforts.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href="#contact" className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full font-medium transition-colors flex items-center space-x-2">
                    <Mail className="h-5 w-5" />
                    <span>Contact Fundraising Team</span>
                  </a>
                  <a href="#toolkit" className="border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-6 py-3 rounded-full font-medium transition-colors flex items-center space-x-2">
                    <BookOpen className="h-5 w-5" />
                    <span>Download Toolkit</span>
                  </a>
                </div>
              </div>
            </div>
          )}

          {/* Advocate Section */}
          {activeTab === 'advocate' && (
            <div>
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Become an Advocate</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Use your voice to raise awareness about preventable blindness and support our mission
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-16">
                {advocacyActions.map((action, index) => (
                  <div key={index} className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{action.title}</h3>
                    <p className="text-gray-600 mb-6">{action.description}</p>
                    
                    <div className="space-y-3">
                      {action.actions.map((actionItem, idx) => (
                        <div key={idx} className="flex items-center text-gray-700">
                          <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                          <span className="text-sm">{actionItem}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Advocacy Resources</h3>
                  <p className="text-gray-600 max-w-2xl mx-auto">
                    Access our library of resources to help you effectively advocate for our cause
                  </p>
                </div>
                
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-white rounded-xl p-6 shadow-md text-center">
                    <Camera className="h-8 w-8 text-purple-500 mx-auto mb-3" />
                    <h4 className="font-semibold mb-2">Social Media Kit</h4>
                    <p className="text-sm text-gray-600 mb-4">Images, videos, and content for sharing</p>
                    <button className="text-purple-600 hover:text-purple-700 font-medium text-sm">Download Kit</button>
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-md text-center">
                    <BookOpen className="h-8 w-8 text-blue-500 mx-auto mb-3" />
                    <h4 className="font-semibold mb-2">Fact Sheets</h4>
                    <p className="text-sm text-gray-600 mb-4">Key statistics and information</p>
                    <button className="text-blue-600 hover:text-blue-700 font-medium text-sm">View Facts</button>
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-md text-center">
                    <Megaphone className="h-8 w-8 text-green-500 mx-auto mb-3" />
                    <h4 className="font-semibold mb-2">Speaking Notes</h4>
                    <p className="text-sm text-gray-600 mb-4">Templates for presentations</p>
                    <button className="text-green-600 hover:text-green-700 font-medium text-sm">Get Templates</button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Have questions or want to learn more? Our team is here to help you find the perfect way to get involved.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Email Us</h3>
              <p className="text-gray-300 mb-4">Get in touch with our team</p>
              <a href="mailto:getinvolved@hollows.org.nz" className="text-blue-400 hover:text-blue-300">
                getinvolved@hollows.org.nz
              </a>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Call Us</h3>
              <p className="text-gray-300 mb-4">Speak directly with our team</p>
              <a href="tel:+6409123456" className="text-green-400 hover:text-green-300">
                +64 9 123 4567
              </a>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Visit Us</h3>
              <p className="text-gray-300 mb-4">Come to our office</p>
              <p className="text-purple-400">
                Level 1, 123 Queen Street<br />
                Auckland, New Zealand
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GetInvolved;