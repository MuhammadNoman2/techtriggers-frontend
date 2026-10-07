import { Link } from 'react-router-dom'
import Seo from '../site/seo'
import { orgJsonLd, breadcrumb } from '../site/seoData'
import { SERVICES, PROCESS } from '../site/data'
import { PageHero, SectionHead, Icon, CtaBand } from '../components/UI'

export default function Services() {
  return (
    <>
      <Seo
        title="Software Development Services"
        description="Mobile apps, web applications, AI solutions, LMS platforms, UI/UX design and cloud hosting from Tech Triggers, a software company in Rawalpindi, Pakistan."
        path="/services"
        jsonLd={[orgJsonLd(), breadcrumb([['Home', '/'], ['Services', '/services']])]}
      />
      <PageHero
        crumbs={[['Home', '/'], ['Services']]}
        eyebrow="What we offer"
        title="Services that cover the whole job."
        text="Design it, build it, put it online and keep it running. We do all four, so nothing falls between suppliers."
      />
      <section className="section">
        <div className="container">
          <div className="service-rows">
            {SERVICES.map((s, i) => (
              <article className={`service-row${i % 2 ? ' flip' : ''}`} key={s.slug}>
                <div className="service-photo"><img src={s.image} alt="" width="1000" height="667" loading="lazy" /></div>
                <div>
                  <span className="card-icon"><Icon name={s.icon} size={20} /></span>
                  <h2>{s.title}</h2>
                  <p>{s.intro}</p>
                  <p className="proof">{s.proof}</p>
                  <Link className="btn btn-outline" to={`/services/${s.slug}`}>Details <Icon name="ArrowRight" size={18} /></Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section tint">
        <div className="container">
          <SectionHead eyebrow="Process" title="How a project runs" center />
          <ol className="steps row">
            {PROCESS.map(([t, d], i) => (
              <li key={t}><span className="step-n">{i + 1}</span><div><h3>{t}</h3><p>{d}</p></div></li>
            ))}
          </ol>
        </div>
      </section>
      <CtaBand />
    </>
  )
}
