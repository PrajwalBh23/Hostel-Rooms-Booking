import React, { useState} from 'react';
import { Tabs, Tab, Toolbar, Typography } from '@mui/material';
import logo from '../images/Logo5.png';
import CustomizedMenus from './Dropdown.js';
import Headset from './Headset.js';
import './Landing.css';
import ReactPlayer from 'react-player/youtube'
// import './Search.css';

import { NavLink } from 'react-router-dom';
import { brown } from '@mui/material/colors';

function Header() {
    const [value, setValue] = useState(0);
    const [searchOption, setSearchOption] = useState('option1'); // Initialize with option1

    const handleSearchOptionChange = (e) => {
        setSearchOption(e.target.value);
    };

    // Video Start 
    function VideoComponent() {
        const [playing, setPlaying] = useState(false);
    
        const handleVideoClick = () => {
            setPlaying(!playing);
        };
    
        return (
            <div className="video-container" onClick={handleVideoClick}>
                <ReactPlayer
                    url="https://www.youtube.com/watch?v=zMR_NI7zISE"
                    width="100%"
                    height="100%"
                    playing={playing}
                    controls={true}
                />
            </div>
        );
    }

    return (
        <>
            <div className="contain_land">
                <div className='Height-apply'>
                    <Toolbar >
                        <Typography >
                            <NavLink to={"/"} className="logo-container">
                                <img src={logo} width={"205px"} height={"155px"} alt="" />
                                <div className="logo-text">
                                    <div className="logo-text-line1">Scholar</div>
                                    <div className="logo-text-line2">Stay</div>
                                </div>
                            </NavLink>
                        </Typography>

                        <Tabs sx={{ ml: "auto" }}>
                            <Tab icon={<Headset fontSize='2.2rem' style={{ color: 'white' }} />} />
                            <Tab icon={<CustomizedMenus fontSize="1.9rem" style={{ color: 'white' }} />} />
                        </Tabs>
                    </Toolbar>

                    <Toolbar>
                        <Tabs sx={{ m: "auto" }} className='color-underline' textColor='inherit' indicatorColor='primary' value={value} onChange={(e, val) => setValue(val)}>
                            <Tab LinkComponent={NavLink} style={{ fontSize: 20, color: { brown }, marginRight: '20px', fontWeight: 'bold' }} to="/rooms" label='Rooms/Flats' />
                            <Tab LinkComponent={NavLink} style={{ fontSize: 20, color: { brown }, marginRight: '20px', fontWeight: 'bold' }} to="/hostels" label='Hostels' />
                            <Tab LinkComponent={NavLink} style={{ fontSize: 20, color: { brown }, fontWeight: 'bold' }} to="/add" label='Post Property' />
                        </Tabs>
                    </Toolbar>

                    <Toolbar className='special'>
                        <Tabs sx={{ m: "auto" }} >
                            <h2 sx={{ m: 'auto' }} className='slo_text'>Where comfort meets community and student find thier second home</h2>
                        </Tabs>
                        <div className="search-bar">
                            <select className="select-option" onChange={handleSearchOptionChange} value={searchOption}>
                                <option value="option1">College</option>
                                <option value="option2">Area</option>
                            </select>

                            <div className="search-container">
                                {searchOption === 'option1' ? (
                                    <input type="text" placeholder="Enter College Name" />
                                ) : (
                                    <input type="text" placeholder="Enter Area Name" />
                                )}
                                <button className='but'>Search</button>
                            </div>
                        </div>
                    </Toolbar>
                </div>
                <div className="Land_block">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta ea delectus rerum voluptas deleniti, non dolores magnam cupiditate nobis ipsa recusandae, blanditiis praesentium aspernatur quibusdam amet sed cumque quae voluptatibus.
                </div>
                <div className="Land_block">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta ea delectus rerum voluptas deleniti, non dolores magnam cupiditate nobis ipsa recusandae, blanditiis praesentium aspernatur quibusdam amet sed cumque quae voluptatibus.
                </div>
                <div className="Land_block">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta ea delectus rerum voluptas deleniti, non dolores magnam cupiditate nobis ipsa recusandae, blanditiis praesentium aspernatur quibusdam amet sed cumque quae voluptatibus.
                </div>
                <div className="Land_block">
                    <div className="video-container">
                    <VideoComponent />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header;
