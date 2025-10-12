import React from 'react';
import { Scale, FileText, UserCheck, Download, Trash2, Edit } from 'lucide-react';
import '../styles/policy.css';

const GDPR = () => {
  return (
    <div className="policy-page">
      <div className="policy-hero">
        <Scale size={64} />
        <h1>GDPR Compliance</h1>
        <p>Your data rights under the General Data Protection Regulation</p>
      </div>

      <div className="policy-container">
        <section className="policy-section">
          <h2><FileText size={24} /> What is GDPR?</h2>
          <p>
            The General Data Protection Regulation (GDPR) is a comprehensive data protection law that came
            into effect on May 25, 2018. It strengthens data protection for individuals within the European
            Union and addresses the export of personal data outside the EU.
          </p>
          <p>
            At TechTrigger, we are committed to full GDPR compliance and protecting the privacy rights of
            all our users, regardless of their location.
          </p>
        </section>

        <section className="policy-section">
          <h2><UserCheck size={24} /> Your Rights Under GDPR</h2>
          <p>As a data subject, you have the following rights:</p>

          <div className="policy-rights">
            <div className="policy-right-item">
              <h3>1. Right to Access</h3>
              <p>You have the right to request copies of your personal data.</p>
            </div>

            <div className="policy-right-item">
              <h3>2. Right to Rectification</h3>
              <p>You have the right to request correction of inaccurate or incomplete data.</p>
            </div>

            <div className="policy-right-item">
              <h3>3. Right to Erasure</h3>
              <p>You have the right to request deletion of your personal data ("right to be forgotten").</p>
            </div>

            <div className="policy-right-item">
              <h3>4. Right to Restrict Processing</h3>
              <p>You have the right to request restriction of processing your personal data.</p>
            </div>

            <div className="policy-right-item">
              <h3>5. Right to Data Portability</h3>
              <p>You have the right to request transfer of your data to another service.</p>
            </div>

            <div className="policy-right-item">
              <h3>6. Right to Object</h3>
              <p>You have the right to object to processing of your personal data.</p>
            </div>
          </div>
        </section>

        <section className="policy-section">
          <h2><Download size={24} /> Data We Collect</h2>
          <p>We collect and process the following types of personal data:</p>
          <ul>
            <li><strong>Identity Data:</strong> Name, email address, phone number</li>
            <li><strong>Technical Data:</strong> IP address, browser type, device information</li>
            <li><strong>Usage Data:</strong> How you use our website and services</li>
            <li><strong>Communication Data:</strong> Your correspondence with us</li>
          </ul>
        </section>

        <section className="policy-section">
          <h2>Legal Basis for Processing</h2>
          <p>We process your personal data based on:</p>
          <ul>
            <li><strong>Consent:</strong> You have given clear consent for specific processing</li>
            <li><strong>Contract:</strong> Processing is necessary for a contract with you</li>
            <li><strong>Legal Obligation:</strong> Processing is necessary to comply with law</li>
            <li><strong>Legitimate Interest:</strong> Processing is in our legitimate business interests</li>
          </ul>
        </section>

        <section className="policy-section">
          <h2>Data Retention</h2>
          <p>
            We only retain your personal data for as long as necessary to fulfill the purposes for which
            it was collected, including legal, accounting, or reporting requirements.
          </p>
          <ul>
            <li>Account data: Retained while your account is active</li>
            <li>Communication records: Retained for 3 years</li>
            <li>Analytics data: Anonymized after 24 months</li>
          </ul>
        </section>

        <section className="policy-section">
          <h2>Data Security</h2>
          <p>
            We implement appropriate technical and organizational measures to protect your personal data
            against unauthorized or unlawful processing, accidental loss, destruction, or damage.
          </p>
        </section>

        <section className="policy-section">
          <h2>International Data Transfers</h2>
          <p>
            When we transfer your personal data outside the EU, we ensure appropriate safeguards are in
            place, such as standard contractual clauses approved by the European Commission.
          </p>
        </section>

        <section className="policy-section">
          <h2><Edit size={24} /> Exercising Your Rights</h2>
          <p>
            To exercise any of your GDPR rights, please contact us at:
          </p>
          <div className="policy-contact">
            <p><strong>Email:</strong> privacy@techtrigger.org</p>
            <p><strong>Data Protection Officer:</strong> dpo@techtrigger.org</p>
            <p><strong>Response Time:</strong> Within 30 days</p>
          </div>
          <p>
            You also have the right to lodge a complaint with your local data protection authority if
            you believe we have not handled your data appropriately.
          </p>
        </section>

        <div className="policy-footer">
          <p><strong>Last Updated:</strong> January 2025</p>
          <p>For questions about GDPR compliance, contact us at <a href="mailto:privacy@techtrigger.org">privacy@techtrigger.org</a></p>
        </div>
      </div>
    </div>
  );
};

export default GDPR;
