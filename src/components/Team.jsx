import React from 'react';
import {
  Linkedin,
  Mail,
  Award,
  Briefcase,
  GraduationCap,
  Code,
  Brain,
  Users
} from 'lucide-react';
import '../styles/team.css';

const Team = () => {
  const teamMembers = [
    {
      name: "Ali Daud",
      role: "Co-Founder",
      image: "https://media-mct1-2.cdn.whatsapp.net/v/t61.24694-24/513819476_2801656383369391_2718854020838570588_n.jpg?ccb=11-4&oh=01_Q5Aa2wFt_Q0_6I8Af4hFg1G4XNxuNlHaQWo11hH6ZODJQJNvQw&oe=68F8569C&_nc_sid=5e03e0&_nc_cat=109",
      bio: "Visionary entrepreneur and Computer Science graduate with a passion for leveraging cutting-edge technology to solve complex business challenges. Ali brings deep technical knowledge in AI, Machine Learning, and Computer Vision, combined with strategic leadership to drive TechTrigger's innovation and growth.",
      expertise: ["Artificial Intelligence", "Machine Learning", "Computer Vision", "Business Strategy", "Product Development", "Tech Innovation"],
      education: "Bachelor's in Computer Science",
      experience: "10+ years in Tech Industry",
      achievements: [
        "Founded multiple successful tech ventures",
        "Expert in AI and Computer Vision technologies",
        "Led digital transformation projects for Fortune 500 companies",
        "Speaker at international tech conferences"
      ],
      email: "ali@techtrigger.org",
      linkedin: "https://linkedin.com/in/alidaud"
    },
    {
      name: "Talha Waseem",
      role: "CEO (Chief Executive Officer)",
      image: "https://media-mct1-2.cdn.whatsapp.net/v/t61.24694-24/518951448_730155766477657_5052157291356423220_n.jpg?ccb=11-4&oh=01_Q5Aa2wG9U7Md7cKyXScF2W5CxfT8OSx3YPur6JncaOEgqXpw_g&oe=68F865B3&_nc_sid=5e03e0&_nc_cat=107",
      bio: "Dynamic leader with extensive experience in scaling technology companies and building high-performance teams. Talha's strategic vision and operational excellence drive TechTrigger's mission to deliver world-class solutions.",
      expertise: ["Executive Leadership", "Strategic Planning", "Business Development", "Operations Management"],
      education: "Master's in Computer Science",
      experience: "12+ years in Leadership Roles",
      achievements: [
        "Scaled startups from inception to multi-million dollar valuations",
        "Built and led teams of 100+ professionals",
        "Recognized as Top Tech CEO by Industry Awards"
      ],
      email: "talha@techtrigger.org",
      linkedin: "https://linkedin.com/in/talhawaseem"
    },
    {
      name: "Muhammad Noman",
      role: "CTO & General Manager",
      image: "https://media-mct1-2.cdn.whatsapp.net/v/t61.24694-24/564145473_1197928975477384_9138463648126200384_n.jpg?ccb=11-4&oh=01_Q5Aa2wFFNvCpKDP32oCsycgM5mczZ7RcsyyhWBTC8d3ceHfhtA&oe=68F86990&_nc_sid=5e03e0&_nc_cat=104",
      bio: "Technology visionary and Computer Science graduate with hands-on leadership in full-stack development and emerging technologies. Noman brings comprehensive expertise in Web Development, Mobile Apps, ERP Systems, AI/ML, and DevOps. He oversees all technical operations and ensures delivery of cutting-edge, scalable solutions.",
      expertise: ["Web Development", "Mobile App Development", "ERP Systems", "AI & Machine Learning", "DevOps", "Cloud Computing", "Software Architecture", "Team Leadership"],
      education: "Bachelor's in Computer Science",
      experience: "15+ years in Software Development",
      achievements: [
        "Architected enterprise-level web and mobile applications",
        "Implemented complex ERP systems for multiple organizations",
        "Expert in AI/ML integration and DevOps practices",
        "Led development of award-winning software products",
        "Built and scaled high-performance development teams"
      ],
      email: "noman@techtrigger.org",
      linkedin: "https://linkedin.com/in/muhammadnoman"
    }
  ];

  const companyValues = [
    {
      icon: Code,
      title: "Technical Excellence",
      description: "We maintain the highest standards in code quality, architecture, and development practices."
    },
    {
      icon: Brain,
      title: "Innovation First",
      description: "We constantly explore new technologies and methodologies to stay ahead of the curve."
    },
    {
      icon: Users,
      title: "Collaborative Culture",
      description: "We believe in teamwork, open communication, and knowledge sharing across all levels."
    },
    {
      icon: Award,
      title: "Results Driven",
      description: "We focus on delivering measurable outcomes that create real value for our clients."
    }
  ];

  return (
    <div className="team">
      {/* Hero Section */}
      <section className="team-hero">
        <div className="team-hero-content">
          <h1 className="team-hero-title">
            Meet the <span className="gradient-text">Leadership</span>
          </h1>
          <p className="team-hero-subtitle">
            The visionaries behind TechTrigger's success
          </p>
        </div>
      </section>

      {/* Team Introduction */}
      <section className="team-intro">
        <div className="team-container">
          <h2 className="section-title">Our Leadership Team</h2>
          <p className="section-description">
            TechTrigger is led by three passionate entrepreneurs who share a common vision:
            to empower businesses through innovative technology solutions. With decades of combined
            experience in software development, business strategy, and technology leadership,
            our founding team brings together the perfect blend of technical expertise and business acumen.
          </p>
        </div>
      </section>

      {/* Team Members */}
      <section className="team-members">
        <div className="team-container">
          {teamMembers.map((member, index) => (
            <div key={index} className={`team-member-card ${index % 2 === 1 ? 'reverse' : ''}`}>
              <div className="team-member-image-wrapper">
                <img
                  src={member.image}
                  alt={member.name}
                  className="team-member-image"
                />
                <div className="team-member-social">
                  <a
                    href={`mailto:${member.email}`}
                    className="team-social-link"
                    aria-label={`Email ${member.name}`}
                  >
                    <Mail size={20} />
                  </a>
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="team-social-link"
                    aria-label={`${member.name}'s LinkedIn`}
                  >
                    <Linkedin size={20} />
                  </a>
                </div>
              </div>

              <div className="team-member-content">
                <h3 className="team-member-name">{member.name}</h3>
                <div className="team-member-role">{member.role}</div>
                <p className="team-member-bio">{member.bio}</p>

                <div className="team-member-details">
                  <div className="team-member-detail">
                    <GraduationCap size={20} />
                    <span>{member.education}</span>
                  </div>
                  <div className="team-member-detail">
                    <Briefcase size={20} />
                    <span>{member.experience}</span>
                  </div>
                </div>

                <div className="team-member-expertise">
                  <h4>Areas of Expertise:</h4>
                  <div className="expertise-tags">
                    {member.expertise.map((skill, idx) => (
                      <span key={idx} className="expertise-tag">{skill}</span>
                    ))}
                  </div>
                </div>

                <div className="team-member-achievements">
                  <h4><Award size={18} /> Key Achievements:</h4>
                  <ul>
                    {member.achievements.map((achievement, idx) => (
                      <li key={idx}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Company Values */}
      <section className="team-values">
        <div className="team-container">
          <h2 className="section-title">What Drives Us</h2>
          <p className="section-subtitle">
            Our leadership team embodies these core principles in everything we do
          </p>
          <div className="team-values-grid">
            {companyValues.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div key={index} className="team-value-card">
                  <div className="team-value-icon">
                    <IconComponent size={32} />
                  </div>
                  <h3>{value.title}</h3>
                  <p>{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="team-cta">
        <div className="team-container">
          <h2>Want to Work With Us?</h2>
          <p>Join our team or partner with us to build something amazing</p>
          <div className="team-cta-buttons">
            <a href="/careers" className="team-cta-button primary">
              View Open Positions
            </a>
            <a href="/#contact" className="team-cta-button secondary">
              Get In Touch
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;
