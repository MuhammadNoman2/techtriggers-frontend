import React, { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';
import '../styles/whatsapp.css';

function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  const whatsappNumber = '+923376279457';
  const message = 'Hello! I am interested in your services.';
  const whatsappUrl = `https://wa.me/${whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(message)}`;

  useEffect(() => {
    // Show button after 2 seconds
    const timer = setTimeout(() => {
      setIsVisible(true);
      // Show tooltip for 3 seconds
      setShowTooltip(true);
      setTimeout(() => setShowTooltip(false), 3000);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleClick = () => {
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      <div className={`whatsapp-button ${isVisible ? 'visible' : ''}`}>
        <button
          onClick={handleClick}
          className="whatsapp-btn"
          aria-label="Chat with us on WhatsApp"
        >
          <MessageCircle size={28} />
          <span className="whatsapp-pulse"></span>
        </button>

        {showTooltip && (
          <div className="whatsapp-tooltip">
            <button
              className="tooltip-close"
              onClick={() => setShowTooltip(false)}
              aria-label="Close tooltip"
            >
              <X size={16} />
            </button>
            <p>👋 Need help?</p>
            <p className="tooltip-text">Chat with us on WhatsApp!</p>
          </div>
        )}
      </div>
    </>
  );
}

export default WhatsAppButton;
