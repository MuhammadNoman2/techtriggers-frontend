import { useState } from 'react'
import Seo from '../site/seo'
import { orgJsonLd, breadcrumb } from '../site/seoData'
import { FOUNDERS, VALUES } from '../site/data'
import { SITE } from '../site/config'
import { PageHero, SectionHead, CtaBand, Icon } from '../components/UI'

function Founder({ f }) {
  const [broken, setBroken] = useState(false)
  const initials = f.name.split(' ').map((n) => n[0]).join('')
  return (
    <article className="founder">
      <div className="founder-photo">
        {broken
          ? <div className="founder-initials" aria-hidden="true">{initials}</div>
          : <img src={f.photo} alt={`${f.name}, ${f.role} of TechTrigger`} width="600" height="750" loading="lazy" onError={() => setBroken(true)} />}
      </div>
      <h3>{f.name}</h3>
      <p className="role">{f.role}</p>
      <p>{f.bio}</p>
      <ul className="tags">{f.focus.map((t) => <li key={t}>{t}</li>)}</ul>
      <p className="edu">{f.education}</p>
    </article>
  )
}

export default function About() {
  return (
    <>
      <Seo
        title="About us"
        description="Meet the three founders of TechTrigger, a software company in Rawalpindi. Our story, our values and the clients we build for."
        path="/about"
        jsonLd={[orgJsonLd(), breadcrumb([['Home', '/'], ['About', '/about']])]}
      />
      <PageHero
        crumbs={[['Home', '/'], ['About us']]}
        eyebrow="Who we are"
        title="Three founders. One goal: software people actually use."
        text="We are a software company in Rawalpindi, Pakistan. We design, build, host and support learning platforms, apps and web portals."
        image="/images/team-workshop.jpg"
      />

      <section className="section">
        <div className="container narrow">
          <SectionHead eyebrow="Our story" title="From one college’s needs to a platform for many." />
          <div className="prose">
            <p>
              TechTrigger began with a plain question: how can a college give every student a better way to learn, and every teacher a
              simpler way to track it? Dar-e-Arqam Group of Colleges was the first to ask it with us.
            </p>
            <p>
              We built <strong>DAC AI</strong>, the college app, with online classes, quizzes, progress reports and AI study tools. Dar-e-Arqam Schools
              came next, and we built <strong>Ilmi Duniya</strong> for school students. Then a web portal so administrators and teachers could manage everything
              from a computer.
            </p>
            <p>
              Along the way we turned that work into a platform. A new school or college can now be set up from a single super-admin panel, with its own address,
              branding, users and data. Same system, separate institution.
            </p>
            <p>
              Dar-e-Arqam Group of Colleges and Dar-e-Arqam Schools are our first and best clients. They still shape what we build, because real users find
              problems that no plan does.
            </p>
            <p>
              Today we are building more for institutions, taking on web and app projects for businesses, and developing a shared inbox for teams that
              answer customers on WhatsApp.
            </p>
          </div>
        </div>
      </section>

      <section className="section tint" id="founders">
        <div className="container">
          <SectionHead eyebrow="Founders" title="The people behind TechTrigger." center />
          <div className="founders">
            {FOUNDERS.map((f) => <Founder key={f.name} f={f} />)}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead eyebrow="Values" title="How we work with clients." />
          <div className="card-grid cols-2">
            {VALUES.map(([t, d]) => (
              <div className="card plain" key={t}><div className="card-body"><h3>{t}</h3><p>{d}</p></div></div>
            ))}
          </div>
        </div>
      </section>

      <section className="section tint">
        <div className="container narrow center">
          <SectionHead eyebrow="Find us" title="Visit our office in Rawalpindi" center />
          <p className="lead"><Icon name="MapPin" size={18} /> {SITE.address.street}, {SITE.address.city}, {SITE.address.region} {SITE.address.postalCode}, {SITE.address.country}</p>
        </div>
      </section>
      <CtaBand />
    </>
  )
}
