import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router'
import App from './App'
import { seoStore } from './site/seoData'
import { SERVICES, PRODUCTS } from './site/data'

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
  '/', '/about', '/services', '/industries', '/products', '/careers', '/contact',
  ...SERVICES.map((s) => `/services/${s.slug}`),
  ...PRODUCTS.map((p) => `/products/${p.slug}`),
  '/privacy', '/terms', '/cookies',
]
