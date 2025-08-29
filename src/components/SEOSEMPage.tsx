import React from 'react';
import { Search, TrendingUp, Target, BarChart3, Users, Globe, ArrowRight, CheckCircle, Star } from 'lucide-react';

const SEOSEMPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-900 via-blue-800 to-purple-900">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            SEO & <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">SEM</span> Services
          </h1>
          <p className="text-xl text-cyan-100 mb-8 max-w-3xl mx-auto">
            Dominate search results and drive qualified traffic with our comprehensive search engine optimization and marketing strategies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-cyan-500 to-teal-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-teal-700 transition-all duration-300 transform hover:scale-105">
              Get Free SEO Audit
            </button>
            <button className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300">
              View Case Studies
            </button>
          </div>
        </div>
      </section>

      {/* SEO Services */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-16">
            Search Engine Optimization
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Search,
                title: "Technical SEO Audit",
                description: "Comprehensive site analysis identifying crawl errors, page speed issues, and technical barriers affecting search performance."
              },
              {
                icon: Target,
                title: "Keyword Research",
                description: "In-depth keyword analysis and competitor research to identify high-value search opportunities in your industry."
              },
              {
                icon: Globe,
                title: "On-Page Optimization",
                description: "Optimize meta tags, headers, internal linking, and content structure for maximum search engine visibility."
              },
              {
                icon: TrendingUp,
                title: "Link Building",
                description: "Strategic link acquisition campaigns to build domain authority and improve search rankings through quality backlinks."
              }
            ].map((service, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm p-6 rounded-xl hover:bg-white/20 transition-all duration-300">
                <service.icon className="w-12 h-12 text-cyan-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-cyan-100">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEM Services */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-16">
            Search Engine Marketing
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Target,
                title: "Google Ads Management",
                description: "Expert campaign setup, keyword bidding, ad copy optimization, and performance monitoring for maximum ROI."
              },
              {
                icon: BarChart3,
                title: "Bing Ads Campaigns",
                description: "Tap into Microsoft's search network with targeted campaigns reaching professional audiences and decision-makers."
              },
              {
                icon: Users,
                title: "Landing Page Optimization",
                description: "A/B test landing pages, improve conversion rates, and create seamless user experiences that drive results."
              },
              {
                icon: TrendingUp,
                title: "Bid Management",
                description: "Advanced bid strategies, budget optimization, and automated rules to maximize ad spend efficiency."
              }
            ].map((service, index) => (
              <div key={index} className="bg-gradient-to-br from-cyan-500/20 to-purple-500/20 p-6 rounded-xl hover:from-cyan-500/30 hover:to-purple-500/30 transition-all duration-300">
                <service.icon className="w-12 h-12 text-purple-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-cyan-100">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-16">
            Why Choose Our SEO & SEM Services?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                stat: "300%",
                label: "Average Traffic Increase",
                description: "Our clients see significant organic traffic growth within 6 months"
              },
              {
                stat: "150%",
                label: "ROI Improvement",
                description: "Optimized ad campaigns deliver better returns on advertising spend"
              },
              {
                stat: "85%",
                label: "First Page Rankings",
                description: "Target keywords ranking on Google's first page within 12 months"
              }
            ].map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-2">
                  {benefit.stat}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{benefit.label}</h3>
                <p className="text-cyan-100">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-16">
            Our Proven Process
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery & Analysis",
                description: "Comprehensive audit of your current search presence, competitor analysis, and goal setting."
              },
              {
                step: "02",
                title: "Strategy Development",
                description: "Custom SEO and SEM strategy tailored to your business objectives and target audience."
              },
              {
                step: "03",
                title: "Implementation",
                description: "Execute optimization changes, launch campaigns, and implement tracking systems."
              },
              {
                step: "04",
                title: "Monitor & Optimize",
                description: "Continuous monitoring, A/B testing, and optimization for sustained growth."
              }
            ].map((process, index) => (
              <div key={index} className="relative">
                <div className="bg-gradient-to-br from-cyan-500/20 to-purple-500/20 p-6 rounded-xl">
                  <div className="text-3xl font-bold text-cyan-400 mb-4">{process.step}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{process.title}</h3>
                  <p className="text-cyan-100">{process.description}</p>
                </div>
                {index < 3 && (
                  <ArrowRight className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 text-cyan-400 w-8 h-8" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Preview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-16">
            Success Stories
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                company: "TechStart Inc.",
                industry: "SaaS",
                result: "400% organic traffic increase",
                description: "Complete SEO overhaul resulting in first-page rankings for 50+ keywords"
              },
              {
                company: "Local Retail Chain",
                industry: "E-commerce",
                result: "250% conversion rate boost",
                description: "Google Ads optimization and landing page improvements"
              },
              {
                company: "Professional Services",
                industry: "B2B",
                result: "180% lead generation growth",
                description: "Integrated SEO and SEM strategy targeting high-intent keywords"
              }
            ].map((study, index) => (
              <div key={index} className="bg-gradient-to-br from-cyan-500/10 to-purple-500/10 p-6 rounded-xl">
                <div className="flex items-center mb-4">
                  <Star className="w-5 h-5 text-cyan-400 mr-2" />
                  <span className="text-cyan-400 font-semibold">{study.industry}</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{study.company}</h3>
                <div className="text-2xl font-bold text-purple-400 mb-3">{study.result}</div>
                <p className="text-cyan-100 mb-4">{study.description}</p>
                <button className="text-cyan-400 hover:text-white transition-colors duration-300 flex items-center">
                  View Full Case Study <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools & Technologies */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-16">
            Tools & Technologies We Use
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {[
              "Google Analytics", "Google Search Console", "SEMrush", "Ahrefs", 
              "Google Ads", "Bing Ads", "Screaming Frog", "GTMetrix",
              "Hotjar", "Google Tag Manager", "Moz", "BrightEdge"
            ].map((tool, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm p-4 rounded-lg hover:bg-white/20 transition-all duration-300">
                <div className="text-white font-semibold">{tool}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Dominate Search Results?
          </h2>
          <p className="text-xl text-cyan-100 mb-8">
            Get a free SEO audit and custom strategy proposal for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-cyan-500 to-teal-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-teal-700 transition-all duration-300 transform hover:scale-105">
              Get Free Audit
            </button>
            <button className="border-2 border-purple-400 text-purple-400 px-8 py-4 rounded-lg font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300">
              Schedule Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SEOSEMPage;