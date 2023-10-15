import React from 'react';
import Header from './Header.js';
import { Box } from "@mui/material";
import own from '../images/own.jpg';
import pho from '../images/pho.jpg';
import fac from '../images/fac1.jpg';
import prp from '../images/prp.jpg';
import veri from '../images/veri.png';
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
                            <img src={own} alt="" />
                        </div>
                        Owner's Detail
                    </a>
                    <a href="#form2">
                        <div className="add_cart">
                            <img style={{width:'80%', height:'90%', border:'none'}} src={prp} alt="" />
                        </div>
                        Property Detail
                    </a>
                    <a href="#form3">
                        <div className="add_cart">
                            <img style={{width:'80%', height:'90%', border:'none'}} src={pho} alt="" />
                        </div>
                        Photos
                    </a>
                    <a href="#form4">
                        <div className="add_cart">
                            <img style={{width:'65%', height:'100%', border:'none'}} src={fac} alt="" />
                        </div>
                        Rental Room Faclities
                    </a>
                    <a href="#form5">
                        <div className="add_cart">
                            <img style={{width:'60%', height:'80%', border:'none'}} src={veri} alt="" />
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
