import { companies } from '@/data/companies'

// Function to create URL-safe slugs
function encodeUrlSafe(text) {
  return encodeURIComponent(text.toLowerCase().replace(/\s+/g, '-'))
}

export default function sitemap() {
  const baseUrl = 'https://cleverprep.com'
  
  // Static pages
  const routes = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${baseUrl}/companies`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
  ]
  
  // Get unique industries
  const industries = [...new Set(Object.values(companies).map(c => c.industry))]
  
  // Add industry pages with proper URL encoding
  const industryRoutes = industries.map((industry) => ({
    url: `${baseUrl}/companies/${encodeUrlSafe(industry)}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.8,
  }))
  
  // Add all company pages with proper URL encoding
  const companyRoutes = Object.keys(companies).map((slug) => ({
    url: `${baseUrl}/companies/${encodeURIComponent(slug)}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.7,
  }))
  
  return [...routes, ...industryRoutes, ...companyRoutes]
}
