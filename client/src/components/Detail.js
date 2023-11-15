import React, { useState } from 'react';
import Header from './Header.js';
import './Detail.css';
import Hou from '../images/bac3.jpg';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';

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
          <img src={Hou} alt="not show" />
        </div>
        <div className="block2">
          <div className="section-nav">
            <button onClick={() => handleSectionChange('overview')} className={activeSection === 'overview' ? 'active' : ''}>Property Details</button>
            <button onClick={() => handleSectionChange('owners')} className={activeSection === 'owners' ? 'active' : ''}>Owner's Detail</button>
            <button onClick={() => handleSectionChange('explore')} className={activeSection === 'explore' ? 'active' : ''}>Explore</button>
          </div>
          <div className="line"></div>
          <div className="section-content">
            {activeSection === 'overview' && (
              <div className="overview-section">
                <div className="dbox">
                  <p style={{fontSize:'30px'}}>₹5000/-</p>
                </div>
                <div className="dbox">
                  <p>Gender : Female</p>
                  <p>Shared by : 4 Member</p>
                </div>
                <div className="dbox">
                  <p>Configuration of Rooms :</p>
                  <ul>
                    <li>1 Hall</li>
                    <li>1 Bedroom</li>
                    <li>1 Kitchen</li>
                    <li>Common Area</li>
                    <li>Seperate Toilet/ Bathroom</li>
                  </ul>
                </div>
                <div className="dbox">
                  <p>Rules and Regulation :</p>
                  <ul>
                    <li>Gate Open at 6:00am</li>
                    <li>Gate Closes at 10:00PM</li>
                    <li>No Boys are allowed</li>
                  </ul>
                </div>
                <div className="dbox">
                  <p>Deposite : 2000 Rs.</p>
                </div>
                <div className="dbox">
                  <p>Parking : 1 Covered, 1 open</p>
                </div>
                <div className="dbox">
                  <p>Furnished : Semi-Furnished</p>
                  <p>Address :</p>
                  <p style={{marginTop:'-5px'}}>Shivangi Nagar Hudhkeshwar Road Nagpur</p>
                </div>
                <div className="dbox">
                  <p>Bills Includes</p>
                  <ul>
                    <li>No Bill Include</li>
                  </ul>
                </div>
              </div>
            )}
            {activeSection === 'owners' && (
              <div className="owners-section">
                <div className="dbox">
                  <p>Owner Name :</p>
                  <p>Mansi Pillewan</p>
                </div>
                <div className="dbox">
                  <p style={{fontSize:'30px'}}>5000/-</p>
                </div>
                <div className="dbox">
                  <p style={{paddingBottom:'2px'}}>Contact Details :</p>
                  <p style={{paddingBottom:'2px'}}><LocalPhoneIcon style={{verticalAlign:'middle', paddingRight:'5px'}}/>8085645</p>
                  <p><EmailIcon style={{verticalAlign:'middle', paddingRight:'5px'}}/>pbhoyar@email</p>
                </div>
                <div className="dbox">
                  <p>Address :</p>
                  <p>Shivangi Nagar Hudhkeshwar Road Nagpur</p>
                </div>
                <div className="dbox">
                  <p>Experience in renting rooms :</p>
                  <p>4 years</p>
                </div>
                <div className="dbox">
                  <p>No. of rooms owned :</p>
                  <p>2</p>
                </div>
              </div>
            )}
            {activeSection === 'explore' && (
              <div className="explore-section">
                <div className="dbox">
                  <p>Nearby Colleges :</p>
                  <ul>
                    <li>JD College - 6km</li>
                    <li>NIT College - 9km</li>
                    <li>SBJIT - 3km</li>
                    <li>Gurunanak - 12km</li>
                  </ul>
                </div>
                <div className="dbox">
                  <p>Nearby Facility :</p>
                  <ul>
                    <li>Bus Stop - 6km</li>
                    <li>Hospital & Medical Store - 9km</li>
                    <li>Stationary - 3km</li>
                  </ul>
                </div>
                <div className="dbox">
                  <p style={{textAlign:'center'}}>Map View</p>
                  <img style={{width:'250px', height:'250px'}} src={Hou} alt="not show" />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
