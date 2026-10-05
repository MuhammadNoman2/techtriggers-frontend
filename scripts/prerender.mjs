// Runs after `vite build` and the SSR build. Writes a real HTML file for every route,
// plus sitemap.xml and robots.txt, so search engines and link previews see full content.
import fs from 'node:fs'
import path from 'node:path'
import { pathToFileURL } from 'node:url'

const root = path.resolve(import.meta.dirname, '..')
const dist = path.join(root, 'dist')
const { render, getRoutes } = await import(pathToFileURL(path.join(root, 'dist-ssr', 'entry-server.js')).href)

let template = fs.readFileSync(path.join(dist, 'index.html'), 'utf8')
template = template.replace(/<title>[^<]*<\/title>\s*/, '')

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;')
const headFor = (seo) => {
  const t = [
    `<title>${esc(seo.title)}</title>`,
    `<meta name="description" content="${esc(seo.description)}" />`,
    `<meta name="robots" content="${seo.noindex ? 'noindex, follow' : 'index, follow, max-image-preview:large'}" />`,
    `<link rel="canonical" href="${esc(seo.url)}" />`,
    `<meta property="og:title" content="${esc(seo.title)}" />`,
    `<meta property="og:description" content="${esc(seo.description)}" />`,
    `<meta property="og:url" content="${esc(seo.url)}" />`,
    `<meta property="og:type" content="${esc(seo.type)}" />`,
    `<meta property="og:image" content="${esc(seo.image)}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${esc(seo.title)}" />`,
    `<meta name="twitter:description" content="${esc(seo.description)}" />`,
    `<meta name="twitter:image" content="${esc(seo.image)}" />`,
  ]
  for (const obj of seo.jsonLd || []) {
    t.push(`<script type="application/ld+json" data-seo-ld>${JSON.stringify(obj).replace(/</g, '\\u003c')}</script>`)
  }
  return t.join('\n    ')
}

const build = (url) => {
  const { html, seo } = render(url)
  if (!seo) throw new Error(`No SEO data registered for ${url}`)
  return template.replace('<!--seo-head-->', headFor(seo)).replace('<!--app-html-->', html)
}

const routes = getRoutes()
const SITE = 'https://techtrigger.org'
const today = new Date().toISOString().slice(0, 10)

for (const r of routes) {
  const html = build(r)
  const out = r === '/' ? path.join(dist, 'index.html') : path.join(dist, r, 'index.html')
  fs.mkdirSync(path.dirname(out), { recursive: true })
  fs.writeFileSync(out, html)
}
fs.writeFileSync(path.join(dist, '404.html'), build('/page-not-found'))

const prio = (r) => (r === '/' ? '1.0' : r.split('/').length === 2 ? '0.8' : '0.6')
const urls = routes
  .filter((r) => !['/privacy', '/terms', '/cookies'].includes(r))
  .map((r) => `  <url><loc>${SITE}${r === '/' ? '/' : r + '/'}</loc><lastmod>${today}</lastmod><priority>${prio(r)}</priority></url>`)
  .join('\n')
fs.writeFileSync(path.join(dist, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`)
fs.writeFileSync(path.join(dist, 'robots.txt'), `User-agent: *\nAllow: /\n\nSitemap: ${SITE}/sitemap.xml\n`)

fs.rmSync(path.join(root, 'dist-ssr'), { recursive: true, force: true })
console.log(`Prerendered ${routes.length} pages + 404, sitemap.xml, robots.txt`)
