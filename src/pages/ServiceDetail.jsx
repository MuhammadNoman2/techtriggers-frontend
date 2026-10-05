import { Link, useParams } from 'react-router-dom'
import Seo from '../site/seo'
import { orgJsonLd, breadcrumb } from '../site/seoData'
import { SERVICES, PRODUCTS } from '../site/data'
import { PageHero, SectionHead, Checklist, CtaBand, Button, Icon } from '../components/UI'
import NotFound from './NotFound'

export default function ServiceDetail() {
  const { slug } = useParams()
  const s = SERVICES.find((x) => x.slug === slug)
  if (!s) return <NotFound />
  const others = SERVICES.filter((x) => x.slug !== s.slug).slice(0, 3)
  const related = PRODUCTS.filter((p) => s.proof.includes(p.name))
  const path = `/services/${s.slug}`
  return (
    <>
      <Seo
        title={s.seoTitle}
        description={s.seoDescription}
        path={path}
        image={s.image}
        jsonLd={[
          orgJsonLd(),
          breadcrumb([['Home', '/'], ['Services', '/services'], [s.title, path]]),
          { '@context': 'https://schema.org', '@type': 'Service', name: s.title, description: s.seoDescription, provider: { '@id': 'https://techtrigger.org/#organization' }, areaServed: 'PK' },
        ]}
      />
      <PageHero crumbs={[['Home', '/'], ['Services', '/services'], [s.title]]} eyebrow="Service" title={s.title} text={s.intro} image={s.image}>
        <div className="hero-actions dark-text"><Button to="/contact">Discuss your project <Icon name="ArrowRight" size={18} /></Button></div>
      </PageHero>
      <section className="section">
        <div className="container two-col">
          <div>
            <SectionHead eyebrow="What is included" title="What we do under this service." />
            <Checklist items={s.points} />
            <p className="proof big">{s.proof}</p>
            {related.length > 0 && (
              <p>{related.map((p) => <Link key={p.slug} className="inline-link" to={`/products/${p.slug}`}>See {p.name} <Icon name="ArrowRight" size={14} /></Link>)}</p>
            )}
          </div>
          <div className="aside-card">
            <h3>Talk to the people who will build it</h3>
            <p>Tell us what you need. We will reply with questions, a rough plan and a price range. No obligation.</p>
            <Button to="/contact">Book a consultation</Button>
          </div>
        </div>
      </section>
      <section className="section tint">
        <div className="container">
          <SectionHead eyebrow="More services" title="Often paired with" />
          <div className="card-grid cols-3">
            {others.map((o) => (
              <Link to={`/services/${o.slug}`} key={o.slug} className="card plain link-card">
                <div className="card-body"><span className="card-icon"><Icon name={o.icon} size={20} /></span><h3>{o.title}</h3><p>{o.short}</p></div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  )
}
