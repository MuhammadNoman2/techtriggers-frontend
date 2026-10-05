import { Link } from 'react-router-dom'
import {
  Smartphone, Globe, Brain, GraduationCap, PenTool, Server, ArrowRight, Check,
  Phone, Mail, MapPin, MessageCircle, ChevronDown, Menu, X, ExternalLink, Clock,
} from 'lucide-react'

const ICONS = { Smartphone, Globe, Brain, GraduationCap, PenTool, Server, ArrowRight, Check, Phone, Mail, MapPin, MessageCircle, ChevronDown, Menu, X, ExternalLink, Clock }
export const Icon = ({ name, size = 22, ...rest }) => {
  const C = ICONS[name] || Check
  return <C size={size} aria-hidden="true" {...rest} />
}

export const Eyebrow = ({ children }) => <p className="eyebrow">{children}</p>

export const SectionHead = ({ eyebrow, title, text, center = false }) => (
  <div className={`section-head${center ? ' center' : ''}`}>
    {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
    <h2>{title}</h2>
    {text && <p className="lead">{text}</p>}
  </div>
)

export const PageHero = ({ eyebrow, title, text, image, crumbs, children }) => (
  <section className="page-hero">
    <div className="container page-hero-inner">
      <div>
        {crumbs && (
          <nav className="crumbs" aria-label="Breadcrumb">
            {crumbs.map(([label, to], i) => (
              <span key={label}>
                {to ? <Link to={to}>{label}</Link> : <span aria-current="page">{label}</span>}
                {i < crumbs.length - 1 && <span className="sep"> / </span>}
              </span>
            ))}
          </nav>
        )}
        {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
        <h1>{title}</h1>
        {text && <p className="lead">{text}</p>}
        {children}
      </div>
      {image && (
        <div className="page-hero-photo">
          <img src={image} alt="" width="1000" height="700" />
        </div>
      )}
    </div>
  </section>
)

export const Button = ({ to, href, variant = 'primary', children, ...rest }) => {
  const cls = `btn btn-${variant}`
  if (href) return <a className={cls} href={href} {...rest}>{children}</a>
  return <Link className={cls} to={to} {...rest}>{children}</Link>
}

export const CtaBand = ({ title = 'Have a project in mind?', text = 'Tell us what you need. We reply within one working day, usually sooner.' }) => (
  <section className="cta-band">
    <div className="container cta-inner">
      <div>
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
      <div className="cta-actions">
        <Button to="/contact">Book a consultation <Icon name="ArrowRight" size={18} /></Button>
        <Button href="https://wa.me/923376279457" variant="light" target="_blank" rel="noopener noreferrer">
          <Icon name="MessageCircle" size={18} /> WhatsApp us
        </Button>
      </div>
    </div>
  </section>
)

export const Checklist = ({ items }) => (
  <ul className="checklist">
    {items.map((t) => (
      <li key={t}><Icon name="Check" size={18} /><span>{t}</span></li>
    ))}
  </ul>
)
