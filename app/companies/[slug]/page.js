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

      {/* Header */}
      <div className="bg-blue-600 text-white py-12">
        <div className="max-w-4xl mx-auto px-4">
          <nav className="text-sm mb-4 opacity-90">
            <Link href="/" className="hover:underline">Home</Link>
            {' > '}
            <Link href="/companies" className="hover:underline">Companies</Link>
            {' > '}
            <span>{company.name}</span>
          </nav>
          <h1 className="text-4xl font-bold mb-4">
            {company.name} Interview Prep
          </h1>
          <p className="text-xl">
            {company.tagline}
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-12 pb-32">
        {/* About Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">About {company.name}</h2>
          <div className="bg-gray-50 p-6 rounded-lg">
            <p className="text-gray-700 mb-4">{company.description}</p>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <span className="font-semibold text-gray-600">Industry:</span>
                <span className="ml-2">{company.industry}</span>
              </div>
              <div>
                <span className="font-semibold text-gray-600">Headquarters:</span>
                <span className="ml-2">{company.headquarters}</span>
              </div>
            </div>
          </div>
        </section>

        {/* Interview Process */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Interview Process</h2>
          <ol className="space-y-4">
            {company.process.map((item) => (
              <li key={item.step} className="flex items-start bg-blue-50 p-4 rounded-lg">
                <span className="font-bold text-blue-600 text-xl mr-4">{item.step}.</span>
                <div>
                  <strong className="text-lg">{item.title}</strong>
                  <p className="text-gray-600 mt-1">{item.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* What They Look For */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">What {company.name} Looks For</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {company.whatTheyLookFor.map((trait, index) => (
              <div key={index} className="flex items-start">
                <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700">{trait}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Interview Tips */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Interview Tips & Tricks</h2>
          <ul className="space-y-3">
            {company.interviewTips.map((tip, index) => (
              <li key={index} className="flex items-start">
                <svg className="w-6 h-6 text-blue-500 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
                <span className="text-gray-700">{tip}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Common Questions */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Common Interview Questions</h2>
          <ul className="space-y-3">
            {company.questions.map((question, index) => (
              <li key={index} className="border-l-4 border-blue-500 pl-4 py-3 bg-blue-50">
                <span className="text-gray-700">{question}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Related Companies */}
        {company.relatedCompanies && company.relatedCompanies.length > 0 && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Similar Companies</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {company.relatedCompanies.map((relatedSlug) => {
                const relatedCompany = companies[relatedSlug]
                if (!relatedCompany) return null
                return (
                  <Link
                    key={relatedSlug}
                    href={`/companies/${relatedSlug}`}
                    className="bg-gray-50 hover:bg-gray-100 p-4 rounded-lg text-center transition-colors border border-gray-200"
                  >
                    <div className="font-semibold text-gray-800">{relatedCompany.name}</div>
                    <div className="text-xs text-gray-500 mt-1">{relatedCompany.industry}</div>
                  </Link>
                )
              })}
            </div>
          </section>
        )}

      </div>

      {/* Sticky CTA Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-blue-600 text-white shadow-lg border-t-4 border-blue-700 z-50">
        <div className="max-w-4xl mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <h3 className="text-lg font-bold">
              Ready to Ace Your {company.name} Interview?
            </h3>
            <p className="text-sm text-blue-100">
              Get company-specific questions, expert coaching, and proven strategies
            </p>
          </div>
          <a
            href={`https://cleverprep.com/purchase?company=${resolvedParams.slug}`}
            className="inline-block bg-white text-blue-600 px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-colors whitespace-nowrap"
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
