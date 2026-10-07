import { Link } from 'react-router-dom'
import {
  Smartphone, Globe, Brain, GraduationCap, PenTool, Server, ArrowRight, Check,
  Phone, Mail, MapPin, MessageCircle, ChevronDown, ChevronLeft, ChevronRight, Menu, X, ExternalLink, Clock, Play, Pause,
} from 'lucide-react'
import { Reveal, SplitText } from './motion'

const ICONS = { Smartphone, Globe, Brain, GraduationCap, PenTool, Server, ArrowRight, Check, Phone, Mail, MapPin, MessageCircle, ChevronDown, ChevronLeft, ChevronRight, Menu, X, ExternalLink, Clock, Play, Pause }
export const Icon = ({ name, size = 22, ...rest }) => {
  const C = ICONS[name] || Check
  return <C size={size} aria-hidden="true" {...rest} />
}

export const Logo = ({ className = '' }) => (
  <span className={`logo ${className}`.trim()}>
    <img src="/images/logo-mark.png" alt="" width="44" height="48" />
    <span className="wordmark">TECH TRIGGERS</span>
  </span>
)

export const Eyebrow = ({ children }) => <p className="eyebrow">{children}</p>

export const SectionHead = ({ eyebrow, title, text, center = false, as = 'h2' }) => (
  <div className={`section-head${center ? ' center' : ''}`}>
    {eyebrow && <Reveal as="p" className="eyebrow">{eyebrow}</Reveal>}
    <SplitText as={as} text={title} />
    {text && <Reveal as="p" className="lead" delay={150}>{text}</Reveal>}
  </div>
)

export const StatusBadge = ({ p }) => (
  <span className={`badge ${p.early ? 'soon-badge' : 'ok'}`}>{p.status}</span>
)

export const PageHero = ({ eyebrow, title, text, image, crumbs, children }) => (
  <section className="page-hero dark">
    <div className="page-hero-glow" aria-hidden="true" />
    <div className="container page-hero-inner">
      <div className="page-hero-copy">
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
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
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
  <section className="cta-band dark">
    <div className="container cta-inner">
      <div>
        <SplitText text={title} />
        <Reveal as="p" delay={120}>{text}</Reveal>
      </div>
      <Reveal className="cta-actions" delay={200}>
        <Button to="/contact" variant="light">Connect now <Icon name="ArrowRight" size={18} /></Button>
        <Button href="https://wa.me/923376279457" variant="ghost" target="_blank" rel="noopener noreferrer">
          <Icon name="MessageCircle" size={18} /> WhatsApp us
        </Button>
      </Reveal>
    </div>
  </section>
)

export const Checklist = ({ items }) => (
  <ul className="checklist">
    {items.map((t, i) => (
      <Reveal as="li" key={t} delay={i * 70}><Icon name="Check" size={18} /><span>{t}</span></Reveal>
    ))}
  </ul>
)
