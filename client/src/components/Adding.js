import React from 'react';
import Header from './Header.js';
import { Box } from "@mui/material";
import owner from '../images/owner.jpg';
// import Form from './Form.js';
import './Adding.css';
import { Link } from 'react-router-dom';

function Adding() {
    return (
        <>
            <Header />
            <Box className='Container' display="flex" marginTop="7%" width="100%" flexDirection={'column'}>
                <div className="cont">
                    <a href="#form1">
                        <div className="add_cart">
                            <img src={owner} alt="" />
                        </div>
                        Owner's Detail
                    </a>
                    <a href="#form2">
                        <div className="add_cart">
                            <img src={owner} alt="" />
                        </div>
                        Property Detail
                    </a>
                    <a href="#form3">
                        <div className="add_cart">
                            <img src={owner} alt="" />
                        </div>
                        Photos
                    </a>
                    <a href="#form4">
                        <div className="add_cart">
                            <img src={owner} alt="" />
                        </div>
                        Rental Room Faclities
                    </a>
                    <a href="#form5">
                        <div className="add_cart">
                            <img src={owner} alt="" />
                        </div>
                        Verified User
                    </a>
                </div>
                <Link to="/" ><button className='generate'>Generate your Property</button></Link>
            </Box>
        </>
    )
}

export default Adding;
