import React from 'react';
import { Cookie, Settings, BarChart, Shield, CheckCircle } from 'lucide-react';
import '../styles/policy.css';

const Cookies = () => {
  return (
    <div className="policy-page">
      <div className="policy-hero">
        <Cookie size={64} />
        <h1>Cookie Policy</h1>
        <p>How we use cookies and similar technologies</p>
      </div>

      <div className="policy-container">
        <section className="policy-section">
          <h2>What Are Cookies?</h2>
          <p>
            Cookies are small text files that are placed on your device when you visit our website. They
            help us provide you with a better experience by remembering your preferences and understanding
            how you use our site.
          </p>
        </section>

        <section className="policy-section">
          <h2>Types of Cookies We Use</h2>

          <div className="policy-cookie-types">
            <div className="policy-cookie-type">
              <CheckCircle size={24} />
              <h3>Essential Cookies</h3>
              <p>
                These cookies are necessary for the website to function properly. They enable core
                functionality such as security, network management, and accessibility.
              </p>
              <p><strong>Examples:</strong> Session management, authentication, security</p>
            </div>

            <div className="policy-cookie-type">
              <BarChart size={24} />
              <h3>Analytics Cookies</h3>
              <p>
                These cookies help us understand how visitors interact with our website by collecting
                and reporting information anonymously.
              </p>
              <p><strong>Examples:</strong> Google Analytics, page views, traffic sources</p>
            </div>

            <div className="policy-cookie-type">
              <Settings size={24} />
              <h3>Functional Cookies</h3>
              <p>
                These cookies enable enhanced functionality and personalization, such as remembering
                your preferences and settings.
              </p>
              <p><strong>Examples:</strong> Language preferences, theme selection, user settings</p>
            </div>

            <div className="policy-cookie-type">
              <Shield size={24} />
              <h3>Security Cookies</h3>
              <p>
                These cookies help us identify and prevent security risks. They may be used to
                authenticate users and protect user data.
              </p>
              <p><strong>Examples:</strong> CSRF tokens, fraud detection, secure sessions</p>
            </div>
          </div>
        </section>

        <section className="policy-section">
          <h2>Third-Party Cookies</h2>
          <p>
            Some cookies are placed by third-party services that appear on our pages. We use the
            following third-party services:
          </p>
          <ul>
            <li><strong>Google Analytics:</strong> For website analytics and performance monitoring</li>
            <li><strong>Social Media Platforms:</strong> For social sharing and integration</li>
            <li><strong>Payment Processors:</strong> For secure payment processing (when applicable)</li>
          </ul>
        </section>

        <section className="policy-section">
          <h2>Cookie Duration</h2>
          <div className="policy-duration">
            <div className="policy-duration-item">
              <h3>Session Cookies</h3>
              <p>Temporary cookies that expire when you close your browser</p>
            </div>
            <div className="policy-duration-item">
              <h3>Persistent Cookies</h3>
              <p>Cookies that remain on your device for a set period or until you delete them</p>
            </div>
          </div>
        </section>

        <section className="policy-section">
          <h2>Managing Cookies</h2>
          <p>
            You have the right to decide whether to accept or reject cookies. You can manage your cookie
            preferences in several ways:
          </p>

          <h3>Browser Settings</h3>
          <p>
            Most web browsers allow you to control cookies through their settings. You can usually find
            these settings in the "Options" or "Preferences" menu of your browser.
          </p>

          <h3>Cookie Management Tools</h3>
          <ul>
            <li><strong>Google Chrome:</strong> Settings → Privacy and Security → Cookies</li>
            <li><strong>Mozilla Firefox:</strong> Options → Privacy & Security → Cookies</li>
            <li><strong>Safari:</strong> Preferences → Privacy → Cookies and website data</li>
            <li><strong>Microsoft Edge:</strong> Settings → Privacy, search, and services → Cookies</li>
          </ul>

          <p className="policy-warning">
            <strong>Note:</strong> Blocking all cookies may impact your experience on our website, as
            some features may not function properly.
          </p>
        </section>

        <section className="policy-section">
          <h2>Cookies We Use</h2>
          <div className="policy-cookie-table">
            <table>
              <thead>
                <tr>
                  <th>Cookie Name</th>
                  <th>Purpose</th>
                  <th>Duration</th>
                  <th>Type</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>session_id</td>
                  <td>Maintains user session</td>
                  <td>Session</td>
                  <td>Essential</td>
                </tr>
                <tr>
                  <td>_ga</td>
                  <td>Google Analytics tracking</td>
                  <td>2 years</td>
                  <td>Analytics</td>
                </tr>
                <tr>
                  <td>user_preferences</td>
                  <td>Stores user settings</td>
                  <td>1 year</td>
                  <td>Functional</td>
                </tr>
                <tr>
                  <td>csrf_token</td>
                  <td>Security protection</td>
                  <td>Session</td>
                  <td>Security</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="policy-section">
          <h2>Updates to This Policy</h2>
          <p>
            We may update this Cookie Policy from time to time to reflect changes in technology,
            legislation, or our business operations. We will notify you of any significant changes
            by posting the updated policy on this page.
          </p>
        </section>

        <section className="policy-section">
          <h2>Contact Us</h2>
          <p>
            If you have any questions about our use of cookies, please contact us:
          </p>
          <div className="policy-contact">
            <p><strong>Email:</strong> privacy@techtrigger.org</p>
            <p><strong>Phone:</strong> +92 337 6279457</p>
          </div>
        </section>

        <div className="policy-footer">
          <p><strong>Last Updated:</strong> January 2025</p>
          <p>For questions about our cookie policy, contact us at <a href="mailto:privacy@techtrigger.org">privacy@techtrigger.org</a></p>
        </div>
      </div>
    </div>
  );
};

export default Cookies;
