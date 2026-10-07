import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { SITE } from '../site/config'
import { SERVICES, PRODUCTS, INDUSTRIES, CASE_STUDY } from '../site/data'
import { Icon, Logo } from './UI'

const MENUS = [
  {
    label: 'What we do',
    to: '/what-we-do',
    groups: [
      { title: 'Services', items: SERVICES.map((s) => [s.title, `/services/${s.slug}`]) },
      { title: 'Products', items: PRODUCTS.map((p) => [p.name, `/products/${p.slug}`, p.soon ? 'Soon' : null]) },
    ],
  },
  {
    label: 'Who we are',
    to: '/about',
    groups: [{ title: 'Company', items: [['About us', '/about'], ['Founders', '/about#founders'], ['Case study', `/case-studies/${CASE_STUDY.slug}`], ['Careers', '/careers'], ['Contact', '/contact']] }],
  },
  {
    label: 'Industries',
    to: '/industries',
    groups: [{ title: 'Who we serve', items: INDUSTRIES.map((i) => [i.title, `/industries/${i.slug}`]) }],
  },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => { setOpen(false) }, [pathname])
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 24)
    on()
    window.addEventListener('scroll', on, { passive: true })
    return () => window.removeEventListener('scroll', on)
  }, [])
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <header className={`site-header${scrolled || open ? ' scrolled' : ''}`}>
      <div className="container navbar">
        <Link to="/" className="brand" aria-label="Tech Triggers home"><Logo /></Link>

        <nav aria-label="Main" className={`nav${open ? ' open' : ''}`}>
          <ul>
            {MENUS.map((m) => (
              <li className="has-menu" key={m.to}>
                <NavLink to={m.to} className="nav-link" end={m.to !== '/industries'}>
                  {m.label} <Icon name="ChevronDown" size={14} />
                </NavLink>
                <div className="menu-panel">
                  <div className={`menu-cols cols-${m.groups.length}`}>
                    {m.groups.map((g) => (
                      <div key={g.title}>
                        <p className="menu-title">{g.title}</p>
                        <ul>
                          {g.items.map(([label, to, tag]) => (
                            <li key={to}><Link to={to} className="menu-item">{label}{tag && <span className="menu-tag">{tag}</span>}</Link></li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                  <Link to={m.to} className="menu-all">All of {m.label.toLowerCase()} <Icon name="ArrowRight" size={14} /></Link>
                </div>
              </li>
            ))}
            <li className="nav-mobile-only"><NavLink to="/careers" className="nav-link">Careers</NavLink></li>
          </ul>
          <div className="nav-actions">
            <a className="nav-phone" href={`tel:${SITE.phoneRaw}`}><Icon name="Phone" size={15} /> {SITE.phone}</a>
            <Link to="/contact" className="btn btn-light nav-cta">Connect now</Link>
          </div>
        </nav>

        <button type="button" className="burger" onClick={() => setOpen(!open)} aria-expanded={open} aria-label={open ? 'Close menu' : 'Open menu'}>
          <Icon name={open ? 'X' : 'Menu'} size={26} />
        </button>
      </div>
    </header>
  )
}
