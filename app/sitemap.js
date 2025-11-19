import { companies } from '@/data/companies'
import { rolePageContent } from '@/data/rolePageContent'

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

  // Add ALL 151 company pages (all have content)
  const companyRoutes = Object.keys(companies).map((slug) => ({
    url: `${baseUrl}/companies/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.7,
  }))

  // Add role pages ONLY for pages that actually have content in rolePageContent
  const roleRoutes = []

  Object.keys(rolePageContent).forEach((companySlug) => {
    const companyRoles = rolePageContent[companySlug]

    Object.keys(companyRoles).forEach((roleSlug) => {
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
