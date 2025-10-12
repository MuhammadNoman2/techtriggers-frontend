import React, { useState } from 'react';
import LazyImage from './LazyImage';
import '../styles/product.css';

const Products = () => {
    const [selectedProduct, setSelectedProduct] = useState(null);

    const products = [
        {
            id: 1,
            title: "AI-Based LMS System",
            subtitle: "Web & Mobile Learning Management",
            shortDescription: "Comprehensive AI-powered learning platform for modern education",
            description: "Our AI-Based Learning Management System revolutionizes education with intelligent content delivery, adaptive learning paths, and comprehensive analytics. Built for both web and mobile platforms, it provides seamless learning experiences with personalized recommendations and automated assessments.",
            features: [
                "AI-powered content recommendations based on learning patterns",
                "Adaptive learning algorithms that adjust to student pace",
                "Cross-platform compatibility (Web, iOS, Android)",
                "Advanced analytics dashboard with performance insights",
                "Automated grading system with intelligent feedback",
                "Real-time collaboration tools and discussion forums",
                "Multi-language support with automatic translation",
                "Integration with popular educational tools and platforms"
            ],
            technologies: ["Flutter", "React", "AI/ML", "Node.js", "MongoDB"],
            image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
            icon: "🎓",
            gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
        },
        {
            id: 2,
            title: "AI Calling Bot",
            subtitle: "Intelligent Voice Assistant",
            shortDescription: "Advanced AI-powered calling bot with natural conversation flow",
            description: "Our AI Calling Bot leverages cutting-edge natural language processing to handle customer interactions with human-like conversation capabilities. Perfect for customer service, appointment scheduling, and automated support with 24/7 availability.",
            features: [
                "Advanced natural language processing and understanding",
                "Human-like voice synthesis with emotional intelligence",
                "Multi-language support with accent recognition",
                "Call analytics and detailed conversation reporting",
                "Seamless CRM integration and data synchronization",
                "Appointment scheduling with calendar integration",
                "Sentiment analysis for improved customer experience",
                "Custom training for industry-specific terminology"
            ],
            technologies: ["AI/ML", "NLP", "Voice Recognition", "Python", "TensorFlow"],
            image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
            icon: "🤖",
            gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
        },
        {
            id: 3,
            title: "E-Transport System",
            subtitle: "Complete Transportation Solution",
            shortDescription: "Full-featured transport app with 4 admin panels and safety features",
            description: "Our E-Transport System is a comprehensive ride-hailing solution with Indrive-like functionality. Features four distinct admin panels for different user roles, advanced safety mechanisms, and real-time tracking capabilities for complete transportation management.",
            features: [
                "4-tier admin panel system (Admin, User, Driver, Family)",
                "Real-time GPS tracking with route optimization",
                "Advanced SOS system with emergency response",
                "Automatic accident detection using sensor data",
                "Live location sharing with family members",
                "Comprehensive ride booking and management system",
                "Driver verification and background check system",
                "In-app messaging and calling functionality",
                "Payment gateway integration with multiple options",
                "Rating and review system for quality assurance"
            ],
            technologies: ["Flutter", "Firebase", "Google Maps API", "Node.js", "Socket.io"],
            image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
            icon: "🚗",
            gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)"
        },
        {
            id: 4,
            title: "Mental Health AI App",
            subtitle: "AI-Powered Wellness Platform",
            shortDescription: "Intelligent mental health support with AI LLM and Gemini integration",
            description: "Our Mental Health AI App combines the power of large language models with Google Gemini integration to provide personalized mental wellness support. Built with Flutter for cross-platform accessibility, it offers 24/7 AI-powered therapy sessions and comprehensive mood tracking.",
            features: [
                "Advanced AI LLM integration for personalized therapy",
                "Google Gemini powered intelligent conversations",
                "Comprehensive mood tracking and pattern analysis",
                "Personalized therapy sessions based on user history",
                "Crisis intervention support with emergency contacts",
                "Privacy-focused design with end-to-end encryption",
                "Meditation and mindfulness exercise recommendations",
                "Progress tracking with detailed analytics",
                "Integration with healthcare providers and professionals",
                "Offline mode for continuous support without internet"
            ],
            technologies: ["Flutter", "AI LLM", "Google Gemini", "Firebase", "TensorFlow"],
            image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
            icon: "🧠",
            gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)"
        }
    ];

    const openModal = (product) => {
        setSelectedProduct(product);
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        setSelectedProduct(null);
        document.body.style.overflow = 'unset';
    };

    return (
        <section className="products-section" id="products">
            <div className="products-container">
                {/* Header */}
                <div className="products-header">
                    <h2 className="products-title">Our Products</h2>
                    <p className="products-subtitle">
                        Innovative AI-powered solutions built with cutting-edge technology to transform your business operations
                    </p>
                </div>

                {/* Products Grid */}
                <div className="products-grid">
                    {products.map((product) => (
                        <article
                            key={product.id}
                            className="product-card"
                            role="button"
                            tabIndex={0}
                            onClick={() => openModal(product)}
                            onKeyPress={(e) => {
                                if (e.key === 'Enter' || e.key === ' ') {
                                    e.preventDefault();
                                    openModal(product);
                                }
                            }}
                            aria-label={`View details about ${product.title}`}
                        >
                            <div className="product-image-container">
                                <LazyImage
                                    src={product.image}
                                    alt={product.title}
                                    className="product-image"
                                />
                                <div className="product-overlay" style={{ background: product.gradient }}>
                                    <div className="product-icon">{product.icon}</div>
                                </div>
                            </div>

                            <div className="product-content">
                                <h3 className="product-title">{product.title}</h3>
                                <p className="product-subtitle">{product.subtitle}</p>
                                <p className="product-short-description">{product.shortDescription}</p>

                                <div className="product-tech-preview">
                                    {product.technologies.slice(0, 3).map((tech, index) => (
                                        <span key={index} className="tech-tag">{tech}</span>
                                    ))}
                                    {product.technologies.length > 3 && (
                                        <span className="tech-more">+{product.technologies.length - 3} more</span>
                                    )}
                                </div>

                                <button
                                    className="view-details-btn"
                                    aria-label={`View detailed information about ${product.title}`}
                                >
                                    View Details
                                    <span className="btn-arrow" aria-hidden="true">→</span>
                                </button>
                            </div>
                        </article>
                    ))}
                </div>

                {/* Technology Stack */}
                <div className="tech-stack">
                    <h3 className="tech-title">Built With Cutting-Edge Technology</h3>
                    <div className="tech-badges">
                        <span className="tech-badge">Flutter</span>
                        <span className="tech-badge">AI/ML</span>
                        <span className="tech-badge">Google Gemini</span>
                        <span className="tech-badge">LLM Models</span>
                        <span className="tech-badge">React</span>
                        <span className="tech-badge">Node.js</span>
                    </div>
                </div>

                {/* CTA Section */}
                <div className="products-cta">
                    <h3 className="cta-title">Ready to Transform Your Business?</h3>
                    <p className="cta-description">
                        Get in touch with our team to discuss how our AI-powered solutions can revolutionize your operations
                    </p>
                    <a href="#contact">
                        <button className="cta-button">
                            Contact Our Team</button>
                    </a>

                </div>
            </div>

            {/* Modal */}
            {selectedProduct && (
                <div
                    className="modal-overlay"
                    onClick={closeModal}
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby="modal-title"
                >
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <button
                            className="modal-close"
                            onClick={closeModal}
                            aria-label="Close product details"
                        >×</button>

                        <div className="modal-header">
                            <div className="modal-image-container">
                                <LazyImage
                                    src={selectedProduct.image}
                                    alt={selectedProduct.title}
                                    className="modal-image"
                                />
                                <div className="modal-overlay-gradient" style={{ background: selectedProduct.gradient }}>
                                    <div className="modal-icon">{selectedProduct.icon}</div>
                                </div>
                            </div>

                            <div className="modal-title-section">
                                <h2 className="modal-title" id="modal-title">{selectedProduct.title}</h2>
                                <p className="modal-subtitle">{selectedProduct.subtitle}</p>
                            </div>
                        </div>

                        <div className="modal-body">
                            <div className="modal-description">
                                <h3>About This Product</h3>
                                <p>{selectedProduct.description}</p>
                            </div>

                            <div className="modal-features">
                                <h3>Key Features</h3>
                                <ul className="modal-features-list">
                                    {selectedProduct.features.map((feature, index) => (
                                        <li key={index} className="modal-feature-item">
                                            <span className="feature-bullet">✓</span>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="modal-technologies">
                                <h3>Technologies Used</h3>
                                <div className="modal-tech-tags">
                                    {selectedProduct.technologies.map((tech, index) => (
                                        <span key={index} className="modal-tech-tag">{tech}</span>
                                    ))}
                                </div>
                            </div>

                            <div className="modal-actions">
                                {/* <button className="modal-btn-primary">Get Demo</button> */}
                                <button
                                    className="modal-btn-secondary"
                                    onClick={() => {
                                        closeModal();
                                        setTimeout(() => {
                                            const contactSection = document.getElementById('contact');
                                            if (contactSection) {
                                                contactSection.scrollIntoView({ behavior: 'smooth' });
                                            }
                                        }, 100); // Delay to ensure modal closes before scroll
                                    }}
                                >
                                    Request Quote
                                </button>

                                {/* <button className="modal-btn-tertiary">Learn More</button> */}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Products;