import { Link, useParams } from 'react-router-dom'
import Seo from '../site/seo'
import { orgJsonLd, breadcrumb } from '../site/seoData'
import { PRODUCTS } from '../site/data'
import { PageHero, SectionHead, CtaBand, Button, Icon, StatusBadge } from '../components/UI'
import NotFound from './NotFound'

export default function ProductDetail() {
  const { slug } = useParams()
  const p = PRODUCTS.find((x) => x.slug === slug)
  if (!p) return <NotFound />
  const path = `/products/${p.slug}`
  const app = p.play && {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: p.name,
    applicationCategory: 'EducationalApplication',
    operatingSystem: 'Android',
    url: p.play,
    description: p.seoDescription,
    publisher: { '@id': 'https://techtrigger.org/#organization' },
  }
  return (
    <>
      <Seo
        title={p.seoTitle}
        description={p.seoDescription}
        path={path}
        image={p.image}
        jsonLd={[orgJsonLd(), breadcrumb([['Home', '/'], ['Products', '/products'], [p.name, path]]), ...(app ? [app] : [])]}
      />
      <PageHero crumbs={[['Home', '/'], ['Products', '/products'], [p.name]]} eyebrow={p.kind} title={p.name} text={p.tagline} image={p.image}>
        <div className="hero-actions">
          {p.play && <Button href={p.play} target="_blank" rel="noopener noreferrer">Get it on Google Play <Icon name="ExternalLink" size={16} /></Button>}
          {p.cta ? <Button to={p.cta.to}>{p.cta.label} <Icon name="ArrowRight" size={18} /></Button> : <Button to="/contact" variant="ghost">Ask for a demo</Button>}
        </div>
        <p className="muted small"><StatusBadge p={p} /> {p.downloads}</p>
      </PageHero>
      <section className="section">
        <div className="container narrow">
          <p className="lead">{p.summary}</p>
          <p className="proof">Built for: {p.for}. Built by Tech Triggers.</p>
          {p.note && <p className="muted small">{p.note}</p>}
        </div>
      </section>
      {p.screens && (
        <section className="section">
          <div className="container">
            <SectionHead eyebrow="Inside the product" title={`A look inside *${p.name}.*`} text="Screens from our private test version. Names and phone numbers are blurred." />
            <div className="screens">
              {p.screens.map((sc) => (
                <figure key={sc.src}>
                  <img src={sc.src} alt={sc.alt} width="1600" height="952" loading="lazy" />
                  <figcaption>{sc.caption}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>
      )}
      {p.gallery && (
        <section className="section">
          <div className="container">
            <SectionHead eyebrow="Screens" title={`${p.name} in the app`} text="Screenshots from the live Google Play listing." />
            <ul className="shots">
              {p.gallery.map((src, i) => (
                <li key={src}><img src={src} alt={`${p.name} app screen ${i + 1}`} width="405" height="900" loading="lazy" /></li>
              ))}
            </ul>
          </div>
        </section>
      )}
      <section className="section tint">
        <div className="container">
          <SectionHead eyebrow="Features" title={`What ${p.name} does`} />
          <div className="card-grid cols-2">
            {p.features.map(([t, d]) => (
              <div className="card plain" key={t}><div className="card-body"><h3>{t}</h3><p>{d}</p></div></div>
            ))}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <SectionHead eyebrow="Also from us" title="Related products" />
          <div className="card-grid cols-3">
            {PRODUCTS.filter((x) => x.slug !== p.slug).slice(0, 3).map((o) => (
              <Link to={`/products/${o.slug}`} key={o.slug} className="card plain link-card">
                <div className="card-body"><h3>{o.name}</h3><p>{o.tagline}</p><span className="more">Details <Icon name="ArrowRight" size={16} /></span></div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      {p.soon
        ? <CtaBand title="Want early access?" text="Tell us about your team and how you use WhatsApp today. We will contact you when the Sales Desk opens." />
        : <CtaBand title="Want this for your institution?" text="We can set it up under your own name and branding. Ask for a demo." />}
    </>
  )
}
