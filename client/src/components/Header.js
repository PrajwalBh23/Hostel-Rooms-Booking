import React from 'react';
import { AppBar, Tabs, Tab, Toolbar, Typography } from '@mui/material';
import logo from '../images/Logo5.png';
import HeadsetMicRoundedIcon from '@mui/icons-material/HeadsetMicRounded';
import CustomizedMenus from './Dropdown.js';
import './Header.css';
import { NavLink,Link } from 'react-router-dom';
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
                            <option value="option1">Rooms</option>
                            <option value="option2">Hostels</option>
                            <option value="option3">Flats</option>
                        </select>
                    </div>
                    <div className='margin-spac'>
                        <div className="search-ba"> 
                            <select className="select-optio">
                                <option value="option1">College</option>
                                <option value="option2">Area</option>
                            </select>

                            <div className="search-containe">
                                <input type="text" placeholder="Search..." />
                                <button className='butt'>Search</button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <Tabs sx={{ ml: "auto" }}>
                        <Link style={{textDecoration:'none'}} to="/add" ><button className='posting'>Post Property <img style={{ marginLeft: "3px" }} src={free} alt="" /></button></Link>
                            <Tab LinkComponent={NavLink} to="/add" icon={<HeadsetMicRoundedIcon style={{ color: 'white', fontSize: '1.9rem'}} />} />
                            <Tab icon={<CustomizedMenus fontSize="1.9rem" style={{ color: 'white' }} />}/>
                        </Tabs>
                        </div>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Header;
