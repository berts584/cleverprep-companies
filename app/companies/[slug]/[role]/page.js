import { companies } from '@/data/companies'
import { roles, getRolesForCompany } from '@/data/roles'
import Link from 'next/link'
import CompanyLogo from '@/app/components/CompanyLogo'
import { rolePageContent } from '@/data/rolePageContent'

export default async function RolePage({ params }) {
  const resolvedParams = await params
  const company = companies[resolvedParams.slug]
  const role = roles[resolvedParams.role]

  // Handle not found
  if (!company || !role) {
    return <div>Page not found</div>
  }

  // Get role-specific content
  const content = rolePageContent[resolvedParams.slug]?.[resolvedParams.role]

  if (!content) {
    return <div>Content not available</div>
  }

  // Schema.org structured data
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        'name': company.name,
        'description': company.description
      },
      {
        '@type': 'JobPosting',
        'title': `${role.name} at ${company.name}`,
        'description': content.roleDescription,
        'hiringOrganization': {
          '@type': 'Organization',
          'name': company.name
        },
        'jobLocation': {
          '@type': 'Place',
          'address': {
            '@type': 'PostalAddress',
            'addressLocality': company.headquarters
          }
        }
      },
      {
        '@type': 'FAQPage',
        'mainEntity': content.behavioralQuestions.map((question) => ({
          '@type': 'Question',
          'name': question,
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': `This is a common behavioral interview question for ${role.name} positions at ${company.name}.`
          }
        }))
      }
    ]
  }

  // Get similar roles for internal linking
  const similarRoles = content.similarRoles || []

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
              <Link href={`/companies/${resolvedParams.slug}`} className="hover:text-[#1E3A8A] transition-colors">{company.name}</Link>
              {' > '}
              <span className="text-[#1E3A8A] font-semibold">{role.name}</span>
            </nav>
            <div className="flex justify-center mb-8">
              <CompanyLogo companyName={company.name} />
            </div>
            <h1 className="text-6xl md:text-7xl font-black font-display text-[#1E3A8A] mb-6 text-center leading-tight animate-fade-in-up">
              {role.name} at<br/>
              <span className="text-gradient">{company.name}</span>
            </h1>
            <p className="text-2xl md:text-3xl font-bold text-gray-700 text-center leading-relaxed animate-fade-in-up delay-100">
              Complete preparation guide for {role.name.toLowerCase()} interviews
            </p>
          </div>
        </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-16 pb-40">
        {/* About This Role */}
        <section className="mb-16">
          <h2 className="text-4xl md:text-5xl font-black font-display text-[#1E3A8A] mb-8">About This Role at {company.name}</h2>
          <div className="glass-card p-10 rounded-3xl border-2 border-[#1E3A8A]/10">
            <p className="text-gray-700 text-xl leading-relaxed mb-8">{content.roleDescription}</p>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-bold text-[#1E3A8A] text-lg mb-4 flex items-center">
                  <span className="text-2xl mr-2">💼</span>
                  What You'll Do
                </h3>
                <ul className="space-y-3">
                  {content.responsibilities.map((resp, index) => (
                    <li key={index} className="text-gray-700 flex items-start leading-relaxed">
                      <span className="text-[#1E3A8A] mr-3 font-bold">•</span>
                      {resp}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-[#1E3A8A] text-lg mb-4 flex items-center">
                  <span className="text-2xl mr-2">📈</span>
                  Growth Opportunities
                </h3>
                <ul className="space-y-3">
                  {content.growthOpportunities.map((opp, index) => (
                    <li key={index} className="text-gray-700 flex items-start leading-relaxed">
                      <span className="text-green-600 mr-3 font-bold">•</span>
                      {opp}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Interview Process */}
        <section className="mb-16">
          <h2 className="text-4xl md:text-5xl font-black font-display text-[#1E3A8A] mb-10">Interview Process for {role.name}</h2>
          <ol className="space-y-5">
            {content.interviewProcess.map((stage, index) => (
              <li key={index} className="group hover-lift glass-card p-8 rounded-3xl border-2 border-[#1E3A8A]/10 flex items-start">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${
                  index % 3 === 0 ? 'from-[#1E3A8A] to-blue-600' :
                  index % 3 === 1 ? 'from-[#FF6B6B] to-red-600' :
                  'from-[#F59E0B] to-yellow-600'
                } flex items-center justify-center text-2xl font-black text-white mr-6 flex-shrink-0`}>
                  {stage.step}
                </div>
                <div className="flex-1">
                  <strong className="text-2xl text-[#1E3A8A] font-bold block mb-3">{stage.title}</strong>
                  <p className="text-gray-700 leading-relaxed text-lg mb-2">{stage.description}</p>
                  {stage.duration && (
                    <p className="text-sm text-[#FF6B6B] font-semibold">⏱️ Duration: {stage.duration}</p>
                  )}
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* Technical Questions */}
        {content.technicalQuestions && content.technicalQuestions.length > 0 && (
          <section className="mb-16">
            <h2 className="text-4xl md:text-5xl font-black font-display text-[#1E3A8A] mb-10">Technical Questions</h2>
            <div className="glass-card rounded-3xl border-2 border-[#1E3A8A]/10 overflow-hidden">
              <ul className="divide-y divide-gray-200">
                {content.technicalQuestions.map((question, index) => (
                  <li key={index} className="p-6 hover:bg-[#1E3A8A]/5 transition-colors">
                    <div className="flex items-start">
                      <span className="inline-flex items-center justify-center w-10 h-10 rounded-2xl bg-[#1E3A8A] text-white font-bold mr-5 flex-shrink-0 text-lg">
                        {index + 1}
                      </span>
                      <div className="flex-1">
                        <p className="text-gray-800 text-lg leading-relaxed font-medium">{question}</p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}

        {/* Behavioral Questions */}
        <section className="mb-16">
          <h2 className="text-4xl md:text-5xl font-black font-display text-[#1E3A8A] mb-10">Behavioral Questions</h2>
          <ul className="space-y-4">
            {content.behavioralQuestions.map((question, index) => (
              <li key={index} className="group hover-lift glass-card border-l-4 border-[#FF6B6B] pl-8 pr-8 py-6 rounded-r-3xl transition-all">
                <span className="text-gray-800 text-lg leading-relaxed font-medium">{question}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* What They Look For */}
        <section className="mb-16">
          <h2 className="text-4xl md:text-5xl font-black font-display text-[#1E3A8A] mb-10">What {company.name} Looks For in {role.name}s</h2>
          <div className="glass-card p-10 rounded-3xl border-2 border-[#1E3A8A]/10">
            <div className="grid md:grid-cols-2 gap-6">
              {content.whatTheyLookFor.map((trait, index) => (
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
          <h2 className="text-4xl md:text-5xl font-black font-display text-[#1E3A8A] mb-10">Interview Tips for {role.name}</h2>
          <div className="glass-card p-10 rounded-3xl border-2 border-[#1E3A8A]/10">
            <ul className="space-y-5">
              {content.interviewTips.map((tip, index) => (
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

        {/* Day in the Life */}
        <section className="mb-16">
          <h2 className="text-4xl md:text-5xl font-black font-display text-[#1E3A8A] mb-10">A Day in the Life</h2>
          <div className="glass-card p-10 rounded-3xl border-2 border-[#1E3A8A]/10 bg-gradient-to-br from-white to-blue-50/30">
            <p className="text-gray-700 text-xl leading-relaxed mb-8">{content.dayInLife.overview}</p>
            <div className="space-y-5">
              {content.dayInLife.schedule.map((item, index) => (
                <div key={index} className="flex items-start">
                  <div className="w-28 flex-shrink-0">
                    <span className="inline-block px-4 py-2 bg-[#1E3A8A] text-white text-sm font-bold rounded-2xl">
                      {item.time}
                    </span>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-[#1E3A8A] text-lg mb-2">{item.activity}</h4>
                    <p className="text-gray-700 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Similar Roles */}
        {similarRoles.length > 0 && (
          <section className="mb-16">
            <h2 className="text-4xl md:text-5xl font-black font-display text-[#1E3A8A] mb-10">Similar Roles at Other Companies</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {similarRoles.map((item, index) => (
                <Link
                  key={index}
                  href={`/companies/${item.companySlug}/${resolvedParams.role}`}
                  className="group hover-lift glass-card p-8 rounded-3xl text-center transition-all border-2 border-[#1E3A8A]/10 hover:border-[#1E3A8A]/30"
                >
                  <div className="font-bold text-[#1E3A8A] text-xl mb-2 group-hover:text-[#FF6B6B] transition-colors">
                    {role.name} at {item.companyName}
                  </div>
                  <div className="text-sm text-[#FF6B6B] font-semibold bg-[#FF6B6B]/10 px-3 py-1 rounded-full inline-block">{item.industry}</div>
                </Link>
              ))}
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
                Ready to Ace Your {role.name} Interview at {company.name}?
              </h3>
              <p className="text-sm text-blue-100 leading-relaxed font-medium">
                Get personalized prep with role-specific questions and expert guidance
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

export async function generateMetadata({ params }) {
  const resolvedParams = await params
  const company = companies[resolvedParams.slug]
  const role = roles[resolvedParams.role]

  if (!company || !role) {
    return { title: 'Page Not Found' }
  }

  return {
    title: `${role.name} Interview at ${company.name} | Preparation Guide`,
    description: `Ace your ${role.name} interview at ${company.name} with our complete prep guide. Real questions, expert tips, and proven strategies for success.`,
    keywords: `${role.name}, ${company.name} interview, ${company.name} ${role.name}, ${role.name} interview questions, ${company.name} careers`,
    openGraph: {
      title: `${role.name} Interview at ${company.name} | Preparation Guide`,
      description: `Complete preparation guide for ${role.name} interviews at ${company.name}. Expert tips and real interview questions.`,
      type: 'website',
    }
  }
}

export function generateStaticParams() {
  // Tech companies expansion - FAANG+ and next tier
  const techCompanies = ['google', 'amazon', 'meta', 'apple', 'microsoft', 'netflix', 'uber', 'airbnb', 'stripe', 'salesforce', 'doordash', 'lyft', 'spotify', 'oracle', 'adobe', 'atlassian', 'snowflake', 'databricks', 'coinbase', 'block', 'shopify']

  // Finance and consulting companies
  const financeConsultingCompanies = ['goldman-sachs', 'jpmorgan', 'mckinsey']

  const allCompanies = [...techCompanies, ...financeConsultingCompanies]

  const params = []

  allCompanies.forEach(companySlug => {
    const company = companies[companySlug]
    if (!company) return

    // Get relevant roles for this company's industry
    const relevantRoles = getRolesForCompany(company.industry)

    relevantRoles.forEach(roleSlug => {
      params.push({
        slug: companySlug,
        role: roleSlug
      })
    })
  })

  return params
}
