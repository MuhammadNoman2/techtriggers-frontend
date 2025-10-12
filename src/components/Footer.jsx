import React, { useState } from 'react';

import { 
  Twitter, 
  Linkedin, 
  Github, 
  MessageCircle, 
  Youtube, 
  Instagram,
  Mail,
  Phone,
  MapPin,
  Send,
  Award
} from 'lucide-react';
import footerData from '../data/footerData.json'; // Assuming you have a JSON file with footer data
import '../styles/footer.css';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubscribing, setIsSubscribing] = useState(false);

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;
    
    setIsSubscribing(true);
    
    // Simulate API call
    setTimeout(() => {
      alert('Thank you for subscribing!');
      setEmail('');
      setIsSubscribing(false);
    }, 1000);
  };

  const getSocialIcon = (iconName) => {
    const icons = {
      twitter: Twitter,
      linkedin: Linkedin,
      github: Github,
      discord: MessageCircle,
      youtube: Youtube,
      instagram: Instagram
    };
    return icons[iconName] || Mail;
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Main Footer Content */}
        <div className="footer-main">
          {/* Company Information */}
          <div className="footer-company">
            <div className="footer-logo">
              <div className="footer-logo-icon">
                {footerData.company.logo}
              </div>
              <span className="footer-logo-text">
                {footerData.company.name}
              </span>
            </div>
            
            <p className="footer-description">
              {footerData.company.description}
            </p>
            
            {/* Social Media Links */}
            <div className="footer-social">
              {footerData.socialMedia.map((social, index) => {
                const IconComponent = getSocialIcon(social.icon);
                return (
                  <a
                    key={index}
                    href={social.url}
                    className="footer-social-link"
                    style={{ '--social-color': social.color }}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Follow us on ${social.name}`}
                  >
                    <IconComponent />
                  </a>
                );
              })}
            </div>

            {/* Contact Information */}
            <div className="footer-contact">
              <div className="footer-contact-item">
                <Mail size={16} />
                <a href={`mailto:${footerData.contact.email}`}>
                  {footerData.contact.email}
                </a>
              </div>
              <div className="footer-contact-item">
                <Phone size={16} />
                <a href={`tel:${footerData.contact.phone}`}>
                  {footerData.contact.phone}
                </a>
              </div>
              <div className="footer-contact-item">
                <MapPin size={16} />
                <span>
                  {footerData.contact.address.street}, {footerData.contact.address.city}, {footerData.contact.address.state} {footerData.contact.address.zipCode}
                </span>
              </div>
            </div>

            {/* Awards */}
            <div className="footer-awards">
              <h4 className="footer-awards-title">
                <Award size={16} style={{ display: 'inline', marginRight: '0.5rem' }} />
                Recognition
              </h4>
              <div className="footer-awards-list">
                {footerData.awards.map((award, index) => (
                  <div key={index} className="footer-award">
                    {award.name} - {award.year}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Newsletter Subscription */}
          <div className="footer-newsletter">
            <h3 className="footer-newsletter-title">
              {footerData.newsletter.title}
            </h3>
            <p className="footer-newsletter-description">
              {footerData.newsletter.description}
            </p>
            <form className="footer-newsletter-form" onSubmit={handleNewsletterSubmit}>
              <input
                type="email"
                id="newsletter-email"
                name="newsletter-email"
                autoComplete="email"
                className="footer-newsletter-input"
                placeholder={footerData.newsletter.placeholder}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                aria-label="Email address for newsletter subscription"
              />
              <button
                type="submit"
                className="footer-newsletter-button"
                disabled={isSubscribing}
              >
                {isSubscribing ? (
                  'Subscribing...'
                ) : (
                  <>
                    <Send size={16} />
                    {footerData.newsletter.buttonText}
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Footer Links */}
        <div className="footer-links">
          <div className="footer-link-section">
            <h4 className="footer-link-title">Company</h4>
            <ul className="footer-link-list">
              {footerData.navigation.company.map((link, index) => (
                <li key={index} className="footer-link-item">
                  <a href={link.href} className="footer-link">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-link-section">
            <h4 className="footer-link-title">Services</h4>
            <ul className="footer-link-list">
              {footerData.navigation.services.map((link, index) => (
                <li key={index} className="footer-link-item">
                  <a href={link.href} className="footer-link">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-link-section">
            <h4 className="footer-link-title">Resources</h4>
            <ul className="footer-link-list">
              {footerData.navigation.resources.map((link, index) => (
                <li key={index} className="footer-link-item">
                  <a href={link.href} className="footer-link">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-link-section">
            <h4 className="footer-link-title">Legal</h4>
            <ul className="footer-link-list">
              {footerData.navigation.legal.map((link, index) => (
                <li key={index} className="footer-link-item">
                  <a href={link.href} className="footer-link">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="footer-copyright">
            © {currentYear} {footerData.company.name}. All rights reserved. 
            Established {footerData.company.established}.
          </div>
          <div className="footer-bottom-links">
            {footerData.navigation.legal.slice(0, 3).map((link, index) => (
              <a key={index} href={link.href} className="footer-bottom-link">
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;