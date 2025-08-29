import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, Megaphone, Palette, BarChart3, Smartphone, Globe, ArrowRight, CheckCircle } from 'lucide-react';

const ServicesPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [
    {
      icon: Search,
      title: 'SEO & SEM',
      description: 'Dominate search results with our proven SEO strategies and targeted paid search campaigns that drive qualified traffic.',
      features: ['Keyword Research & Strategy', 'Technical SEO Audits', 'Google Ads Management', 'Local SEO Optimization', 'Conversion Rate Optimization'],
      link: '/services/seo-sem'
    },
    {
      icon: Megaphone,
      title: 'Social Media Marketing',
      description: 'Build authentic connections and drive engagement across all major social platforms with strategic content and campaigns.',
      features: ['Content Strategy & Creation', 'Community Management', 'Paid Social Advertising', 'Influencer Partnerships', 'Social Media Analytics']
    },
    {
      icon: Palette,
      title: 'Brand Design & Identity',
      description: 'Create memorable brand identities that resonate with your audience and drive recognition across all touchpoints.',
      features: ['Logo & Visual Identity Design', 'Brand Guidelines Development', 'Marketing Collateral Design', 'Website UI/UX Design', 'Brand Strategy Consulting']
    },
    {
      icon: BarChart3,
      title: 'Analytics & Data Insights',
      description: 'Make data-driven decisions with comprehensive tracking, analysis, and actionable insights for continuous growth.',
      features: ['Google Analytics Setup', 'Custom Dashboard Creation', 'Performance Tracking', 'ROI Analysis & Reporting', 'Growth Recommendations']
    },
    {
      icon: Smartphone,
      title: 'Mobile Marketing',
      description: 'Reach customers on-the-go with mobile-optimized campaigns, app marketing, and location-based targeting strategies.',
      features: ['Mobile App Marketing', 'SMS Marketing Campaigns', 'Location-Based Advertising', 'Mobile-First Web Design', 'App Store Optimization']
    },
    {
      icon: Globe,
      title: 'Web Development',
      description: 'Build high-converting websites and landing pages that turn visitors into customers with modern, responsive design.',
      features: ['Responsive Web Design', 'E-commerce Development', 'Landing Page Creation', 'Website Performance Optimization', 'CMS Integration']
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Discovery & Strategy',
      description: 'We start by understanding your business goals, target audience, and competitive landscape to develop a tailored strategy.'
    },
    {
      step: '02',
      title: 'Planning & Design',
      description: 'Our team creates detailed project plans, wireframes, and designs that align with your brand and objectives.'
    },
    {
      step: '03',
      title: 'Implementation',
      description: 'We execute the strategy with precision, using industry best practices and cutting-edge tools for optimal results.'
    },
    {
      step: '04',
      title: 'Optimization & Growth',
      description: 'Continuous monitoring, testing, and optimization ensure your campaigns deliver maximum ROI and sustainable growth.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-cyan-900 via-blue-800 to-purple-900 py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
          <div className="text-center animate-fade-in-up">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Our Services
              <span className="block bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Drive Your Success
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto leading-relaxed">
              Comprehensive marketing solutions designed to accelerate your business growth and maximize your return on investment.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-sm text-gray-700">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <div className="mt-auto">
                  {service.link ? (
                    <Link 
                      to={service.link}
                      className="inline-flex items-center bg-gradient-to-r from-cyan-600 to-purple-500 text-white px-6 py-3 rounded-full font-semibold hover:from-cyan-700 hover:to-purple-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                    >
                      Learn More
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Link>
                  ) : (
                    <button className="inline-flex items-center bg-gradient-to-r from-cyan-600 to-purple-500 text-white px-6 py-3 rounded-full font-semibold hover:from-cyan-700 hover:to-purple-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                      Learn More
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Our Proven Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A systematic approach that ensures consistent, measurable results for every client.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center group">
                <div className="bg-gradient-to-r from-cyan-600 to-purple-500 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-purple-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Let's discuss how our services can help you achieve your marketing goals and drive sustainable growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact"
              className="bg-white text-cyan-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg"
            >
              Get Started Today
            </Link>
            <Link 
              to="/portfolio"
              className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-cyan-600 transform hover:scale-105 transition-all duration-300"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;