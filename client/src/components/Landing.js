import React, { useState } from 'react';
import { AppBar, Tabs, Tab, Toolbar, Typography } from '@mui/material';
import logo from '../images/Logo5.png';
import HeadsetMicRoundedIcon from '@mui/icons-material/HeadsetMicRounded';
import Dropdown from './Dropdown.js';
import './Landing.css';
import SearchBar from './Search_bar';

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
                        <Tab LinkComponent={NavLink} to="/add" icon={<HeadsetMicRoundedIcon style={{ color: 'white' }}/>} />
                        <Tab LinkComponent={NavLink} to="/add" icon={<Dropdown style={{ color: 'white' }}/>} />
                    </Tabs>
                </Toolbar>

                <Toolbar>
                    <Tabs sx={{ m: "auto" }} className='color-underline' textColor='inherit' indicatorColor='primary' value={value} onChange={(e, val) => setValue(val)}>
                        <Tab LinkComponent={NavLink} style={{ fontSize: 20, color: { brown }, marginRight: '20px', fontWeight: 'bold' }} to="/add" label='Rooms/Flats' />
                        <Tab LinkComponent={NavLink} style={{ fontSize: 20, color: { brown }, marginRight: '20px', fontWeight: 'bold' }} to="/add" label='Hostels' />
                        <Tab LinkComponent={NavLink} style={{ fontSize: 20, color: { brown }, fontWeight: 'bold' }} to="/add" label='Post Property' />
                    </Tabs>
                </Toolbar>

                <Toolbar className='special'>
                    <Tabs sx={{ m: "auto" }} >
                        <h2 sx={{ m: 'auto' }} className='slo_text'>Where comfort meets community and student find thier second home</h2>
                    </Tabs>
                <SearchBar/>
                </Toolbar>
                <br />
            </AppBar>
        </>
    )
}

export default Header;
