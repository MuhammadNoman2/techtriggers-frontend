import { useState } from 'react'
import { submitContact } from '../backend/services/contactService'
import { validateContactForm } from '../utils/validation'
import { SITE } from '../site/config'

const INTERESTS = [
  'Mobile app',
  'Website or web portal',
  'AI solution',
  'LMS for my school, college or academy',
  'UI/UX design',
  'Hosting and maintenance',
  'Something else',
]

const empty = { firstName: '', lastName: '', email: '', phone: '', organization: '', interest: INTERESTS[0], message: '', website: '' }

export default function ContactForm() {
  const [data, setData] = useState(empty)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | sending | sent

  const set = (e) => setData({ ...data, [e.target.name]: e.target.value })

  const submit = async (e) => {
    e.preventDefault()
    if (data.website) return // honeypot: real people never fill this in
    const v = validateContactForm(data)
    if (Object.keys(v).length) { setErrors(v); return }
    setErrors({})
    setStatus('sending')
    const message = `Interested in: ${data.interest}\n${data.organization ? `Organisation: ${data.organization}\n` : ''}\n${data.message}`
    const res = await submitContact({
      firstName: data.firstName, lastName: data.lastName, email: data.email, phone: data.phone, message,
    })
    if (res && res.success) { setStatus('sent'); setData(empty) }
    else {
      setStatus('idle')
      setErrors({ submit: 'We could not send your message just now.' })
    }
  }

  if (status === 'sent') {
    return (
      <div className="form-card form-success" role="status">
        <h3>Thank you. We have your message.</h3>
        <p>We will reply within one working day. If it is urgent, message us on <a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer">WhatsApp</a>.</p>
      </div>
    )
  }

  const Field = ({ name, label, type = 'text', required, autoComplete }) => (
    <div className="field">
      <label htmlFor={name}>{label}{required && <span aria-hidden="true"> *</span>}</label>
      <input id={name} name={name} type={type} value={data[name]} onChange={set} autoComplete={autoComplete}
        aria-invalid={!!errors[name]} aria-describedby={errors[name] ? `${name}-err` : undefined} />
      {errors[name] && <p className="err" id={`${name}-err`}>{errors[name]}</p>}
    </div>
  )

  return (
    <form className="form-card" onSubmit={submit} noValidate>
      <div className="grid-2">
        <Field name="firstName" label="First name" required autoComplete="given-name" />
        <Field name="lastName" label="Last name" required autoComplete="family-name" />
      </div>
      <div className="grid-2">
        <Field name="email" label="Email" type="email" required autoComplete="email" />
        <Field name="phone" label="Phone or WhatsApp" type="tel" autoComplete="tel" />
      </div>
      <Field name="organization" label="School, college or company" autoComplete="organization" />
      <div className="field">
        <label htmlFor="interest">I am interested in</label>
        <select id="interest" name="interest" value={data.interest} onChange={set}>
          {INTERESTS.map((i) => <option key={i}>{i}</option>)}
        </select>
      </div>
      <div className="field">
        <label htmlFor="message">How can we help? <span aria-hidden="true">*</span></label>
        <textarea id="message" name="message" rows="5" value={data.message} onChange={set}
          aria-invalid={!!errors.message} aria-describedby={errors.message ? 'message-err' : undefined} />
        {errors.message && <p className="err" id="message-err">{errors.message}</p>}
      </div>
      <div className="hp" aria-hidden="true">
        <label>Leave this empty<input name="website" tabIndex="-1" autoComplete="off" value={data.website} onChange={set} /></label>
      </div>
      {errors.submit && (
        <p className="err form-err" role="alert">
          {errors.submit} Please email <a href={`mailto:${SITE.email}`}>{SITE.email}</a> or message us on WhatsApp.
        </p>
      )}
      <button className="btn btn-primary" type="submit" disabled={status === 'sending'}>
        {status === 'sending' ? 'Sending…' : 'Send message'}
      </button>
      <p className="form-note">We use your details only to reply to you. See our <a href="/privacy/">privacy policy</a>.</p>
    </form>
  )
}
