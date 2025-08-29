import React from 'react';
import { Link } from 'react-router-dom';
import { Zap, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  const services = [
    { name: 'SEO & SEM', path: '/services/seo-sem' },
    { name: 'Social Media Marketing', path: '/services' },
    { name: 'Brand Design', path: '/services' },
    { name: 'Analytics & Insights', path: '/services' },
    { name: 'Mobile Marketing', path: '/services' },
    { name: 'Web Development', path: '/services' }
  ];

  const company = [
    { name: 'About Us', path: '/about' },
    { name: 'Our Team', path: '/about' },
    { name: 'Careers', path: '/about' },
    { name: 'Case Studies', path: '/portfolio' },
    { name: 'Blog', path: '#' },
    { name: 'Contact', path: '/contact' }
  ];

  const resources = [
    { name: 'Marketing Guide', path: '#' },
    { name: 'Industry Reports', path: '#' },
    { name: 'Templates', path: '#' },
    { name: 'Webinars', path: '#' },
    { name: 'Podcasts', path: '#' },
    { name: 'Newsletter', path: '#' }
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', name: 'Facebook' },
    { icon: Twitter, href: '#', name: 'Twitter' },
    { icon: Linkedin, href: '#', name: 'LinkedIn' },
    { icon: Instagram, href: '#', name: 'Instagram' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-6">
              <div className="bg-gradient-to-r from-cyan-600 to-purple-500 p-2 rounded-lg">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold">Stenth</span>
              <span className="text-xl font-bold">Stenth</span>
            </Link>
            <p className="text-gray-300 mb-6 leading-relaxed">
              We're a full-service marketing agency that transforms ambitious brands into market leaders through data-driven strategies and creative excellence.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-300">
                <Mail className="h-5 w-5 text-cyan-400" />
                <span>hello@stenth.com</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Phone className="h-5 w-5 text-cyan-400" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <MapPin className="h-5 w-5 text-cyan-400" />
                <span>ansh rai </span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <Link to={service.path} className="text-gray-300 hover:text-cyan-400 transition-colors duration-300">
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Company</h3>
            <ul className="space-y-3">
              {company.map((item, index) => (
                <li key={index}>
                  <Link to={item.path} className="text-gray-300 hover:text-cyan-400 transition-colors duration-300">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Resources</h3>
            <ul className="space-y-3">
              {resources.map((resource, index) => (
                <li key={index}>
                  <Link to={resource.path} className="text-gray-300 hover:text-cyan-400 transition-colors duration-300">
                    {resource.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="max-w-md mx-auto text-center lg:text-left lg:max-w-none lg:flex lg:items-center lg:justify-between">
            <div className="lg:flex-1">
              <h3 className="text-xl font-semibold mb-2">Stay Updated</h3>
              <p className="text-gray-300">Get the latest marketing insights delivered to your inbox.</p>
            </div>
            <div className="mt-6 lg:mt-0 lg:ml-8">
              <div className="flex flex-col sm:flex-row max-w-md mx-auto lg:mx-0">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-l-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300 sm:rounded-r-none sm:border-r-0"
                />
                <button className="bg-gradient-to-r from-cyan-600 to-purple-500 text-white px-6 py-3 rounded-r-lg hover:from-cyan-700 hover:to-purple-600 transform hover:scale-105 transition-all duration-300 sm:rounded-l-none">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col lg:flex-row lg:items-center lg:justify-between">
          <div className="text-center lg:text-left">
            <p className="text-gray-400">
              © 2024 Stenth. All rights reserved. | 
              <a href="#" className="hover:text-cyan-400 transition-colors duration-300 ml-1">Privacy Policy</a> | 
              <a href="#" className="hover:text-cyan-400 transition-colors duration-300 ml-1">Terms of Service</a>
            </p>
          </div>
          <div className="flex justify-center lg:justify-end space-x-4 mt-4 lg:mt-0">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                className="bg-gray-800 hover:bg-gradient-to-r hover:from-cyan-600 hover:to-purple-500 p-3 rounded-lg transition-all duration-300 transform hover:scale-110"
                aria-label={social.name}
              >
                <social.icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;