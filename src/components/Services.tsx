import React from 'react';
import { Link } from 'react-router-dom';
import { Search, Megaphone, Palette, BarChart3, Smartphone, Globe } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Search,
      title: 'SEO & SEM',
      description: 'Dominate search results with our proven SEO strategies and targeted paid search campaigns.',
      features: ['Keyword Research', 'On-page Optimization', 'Link Building', 'Google Ads Management']
    },
    {
      icon: Megaphone,
      title: 'Social Media Marketing',
      description: 'Build authentic connections and drive engagement across all major social platforms.',
      features: ['Content Strategy', 'Community Management', 'Paid Social Ads', 'Influencer Partnerships']
    },
    {
      icon: Palette,
      title: 'Brand Design',
      description: 'Create memorable brand identities that resonate with your audience and drive recognition.',
      features: ['Logo Design', 'Brand Guidelines', 'Visual Identity', 'Marketing Materials']
    },
    {
      icon: BarChart3,
      title: 'Analytics & Insights',
      description: 'Make data-driven decisions with comprehensive tracking and actionable insights.',
      features: ['Performance Tracking', 'Custom Dashboards', 'ROI Analysis', 'Growth Recommendations']
    },
    {
      icon: Smartphone,
      title: 'Mobile Marketing',
      description: 'Reach customers on-the-go with mobile-optimized campaigns and app marketing.',
      features: ['Mobile Ads', 'App Store Optimization', 'SMS Marketing', 'Location-based Targeting']
    },
    {
      icon: Globe,
      title: 'Web Development',
      description: 'Build high-converting websites and landing pages that turn visitors into customers.',
      features: ['Responsive Design', 'E-commerce Solutions', 'Landing Pages', 'Performance Optimization']
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Services That Drive
            <span className="block bg-gradient-to-r from-cyan-600 to-purple-500 bg-clip-text text-transparent">
              Real Results
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From strategy to execution, we provide comprehensive marketing solutions that accelerate your business growth and maximize your ROI.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 border border-gray-100">
              <div className="bg-gradient-to-br from-cyan-50 to-purple-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="h-8 w-8 text-cyan-600 group-hover:text-purple-500 transition-colors duration-300" />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-cyan-600 transition-colors duration-300">
                {service.title}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-500">
                    <div className="w-2 h-2 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mr-3 group-hover:scale-125 transition-transform duration-300"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <div className="mt-6 pt-6 border-t border-gray-100">
                {index === 0 ? (
                  <Link 
                    to="/seo-sem"
                    className="text-cyan-600 font-semibold hover:text-purple-500 transition-colors duration-300 flex items-center group-hover:translate-x-1 transform transition-transform duration-300"
                  >
                    Learn More →
                  </Link>
                ) : (
                  <button className="text-cyan-600 font-semibold hover:text-purple-500 transition-colors duration-300 flex items-center group-hover:translate-x-1 transform transition-transform duration-300">
                    Learn More →
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;