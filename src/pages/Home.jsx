import { Link } from 'react-router-dom'
import Seo from '../site/seo'
import { orgJsonLd } from '../site/seoData'
import { FACTS, SERVICES, PRODUCTS, COMING_SOON, INDUSTRIES, PROCESS, WHY } from '../site/data'
import { Icon, SectionHead, Button, CtaBand } from '../components/UI'

export default function Home() {
  return (
    <>
      <Seo
        title="Software for Schools, Colleges and Business"
        description="TechTrigger is a software company in Rawalpindi, Pakistan, building learning platforms, mobile apps, web portals and AI tools. Live on Google Play for Dar-e-Arqam."
        path="/"
        jsonLd={[orgJsonLd()]}
      />

      <section className="hero">
        <img className="hero-bg" src="/images/hero-team.jpg" alt="" width="1600" height="1067" fetchPriority="high" />
        <div className="hero-shade" />
        <div className="container hero-inner">
          <div className="hero-copy">
            <p className="eyebrow light">Software company &middot; Rawalpindi, Pakistan</p>
            <h1>Software that works in real classrooms and real businesses.</h1>
            <p className="lead light">
              We are TechTrigger: three founders building learning platforms, mobile apps, web portals and AI tools.
              Our apps are live on Google Play for Dar-e-Arqam Group of Colleges and Dar-e-Arqam Schools.
            </p>
            <div className="hero-actions">
              <Button to="/products">See what we have built <Icon name="ArrowRight" size={18} /></Button>
              <Button to="/contact" variant="light">Talk to us</Button>
            </div>
          </div>

          <ul className="hero-pillars" aria-label="Who we are, what we offer, who we serve">
            <li><span>Who we are</span><strong>Three founders, one hands-on team</strong><Link to="/about">About us <Icon name="ArrowRight" size={14} /></Link></li>
            <li><span>What we offer</span><strong>Apps, web, AI, LMS, design, hosting</strong><Link to="/services">Our services <Icon name="ArrowRight" size={14} /></Link></li>
            <li><span>Who we serve</span><strong>Schools, colleges and growing businesses</strong><Link to="/industries">Industries <Icon name="ArrowRight" size={14} /></Link></li>
          </ul>
        </div>
      </section>

      <section className="facts" aria-label="TechTrigger at a glance">
        <div className="container">
          <ul className="facts-grid">
            {FACTS.map((f) => (
              <li key={f.label}><strong>{f.value}</strong><span>{f.label}</span></li>
            ))}
          </ul>
          <p className="facts-note">Figures from our Google Play listings and current client list. Our first clients: Dar-e-Arqam Group of Colleges and Dar-e-Arqam Schools.</p>
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <div className="split-photo"><img src="/images/about-desk.jpg" alt="Two developers working at a desk with code on screen" width="1200" height="800" loading="lazy" /></div>
          <div>
            <SectionHead eyebrow="Who we are" title="A small team that builds, hosts and supports its own software." />
            <p>
              TechTrigger started with a practical problem: help a growing group of colleges teach and track students with software that
              fits how Pakistani classrooms work. We built the college app, then the school app, then the web portal and the platform behind them.
            </p>
            <p>
              Today we are a software company in Rawalpindi. The people you meet at the start are the people who build and look after your project.
            </p>
            <Button to="/about" variant="outline">Read our story <Icon name="ArrowRight" size={18} /></Button>
          </div>
        </div>
      </section>

      <section className="section tint">
        <div className="container">
          <SectionHead eyebrow="What we offer" title="Everything from the first sketch to the server it runs on." text="Six services, one team. Each one is something we already do in our own products." />
          <div className="card-grid cols-3">
            {SERVICES.map((s) => (
              <Link to={`/services/${s.slug}`} key={s.slug} className="card photo-card">
                <div className="card-photo"><img src={s.image} alt="" width="1000" height="667" loading="lazy" /></div>
                <div className="card-body">
                  <span className="card-icon"><Icon name={s.icon} size={20} /></span>
                  <h3>{s.title}</h3>
                  <p>{s.short}</p>
                  <span className="more">Learn more <Icon name="ArrowRight" size={16} /></span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead eyebrow="Our products" title="Built with Dar-e-Arqam. Ready for the next institution." text="These are live today. Download the apps from Google Play or ask us for a demo of the web portal and LMS." />
          <div className="card-grid cols-2">
            {PRODUCTS.map((p) => (
              <Link to={`/products/${p.slug}`} key={p.slug} className="card product-card">
                <div className="card-photo short"><img src={p.image} alt="" width="1000" height="667" loading="lazy" /></div>
                <div className="card-body">
                  <div className="meta"><span className="badge ok">{p.status}</span><span className="muted">{p.kind}</span></div>
                  <h3>{p.name}</h3>
                  <p>{p.tagline}</p>
                  <span className="more">Details <Icon name="ArrowRight" size={16} /></span>
                </div>
              </Link>
            ))}
          </div>
          <aside className="soon">
            <span className="badge soon-badge">In development</span>
            <div>
              <h3>{COMING_SOON.name}: {COMING_SOON.tagline}</h3>
              <p>{COMING_SOON.text}</p>
            </div>
          </aside>
        </div>
      </section>

      <section className="section dark">
        <div className="container">
          <SectionHead eyebrow="Industries" title="Education first. Open to businesses that need good software." text="Education is where we have delivered. We take on other projects too, and we tell you honestly when something is outside what we have done." />
          <div className="card-grid cols-4">
            {INDUSTRIES.map((i) => (
              <Link to={i.link} key={i.title} className="card ind-card">
                <div className="card-photo"><img src={i.image} alt="" width="1000" height="667" loading="lazy" /></div>
                <div className="card-body">
                  <span className={`badge ${i.badge === 'Our live work' ? 'ok' : 'plain'}`}>{i.badge}</span>
                  <h3>{i.title}</h3>
                  <p>{i.text}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container two-col">
          <div>
            <SectionHead eyebrow="How we work" title="Four steps, no surprises." />
            <ol className="steps">
              {PROCESS.map(([t, d], i) => (
                <li key={t}><span className="step-n">{i + 1}</span><div><h3>{t}</h3><p>{d}</p></div></li>
              ))}
            </ol>
          </div>
          <div>
            <SectionHead eyebrow="Why TechTrigger" title="What you can rely on." />
            <ul className="why">
              {WHY.map(([t, d]) => (
                <li key={t}><Icon name="Check" size={20} /><div><h3>{t}</h3><p>{d}</p></div></li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  )
}
