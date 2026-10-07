import { Link } from 'react-router-dom'
import Seo from '../site/seo'
import { orgJsonLd } from '../site/seoData'
import { PLAY } from '../site/config'
import { FACTS, HERO_SLIDES, TECH, CASE_STUDY } from '../site/data'
import { Icon, SectionHead, Button, CtaBand } from '../components/UI'
import { Reveal, SplitText, CountUp } from '../components/motion'
import HeroSlider from '../components/HeroSlider'
import { ServiceBento, ProductCards, SalesBanner, IndustryCarousel } from '../components/Sections'

const Circuit = () => (
  <svg className="circuit" viewBox="0 0 1200 220" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
    {['M0 40 H220 V90 H420 V30 H640', 'M0 120 H160 V170 H380 V120 H560 V190 H800', 'M1200 60 H980 V110 H800 V50 H620', 'M1200 160 H1040 V200 H860 V150 H700 V210 H560'].map((d, i) => (
      <path key={d} d={d} pathLength="1" style={{ '--n': i }} />
    ))}
    {[[220, 90], [420, 30], [380, 120], [980, 110], [800, 50], [860, 150]].map(([x, y]) => <circle key={`${x}${y}`} cx={x} cy={y} r="5" />)}
  </svg>
)

export default function Home() {
  return (
    <>
      <Seo
        title="Software for Schools, Colleges and Business"
        description="Tech Triggers is a software company in Rawalpindi, Pakistan, building learning platforms, mobile apps, web portals and AI tools for schools and businesses."
        path="/"
        jsonLd={[orgJsonLd()]}
      />

      <HeroSlider slides={HERO_SLIDES} />

      <div className="container client-strip-wrap">
        <Reveal className="client-strip">
          <p className="strip-label">Our first clients</p>
          <ul>
            <li>
              <a href={PLAY.dacAi} target="_blank" rel="noopener noreferrer">
                <img src="/images/apps/dac-icon.jpg" alt="" width="52" height="52" />
                <span><strong>Dar-e-Arqam Group of Colleges</strong><small>DAC AI &middot; 500+ downloads on Google Play</small></span>
              </a>
            </li>
            <li>
              <a href={PLAY.ilmiDuniya} target="_blank" rel="noopener noreferrer">
                <img src="/images/apps/ilmi-icon.jpg" alt="" width="52" height="52" />
                <span><strong>Dar-e-Arqam Schools</strong><small>Ilmi Duniya &middot; 1K+ downloads on Google Play</small></span>
              </a>
            </li>
          </ul>
        </Reveal>
      </div>

      <section className="tech-strip" aria-label="Technologies we work with">
        <div className="marquee">
          <ul className="marquee-track">
            {TECH.map((t) => <li key={t}>{t}</li>)}
            {TECH.map((t) => <li key={`${t}-2`} aria-hidden="true">{t}</li>)}
          </ul>
        </div>
      </section>

      <section className="section who">
        <div className="container who-grid">
          <div>
            <SplitText as="h2" text="Discover *who we are.*" className="big" />
            <Reveal delay={200}><Link className="text-link" to="/about">Learn more <Icon name="ArrowRight" size={16} /></Link></Reveal>
          </div>
          <Reveal as="div" className="who-text" delay={120}>
            <p>
              Tech Triggers started with a practical problem: help a group of colleges teach and track students with software that fits how
              Pakistani classrooms work. We built the college app, then the school app, then the web portal and the platform behind them.
            </p>
            <p>
              Today we are a software company in Rawalpindi. The <strong>three founders</strong> you meet at the start are the people who build and look after your project.
            </p>
          </Reveal>
        </div>
        <div className="container">
          <Reveal anim="zoom" className="stats-band">
            <Circuit />
            <ul>
              {FACTS.map((f) => (
                <li key={f.label}><strong><CountUp to={f.to} suffix={f.suffix} /></strong><span>{f.label}</span></li>
              ))}
            </ul>
          </Reveal>
          <p className="facts-note">Figures from our Google Play listings and current client list.</p>
        </div>
      </section>

      <section className="section tint">
        <div className="container">
          <SectionHead eyebrow="What we do" title="Everything from the first sketch to the *server it runs on.*" text="Six services, one team. Each is something we already do in our own products." />
          <ServiceBento />
          <Reveal className="center more-row"><Button to="/what-we-do" variant="outline">See everything we do <Icon name="ArrowRight" size={18} /></Button></Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead eyebrow="Our products" title="Built with Dar-e-Arqam. *Ready for the next institution.*" text="Live today: two apps on Google Play, a web portal and an LMS platform. Coming soon: the WhatsApp Sales Desk." />
          <ProductCards />
        </div>
      </section>

      <SalesBanner />

      <section className="section dark industries">
        <div className="container">
          <SectionHead eyebrow="Industries" title="Industries *we serve.*" text="Education is where we have delivered. We take on other projects too, and we tell you honestly when something is new to us." />
          <IndustryCarousel />
          <Reveal className="more-row"><Link className="text-link light" to="/industries">View all industries <Icon name="ArrowRight" size={16} /></Link></Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container case-teaser">
          <Reveal anim="left" className="case-photo"><img src="/images/product-dac-ai.jpg" alt="DAC AI app screens" width="1200" height="800" loading="lazy" /></Reveal>
          <div>
            <SectionHead eyebrow="Case study" title="How Dar-e-Arqam *learns on our platform.*" text="Two apps, a web portal and a multi-institution platform for our first clients, and how we keep improving them." />
            <Reveal delay={200}><Link className="btn btn-outline" to={`/case-studies/${CASE_STUDY.slug}`}>Read the case study <Icon name="ArrowRight" size={18} /></Link></Reveal>
          </div>
        </div>
      </section>

      <section className="section careers-cta">
        <div className="container two-col-cta">
          <SplitText as="h2" text="Help us tell our *story.*" className="big" />
          <Reveal delay={150}>
            <p className="lead">We build real products used by real students and almost never talked about them. We are hiring a Marketing &amp; Social Media Specialist to change that.</p>
            <Link className="text-link" to="/careers">Explore careers <Icon name="ArrowRight" size={16} /></Link>
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  )
}
