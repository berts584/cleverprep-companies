import { companies } from '@/data/companies'
import { getRolesForCompany } from '@/data/roles'

// Function to create URL-safe slugs
function encodeUrlSafe(text) {
  return encodeURIComponent(text.toLowerCase().replace(/\s+/g, '-'))
}

export default function sitemap() {
  const baseUrl = 'https://cleverprep.com'
  
  // ONLY companies that have role content generated (23 total)
  const companiesWithRoleContent = [
    // Priority 1: FAANG + Top Tech
    'google', 'amazon', 'microsoft', 'meta', 'apple',
    
    // Priority 2: Finance
    'goldman-sachs', 'jpmorgan', 'morgan-stanley',
    
    // Priority 3: Tech Companies
    'uber', 'airbnb', 'stripe', 'salesforce', 'doordash',
    'lyft', 'spotify', 'oracle', 'adobe',
    
    // Priority 4: Consulting
    'mckinsey', 'bcg', 'bain',
    
    // Priority 5: Tech Scale-ups
    'atlassian', 'snowflake', 'databricks', 'coinbase', 'block', 'shopify'
  ]
  
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
  
  // Add ALL 151 company pages (all have content)
  const companyRoutes = Object.keys(companies).map((slug) => ({
    url: `${baseUrl}/companies/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.7,
  }))

  // Add role pages ONLY for companies with generated content
  const roleRoutes = []

  companiesWithRoleContent.forEach((companySlug) => {
    const company = companies[companySlug]
    if (!company) return // Skip if company doesn't exist

    // Get relevant roles for this company's industry
    const relevantRoles = getRolesForCompany(company.industry)

    relevantRoles.forEach((roleSlug) => {
      roleRoutes.push({
        url: `${baseUrl}/companies/${companySlug}/${roleSlug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.8,
      })
    })
  })

  return [...routes, ...companyRoutes, ...roleRoutes]
}
