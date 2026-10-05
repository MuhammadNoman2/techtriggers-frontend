import { Link } from 'react-router-dom'
import Seo from '../site/seo'
import { orgJsonLd, breadcrumb } from '../site/seoData'
import { PRODUCTS, COMING_SOON } from '../site/data'
import { PageHero, Icon, CtaBand, Checklist } from '../components/UI'

export default function Products() {
  return (
    <>
      <Seo
        title="Products: DAC AI, Ilmi Duniya, LMS"
        description="DAC AI and Ilmi Duniya are live on Google Play for Dar-e-Arqam. See our web portal and multi-institution LMS platform for schools and colleges."
        path="/products"
        jsonLd={[orgJsonLd(), breadcrumb([['Home', '/'], ['Products', '/products']])]}
      />
      <PageHero
        crumbs={[['Home', '/'], ['Products']]}
        eyebrow="Our products"
        title="Software already in use at Dar-e-Arqam."
        text="Everything below is live. The two apps are on Google Play today, and the web portal and LMS platform run the same system."
      />
      <section className="section">
        <div className="container">
          <div className="service-rows">
            {PRODUCTS.map((p, i) => (
              <article className={`service-row${i % 2 ? ' flip' : ''}`} key={p.slug}>
                <div className="service-photo"><img src={p.image} alt="" width="1000" height="667" loading="lazy" /></div>
                <div>
                  <div className="meta"><span className="badge ok">{p.status}</span><span className="muted">{p.kind}</span></div>
                  <h2>{p.name}</h2>
                  <p>{p.summary}</p>
                  <p className="proof">For: {p.for}</p>
                  <div className="row-actions">
                    <Link className="btn btn-primary" to={`/products/${p.slug}`}>Details <Icon name="ArrowRight" size={18} /></Link>
                    {p.play && <a className="btn btn-outline" href={p.play} target="_blank" rel="noopener noreferrer">Google Play <Icon name="ExternalLink" size={16} /></a>}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section tint">
        <div className="container narrow">
          <span className="badge soon-badge">In development</span>
          <h2>{COMING_SOON.name}</h2>
          <p className="lead">{COMING_SOON.tagline}</p>
          <p>{COMING_SOON.text}</p>
          <Checklist items={COMING_SOON.points} />
          <p className="muted">Want to hear when it launches? <Link className="inline-link" to="/contact">Tell us</Link> and we will let you know.</p>
        </div>
      </section>
      <CtaBand title="Want this for your institution?" text="We can set up the LMS and apps under your own name. Talk to us about a demo." />
    </>
  )
}
