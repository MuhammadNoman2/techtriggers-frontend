import React, { useState, useEffect } from 'react';
import { Send, Mail, Phone, MapPin, MessageCircle } from 'lucide-react';
import '../styles/contact.css';
import { submitContact } from '../backend/services/contactService';
import { validateContactForm } from '../utils/validation';

function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Snackbar logic: auto-hide after 4 seconds
  useEffect(() => {
    if (success) {
      const timer = setTimeout(() => setSuccess(false), 4000);
      return () => clearTimeout(timer);
    }
  }, [success]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form
    const validationErrors = validateContactForm(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    setErrors({});

    try {
      const response = await submitContact(formData);
      console.log("API Response:", response);

      if (response.success) {
        console.log("Contact submitted", formData);
        setSuccess(true);
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          message: ''
        });
        setErrors({});
      } else {
        setErrors({ submit: response.message || 'Submission failed.' });
      }
    } catch (error) {
      console.error("Error submitting contact form:", error);
      setErrors({ submit: 'An error occurred while submitting the form.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="contact-section" id="contact">
      {/* Snackbar */}
      {success && (
        <div className="snackbar success">
          Your message has been sent successfully!
        </div>
      )}

      {errors.submit && (
        <div className="snackbar error">
          {errors.submit}
        </div>
      )}
      {/* Background Elements */}
      <div className="contact-background">
        <div className="contact-blob-1"></div>
        <div className="contact-blob-2"></div>
      </div>
      
      {/* Geometric Patterns */}
      <div className="contact-patterns">
        <div className="contact-pattern-1"></div>
        <div className="contact-pattern-2"></div>
      </div>

      <div className="contact-container">
        <div className="contact-content">
          {/* Badge */}
          <div className="contact-badge">
            <MessageCircle size={16} />
            <span>Let's Talk</span>
          </div>

          {/* Title */}
          <h2 className="contact-title">
            Ready to Start Your{" "}
            <span className="contact-title-gradient">Project?</span>
          </h2>

          {/* Subtitle */}
          <p className="contact-subtitle">
            Get in touch with our team of experts. We're here to help bring your ideas to life with cutting-edge technology solutions.
          </p>

          {/* Contact Info */}
          <div className="contact-info">
            <div className="contact-info-item">
              <div className="contact-info-icon">
                <Mail size={24} />
              </div>
              <div className="contact-info-content">
                <h4>Email Us</h4>
                <p>techtriggers76@gmail.com</p>
              </div>
            </div>

            <div className="contact-info-item">
              <div className="contact-info-icon">
                <Phone size={24} />
              </div>
              <div className="contact-info-content">
                <h4>Call Us</h4>
                <p>+92 337 6279457</p>
              </div>
            </div>

            <div className="contact-info-item">
              <div className="contact-info-icon">
                <MapPin size={24} />
              </div>
              <div className="contact-info-content">
                <h4>Visit Us</h4>
                <p>Office number 2 main GT road opposite PSO pump Rawalpindi</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="contact-form-group">
            <div className="contact-form-row">
              <div>
                <label htmlFor="firstName" className="contact-form-label">First Name</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  autoComplete="given-name"
                  className={`contact-form-input ${errors.firstName ? 'input-error' : ''}`}
                  placeholder="John"
                  value={formData.firstName}
                  onChange={handleChange}
                />
                {errors.firstName && <span className="error-message">{errors.firstName}</span>}
              </div>
              <div>
                <label htmlFor="lastName" className="contact-form-label">Last Name</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  autoComplete="family-name"
                  className={`contact-form-input ${errors.lastName ? 'input-error' : ''}`}
                  placeholder="Doe"
                  value={formData.lastName}
                  onChange={handleChange}
                />
                {errors.lastName && <span className="error-message">{errors.lastName}</span>}
              </div>
            </div>
          </div>

          <div className="contact-form-group">
            <label htmlFor="email" className="contact-form-label">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              autoComplete="email"
              className={`contact-form-input ${errors.email ? 'input-error' : ''}`}
              placeholder="john@example.com"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <span className="error-message">{errors.email}</span>}
          </div>

          <div className="contact-form-group">
            <label htmlFor="phone" className="contact-form-label">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              autoComplete="tel"
              className={`contact-form-input ${errors.phone ? 'input-error' : ''}`}
              placeholder="+92 337 6279457"
              value={formData.phone}
              onChange={handleChange}
            />
            {errors.phone && <span className="error-message">{errors.phone}</span>}
          </div>

          <div className="contact-form-group">
            <label htmlFor="message" className="contact-form-label">Message</label>
            <textarea
              id="message"
              name="message"
              autoComplete="off"
              className={`contact-form-textarea ${errors.message ? 'input-error' : ''}`}
              placeholder="Tell us about your project..."
              value={formData.message}
              onChange={handleChange}
            ></textarea>
            {errors.message && <span className="error-message">{errors.message}</span>}
          </div>

          <button type="submit" className="contact-form-button" disabled={isSubmitting}>
            {isSubmitting ? (
              <>
                <div className="spinner"></div>
                <span>Sending...</span>
              </>
            ) : (
              <>
                <span>Send Message</span>
                <Send size={20} />
              </>
            )}
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;