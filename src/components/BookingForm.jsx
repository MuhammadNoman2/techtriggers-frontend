import React, { useState } from 'react';
import { X, User, Briefcase, CheckCircle, Mail, Phone } from 'lucide-react';
import formConfig from '../data/formConfig.json';
import '../styles/quoteForm.css';
import { submitQuote } from '../backend/services/quoteService';
import { validateQuoteForm } from '../utils/validation';

function BookingForm({ isOpen, onClose }) {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    // Contact Info
    name: '',
    email: '',
    phone: '',

    // Service Info
    serviceType: '',
    budget: '',
    timeline: '',
    description: ''
  });

  const [snackbar, setSnackbar] = useState({ message: '', type: '' });


  const [errors, setErrors] = useState({});

  const showSnackbar = (message, type = 'success') => {
  setSnackbar({ message, type });
  setTimeout(() => setSnackbar({ message: '', type: '' }), 4000); // auto-hide after 4s
};

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleServiceSelect = (serviceId) => {
    setFormData(prev => ({
      ...prev,
      serviceType: serviceId
    }));

    // Clear service type error
    if (errors.serviceType) {
      setErrors(prev => ({ ...prev, serviceType: '' }));
    }
  };

  const validateStep = (step) => {
    const newErrors = validateQuoteForm(formData, step);
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(2);
    }
  };

  const prevStep = () => {
    setCurrentStep(1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateStep(2)) return;

    setIsSubmitting(true);

    try {
      // Simulate API call
      const response = await submitQuote(formData);

      console.log("API Response:", response);

      if (response.success) {
        // Optional: show success toast or do something with response
        const emailData = {
          to: formConfig.contactInfo.email,
          subject: `New Quote Request from ${formData.name}`,
          body: generateEmailContent()
        };

        console.log("Email notification:", emailData);

        setCurrentStep(3); 
         showSnackbar('Quote submitted successfully!', 'success');// or redirect/confirmation
      } else {
        setErrors({ submit: response.message || 'Submission failed.' });
         showSnackbar(response.message || 'Submission failed.', 'error');
      }

    } catch (error) {
      console.error('Submission error:', error);
      setErrors({ submit: 'Something went wrong. Please try again.' });
      showSnackbar('Something went wrong. Please try again.', 'error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const generateEmailContent = () => {
    const selectedService = formConfig.serviceTypes.find(
      service => service.id === formData.serviceType
    );

    return `
New Quote Request

Contact Information:
- Name: ${formData.name}
- Email: ${formData.email}
- Phone: ${formData.phone}

Service Details:
- Service: ${selectedService ? selectedService.name : 'Not specified'}
- Budget: ${formData.budget}
- Timeline: ${formData.timeline || 'Not specified'}

Project Description:
${formData.description}
    `;
  };

  const resetForm = () => {
    setCurrentStep(1);
    setFormData({
      name: '', email: '', phone: '',
      serviceType: '', budget: '', timeline: '', description: ''
    });
    setErrors({});
  };

  const handleClose = () => {
    resetForm();
    onClose();
  };

  const selectedService = formConfig.serviceTypes.find(
    service => service.id === formData.serviceType
  );

  if (!isOpen) return null;

  return (
      <>
     {snackbar.message && (
      <div className={`snackbar ${snackbar.type}`}>
        {snackbar.message}
      </div>
    )}

    {isOpen && (
      <div className="quote-overlay">
        <div className="quote-modal">
        {/* Header */}
        <div className="quote-header">
          <div>
            <h2>Get a Quote</h2>
            <p>Tell us about your project</p>
          </div>
          <button className="quote-close" onClick={handleClose}>
            <X size={24} />
          </button>
        </div>

        {/* Progress */}
        <div className="quote-progress">
          <div className="quote-progress-text">
            <span className="step">Step {currentStep} of 2</span>
            <span className="label">
              {currentStep === 1 ? 'Contact Info' : currentStep === 2 ? 'Project Details' : 'Complete'}
            </span>
          </div>
          <div className="quote-progress-bar">
            <div
              className="quote-progress-fill"
              style={{ width: `${(currentStep / 2) * 100}%` }}
            />
          </div>
        </div>

        {/* Content */}
        <div className="quote-content">
          {currentStep === 1 && (
            <div className="quote-step">
              <div className="quote-step-header">
                <div className="quote-step-icon contact">
                  <User size={20} />
                </div>
                <div className="quote-step-info">
                  <h3>Contact Information</h3>
                  <p>How can we reach you?</p>
                </div>
              </div>

              <div className="quote-form-grid">
                <div className="quote-form-group">
                  <label htmlFor="quote-name">Full Name *</label>
                  <input
                    type="text"
                    id="quote-name"
                    name="name"
                    autoComplete="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={errors.name ? 'error' : ''}
                    placeholder="John Doe"
                  />
                  {errors.name && <span className="error-message">{errors.name}</span>}
                </div>

                <div className="quote-form-group">
                  <label htmlFor="quote-email">Email Address *</label>
                  <input
                    type="email"
                    id="quote-email"
                    name="email"
                    autoComplete="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={errors.email ? 'error' : ''}
                    placeholder="john@company.com"
                  />
                  {errors.email && <span className="error-message">{errors.email}</span>}
                </div>

                <div className="quote-form-group">
                  <label htmlFor="quote-phone">Phone Number *</label>
                  <input
                    type="tel"
                    id="quote-phone"
                    name="phone"
                    autoComplete="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className={errors.phone ? 'error' : ''}
                    placeholder="+1 (555) 123-4567"
                  />
                  {errors.phone && <span className="error-message">{errors.phone}</span>}
                </div>
              </div>
            </div>
          )}

          {currentStep === 2 && (
            <div className="quote-step">
              <div className="quote-step-header">
                <div className="quote-step-icon service">
                  <Briefcase size={20} />
                </div>
                <div className="quote-step-info">
                  <h3>Project Details</h3>
                  <p>What service do you need?</p>
                </div>
              </div>

              <div className="quote-form-grid">
                <div className="quote-form-group">
                  <label>Select Service *</label>
                  <div className="service-grid">
                    {formConfig.serviceTypes.map(service => (
                      <div
                        key={service.id}
                        className={`service-card ${formData.serviceType === service.id ? 'selected' : ''}`}
                        onClick={() => handleServiceSelect(service.id)}
                      >
                        <div className="service-card-header">
                          <span className="service-card-icon">{service.icon}</span>
                          <h4 className="service-card-title">{service.name}</h4>
                        </div>
                        <div className="service-card-services">
                          {service.services.map(subService => (
                            <span key={subService} className="service-tag">
                              {subService}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                  {errors.serviceType && <span className="error-message">{errors.serviceType}</span>}
                </div>

                <div className="quote-form-grid quote-grid-2">
                  <div className="quote-form-group">
                    <label htmlFor="quote-budget">Budget Range *</label>
                    <select
                      id="quote-budget"
                      name="budget"
                      autoComplete="off"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className={errors.budget ? 'error' : ''}
                    >
                      <option value="">Select budget</option>
                      {formConfig.budgetRanges.map(range => (
                        <option key={range} value={range}>{range}</option>
                      ))}
                    </select>
                    {errors.budget && <span className="error-message">{errors.budget}</span>}
                  </div>

                  <div className="quote-form-group">
                    <label htmlFor="quote-timeline">Timeline</label>
                    <select
                      id="quote-timeline"
                      name="timeline"
                      autoComplete="off"
                      value={formData.timeline}
                      onChange={handleInputChange}
                    >
                      <option value="">Select timeline</option>
                      {formConfig.timelines.map(timeline => (
                        <option key={timeline} value={timeline}>{timeline}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="quote-form-group">
                  <label htmlFor="quote-description">Project Description *</label>
                  <textarea
                    id="quote-description"
                    name="description"
                    autoComplete="off"
                    value={formData.description}
                    onChange={handleInputChange}
                    className={errors.description ? 'error' : ''}
                    placeholder="Describe your project requirements, goals, and any specific features you need..."
                    rows="4"
                  />
                  {errors.description && <span className="error-message">{errors.description}</span>}
                </div>
              </div>
            </div>
          )}

          {currentStep === 3 && (
            <div className="quote-step">
              <div className="quote-success">
                <div className="quote-success-icon">
                  <CheckCircle size={32} />
                </div>

                <h3>Quote Request Sent!</h3>
                <p>We'll review your project and send you a detailed quote within 24 hours.</p>

                <div className="quote-success-details">
                  <div className="quote-success-item">
                    <Mail size={16} />
                    <span>Quote will be sent to {formData.email}</span>
                  </div>
                  <div className="quote-success-item">
                    <Briefcase size={16} />
                    <span>Service: {selectedService ? selectedService.name : 'Not specified'}</span>
                  </div>
                  <div className="quote-success-item">
                    <span>💰</span>
                    <span>Budget: {formData.budget}</span>
                  </div>
                </div>

                <div className="quote-contact-info">
                  <h4>Need to discuss urgently?</h4>
                  <div className="quote-contact-item">
                    <Mail size={16} />
                    <a href={`mailto:${formConfig.contactInfo.email}`}>
                      {formConfig.contactInfo.email}
                    </a>
                  </div>
                  <div className="quote-contact-item">
                    <Phone size={16} />
                    <a href={formConfig.contactInfo.whatsapp} target="_blank" rel="noopener noreferrer">
                      {formConfig.contactInfo.phone} (WhatsApp)
                    </a>
                  </div>
                </div>

                <button
                  className="quote-button primary"
                  onClick={handleClose}
                  style={{ marginTop: '24px' }}
                >
                  Done
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Navigation */}
        {currentStep < 3 && (
          <div className="quote-navigation">
            {currentStep > 1 ? (
              <button
                className="quote-button secondary"
                onClick={prevStep}
                disabled={isSubmitting}
              >
                Previous
              </button>
            ) : (
              <div></div>
            )}

            {currentStep === 1 ? (
              <button
                className="quote-button primary"
                onClick={nextStep}
              >
                Continue
              </button>
            ) : (
              <button
                className="quote-button primary"
                onClick={handleSubmit}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <div className="quote-spinner"></div>
                    Sending Request...
                  </>
                ) : (
                  'Get Quote'
                )}
              </button>
            )}
          </div>
        )}

        {errors.submit && (
          <div className="quote-error-banner">
            <X size={20} />
            <span>{errors.submit}</span>
          </div>
        )}
      </div>
    </div>
      )}
      </>
  );
}

export default BookingForm;