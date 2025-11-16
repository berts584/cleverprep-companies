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
            <Link href="/#faq" className="text-gray-700 hover:text-[#1E3A8A] font-medium transition-colors text-lg">
              FAQ
            </Link>
          </div>
        </nav>

        {/* Header */}
        <div className="py-12 px-6">
          <div className="max-w-6xl mx-auto">
            <nav className="text-sm mb-6 text-gray-600">
              <Link href="/" className="hover:text-[#1E3A8A] transition-colors">Home</Link>
              {' > '}
              <span className="text-[#1E3A8A] font-semibold">Companies</span>
            </nav>
            <h1 className="text-6xl md:text-7xl font-black font-display text-[#1E3A8A] mb-6 animate-fade-in-up">
              Interview Prep for<br/>
              <span className="text-gradient">Top Companies</span>
            </h1>
            <p className="text-2xl md:text-3xl font-bold text-gray-700 animate-fade-in-up delay-100">
              Browse {companiesArray.length} companies across industries
            </p>
          </div>
        </div>

        {/* Search and Filter */}
        <div className="bg-white/50 backdrop-blur-sm py-8 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4">
              {/* Search */}
              <div className="flex-1">
                <label htmlFor="search" className="block text-sm font-bold text-[#1E3A8A] mb-2">
                  Search Companies
                </label>
                <input
                  id="search"
                  type="text"
                  placeholder="Search by company name..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-5 py-3 border-2 border-[#1E3A8A]/20 rounded-2xl focus:ring-2 focus:ring-[#1E3A8A] focus:border-[#1E3A8A] transition-all bg-white shadow-sm"
                />
              </div>

              {/* Industry Filter */}
              <div className="md:w-64">
                <label htmlFor="industry" className="block text-sm font-bold text-[#1E3A8A] mb-2">
                  Filter by Industry
                </label>
                <select
                  id="industry"
                  value={selectedIndustry}
                  onChange={(e) => setSelectedIndustry(e.target.value)}
                  className="w-full px-5 py-3 border-2 border-[#1E3A8A]/20 rounded-2xl focus:ring-2 focus:ring-[#1E3A8A] focus:border-[#1E3A8A] transition-all bg-white shadow-sm"
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
            <div className="mt-4 text-sm font-semibold text-gray-600">
              Showing {filteredCompanies.length} {filteredCompanies.length === 1 ? 'company' : 'companies'}
            </div>
          </div>
        </div>

        {/* Companies Grid */}
        <div className="max-w-6xl mx-auto px-6 py-12">
          {selectedIndustry === 'all' ? (
            // Group by industry when showing all
            Object.entries(companiesByIndustry).sort().map(([industry, companies]) => (
              <div key={industry} className="mb-16">
                <h2 className="text-4xl font-black font-display text-[#1E3A8A] mb-8 pb-3 border-b-4 border-[#FF6B6B]">
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
            <div className="text-center py-16">
              <svg className="mx-auto h-16 w-16 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="mt-4 text-xl font-bold text-gray-900">No companies found</h3>
              <p className="mt-2 text-lg text-gray-500">Try adjusting your search or filter.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

function CompanyCard({ company }) {
  return (
    <Link
      href={`/companies/${company.slug}`}
      className="group hover-lift glass-card rounded-3xl p-8 border-2 border-[#1E3A8A]/10 relative overflow-hidden transition-all duration-300 hover:border-[#1E3A8A]/30"
    >
      <div className="flex items-start justify-between mb-4">
        <h3 className="text-2xl font-bold text-[#1E3A8A]">{company.name}</h3>
        <span className="text-xs bg-[#FF6B6B]/10 text-[#FF6B6B] px-3 py-1 rounded-full font-semibold">
          {company.industry}
        </span>
      </div>

      {company.headquarters && (
        <p className="text-sm text-gray-600 mb-4 font-medium">
          <svg className="inline w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          {company.headquarters}
        </p>
      )}

      {company.description && (
        <p className="text-base text-gray-700 line-clamp-3 mb-6 leading-relaxed">
          {company.description}
        </p>
      )}

      <div className="flex items-center text-[#1E3A8A] text-base font-bold group-hover:gap-2 transition-all">
        View Interview Prep
        <svg className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </Link>
  )
}
