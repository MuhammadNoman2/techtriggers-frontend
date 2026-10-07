import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router'
import App from './App'
import { seoStore } from './site/seoData'
import { SERVICES, PRODUCTS, INDUSTRIES, CASE_STUDY } from './site/data'

export function render(url) {
  seoStore.current = null
  const html = renderToString(
    <StaticRouter location={url}>
      <App />
    </StaticRouter>
  )
  return { html, seo: seoStore.current }
}

export const getRoutes = () => [
  '/', '/about', '/what-we-do', '/services', '/industries', '/products', '/careers', '/contact',
  ...SERVICES.map((s) => `/services/${s.slug}`),
  ...PRODUCTS.map((p) => `/products/${p.slug}`),
  ...INDUSTRIES.map((i) => `/industries/${i.slug}`),
  `/case-studies/${CASE_STUDY.slug}`,
  '/privacy', '/terms', '/cookies',
]
