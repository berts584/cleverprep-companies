import { companies } from '@/data/companies'
import { roles } from '@/data/roles'

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
  
  // Add industry pages
  const industryRoutes = industries.map((industry) => ({
    url: `${baseUrl}/companies/${encodeUrlSafe(industry)}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.8,
  }))
  
  // Add all company pages
  const companyRoutes = Object.keys(companies).map((slug) => ({
    url: `${baseUrl}/companies/${encodeURIComponent(slug)}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.7,
  }))
  
  // Add all role pages (company × role combinations)
  const roleRoutes = []
  const roleKeys = Object.keys(roles)
  
  Object.keys(companies).forEach((companySlug) => {
    roleKeys.forEach((roleSlug) => {
      roleRoutes.push({
        url: `${baseUrl}/companies/${encodeURIComponent(companySlug)}/${encodeURIComponent(roleSlug)}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.8, // Higher priority - these are your money pages!
      })
    })
  })
  
  return [...routes, ...industryRoutes, ...companyRoutes, ...roleRoutes]
}
