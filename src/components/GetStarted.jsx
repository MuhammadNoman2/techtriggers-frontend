// components/GetStarted.jsx
import React from 'react';
import { Rocket, MessageSquare, Code, Zap, CheckCircle, ArrowRight, Calendar } from 'lucide-react';
import '../styles/getstarted.css';

function GetStarted({ startProject }) {


  return (
       <section className="getstarted-section" id="get-started">

        <div className="getstarted-background">
            <div className="getstarted-blob getstarted-blob-1"></div>
            <div className="getstarted-blob getstarted-blob-2"></div>
            <div className="getstarted-blob getstarted-blob-3"></div>
        </div>

        <div className="getstarted-particles">
            <div className="getstarted-particle getstarted-particle-1"></div>
            <div className="getstarted-particle getstarted-particle-2"></div>
            <div className="getstarted-particle getstarted-particle-3"></div>
        </div>

        <div className="getstarted-container">

            <div className="getstarted-badge">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 12l2 2 4-4"/>
                    <circle cx="12" cy="12" r="10"/>
                </svg>
                <span>Simple 3-Step Process</span>
            </div>


            <h2 className="getstarted-title">
                <span className="getstarted-title-gradient">Get Started</span> in 3 Easy Steps
            </h2>

            <p className="getstarted-subtitle">
                Transform your vision into reality with our streamlined approach. From initial consultation to final deployment, we ensure every step delivers exceptional value and results.
            </p>


            <div className="getstarted-steps">
                <div className="getstarted-step">
                    <div className="getstarted-step-number">1</div>
                    <div className="getstarted-step-icon">
                        <div className="getstarted-step-icon-glow"></div>
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                        </svg>
                    </div>
                    <h3>Discovery & Strategy</h3>
                    <p>
                        We begin with an in-depth consultation to understand your unique challenges, goals, and vision. Our experts analyze your requirements and craft a strategic roadmap tailored to your success.
                    </p>
                    <div className="getstarted-progress"></div>
                </div>

                <div className="getstarted-step">
                    <div className="getstarted-step-number">2</div>
                    <div className="getstarted-step-icon">
                        <div className="getstarted-step-icon-glow"></div>
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <polyline points="16 18 22 12 16 6"/>
                            <polyline points="8 6 2 12 8 18"/>
                        </svg>
                    </div>
                    <h3>Design & Development</h3>
                    <p>
                        Our skilled team brings your vision to life using cutting-edge technologies and industry best practices. We maintain transparent communication throughout the development process.
                    </p>
                    <div className="getstarted-progress"></div>
                </div>

                <div className="getstarted-step">
                    <div className="getstarted-step-number">3</div>
                    <div className="getstarted-step-icon">
                        <div className="getstarted-step-icon-glow"></div>
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/>
                            <path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/>
                            <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/>
                            <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/>
                        </svg>
                    </div>
                    <h3>Launch & Optimize</h3>
                    <p>
                        We ensure seamless deployment and provide comprehensive support for optimal performance. Our team continues to monitor, optimize, and scale your solution as you grow.
                    </p>
                </div>
            </div>

            <div className="getstarted-cta">
                <h3>Ready to Transform Your Business?</h3>
                <p>
                    Join over 500 satisfied clients who have revolutionized their operations with our innovative solutions. Let's discuss how we can accelerate your success and drive meaningful results.
                </p>

                <div className="getstarted-buttons">
                     <button className="getstarted-button-primary" onClick={startProject}>
                        <span>Request a service</span>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <line x1="5" y1="12" x2="19" y2="12"/>
                            <polyline points="12,5 19,12 12,19"/>
                        </svg>
                        <div className="getstarted-button-glow"></div>
                    </button>
                </div>

                <div className="getstarted-features">
                    <div className="getstarted-feature">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M9 12l2 2 4-4"/>
                            <circle cx="12" cy="12" r="10"/>
                        </svg>
                        <span>Free Consultation</span>
                    </div>
                    <div className="getstarted-feature">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M9 12l2 2 4-4"/>
                            <circle cx="12" cy="12" r="10"/>
                        </svg>
                        <span>Custom Solutions</span>
                    </div>
                    <div className="getstarted-feature">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M9 12l2 2 4-4"/>
                            <circle cx="12" cy="12" r="10"/>
                        </svg>
                        <span>24/7 Expert Support</span>
                    </div>
                    <div className="getstarted-feature">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M9 12l2 2 4-4"/>
                            <circle cx="12" cy="12" r="10"/>
                        </svg>
                        <span>Rapid Delivery</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}

export default GetStarted;