import { Link } from 'react-router-dom'
import Seo from '../site/seo'
import { orgJsonLd, breadcrumb } from '../site/seoData'
import { INDUSTRIES } from '../site/data'
import { PageHero, CtaBand, Icon } from '../components/UI'

export default function Industries() {
  return (
    <>
      <Seo
        title="Industries We Serve"
        description="Tech Triggers builds software for schools and colleges, academies, small and medium businesses, and online retail in Pakistan."
        path="/industries"
        jsonLd={[orgJsonLd(), breadcrumb([['Home', '/'], ['Industries', '/industries']])]}
      />
      <PageHero
        crumbs={[['Home', '/'], ['Industries']]}
        eyebrow="Who we serve"
        title="Education first, and open to businesses that need good software."
        text="Our live work is in education. We say that plainly, and we take on projects elsewhere when we are the right fit."
      />
      <section className="section">
        <div className="container">
          <div className="service-rows">
            {INDUSTRIES.map((i, n) => (
              <article className={`service-row${n % 2 ? ' flip' : ''}`} key={i.slug}>
                <div className="service-photo"><img src={i.image} alt="" width="1000" height="667" loading="lazy" /></div>
                <div>
                  <span className={`badge ${i.live ? 'ok' : 'plain'}`}>{i.badge}</span>
                  <h2>{i.title}</h2>
                  <p>{i.text}</p>
                  <Link className="btn btn-outline" to={`/industries/${i.slug}`}>Explore {i.title} <Icon name="ArrowRight" size={18} /></Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  )
}
