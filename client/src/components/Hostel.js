import React from 'react';
// import { NavLink } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import Header from './Header.js';
import './Hostel.css';
import Checkbox from '@mui/material/Checkbox';

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
                    <Typography sx={{ fontFamily: "fantasy" }} width={"75%"} variant="h2">
                        <div className="result">
                            this is Hostel block
                        </div>
                        <div className="result">
                            this is Hostel block
                        </div>
                        <div className="result">
                            this is Hostel block
                        </div>
                        <div className="result">
                            this is Hostel block
                        </div>
                    </Typography>
                </Box>

            </div>
        </>
    )
}

export default Rooms;

