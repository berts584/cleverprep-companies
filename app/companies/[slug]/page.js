import { companies } from '@/data/companies'
import Link from 'next/link'

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
    <div className="min-h-screen bg-white">
      {/* Schema.org structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Header with Gradient */}
      <div className="bg-gradient-to-br from-blue-600 to-blue-700 text-white py-16 shadow-lg">
        <div className="max-w-4xl mx-auto px-4">
          <nav className="text-sm mb-6 opacity-90">
            <Link href="/" className="hover:underline">Home</Link>
            {' > '}
            <Link href="/companies" className="hover:underline">Companies</Link>
            {' > '}
            <span>{company.name}</span>
          </nav>
          <h1 className="text-5xl font-bold mb-6">
            {company.name} Interview Prep
          </h1>
          <p className="text-xl leading-relaxed opacity-95">
            {company.tagline}
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-16 pb-40">
        {/* About Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">About {company.name}</h2>
          <div className="bg-gray-50 p-8 rounded-xl border border-gray-200">
            <p className="text-gray-700 mb-6 text-lg leading-relaxed">{company.description}</p>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <span className="font-semibold text-gray-600">Industry:</span>
                <span className="ml-2 text-gray-800">{company.industry}</span>
              </div>
              <div>
                <span className="font-semibold text-gray-600">Headquarters:</span>
                <span className="ml-2 text-gray-800">{company.headquarters}</span>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Signals Section */}
        <section className="mb-16 bg-white">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">Why Candidates Choose Our Prep</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gray-50 p-6 rounded-xl text-center border border-gray-200">
              <div className="flex justify-center mb-4">
                <svg className="w-12 h-12 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">2,400+ Success Stories</h3>
              <p className="text-gray-600">Candidates who landed their dream role with our prep</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl text-center border border-gray-200">
              <div className="flex justify-center mb-4">
                <svg className="w-12 h-12 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">Industry Experts</h3>
              <p className="text-gray-600">Prep materials created by former hiring managers</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl text-center border border-gray-200">
              <div className="flex justify-center mb-4">
                <svg className="w-12 h-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">10-Minute Setup</h3>
              <p className="text-gray-600">Get instant access to your personalized prep package</p>
            </div>
          </div>
        </section>

        {/* Interview Process */}
        <section className="mb-16 bg-gray-50 -mx-4 px-4 py-12 sm:mx-0 sm:px-0 sm:py-0 sm:bg-transparent">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Interview Process</h2>
          <ol className="space-y-5">
            {company.process.map((item) => (
              <li key={item.step} className="flex items-start bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <span className="font-bold text-blue-600 text-2xl mr-5 flex-shrink-0">{item.step}.</span>
                <div>
                  <strong className="text-xl text-gray-900 block mb-2">{item.title}</strong>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* What They Look For */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">What {company.name} Looks For</h2>
          <div className="grid md:grid-cols-2 gap-5 bg-white">
            {company.whatTheyLookFor.map((trait, index) => (
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
        <section className="mb-16 bg-gray-50 -mx-4 px-4 py-12 sm:mx-0 sm:px-0 sm:py-0 sm:bg-transparent">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Interview Tips & Tricks</h2>
          <ul className="space-y-4 bg-white">
            {company.interviewTips.map((tip, index) => (
              <li key={index} className="flex items-start p-4 rounded-lg hover:bg-gray-50 transition-colors">
                <svg className="w-7 h-7 text-blue-500 mr-4 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
                <span className="text-gray-700 text-lg leading-relaxed">{tip}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Common Questions */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Common Interview Questions</h2>
          <ul className="space-y-4">
            {company.questions.map((question, index) => (
              <li key={index} className="border-l-[3px] border-blue-500 pl-6 py-4 bg-blue-50 rounded-r-lg hover:bg-blue-100 transition-colors">
                <span className="text-gray-800 text-lg leading-relaxed">{question}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Related Companies */}
        {company.relatedCompanies && company.relatedCompanies.length > 0 && (
          <section className="mb-16 bg-gray-50 -mx-4 px-4 py-12 sm:mx-0 sm:px-0 sm:py-0 sm:bg-transparent">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Similar Companies</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {company.relatedCompanies.map((relatedSlug) => {
                const relatedCompany = companies[relatedSlug]
                if (!relatedCompany) return null
                return (
                  <Link
                    key={relatedSlug}
                    href={`/companies/${relatedSlug}`}
                    className="bg-white hover:bg-gray-50 p-5 rounded-xl text-center transition-all border border-gray-200 hover:shadow-md hover:border-blue-300"
                  >
                    <div className="font-semibold text-gray-900">{relatedCompany.name}</div>
                    <div className="text-xs text-gray-500 mt-2">{relatedCompany.industry}</div>
                  </Link>
                )
              })}
            </div>
          </section>
        )}

      </div>

      {/* Enhanced Sticky CTA Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-2xl border-t-4 border-blue-800 z-50">
        <div className="max-w-4xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <h3 className="text-xl font-bold mb-1">
              Ready to Ace Your {company.name} Interview?
            </h3>
            <p className="text-sm text-blue-100 leading-relaxed">
              Join thousands of candidates who landed their dream job with our proven prep system
            </p>
          </div>
          <a
            href={`https://cleverprep.com/purchase?company=${resolvedParams.slug}`}
            className="inline-block bg-white text-blue-600 px-10 py-4 rounded-lg text-lg font-bold hover:bg-blue-50 hover:shadow-lg transition-all whitespace-nowrap transform hover:scale-105"
          >
            Get Personalized Interview Prep
          </a>
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
