import Seo from '../site/seo'
import { breadcrumb } from '../site/seoData'
import { SITE } from '../site/config'
import { PageHero } from '../components/UI'

const PAGES = {
  privacy: {
    title: 'Privacy Policy',
    updated: 'October 2026',
    description: 'How TechTrigger collects, uses and protects your personal information.',
    sections: [
      ['What we collect', ['Contact details you send us: name, email address, phone number and your message.', 'Basic technical data such as pages visited, if we use analytics (we will say so here if we do).']],
      ['How we use it', ['To reply to your enquiry and to deliver our services.', 'To send important updates about a project or service you asked about.', 'To meet legal obligations.']],
      ['Sharing', ['We do not sell or rent your personal data.', 'We may share it with service providers who help us operate, such as hosting and email, only as needed to deliver our service.']],
      ['Security and retention', ['We protect data with access controls and encrypted connections. We keep enquiry details only as long as needed to respond and to keep business records.']],
      ['Your rights', ['You can ask us to show, correct or delete your personal information at any time by emailing us.']],
      ['Changes', ['We may update this policy. The date at the top shows the latest version.']],
    ],
  },
  terms: {
    title: 'Terms & Conditions',
    updated: 'October 2026',
    description: 'The terms for using the TechTrigger website and services, including content, projects, liability and governing law in Pakistan.',
    sections: [
      ['Using this website', ['Use the site lawfully and do not try to disrupt it or access it without permission.']],
      ['Our content', ['Text, images, logos and design on this site belong to TechTrigger or are used under licence. Please do not copy them without written permission.']],
      ['Services and projects', ['Project scope, price, timeline and payment terms are agreed in writing before work starts. Anything on this website is general information, not an offer.']],
      ['Liability', ['This website is provided as is. To the extent allowed by law, we are not liable for indirect or consequential loss arising from its use.']],
      ['Governing law', ['These terms are governed by the laws of Pakistan.']],
    ],
  },
  cookies: {
    title: 'Cookie Policy',
    updated: 'October 2026',
    description: 'How the TechTrigger website uses cookies: we use no advertising or tracking cookies, and will update this page if that changes.',
    sections: [
      ['Our approach', ['This website does not use advertising or tracking cookies. It may store small technical items in your browser that are needed for the site to work.']],
      ['If this changes', ['If we add analytics or marketing tools, we will list them here and ask for your consent where required.']],
      ['Your choice', ['You can block or delete cookies in your browser settings. The site will still work.']],
    ],
  },
}

export default function Legal({ kind }) {
  const p = PAGES[kind]
  const path = `/${kind}`
  return (
    <>
      <Seo title={p.title} description={p.description} path={path} jsonLd={[breadcrumb([['Home', '/'], [p.title, path]])]} />
      <PageHero crumbs={[['Home', '/'], [p.title]]} title={p.title} text={`Last updated ${p.updated}`} />
      <section className="section">
        <div className="container narrow prose legal">
          {p.sections.map(([h, items]) => (
            <div key={h}>
              <h2>{h}</h2>
              <ul>{items.map((t) => <li key={t}>{t}</li>)}</ul>
            </div>
          ))}
          <p>Questions? Email <a href={`mailto:${SITE.email}`}>{SITE.email}</a>.</p>
        </div>
      </section>
    </>
  )
}
