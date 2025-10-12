import React from 'react';
import '../styles/techbanner.css';

function TechBanner() {
  const technologies = [
    { name: 'React', icon: '⚛️' },
    { name: 'Node.js', icon: '🟢' },
    { name: 'Flutter', icon: '💙' },
    { name: 'AI/ML', icon: '🤖' },
    { name: 'Python', icon: '🐍' },
    { name: 'MongoDB', icon: '🍃' },
    { name: 'Firebase', icon: '🔥' },
    { name: 'AWS', icon: '☁️' },
    { name: 'Docker', icon: '🐳' },
    { name: 'TypeScript', icon: '📘' },
    { name: 'Next.js', icon: '▲' },
    { name: 'GraphQL', icon: '◆' },
  ];

  // Duplicate for seamless loop
  const duplicatedTechs = [...technologies, ...technologies];

  return (
    <div className="tech-banner">
      <div className="tech-banner-track">
        {duplicatedTechs.map((tech, index) => (
          <div key={index} className="tech-banner-item">
            <span className="tech-icon">{tech.icon}</span>
            <span className="tech-name">{tech.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TechBanner;
