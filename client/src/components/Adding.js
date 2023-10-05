import React, { useState } from 'react';
import Header from './Header.js';
import { Box } from "@mui/material";
import owner from '../images/owner.jpg';
import Form from './Form.js';
import './Adding.css';

function Adding() {
    const [activeForm, setActiveForm] = useState('form1'); // State to track active form

    const handleFormChange = (formName) => {
        setActiveForm(formName);
    };
    return (
        <>
            <Header />
            <Box className='Container' display="flex" marginTop="7%" width="100%" flexDirection="row">
                <div className="add_cart">
                    <a href="#form1" onClick={() => handleFormChange('form1')}>
                        <img src={owner} alt="" />
                        Owner's Detail
                    </a>
                </div>
                <div className="add_cart">
                    <a href="#form2" onClick={() => handleFormChange('form2')}> 
                        <img src={owner} alt="" />
                        Property Detail
                    </a>
                </div>
                <div className="add_cart">
                    <a href="#form3" onClick={() => handleFormChange('form3')}> 
                        <img src={owner} alt="" />
                        Photos
                    </a>
                </div>
                <div className="add_cart">
                    <a href="#form4" onClick={() => handleFormChange('form4')}> 
                        <img src={owner} alt="" />
                        Rental Room Faclities
                    </a>
                </div>
                <div className="add_cart">
                    <a href="#form5" onClick={() => handleFormChange('form5')}> 
                        <img src={owner} alt="" />
                        Verified User
                    </a>
                </div>
            </Box>
            {/* Render the active form based on state */}
            {activeForm === 'form1' && <Form formName="form1" />}
            {activeForm === 'form2' && <Form formName="form2" />}
            {activeForm === 'form3' && <Form formName="form3" />}
            {activeForm === 'form4' && <Form formName="form4" />}
            {activeForm === 'form5' && <Form formName="form5" />}

        </>
    )
}

export default Adding;

