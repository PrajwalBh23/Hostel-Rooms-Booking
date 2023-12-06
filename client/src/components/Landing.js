// import axios from 'axios';
import React, { useState, useEffect } from 'react';
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
import { useNavigate } from 'react-router-dom';


import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
// import './Search.css';

import { NavLink } from 'react-router-dom';
import { brown } from '@mui/material/colors';

const collegeList = [
    'Rashtrasant Tukadoji Maharaj Nagpur University',
    'Kavikulaguru Kalidas Sanskrit University',
    'Maharashtra Animal and Fishery Sciences University',
    'Maharashtra National Law University, Nagpur',
    'Laxminarayan Innovation Technological University',
    'Symbiosis International University',
    'Indian Institute of Information Technology, Nagpur',
    'National Power Training Institute',
    'Visvesvaraya National Institute of Technology Nagpur',
    'Government College of Engineering, Nagpur',
    'Indian Institute of Fire Engineering, Nagpur',
    'Laxminarayan Innovation Technological University',
    'Cummins College of Engineering for Women, Nagpur',
    'G. H. Raisoni College of Engineering Nagpur',
    'S. B. Jain Institute of Technology, Management and Research',
    'Shri Ramdeobaba College of Engineering and Management',
    'St. Vincent Pallotti College of Engineering and Technology',
    'Yeshwantrao Chavan College of Engineering',
    'G H Raisoni Academy of Engineering and Technology',
    'Priyadarshini College of Engineering, Nagpur',
    'JD College of Engineering and Management',
    'Tulashiramaji Gayakawad Patil College of Engineering and Technology',
    'Priyadarshini JL College of Engineering',
    'Institute of Science, Nagpur',
    'Jhulelal Institute of Technology',
    'Kavikulguru Institute of Technology and Science',
    'Nagpur Institute of Technology',
    'Priyadarshini Institute of Engineering and Technology',
    'Sharad Pawar College of Pharmacy',
    'Smt. Radhikatai Pandav College of Engineering, Nagpur',
    'St. Francis De Sales College',
    'Wainganga College of Engineering and Management',
    'Aabha Gaikwad-Patil College of Engineering',
    'Dr. Babasaheb Ambedkar College of Engineering and Research',
    'Gurunanak Institute of Engineering and Management',
    'ITM College of Engineering',
    'Nagarjuna Institute of Engineering Technology & Management',
    'Nuva College of Engineering & Technology',
    'Priyadarshini Indira Gandhi College of Engineering',
    'Rajiv Gandhi College of Engineering & Research',
    'Shri Govindarao Wanjari College of Engineering and Technology',
    'Smt. Bhagwati Chaturvedi College of Engineering',
    'Smt. Rajshree Mulak College of Engineering for Women',
    'Suryodaya College of Engineering and Technology',
    'V.M. Institute of Engineering and Technology',
    'Vidya Niketan Institute of Engineering & Technology',
    'Vilasarao Deshamukh College of Engineering and Technology',
    'Government Polytechnic, Nagpur',
    'Shri Datta Meghe Polytechnic',
    'Maharashtra National Law University, Nagpur',
    'Symbiosis Law School, Nagpur',
    'Indian Institute of Management Nagpur',
    'Datta Meghe Institute of Management Studies',
    'Institute of Management Technology, Nagpur',
    'Shri Ramdeobaba College of Engineering and Management',
    'Tirpude Institute of Management Education',
    'Dr. Ambedkar College, Nagpur',
    'Lady Amritbai Daga and Smt. Ratnidevi Purohit College for Women',
    'Shri Binzani City College',
    'Dhanwate National College',
    'St. Francis De Sales College',
    'G.H. Raisoni Department of Microbiology and Biotechnology',
    'G.S. College of Commerce and Economics',
    'Hislop College',
    'Institute of Science, Nagpur',
    'Shivaji Science College, Nagpur',
    'Vasantrao Naik Government Institute of Arts and Social Sciences',
    'All India Institute of Medical Sciences, Nagpur',
    'Government Medical College and Hospital, Nagpur',
    'Indira Gandhi Government Medical College, Nagpur',
    'NKP Salve Institute of Medical Science and Hospital, Nagpur',
    'Datta Meghe Institute of Medical Science Wanadongri, Nagpur',
    'Shri Datta Meghe College of Architecture'
];

function Landing() {
    const navigate = useNavigate();
    const [value, setValue] = useState(0);
    const [searchOption, setSearchOption] = useState('option1');
    const [searchCollege, setSearchCollege] = useState('');
    const [collegeSuggestions, setCollegeSuggestions] = useState([]);
    const [propertyType, setPropertyType] = useState('room');

    const handleSearchOptionChange = (e) => {
        setPropertyType(e.target.value);  // Set propertyType only
        setSearchOption(e.target.value);
        setSearchCollege('');
        setCollegeSuggestions([]);
    };    

    const handleCollegeChange = (e) => {
        const inputValue = e.target.value;
        setSearchCollege(inputValue);

        // Update college suggestions based on input
        const filteredColleges = collegeList.filter((college) =>
            college.toLowerCase().includes(inputValue.toLowerCase())
        );

        setCollegeSuggestions(filteredColleges);
    };

    const handleCollegeSelect = (selectedCollege) => {
        setSearchCollege(selectedCollege);
        setCollegeSuggestions([]);
    };
    
    const handleSearch = () => {
        handleSearchOptionChange({ target: { value: searchOption } });  // Ensure propertyType is set
        console.log(`Here it is ${propertyType}`);
        navigate('/roomsresult', { state: { searchOption, searchCollege, propertyType } });
    };    
    

    useEffect(() => {
        // Add event listener to close suggestions on clicking outside the input area
        const handleClickOutside = (e) => {
            const searchContainer = document.querySelector('.search-container');
            if (searchContainer && !searchContainer.contains(e.target)) {
                // Click is outside the search container, close suggestions
                setCollegeSuggestions([]);
            }
        };

        // Attach the event listener
        document.addEventListener('click', handleClickOutside);

        // Cleanup the event listener on component unmount
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

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
                        <div style={{ color: 'black' }} className="search-bar">
                            <select
                                className="select-option"
                                onChange={handleSearchOptionChange}
                                value={searchOption}
                            >
                                <option value="option1">College</option>
                                <option value="option2">Area</option>
                            </select>

                            <div className="search-container">
                                {searchOption === 'option1' ? (
                                    <div className="search-input">
                                        <input
                                            type="text"
                                            placeholder="Enter College Name"
                                            value={searchCollege}
                                            onChange={handleCollegeChange}
                                        />
                                        {collegeSuggestions.length > 0 && (
                                            <div className="suggestions">
                                                {collegeSuggestions.map((college, index) => (
                                                    <div key={index} onClick={() => handleCollegeSelect(college)}>
                                                        {college}
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                ) : (
                                    <input
                                        type="text"
                                        placeholder="Enter Area Name"
                                        value={searchCollege}
                                        onChange={(e) => setSearchCollege(e.target.value)}
                                    />
                                )}
                            </div>
                            <button className="but" onClick={handleSearch}>
                                Search
                            </button>
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
                    <img src={pg} alt="" style={{ marginTop: '0', height: '230px', width: '400px' }} />
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
                                sx={{
                                    "& .MuiOutlinedInput-root": {
                                        height: '40px',
                                        marginTop: '3px'
                                    },
                                }}
                            />
                            <TextField
                                placeholder="Please enter Your Phone No."
                                id="outlined-basic"
                                label="Phone No."
                                variant="outlined"
                                name="Phone"
                                sx={{
                                    "& .MuiOutlinedInput-root": {
                                        height: '40px',
                                        marginTop: '3px'
                                    },
                                }}
                            />
                            <TextField
                                placeholder="Please enter Your Email Id"
                                id="outlined-basic"
                                label="Email Id"
                                variant="outlined"
                                name="Email id"
                                sx={{
                                    "& .MuiOutlinedInput-root": {
                                        height: '40px',
                                        marginTop: '3px'
                                    },
                                }}
                            />
                            <TextField
                                placeholder="Please enter Your Query"
                                id="outlined-basic"
                                label="Query"
                                variant="outlined"
                                name="Query"
                                sx={{
                                    "& .MuiOutlinedInput-root": {
                                        height: '40px',
                                        marginTop: '3px'
                                    },
                                }}
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

export default Landing;