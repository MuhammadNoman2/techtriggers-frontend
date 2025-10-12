import { useState, useEffect } from "react";
import { useNavigate, useLocation } from 'react-router-dom';

import { Menu, X, ArrowRight, Mail } from "lucide-react";
import '../styles/navbar.css';

import logo from '../assets/logo.jpg';

function Navbar({ startProject }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navigate = useNavigate();
const location = useLocation();


  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

const scrollToSection = (sectionId) => {
  const scrollAction = () => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
    setIsMenuOpen(false);
  };

  if (location.pathname !== '/') {
    navigate('/');
    setTimeout(scrollAction, 100); // Wait for home to mount
  } else {
    scrollAction();
  }
};


  const [activeSection, setActiveSection] = useState('hero');

useEffect(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    },
    {
      threshold: 0.6, // 60% of section must be visible
    }
  );

  const sections = document.querySelectorAll('section');
  sections.forEach((section) => observer.observe(section));

  return () => observer.disconnect();
}, []);


  return (
    <nav className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`} role="navigation" aria-label="Main navigation">
      <div className="navbar-container">
        {/* Left Side: Logo + Navigation */}
        <div className="navbar-left">
          {/* Logo */}
          <button
            className="navbar-logo"
            onClick={() => scrollToSection('hero')}
            aria-label="TechTrigger Home"
          >
            <img
              src={logo}
              alt="TechTrigger Logo"
              className="navbar-logo-icon"
            />
            <span className="navbar-logo-text">TechTrigger</span>
            <div className="navbar-logo-accent" aria-hidden="true"></div>
          </button>

          {/* Desktop Menu */}
          <ul className="navbar-menu" role="menubar">
            <li
              role="none"
              className={`navbar-menu-item ${location.pathname === '/' && activeSection === 'hero' ? 'active' : ''}`}
            >
              <button
                role="menuitem"
                onClick={() => scrollToSection('hero')}
                aria-current={location.pathname === '/' && activeSection === 'hero' ? 'page' : undefined}
              >
                <span>Home</span>
                <div className="navbar-menu-underline" aria-hidden="true"></div>
              </button>
            </li>

            <li role="none" className={`navbar-menu-item ${location.pathname === '/about' ? 'active' : ''}`}>
              <button
                role="menuitem"
                onClick={() => {
                  navigate('/about');
                  setIsMenuOpen(false);
                }}
              >
                <span>About Us</span>
                <div className="navbar-menu-underline" aria-hidden="true"></div>
              </button>
            </li>

            <li role="none" className={`navbar-menu-item ${location.pathname === '/' && activeSection === 'service' ? 'active' : ''}`}>
              <button
                role="menuitem"
                onClick={() => scrollToSection('service')}
                aria-current={location.pathname === '/' && activeSection === 'service' ? 'page' : undefined}
              >
                <span>Services</span>
                <div className="navbar-menu-underline" aria-hidden="true"></div>
              </button>
            </li>

            <li role="none" className={`navbar-menu-item ${location.pathname === '/' && activeSection === 'products' ? 'active' : ''}`}>
              <button
                role="menuitem"
                onClick={() => scrollToSection('products')}
                aria-current={location.pathname === '/' && activeSection === 'products' ? 'page' : undefined}
              >
                <span>Products</span>
                <div className="navbar-menu-underline" aria-hidden="true"></div>
              </button>
            </li>

            <li role="none" className={`navbar-menu-item ${location.pathname === '/careers' ? 'active' : ''}`}>
              <button
                role="menuitem"
                onClick={() => {
                  navigate('/careers');
                  setIsMenuOpen(false);
                }}
              >
                <span>Careers</span>
                <div className="navbar-menu-underline" aria-hidden="true"></div>
              </button>
            </li>

            <li role="none" className={`navbar-menu-item ${location.pathname === '/blog' ? 'active' : ''}`}>
              <button
                role="menuitem"
                onClick={() => {
                  navigate('/blog');
                  setIsMenuOpen(false);
                }}
              >
                <span>Blog</span>
                <div className="navbar-menu-underline" aria-hidden="true"></div>
              </button>
            </li>
          </ul>
        </div>

        {/* Right Side: Contact Us + Get Quote */}
        <div className="navbar-right">
          <button
            className="navbar-contact-button"
            onClick={() => scrollToSection('contact')}
            aria-label="Contact us"
          >
            <Mail size={18} aria-hidden="true" />
            <span>Contact Us</span>
          </button>

          <button
            className="navbar-cta-button"
            onClick={startProject}
            aria-label="Get a quote for your project"
          >
            <span>Get Quote</span>
            <ArrowRight size={16} aria-hidden="true" />
            <div className="navbar-button-glow" aria-hidden="true"></div>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="navbar-mobile-button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
        >
          <div className="navbar-mobile-icon">
            {isMenuOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={`navbar-mobile-menu ${isMenuOpen ? 'navbar-mobile-menu-open' : ''}`}
        role="menu"
        aria-hidden={!isMenuOpen}
      >
        <div className="navbar-mobile-content">
          <button
            role="menuitem"
            className="navbar-mobile-item"
            onClick={() => scrollToSection('hero')}
            tabIndex={isMenuOpen ? 0 : -1}
          >
            <span>Home</span>
          </button>
          <button
            role="menuitem"
            className="navbar-mobile-item"
            onClick={() => { navigate('/about'); setIsMenuOpen(false); }}
            tabIndex={isMenuOpen ? 0 : -1}
          >
            <span>About Us</span>
          </button>
          <button
            role="menuitem"
            className="navbar-mobile-item"
            onClick={() => scrollToSection('service')}
            tabIndex={isMenuOpen ? 0 : -1}
          >
            <span>Services</span>
          </button>
          <button
            role="menuitem"
            className="navbar-mobile-item"
            onClick={() => scrollToSection('products')}
            tabIndex={isMenuOpen ? 0 : -1}
          >
            <span>Products</span>
          </button>
          <button
            role="menuitem"
            className="navbar-mobile-item"
            onClick={() => { navigate('/careers'); setIsMenuOpen(false); }}
            tabIndex={isMenuOpen ? 0 : -1}
          >
            <span>Careers</span>
          </button>
          <button
            role="menuitem"
            className="navbar-mobile-item"
            onClick={() => { navigate('/blog'); setIsMenuOpen(false); }}
            tabIndex={isMenuOpen ? 0 : -1}
          >
            <span>Blog</span>
          </button>
          <button
            role="menuitem"
            className="navbar-mobile-item"
            onClick={() => scrollToSection('contact')}
            tabIndex={isMenuOpen ? 0 : -1}
          >
            <Mail size={18} aria-hidden="true" />
            <span>Contact Us</span>
          </button>
          <button
            className="navbar-mobile-cta"
            onClick={startProject}
            tabIndex={isMenuOpen ? 0 : -1}
            aria-label="Get a quote for your project"
          >
            <span>Get Quote</span>
            <ArrowRight size={16} aria-hidden="true" />
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div
          className="navbar-mobile-overlay"
          onClick={() => setIsMenuOpen(false)}
          role="presentation"
          aria-hidden="true"
        ></div>
      )}
    </nav>
  );
}

export default Navbar;