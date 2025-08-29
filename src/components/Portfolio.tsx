import React from 'react';
import { ExternalLink, TrendingUp } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      title: 'TechFlow Solutions',
      category: 'B2B SaaS',
      description: 'Complete digital transformation resulting in 340% increase in qualified leads and $2M ARR growth.',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
      results: { metric: '340%', label: 'Lead Increase' },
      tags: ['SEO', 'PPC', 'Content Marketing']
    },
    {
      title: 'EcoGreen Lifestyle',
      category: 'E-commerce',
      description: 'Sustainable brand launch with integrated marketing strategy across multiple channels.',
      image: 'https://images.pexels.com/photos/3184432/pexels-photo-3184432.jpeg?auto=compress&cs=tinysrgb&w=800',
      results: { metric: '180%', label: 'Revenue Growth' },
      tags: ['Social Media', 'Influencer Marketing', 'Brand Design']
    },
    {
      title: 'HealthFirst Clinic',
      category: 'Healthcare',
      description: 'Local SEO and digital presence optimization for medical practice expansion.',
      image: 'https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg?auto=compress&cs=tinysrgb&w=800',
      results: { metric: '250%', label: 'Patient Acquisition' },
      tags: ['Local SEO', 'Web Design', 'Online Reputation']
    },
    {
      title: 'FinanceMax App',
      category: 'Fintech',
      description: 'Mobile app launch campaign with focus on user acquisition and retention strategies.',
      image: 'https://images.pexels.com/photos/3184454/pexels-photo-3184454.jpeg?auto=compress&cs=tinysrgb&w=800',
      results: { metric: '500K', label: 'App Downloads' },
      tags: ['Mobile Marketing', 'App Store Optimization', 'Performance Marketing']
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Success Stories That
            <span className="block bg-gradient-to-r from-cyan-600 to-purple-500 bg-clip-text text-transparent">
              Speak Volumes
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover how we've helped businesses across industries achieve remarkable growth through strategic marketing initiatives.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-500 border border-gray-100">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-gray-800">
                  {project.category}
                </div>
                <div className="absolute bottom-4 left-4 bg-gradient-to-r from-cyan-600 to-purple-500 text-white px-4 py-2 rounded-full opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                  <div className="flex items-center space-x-2">
                    <TrendingUp className="h-4 w-4" />
                    <span className="font-bold">{project.results.metric}</span>
                    <span className="text-sm">{project.results.label}</span>
                  </div>
                </div>
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-cyan-600 transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium hover:bg-cyan-100 hover:text-cyan-700 transition-colors duration-300">
                      {tag}
                    </span>
                  ))}
                </div>

                <button className="flex items-center space-x-2 text-cyan-600 font-semibold hover:text-purple-500 transition-colors duration-300 group-hover:translate-x-1 transform transition-transform duration-300">
                  <span>View Case Study</span>
                  <ExternalLink className="h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-cyan-600 to-purple-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-cyan-700 hover:to-purple-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;