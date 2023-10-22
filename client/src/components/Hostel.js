import React from 'react';
// import { NavLink } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import Header from './Header.js';
import './Hostel.css';
import Checkbox from '@mui/material/Checkbox';
import house from '../images/House_sample.jpg'
import VerifiedRoundedIcon from '@mui/icons-material/VerifiedRounded';
import map from '../images/map1.jpeg'

function Rooms() {
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

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
                                    <li><Checkbox {...label} />Government</li>
                                    <li><Checkbox {...label} />Private</li>
                                </ul>
                            </div>
                            <div className="contain">
                                <div className="head">Price</div>
                                <ul>
                                    <li><Checkbox {...label} />1000-2000</li>
                                    <li><Checkbox {...label} />2000-3000</li>
                                    <li><Checkbox {...label} />3000-5000</li>
                                    <li><Checkbox {...label} />More than 5000</li>
                                </ul>
                            </div>
                            <div className="contain">
                                <div className="head">Furniture Status</div>
                                <ul>
                                    <li><Checkbox {...label} />Un-Furnished</li>
                                    <li><Checkbox {...label} />Semi-Furnished</li>
                                    <li><Checkbox {...label} />Fully-Furnished</li>
                                </ul>
                            </div>
                            <div className="contain">
                                <div className="head">Available For</div>
                                <ul>
                                    <li><Checkbox {...label} />Girls</li>
                                    <li><Checkbox {...label} />Boys</li>
                                </ul>
                            </div>
                            <div className="contain">
                                <div className="head">Including Bills</div>
                                <ul>
                                    <li><Checkbox {...label} />Electricity</li>
                                    <li><Checkbox {...label} />Water</li>
                                    <li><Checkbox {...label} />Meal</li>
                                </ul>
                            </div>
                        </div>
                    </Typography>
                    <Typography sx={{ fontFamily: "fantasy" }} width={"75%"} variant="h2" height={'100%'}>
                        {/*1*/}
                        <div className="result">
                            <div className="box">
                                <img src={house} alt="not showing" />
                                <div className="info">
                                    <div className="price">₹10000-12000</div>
                                    <div className="address">House No. 9 Mahada Colony, Butibori Nagpur</div>

                                    <div className="buttons">
                                        <button className='button2'>Shared +4</button>
                                        <button className='button2'>Semi-Furnished</button>
                                        <button className='button2'>Only Girls</button>

                                    </div>
                                    <br></br>

                                    <div className="extra">2 Bedrooms with Separate Common Area & Seprate Washroom</div>

                                    {/* <br></br> */}
                                    <div className="availablity">Available Now</div>
                                    <button className='button'>10+ Years Experience</button>
                                </div>
                                <div className="map">
                                    <img src={map} alt="" />
                                </div>
                            </div>
                            <div className="block">

                                <div className="owner1">

                                    <span><VerifiedRoundedIcon style={{ verticalAlign: 'text-top', marginTop: '-2px', marginRight: '2px', color:'#0073e6' }} /></span>
                                    <span className='inner-block'> Mansi Pillewan<i style={{ fontSize: 'small', color: '#0073e6' }}>Owner details</i></span>

                                </div>

                                <div className="corner">
                                    <a href="/detail" className='noUnderline'>View More</a>
                                </div>
                            </div>
                        </div>

                        {/*2*/}
                        <div className="result">
                            <div className="box">
                                <img src={house} alt="not showing" />
                                <div className="info">
                                    <div className="price">₹10000-12000</div>
                                    <div className="address">House No. 9 Mahada Colony, Butibori Nagpur</div>

                                    <div className="buttons">
                                        <button className='button2'>Shared +4</button>
                                        <button className='button2'>Semi-Furnished</button>
                                        <button className='button2'>Only Girls</button>

                                    </div>
                                    <br></br>

                                    <div className="extra">2 Bedrooms with Separate Common Area & Seprate Washroom</div>

                                    {/* <br></br> */}
                                    <div className="availablity">Available Now</div>
                                    <button className='button'>10+ Years Experience</button>
                                </div>
                                <div className="map">
                                    <img src={map} alt="" />
                                </div>
                            </div>
                            <div className="block">

                                <div className="owner1">

                                    <span><VerifiedRoundedIcon style={{ verticalAlign: 'text-top', marginTop: '-2px', marginRight: '2px', color:'#0073e6' }} /></span>
                                    <span className='inner-block'> Mansi Pillewan<i style={{ fontSize: 'small', color: '#0073e6' }}>Owner details</i></span>

                                </div>

                                <div className="corner">
                                    <a href="/detail" className='noUnderline'>View More</a>
                                </div>
                            </div>
                        </div>

                        {/*3*/}
                        <div className="result">
                            <div className="box">
                                <img src={house} alt="not showing" />
                                <div className="info">
                                    <div className="price">₹10000-12000</div>
                                    <div className="address">House No. 9 Mahada Colony, Butibori Nagpur</div>

                                    <div className="buttons">
                                        <button className='button2'>Shared +4</button>
                                        <button className='button2'>Semi-Furnished</button>
                                        <button className='button2'>Only Girls</button>

                                    </div>
                                    <br></br>

                                    <div className="extra">2 Bedrooms with Separate Common Area & Seprate Washroom</div>

                                    {/* <br></br> */}
                                    <div className="availablity">Available Now</div>
                                    <button className='button'>10+ Years Experience</button>
                                </div>
                                <div className="map">
                                    <img src={map} alt="" />
                                </div>
                            </div>
                            <div className="block">

                                <div className="owner1">

                                    <span><VerifiedRoundedIcon style={{ verticalAlign: 'text-top', marginTop: '-2px', marginRight: '2px', color:'#0073e6' }} /></span>
                                    <span className='inner-block'> Mansi Pillewan<i style={{ fontSize: 'small', color: '#0073e6' }}>Owner details</i></span>

                                </div>

                                <div className="corner">
                                    <a href="/detail" className='noUnderline'>View More</a>
                                </div>
                            </div>
                        </div>

                        {/*4*/}
                        <div className="result">
                            <div className="box">
                                <img src={house} alt="not showing" />
                                <div className="info">
                                    <div className="price">₹10000-12000</div>
                                    <div className="address">House No. 9 Mahada Colony, Butibori Nagpur</div>

                                    <div className="buttons">
                                        <button className='button2'>Shared +4</button>
                                        <button className='button2'>Semi-Furnished</button>
                                        <button className='button2'>Only Girls</button>

                                    </div>
                                    <br></br>

                                    <div className="extra">2 Bedrooms with Separate Common Area & Seprate Washroom</div>

                                    {/* <br></br> */}
                                    <div className="availablity">Available Now</div>
                                    <button className='button'>10+ Years Experience</button>
                                </div>
                                <div className="map">
                                    <img src={map} alt="" />
                                </div>
                            </div>
                            <div className="block">

                                <div className="owner1">

                                    <span><VerifiedRoundedIcon style={{ verticalAlign: 'text-top', marginTop: '-2px', marginRight: '2px', color:'#0073e6' }} /></span>
                                    <span className='inner-block'> Mansi Pillewan<i style={{ fontSize: 'small', color: '#0073e6' }}>Owner details</i></span>

                                </div>

                                <div className="corner">
                                    <a href="/detail" className='noUnderline'>View More</a>
                                </div>
                            </div>
                        </div>

                        {/*5*/}
                        <div className="result">
                            <div className="box">
                                <img src={house} alt="not showing" />
                                <div className="info">
                                    <div className="price">₹10000-12000</div>
                                    <div className="address">House No. 9 Mahada Colony, Butibori Nagpur</div>

                                    <div className="buttons">
                                        <button className='button2'>Shared +4</button>
                                        <button className='button2'>Semi-Furnished</button>
                                        <button className='button2'>Only Girls</button>

                                    </div>
                                    <br></br>

                                    <div className="extra">2 Bedrooms with Separate Common Area & Seprate Washroom</div>

                                    {/* <br></br> */}
                                    <div className="availablity">Available Now</div>
                                    <button className='button'>10+ Years Experience</button>
                                </div>
                                <div className="map">
                                    <img src={map} alt="" />
                                </div>
                            </div>
                            <div className="block">

                                <div className="owner1">

                                    <span><VerifiedRoundedIcon style={{ verticalAlign: 'text-top', marginTop: '-2px', marginRight: '2px', color:'#0073e6' }} /></span>
                                    <span className='inner-block'> Mansi Pillewan<i style={{ fontSize: 'small', color: '#0073e6' }}>Owner details</i></span>

                                </div>

                                <div className="corner">
                                    <a href="/detail" className='noUnderline'>View More</a>
                                </div>
                            </div>
                        </div>


                    </Typography>
                </Box>

            </div>
        </>
    )
}

export default Rooms;

