import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Tag, TrendingUp, Target, Users, DollarSign, CheckCircle } from 'lucide-react';

const CaseStudyPage = () => {
  const { id } = useParams();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const caseStudies = {
    'techflow-solutions': {
      title: 'TechFlow Solutions',
      subtitle: 'B2B SaaS Digital Transformation',
      category: 'B2B SaaS',
      date: '2024',
      duration: '8 months',
      client: 'TechFlow Solutions',
      industry: 'Software as a Service',
      heroImage: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1200',
      overview: 'TechFlow Solutions, a growing B2B SaaS company, approached us with challenges in lead generation and market visibility. Despite having a solid product, they struggled to reach their target audience effectively and convert website visitors into qualified leads.',
      challenge: {
        title: 'The Challenge',
        description: 'TechFlow Solutions faced several critical marketing challenges that were hindering their growth potential.',
        points: [
          'Low organic search visibility for key industry terms',
          'High cost-per-click with poor conversion rates in paid campaigns',
          'Lack of cohesive content strategy to nurture leads',
          'Ineffective lead qualification and scoring system',
          'Limited brand recognition in competitive SaaS market'
        ]
      },
      solution: {
        title: 'Our Solution',
        description: 'We developed a comprehensive digital marketing strategy focused on sustainable growth and lead quality.',
        strategies: [
          {
            title: 'SEO & Content Marketing',
            description: 'Comprehensive keyword research and content strategy targeting decision-makers in their industry.',
            tactics: ['Technical SEO audit and optimization', 'Long-form educational content creation', 'Industry-specific landing pages', 'Thought leadership blog posts']
          },
          {
            title: 'Paid Search Optimization',
            description: 'Complete restructuring of Google Ads campaigns with focus on high-intent keywords.',
            tactics: ['Account restructure and keyword optimization', 'Landing page A/B testing', 'Advanced audience targeting', 'Conversion tracking implementation']
          },
          {
            title: 'Marketing Automation',
            description: 'Implementation of sophisticated lead nurturing and scoring systems.',
            tactics: ['HubSpot CRM integration', 'Email nurture sequences', 'Lead scoring model', 'Sales and marketing alignment']
          }
        ]
      },
      results: {
        title: 'The Results',
        description: 'Our integrated approach delivered exceptional results across all key performance indicators.',
        metrics: [
          { icon: TrendingUp, value: '340%', label: 'Increase in Qualified Leads', description: 'Monthly qualified leads grew from 45 to 198' },
          { icon: Target, value: '65%', label: 'Reduction in Cost Per Lead', description: 'CPL decreased from $180 to $63' },
          { icon: Users, value: '280%', label: 'Organic Traffic Growth', description: 'Monthly organic sessions increased to 28,000' },
          { icon: DollarSign, value: '$2M', label: 'Additional ARR Generated', description: 'Direct attribution to marketing efforts' }
        ]
      },
      testimonial: {
        quote: "Stenth transformed our entire marketing approach. The results speak for themselves - we've achieved our first $1M quarter and are on track for significant growth. Their strategic thinking and execution are exceptional.",
        author: "Jennifer Walsh",
        position: "CEO, TechFlow Solutions"
      },
      images: [
        'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800'
      ]
    },
    'ecogreen-lifestyle': {
      title: 'EcoGreen Lifestyle',
      subtitle: 'Sustainable E-commerce Brand Launch',
      category: 'E-commerce',
      date: '2024',
      duration: '6 months',
      client: 'EcoGreen Lifestyle',
      industry: 'Sustainable Products',
      heroImage: 'https://images.pexels.com/photos/3184432/pexels-photo-3184432.jpeg?auto=compress&cs=tinysrgb&w=1200',
      overview: 'EcoGreen Lifestyle launched as a sustainable lifestyle brand with a mission to make eco-friendly products accessible to mainstream consumers. They needed a comprehensive brand launch strategy to establish market presence and drive sales.',
      challenge: {
        title: 'The Challenge',
        description: 'Launching a new sustainable brand in a competitive e-commerce landscape required strategic positioning and multi-channel execution.',
        points: [
          'Building brand awareness from zero in crowded sustainability market',
          'Educating consumers about sustainable product benefits',
          'Establishing trust and credibility as a new brand',
          'Creating effective product discovery and conversion funnels',
          'Competing with established eco-friendly brands'
        ]
      },
      solution: {
        title: 'Our Solution',
        description: 'We created an integrated brand launch strategy combining storytelling, influencer partnerships, and performance marketing.',
        strategies: [
          {
            title: 'Brand Identity & Positioning',
            description: 'Developed compelling brand story and visual identity that resonates with eco-conscious consumers.',
            tactics: ['Brand messaging and positioning strategy', 'Visual identity and packaging design', 'Website design and user experience', 'Brand guidelines and voice development']
          },
          {
            title: 'Influencer Marketing',
            description: 'Strategic partnerships with sustainability influencers and micro-influencers.',
            tactics: ['Influencer identification and outreach', 'Content collaboration and co-creation', 'Authentic product reviews and testimonials', 'Long-term brand ambassador program']
          },
          {
            title: 'Social Commerce',
            description: 'Leveraged social media platforms for product discovery and direct sales.',
            tactics: ['Instagram and TikTok content strategy', 'Social media advertising campaigns', 'User-generated content campaigns', 'Community building and engagement']
          }
        ]
      },
      results: {
        title: 'The Results',
        description: 'The brand launch exceeded expectations, establishing EcoGreen as a recognized player in sustainable e-commerce.',
        metrics: [
          { icon: TrendingUp, value: '180%', label: 'Revenue Growth', description: 'Monthly revenue increased from $25K to $70K' },
          { icon: Users, value: '450%', label: 'Social Media Following', description: 'Instagram followers grew to 85K in 6 months' },
          { icon: Target, value: '320%', label: 'Website Conversion Rate', description: 'Conversion rate improved from 1.2% to 5.0%' },
          { icon: DollarSign, value: '4.2x', label: 'Return on Ad Spend', description: 'Average ROAS across all channels' }
        ]
      },
      testimonial: {
        quote: "Stenth helped us build not just a brand, but a movement. Their understanding of our values and ability to translate them into effective marketing strategies has been incredible. We've exceeded our first-year goals in just 6 months.",
        author: "David Chen",
        position: "Founder, EcoGreen Lifestyle"
      },
      images: [
        'https://images.pexels.com/photos/3184432/pexels-photo-3184432.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=800'
      ]
    }
  };

  const caseStudy = caseStudies[id as keyof typeof caseStudies];

  if (!caseStudy) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Case Study Not Found</h1>
          <Link to="/portfolio" className="text-blue-600 hover:text-orange-500">
            ← Back to Portfolio
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-96 overflow-hidden">
        <img 
          src={caseStudy.heroImage} 
          alt={caseStudy.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30"></div>
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <Link 
              to="/portfolio"
              className="inline-flex items-center text-white hover:text-cyan-400 transition-colors duration-300 mb-6"
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              Back to Portfolio
            </Link>
            <div className="max-w-3xl">
              <div className="flex items-center space-x-4 text-white/80 mb-4">
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-2" />
                  {caseStudy.date}
                </div>
                <div className="flex items-center">
                  <Tag className="h-4 w-4 mr-2" />
                  {caseStudy.duration}
                </div>
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
                {caseStudy.title}
              </h1>
              <p className="text-xl text-white/90">
                {caseStudy.subtitle}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Project Overview</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                {caseStudy.overview}
              </p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Project Details</h3>
              <div className="space-y-3">
                <div>
                  <span className="text-sm font-medium text-gray-500">Client</span>
                  <p className="text-gray-900">{caseStudy.client}</p>
                </div>
                <div>
                  <span className="text-sm font-medium text-gray-500">Industry</span>
                  <p className="text-gray-900">{caseStudy.industry}</p>
                </div>
                <div>
                  <span className="text-sm font-medium text-gray-500">Duration</span>
                  <p className="text-gray-900">{caseStudy.duration}</p>
                </div>
                <div>
                  <span className="text-sm font-medium text-gray-500">Year</span>
                  <p className="text-gray-900">{caseStudy.date}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenge */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">{caseStudy.challenge.title}</h2>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            {caseStudy.challenge.description}
          </p>
          <ul className="space-y-4">
            {caseStudy.challenge.points.map((point, index) => (
              <li key={index} className="flex items-start">
                <div className="w-2 h-2 bg-orange-500 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                <span className="text-gray-700">{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Solution */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">{caseStudy.solution.title}</h2>
          <p className="text-lg text-gray-600 mb-12 leading-relaxed">
            {caseStudy.solution.description}
          </p>
          
          <div className="space-y-12">
            {caseStudy.solution.strategies.map((strategy, index) => (
              <div key={index} className="border-l-4 border-blue-500 pl-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{strategy.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{strategy.description}</p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {strategy.tactics.map((tactic, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{tactic}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-orange-500">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">{caseStudy.results.title}</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              {caseStudy.results.description}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {caseStudy.results.metrics.map((metric, index) => (
              <div key={index} className="text-center">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                  <metric.icon className="h-12 w-12 text-orange-300 mx-auto mb-4" />
                  <div className="text-4xl font-bold text-white mb-2">{metric.value}</div>
                  <div className="text-blue-200 font-semibold mb-2">{metric.label}</div>
                  <div className="text-blue-100 text-sm">{metric.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-50 rounded-2xl p-8 lg:p-12 text-center">
            <blockquote className="text-2xl text-gray-900 mb-8 leading-relaxed italic">
              "{caseStudy.testimonial.quote}"
            </blockquote>
            <div>
              <div className="font-semibold text-gray-900 text-lg">{caseStudy.testimonial.author}</div>
              <div className="text-blue-600">{caseStudy.testimonial.position}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Images Gallery */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Project Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {caseStudy.images.map((image, index) => (
              <div key={index} className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                <img 
                  src={image} 
                  alt={`${caseStudy.title} - Image ${index + 1}`}
                  className="w-full h-64 object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-cyan-900 via-blue-800 to-purple-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready for Similar Results?
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Let's discuss how we can create a customized strategy to achieve your business goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-teal-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-cyan-600 hover:to-teal-700 transform hover:scale-105 transition-all duration-300 shadow-lg"
            >
              Start Your Project
            </Link>
            <Link 
              to="/portfolio"
              className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-cyan-900 transform hover:scale-105 transition-all duration-300"
            >
              View More Cases
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudyPage;