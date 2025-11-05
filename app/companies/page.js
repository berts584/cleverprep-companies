'use client'

import { companies } from '@/data/companies'
import Link from 'next/link'
import { useState, useMemo } from 'react'

export default function CompaniesDirectory() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedIndustry, setSelectedIndustry] = useState('all')

  // Get all companies as an array
  const companiesArray = Object.entries(companies).map(([slug, company]) => ({
    slug,
    ...company
  }))

  // Get unique industries
  const industries = useMemo(() => {
    const industrySet = new Set(companiesArray.map(c => c.industry))
    return ['all', ...Array.from(industrySet).sort()]
  }, [companiesArray])

  // Filter companies
  const filteredCompanies = useMemo(() => {
    return companiesArray.filter(company => {
      const matchesSearch = company.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           company.description?.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesIndustry = selectedIndustry === 'all' || company.industry === selectedIndustry
      return matchesSearch && matchesIndustry
    })
  }, [companiesArray, searchTerm, selectedIndustry])

  // Group companies by industry for display
  const companiesByIndustry = useMemo(() => {
    const grouped = {}
    filteredCompanies.forEach(company => {
      if (!grouped[company.industry]) {
        grouped[company.industry] = []
      }
      grouped[company.industry].push(company)
    })
    return grouped
  }, [filteredCompanies])

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-blue-600 text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <nav className="text-sm mb-4 opacity-90">
            <Link href="/" className="hover:underline">Home</Link>
            {' > '}
            <span>Companies</span>
          </nav>
          <h1 className="text-4xl font-bold mb-4">
            Interview Prep for Top Companies
          </h1>
          <p className="text-xl">
            Browse {companiesArray.length} companies across industries
          </p>
        </div>
      </div>

      {/* Search and Filter */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search */}
            <div className="flex-1">
              <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-2">
                Search Companies
              </label>
              <input
                id="search"
                type="text"
                placeholder="Search by company name..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Industry Filter */}
            <div className="md:w-64">
              <label htmlFor="industry" className="block text-sm font-medium text-gray-700 mb-2">
                Filter by Industry
              </label>
              <select
                id="industry"
                value={selectedIndustry}
                onChange={(e) => setSelectedIndustry(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {industries.map(industry => (
                  <option key={industry} value={industry}>
                    {industry === 'all' ? 'All Industries' : industry}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Results count */}
          <div className="mt-4 text-sm text-gray-600">
            Showing {filteredCompanies.length} {filteredCompanies.length === 1 ? 'company' : 'companies'}
          </div>
        </div>
      </div>

      {/* Companies Grid */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        {selectedIndustry === 'all' ? (
          // Group by industry when showing all
          Object.entries(companiesByIndustry).sort().map(([industry, companies]) => (
            <div key={industry} className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b-2 border-blue-500 pb-2">
                {industry}
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {companies.map(company => (
                  <CompanyCard key={company.slug} company={company} />
                ))}
              </div>
            </div>
          ))
        ) : (
          // Simple grid when filtered
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCompanies.map(company => (
              <CompanyCard key={company.slug} company={company} />
            ))}
          </div>
        )}

        {/* No results */}
        {filteredCompanies.length === 0 && (
          <div className="text-center py-12">
            <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 className="mt-2 text-sm font-medium text-gray-900">No companies found</h3>
            <p className="mt-1 text-sm text-gray-500">Try adjusting your search or filter.</p>
          </div>
        )}
      </div>
    </div>
  )
}

function CompanyCard({ company }) {
  return (
    <Link
      href={`/companies/${company.slug}`}
      className="block bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow hover:border-blue-300"
    >
      <div className="flex items-start justify-between mb-3">
        <h3 className="text-xl font-bold text-gray-900">{company.name}</h3>
        <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
          {company.industry}
        </span>
      </div>

      {company.headquarters && (
        <p className="text-sm text-gray-500 mb-3">
          <svg className="inline w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          {company.headquarters}
        </p>
      )}

      {company.description && (
        <p className="text-sm text-gray-600 line-clamp-3 mb-4">
          {company.description}
        </p>
      )}

      <div className="flex items-center text-blue-600 text-sm font-semibold">
        View Interview Prep
        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </Link>
  )
}
