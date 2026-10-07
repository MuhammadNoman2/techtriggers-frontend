import Seo from '../site/seo'
import { orgJsonLd, breadcrumb } from '../site/seoData'
import { JOB } from '../site/data'
import { SITE } from '../site/config'
import { PageHero, SectionHead, Checklist, Icon } from '../components/UI'

export default function Careers() {
  const subject = encodeURIComponent(`Application: ${JOB.title}`)
  return (
    <>
      <Seo
        title="Marketing & Social Media Job, Rawalpindi"
        description="Join Tech Triggers in Rawalpindi as our Marketing & Social Media Specialist. Help a small software company with real products tell its story."
        path="/careers"
        image="/images/careers.jpg"
        jsonLd={[
          orgJsonLd(),
          breadcrumb([['Home', '/'], ['Careers', '/careers']]),
          {
            '@context': 'https://schema.org',
            '@type': 'JobPosting',
            title: JOB.title,
            description: `<p>${JOB.intro}</p><ul>${JOB.does.map((d) => `<li>${d}</li>`).join('')}</ul>`,
            datePosted: '2026-10-05',
            employmentType: 'FULL_TIME',
            hiringOrganization: { '@type': 'Organization', name: SITE.name, sameAs: SITE.url, logo: `${SITE.url}/images/logo-full.png` },
            jobLocation: { '@type': 'Place', address: { '@type': 'PostalAddress', addressLocality: 'Rawalpindi', addressRegion: 'Punjab', addressCountry: 'PK' } },
          },
        ]}
      />
      <PageHero
        crumbs={[['Home', '/'], ['Careers']]}
        eyebrow="Careers"
        title="Help us tell our story."
        text="We build real products used by real students. Now we need someone to make sure people hear about them."
        image="/images/careers.jpg"
      />
      <section className="section">
        <div className="container two-col">
          <div>
            <SectionHead eyebrow="Open role" title={JOB.title} />
            <ul className="job-meta">
              <li><Icon name="MapPin" size={16} /> {JOB.location}</li>
              <li><Icon name="Clock" size={16} /> {JOB.type}</li>
            </ul>
            <p className="lead">{JOB.intro}</p>
            <h3>What you will do</h3>
            <Checklist items={JOB.does} />
            <h3>What we are looking for</h3>
            <Checklist items={JOB.needs} />
            <h3>Nice to have</h3>
            <Checklist items={JOB.nice} />
          </div>
          <aside className="aside-card sticky">
            <h3>Apply</h3>
            <p>Email us a short note about yourself, your CV, and links to social pages you have managed. We read every application.</p>
            <a className="btn btn-primary" href={`mailto:${SITE.email}?subject=${subject}`}>Email your application</a>
            <p className="muted small">{SITE.email}</p>
            <hr />
            <p className="muted small">This is the only role open right now. We will post others here when they open.</p>
          </aside>
        </div>
      </section>
    </>
  )
}
