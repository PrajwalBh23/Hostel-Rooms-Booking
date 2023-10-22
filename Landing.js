import React, { useState } from 'react';
import { AppBar, Tabs, Tab, Toolbar, Typography } from '@mui/material';
import logo from '../images/Logo5.png';
import CustomizedMenus from './Dropdown.js';
import Headset from './Headset.js';
import './Landing.css';
// import './Search.css';

import { NavLink } from 'react-router-dom';
import { brown } from '@mui/material/colors';

function Header() {
    const [value, setValue] = useState(0); // Set an initial value for the Tabs component

    return (
        <>
            <div className="containland">
                <AppBar className='Height-apply'>
                    <Toolbar >
                        <Typography >
                            <NavLink to={"/"} className="logo-container">
                                <img src={logo} width={"205px"} height={"150px"} style={{ marginTop: '5px' }} alt="" />
                                <div className="logo-text">
                                    <div className="logo-text-line1">Scholar</div>
                                    <div className="logo-text-line2">Stay</div>
                                </div>
                            </NavLink>
                        </Typography>

                        <Tabs sx={{ ml: "auto" }}>
                            <Tab icon={<Headset fontSize='2.2rem' style={{ color: 'white' }} />} />
                            <Tab icon={<CustomizedMenus fontSize="2.2rem" style={{ color: 'white' }} />} />
                        </Tabs>
                    </Toolbar>

                    <Toolbar className='linkcomp'>
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
                </AppBar>
                <div className="contain_block">
                    hejxcbvjnvnv
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam nam reiciendis, aspernatur, dolorem beatae, aliquid fuga eligendi odio delectus quae alias provident iusto perferendis rerum repellendus accusamus. Fugit, dolores numquam!
                </div>
            </div>
        </>
    )
}
export default Header;
