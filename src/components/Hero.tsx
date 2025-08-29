import React from 'react';
import { ArrowRight, TrendingUp, Users, Award } from 'lucide-react';

const Hero = () => {
  const stats = [
    { icon: Users, value: '500+', label: 'Happy Clients' },
    { icon: TrendingUp, value: '250%', label: 'Avg Growth' },
    { icon: Award, value: '50+', label: 'Awards Won' },
  ];

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-cyan-900 via-blue-800 to-purple-900 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-teal-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
        <div className="text-center">
          {/* Main Headline */}
          <div className="mb-8 animate-fade-in-up">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Ignite Your Brand's
              <span className="block bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Digital Potential
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto leading-relaxed">
              We're a full-service marketing agency that transforms ambitious brands into market leaders through data-driven strategies and creative excellence.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="mb-16 space-y-4 sm:space-y-0 sm:space-x-6 sm:flex sm:justify-center">
            <button className="group bg-gradient-to-r from-cyan-500 to-teal-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-cyan-600 hover:to-teal-700 transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-cyan-500/25 flex items-center justify-center space-x-2 w-full sm:w-auto">
              <span>Start Your Growth</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-blue-900 transform hover:scale-105 transition-all duration-300 w-full sm:w-auto">
              View Our Work
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transform hover:scale-105 transition-all duration-300">
                  <stat.icon className="h-8 w-8 text-cyan-400 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-blue-200 font-medium">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;