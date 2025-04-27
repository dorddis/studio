import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://voterdatainsights.com'
  
  // Add all static routes
  const routes = [
    '',
    '/about',
    '/pricing',
    '/contact',
    '/api-docs',
    '/privacy-policy',
    '/terms-of-service',
    '/download-sample',
    '/contact-sales',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  return routes
} 