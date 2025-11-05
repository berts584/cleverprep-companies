import { companies } from '@/data/companies'
import Link from 'next/link'

export default function Home() {
  // Get featured companies (e.g., first 6 companies)
  const featuredSlugs = ['google', 'apple', 'microsoft', 'amazon', 'meta', 'goldman-sachs']
  const featuredCompanies = featuredSlugs
    .map(slug => ({ slug, ...companies[slug] }))
    .filter(c => c.name)

  // Get all companies count
  const totalCompanies = Object.keys(companies).length

  // Get unique industries
  const industries = [...new Set(Object.values(companies).map(c => c.industry))]

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            CleverPrep Companies
          </h1>
          <p className="text-2xl text-gray-600 mb-8">
            Interview prep for top companies
          </p>
          <p className="text-lg text-gray-500 mb-10">
            Get personalized interview preparation for {totalCompanies}+ top companies across {industries.length} industries
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/companies"
              className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 text-lg font-semibold transition-colors"
            >
              Browse All Companies
            </Link>
            <Link
              href="/companies/google"
              className="inline-block bg-white text-blue-600 border-2 border-blue-600 px-8 py-4 rounded-lg hover:bg-blue-50 text-lg font-semibold transition-colors"
            >
              See Example: Google
            </Link>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="bg-white p-6 rounded-lg shadow-sm text-center border border-gray-200">
            <div className="text-4xl font-bold text-blue-600 mb-2">{totalCompanies}+</div>
            <div className="text-gray-600">Companies</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm text-center border border-gray-200">
            <div className="text-4xl font-bold text-blue-600 mb-2">{industries.length}</div>
            <div className="text-gray-600">Industries</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm text-center border border-gray-200">
            <div className="text-4xl font-bold text-blue-600 mb-2">$59</div>
            <div className="text-gray-600">Per Company Prep</div>
          </div>
        </div>

        {/* Featured Companies */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Featured Companies
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredCompanies.map(company => (
              <Link
                key={company.slug}
                href={`/companies/${company.slug}`}
                className="block bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow hover:border-blue-300"
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-gray-900">{company.name}</h3>
                  <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                    {company.industry}
                  </span>
                </div>
                <p className="text-sm text-gray-500 mb-3">
                  {company.headquarters}
                </p>
                <p className="text-sm text-gray-600 line-clamp-2 mb-4">
                  {company.description}
                </p>
                <div className="flex items-center text-blue-600 text-sm font-semibold">
                  View Interview Prep
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Industries Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Browse by Industry
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {industries.sort().map(industry => {
              const companyCount = Object.values(companies).filter(c => c.industry === industry).length
              return (
                <Link
                  key={industry}
                  href="/companies"
                  className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow hover:border-blue-300 text-center"
                >
                  <div className="font-semibold text-gray-900 mb-1">{industry}</div>
                  <div className="text-sm text-gray-500">{companyCount} {companyCount === 1 ? 'company' : 'companies'}</div>
                </Link>
              )
            })}
          </div>
        </section>

        {/* What You Get Section */}
        <section className="bg-blue-50 rounded-lg p-8 border-2 border-blue-200">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            What You Get with Every Prep Package
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Interview Process</h3>
              <p className="text-sm text-gray-600">Detailed breakdown of every interview stage</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Common Questions</h3>
              <p className="text-sm text-gray-600">Curated list of frequently asked questions</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Expert Tips</h3>
              <p className="text-sm text-gray-600">Proven strategies and insider advice</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">What They Seek</h3>
              <p className="text-sm text-gray-600">Key traits and skills companies value</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
