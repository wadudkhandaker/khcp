import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, User, MessageSquare, Building, Globe, Facebook, Twitter, Instagram, Linkedin, ArrowRight } from 'lucide-react';

const ContactPage = () => {
  const [contactForm, setContactForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    category: '',
    message: '',
    newsletter: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const contactMethods = [
    {
      icon: Mail,
      title: 'Email Us',
      description: 'Send us a message and we\'ll respond within 24 hours',
      contact: 'info@hollows.org.nz',
      action: 'mailto:info@hollows.org.nz',
      color: 'bg-blue-500'
    },
    {
      icon: Phone,
      title: 'Call Us',
      description: 'Speak directly with our team during business hours',
      contact: '+64 9 123 4567',
      action: 'tel:+6491234567',
      color: 'bg-green-500'
    },
    {
      icon: MessageSquare,
      title: 'Live Chat',
      description: 'Chat with our support team in real-time',
      contact: 'Available 9am-5pm NZST',
      action: '#chat',
      color: 'bg-purple-500'
    }
  ];

  const offices = [
    {
      name: 'Auckland Head Office',
      address: 'Level 1, 123 Queen Street',
      city: 'Auckland 1010',
      country: 'New Zealand',
      phone: '+64 9 123 4567',
      email: 'auckland@hollows.org.nz',
      hours: 'Monday - Friday: 9:00 AM - 5:00 PM',
      image: 'https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
    },
    {
      name: 'Wellington Office',
      address: '456 Lambton Quay',
      city: 'Wellington 6011',
      country: 'New Zealand',
      phone: '+64 4 567 8901',
      email: 'wellington@hollows.org.nz',
      hours: 'Monday - Friday: 9:00 AM - 5:00 PM',
      image: 'https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
    },
    {
      name: 'Pacific Regional Office',
      address: '789 Victoria Parade',
      city: 'Suva, Fiji',
      country: 'Fiji',
      phone: '+679 123 4567',
      email: 'pacific@hollows.org.nz',
      hours: 'Monday - Friday: 8:00 AM - 4:00 PM',
      image: 'https://images.pexels.com/photos/1320684/pexels-photo-1320684.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
    }
  ];

  const departments = [
    {
      name: 'General Inquiries',
      email: 'info@hollows.org.nz',
      description: 'General questions and information'
    },
    {
      name: 'Donations & Fundraising',
      email: 'donations@hollows.org.nz',
      description: 'Support our mission financially'
    },
    {
      name: 'Volunteer Opportunities',
      email: 'volunteers@hollows.org.nz',
      description: 'Get involved with our programs'
    },
    {
      name: 'Media & Press',
      email: 'media@hollows.org.nz',
      description: 'Press inquiries and media requests'
    },
    {
      name: 'Partnerships',
      email: 'partnerships@hollows.org.nz',
      description: 'Corporate and organizational partnerships'
    },
    {
      name: 'Medical Programs',
      email: 'medical@hollows.org.nz',
      description: 'Clinical programs and medical inquiries'
    }
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook', color: 'hover:text-blue-600' },
    { icon: Twitter, href: '#', label: 'Twitter', color: 'hover:text-blue-400' },
    { icon: Instagram, href: '#', label: 'Instagram', color: 'hover:text-pink-600' },
    { icon: Linkedin, href: '#', label: 'LinkedIn', color: 'hover:text-blue-700' }
  ];

  const handleFormChange = (field: string, value: string | boolean) => {
    setContactForm(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log('Contact form submitted:', contactForm);
    setIsSubmitting(false);
    
    // Reset form
    setContactForm({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      subject: '',
      category: '',
      message: '',
      newsletter: false
    });
    
    alert('Thank you for your message! We\'ll get back to you within 24 hours.');
  };

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
              Contact Us
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              We're here to help and answer any questions you might have about our mission and programs
            </p>
          </div>

          {/* Quick Contact Methods */}
          <div className="grid md:grid-cols-3 gap-8">
            {contactMethods.map((method, index) => (
              <a
                key={index}
                href={method.action}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-white/20 transition-all duration-300 group"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 ${method.color} rounded-full mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <method.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">{method.title}</h3>
                <p className="text-blue-100 mb-3">{method.description}</p>
                <p className="text-white font-medium">{method.contact}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Send Us a Message</h2>
                <p className="text-gray-600">Fill out the form below and we'll get back to you as soon as possible</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={contactForm.firstName}
                      onChange={(e) => handleFormChange('firstName', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={contactForm.lastName}
                      onChange={(e) => handleFormChange('lastName', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={contactForm.email}
                      onChange={(e) => handleFormChange('email', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      value={contactForm.phone}
                      onChange={(e) => handleFormChange('phone', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      placeholder="Enter your phone number"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Inquiry Category *
                  </label>
                  <select
                    required
                    value={contactForm.category}
                    onChange={(e) => handleFormChange('category', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  >
                    <option value="">Select a category</option>
                    <option value="general">General Inquiry</option>
                    <option value="donations">Donations & Fundraising</option>
                    <option value="volunteer">Volunteer Opportunities</option>
                    <option value="media">Media & Press</option>
                    <option value="partnerships">Partnerships</option>
                    <option value="medical">Medical Programs</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    required
                    value={contactForm.subject}
                    onChange={(e) => handleFormChange('subject', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="Brief subject of your message"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    required
                    rows={6}
                    value={contactForm.message}
                    onChange={(e) => handleFormChange('message', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none"
                    placeholder="Please provide details about your inquiry..."
                  />
                </div>

                <div className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    id="newsletter"
                    checked={contactForm.newsletter}
                    onChange={(e) => handleFormChange('newsletter', e.target.checked)}
                    className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <label htmlFor="newsletter" className="text-sm text-gray-700">
                    Subscribe to our newsletter for updates on our programs and impact
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white py-4 px-6 rounded-xl font-medium transition-colors flex items-center justify-center space-x-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Department Contacts */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Department Contacts</h3>
                <div className="space-y-4">
                  {departments.map((dept, index) => (
                    <div key={index} className="border-l-4 border-blue-500 pl-4">
                      <h4 className="font-semibold text-gray-900">{dept.name}</h4>
                      <p className="text-sm text-gray-600 mb-1">{dept.description}</p>
                      <a href={`mailto:${dept.email}`} className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                        {dept.email}
                      </a>
                    </div>
                  ))}
                </div>
              </div>

              {/* Business Hours */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <div className="flex items-center mb-6">
                  <Clock className="h-6 w-6 text-blue-600 mr-3" />
                  <h3 className="text-2xl font-bold text-gray-900">Business Hours</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-700">Monday - Friday</span>
                    <span className="font-medium">9:00 AM - 5:00 PM NZST</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Saturday</span>
                    <span className="font-medium">10:00 AM - 2:00 PM NZST</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Sunday</span>
                    <span className="font-medium">Closed</span>
                  </div>
                  <div className="mt-4 p-4 bg-blue-50 rounded-xl">
                    <p className="text-sm text-blue-800">
                      <strong>Emergency Contact:</strong> For urgent medical program inquiries, 
                      call our 24/7 emergency line at +64 9 999 8888
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Follow Us</h3>
                <p className="text-gray-600 mb-6">
                  Stay connected with our latest news, updates, and impact stories
                </p>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      aria-label={social.label}
                      className={`w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 ${social.color} transition-colors duration-200`}
                    >
                      <social.icon className="h-6 w-6" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Offices</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Visit us at one of our office locations across New Zealand and the Pacific region
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {offices.map((office, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-48">
                  <img
                    src={office.image}
                    alt={office.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <h3 className="text-xl font-bold text-white">{office.name}</h3>
                  </div>
                </div>

                <div className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <MapPin className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                      <div>
                        <p className="text-gray-900 font-medium">{office.address}</p>
                        <p className="text-gray-600">{office.city}</p>
                        <p className="text-gray-600">{office.country}</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3">
                      <Phone className="h-5 w-5 text-green-600 flex-shrink-0" />
                      <a href={`tel:${office.phone}`} className="text-gray-900 hover:text-green-600 transition-colors">
                        {office.phone}
                      </a>
                    </div>

                    <div className="flex items-center space-x-3">
                      <Mail className="h-5 w-5 text-purple-600 flex-shrink-0" />
                      <a href={`mailto:${office.email}`} className="text-gray-900 hover:text-purple-600 transition-colors">
                        {office.email}
                      </a>
                    </div>

                    <div className="flex items-start space-x-3">
                      <Clock className="h-5 w-5 text-orange-600 mt-1 flex-shrink-0" />
                      <p className="text-gray-600">{office.hours}</p>
                    </div>
                  </div>

                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-xl font-medium transition-colors flex items-center justify-center space-x-2">
                      <MapPin className="h-5 w-5" />
                      <span>Get Directions</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">
              Quick answers to common questions about our organization and programs
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                question: "How can I make a donation?",
                answer: "You can donate online through our website, by phone, or by mail. We accept one-time and recurring donations, and all contributions are tax-deductible."
              },
              {
                question: "What volunteer opportunities are available?",
                answer: "We offer various volunteer opportunities including medical missions, administrative support, community outreach, and fundraising. Visit our Get Involved page for more details."
              },
              {
                question: "How do I know my donation is being used effectively?",
                answer: "We publish annual reports detailing our impact and financial transparency. You can also sign up for our newsletter to receive regular updates on our programs."
              },
              {
                question: "Can I visit your projects in the Pacific?",
                answer: "We occasionally organize donor and volunteer trips to our project sites. Contact us for information about upcoming opportunities to see our work firsthand."
              },
              {
                question: "How can my company partner with you?",
                answer: "We offer various corporate partnership opportunities including sponsorships, employee engagement programs, and cause marketing initiatives. Contact our partnerships team for more information."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">Can't find what you're looking for?</p>
            <a href="#contact-form" className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-medium transition-colors">
              <MessageSquare className="h-5 w-5 mr-2" />
              <span>Ask Us a Question</span>
            </a>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Make a Difference?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
            Whether you want to donate, volunteer, or partner with us, there are many ways to support our mission 
            of eliminating avoidable blindness across the Pacific region.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="#donate" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-full font-medium text-lg transition-colors flex items-center space-x-2">
              <User className="h-5 w-5" />
              <span>Get Involved</span>
            </a>
            
            <a href="#programs" className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-full font-medium text-lg transition-colors flex items-center space-x-2">
              <Globe className="h-5 w-5" />
              <span>Learn About Our Work</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;