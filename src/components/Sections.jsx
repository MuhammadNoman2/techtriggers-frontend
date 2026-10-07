import { Link } from 'react-router-dom'
import { SERVICES, PRODUCTS, INDUSTRIES } from '../site/data'
import { Icon, StatusBadge, Button } from './UI'
import { Reveal, Carousel } from './motion'

const bentoClass = ['feature', 'light', 'light', 'wide', 'light', 'light']
const bentoOrder = ['ai-solutions', 'mobile-app-development', 'web-development', 'education-lms', 'ui-ux-design', 'cloud-hosting-devops']

export function ServiceBento() {
  const list = bentoOrder.map((slug) => SERVICES.find((s) => s.slug === slug)).filter(Boolean)
  return (
    <div className="bento">
      {list.map((s, i) => (
        <Link key={s.slug} to={`/services/${s.slug}`} className={`bento-card ${bentoClass[i]}`}>
          <span className="bento-icon"><Icon name={s.icon} size={26} /></span>
          {i === 0 && <span className="bento-tag">Featured service</span>}
          {i === 3 && <span className="bento-tag">Our live work</span>}
          <h3>{s.title}</h3>
          <p>{s.short}</p>
          <span className="more">Learn more <Icon name="ArrowRight" size={16} /></span>
        </Link>
      ))}
    </div>
  )
}

export function ProductCards() {
  return (
    <div className="product-grid">
      {PRODUCTS.map((p) => (
        <Link to={`/products/${p.slug}`} key={p.slug} className={`card product-card${p.early ? ' is-early' : ''}`}>
          <div className="card-photo short"><img src={p.image} alt="" width="1000" height="667" loading="lazy" /></div>
          <div className="card-body">
            <div className="meta"><StatusBadge p={p} /><span className="muted">{p.kind}</span></div>
            <h3>{p.name}</h3>
            <p>{p.tagline}</p>
            <span className="more">Details <Icon name="ArrowRight" size={16} /></span>
          </div>
        </Link>
      ))}
    </div>
  )
}

export function SalesBanner() {
  const p = PRODUCTS.find((x) => x.slug === 'whatsapp-sales-desk')
  return (
    <section className="sales-banner dark">
      <div className="container sales-inner">
        <Reveal anim="left" className="sales-visual">
          <img src={p.screens[0].src} alt={p.screens[0].alt} width="1600" height="952" loading="lazy" />
        </Reveal>
        <div className="sales-copy">
          <Reveal as="span" className="badge soon-badge">Early access</Reveal>
          <Reveal as="h2" delay={80}>{p.name}</Reveal>
          <Reveal as="p" className="lead" delay={160}>{p.summary}</Reveal>
          <Reveal as="ul" className="sales-points" delay={240}>
            {['Shared inbox with an owner for every chat', 'Lead Recovery for leads going cold', 'AI-drafted replies your team approves'].map((t) => (
              <li key={t}><Icon name="Check" size={18} />{t}</li>
            ))}
          </Reveal>
          <Reveal className="hero-actions" delay={320}>
            <Button to={`/products/${p.slug}`}>Explore the Sales Desk <Icon name="ArrowRight" size={18} /></Button>
            <Button to="/contact" variant="ghost">Request a demo</Button>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

export function IndustryCarousel() {
  return (
    <Carousel label="Industries we serve">
      {INDUSTRIES.map((i) => (
        <Link to={`/industries/${i.slug}`} key={i.slug} className="ind-slide">
          <img src={i.image} alt="" width="1000" height="667" loading="lazy" />
          <span className="ind-shade" />
          <span className="ind-body">
            <span className={`badge ${i.live ? 'ok' : 'plain'}`}>{i.badge}</span>
            <strong>{i.title}</strong>
            <span className="ind-text">{i.text}</span>
            <span className="more light">Explore <Icon name="ArrowRight" size={16} /></span>
          </span>
        </Link>
      ))}
    </Carousel>
  )
}
