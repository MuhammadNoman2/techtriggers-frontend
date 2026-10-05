import { useEffect } from 'react'
import { SITE, absolute } from './config'
import { seoStore } from './seoData'


const upsert = (selector, create, attrs) => {
  let el = document.head.querySelector(selector)
  if (!el) {
    el = create()
    document.head.appendChild(el)
  }
  Object.entries(attrs).forEach(([k, v]) => el.setAttribute(k, v))
}

const meta = (key, value, attr = 'name') =>
  upsert(`meta[${attr}="${key}"]`, () => {
    const m = document.createElement('meta')
    m.setAttribute(attr, key)
    return m
  }, { content: value })

export default function Seo({ title, description, path = '/', image = SITE.ogImage, type = 'website', jsonLd = [], noindex = false }) {
  const fullTitle = title ? `${title} | ${SITE.name}` : `${SITE.name}: ${SITE.tagline}`
  const url = absolute(path === '/' ? '/' : path.endsWith('/') ? path : `${path}/`)
  const img = image.startsWith('http') ? image : absolute(image)
  const data = { title: fullTitle, description, url, image: img, type, jsonLd, noindex }

  if (typeof window === 'undefined') seoStore.current = data

  useEffect(() => {
    document.title = fullTitle
    meta('description', description)
    meta('robots', noindex ? 'noindex, follow' : 'index, follow, max-image-preview:large')
    meta('og:title', fullTitle, 'property')
    meta('og:description', description, 'property')
    meta('og:url', url, 'property')
    meta('og:type', type, 'property')
    meta('og:image', img, 'property')
    meta('twitter:card', 'summary_large_image')
    meta('twitter:title', fullTitle)
    meta('twitter:description', description)
    meta('twitter:image', img)
    upsert('link[rel="canonical"]', () => {
      const l = document.createElement('link')
      l.setAttribute('rel', 'canonical')
      return l
    }, { href: url })
    document.head.querySelectorAll('script[data-seo-ld]').forEach((n) => n.remove())
    jsonLd.forEach((obj) => {
      const s = document.createElement('script')
      s.type = 'application/ld+json'
      s.setAttribute('data-seo-ld', '')
      s.text = JSON.stringify(obj)
      document.head.appendChild(s)
    })
  }, [fullTitle, description, url, img, type, noindex, JSON.stringify(jsonLd)]) // eslint-disable-line react-hooks/exhaustive-deps

  return null
}
