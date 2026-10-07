import { Link, useParams } from 'react-router-dom'
import Seo from '../site/seo'
import { orgJsonLd, breadcrumb } from '../site/seoData'
import { absolute } from '../site/config'
import { CASE_STUDY } from '../site/data'
import { PageHero, SectionHead, CtaBand, Icon } from '../components/UI'
import { Reveal } from '../components/motion'
import NotFound from './NotFound'

export default function CaseStudy() {
  const { slug } = useParams()
  if (slug !== CASE_STUDY.slug) return <NotFound />
  const c = CASE_STUDY
  const path = `/case-studies/${c.slug}`
  return (
    <>
      <Seo
        title={c.seoTitle}
        description={c.seoDescription}
        path={path}
        image="/images/product-dac-ai.jpg"
        type="article"
        jsonLd={[
          orgJsonLd(),
          breadcrumb([['Home', '/'], ['Case study', path]]),
          {
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: c.seoTitle,
            description: c.seoDescription,
            image: absolute('/images/product-dac-ai.jpg'),
            datePublished: '2026-10-07',
            author: { '@id': 'https://techtrigger.org/#organization' },
            publisher: { '@id': 'https://techtrigger.org/#organization' },
            mainEntityOfPage: absolute(`${path}/`),
          },
        ]}
      />
      <PageHero crumbs={[['Home', '/'], ['Case study']]} eyebrow="Case study" title={c.title} text={c.intro} image="/images/product-dac-ai.jpg" />

      <section className="section">
        <div className="container">
          <dl className="glance">
            {c.glance.map(([k, v]) => (
              <Reveal key={k} className="glance-item"><dt>{k}</dt><dd>{v}</dd></Reveal>
            ))}
          </dl>
        </div>
      </section>

      <section className="section tint">
        <div className="container narrow">
          <SectionHead eyebrow="The goal" title="One place for *learning, teaching and tracking.*" />
          <div className="prose">{c.goal.map((t) => <p key={t}>{t}</p>)}</div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead eyebrow="What we built" title="Four products, *one system.*" />
          <div className="card-grid cols-2">
            {c.built.map(([t, to, d]) => (
              <Link to={to} key={t} className="card plain link-card">
                <div className="card-body"><h3>{t}</h3><p>{d}</p><span className="more">Details <Icon name="ArrowRight" size={16} /></span></div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section tint">
        <div className="container">
          <SectionHead eyebrow="Who uses it" title="Each person gets *their own view.*" />
          <div className="card-grid cols-4">
            {c.roles.map(([role, items]) => (
              <div className="card plain" key={role}>
                <div className="card-body">
                  <h3>{role}</h3>
                  <ul className="plain-list">{items.map((i) => <li key={i}>{i}</li>)}</ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container two-col">
          <div>
            <SectionHead eyebrow="Built around the syllabus" title="Content that matches *each student’s board.*" />
            <p className="lead">{c.syllabus}</p>
            <h3>Behind the scenes</h3>
            <ul className="plain-list">{c.behind.map((t) => <li key={t}>{t}</li>)}</ul>
          </div>
          <div className="aside-card">
            <h3>Recent update to DAC AI</h3>
            <p>From the latest release on Google Play:</p>
            <ul className="plain-list light">{c.recent.map((t) => <li key={t}>{t}</li>)}</ul>
          </div>
        </div>
      </section>

      <CtaBand title="Want something like this for your institution?" text="We can set up the LMS, apps and portal under your own name. Tell us about your school, college or academy." />
    </>
  )
}
