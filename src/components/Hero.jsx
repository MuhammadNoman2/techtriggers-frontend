import React, { useEffect, useState } from "react";
import { Code, Rocket, Shield, ArrowRight, Star, Sparkles, Zap, Users } from "lucide-react";
import '../styles/hero.css';

function Hero() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePosition({
                x: (e.clientX / window.innerWidth) * 100,
                y: (e.clientY / window.innerHeight) * 100,
            });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className="hero" id="hero" aria-labelledby="hero-title">
            {/* Dynamic Background */}
            <div className="hero-background" aria-hidden="true">
                <div
                    className="hero-gradient-orb hero-gradient-orb-1"
                    style={{
                        transform: `translate(${mousePosition.x * 0.05}px, ${mousePosition.y * 0.05}px)`
                    }}
                ></div>
                <div
                    className="hero-gradient-orb hero-gradient-orb-2"
                    style={{
                        transform: `translate(${mousePosition.x * -0.03}px, ${mousePosition.y * -0.03}px)`
                    }}
                ></div>
                <div
                    className="hero-gradient-orb hero-gradient-orb-3"
                    style={{
                        transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.04}px)`
                    }}
                ></div>
            </div>

            {/* Floating Particles */}
            <div className="hero-particles" aria-hidden="true">
                <div className="hero-particle hero-particle-1"></div>
                <div className="hero-particle hero-particle-2"></div>
                <div className="hero-particle hero-particle-3"></div>
                <div className="hero-particle hero-particle-4"></div>
                <div className="hero-particle hero-particle-5"></div>
            </div>

            <div className="hero-container">
                {/* Badge */}
                <div className="hero-badge" role="status" aria-label="Trust indicator">
                    <div className="hero-badge-icon" aria-hidden="true">
                        <Sparkles size={16} />
                    </div>
                    <span>Trusted by 500+ companies worldwide</span>
                    <div className="hero-badge-pulse" aria-hidden="true"></div>
                </div>

                {/* Main Heading */}
                <h1 className="hero-title" id="hero-title">
                    Welcome to{" "}
                    <span className="hero-title-gradient">
                        TechTrigger
                        <div className="hero-title-underline" aria-hidden="true"></div>
                    </span>
                </h1>

                {/* Subheading */}
                <p className="hero-subtitle">
                    We build smart software solutions that power the future
                </p>
                <p className="hero-description">
                    Transform your ideas into reality with cutting-edge AI technology, innovative design, 
                    and expert development. Join the digital revolution today.
                </p>

                {/* Action Buttons */}
                <div className="hero-buttons" role="group" aria-label="Call to action buttons">
                    <button
                        className="hero-button-primary"
                        onClick={() => scrollToSection('get-started')}
                        aria-label="Get started with TechTriggers today"
                    >
                        <span>Get Started Today</span>
                        <ArrowRight size={20} aria-hidden="true" />
                        <div className="hero-button-glow" aria-hidden="true"></div>
                    </button>
                    <button
                        className="hero-button-secondary"
                        onClick={() => scrollToSection('products')}
                        aria-label="View our portfolio of products"
                    >
                        <Code size={20} aria-hidden="true" />
                        <span>View Our Work</span>
                    </button>
                </div>

                {/* Stats */}
                <div className="hero-stats" role="region" aria-label="Company statistics">
                    <div className="hero-stat">
                        <div className="hero-stat-number" aria-label="500 plus">500+</div>
                        <div className="hero-stat-label">Happy Clients</div>
                    </div>
                    <div className="hero-stat">
                        <div className="hero-stat-number" aria-label="1000 plus">1000+</div>
                        <div className="hero-stat-label">Projects Done</div>
                    </div>
                    <div className="hero-stat">
                        <div className="hero-stat-number" aria-label="99 percent">99%</div>
                        <div className="hero-stat-label">Success Rate</div>
                    </div>
                </div>

                {/* Feature Cards */}
                <div className="hero-features" role="list" aria-label="Key features">
                    <div className="hero-feature" role="listitem">
                        <div className="hero-feature-icon hero-feature-icon-blue" aria-hidden="true">
                            <Code size={24} />
                            <div className="hero-feature-icon-glow"></div>
                        </div>
                        <h3>AI-Powered Development</h3>
                        <p>Cutting-edge AI solutions tailored for your unique business needs</p>
                    </div>

                    <div className="hero-feature" role="listitem">
                        <div className="hero-feature-icon hero-feature-icon-purple" aria-hidden="true">
                            <Rocket size={24} />
                            <div className="hero-feature-icon-glow"></div>
                        </div>
                        <h3>Rapid Deployment</h3>
                        <p>Lightning-fast development and deployment for quick market entry</p>
                    </div>

                    <div className="hero-feature" role="listitem">
                        <div className="hero-feature-icon hero-feature-icon-indigo" aria-hidden="true">
                            <Shield size={24} />
                            <div className="hero-feature-icon-glow"></div>
                        </div>
                        <h3>Enterprise Security</h3>
                        <p>Bank-grade security with advanced encryption and protection</p>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <button
                    className="hero-scroll-indicator"
                    onClick={() => scrollToSection('get-started')}
                    aria-label="Scroll down to discover more"
                >
                    <div className="hero-scroll-text">Discover More</div>
                    <div className="hero-scroll-arrow" aria-hidden="true">
                        <ArrowRight size={16} />
                    </div>
                </button>
            </div>
        </section>
    );
}

export default Hero;