import React, { useState } from 'react';
import Header from './Header.js';
import './Detail.css';
import Hou from '../images/bac3.jpg';

export default function Detail() {
  const [activeSection, setActiveSection] = useState('overview');

  const handleSectionChange = (section) => {
    setActiveSection(section);
  };

  return (
    <>
      <Header />
      <div className="detailcont">
        <div className="block1">
          <img src={Hou} alt="" />
        </div>
        <div className="block2">
          <div className="section-nav">
            <button onClick={() => handleSectionChange('overview')}>Overview</button>
            <button onClick={() => handleSectionChange('owners')}>Owner's Detail</button>
            <button onClick={() => handleSectionChange('explore')}>Explore</button>
          </div>
          <div className="section-content">
            {activeSection === 'overview' && (
              <div className="overview-section">
                <h2>Overview</h2>
                <p>Hello Overview</p>
              </div>
            )}
            {activeSection === 'owners' && (
              <div className="owners-section">
                <h2>Owner's Detail</h2>
                <p>Hello Owner</p>
              </div>
            )}
            {activeSection === 'explore' && (
              <div className="explore-section">
                <h2>Explore</h2>
                <p>Hello Explore</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
