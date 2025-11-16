import { companies } from '@/data/companies'
import { roles, getRolesForCompany } from '@/data/roles'
import Link from 'next/link'
import CompanyLogo from '@/app/components/CompanyLogo'

// Add 'async' here
export default async function CompanyPage({ params }) {
  // Await params
  const resolvedParams = await params
  const company = companies[resolvedParams.slug]

  // Handle company not found
  if (!company) {
    return <div>Company not found</div>
  }

  // Schema.org structured data for SEO
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        'name': company.name,
        'description': company.description,
        'address': {
          '@type': 'PostalAddress',
          'addressLocality': company.headquarters
        }
      },
      {
        '@type': 'FAQPage',
        'mainEntity': company.questions.map((question) => ({
          '@type': 'Question',
          'name': question,
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': `This is a common interview question at ${company.name}. Our prep package includes detailed answers and strategies for this question.`
          }
        }))
      },
      {
        '@type': 'BreadcrumbList',
        'itemListElement': [
          {
            '@type': 'ListItem',
            'position': 1,
            'name': 'Companies',
            'item': 'https://cleverprep.com/companies'
          },
          {
            '@type': 'ListItem',
            'position': 2,
            'name': company.name,
            'item': `https://cleverprep.com/companies/${resolvedParams.slug}`
          }
        ]
      }
    ]
  }

  return (
    <div className="min-h-screen relative overflow-hidden bg-[#FFFBF5]">
      {/* Schema.org structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Background pattern */}
      <div className="absolute inset-0 bg-pattern pointer-events-none"></div>

      {/* Floating decorative elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none opacity-30">
        <div className="absolute top-20 right-10 w-64 h-64 rounded-full bg-gradient-to-br from-blue-200 to-blue-100 animate-float"></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 rounded-full bg-gradient-to-br from-amber-200 to-amber-100 animate-float-delayed"></div>
        <div className="absolute top-1/2 right-1/4 w-40 h-40 rounded-full bg-gradient-to-br from-red-200 to-red-100 animate-float" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative z-10">
        {/* Top Navigation Bar */}
        <nav className="w-full px-6 py-9 flex items-center justify-between max-w-7xl mx-auto">
          <Link href="/" className="text-[2.75rem] font-black font-display text-[#1E3A8A]">
            CleverPrep
          </Link>
          <div className="hidden md:flex items-center space-x-9">
            <Link href="/#how-it-works" className="text-gray-700 hover:text-[#1E3A8A] font-medium transition-colors text-lg">
              How It Works
            </Link>
            <Link href="/#pricing" className="text-gray-700 hover:text-[#1E3A8A] font-medium transition-colors text-lg">
              Pricing
            </Link>
            <Link href="/companies" className="text-gray-700 hover:text-[#1E3A8A] font-medium transition-colors text-lg">
              Companies
            </Link>
          </div>
        </nav>

        {/* Header */}
        <div className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <nav className="text-sm mb-6 text-gray-600">
              <Link href="/" className="hover:text-[#1E3A8A] transition-colors">CleverPrep</Link>
              {' > '}
              <Link href="/companies" className="hover:text-[#1E3A8A] transition-colors">Companies</Link>
              {' > '}
              <span className="text-[#1E3A8A] font-semibold">{company.name}</span>
            </nav>
            <div className="flex justify-center mb-8">
              <CompanyLogo companyName={company.name} />
            </div>
            <h1 className="text-6xl md:text-7xl font-black font-display text-[#1E3A8A] mb-6 text-center leading-tight animate-fade-in-up">
              {company.name}<br/>
              <span className="text-gradient">Interview Prep</span>
            </h1>
            <p className="text-2xl md:text-3xl font-bold text-gray-700 text-center leading-relaxed animate-fade-in-up delay-100">
              {company.tagline}
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto px-6 py-16 pb-40">
          {/* About Section */}
          <section className="mb-16">
            <h2 className="text-4xl md:text-5xl font-black font-display text-[#1E3A8A] mb-8">About {company.name}</h2>
            <div className="glass-card p-10 rounded-3xl border-2 border-[#1E3A8A]/10">
              <p className="text-gray-700 mb-8 text-xl leading-relaxed">{company.description}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#1E3A8A] to-blue-600 flex items-center justify-center flex-shrink-0">
                    <span className="text-xl">🏢</span>
                  </div>
                  <div>
                    <span className="font-bold text-[#1E3A8A] block text-sm">Industry</span>
                    <span className="text-gray-800 text-lg font-semibold">{company.industry}</span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#FF6B6B] to-red-600 flex items-center justify-center flex-shrink-0">
                    <span className="text-xl">📍</span>
                  </div>
                  <div>
                    <span className="font-bold text-[#1E3A8A] block text-sm">Headquarters</span>
                    <span className="text-gray-800 text-lg font-semibold">{company.headquarters}</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Interview Process */}
          <section className="mb-16">
            <h2 className="text-4xl md:text-5xl font-black font-display text-[#1E3A8A] mb-10">Interview Process</h2>
            <ol className="space-y-5">
              {company.process.map((item, index) => (
                <li key={item.step} className="group hover-lift glass-card p-8 rounded-3xl border-2 border-[#1E3A8A]/10 flex items-start">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${
                    index % 3 === 0 ? 'from-[#1E3A8A] to-blue-600' :
                    index % 3 === 1 ? 'from-[#FF6B6B] to-red-600' :
                    'from-[#F59E0B] to-yellow-600'
                  } flex items-center justify-center text-2xl font-black text-white mr-6 flex-shrink-0`}>
                    {item.step}
                  </div>
                  <div>
                    <strong className="text-2xl text-[#1E3A8A] font-bold block mb-3">{item.title}</strong>
                    <p className="text-gray-700 leading-relaxed text-lg">{item.description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </section>

          {/* What They Look For */}
          <section className="mb-16">
            <h2 className="text-4xl md:text-5xl font-black font-display text-[#1E3A8A] mb-10">What {company.name} Looks For</h2>
            <div className="glass-card p-10 rounded-3xl border-2 border-[#1E3A8A]/10">
              <div className="grid md:grid-cols-2 gap-6">
                {company.whatTheyLookFor.map((trait, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0 mr-4">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                    </div>
                    <span className="text-gray-700 text-lg leading-relaxed font-medium">{trait}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Interview Tips */}
          <section className="mb-16">
            <h2 className="text-4xl md:text-5xl font-black font-display text-[#1E3A8A] mb-10">Interview Tips & Tricks</h2>
            <div className="glass-card p-10 rounded-3xl border-2 border-[#1E3A8A]/10">
              <ul className="space-y-5">
                {company.interviewTips.map((tip, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-10 h-10 rounded-2xl bg-[#F59E0B]/20 border-2 border-[#F59E0B] flex items-center justify-center flex-shrink-0 mr-4">
                      <svg className="w-5 h-5 text-[#F59E0B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    </div>
                    <span className="text-gray-700 text-lg leading-relaxed font-medium pt-1">{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Common Questions */}
          <section className="mb-16">
            <h2 className="text-4xl md:text-5xl font-black font-display text-[#1E3A8A] mb-10">Common Interview Questions</h2>
            <ul className="space-y-4">
              {company.questions.map((question, index) => (
                <li key={index} className="group hover-lift glass-card border-l-4 border-[#FF6B6B] pl-8 pr-8 py-6 rounded-r-3xl transition-all">
                  <span className="text-gray-800 text-lg leading-relaxed font-medium">{question}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Related Companies */}
          {company.relatedCompanies && company.relatedCompanies.length > 0 && (
            <section className="mb-16">
              <h2 className="text-4xl md:text-5xl font-black font-display text-[#1E3A8A] mb-10">Similar Companies</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {company.relatedCompanies.map((relatedSlug) => {
                  const relatedCompany = companies[relatedSlug]
                  if (!relatedCompany) return null
                  return (
                    <Link
                      key={relatedSlug}
                      href={`/companies/${relatedSlug}`}
                      className="group hover-lift glass-card p-6 rounded-3xl text-center transition-all border-2 border-[#1E3A8A]/10 hover:border-[#1E3A8A]/30"
                    >
                      <div className="font-bold text-[#1E3A8A] text-lg mb-2">{relatedCompany.name}</div>
                      <div className="text-xs text-[#FF6B6B] font-semibold bg-[#FF6B6B]/10 px-2 py-1 rounded-full inline-block">{relatedCompany.industry}</div>
                    </Link>
                  )
                })}
              </div>
            </section>
          )}

      </div>

        {/* Footer */}
        <footer className="border-t-2 border-[#1E3A8A]/10 py-16 px-6 bg-white/50">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-4 gap-12 mb-12">
              <div className="md:col-span-2">
                <Link href="/" className="text-3xl font-black font-display text-[#1E3A8A] mb-4 inline-block">
                  CleverPrep
                </Link>
                <p className="text-gray-600 text-lg max-w-md leading-relaxed">
                  Turning interviews into offers through personalized AI-powered preparation.
                </p>
              </div>

              <div>
                <h4 className="text-[#1E3A8A] font-bold text-lg mb-4">Quick Links</h4>
                <ul className="space-y-3 text-gray-600">
                  <li><Link href="/#how-it-works" className="hover:text-[#1E3A8A] font-medium transition-colors">How It Works</Link></li>
                  <li><Link href="/#pricing" className="hover:text-[#1E3A8A] font-medium transition-colors">Pricing</Link></li>
                  <li><Link href="/companies" className="hover:text-[#1E3A8A] font-medium transition-colors">Companies</Link></li>
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

        {/* Enhanced Sticky CTA Bar */}
        <div className="fixed bottom-0 left-0 right-0 bg-gradient-to-r from-[#1E3A8A] to-blue-900 text-white shadow-2xl border-t-4 border-[#FF6B6B] z-50">
          <div className="max-w-4xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-center sm:text-left">
              <h3 className="text-xl font-black font-display mb-1">
                Ready to Ace Your {company.name} Interview?
              </h3>
              <p className="text-sm text-blue-100 leading-relaxed font-medium">
                Join candidates who landed their dream job with our proven prep system
              </p>
            </div>
            <Link
              href="/"
              className="inline-flex items-center gap-2 bg-[#FF6B6B] text-white px-10 py-4 rounded-2xl text-lg font-black hover:bg-[#FF6B6B]/90 transition-all whitespace-nowrap transform hover:scale-105 hover:shadow-2xl"
            >
              <span>Get Your Prep Package</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

// Also update these functions to be async
export async function generateMetadata({ params }) {
  const resolvedParams = await params
  const company = companies[resolvedParams.slug]

  if (!company) {
    return { title: 'Company Not Found' }
  }

  return {
    title: `${company.name} Interview Prep | CleverPrep Companies`,
    description: company.description + ` Learn about ${company.name}'s interview process, common questions, and what they look for in candidates.`,
    keywords: `${company.name} interview, ${company.name} interview questions, ${company.name} interview prep, ${company.name} interview process, ${company.industry} interviews`,
    openGraph: {
      title: `${company.name} Interview Prep | CleverPrep Companies`,
      description: `Ace your ${company.name} interview with our comprehensive prep guide. $59 for personalized coaching.`,
      type: 'website',
    }
  }
}

export function generateStaticParams() {
  return Object.keys(companies).map((slug) => ({
    slug: slug,
  }))
}
