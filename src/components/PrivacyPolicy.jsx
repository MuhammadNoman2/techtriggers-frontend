// pages/PrivacyPolicy.jsx

import React from 'react';
import staticText from '../data/staticTexts';
import '../styles/privacyPolicy.css';

const PrivacyPolicy = () => {
  const { title, updated, content } = staticText.privacyPolicy;

  return (
    <div className="policy-page">
      <h1 className="policy-title">{title}</h1>
      <p className="policy-updated">{updated}</p>
      <div className="policy-content">
        {content.split('\n').map((para, i) =>
          para.trim() ? <p key={i}>{para.trim()}</p> : <br key={i} />
        )}
      </div>
    </div>
  );
};

export default PrivacyPolicy;
