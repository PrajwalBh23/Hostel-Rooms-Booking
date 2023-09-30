import React, { useState } from 'react';
import { AppBar, Tabs, Tab, Toolbar, Typography } from '@mui/material';
import logo from '../images/Logo.png';
import HeadsetMicRoundedIcon from '@mui/icons-material/HeadsetMicRounded';
import Dropdown from './Dropdown.js';
import './Header.css';

import { NavLink } from 'react-router-dom';

function Header() {
    const [value, setValue] = useState(0); // Set an initial value for the Tabs component

    return (
        <>
            <AppBar>
                <Toolbar>
                    <Typography>
                        <NavLink to={"/"} className="logo-container">
                            <img src={logo} width={"150px"} height={"100px"} alt="" />
                            <div className="logo-text">
                                <div className="logo-text-line1">Scholar</div>
                                <div className="logo-text-line2">Stay</div>
                            </div>
                        </NavLink>
                    </Typography>

                    <Tabs sx={{ ml: "auto" }} textColor='inherit' indicatorColor='primary' value={value} onChange={(e, val) => setValue(val)}>
                        <Tab LinkComponent={NavLink} to="/add" icon={<HeadsetMicRoundedIcon />} />
                        <Tab LinkComponent={NavLink} to="/add" icon={<Dropdown />} />
                    </Tabs>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Header;
