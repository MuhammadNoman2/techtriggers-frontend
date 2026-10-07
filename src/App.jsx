import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import { ScrollProgress } from './components/motion'
import Home from './pages/Home'
import About from './pages/About'
import WhatWeDo from './pages/WhatWeDo'
import Services from './pages/Services'
import ServiceDetail from './pages/ServiceDetail'
import Products from './pages/Products'
import ProductDetail from './pages/ProductDetail'
import Industries from './pages/Industries'
import IndustryDetail from './pages/IndustryDetail'
import Careers from './pages/Careers'
import Contact from './pages/Contact'
import Legal from './pages/Legal'
import NotFound from './pages/NotFound'

// Elements that fade up as they scroll into view. The CSS hides them only once JavaScript is running.
const AUTO = '.card, .service-row, .founder, .steps li, .why li, .aside-card, .form-card, .contact-cards li, .prose > p, .shots li, .legal h2, .bento-card, .ind-slide'

function ScrollManager() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1))
      if (el) { el.scrollIntoView(); return }
    }
    window.scrollTo(0, 0)
  }, [pathname, hash])

  useEffect(() => {
    const items = [...document.querySelectorAll(AUTO)].filter((el) => !el.classList.contains('reveal'))
    if (typeof IntersectionObserver === 'undefined') { items.forEach((el) => el.classList.add('in')); return undefined }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target) } })
    }, { threshold: 0.12, rootMargin: '0px 0px -5% 0px' })
    items.forEach((el) => {
      const sibs = el.parentElement ? [...el.parentElement.children].filter((c) => c.matches(AUTO)) : [el]
      el.style.setProperty('--d', `${Math.min(sibs.indexOf(el), 5) * 90}ms`)
      io.observe(el)
    })
    return () => io.disconnect()
  }, [pathname])
  return null
}

export default function App() {
  const { pathname } = useLocation()
  return (
    <>
      <a href="#main" className="skip-link">Skip to main content</a>
      <ScrollManager />
      <ScrollProgress />
      <Header />
      <main id="main" key={pathname} className="page">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/what-we-do" element={<WhatWeDo />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:slug" element={<ServiceDetail />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:slug" element={<ProductDetail />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/industries/:slug" element={<IndustryDetail />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Legal kind="privacy" />} />
          <Route path="/terms" element={<Legal kind="terms" />} />
          <Route path="/cookies" element={<Legal kind="cookies" />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
