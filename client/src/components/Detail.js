import React, { useEffect, useState } from 'react';
import Header from './Header.js';
import './Detail.css';
import Hou from '../images/bac3.jpg';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import axios from 'axios';
import { useParams } from 'react-router-dom';

export default function Detail() {
  const { id } = useParams();
  const [roomData, setRoomData] = useState([]);
  const [activeSection, setActiveSection] = useState('overview');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSectionChange = (section) => {
    setActiveSection(section);
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await axios.get(`https://scholar-stay.onrender.com/stay/detail/${id}`);
        setRoomData(response.data.roomDetails);
      } catch (error) {
        setError('No Result Found');
        console.error('Error fetching room data from backend:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [id]);

  return (
    <>
      <Header />
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div className="no-results">{error}</div>
      ) : !roomData || Object.keys(roomData).length === 0 ? (
        <div className="no-results">No results found</div>
      ) : (
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
                    <p style={{ fontSize: '30px' }}>₹{roomData.price}/-</p>
                  </div>
                  <div className="dbox">
                    <p>Gender : {roomData.gender}</p>
                    <p>
                      Shared by:{' '}
                      {roomData.share === 'Single' ? 'Single' : `${roomData.sharing} Member`}
                    </p>
                  </div>
                  <div className="dbox">
                    <p>Configuration of Rooms :</p>
                    <ul>
                      {roomData.config.map((configItem, index) => (
                        <li key={index}>{configItem}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="dbox">
                    <p>Rules and Regulation :</p>
                    <ul>
                      {roomData.rules.map((configItem, index) => (
                        <li key={index}>{configItem}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="dbox">
                    <p>Deposite : {roomData.deposit}</p>
                  </div>
                  <div className="dbox">
                    <p>Parking : {roomData.park}</p>
                  </div>
                  <div className="dbox">
                    <p>Furnished : {roomData.semiFurnished}</p>
                    <p>Address :</p>
                    <p style={{ marginTop: '-5px' }}>{roomData.address}</p>
                  </div>
                  <div className="dbox">
                    <p>Bills Includes</p>
                    <ul>
                      {roomData.bill.map((configItem, index) => (
                        <li key={index}>{configItem}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
              {activeSection === 'owners' && (
                <div className="owners-section">
                  <div className="dbox">
                    <p>Owner Name :</p>
                    <p>{roomData.name}</p>
                  </div>
                  <div className="dbox">
                    <p style={{ fontSize: '30px' }}>₹{roomData.price}/-</p>
                  </div>
                  <div className="dbox">
                    <p style={{ paddingBottom: '2px' }}>Contact Details :</p>
                    <p style={{ paddingBottom: '2px' }}><LocalPhoneIcon style={{ verticalAlign: 'middle', paddingRight: '5px' }} />{roomData.phone}</p>
                    <p><EmailIcon style={{ verticalAlign: 'middle', paddingRight: '5px' }} />{roomData.email}</p>
                  </div>
                  <div className="dbox">
                    <p>Address :</p>
                    <p>{roomData.address}</p>
                  </div>
                  <div className="dbox">
                    <p>Experience in renting rooms :</p>
                    <p>{roomData.experience}</p>
                  </div>
                  <div className="dbox">
                    <p>No. of rooms owned :</p>
                    <p>{roomData.room}</p>
                  </div>
                </div>
              )}
              {activeSection === 'explore' && (
                <div className="explore-section">
                  <div className="dbox college_up">
                    <p>Nearby Facility :</p>
                    <ul>
                      {roomData.fact.map((configItem, index) => (
                        <li key={index}>{configItem}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="dbox college">
                    <p className='college_down'>Nearby Colleges :</p>
                    <ul>
                      {roomData.college.map((configItem, index) => (
                        <li key={index}>{configItem}</li>
                      ))}
                    </ul>
                  </div>
                  {/* <div className="dbox">
                    <p style={{ textAlign: 'center' }}>Map View</p>
                    <img style={{ width: '250px', height: '250px' }} src={Hou} alt="not show" />
                  </div> */}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
