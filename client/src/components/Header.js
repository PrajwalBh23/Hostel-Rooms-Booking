import React from 'react';
import { AppBar, Tabs, Tab, Toolbar, Typography } from '@mui/material';
import logo from '../images/Logo5.png';
import HeadsetMicRoundedIcon from '@mui/icons-material/HeadsetMicRounded';
import Dropdown from './Dropdown.js';
import './Header.css';
import SearchBar from './Search_Bar';

import { NavLink } from 'react-router-dom';
// import { brown } from '@mui/material/colors';
import free from '../images/Icon-free.jpg';

function Header() {
    // const [value, setValue] = useState(0); // Set an initial value for the Tabs component

    return (
        <>
            <AppBar className='Height-appl' >
                <Toolbar>
                    <div className='spacin'>
                        <Typography>
                            <NavLink to={"/"} className="logo-containe">
                                <img src={logo} width={"122px"} alt="" />
                                <div className="logo-tex">
                                    <div className="logo-text-lin1">Scholar</div>
                                    <div className="logo-text-lin2">Stay</div>
                                </div>
                            </NavLink>
                        </Typography>
                    </div>
                    <div className='marginleft'>
                            <select className='Selecting'>
                                <option value="option1">Rooms / Flats</option>
                                <option value="option2">Hostels</option>
                            </select>
                        </div>
                    <div className='margin-spac'>
                        <SearchBar />
                    </div>
                    <div>
                        <Tabs sx={{ ml: "auto" }}>
                            <button className='posting'>Post Property <img style={{ marginLeft: "2px" }} src={free} alt="" /></button>
                            <Tab LinkComponent={NavLink} to="/add" icon={<HeadsetMicRoundedIcon style={{ color: 'white' }} />} />
                            <Tab LinkComponent={NavLink} to="/add" icon={<Dropdown style={{ color: 'white' }} />} />
                        </Tabs></div>
                </Toolbar>

                {/* <Toolbar>
                    <Tabs sx={{ m: "auto" }} className='tabs' textColor='inherit' indicatorColor='primary' value={value} onChange={(e, val) => setValue(val)}>
                        <Tab LinkComponent={NavLink} style={{ fontSize: 20, color: { brown }, marginLeft: '50px', marginRight: '20px', fontWeight: 'bold' }} to="/add" label='Rooms/Flats' />
                        <Tab LinkComponent={NavLink} style={{ fontSize: 20, color: { brown }, marginRight: '20px', fontWeight: 'bold' }} to="/add" label='Hostels' />
                    </Tabs>
                </Toolbar> */}
            </AppBar>
        </>
    )
}

export default Header;
