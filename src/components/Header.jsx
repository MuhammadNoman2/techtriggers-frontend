import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { SITE, NAV } from '../site/config'
import { Icon } from './UI'

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => { setOpen(false) }, [pathname])
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 8)
    on()
    window.addEventListener('scroll', on, { passive: true })
    return () => window.removeEventListener('scroll', on)
  }, [])
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  const Dropdown = ({ label, items }) => (
    <li className="has-menu">
      <button type="button" className="menu-trigger" aria-haspopup="true">
        {label} <Icon name="ChevronDown" size={15} />
      </button>
      <div className="menu-panel">
        {items.map((i) => (
          <Link key={i.to} to={i.to} className="menu-item">
            <strong>{i.label}</strong>
            <span>{i.note}</span>
          </Link>
        ))}
      </div>
    </li>
  )

  return (
    <header className={`site-header${scrolled ? ' scrolled' : ''}`}>
      <div className="topbar">
        <div className="container topbar-inner">
          <div className="topbar-left">
            <a href={`tel:${SITE.phoneRaw}`}><Icon name="Phone" size={14} /> {SITE.phone}</a>
            <a href={`mailto:${SITE.email}`}><Icon name="Mail" size={14} /> {SITE.email}</a>
            <a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer"><Icon name="MessageCircle" size={14} /> WhatsApp</a>
          </div>
          <div className="topbar-right">
            <Link to="/careers">Careers</Link>
            <Link to="/contact">Contact us</Link>
          </div>
        </div>
      </div>

      <div className="container navbar">
        <Link to="/" className="brand" aria-label="TechTrigger home">
          <img src="/images/logo.png" alt="" width="44" height="44" />
          <span>Tech<b>Trigger</b></span>
        </Link>

        <nav aria-label="Main" className={`nav${open ? ' open' : ''}`}>
          <ul>
            <Dropdown label="What we do" items={NAV.what} />
            <Dropdown label="Who we are" items={NAV.who} />
            <li><NavLink to="/industries">Industries</NavLink></li>
            <li className="nav-mobile-only"><NavLink to="/careers">Careers</NavLink></li>
          </ul>
          <Link to="/contact" className="btn btn-primary nav-cta">Book a consultation</Link>
        </nav>

        <button type="button" className="burger" onClick={() => setOpen(!open)} aria-expanded={open} aria-label={open ? 'Close menu' : 'Open menu'}>
          <Icon name={open ? 'X' : 'Menu'} size={26} />
        </button>
      </div>
    </header>
  )
}
