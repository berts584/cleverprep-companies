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
        },
        'baseSalary': {
          '@type': 'MonetaryAmount',
          'currency': role.salaryRange.currency,
          'value': {
            '@type': 'QuantitativeValue',
            'minValue': content.salary.min,
            'maxValue': content.salary.max,
            'unitText': 'YEAR'
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
    <div className="min-h-screen bg-white">
      {/* Schema.org structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Top Navigation Bar */}
      <nav className="bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <a href="https://cleverprep.com" className="text-xl font-bold text-blue-600 hover:text-blue-700 transition-colors">
              CleverPrep
            </a>
            <div className="flex gap-6 text-sm">
              <a href="https://cleverprep.com" className="text-gray-600 hover:text-gray-900 transition-colors">
                How It Works
              </a>
              <a href="https://cleverprep.com" className="text-gray-600 hover:text-gray-900 transition-colors">
                Pricing
              </a>
              <Link href="/companies" className="text-gray-600 hover:text-gray-900 transition-colors">
                Companies
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Header with Gradient */}
      <div className="bg-gradient-to-br from-blue-600 to-blue-700 text-white py-16 shadow-lg">
        <div className="max-w-4xl mx-auto px-4">
          <nav className="text-sm mb-6 opacity-90">
            <a href="https://cleverprep.com" className="hover:underline">CleverPrep</a>
            {' > '}
            <Link href="/companies" className="hover:underline">Companies</Link>
            {' > '}
            <Link href={`/companies/${resolvedParams.slug}`} className="hover:underline">{company.name}</Link>
            {' > '}
            <span>{role.name}</span>
          </nav>
          <div className="flex justify-center mb-6">
            <CompanyLogo companyName={company.name} />
          </div>
          <h1 className="text-5xl font-bold mb-4 text-center">
            {role.name} Interview at {company.name}
          </h1>
          <p className="text-xl leading-relaxed opacity-95 text-center">
            Complete preparation guide for {role.name.toLowerCase()} interviews at {company.name}
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-16 pb-40">
        {/* About This Role */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">About This Role at {company.name}</h2>
          <div className="bg-gray-50 p-8 rounded-xl border border-gray-200">
            <p className="text-gray-700 text-lg leading-relaxed mb-6">{content.roleDescription}</p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">What You'll Do:</h3>
                <ul className="space-y-2">
                  {content.responsibilities.map((resp, index) => (
                    <li key={index} className="text-gray-700 flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      {resp}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Growth Opportunities:</h3>
                <ul className="space-y-2">
                  {content.growthOpportunities.map((opp, index) => (
                    <li key={index} className="text-gray-700 flex items-start">
                      <span className="text-green-600 mr-2">•</span>
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
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Interview Process for {role.name}</h2>
          <ol className="space-y-5">
            {content.interviewProcess.map((stage, index) => (
              <li key={index} className="flex items-start bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <span className="font-bold text-blue-600 text-2xl mr-5 flex-shrink-0">{stage.step}.</span>
                <div className="flex-1">
                  <strong className="text-xl text-gray-900 block mb-2">{stage.title}</strong>
                  <p className="text-gray-600 leading-relaxed mb-3">{stage.description}</p>
                  {stage.duration && (
                    <p className="text-sm text-gray-500">Duration: {stage.duration}</p>
                  )}
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* Technical Questions */}
        {content.technicalQuestions && content.technicalQuestions.length > 0 && (
          <section className="mb-16 bg-gray-50 -mx-4 px-4 py-12 sm:mx-0 sm:px-0 sm:py-0 sm:bg-transparent">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Technical Questions</h2>
            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
              <ul className="divide-y divide-gray-200">
                {content.technicalQuestions.map((question, index) => (
                  <li key={index} className="p-6 hover:bg-gray-50 transition-colors">
                    <div className="flex items-start">
                      <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-600 font-semibold mr-4 flex-shrink-0">
                        {index + 1}
                      </span>
                      <div className="flex-1">
                        <p className="text-gray-800 text-lg leading-relaxed">{question}</p>
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
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Behavioral Questions</h2>
          <ul className="space-y-4">
            {content.behavioralQuestions.map((question, index) => (
              <li key={index} className="border-l-[3px] border-green-500 pl-6 py-4 bg-green-50 rounded-r-lg hover:bg-green-100 transition-colors">
                <span className="text-gray-800 text-lg leading-relaxed">{question}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* What They Look For */}
        <section className="mb-16 bg-gray-50 -mx-4 px-4 py-12 sm:mx-0 sm:px-0 sm:py-0 sm:bg-transparent">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">What {company.name} Looks For in {role.name}s</h2>
          <div className="grid md:grid-cols-2 gap-5 bg-white">
            {content.whatTheyLookFor.map((trait, index) => (
              <div key={index} className="flex items-start p-4 rounded-lg hover:bg-gray-50 transition-colors">
                <svg className="w-7 h-7 text-green-500 mr-4 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700 text-lg leading-relaxed">{trait}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Interview Tips */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Interview Tips for {role.name}</h2>
          <ul className="space-y-4">
            {content.interviewTips.map((tip, index) => (
              <li key={index} className="flex items-start p-4 bg-blue-50 rounded-lg">
                <svg className="w-7 h-7 text-blue-500 mr-4 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
                <span className="text-gray-700 text-lg leading-relaxed">{tip}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Salary & Compensation */}
        <section className="mb-16 bg-gray-50 -mx-4 px-4 py-12 sm:mx-0 sm:px-0 sm:py-0 sm:bg-transparent">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Salary & Compensation</h2>
          <div className="bg-white p-8 rounded-xl border border-gray-200">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
                  <svg className="w-6 h-6 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Base Salary
                </h3>
                <p className="text-3xl font-bold text-gray-900 mb-2">
                  ${content.salary.min.toLocaleString()} - ${content.salary.max.toLocaleString()}
                </p>
                <p className="text-gray-600">Annual base salary range</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-4">Additional Compensation:</h3>
                <ul className="space-y-3">
                  {content.compensation.map((item, index) => (
                    <li key={index} className="flex items-start text-gray-700">
                      <svg className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Day in the Life */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">A Day in the Life</h2>
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-xl border border-blue-200">
            <p className="text-gray-700 text-lg leading-relaxed mb-6">{content.dayInLife.overview}</p>
            <div className="space-y-4">
              {content.dayInLife.schedule.map((item, index) => (
                <div key={index} className="flex items-start">
                  <div className="w-24 flex-shrink-0">
                    <span className="inline-block px-3 py-1 bg-blue-600 text-white text-sm font-semibold rounded-lg">
                      {item.time}
                    </span>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900 mb-1">{item.activity}</h4>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Similar Roles */}
        {similarRoles.length > 0 && (
          <section className="mb-16 bg-gray-50 -mx-4 px-4 py-12 sm:mx-0 sm:px-0 sm:py-0 sm:bg-transparent">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Similar Roles at Other Companies</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {similarRoles.map((item, index) => (
                <Link
                  key={index}
                  href={`/companies/${item.companySlug}/${resolvedParams.role}`}
                  className="bg-white hover:bg-gray-50 p-6 rounded-xl text-center transition-all border border-gray-200 hover:shadow-md hover:border-blue-300 group"
                >
                  <div className="font-semibold text-gray-900 text-lg mb-1 group-hover:text-blue-600 transition-colors">
                    {role.name} at {item.companyName}
                  </div>
                  <div className="text-sm text-gray-500">{item.industry}</div>
                </Link>
              ))}
            </div>
          </section>
        )}

      </div>

      {/* Footer */}
      <footer className="bg-gray-50 py-8 border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-gray-700 font-semibold mb-2">A CleverPrep Interview Guide</p>
          <p className="text-gray-600 text-sm mb-4">© 2024 CleverPrep - Helping candidates land their dream jobs</p>
          <div className="flex justify-center gap-4 text-sm text-gray-600">
            <a href="https://cleverprep.com/privacy" className="hover:text-gray-900 transition-colors">Privacy</a>
            <span>|</span>
            <a href="https://cleverprep.com/terms" className="hover:text-gray-900 transition-colors">Terms</a>
            <span>|</span>
            <a href="https://cleverprep.com/contact" className="hover:text-gray-900 transition-colors">Contact</a>
          </div>
        </div>
      </footer>

      {/* Sticky CTA Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-2xl border-t-4 border-blue-800 z-50">
        <div className="max-w-4xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <h3 className="text-xl font-bold mb-1">
              Ready to Ace Your {role.name} Interview at {company.name}?
            </h3>
            <p className="text-sm text-blue-100 leading-relaxed">
              Get personalized prep with role-specific questions and expert guidance
            </p>
          </div>
          <a
            href="https://cleverprep.com"
            className="inline-block bg-white text-blue-600 px-10 py-4 rounded-lg text-lg font-bold hover:bg-blue-50 hover:shadow-lg transition-all whitespace-nowrap transform hover:scale-105"
          >
            Get Personalized Interview Prep
          </a>
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
  // Tech companies expansion - focus on top tech companies first
  const techCompanies = ['google', 'amazon', 'meta', 'apple', 'microsoft', 'netflix']

  // Finance and consulting companies
  const financeConsultingCompanies = ['goldman-sachs', 'mckinsey']

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
