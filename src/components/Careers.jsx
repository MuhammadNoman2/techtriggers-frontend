import React, { useState } from 'react';
import {
  Briefcase,
  MapPin,
  Clock,
  DollarSign,
  Users,
  TrendingUp,
  Heart,
  Coffee,
  Award,
  GraduationCap,
  Code,
  Brain,
  Smartphone,
  Globe,
  Mail
} from 'lucide-react';
import '../styles/careers.css';

const Careers = () => {
  const [selectedPosition, setSelectedPosition] = useState(null);

  const openPositions = [
    {
      id: 1,
      title: "Senior Full Stack Developer",
      department: "Engineering",
      location: "Rawalpindi, Pakistan / Remote",
      type: "Full-time",
      salary: "Competitive",
      icon: Code,
      description: "We're looking for an experienced full-stack developer to join our engineering team and help build scalable web applications.",
      responsibilities: [
        "Design and develop scalable web applications using modern technologies",
        "Collaborate with cross-functional teams to define and ship new features",
        "Write clean, maintainable, and efficient code",
        "Participate in code reviews and mentor junior developers",
        "Optimize applications for maximum speed and scalability"
      ],
      requirements: [
        "5+ years of experience in full-stack development",
        "Strong proficiency in React, Node.js, and databases (SQL/NoSQL)",
        "Experience with cloud platforms (AWS, Azure, or GCP)",
        "Excellent problem-solving and communication skills",
        "Bachelor's degree in Computer Science or related field"
      ]
    },
    {
      id: 2,
      title: "AI/ML Engineer",
      department: "Research & Development",
      location: "Rawalpindi, Pakistan / Hybrid",
      type: "Full-time",
      salary: "Competitive",
      icon: Brain,
      description: "Join our R&D team to develop cutting-edge AI and machine learning solutions for our clients.",
      responsibilities: [
        "Design and implement machine learning models and algorithms",
        "Work with large datasets to train and optimize models",
        "Collaborate with product teams to integrate AI features",
        "Stay updated with latest AI/ML research and technologies",
        "Document processes and create technical specifications"
      ],
      requirements: [
        "Master's degree in AI, Machine Learning, or related field",
        "3+ years of experience in ML engineering",
        "Strong knowledge of Python, TensorFlow, PyTorch",
        "Experience with NLP, computer vision, or deep learning",
        "Published research or contributions to open-source projects (plus)"
      ]
    },
    {
      id: 3,
      title: "Mobile App Developer",
      department: "Engineering",
      location: "Rawalpindi, Pakistan / Remote",
      type: "Full-time",
      salary: "Competitive",
      icon: Smartphone,
      description: "Build beautiful and performant mobile applications for iOS and Android platforms.",
      responsibilities: [
        "Develop and maintain native or cross-platform mobile applications",
        "Implement pixel-perfect UIs that match designs",
        "Integrate RESTful APIs and third-party services",
        "Optimize app performance and user experience",
        "Collaborate with designers and backend developers"
      ],
      requirements: [
        "3+ years of mobile app development experience",
        "Proficiency in React Native, Flutter, or native iOS/Android",
        "Strong understanding of mobile UI/UX principles",
        "Experience with mobile app deployment and CI/CD",
        "Portfolio of published mobile applications"
      ]
    },
    {
      id: 4,
      title: "UI/UX Designer",
      department: "Design",
      location: "Rawalpindi, Pakistan / Hybrid",
      type: "Full-time",
      salary: "Competitive",
      icon: Globe,
      description: "Create stunning user interfaces and delightful user experiences for web and mobile applications.",
      responsibilities: [
        "Design intuitive user interfaces for web and mobile applications",
        "Create wireframes, prototypes, and high-fidelity mockups",
        "Conduct user research and usability testing",
        "Collaborate with developers to ensure design implementation",
        "Maintain and evolve design systems and style guides"
      ],
      requirements: [
        "3+ years of UI/UX design experience",
        "Proficiency in Figma, Sketch, or Adobe XD",
        "Strong portfolio demonstrating design skills",
        "Understanding of front-end technologies (HTML, CSS, JavaScript)",
        "Excellent visual design and typography skills"
      ]
    },
    {
      id: 5,
      title: "DevOps Engineer",
      department: "Infrastructure",
      location: "Rawalpindi, Pakistan / Remote",
      type: "Full-time",
      salary: "Competitive",
      icon: Code,
      description: "Manage and optimize our cloud infrastructure and deployment pipelines.",
      responsibilities: [
        "Design and maintain CI/CD pipelines",
        "Manage cloud infrastructure (AWS, Azure, or GCP)",
        "Implement monitoring, logging, and alerting systems",
        "Automate deployment and scaling processes",
        "Ensure system security and compliance"
      ],
      requirements: [
        "4+ years of DevOps or system administration experience",
        "Strong knowledge of Linux, Docker, and Kubernetes",
        "Experience with infrastructure as code (Terraform, CloudFormation)",
        "Proficiency in scripting languages (Python, Bash)",
        "Understanding of networking and security best practices"
      ]
    },
    {
      id: 6,
      title: "Business Development Manager",
      department: "Sales & Marketing",
      location: "Rawalpindi, Pakistan",
      type: "Full-time",
      salary: "Base + Commission",
      icon: TrendingUp,
      description: "Drive business growth by identifying opportunities and building client relationships.",
      responsibilities: [
        "Identify and pursue new business opportunities",
        "Build and maintain relationships with clients",
        "Prepare proposals and presentations",
        "Negotiate contracts and close deals",
        "Collaborate with technical teams to scope projects"
      ],
      requirements: [
        "5+ years in business development or sales",
        "Proven track record of meeting sales targets",
        "Strong understanding of technology services",
        "Excellent communication and negotiation skills",
        "Bachelor's degree in Business or related field"
      ]
    }
  ];

  const benefits = [
    { icon: DollarSign, title: "Competitive Salary", description: "Market-leading compensation packages" },
    { icon: Heart, title: "Health Insurance", description: "Comprehensive medical coverage for you and family" },
    { icon: Clock, title: "Flexible Hours", description: "Work-life balance with flexible schedules" },
    { icon: Coffee, title: "Remote Work", description: "Work from anywhere options available" },
    { icon: GraduationCap, title: "Learning Budget", description: "Annual budget for courses and conferences" },
    { icon: Award, title: "Performance Bonus", description: "Quarterly bonuses based on performance" },
    { icon: Users, title: "Great Team", description: "Collaborative and supportive work culture" },
    { icon: TrendingUp, title: "Career Growth", description: "Clear career progression paths" }
  ];

  const handleApplyClick = (position) => {
    setSelectedPosition(position);
    window.location.href = `mailto:careers@techtrigger.org?subject=Application for ${position.title}&body=Hi, I'm interested in applying for the ${position.title} position.%0D%0A%0D%0APlease find my resume attached.`;
  };

  return (
    <div className="careers">
      {/* Hero Section */}
      <section className="careers-hero">
        <div className="careers-hero-content">
          <h1 className="careers-hero-title">
            Join <span className="gradient-text">TechTrigger</span>
          </h1>
          <p className="careers-hero-subtitle">
            Build your career with a team that values innovation, collaboration, and growth
          </p>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="careers-why">
        <div className="careers-container">
          <h2 className="section-title">Why Work With Us?</h2>
          <p className="section-subtitle">
            At TechTrigger, we believe in creating an environment where talent thrives and innovation flourishes.
            Join us to work on cutting-edge projects, collaborate with brilliant minds, and make a real impact.
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="careers-benefits">
        <div className="careers-container">
          <h2 className="section-title">Benefits & Perks</h2>
          <div className="careers-benefits-grid">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <div key={index} className="careers-benefit-card">
                  <div className="careers-benefit-icon">
                    <IconComponent size={28} />
                  </div>
                  <h3>{benefit.title}</h3>
                  <p>{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="careers-positions">
        <div className="careers-container">
          <h2 className="section-title">Open Positions</h2>
          <p className="section-subtitle">
            Explore our current openings and find your perfect role
          </p>
          <div className="careers-positions-list">
            {openPositions.map((position) => {
              const IconComponent = position.icon;
              return (
                <div key={position.id} className="careers-position-card">
                  <div className="careers-position-header">
                    <div className="careers-position-icon">
                      <IconComponent size={32} />
                    </div>
                    <div className="careers-position-info">
                      <h3>{position.title}</h3>
                      <p className="careers-position-department">{position.department}</p>
                    </div>
                  </div>

                  <p className="careers-position-description">{position.description}</p>

                  <div className="careers-position-meta">
                    <div className="careers-position-meta-item">
                      <MapPin size={16} />
                      <span>{position.location}</span>
                    </div>
                    <div className="careers-position-meta-item">
                      <Briefcase size={16} />
                      <span>{position.type}</span>
                    </div>
                    <div className="careers-position-meta-item">
                      <DollarSign size={16} />
                      <span>{position.salary}</span>
                    </div>
                  </div>

                  <div className="careers-position-details">
                    <div className="careers-position-section">
                      <h4>Responsibilities:</h4>
                      <ul>
                        {position.responsibilities.map((resp, idx) => (
                          <li key={idx}>{resp}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="careers-position-section">
                      <h4>Requirements:</h4>
                      <ul>
                        {position.requirements.map((req, idx) => (
                          <li key={idx}>{req}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <button
                    onClick={() => handleApplyClick(position)}
                    className="careers-apply-button"
                  >
                    <Mail size={18} />
                    Apply Now
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="careers-cta">
        <div className="careers-container">
          <h2>Don't See Your Role?</h2>
          <p>We're always looking for talented individuals. Send us your resume and we'll get in touch!</p>
          <a
            href="mailto:careers@techtrigger.org?subject=General Application"
            className="careers-cta-button"
          >
            <Mail size={20} />
            Send General Application
          </a>
        </div>
      </section>
    </div>
  );
};

export default Careers;
