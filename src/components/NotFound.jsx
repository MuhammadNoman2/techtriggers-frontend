import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Home, ArrowLeft, Search } from 'lucide-react';
import '../styles/notfound.css';

function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="notfound-container">
      <div className="notfound-background">
        <div className="notfound-blob notfound-blob-1"></div>
        <div className="notfound-blob notfound-blob-2"></div>
        <div className="notfound-blob notfound-blob-3"></div>
      </div>

      <div className="notfound-content">
        {/* 404 Number */}
        <div className="notfound-number">
          <span className="notfound-digit">4</span>
          <span className="notfound-digit notfound-digit-middle">0</span>
          <span className="notfound-digit">4</span>
        </div>

        {/* Icon */}
        <div className="notfound-icon">
          <Search size={48} />
        </div>

        {/* Text Content */}
        <h1 className="notfound-title">Page Not Found</h1>
        <p className="notfound-description">
          Oops! The page you're looking for doesn't exist. It might have been moved or deleted.
        </p>

        {/* Action Buttons */}
        <div className="notfound-buttons">
          <button
            className="notfound-button notfound-button-primary"
            onClick={() => navigate('/')}
          >
            <Home size={20} />
            <span>Go Home</span>
          </button>
          <button
            className="notfound-button notfound-button-secondary"
            onClick={() => navigate(-1)}
          >
            <ArrowLeft size={20} />
            <span>Go Back</span>
          </button>
        </div>

        {/* Suggestions */}
        <div className="notfound-suggestions">
          <p className="notfound-suggestions-title">You might be looking for:</p>
          <div className="notfound-links">
            <a href="/#service" className="notfound-link">Services</a>
            <a href="/#products" className="notfound-link">Products</a>
            <a href="/#contact" className="notfound-link">Contact</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
