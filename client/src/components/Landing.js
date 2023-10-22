import React, { useState } from 'react';
import { Tabs, Tab, Toolbar, Typography, TextField, Button } from '@mui/material';
import logo from '../images/Logo5.png';
import CustomizedMenus from './Dropdown.js';
import Headset from './Headset.js';
import './Landing.css';
import ReactPlayer from 'react-player/youtube'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import YouTubeIcon from '@mui/icons-material/YouTube';
import home from '../images/home.jpg';
import pg from '../images/pg.jpg'; 

import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
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
                                    <div className="logo-text-line1">Scholar's</div>
                                    <div className="logo-text-line2">Stay</div>
                                </div>
                            </NavLink>
                        </Typography>

                        <Tabs sx={{ ml: "auto" }}>
                            <Tab id='contact' icon={<Headset fontSize='2.2rem' style={{ color: 'white' }} />} />
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
                <div className="Land_block-1">
                    <div class="desc-1">
                        <span className='text'>
                            <h1>Step into the extraordinary  </h1>
                            <h3>our rooms are your gateway<br /> to unparalleled comfort.</h3>
                            <button className="block-button">Explore Now</button>
                        </span>
                    </div>
                    <img src={home} alt="" style={{ marginRight: '10%', marginTop: '0', height: '230px', width: '400px' }} />
                </div>

                <div className="Land_block-2">
                            <img src={pg} alt="" style={{marginTop: '0', height: '230px', width: '400px' }}  />
                    <div class="desc-2">
                        <div className="text-2">
                            <h1>Step into the extraordinary</h1>
                            <h3>Our rooms are your gateway to unparalleled comfort , sit amet consectetur, adipisicing elit..</h3>
                            <button className="block-button">Explore Now</button>
                        </div>
                    </div>
                </div>

                <div className="Land_block-4">
                    <div id='about' className="video-container">
                        <VideoComponent />
                    </div>
                </div>
                <div className="footer" style={{ margin: "auto" }}>
                    <div className="left_side">
                        <div className="logo_sec">
                            <img style={{ marginTop: '10%' }} src={logo} width={"195px"} height={"145px"} alt="no logo" />
                            <p style={{ marginLeft: '10%', textAlign: 'center', fontStyle: 'italic', fontWeight: 'bold' }}>Where comfort meets community and studenty find their second home</p>
                        </div>
                        <div className="other-section">
                            <div className="page_contian">
                                <div className="page_block">
                                    <ul>
                                        <p style={{ fontSize: 'large', fontWeight: 'bold' }}>Pages</p>
                                        <li><a href="/">Home</a></li>
                                        <li><a href="#about">About Us</a></li>
                                        <li><a href="#contact">Contact Us</a></li>
                                        <li><a href="/rooms">Room</a></li>
                                        <li><a href="/hostels">Hostels</a></li>
                                        <li><a href="/add">Add Property</a></li>
                                    </ul>
                                </div>
                                <div className="page_block">
                                    <ul>
                                        <p style={{ fontSize: 'large', fontWeight: 'bold' }}>My Account</p>
                                        <li><a href="/rooms">Sign In / Register</a></li>
                                        <li><a href="/rooms">My Wishlist</a></li>
                                        <li><a href="/rooms">Theme</a></li>

                                    </ul>
                                </div>
                            </div>
                            <div className="social">
                                <p style={{ fontSize: 'large', fontWeight: 'bold', marginLeft: '40px' }}>Follow Us</p>
                                <ul className='Social_icon'>
                                    <li><a href="/facebook"><FacebookIcon /></a></li>
                                    <li><a href="/insta"><InstagramIcon /></a></li>
                                    <li><a href="/pin"><PinterestIcon /></a></li>
                                    <li><a href="/youtube"><YouTubeIcon /></a></li>

                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="vertical-line"></div>
                    <div className="right_side">
                        <p style={{ fontSize: 'large', fontWeight: 'bold' }}>Customer Ratings & Reviews</p>
                        <div className="rate">
                            <TextField
                                placeholder="Please enter Your Name"
                                id="outlined-basic"
                                label="Name"
                                variant="outlined"
                                name="Name"
                            />
                            <TextField
                                placeholder="Please enter Your Phone No."
                                id="outlined-basic"
                                label="Phone No."
                                variant="outlined"
                                name="Phone"
                            />
                            <TextField
                                placeholder="Please enter Your Email Id"
                                id="outlined-basic"
                                label="Email Id"
                                variant="outlined"
                                name="Email id"
                            />
                            <TextField
                                placeholder="Please enter Your Query"
                                id="outlined-basic"
                                label="Query"
                                variant="outlined"
                                name="Query"
                            />

                            <Stack spacing={1}>
                                <Rating name="half-rating" defaultValue={2.5} precision={1} />
                            </Stack>

                            <Button>Submit</Button>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default Header;
