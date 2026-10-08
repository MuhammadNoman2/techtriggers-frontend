import Seo from '../site/seo'
import { orgJsonLd, breadcrumb } from '../site/seoData'
import { PageHero, SectionHead, CtaBand, Button, Icon } from '../components/UI'
import { Reveal } from '../components/motion'
import { ServiceBento, ProductCards, SalesBanner } from '../components/Sections'
import { PROCESS } from '../site/data'

export default function WhatWeDo() {
  return (
    <>
      <Seo
        title="What We Do: Services and Products"
        description="Mobile apps, web apps, AI, LMS platforms, UI/UX, hosting and our own products, including the upcoming WhatsApp Sales Desk. By Tech Triggers, Rawalpindi."
        path="/what-we-do"
        jsonLd={[orgJsonLd(), breadcrumb([['Home', '/'], ['What we do', '/what-we-do']])]}
      />
      <PageHero
        crumbs={[['Home', '/'], ['What we do']]}
        eyebrow="What we do"
        title="Services and products from one small, hands-on team."
        text="We design, build, host and support software. Some of it we build for you, and some we build ourselves and offer as products."
      />

      <section className="section" id="services">
        <div className="container">
          <SectionHead eyebrow="Services" title="Built for you, *end to end.*" text="Six services that cover the whole job, so nothing falls between suppliers." />
          <ServiceBento />
          <Reveal className="center more-row"><Button to="/services" variant="outline">Compare all services <Icon name="ArrowRight" size={18} /></Button></Reveal>
        </div>
      </section>

      <section className="section tint" id="products">
        <div className="container">
          <SectionHead eyebrow="Products" title="Ready to use, *proven with Dar-e-Arqam.*" text="Two apps on Google Play, a web portal, an LMS platform and the WhatsApp Sales Desk." />
          <ProductCards />
        </div>
      </section>

      <SalesBanner />

      <section className="section">
        <div className="container">
          <SectionHead eyebrow="Process" title="How a project *runs.*" center />
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
