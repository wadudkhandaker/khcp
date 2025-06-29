import React from 'react';
import { Calendar, MapPin, Clock, ArrowRight } from 'lucide-react';

const Programs = () => {
  const news = [
    {
      image: "https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      title: "Celebrating progress and partnership: our 2024 year in review",
      date: "10 June 2025",
      description: "We are proud to present our 2024 Performance Report, a demonstration of the achievements we have made over the last year alongside our Pacific partners."
    },
    {
      image: "https://images.pexels.com/photos/8926548/pexels-photo-8926548.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      title: "Vital eye care delivered to the Marshall Islands",
      date: "16 May 2025",
      description: "The Pacific Eye Institute (PEI) Outreach Team travelled from Fiji and spent 10 days working with the local team at the Republic of the Marshall Islands Hospital."
    },
    {
      image: "https://images.pexels.com/photos/5427650/pexels-photo-5427650.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      title: "New partnership to build PNG's eye health workforce",
      date: "7 May 2025",
      description: "In a significant step forward for collaboration in eye health, The Fred Hollows Foundation NZ has signed a Memorandum of Understanding (MOU) with the Tilganga Eye Hospital and Ophthalmology Training Institute (TIO) in Nepal."
    }
  ];

  const handleReadMoreClick = (title: string) => {
    // For demo purposes, show an alert with the article title
    // In a real application, this would navigate to the full article
    alert(`Opening article: "${title}"\n\nThis would normally navigate to the full article page.`);
  };

  const handleSeeAllNewsClick = () => {
    // Navigate to news page using hash routing
    window.location.hash = '#news';
    // Scroll to top and reload to ensure proper navigation
    window.scrollTo(0, 0);
    window.location.reload();
  };

  return (
    <section id="news" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Latest news and updates
          </h2>
        </div>

        {/* News Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {news.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {item.title}
                </h3>
                
                <div className="text-gray-500 text-sm mb-3">
                  {item.date}
                </div>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {item.description}
                </p>
                
                <button 
                  onClick={() => handleReadMoreClick(item.title)}
                  className="text-gray-900 font-medium hover:text-blue-600 transition-colors flex items-center space-x-2 cursor-pointer"
                >
                  <span>Read more</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <button 
            onClick={handleSeeAllNewsClick}
            className="inline-flex items-center bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full font-medium transition-all duration-200 cursor-pointer hover:scale-105 transform"
          >
            <span>See all news</span>
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Programs;