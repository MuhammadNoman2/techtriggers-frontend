import { Link, useParams } from 'react-router-dom'
import Seo from '../site/seo'
import { orgJsonLd, breadcrumb } from '../site/seoData'
import { INDUSTRIES } from '../site/data'
import { PageHero, SectionHead, Checklist, CtaBand, Button, Icon } from '../components/UI'
import NotFound from './NotFound'

export default function IndustryDetail() {
  const { slug } = useParams()
  const ind = INDUSTRIES.find((x) => x.slug === slug)
  if (!ind) return <NotFound />
  const path = `/industries/${ind.slug}`
  const others = INDUSTRIES.filter((x) => x.slug !== ind.slug)
  return (
    <>
      <Seo
        title={ind.seoTitle}
        description={ind.seoDescription}
        path={path}
        image={ind.image}
        jsonLd={[orgJsonLd(), breadcrumb([['Home', '/'], ['Industries', '/industries'], [ind.title, path]])]}
      />
      <PageHero crumbs={[['Home', '/'], ['Industries', '/industries'], [ind.title]]} eyebrow={ind.badge} title={ind.headline} text={ind.intro} image={ind.image}>
        <div className="hero-actions"><Button to="/contact">Talk to us <Icon name="ArrowRight" size={18} /></Button></div>
      </PageHero>

      <section className="section">
        <div className="container two-col">
          <div>
            <SectionHead eyebrow="What you get" title="What this *looks like.*" />
            <Checklist items={ind.points} />
            <p className="proof big">{ind.proof}</p>
          </div>
          <div className="aside-card">
            <h3>Talk to the people who will build it</h3>
            <p>Tell us what you need. We reply with questions, a rough plan and a price range. No obligation.</p>
            <Button to="/contact">Book a consultation</Button>
          </div>
        </div>
      </section>

      <section className="section tint">
        <div className="container">
          <SectionHead eyebrow="Solutions" title="Where we would *start.*" />
          <div className="card-grid cols-2">
            {ind.solutions.map(([t, to, d]) => (
              <Link to={to} key={t} className="card plain link-card">
                <div className="card-body"><h3>{t}</h3><p>{d}</p><span className="more">Learn more <Icon name="ArrowRight" size={16} /></span></div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead eyebrow="More industries" title="Also *serving.*" />
          <div className="card-grid cols-3">
            {others.map((o) => (
              <Link to={`/industries/${o.slug}`} key={o.slug} className="card plain link-card">
                <div className="card-body"><span className={`badge ${o.live ? 'ok' : 'plain'}`}>{o.badge}</span><h3>{o.title}</h3><p>{o.text}</p></div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  )
}
