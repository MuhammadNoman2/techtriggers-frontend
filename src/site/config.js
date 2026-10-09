// Single source of truth for company facts. Edit here and every page updates.
// Only put things here that are true today.

export const SITE = {
  name: 'Tech Triggers',
  legalName: 'Tech Triggers', // TODO: replace with the registered company name once registration is final
  url: 'https://techtrigger.org',
  tagline: 'Software for schools, colleges and growing businesses',
  email: 'techtrigger76@gmail.com',
  phone: '+92 337 6279457',
  phoneRaw: '+923376279457',
  whatsapp: 'https://wa.me/923376279457',
  address: {
    street: 'Apartment 436, Rafay Mall, Peshawar Road',
    city: 'Rawalpindi',
    region: 'Punjab',
    postalCode: '', // TODO: add once confirmed for the Rafay Mall office
    country: 'Pakistan',
    countryCode: 'PK',
  },
  // Add real profile links here. Empty entries are not shown anywhere on the site.
  social: {
    linkedin: 'https://www.linkedin.com/company/tech-trigger/',
    instagram: 'https://www.instagram.com/tech.triggers/',
    facebook: 'https://www.facebook.com/share/19crpWrrwM/',
    youtube: '',
  },
  ogImage: '/og-image.jpg',
}

export const PLAY = {
  dacAi: 'https://play.google.com/store/apps/details?id=com.dac_tutor.dac_tutor',
  ilmiDuniya: 'https://play.google.com/store/apps/details?id=com.ilmiduniya.school',
}

export const NAV = {
  what: [
    { label: 'Services', to: '/services', note: 'Apps, web, AI, LMS, design, hosting' },
    { label: 'Products', to: '/products', note: 'DAC AI, Ilmi Duniya, LMS platform' },
  ],
  who: [
    { label: 'About us', to: '/about', note: 'Our story and values' },
    { label: 'Founders', to: '/about#founders', note: 'The three people behind it' },
    { label: 'Careers', to: '/careers', note: 'Join the team' },
  ],
}

export const absolute = (path = '/') => `${SITE.url}${path}`
