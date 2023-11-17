import React, { useState, useEffect } from 'react';
import { AppBar, Tabs, Tab, Toolbar, Typography } from '@mui/material';
import logo from '../images/Logo5.png';
import CustomizedMenus from './Dropdown.js';
import Headset from './Headset.js';
import './Header.css';
import { Link } from 'react-router-dom';
import free from '../images/Icon-free.jpg';
import axios from 'axios';

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

function Header() {
    const [searchOption, setSearchOption] = useState('option1');
    const [searchCollege, setSearchCollege] = useState('');
    const [searchValue, setSearchValue] = useState('');
    const [collegeSuggestions, setCollegeSuggestions] = useState([]);

    const handleSearchOptionChange = (e) => {
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

    const handleSearchInputChange = (e) => {
        setSearchValue(e.target.value);
    };
    
    const handleCollegeSelect = (selectedCollege) => {
        setSearchCollege(selectedCollege);
        setCollegeSuggestions([]);
    };

    const handleSearch = () => {
        const searchData = {
            searchOption,
            searchValue,
        };

        // Make a POST request to your backend endpoint
        axios.post('http://localhost:5000/stay/search', searchData)
            .then(response => {
                // Handle the response from the backend
                console.log('Backend response:', response.data);
                // You can use the response data as needed
            })
            .catch(error => {
                // Handle errors
                console.error('Error sending data to backend:', error);
            });
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

    return (
        <>
            <AppBar className='Height-appl'>
                <Toolbar>
                    <div className='spacin'>
                        <Typography>
                            <Link to={"/"} className="logo-containe">
                                <img src={logo} width={"128px"} alt="" />
                                <div className="logo-tex">
                                    <div className="logo-text-lin1">Scholar</div>
                                    <div className="logo-text-lin2">Stay</div>
                                </div>
                            </Link>
                        </Typography>
                    </div>
                    <div className='marginleft'>
                        <select className='Selecting' onChange={handleSearchInputChange}>
                            <option value="option1">Rooms</option>
                            <option value="option2">Hostels</option>
                            <option value="option3">Flats</option>
                        </select>
                    </div>
                    <div className='margin-spac'>
                        <div className="search-ba">
                            <select className="select-optio" onChange={handleSearchOptionChange}>
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
                            <button className="butt" onClick={handleSearch}>
                                Search
                            </button>
                        </div>
                    </div>
                    <div>
                        <Tabs sx={{ ml: "auto" }}>
                            <Link style={{ textDecoration: 'none' }} to="/add" ><button className='posting'>Post Property <img style={{ marginLeft: "3px" }} src={free} alt="" /></button></Link>
                            <Tab icon={<Headset style={{ color: 'white', fontSize: '2rem' }} />} />
                            <Tab icon={<CustomizedMenus fontSize="1.9rem" style={{ color: 'white' }} />} />
                        </Tabs>
                    </div>
                </Toolbar>
            </AppBar>
        </>
    );
}

export default Header;
