import { SITE, absolute } from './config'

// During the static build, pages register their head data here; the prerender
// script reads it back and writes it into each page's HTML.
export const seoStore = { current: null }

export const breadcrumb = (items) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map(([name, path], i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name,
    item: absolute(path),
  })),
})

export const orgJsonLd = () => {
  const sameAs = Object.values(SITE.social).filter(Boolean)
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['Organization', 'ProfessionalService'],
        '@id': `${SITE.url}/#organization`,
        name: SITE.name,
        url: SITE.url,
        logo: absolute('/images/logo.png'),
        image: absolute(SITE.ogImage),
        description:
          'TechTrigger is a software company in Rawalpindi, Pakistan, building learning platforms, mobile apps, web portals and AI tools.',
        email: SITE.email,
        telephone: SITE.phoneRaw,
        address: {
          '@type': 'PostalAddress',
          streetAddress: SITE.address.street,
          addressLocality: SITE.address.city,
          addressRegion: SITE.address.region,
          postalCode: SITE.address.postalCode,
          addressCountry: SITE.address.countryCode,
        },
        areaServed: 'PK',
        founder: [{ '@type': 'Person', name: 'Talha Waseem' }, { '@type': 'Person', name: 'Muhammad Noman' }, { '@type': 'Person', name: 'Ali Daud' }],
        ...(sameAs.length ? { sameAs } : {}),
      },
      {
        '@type': 'WebSite',
        '@id': `${SITE.url}/#website`,
        url: SITE.url,
        name: SITE.name,
        publisher: { '@id': `${SITE.url}/#organization` },
        inLanguage: 'en',
      },
    ],
  }
}
