import React from 'react';
import { X, Check, ArrowRight, Star, Award, Users, Clock } from 'lucide-react';
import '../styles/servicedetail.css';

function ServiceDetail({ service, isOpen, onClose, onGetQuote }) {
  if (!isOpen || !service) return null;

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$999',
      period: '/project',
      description: 'Perfect for small projects and startups',
      features: [
        'Basic ' + service.title,
        '2-3 weeks delivery',
        '1 month support',
        'Basic features',
        'Email support',
        '2 revisions'
      ],
      recommended: false
    },
    {
      name: 'Professional',
      price: '$2,499',
      period: '/project',
      description: 'Ideal for growing businesses',
      features: [
        'Advanced ' + service.title,
        '3-4 weeks delivery',
        '3 months support',
        'All features included',
        'Priority support',
        'Unlimited revisions',
        'Source code included',
        'Deployment assistance'
      ],
      recommended: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'For large-scale projects',
      features: [
        'Custom ' + service.title,
        'Flexible timeline',
        '12 months support',
        'Premium features',
        '24/7 dedicated support',
        'Unlimited revisions',
        'Full source code',
        'DevOps setup',
        'Training included',
        'SLA guarantee'
      ],
      recommended: false
    }
  ];

  return (
    <div className="service-detail-overlay" onClick={onClose}>
      <div className="service-detail-modal" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className={`service-detail-header ${service.gradient}`}>
          <button className="service-detail-close" onClick={onClose} aria-label="Close">
            <X size={24} />
          </button>

          <div className="service-detail-header-content">
            <service.icon size={48} className="service-detail-icon" />
            <div>
              <h2>{service.title}</h2>
              <p>{service.subtitle}</p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="service-detail-content">
          {/* Overview */}
          <section className="service-detail-section">
            <h3>📋 Overview</h3>
            <p>{service.overview}</p>
          </section>

          {/* How We Build */}
          <section className="service-detail-section">
            <h3>🛠️ Our Development Process</h3>
            <div className="process-steps">
              {service.process.map((step, idx) => (
                <div key={idx} className="process-step">
                  <div className="process-step-number">{idx + 1}</div>
                  <div className="process-step-content">
                    <h4>{step.title}</h4>
                    <p>{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Key Features */}
          <section className="service-detail-section">
            <h3>✨ Key Features</h3>
            <div className="features-grid">
              {service.keyFeatures.map((feature, idx) => (
                <div key={idx} className="feature-card">
                  <div className="feature-icon">
                    <Check size={20} />
                  </div>
                  <div>
                    <h4>{feature.title}</h4>
                    <p>{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Technologies */}
          <section className="service-detail-section">
            <h3>💻 Technologies We Use</h3>
            <div className="tech-stack-grid">
              {service.technologies.map((tech, idx) => (
                <div key={idx} className="tech-badge">
                  {tech}
                </div>
              ))}
            </div>
          </section>

          {/* Pricing Plans */}
          <section className="service-detail-section pricing-section">
            <h3>💰 Pricing Plans</h3>
            <p className="pricing-subtitle">Choose the perfect plan for your project</p>

            <div className="pricing-grid">
              {pricingPlans.map((plan, idx) => (
                <div key={idx} className={`pricing-card ${plan.recommended ? 'recommended' : ''}`}>
                  {plan.recommended && (
                    <div className="recommended-badge">
                      <Star size={16} />
                      <span>Most Popular</span>
                    </div>
                  )}

                  <h4>{plan.name}</h4>
                  <div className="pricing-price">
                    <span className="price">{plan.price}</span>
                    <span className="period">{plan.period}</span>
                  </div>
                  <p className="pricing-description">{plan.description}</p>

                  <ul className="pricing-features">
                    {plan.features.map((feature, fIdx) => (
                      <li key={fIdx}>
                        <Check size={16} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    className={`pricing-button ${plan.recommended ? 'primary' : 'secondary'}`}
                    onClick={() => {
                      onClose();
                      onGetQuote();
                    }}
                  >
                    Get Started
                    <ArrowRight size={16} />
                  </button>
                </div>
              ))}
            </div>
          </section>

          {/* Why Choose Us */}
          <section className="service-detail-section why-us-section">
            <h3>🏆 Why Choose TechTrigger?</h3>
            <div className="why-us-grid">
              <div className="why-us-item">
                <Award size={32} />
                <h4>5+ Years Experience</h4>
                <p>Proven track record of delivering excellence</p>
              </div>
              <div className="why-us-item">
                <Users size={32} />
                <h4>Expert Team</h4>
                <p>Skilled developers and designers</p>
              </div>
              <div className="why-us-item">
                <Clock size={32} />
                <h4>On-Time Delivery</h4>
                <p>99% projects delivered on schedule</p>
              </div>
              <div className="why-us-item">
                <Star size={32} />
                <h4>Quality Assurance</h4>
                <p>Rigorous testing and quality checks</p>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="service-detail-cta">
            <h3>Ready to Start Your Project?</h3>
            <p>Get a free consultation and detailed quote for your project</p>
            <button
              className="cta-button"
              onClick={() => {
                onClose();
                onGetQuote();
              }}
            >
              Get Free Quote
              <ArrowRight size={20} />
            </button>
          </section>
        </div>
      </div>
    </div>
  );
}

export default ServiceDetail;
