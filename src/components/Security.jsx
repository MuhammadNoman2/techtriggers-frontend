import React from 'react';
import { Shield, Lock, Eye, Server, AlertCircle, CheckCircle } from 'lucide-react';
import '../styles/policy.css';

const Security = () => {
  return (
    <div className="policy-page">
      <div className="policy-hero">
        <Shield size={64} />
        <h1>Security Policy</h1>
        <p>How we protect your data and maintain security</p>
      </div>

      <div className="policy-container">
        <section className="policy-section">
          <h2><Lock size={24} /> Data Security</h2>
          <p>
            At TechTrigger, we take data security seriously. We implement industry-standard security measures
            to protect your information from unauthorized access, alteration, disclosure, or destruction.
          </p>
          <ul>
            <li>All data transmission is encrypted using SSL/TLS protocols</li>
            <li>Passwords are hashed using secure algorithms</li>
            <li>Regular security audits and penetration testing</li>
            <li>Multi-factor authentication for sensitive operations</li>
            <li>Continuous monitoring for suspicious activities</li>
          </ul>
        </section>

        <section className="policy-section">
          <h2><Server size={24} /> Infrastructure Security</h2>
          <p>
            Our infrastructure is built on secure, reliable platforms with multiple layers of protection:
          </p>
          <ul>
            <li>Cloud hosting on enterprise-grade platforms (AWS, Azure)</li>
            <li>Regular automated backups with encryption</li>
            <li>Firewall protection and intrusion detection systems</li>
            <li>DDoS protection and traffic monitoring</li>
            <li>Isolated environments for development and production</li>
          </ul>
        </section>

        <section className="policy-section">
          <h2><Eye size={24} /> Access Control</h2>
          <p>
            We maintain strict access controls to ensure only authorized personnel can access sensitive data:
          </p>
          <ul>
            <li>Role-based access control (RBAC)</li>
            <li>Principle of least privilege</li>
            <li>Regular access reviews and audits</li>
            <li>Secure credential management</li>
            <li>Audit logs for all access activities</li>
          </ul>
        </section>

        <section className="policy-section">
          <h2><CheckCircle size={24} /> Compliance</h2>
          <p>
            We adhere to international security standards and best practices:
          </p>
          <ul>
            <li>GDPR compliance for data protection</li>
            <li>OWASP Top 10 security practices</li>
            <li>Regular security training for all employees</li>
            <li>Incident response plan and procedures</li>
            <li>Third-party security assessments</li>
          </ul>
        </section>

        <section className="policy-section">
          <h2><AlertCircle size={24} /> Reporting Security Issues</h2>
          <p>
            If you discover a security vulnerability, please report it to us immediately:
          </p>
          <div className="policy-contact">
            <p><strong>Email:</strong> security@techtrigger.org</p>
            <p><strong>Response Time:</strong> Within 24 hours</p>
          </div>
          <p>
            We appreciate responsible disclosure and will work with you to address any security concerns promptly.
          </p>
        </section>

        <section className="policy-section">
          <h2>Your Responsibilities</h2>
          <p>
            We encourage our users to follow security best practices:
          </p>
          <ul>
            <li>Use strong, unique passwords</li>
            <li>Enable two-factor authentication when available</li>
            <li>Keep your devices and software updated</li>
            <li>Be cautious of phishing attempts</li>
            <li>Report suspicious activities immediately</li>
          </ul>
        </section>

        <div className="policy-footer">
          <p><strong>Last Updated:</strong> January 2025</p>
          <p>For questions about our security practices, contact us at <a href="mailto:security@techtrigger.org">security@techtrigger.org</a></p>
        </div>
      </div>
    </div>
  );
};

export default Security;
