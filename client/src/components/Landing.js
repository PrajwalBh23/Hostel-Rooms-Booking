import React, { useState } from 'react';
import { AppBar, Tabs, Tab, Toolbar, Typography } from '@mui/material';
import logo from '../images/Logo5.png';
import HeadsetMicRoundedIcon from '@mui/icons-material/HeadsetMicRounded';
import CustomizedMenus from './Dropdown.js';
import './Landing.css';
// import './Search.css';

import { NavLink } from 'react-router-dom';
import { brown } from '@mui/material/colors';

function Header() {
    const [value, setValue] = useState(0); // Set an initial value for the Tabs component

    return (
        <>
            <AppBar className='Height-apply'>
                <Toolbar >
                    <Typography >
                        <NavLink to={"/"} className="logo-container">
                            <img src={logo} width={"150px"} height={"105px"} alt="" />
                            <div className="logo-text">
                                <div className="logo-text-line1">Scholar</div>
                                <div className="logo-text-line2">Stay</div>
                            </div>
                        </NavLink>
                    </Typography>

                    <Tabs sx={{ ml: "auto" }}>
                        <Tab LinkComponent={NavLink} to="/add" icon={<HeadsetMicRoundedIcon style={{ color: 'white', fontSize: '1.9rem' }} />} />
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
                        <select className="select-option">
                            <option value="option1">College</option>
                            <option value="option2">Area</option>
                        </select>

                        <div className="search-container">
                            <input type="text" placeholder="Search..." />
                            <button className='but'>Search</button>
                        </div>
                    </div>
                </Toolbar>
                <br />
            </AppBar>
        </>
    )
}

export default Header;
