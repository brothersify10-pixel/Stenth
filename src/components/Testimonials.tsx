import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      content: "Stenth transformed our digital presence completely. Our lead generation increased by 340% in just 6 months, and their strategic approach helped us achieve our first $1M quarter.",
      author: "Jennifer Walsh",
      position: "CEO, TechFlow Solutions",
      company: "B2B SaaS",
      image: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=300",
      rating: 5,
      results: "340% Lead Increase"
    },
    {
      content: "Working with Stenth was a game-changer for our e-commerce business. Their integrated marketing approach helped us scale from $50K to $500K monthly revenue in under a year.",
      author: "David Chen",
      position: "Founder, EcoGreen Lifestyle",
      company: "E-commerce",
      image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=300",
      rating: 5,
      results: "10x Revenue Growth"
    },
    {
      content: "The team's expertise in healthcare marketing is unmatched. They helped us expand to 3 new locations and triple our patient base while maintaining our reputation as the trusted local clinic.",
      author: "Dr. Maria Rodriguez",
      position: "Medical Director, HealthFirst Clinic",
      company: "Healthcare",
      image: "https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg?auto=compress&cs=tinysrgb&w=300",
      rating: 5,
      results: "250% Patient Growth"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 6000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1);
  };

  const prevTestimonial = () => {
    setCurrentIndex(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-20 bg-gradient-to-br from-cyan-900 via-blue-800 to-purple-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-64 h-64 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            What Our Clients
            <span className="block bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Are Saying
            </span>
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what industry leaders say about working with Stenth.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-8 lg:p-12 border border-white/20">
            {/* Navigation Buttons */}
            <button 
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 rounded-full p-3 transition-all duration-300 hover:scale-110"
            >
              <ChevronLeft className="h-6 w-6 text-white" />
            </button>
            <button 
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 rounded-full p-3 transition-all duration-300 hover:scale-110"
            >
              <ChevronRight className="h-6 w-6 text-white" />
            </button>

            {/* Testimonial Content */}
            <div className="text-center px-8 lg:px-16">
              {/* Stars */}
              <div className="flex justify-center mb-6">
                {[...Array(currentTestimonial.rating)].map((_, index) => (
                  <Star key={index} className="h-6 w-6 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-xl lg:text-2xl text-white mb-8 leading-relaxed font-light italic">
                "{currentTestimonial.content}"
              </blockquote>

              {/* Author Info */}
              <div className="flex items-center justify-center space-x-4 mb-6">
                <img 
                  src={currentTestimonial.image} 
                  alt={currentTestimonial.author}
                  className="w-16 h-16 rounded-full border-3 border-white/30"
                />
                <div className="text-left">
                  <div className="text-white font-semibold text-lg">{currentTestimonial.author}</div>
                  <div className="text-blue-200">{currentTestimonial.position}</div>
                  <div className="text-blue-300 text-sm">{currentTestimonial.company}</div>
                </div>
              </div>

              {/* Results Badge */}
              <div className="inline-flex items-center bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-6 py-2 rounded-full text-sm font-semibold">
                <span className="mr-2">📈</span>
                {currentTestimonial.results}
              </div>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'bg-cyan-400 scale-125' 
                      : 'bg-white/40 hover:bg-white/60'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <p className="text-blue-200 mb-8">Trusted by industry leaders</p>
          <div className="flex flex-wrap justify-center items-center space-x-8 lg:space-x-12 opacity-60">
            <div className="text-white font-bold text-xl">TechFlow</div>
            <div className="text-white font-bold text-xl">EcoGreen</div>
            <div className="text-white font-bold text-xl">HealthFirst</div>
            <div className="text-white font-bold text-xl">FinanceMax</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;