import Seo from '../site/seo'
import { orgJsonLd, breadcrumb } from '../site/seoData'
import { SITE } from '../site/config'
import { PageHero, Icon } from '../components/UI'
import ContactForm from '../components/ContactForm'

export default function Contact() {
  return (
    <>
      <Seo
        title="Contact us"
        description="Contact TechTrigger in Rawalpindi: call, WhatsApp, email or visit our office on Main GT Road. Book a free consultation."
        path="/contact"
        jsonLd={[
          orgJsonLd(),
          breadcrumb([['Home', '/'], ['Contact', '/contact']]),
          { '@context': 'https://schema.org', '@type': 'ContactPage', name: 'Contact TechTrigger', url: `${SITE.url}/contact/` },
        ]}
      />
      <PageHero
        crumbs={[['Home', '/'], ['Contact']]}
        eyebrow="Contact"
        title="Tell us what you need."
        text="Fill in the form, or reach us directly. We reply within one working day."
      />
      <section className="section">
        <div className="container contact-grid">
          <ContactForm />
          <div className="contact-side">
            <h2>Reach us directly</h2>
            <ul className="contact-cards">
              <li><Icon name="Phone" size={20} /><div><strong>Phone</strong><a href={`tel:${SITE.phoneRaw}`}>{SITE.phone}</a></div></li>
              <li><Icon name="MessageCircle" size={20} /><div><strong>WhatsApp</strong><a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer">Message us on WhatsApp</a></div></li>
              <li><Icon name="Mail" size={20} /><div><strong>Email</strong><a href={`mailto:${SITE.email}`}>{SITE.email}</a></div></li>
              <li><Icon name="MapPin" size={20} /><div><strong>Office</strong><span>{SITE.address.street}<br />{SITE.address.city}, {SITE.address.region} {SITE.address.postalCode}<br />{SITE.address.country}</span></div></li>
            </ul>
            <p className="muted">Visits are best by appointment, so someone is there to meet you.</p>
          </div>
        </div>
      </section>
    </>
  )
}
