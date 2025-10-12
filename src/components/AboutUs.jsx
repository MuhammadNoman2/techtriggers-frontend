import React from 'react';
import {
  Code,
  Brain,
  Smartphone,
  Cloud,
  Shield,
  Zap,
  Globe,
  Users,
  Award,
  Target,
  Heart,
  TrendingUp
} from 'lucide-react';
import '../styles/aboutus.css';

const AboutUs = () => {
  const services = [
    {
      icon: Globe,
      title: "Web Development",
      description: "Custom web applications built with modern technologies"
    },
    {
      icon: Smartphone,
      title: "Mobile Apps",
      description: "Native and cross-platform mobile applications"
    },
    {
      icon: Brain,
      title: "AI & Machine Learning",
      description: "Intelligent solutions powered by advanced AI algorithms"
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and migration services"
    },
    {
      icon: Code,
      title: "ERP Systems",
      description: "Enterprise resource planning and business management"
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "Comprehensive security solutions and auditing"
    }
  ];

  const values = [
    {
      icon: Target,
      title: "Innovation",
      description: "We constantly push boundaries to deliver cutting-edge solutions that drive your business forward."
    },
    {
      icon: Heart,
      title: "Client-Centric",
      description: "Your success is our success. We build lasting relationships through exceptional service and support."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We maintain the highest standards in everything we do, from code quality to customer communication."
    },
    {
      icon: TrendingUp,
      title: "Growth",
      description: "We're committed to continuous improvement and helping our clients achieve sustainable growth."
    }
  ];

  const stats = [
    { number: "200+", label: "Projects Completed" },
    { number: "150+", label: "Happy Clients" },
    { number: "5+", label: "Years Experience" },
    { number: "24/7", label: "Support Available" }
  ];

  return (
    <div className="aboutus">
      {/* Hero Section */}
      <section className="aboutus-hero">
        <div className="aboutus-hero-content">
          <h1 className="aboutus-hero-title">
            About <span className="gradient-text">TechTrigger</span>
          </h1>
          <p className="aboutus-hero-subtitle">
            Empowering Businesses Through Innovation and Technology
          </p>
        </div>
        <div className="aboutus-hero-decoration">
          <div className="decoration-circle decoration-circle-1"></div>
          <div className="decoration-circle decoration-circle-2"></div>
          <div className="decoration-circle decoration-circle-3"></div>
        </div>
      </section>

      {/* Company Story */}
      <section className="aboutus-story">
        <div className="aboutus-container">
          <div className="aboutus-story-content">
            <h2 className="section-title">Our Story</h2>
            <div className="aboutus-story-text">
              <p>
                Founded in 2020, <strong>TechTrigger</strong> emerged from a vision to revolutionize how businesses leverage technology.
                We are a dynamic software company dedicated to providing comprehensive technology solutions that transform ideas into reality.
              </p>
              <p>
                What started as a small team of passionate developers has grown into a full-service technology partner,
                serving clients across various industries. Our journey has been marked by continuous innovation,
                unwavering commitment to quality, and a deep understanding of our clients' needs.
              </p>
              <p>
                Today, TechTrigger stands as a trusted name in software development, artificial intelligence,
                mobile applications, web development, ERP systems, and cloud solutions. We don't just build software –
                we create digital experiences that drive business growth and operational excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="aboutus-mission-vision">
        <div className="aboutus-container">
          <div className="mission-vision-grid">
            <div className="mission-vision-card">
              <div className="mission-vision-icon">
                <Target size={40} />
              </div>
              <h3>Our Mission</h3>
              <p>
                To empower businesses of all sizes with innovative, scalable, and reliable technology solutions
                that solve real-world problems and create lasting value.
              </p>
            </div>
            <div className="mission-vision-card">
              <div className="mission-vision-icon">
                <Zap size={40} />
              </div>
              <h3>Our Vision</h3>
              <p>
                To be the leading technology partner for businesses worldwide, known for our excellence,
                innovation, and unwavering commitment to client success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="aboutus-services">
        <div className="aboutus-container">
          <h2 className="section-title">What We Do</h2>
          <p className="section-subtitle">
            Comprehensive technology solutions tailored to your business needs
          </p>
          <div className="aboutus-services-grid">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div key={index} className="aboutus-service-card">
                  <div className="aboutus-service-icon">
                    <IconComponent size={32} />
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="aboutus-values">
        <div className="aboutus-container">
          <h2 className="section-title">Our Core Values</h2>
          <p className="section-subtitle">
            The principles that guide everything we do
          </p>
          <div className="aboutus-values-grid">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div key={index} className="aboutus-value-card">
                  <div className="aboutus-value-icon">
                    <IconComponent size={28} />
                  </div>
                  <h3>{value.title}</h3>
                  <p>{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="aboutus-stats">
        <div className="aboutus-container">
          <div className="aboutus-stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="aboutus-stat-card">
                <div className="aboutus-stat-number">{stat.number}</div>
                <div className="aboutus-stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="aboutus-why-choose">
        <div className="aboutus-container">
          <h2 className="section-title">Why Choose TechTrigger?</h2>
          <div className="aboutus-why-grid">
            <div className="aboutus-why-item">
              <Users size={24} />
              <h3>Expert Team</h3>
              <p>Skilled professionals with years of industry experience and technical expertise</p>
            </div>
            <div className="aboutus-why-item">
              <Award size={24} />
              <h3>Proven Track Record</h3>
              <p>Hundreds of successful projects delivered across multiple industries</p>
            </div>
            <div className="aboutus-why-item">
              <Shield size={24} />
              <h3>Quality Assurance</h3>
              <p>Rigorous testing and quality control processes ensure flawless deliverables</p>
            </div>
            <div className="aboutus-why-item">
              <TrendingUp size={24} />
              <h3>Scalable Solutions</h3>
              <p>Technology that grows with your business, from startup to enterprise</p>
            </div>
            <div className="aboutus-why-item">
              <Zap size={24} />
              <h3>Agile Methodology</h3>
              <p>Fast, flexible, and collaborative development approach</p>
            </div>
            <div className="aboutus-why-item">
              <Heart size={24} />
              <h3>Ongoing Support</h3>
              <p>24/7 support and maintenance to keep your systems running smoothly</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="aboutus-cta">
        <div className="aboutus-container">
          <h2>Ready to Transform Your Business?</h2>
          <p>Let's discuss how TechTrigger can help you achieve your goals</p>
          <div className="aboutus-cta-buttons">
            <a href="/#contact" className="aboutus-cta-button primary">
              Get In Touch
            </a>
            <a href="/team" className="aboutus-cta-button secondary">
              Meet Our Team
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
