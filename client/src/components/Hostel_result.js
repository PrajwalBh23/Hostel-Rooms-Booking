import axios from 'axios';
import React, { useState, useEffect } from 'react';
// import { NavLink } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import Header from './Header.js';
import './Hostel.css';
import Checkbox from '@mui/material/Checkbox';
import house from '../images/House_sample.jpg'
import VerifiedRoundedIcon from '@mui/icons-material/VerifiedRounded';
import map from '../images/map1.jpeg'
import { useLocation, useNavigate } from 'react-router-dom';

function HostelResults() {
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
    const navigate = useNavigate();
    const [hostelData, setHostelData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const location = useLocation();
    const { searchOption, searchCollege, propertyType } = location.state;
    // const [backendSearchOptionValue, setBackendSearchOptionValue] = useState('');
    // const [backendSearchCollegeValue, setBackendSearchCollegeValue] = useState('');
    const [filters, setFilters] = useState({
        share: [],
        gender: [],
        semiFurnished: [],
        deposit: [],
        price: [],
        hostelType: [], // Add this line to initialize hostelType as an empty array
    });


    useEffect(() => {
        console.log(searchOption);
        console.log(searchCollege);

        const fetchData = async () => {
            setLoading(true);
            setError(null);

            try {
                const response = await axios.get(`https://scholar-stay.onrender.com/stay/search?propertyType=${propertyType}&searchOption=${searchOption}&searchCollege=${searchCollege}`, {
                    params: {
                        ...filters,
                    }
                });

                setHostelData(response.data.stays);
            } catch (error) {
                setError('No Result Found');
                console.error('Shit, fetching room data from backend:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [filters, searchCollege, searchOption, propertyType]);

    const handleCheckboxChange = (filterType, value) => {
        setFilters((prevFilters) => ({
            ...prevFilters,
            [filterType]: prevFilters[filterType].includes(value) ? [] : [value],
        }));
    };

    const handlePriceCheckboxChange = (priceRange) => {
        setFilters((prevFilters) => ({
            ...prevFilters,
            price: prevFilters.price === priceRange ? '' : priceRange,
        }));
    };

    const handleViewMore = (_id) => {
        console.log(_id);
        navigate(`/detail/${_id}`, { state: { _id } });
    };

    return (
        <>
            <Header />
            <div>
                <Box display="flex" marginTop="7%" width="100%" flexDirection="row">
                    <Typography sx={{ fontFamily: "fantasy" }} width={"25%"}>
                        <div className="filter">
                            <div className="main">Filters</div>
                            <div className="contain">
                                <div className="head">Hostel Type</div>
                                <ul>
                                    <li>
                                        <Checkbox
                                            {...label}
                                            checked={filters.hostelType.includes('Government')}
                                            onChange={() => handleCheckboxChange('hostelType', 'Government')}
                                        />
                                        Government
                                    </li>
                                    <li>
                                        <Checkbox
                                            {...label}
                                            checked={filters.hostelType.includes('Private')}
                                            onChange={() => handleCheckboxChange('hostelType', 'Private')}
                                        />
                                        Private
                                    </li>
                                </ul>
                            </div>
                            <div className="contain">
                                <div className="head">Available For</div>
                                <ul>
                                    <li><Checkbox
                                        {...label}
                                        checked={filters.gender.includes('Female')}
                                        onChange={() => handleCheckboxChange('gender', 'Female')}
                                    />
                                        Female</li>
                                    <li><Checkbox
                                        {...label}
                                        checked={filters.gender.includes('Male')}
                                        onChange={() => handleCheckboxChange('gender', 'Male')}
                                    />
                                        Male</li>
                                </ul>
                            </div>
                            <div className="contain">
                                <div className="head">Price</div>
                                <ul>
                                    <li>
                                        <Checkbox
                                            {...label}
                                            checked={filters.price === '1000-2000'}
                                            onChange={() => handlePriceCheckboxChange('1000-2000')}
                                        />
                                        1000-2000
                                    </li>
                                    <li>
                                        <Checkbox
                                            {...label}
                                            checked={filters.price === '2000-3000'}
                                            onChange={() => handlePriceCheckboxChange('2000-3000')}
                                        />
                                        2000-3000
                                    </li>
                                    <li>
                                        <Checkbox
                                            {...label}
                                            checked={filters.price === '3000-5000'}
                                            onChange={() => handlePriceCheckboxChange('3000-5000')}
                                        />
                                        3000-5000
                                    </li>
                                    <li>
                                        <Checkbox
                                            {...label}
                                            checked={filters.price === 'More than 5000'}
                                            onChange={() => handlePriceCheckboxChange('More than 5000')}
                                        />
                                        More than 5000
                                    </li>
                                </ul>
                            </div>
                            <div className="contain">
                                <div className="head">Furniture Status</div>
                                <ul>
                                    <li><Checkbox
                                        {...label}
                                        checked={filters.semiFurnished.includes('Un-Furnished')}
                                        onChange={() => handleCheckboxChange('semiFurnished', 'Un-Furnished')}
                                    />
                                        Un-Furnished</li>
                                    <li><Checkbox
                                        {...label}
                                        checked={filters.semiFurnished.includes('Semi-Furnished')}
                                        onChange={() => handleCheckboxChange('semiFurnished', 'Semi-Furnished')}
                                    />
                                        Semi-Furnished</li>
                                    <li><Checkbox
                                        {...label}
                                        checked={filters.semiFurnished.includes('Full-Furnished')}
                                        onChange={() => handleCheckboxChange('semiFurnished', 'Full-Furnished')}
                                    />Full-Furnished</li>
                                </ul>
                            </div>
                            <div className="contain">
                                <div className="head">Deposite</div>
                                <ul>
                                    <li><Checkbox
                                        {...label}
                                        checked={filters.deposit.includes('No Deposit')}
                                        onChange={() => handleCheckboxChange('deposit', 'No Deposit')}
                                    />No Deposit</li>
                                    <li><Checkbox
                                        {...label}
                                        checked={filters.deposit.includes('1 Deposit')}
                                        onChange={() => handleCheckboxChange('deposit', '1 Deposit')}
                                    />1 Month Deposit</li>
                                    <li><Checkbox
                                        {...label}
                                        checked={filters.deposit.includes('2 Deposit')}
                                        onChange={() => handleCheckboxChange('deposit', '2 Deposit')}
                                    />2 Month Deposit</li>
                                    <li><Checkbox
                                        {...label}
                                        checked={filters.deposit.includes('3 Deposit')}
                                        onChange={() => handleCheckboxChange('deposit', '3 Deposit')}
                                    />3 Month Deposit</li>
                                </ul>
                            </div>
                            <div className="contain">
                                <div className="head">Including Bills</div>
                                <ul>
                                    <li><Checkbox {...label} />Electricity</li>
                                    <li><Checkbox {...label} />Water</li>
                                    <li className='Setprop'><Checkbox {...label} />Meal</li>
                                </ul>
                            </div>
                        </div>
                    </Typography>
                    <Typography sx={{ fontFamily: "fantasy" }} width={"75%"} variant="h2" height={'100%'}>
                        {loading ? (
                            <div className='loading'>Loading...</div>
                        ) : error ? (
                            <div className="no-results">{error}</div>
                        ) : hostelData.length === 0 ? (
                            <div className="no-results">No results found</div>
                        ) : (
                            hostelData.map((hostel, index) => (
                                <div key={index} className="result">
                                    <div className="box">
                                        <img src={house} alt="not showing" />
                                        <div className="info">
                                            <div className="price">₹{hostel.price}</div>
                                            <div className="address">{hostel.address}</div>

                                            <div className="buttons">
                                                <button className='button2'>{hostel.share} - {hostel.sharing}</button>
                                                <button className='button2'>{hostel.semiFurnished}</button>
                                                <button className='button2'>{hostel.gender}</button>
                                            </div>
                                            <br></br>

                                            <div className="extra">2 Bedrooms with Separate Common Area & Seprate Washroom</div>

                                            {/* <br></br> */}
                                            <div className="availablity">Available Now</div>
                                            <button className='button'>{hostel.experience} Years Experience in Renting </button>
                                        </div>
                                        <div className="map">
                                            <img src={map} alt="" />
                                        </div>
                                    </div>
                                    <div className="block">

                                        <div className="owner1">

                                            <span><VerifiedRoundedIcon style={{ verticalAlign: 'text-top', marginTop: '-2px', marginRight: '2px', color: '#0073e6' }} /></span>
                                            <span className='inner-block'>{hostel.name}<i style={{ fontSize: 'small', color: '#0073e6' }}>Owner details</i></span>

                                        </div>

                                        <div className="corner">
                                            <p onClick={() => handleViewMore(hostel._id)} className='noUnderline'>Explore More</p>
                                        </div>
                                    </div>
                                </div>
                            ))
                        )}


                    </Typography>
                </Box>

            </div>
        </>
    )
}

export default HostelResults;
