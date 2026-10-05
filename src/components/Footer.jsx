import { Link } from 'react-router-dom'
import { SITE } from '../site/config'
import { SERVICES, PRODUCTS } from '../site/data'
import { Icon } from './UI'

export default function Footer() {
  const social = Object.entries(SITE.social).filter(([, v]) => v)
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-about">
          <Link to="/" className="brand" aria-label="TechTrigger home">
            <img src="/images/logo.png" alt="" width="44" height="44" />
            <span>Tech<b>Trigger</b></span>
          </Link>
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
          <h3 className="mt">Company</h3>
          <ul>
            <li><Link to="/about">About us</Link></li>
            <li><Link to="/industries">Industries</Link></li>
            <li><Link to="/careers">Careers</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h3>Visit or call</h3>
          <ul className="contact-list">
            <li><Icon name="MapPin" size={16} /><span>{SITE.address.street}, {SITE.address.city}, {SITE.address.region} {SITE.address.postalCode}, {SITE.address.country}</span></li>
            <li><Icon name="Phone" size={16} /><a href={`tel:${SITE.phoneRaw}`}>{SITE.phone}</a></li>
            <li><Icon name="MessageCircle" size={16} /><a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer">WhatsApp</a></li>
            <li><Icon name="Mail" size={16} /><a href={`mailto:${SITE.email}`}>{SITE.email}</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p>&copy; {new Date().getFullYear()} {SITE.legalName}. All rights reserved.</p>
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
