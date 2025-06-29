import React, { useState } from 'react';
import { Calendar, ArrowRight, Search, Filter, Tag, Eye, Clock, User } from 'lucide-react';

const NewsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All News', count: 24 },
    { id: 'impact', name: 'Impact Stories', count: 8 },
    { id: 'programs', name: 'Program Updates', count: 6 },
    { id: 'partnerships', name: 'Partnerships', count: 4 },
    { id: 'press', name: 'Press Releases', count: 6 }
  ];

  const allNews = [
    {
      id: 1,
      title: "Celebrating progress and partnership: our 2024 year in review",
      excerpt: "We are proud to present our 2024 Performance Report, a demonstration of the achievements we have made over the last year alongside our Pacific partners.",
      content: "This comprehensive report showcases the incredible progress we've made in 2024, highlighting our collaborative efforts with Pacific partners to eliminate avoidable blindness. From groundbreaking surgical procedures to innovative training programs, this year has been marked by significant milestones in our mission.",
      date: "10 June 2025",
      category: "impact",
      author: "Dr. Sarah Mitchell",
      readTime: "5 min read",
      views: 1250,
      image: "https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      tags: ["Annual Report", "Impact", "Pacific", "Partnership"]
    },
    {
      id: 2,
      title: "Vital eye care delivered to the Marshall Islands",
      excerpt: "The Pacific Eye Institute (PEI) Outreach Team travelled from Fiji and spent 10 days working with the local team at the Republic of the Marshall Islands Hospital.",
      content: "Our dedicated outreach team completed a successful 10-day mission to the Marshall Islands, providing critical eye care services to remote communities. The collaboration with local healthcare professionals has strengthened the region's capacity to deliver sustainable eye care.",
      date: "16 May 2025",
      category: "programs",
      author: "Dr. James Chen",
      readTime: "4 min read",
      views: 890,
      image: "https://images.pexels.com/photos/8926548/pexels-photo-8926548.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      tags: ["Marshall Islands", "Outreach", "Surgery", "Community"]
    },
    {
      id: 3,
      title: "New partnership to build PNG's eye health workforce",
      excerpt: "In a significant step forward for collaboration in eye health, The Fred Hollows Foundation NZ has signed a Memorandum of Understanding (MOU) with the Tilganga Eye Hospital and Ophthalmology Training Institute (TIO) in Nepal.",
      content: "This strategic partnership will enhance training opportunities for Papua New Guinea's eye health workforce, combining expertise from Nepal's renowned Tilganga Institute with our Pacific-focused programs.",
      date: "7 May 2025",
      category: "partnerships",
      author: "Maria Rodriguez",
      readTime: "3 min read",
      views: 654,
      image: "https://images.pexels.com/photos/5427650/pexels-photo-5427650.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      tags: ["PNG", "Training", "Partnership", "Workforce"]
    },
    {
      id: 4,
      title: "Mobile clinic reaches remote Vanuatu communities",
      excerpt: "Our latest mobile clinic deployment has successfully reached three remote islands in Vanuatu, providing comprehensive eye examinations and treatments to over 300 residents.",
      content: "The mobile clinic initiative continues to break down barriers to eye care access, bringing world-class medical services directly to communities that would otherwise go without treatment.",
      date: "28 April 2025",
      category: "programs",
      author: "Dr. Pacific Team",
      readTime: "6 min read",
      views: 1100,
      image: "https://images.pexels.com/photos/6646917/pexels-photo-6646917.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      tags: ["Vanuatu", "Mobile Clinic", "Remote", "Access"]
    },
    {
      id: 5,
      title: "Technology innovation transforms diabetic retinopathy screening",
      excerpt: "New AI-powered screening technology is revolutionizing how we detect and treat diabetic retinopathy across the Pacific region.",
      content: "Our investment in cutting-edge technology is paying dividends, with AI-assisted screening helping us identify diabetic retinopathy cases earlier and more accurately than ever before.",
      date: "15 April 2025",
      category: "impact",
      author: "Dr. Tech Innovation Team",
      readTime: "4 min read",
      views: 780,
      image: "https://images.pexels.com/photos/8926554/pexels-photo-8926554.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      tags: ["Technology", "AI", "Diabetic Retinopathy", "Innovation"]
    },
    {
      id: 6,
      title: "Community health workers graduate from training program",
      excerpt: "Celebrating the graduation of 25 community health workers who completed our comprehensive eye health training program in Samoa.",
      content: "These newly certified community health workers will serve as the backbone of sustainable eye care delivery in their communities, extending our reach and impact across Samoa.",
      date: "2 April 2025",
      category: "programs",
      author: "Training Department",
      readTime: "3 min read",
      views: 520,
      image: "https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      tags: ["Training", "Samoa", "Community", "Graduation"]
    }
  ];

  const filteredNews = allNews.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleReadMore = (articleId: number) => {
    // In a real app, this would navigate to the full article
    const article = allNews.find(a => a.id === articleId);
    if (article) {
      alert(`Opening full article: "${article.title}"\n\n${article.content}\n\nThis would normally open the full article page.`);
    }
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
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              News & Updates
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Stay informed about our latest impact stories, program updates, and partnerships across the Pacific region
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search news and updates..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === category.id
                      ? 'bg-blue-600 text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* News Articles */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredNews.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No articles found matching your search criteria.</p>
            </div>
          ) : (
            <div className="grid lg:grid-cols-2 gap-8">
              {filteredNews.map((article, index) => (
                <article key={article.id} className={`bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 ${index === 0 ? 'lg:col-span-2' : ''}`}>
                  <div className="relative">
                    <img
                      src={article.image}
                      alt={article.title}
                      className={`w-full object-cover ${index === 0 ? 'h-80' : 'h-64'}`}
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium capitalize">
                        {article.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-8">
                    <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>{article.date}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <User className="h-4 w-4" />
                        <span>{article.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>{article.readTime}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Eye className="h-4 w-4" />
                        <span>{article.views} views</span>
                      </div>
                    </div>

                    <h2 className={`font-bold text-gray-900 mb-4 ${index === 0 ? 'text-3xl' : 'text-xl'}`}>
                      {article.title}
                    </h2>

                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {article.excerpt}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {article.tags.map((tag, tagIndex) => (
                        <span key={tagIndex} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm flex items-center space-x-1">
                          <Tag className="h-3 w-3" />
                          <span>{tag}</span>
                        </span>
                      ))}
                    </div>

                    <button
                      onClick={() => handleReadMore(article.id)}
                      className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors space-x-2"
                    >
                      <span>Read full article</span>
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </article>
              ))}
            </div>
          )}

          {/* Load More Button */}
          {filteredNews.length > 0 && (
            <div className="text-center mt-12">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-medium transition-colors">
                Load More Articles
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Stay Updated
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Subscribe to our newsletter to receive the latest news and updates directly in your inbox
          </p>
          
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-medium transition-colors whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default NewsPage;