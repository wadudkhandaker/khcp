import React, { useState } from 'react';
import { MapPin, Users, Calendar, Target, ArrowRight, Eye, Heart, Stethoscope, GraduationCap, Building, Zap } from 'lucide-react';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projectCategories = [
    { id: 'all', name: 'All Projects', icon: Target },
    { id: 'medical', name: 'Medical Care', icon: Stethoscope },
    { id: 'training', name: 'Training', icon: GraduationCap },
    { id: 'infrastructure', name: 'Infrastructure', icon: Building },
    { id: 'emergency', name: 'Emergency Response', icon: Zap }
  ];

  const projects = [
    {
      id: 1,
      title: 'Pacific Eye Institute Outreach Program',
      category: 'medical',
      location: 'Fiji, Samoa, Tonga',
      duration: '2020 - Ongoing',
      beneficiaries: '15,000+',
      status: 'Active',
      image: 'https://images.pexels.com/photos/6646917/pexels-photo-6646917.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      description: 'Comprehensive eye care services delivered through mobile clinics and permanent facilities across the Pacific Islands.',
      impact: [
        '12,500 cataract surgeries performed',
        '8,000 pairs of glasses distributed',
        '25 local healthcare workers trained',
        '15 remote communities reached'
      ],
      highlights: [
        'State-of-the-art surgical equipment',
        'Telemedicine capabilities',
        'Community health education',
        'Sustainable local partnerships'
      ]
    },
    {
      id: 2,
      title: 'Community Health Worker Training Initiative',
      category: 'training',
      location: 'Papua New Guinea, Solomon Islands',
      duration: '2019 - 2025',
      beneficiaries: '500+',
      status: 'Active',
      image: 'https://images.pexels.com/photos/5427650/pexels-photo-5427650.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      description: 'Comprehensive training program for local healthcare workers to build sustainable eye care capacity in remote communities.',
      impact: [
        '350 healthcare workers certified',
        '50 training modules developed',
        '20 training centers established',
        '85% improvement in diagnostic accuracy'
      ],
      highlights: [
        'Culturally appropriate curriculum',
        'Hands-on practical training',
        'Ongoing mentorship support',
        'Digital learning platforms'
      ]
    },
    {
      id: 3,
      title: 'Mobile Eye Clinic Fleet Expansion',
      category: 'infrastructure',
      location: 'Vanuatu, Kiribati, Marshall Islands',
      duration: '2021 - 2024',
      beneficiaries: '8,000+',
      status: 'Active',
      image: 'https://images.pexels.com/photos/8926548/pexels-photo-8926548.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      description: 'Deployment of specially equipped mobile clinics to reach the most remote and underserved communities.',
      impact: [
        '6 new mobile clinics deployed',
        '45 remote islands reached',
        '3,200 eye examinations conducted',
        '1,800 surgical procedures performed'
      ],
      highlights: [
        'Solar-powered equipment',
        'Satellite communication systems',
        'All-terrain vehicle capability',
        'Emergency response ready'
      ]
    },
    {
      id: 4,
      title: 'Diabetic Retinopathy Screening Program',
      category: 'medical',
      location: 'Cook Islands, Niue, Tokelau',
      duration: '2022 - Ongoing',
      beneficiaries: '2,500+',
      status: 'Active',
      image: 'https://images.pexels.com/photos/8926554/pexels-photo-8926554.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      description: 'Early detection and treatment program for diabetic retinopathy using advanced screening technology.',
      impact: [
        '2,100 patients screened',
        '320 cases of retinopathy detected',
        '180 laser treatments performed',
        '95% vision preservation rate'
      ],
      highlights: [
        'AI-powered diagnostic tools',
        'Portable screening equipment',
        'Patient education programs',
        'Integrated diabetes care'
      ]
    },
    {
      id: 5,
      title: 'Emergency Eye Care Response Unit',
      category: 'emergency',
      location: 'Pacific Region Wide',
      duration: '2020 - Ongoing',
      beneficiaries: '1,200+',
      status: 'Active',
      image: 'https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      description: 'Rapid response team for natural disasters and emergency situations affecting eye health across the Pacific.',
      impact: [
        '8 emergency deployments',
        '1,200 emergency treatments',
        '450 trauma surgeries',
        '72-hour response time average'
      ],
      highlights: [
        'Rapid deployment capability',
        'Trauma surgery expertise',
        'Disaster preparedness training',
        'Regional coordination network'
      ]
    },
    {
      id: 6,
      title: 'Pediatric Eye Health Initiative',
      category: 'medical',
      location: 'Micronesia, Palau, Nauru',
      duration: '2023 - 2026',
      beneficiaries: '3,000+',
      status: 'Active',
      image: 'https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      description: 'Specialized program focusing on early detection and treatment of eye conditions in children.',
      impact: [
        '2,800 children screened',
        '450 vision corrections provided',
        '120 surgical interventions',
        '15 schools participating'
      ],
      highlights: [
        'School-based screening',
        'Child-friendly equipment',
        'Parent education programs',
        'Long-term follow-up care'
      ]
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const stats = [
    { number: '25+', label: 'Active Projects', icon: Target },
    { number: '12', label: 'Countries Served', icon: MapPin },
    { number: '45,000+', label: 'Lives Impacted', icon: Users },
    { number: '8', label: 'Years Experience', icon: Calendar }
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
              Our Projects
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Transforming lives through innovative eye care programs across the Pacific region
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

      {/* Filter Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Explore Our Impact
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Filter by project type to see how we're making a difference across different areas of eye care
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {projectCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                  activeFilter === category.id
                    ? 'bg-[#4CAF50] text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                <category.icon className="h-5 w-5" />
                <span>{category.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {filteredProjects.map((project, index) => (
              <div key={project.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                <div className="relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      project.status === 'Active' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-blue-100 text-blue-800'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-black/70 text-white px-3 py-1 rounded-full text-sm">
                      {project.beneficiaries} beneficiaries
                    </span>
                  </div>
                </div>

                <div className="p-8">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="flex items-center text-gray-600">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span className="text-sm">{project.location}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span className="text-sm">{project.duration}</span>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {project.title}
                  </h3>

                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Impact Metrics */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Impact</h4>
                    <div className="grid grid-cols-2 gap-3">
                      {project.impact.map((metric, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-[#4CAF50] rounded-full"></div>
                          <span className="text-sm text-gray-600">{metric}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Project Highlights */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Project Highlights</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.highlights.map((highlight, idx) => (
                        <span key={idx} className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm">
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>

                  <button className="w-full bg-[#4CAF50] hover:bg-green-600 text-white py-3 px-6 rounded-xl font-medium transition-colors flex items-center justify-center space-x-2">
                    <span>Learn More</span>
                    <ArrowRight className="h-5 w-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Growing Impact
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how our projects have evolved and expanded over the years
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                year: '2020',
                title: 'Foundation Year',
                description: 'Launched our first mobile clinic program',
                metric: '2,500 people served',
                color: 'bg-blue-500'
              },
              {
                year: '2022',
                title: 'Expansion Phase',
                description: 'Extended services to 8 Pacific Island nations',
                metric: '15,000 people served',
                color: 'bg-green-500'
              },
              {
                year: '2025',
                title: 'Current Impact',
                description: 'Operating 25+ active projects across the region',
                metric: '45,000+ people served',
                color: 'bg-orange-500'
              }
            ].map((milestone, index) => (
              <div key={index} className="relative">
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className={`inline-block ${milestone.color} text-white px-4 py-2 rounded-full text-sm font-bold mb-4`}>
                    {milestone.year}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{milestone.title}</h3>
                  <p className="text-gray-600 mb-4">{milestone.description}</p>
                  <div className="text-2xl font-bold text-[#4CAF50]">{milestone.metric}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-[#4CAF50] to-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Support Our Projects
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
            Your contribution helps us expand our reach and impact more lives across the Pacific region. 
            Every donation directly supports our ongoing projects and helps us launch new initiatives.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="#donate" className="bg-white text-[#4CAF50] hover:bg-gray-100 px-8 py-4 rounded-full font-medium text-lg transition-colors flex items-center space-x-2">
              <Heart className="h-5 w-5" />
              <span>Donate Now</span>
            </a>
            
            <a href="#volunteer" className="border-2 border-white text-white hover:bg-white hover:text-[#4CAF50] px-8 py-4 rounded-full font-medium text-lg transition-colors flex items-center space-x-2">
              <Users className="h-5 w-5" />
              <span>Volunteer With Us</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;