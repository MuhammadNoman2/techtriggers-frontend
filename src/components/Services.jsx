// components/Services.jsx
import React, { useState } from 'react';
import {
  Smartphone,
  Globe,
  Database,
  Palette,
  Brain,
  ArrowRight,
  Check,
  Code,
  Layers,
  Zap,
  Users,
  Award,
  ChevronRight,
  ChevronDown,
  X
} from 'lucide-react';
import ServiceDetail from './ServiceDetail';
import '../styles/services.css';

function Services({ startProject }) {
  const [selectedService, setSelectedService] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDetailOpen, setIsDetailOpen] = useState(false);

  const services = [
    {
      icon: Smartphone,
      title: "App Development",
      subtitle: "Native & Cross-Platform Mobile Solutions",
      description: "Transform your ideas into powerful mobile applications that engage users and drive business growth.",
      gradient: "service-gradient-blue",
      features: [
        "iOS & Android Development",
        "Cross-Platform Solutions",
        "App Store Optimization",
        "Performance Optimization"
      ],
      overview: "Our mobile app development team creates innovative, user-friendly applications that deliver exceptional user experiences across all platforms. We specialize in both native and cross-platform development, ensuring your app reaches the widest possible audience while maintaining optimal performance.",
      keyFeatures: [
        {
          title: "Native Development",
          description: "Platform-specific apps for iOS and Android with optimal performance"
        },
        {
          title: "Cross-Platform Solutions",
          description: "React Native and Flutter apps that work seamlessly across platforms"
        },
        {
          title: "UI/UX Design",
          description: "Intuitive and engaging user interfaces that enhance user experience"
        },
        {
          title: "Backend Integration",
          description: "Robust server-side solutions and API integrations"
        },
        {
          title: "App Store Optimization",
          description: "Strategic optimization for better visibility and downloads"
        },
        {
          title: "Maintenance & Support",
          description: "Ongoing support and updates to keep your app current"
        }
      ],
      technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase", "Node.js", "MongoDB"],
      process: [
        {
          title: "Requirements Analysis",
          description: "Detailed analysis of your app requirements and target audience"
        },
        {
          title: "UI/UX Design",
          description: "Creating wireframes, prototypes, and user interface designs"
        },
        {
          title: "Development",
          description: "Coding your app using best practices and modern frameworks"
        },
        {
          title: "Testing & Launch",
          description: "Comprehensive testing and deployment to app stores"
        }
      ]
    },
    {
      icon: Globe,
      title: "Web Development",
      subtitle: "Modern, Responsive Web Solutions",
      description: "Build stunning, responsive websites and web applications that captivate your audience and achieve your business objectives.",
      gradient: "service-gradient-green",
      features: [
        "Responsive Design",
        "Modern Frameworks",
        "SEO Optimization",
        "Performance Focused"
      ],
      overview: "Our web development services encompass everything from simple business websites to complex web applications. We use cutting-edge technologies and follow best practices to ensure your web presence is fast, secure, and user-friendly.",
      keyFeatures: [
        {
          title: "Responsive Design",
          description: "Websites that look and work perfectly on all devices and screen sizes"
        },
        {
          title: "Modern Frameworks",
          description: "Built with React, Vue.js, Angular, and other modern technologies"
        },
        {
          title: "SEO Optimization",
          description: "Search engine optimized structure and content for better visibility"
        },
        {
          title: "Performance Optimization",
          description: "Fast loading times and optimized user experience"
        },
        {
          title: "Content Management",
          description: "Easy-to-use CMS solutions for content updates"
        },
        {
          title: "Security Features",
          description: "Robust security measures to protect your website and data"
        }
      ],
      technologies: ["React", "Vue.js", "Angular", "Node.js", "Python", "PHP", "WordPress", "Shopify"],
      process: [
        {
          title: "Planning & Strategy",
          description: "Understanding your goals and creating a comprehensive development strategy"
        },
        {
          title: "Design & Prototyping",
          description: "Creating visual designs and interactive prototypes"
        },
        {
          title: "Development & Testing",
          description: "Building and thoroughly testing your website"
        },
        {
          title: "Launch & Optimization",
          description: "Deploying your site and ongoing performance optimization"
        }
      ]
    },
    {
      icon: Database,
      title: "ERP Systems",
      subtitle: "Enterprise Resource Planning Solutions",
      description: "Streamline your business operations with custom ERP systems that integrate all your business processes seamlessly.",
      gradient: "service-gradient-purple",
      features: [
        "Custom ERP Solutions",
        "System Integration",
        "Process Automation",
        "Real-time Analytics"
      ],
      overview: "Our ERP development services help businesses optimize their operations through integrated software solutions. We create custom ERP systems that bring together all your business processes, from inventory management to financial reporting, in one unified platform.",
      keyFeatures: [
        {
          title: "Custom Modules",
          description: "Tailored modules for your specific business requirements"
        },
        {
          title: "System Integration",
          description: "Seamless integration with existing business systems"
        },
        {
          title: "Real-time Reporting",
          description: "Live dashboards and comprehensive reporting tools"
        },
        {
          title: "Process Automation",
          description: "Automated workflows to improve efficiency"
        },
        {
          title: "Multi-user Access",
          description: "Role-based access control for different user levels"
        },
        {
          title: "Cloud Deployment",
          description: "Secure cloud-based deployment options"
        }
      ],
      technologies: ["SAP", "Oracle", "Microsoft Dynamics", "Odoo", "Custom Solutions", "Cloud Platforms"],
      process: [
        {
          title: "Business Analysis",
          description: "Comprehensive analysis of your business processes and requirements"
        },
        {
          title: "System Design",
          description: "Designing the ERP architecture and module structure"
        },
        {
          title: "Development & Integration",
          description: "Building and integrating the ERP system with existing processes"
        },
        {
          title: "Training & Support",
          description: "User training and ongoing system support"
        }
      ]
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      subtitle: "User-Centered Design Solutions",
      description: "Create intuitive and engaging user experiences that delight your customers and drive conversions.",
      gradient: "service-gradient-orange",
      features: [
        "User Research",
        "Wireframing & Prototyping",
        "Visual Design",
        "Usability Testing"
      ],
      overview: "Our UI/UX design team focuses on creating user-centered designs that not only look beautiful but also provide exceptional user experiences. We combine creativity with data-driven insights to design interfaces that users love to interact with.",
      keyFeatures: [
        {
          title: "User Research",
          description: "In-depth research to understand your users' needs and behaviors"
        },
        {
          title: "Wireframing",
          description: "Detailed wireframes and user journey mapping"
        },
        {
          title: "Visual Design",
          description: "Beautiful, modern designs that reflect your brand identity"
        },
        {
          title: "Prototyping",
          description: "Interactive prototypes for testing and validation"
        },
        {
          title: "Usability Testing",
          description: "Comprehensive testing to ensure optimal user experience"
        },
        {
          title: "Design Systems",
          description: "Scalable design systems for consistent user interfaces"
        }
      ],
      technologies: ["Figma", "Adobe XD", "Sketch", "Principle", "InVision", "Miro", "Framer"],
      process: [
        {
          title: "Research & Discovery",
          description: "Understanding users, competitors, and market requirements"
        },
        {
          title: "Conceptualization",
          description: "Creating concepts, wireframes, and user flows"
        },
        {
          title: "Design & Prototyping",
          description: "Developing visual designs and interactive prototypes"
        },
        {
          title: "Testing & Iteration",
          description: "User testing and design refinement based on feedback"
        }
      ]
    },
    {
      icon: Brain,
      title: "Artificial Intelligence",
      subtitle: "AI-Powered Solutions for Business Growth",
      description: "Harness the power of AI to automate processes, gain insights, and create intelligent solutions for your business.",
      gradient: "service-gradient-indigo",
      features: [
        "Machine Learning",
        "Natural Language Processing",
        "Computer Vision",
        "Predictive Analytics"
      ],
      overview: "Our AI solutions help businesses leverage artificial intelligence to solve complex problems, automate processes, and gain competitive advantages. From machine learning models to chatbots and predictive analytics, we create AI solutions that drive real business value.",
      keyFeatures: [
        {
          title: "Machine Learning Models",
          description: "Custom ML models for classification, prediction, and recommendation"
        },
        {
          title: "Natural Language Processing",
          description: "Text analysis, chatbots, and language understanding solutions"
        },
        {
          title: "Computer Vision",
          description: "Image recognition, object detection, and visual analysis"
        },
        {
          title: "Predictive Analytics",
          description: "Data-driven insights and forecasting models"
        },
        {
          title: "AI Integration",
          description: "Seamless integration of AI capabilities into existing systems"
        },
        {
          title: "Custom AI Solutions",
          description: "Tailored AI applications for specific business needs"
        }
      ],
      technologies: ["Python", "TensorFlow", "PyTorch", "OpenAI", "Hugging Face", "AWS AI", "Google AI"],
      process: [
        {
          title: "Problem Definition",
          description: "Identifying AI opportunities and defining success metrics"
        },
        {
          title: "Data Preparation",
          description: "Collecting, cleaning, and preparing data for AI models"
        },
        {
          title: "Model Development",
          description: "Building and training AI models using advanced algorithms"
        },
        {
          title: "Deployment & Monitoring",
          description: "Deploying models and monitoring performance in production"
        }
      ]
    }
  ];

  const processSteps = [
    {
      icon: Users,
      title: "Discovery & Planning",
      description: "We start by understanding your business needs, goals, and requirements through detailed consultation."
    },
    {
      icon: Palette,
      title: "Design & Prototyping",
      description: "Our design team creates intuitive user interfaces and prototypes for your approval."
    },
    {
      icon: Code,
      title: "Development",
      description: "Our expert developers bring your vision to life using cutting-edge technologies."
    },
    {
      icon: Zap,
      title: "Testing & Launch",
      description: "Rigorous testing ensures quality before we launch your solution successfully."
    }
  ];

  const stats = [
    { number: "500+", label: "Projects Completed" },
    { number: "200+", label: "Happy Clients" },
    { number: "50+", label: "Team Members" },
    { number: "5+", label: "Years Experience" }
  ];

  const handleLearnMore = (service) => {
    setSelectedService(service);
    setIsDetailOpen(true);
  };

  const closeDetailModal = () => {
    setIsDetailOpen(false);
    setSelectedService(null);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedService(null);
  };

  return (
    <section className="services-section" id="services" aria-labelledby="services-title">
      {/* Background Elements */}
      <div className="services-background" aria-hidden="true">
        <div className="services-blob-1"></div>
        <div className="services-blob-2"></div>
        <div className="services-blob-3"></div>
      </div>

      {/* Geometric Patterns */}
      <div className="services-patterns" aria-hidden="true">
        <div className="services-pattern-1"></div>
        <div className="services-pattern-2"></div>
      </div>

      <div className="services-container">
        {/* Hero Section */}
        <div className="services-hero">
          <div className="services-badge">
            <Award size={16} />
            <span>Our Expertise</span>
          </div>

          <h1 className="services-title" id="services-title">
            Our <span className="services-title-gradient">Services</span>
          </h1>

          <p className="services-subtitle">
            Comprehensive technology solutions designed to accelerate your business growth and digital transformation journey.
          </p>

          {/* Service Icons */}
          <div className="services-icons">
            {services.map((service, idx) => (
              <div key={idx} className={`services-icon ${service.gradient}`}>
                <service.icon size={24} />
              </div>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div className="services-grid">
          <div className="services-grid-title">
            <h2>What We Offer</h2>
            <p>Comprehensive technology services tailored to meet your unique business requirements and drive digital innovation.</p>
          </div>

          <div className="services-cards">
            {services.map((service, idx) => (
              <div key={idx} className="service-card">
                <div className="service-card-overlay"></div>
                
                <div className="service-card-content">
                  {/* Icon */}
                  <div className={`service-card-icon ${service.gradient}`}>
                    <service.icon size={32} />
                  </div>

                  {/* Title */}
                  <h3 className="service-card-title">{service.title}</h3>
                  
                  {/* Description */}
                  <p className="service-card-description">{service.description}</p>

                  {/* Features */}
                  <div className="service-card-features">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="service-card-feature">
                        <Check size={16} />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Learn More Button */}
                  <button
                    onClick={() => handleLearnMore(service)}
                    className={`service-card-button ${service.gradient}`}
                  >
                    <span>Learn More</span>
                    <ArrowRight size={18} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Process Section */}
        <div className="services-process">
          <div className="services-process-title">
            <h2>Our Development Process</h2>
            <p>We follow a proven methodology that ensures successful project delivery and client satisfaction.</p>
          </div>

          <div className="services-process-steps">
            {processSteps.map((step, idx) => (
              <div key={idx} className="services-process-step">
                <div className="services-process-step-header">
                  <div className="services-process-step-icon">
                    <step.icon size={32} />
                  </div>
                  {idx < processSteps.length - 1 && (
                    <>
                      <ChevronRight className="services-process-step-arrow services-arrow-desktop" size={24} />
                      <ChevronDown className="services-process-step-arrow services-arrow-mobile" size={24} />
                    </>
                  )}
                </div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="services-stats">
          <div className="services-stats-content">
            <h2>Trusted by Industry Leaders</h2>
            <p>Numbers that speak for our expertise and commitment</p>
          </div>

          <div className="services-stats-grid">
            {stats.map((stat, idx) => (
              <div key={idx} className="services-stats-item">
                <div className="services-stats-number">{stat.number}</div>
                <div className="services-stats-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="services-cta" onClick={startProject}>
          <h2>Ready to Get Started?</h2>
          <p>Let's discuss your project and create something amazing together.</p>
          <div className="services-cta-buttons">
            <button className="services-cta-button-primary">
              <span>Start Your Project</span>
              <ArrowRight size={20} />
            </button>
            <button className="services-cta-button-secondary">
              <span>Schedule Consultation</span>
            </button>
          </div>
        </div>
      </div>

      {/* Service Detail Modal */}
      <ServiceDetail
        service={selectedService}
        isOpen={isDetailOpen}
        onClose={closeDetailModal}
        onGetQuote={startProject}
      />

      {/* Service Modal */}
      {isModalOpen && selectedService && (
        <div className="service-modal" role="dialog" aria-modal="true" aria-labelledby="service-modal-title">
          <div className="service-modal-backdrop" onClick={closeModal} aria-hidden="true"></div>

          <div className="service-modal-content">
            {/* Header */}
            <div className={`service-modal-header ${selectedService.gradient}`}>
              <div className="service-modal-header-content">
                <selectedService.icon size={48} aria-hidden="true" />
                <div>
                  <h2 id="service-modal-title">{selectedService.title}</h2>
                  <p>{selectedService.subtitle}</p>
                </div>
              </div>
              <button
                onClick={closeModal}
                className="service-modal-close"
                aria-label="Close service details"
              >
                <X size={24} aria-hidden="true" />
              </button>
            </div>

            <div className="service-modal-body">
              {/* Overview */}
              <section className="service-modal-section">
                <h3>Overview</h3>
                <p>{selectedService.overview}</p>
              </section>

              {/* Key Features */}
              <section className="service-modal-section">
                <h3>Key Features</h3>
                <div className="service-modal-features">
                  {selectedService.keyFeatures.map((feature, idx) => (
                    <div key={idx} className="service-modal-feature">
                      <Check size={20} />
                      <div>
                        <h4>{feature.title}</h4>
                        <p>{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Technologies */}
              <section className="service-modal-section">
                <h3>Technologies We Use</h3>
                <div className="service-modal-technologies">
                  {selectedService.technologies.map((tech, idx) => (
                    <span key={idx} className={`service-modal-tech ${selectedService.gradient}`}>
                      {tech}
                    </span>
                  ))}
                </div>
              </section>

              {/* Process */}
              <section className="service-modal-section">
                <h3>Our Process</h3>
                <div className="service-modal-process">
                  {selectedService.process.map((step, idx) => (
                    <div key={idx} className="service-modal-process-step">
                      <div className={`service-modal-process-number ${selectedService.gradient}`}>
                        {idx + 1}
                      </div>
                      <div>
                        <h4>{step.title}</h4>
                        <p>{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Services;