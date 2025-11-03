import { companies } from '@/data/companies'

// Add 'async' here
export default async function CompanyPage({ params }) {
  // Await params
  const resolvedParams = await params
  const company = companies[resolvedParams.slug]
  
  // Handle company not found
  if (!company) {
    return <div>Company not found</div>
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-blue-600 text-white py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">
            {company.name} Interview Prep
          </h1>
          <p className="text-xl">
            {company.tagline}
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Interview Process */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Interview Process</h2>
          <ol className="space-y-3">
            {company.process.map((item) => (
              <li key={item.step} className="flex items-start">
                <span className="font-bold text-blue-600 mr-3">{item.step}.</span>
                <div>
                  <strong>{item.title}</strong>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* Common Questions */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Common Interview Questions</h2>
          <ul className="space-y-3">
            {company.questions.map((question, index) => (
              <li key={index} className="border-l-4 border-blue-500 pl-4 py-2 bg-blue-50">
                {question}
              </li>
            ))}
          </ul>
        </section>

        {/* CTA */}
        <section className="bg-blue-50 p-8 rounded-lg text-center">
          <h2 className="text-2xl font-bold mb-4">
            Ready to Ace Your {company.name} Interview?
          </h2>
          <p className="text-gray-700 mb-6">
            Get a personalized prep package with company-specific questions, 
            expert coaching, and proven strategies.
          </p>
          <a 
            href={`https://cleverprep.com/purchase?company=${resolvedParams.slug}`}
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700"
          >
            Get Your Prep Package - $59
          </a>
        </section>
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
    title: `${company.name} Interview Prep | CleverPrep`,
    description: `Ace your ${company.name} interview with our AI-powered prep package. Get personalized questions and expert coaching in 10 minutes.`,
  }
}

export function generateStaticParams() {
  return Object.keys(companies).map((slug) => ({
    slug: slug,
  }))
}