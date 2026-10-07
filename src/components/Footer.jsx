import { Link } from 'react-router-dom'
import { SITE } from '../site/config'
import { SERVICES, PRODUCTS, INDUSTRIES, CASE_STUDY } from '../site/data'
import { Icon, Logo } from './UI'
import { Reveal } from './motion'

export default function Footer() {
  const social = Object.entries(SITE.social).filter(([, v]) => v)
  return (
    <footer className="site-footer dark">
      <div className="container footer-grid">
        <div className="footer-about">
          <Link to="/" className="brand" aria-label="Tech Triggers home"><Logo /></Link>
          <p>A software company in Rawalpindi building learning platforms, mobile apps, web portals and AI tools.</p>
          {social.length > 0 && (
            <ul className="social">
              {social.map(([k, v]) => (
                <li key={k}><a href={v} target="_blank" rel="noopener noreferrer">{k[0].toUpperCase() + k.slice(1)}</a></li>
              ))}
            </ul>
          )}
        </div>
        <div>
          <h3>Services</h3>
          <ul>{SERVICES.map((s) => <li key={s.slug}><Link to={`/services/${s.slug}`}>{s.title}</Link></li>)}</ul>
        </div>
        <div>
          <h3>Products</h3>
          <ul>{PRODUCTS.map((p) => <li key={p.slug}><Link to={`/products/${p.slug}`}>{p.name}</Link></li>)}</ul>
          <h3 className="mt">Industries</h3>
          <ul>{INDUSTRIES.map((i) => <li key={i.slug}><Link to={`/industries/${i.slug}`}>{i.title}</Link></li>)}</ul>
        </div>
        <div>
          <h3>Company</h3>
          <ul>
            <li><Link to="/about">About us</Link></li>
            <li><Link to="/what-we-do">What we do</Link></li>
            <li><Link to={`/case-studies/${CASE_STUDY.slug}`}>Case study</Link></li>
            <li><Link to="/careers">Careers</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
          <h3 className="mt">Visit or call</h3>
          <ul className="contact-list">
            <li><Icon name="MapPin" size={16} /><span>{SITE.address.street}, {SITE.address.city}, {SITE.address.region} {SITE.address.postalCode}, {SITE.address.country}</span></li>
            <li><Icon name="Phone" size={16} /><a href={`tel:${SITE.phoneRaw}`}>{SITE.phone}</a></li>
            <li><Icon name="MessageCircle" size={16} /><a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer">WhatsApp</a></li>
            <li><Icon name="Mail" size={16} /><a href={`mailto:${SITE.email}`}>{SITE.email}</a></li>
          </ul>
        </div>
      </div>
      <Reveal className="container philosophy" aria-hidden="true">
        <span className="philosophy-line" />
        <p>TECH TRIGGERS <em>/ PHILOSOPHY</em></p>
        <p className="philosophy-text">Build what people actually use.</p>
      </Reveal>
      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p>&copy; {new Date().getFullYear()} {SITE.legalName}. All rights reserved. WhatsApp is a trademark of Meta.</p>
          <ul>
            <li><Link to="/privacy">Privacy</Link></li>
            <li><Link to="/terms">Terms</Link></li>
            <li><Link to="/cookies">Cookies</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
