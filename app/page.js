import Link from 'next/link';

export const metadata = {
  title: 'CleverPrep - AI-Powered Interview Preparation in 10 Minutes',
  description: 'Get a complete, customized interview prep package with company intelligence, practice questions, and strategic talking points. Personalized to your background and ready in under 10 minutes.',
  keywords: 'interview preparation, job interview, interview questions, career coaching, interview prep, AI interview prep',
  openGraph: {
    title: 'CleverPrep - Interview Prep That\'s Actually Personal',
    description: 'Upload your resume and job description. Get personalized interview questions, company insights, and strategic talking points.',
    type: 'website',
    url: 'https://cleverprep.com',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CleverPrep - AI Interview Preparation',
    description: 'Interview prep that\'s actually personal. Ready in less than 10 minutes.',
  }
};

export default function Home() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'CleverPrep Interview Preparation Package',
    description: 'Customized interview preparation package with company intelligence, practice questions, and strategic talking points',
    brand: {
      '@type': 'Brand',
      name: 'CleverPrep'
    },
    offers: {
      '@type': 'Offer',
      price: '39.00',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
      url: 'https://cleverprep.com/purchase'
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '127'
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <div className="min-h-screen relative overflow-hidden bg-[#FFFBF5]">
        {/* Background pattern */}
        <div className="absolute inset-0 bg-pattern pointer-events-none"></div>
        
        {/* Floating decorative elements */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none opacity-30">
          <div className="absolute top-20 right-10 w-64 h-64 rounded-full bg-gradient-to-br from-blue-200 to-blue-100 animate-float"></div>
          <div className="absolute bottom-20 left-10 w-80 h-80 rounded-full bg-gradient-to-br from-amber-200 to-amber-100 animate-float-delayed"></div>
          <div className="absolute top-1/2 right-1/4 w-40 h-40 rounded-full bg-gradient-to-br from-red-200 to-red-100 animate-float" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="relative z-10">
          {/* Navigation */}
          <nav className="w-full px-6 py-9 flex items-center justify-between max-w-7xl mx-auto">
            <div className="text-[2.75rem] font-black font-display text-[#1E3A8A]">
              CleverPrep
            </div>
            <div className="hidden md:flex items-center space-x-9">
              <a href="#how-it-works" className="text-gray-700 hover:text-[#1E3A8A] font-medium transition-colors text-lg">
                How It Works
              </a>
              <a href="#pricing" className="text-gray-700 hover:text-[#1E3A8A] font-medium transition-colors text-lg">
                Pricing
              </a>
              <a href="#faq" className="text-gray-700 hover:text-[#1E3A8A] font-medium transition-colors text-lg">
                FAQ
              </a>
            </div>
          </nav>

          {/* Hero Section */}
          <section className="pt-6 md:pt-8 pb-16 md:pb-24 px-6">
            <div className="max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-[13fr_7fr] gap-16 items-center">
                <div className="space-y-8">
                  <h1 className="text-6xl md:text-7xl lg:text-8xl font-black leading-[0.95] text-[#1E3A8A] font-display animate-fade-in-up">
                    Interview prep<br/>
                    that&apos;s <span className="text-gradient">actually</span><br/>
                    personal.
                  </h1>
                  <p className="text-4xl md:text-5xl font-bold text-gray-700 animate-fade-in-up delay-100">
                    Ready in less than 10 minutes.
                  </p>
                  
                  <p className="text-xl md:text-2xl text-gray-700 leading-relaxed max-w-2xl animate-fade-in-up delay-200">
                    Upload your resume and job description. Get a <em className="italic">personalized</em> interview guide with company intel, practice questions, and more. 
                    <span className="font-bold text-[#1E3A8A]"> Tailored to YOUR background.</span>
                  </p>
                  
                  <div className="space-y-4 animate-fade-in-up delay-300">
                    <div className="flex items-center gap-3 text-gray-700">
                      <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                        </svg>
                      </div>
                      <span className="font-semibold">Works for ANY company interview</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-700">
                      <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                        </svg>
                      </div>
                      <span className="font-semibold">100% Money-Back Guarantee</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4 pt-3 animate-fade-in-up delay-400">
                    <Link 
                      href="/purchase"
                      className="group inline-flex items-center justify-center gap-2 px-10 py-5 bg-[#1E3A8A] text-white text-lg font-bold rounded-2xl hover:bg-[#1E3A8A]/90 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#1E3A8A]/30"
                    >
                      <span>Start Your Prep</span>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                      </svg>
                    </Link>
                    <a 
                      href="/Example-CleverPrep-Package.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-10 py-5 bg-white border-2 border-[#1E3A8A] text-[#1E3A8A] text-lg font-bold rounded-2xl hover:bg-[#1E3A8A] hover:text-white transition-all duration-300"
                    >
                      <span>View Sample</span>
                    </a>
                  </div>
                </div>
                
                <div className="hidden lg:block animate-fade-in-scale delay-200">
                  <div className="relative">
                    {/* Decorative card stack */}
                    <div className="absolute -top-6 -left-6 w-full h-full bg-[#F59E0B] rounded-3xl opacity-20 rotate-3"></div>
                    <div className="absolute -top-3 -left-3 w-full h-full bg-[#FF6B6B] rounded-3xl opacity-20 rotate-2"></div>
                    
                    <div className="relative glass-card rounded-3xl p-8 shadow-2xl">
                      <div className="space-y-5">
                        {/* Header */}
                        <div className="flex items-center gap-4 pb-5 border-b-2 border-[#1E3A8A]/10">
                          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#1E3A8A] to-blue-600 flex items-center justify-center flex-shrink-0">
                            <span className="text-2xl">📋</span>
                          </div>
                          <div className="flex-1">
                            <div className="text-[#1E3A8A] font-bold text-lg mb-1">Interview Prep Package</div>
                            <div className="text-gray-500 text-sm">Goldman Sachs - Investment Banking</div>
                          </div>
                        </div>
                        
                        {/* Content sections */}
                        <div className="space-y-3">
                          <div className="bg-white border-2 border-[#1E3A8A]/10 rounded-xl p-4">
                            <div className="flex items-center gap-2 mb-2">
                              <span className="text-lg">🎯</span>
                              <span className="text-[#1E3A8A] font-semibold text-sm">Your Elevator Pitch</span>
                            </div>
                            <div className="space-y-1.5">
                              <div className="h-2 bg-[#1E3A8A]/20 rounded-full w-full"></div>
                              <div className="h-2 bg-[#1E3A8A]/15 rounded-full w-5/6"></div>
                            </div>
                          </div>
                          
                          <div className="bg-white border-2 border-[#1E3A8A]/10 rounded-xl p-4">
                            <div className="flex items-center gap-2 mb-2">
                              <span className="text-lg">💼</span>
                              <span className="text-[#1E3A8A] font-semibold text-sm">Company Intelligence</span>
                            </div>
                            <div className="space-y-1.5">
                              <div className="h-2 bg-[#1E3A8A]/20 rounded-full w-full"></div>
                              <div className="h-2 bg-[#1E3A8A]/15 rounded-full w-4/6"></div>
                            </div>
                          </div>
                          
                          <div className="bg-white border-2 border-[#1E3A8A]/10 rounded-xl p-4">
                            <div className="flex items-center gap-2 mb-2">
                              <span className="text-lg">❓</span>
                              <span className="text-[#1E3A8A] font-semibold text-sm">Practice Questions</span>
                            </div>
                            <div className="space-y-1.5">
                              <div className="h-2 bg-[#1E3A8A]/20 rounded-full w-full"></div>
                              <div className="h-2 bg-[#1E3A8A]/15 rounded-full w-3/6"></div>
                            </div>
                          </div>
                        </div>
                        
                        {/* Footer */}
                        <div className="pt-5 border-t-2 border-[#1E3A8A]/10 flex items-center justify-between">
                          <div className="text-gray-500 text-xs font-medium">11 pages • Ready to use</div>
                          <div className="flex gap-2">
                            <div className="w-8 h-8 rounded-lg bg-green-100 border-2 border-green-400 flex items-center justify-center">
                              <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                              </svg>
                            </div>
                            <div className="w-8 h-8 rounded-lg bg-blue-100 border-2 border-blue-400 flex items-center justify-center">
                              <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"/>
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* How It Works */}
          <section id="how-it-works" className="py-24 px-6 bg-white/50">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-5xl md:text-6xl font-black font-display text-[#1E3A8A] text-center mb-20">
                How It Works
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    number: "1",
                    title: "Share Your Details",
                    description: "Upload your resume and job listing. We'll tailor everything to exactly what you need.",
                    icon: "📄",
                    gradient: "from-blue-600 to-blue-800"
                  },
                  {
                    number: "2",
                    title: "AI Builds Your Blueprint",
                    description: "Our custom AI creates personalized questions, answers, and talking points.",
                    icon: "🤖",
                    gradient: "from-[#FF6B6B] to-red-600"
                  },
                  {
                    number: "3",
                    title: "Interview-Ready",
                    description: "Your customized prep package arrives—clear, targeted, and ready to win.",
                    icon: "🎯",
                    gradient: "from-[#F59E0B] to-yellow-600"
                  }
                ].map((step, index) => (
                  <div 
                    key={index} 
                    className="group hover-lift bg-white rounded-3xl p-10 border-2 border-[#1E3A8A]/10 relative overflow-hidden"
                  >
                    <div className="absolute top-4 right-4 text-8xl opacity-5">{step.icon}</div>
                    <div className="relative">
                      <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${step.gradient} flex items-center justify-center text-3xl font-black text-white mb-8`}>
                        {step.number}
                      </div>
                      <h3 className="text-2xl font-bold text-[#1E3A8A] mb-3">
                        {step.title}
                      </h3>
                      {step.subtitle && (
                        <p className="text-sm font-semibold text-[#FF6B6B] mb-4">
                          {step.subtitle}
                        </p>
                      )}
                      <p className="text-gray-600 text-lg leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Company Logos */}
          <section className="py-24 px-6">
            <div className="max-w-6xl mx-auto">
              <h3 className="text-2xl md:text-3xl font-bold text-center text-gray-600 mb-16">
                Trusted by candidates interviewing at any company including:
              </h3>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { name: 'Google', domain: 'google.com' },
                  { name: 'Amazon', domain: 'amazon.com' },
                  { name: 'Microsoft', domain: 'microsoft.com' },
                  { name: 'Meta', domain: 'meta.com' },
                  { name: 'Goldman Sachs', domain: 'goldmansachs.com' },
                  { name: 'McKinsey', domain: 'mckinsey.com' },
                  { name: 'JP Morgan', domain: 'jpmorganchase.com' },
                  { name: 'BCG', domain: 'bcg.com' },
                  { name: 'Netflix', domain: 'netflix.com' },
                  { name: 'Stripe', domain: 'stripe.com' },
                  { name: 'Airbnb', domain: 'airbnb.com' },
                  { name: 'Uber', domain: 'uber.com' }
                ].map((company, index) => (
                  <div 
                    key={index}
                    className="group glass-card rounded-2xl p-8 flex flex-col items-center justify-center hover:shadow-xl transition-all duration-300 border-2 border-[#1E3A8A]/5"
                  >
                    <img
                      src={`https://logo.clearbit.com/${company.domain}`}
                      alt={company.name}
                      className="w-full h-[50px] object-contain opacity-40 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300 mb-3"
                      loading="lazy"
                    />
                    <span className="text-sm text-gray-600 text-center">{company.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Why It Works */}
          <section className="py-24 px-6 bg-gradient-to-br from-[#1E3A8A] to-blue-900 text-white">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-20 items-center">
                <div className="space-y-10">
                  <h2 className="text-5xl md:text-6xl font-black font-display leading-tight">
                    Why It Actually Works
                  </h2>
                  
                  <div className="space-y-8">
                    <div className="flex gap-6">
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 rounded-2xl bg-[#FF6B6B]/20 border-2 border-[#FF6B6B] flex items-center justify-center">
                          <span className="text-3xl">📝</span>
                        </div>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold mb-3">
                          Built from YOUR materials
                        </h3>
                        <p className="text-blue-100 text-lg leading-relaxed">
                          We analyze your actual résumé and their actual job post—not generic templates—to surface exactly what they&apos;ll ask.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex gap-6">
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 rounded-2xl bg-[#F59E0B]/20 border-2 border-[#F59E0B] flex items-center justify-center">
                          <span className="text-3xl">🎯</span>
                        </div>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold mb-3">
                          Truly personalized
                        </h3>
                        <p className="text-blue-100 text-lg leading-relaxed">
                          AI extracts your most relevant experiences and creates talking points that connect YOUR background to what THEY want.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white/10 backdrop-blur-xl border-2 border-white/20 rounded-3xl p-10 space-y-8">
                  <h3 className="text-3xl font-bold mb-6">
                    What&apos;s Inside:
                  </h3>
                  
                  <div className="space-y-4 text-lg">
                    {[
                      "11 pages of customized content",
                      "Personalized elevator pitch",
                      "Company intelligence briefing",
                      "Likely questions with strategies",
                      "Day-of-interview checklist"
                    ].map((item, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <svg className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                        </svg>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                  
                  <a 
                    href="/Example-CleverPrep-Package.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-center px-8 py-5 bg-[#FF6B6B] text-white text-lg font-bold rounded-2xl hover:bg-[#FF6B6B]/90 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                  >
                    View Full Sample →
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Pricing */}
          <section id="pricing" className="py-24 px-6">
            <div className="max-w-2xl mx-auto">
              <div className="bg-white rounded-[2.5rem] p-12 md:p-16 shadow-2xl border-4 border-[#1E3A8A]/10">
                <div className="text-center mb-12">
                  <div className="text-7xl mb-6">📋</div>
                  <h2 className="text-4xl md:text-5xl font-black font-display text-[#1E3A8A] mb-4">
                    Complete Interview Prep
                  </h2>
                  <p className="text-xl text-gray-600 font-medium">
                    Personalized for YOUR background
                  </p>
                </div>

                <div className="h-1 bg-gradient-to-r from-transparent via-[#1E3A8A]/20 to-transparent mb-12"></div>

                <div className="space-y-5 mb-12">
                  {[
                    "Company-specific research and insights",
                    "Role-specific questions with model answers",
                    "Personalized talking points from your resume",
                    "Expert strategies and what they look for"
                  ].map((feature, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <svg className="w-7 h-7 text-green-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                      </svg>
                      <span className="text-lg text-gray-700 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="h-1 bg-gradient-to-r from-transparent via-[#1E3A8A]/20 to-transparent mb-12"></div>

                <div className="text-center mb-10">
                  <div className="flex items-baseline justify-center mb-2">
                    <span className="text-7xl font-black font-display text-[#1E3A8A]">$39</span>
                  </div>
                  <p className="text-lg font-bold text-[#FF6B6B] flex items-center justify-center gap-2">
                    <span>Early Adopter Pricing</span>
                    <span className="text-2xl">🔥</span>
                  </p>
                </div>

                <Link 
                  href="/purchase"
                  className="flex items-center justify-center gap-2 w-full text-center px-10 py-6 bg-[#1E3A8A] text-white text-xl font-black rounded-2xl hover:bg-[#1E3A8A]/90 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                >
                  <span>Start Your Prep</span>
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                  </svg>
                </Link>

                <div className="mt-10 space-y-4 text-center text-gray-600">
                  <div className="flex items-center justify-center gap-3">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
                    </svg>
                    <span className="font-medium">Secure payment via Stripe</span>
                  </div>
                  <div className="flex items-center justify-center gap-3">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                    </svg>
                    <span className="font-medium">Delivered in under 10 minutes</span>
                  </div>
                  <div className="flex items-center justify-center gap-3">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                    <span className="font-medium">100% Money-back guarantee</span>
                  </div>
                </div>
              </div>

              <div className="mt-10 text-center">
                <div className="inline-block border-2 border-[#1E3A8A]/20 rounded-2xl px-8 py-5 bg-white">
                  <span className="text-2xl mr-3">🎓</span>
                  <span className="text-[#1E3A8A] font-bold text-lg">
                    Students: Get 10% off with .edu email!
                  </span>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section id="faq" className="py-24 px-6 bg-white/50">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-5xl md:text-6xl font-black font-display text-[#1E3A8A] text-center mb-20">
                FAQ
              </h2>
              
              <div className="space-y-5">
                {[
                  {
                    question: "Is this better than ChatGPT?",
                    answer: "Yes. ChatGPT gives generic advice. CleverPrep analyzes YOUR resume against THEIR job description, researches the company's culture, and creates personalized talking points. It's 10 hours of research done in 10 minutes."
                  },
                  {
                    question: "How does it work?",
                    answer: "Upload your resume and job description. Our AI analyzes both, researches the company, generates questions, creates talking points, and delivers everything in a PDF—all in under 10 minutes."
                  },
                  {
                    question: "How long to receive my package?",
                    answer: "Your customized prep package arrives via email in under 10 minutes. You'll get a comprehensive PDF with everything you need."
                  },
                  {
                    question: "Is my information confidential?",
                    answer: "Absolutely. Your data is used only to create your package and never shared. We use industry-standard encryption to protect your information."
                  }
                ].map((faq, index) => (
                  <details 
                    key={index}
                    className="group bg-white rounded-2xl border-2 border-[#1E3A8A]/10 overflow-hidden hover:border-[#1E3A8A]/30 transition-all duration-300"
                  >
                    <summary className="cursor-pointer px-8 py-6 text-xl font-bold text-[#1E3A8A] flex items-center justify-between">
                      <span>{faq.question}</span>
                      <span className="text-[#FF6B6B] group-open:rotate-180 transition-transform duration-300 text-2xl">▼</span>
                    </summary>
                    <div className="px-8 pb-6 text-gray-700 text-lg leading-relaxed">
                      {faq.answer}
                    </div>
                  </details>
                ))}
              </div>
            </div>
          </section>

          {/* Final CTA */}
          <section className="py-24 px-6 bg-gradient-to-br from-[#1E3A8A] via-blue-900 to-[#1E3A8A]">
            <div className="max-w-4xl mx-auto text-center space-y-10 text-white">
              <h2 className="text-5xl md:text-6xl font-black font-display leading-tight">
                Ready to ace<br/>your interview?
              </h2>
              <p className="text-2xl text-blue-100 max-w-2xl mx-auto">
                Get your personalized prep package in 10 minutes.<br/>
                <span className="font-bold">100% money-back guarantee.</span>
              </p>
              <Link 
                href="/purchase"
                className="inline-flex items-center gap-3 px-12 py-6 bg-[#FF6B6B] text-white text-2xl font-black rounded-2xl hover:bg-[#FF6B6B]/90 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              >
                <span>Start Your Prep</span>
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                </svg>
              </Link>
            </div>
          </section>

          {/* Footer */}
          <footer className="border-t-2 border-[#1E3A8A]/10 py-16 px-6 bg-white">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-4 gap-12 mb-12">
                <div className="md:col-span-2">
                  <div className="text-3xl font-black font-display text-[#1E3A8A] mb-4">
                    CleverPrep
                  </div>
                  <p className="text-gray-600 text-lg max-w-md leading-relaxed">
                    Turning interviews into offers through personalized AI-powered preparation.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-[#1E3A8A] font-bold text-lg mb-4">Quick Links</h4>
                  <ul className="space-y-3 text-gray-600">
                    <li><a href="#how-it-works" className="hover:text-[#1E3A8A] font-medium transition-colors">How It Works</a></li>
                    <li><a href="#pricing" className="hover:text-[#1E3A8A] font-medium transition-colors">Pricing</a></li>
                    <li><a href="#faq" className="hover:text-[#1E3A8A] font-medium transition-colors">FAQ</a></li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-[#1E3A8A] font-bold text-lg mb-4">Contact</h4>
                  <p className="text-gray-600">
                    <a href="mailto:support@cleverprep.com" className="hover:text-[#1E3A8A] font-medium transition-colors">support@cleverprep.com</a>
                  </p>
                </div>
              </div>
              
              <div className="border-t-2 border-[#1E3A8A]/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-600">
                <p className="font-medium">© 2025 CleverPrep. All rights reserved.</p>
                <div className="flex gap-8">
                  <a href="#" className="hover:text-[#1E3A8A] font-medium transition-colors">Privacy</a>
                  <a href="#" className="hover:text-[#1E3A8A] font-medium transition-colors">Terms</a>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}
