export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/_next/',
          '/*.json$',
          '/*?*', // Block URLs with query parameters
          '/*_buildManifest.js',
          '/*_middlewareManifest.js',
          '/*_ssgManifest.js',
          '/static/chunks/',
        ],
      },
    ],
    sitemap: 'https://cleverprep.com/sitemap.xml',
  }
}
