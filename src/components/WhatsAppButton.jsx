import { Icon } from './UI'
import { SITE } from '../site/config'

export default function WhatsAppButton() {
  const href = `${SITE.whatsapp}?text=${encodeURIComponent('Hello Tech Triggers, I would like to know more about your services.')}`
  return (
    <a className="wa-fab" href={href} target="_blank" rel="noopener noreferrer" aria-label="Chat with Tech Triggers on WhatsApp">
      <Icon name="MessageCircle" size={26} />
      <span>WhatsApp</span>
    </a>
  )
}
