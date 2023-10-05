import React, { useState } from 'react';
import Header from './Header.js';
import { Box, Button } from "@mui/material";
import owner from '../images/owner.jpg';
import Form from './Form.js';
import './Adding.css';

function Adding() {
    const [activeForm, setActiveForm] = useState('form1'); // State to track active form
    const [formData, setFormData] = useState({
        form1: { name: '', phone: '', email: '' },
        form2: { name: '', phone: '', email: '', experience: '' },
        form3: { name: '', phone: '', email: '', experience: '' },
        form4: { name: '', phone: '', email: '', experience: '' },
        form5: { name: '', phone: '', email: '', experience: '' },
    });

    const handleFormChange = (formName) => {
        setActiveForm(formName);
    };

    const handleNext = () => {
        // Check if the current form is complete before proceeding to the next form
        if (isFormComplete(activeForm)) {
            // Determine the next form based on the current form
            switch (activeForm) {
                case 'form1':
                    setActiveForm('form2');
                    break;
                case 'form2':
                    setActiveForm('form3');
                    break;
                case 'form3':
                    setActiveForm('form4');
                    break;
                case 'form4':
                    setActiveForm('form5');
                    break;
                default:
                    break;
            }
        }
    };

    const handleBack = () => {
        // Go back to the previous form
        switch (activeForm) {
            case 'form2':
                setActiveForm('form1');
                break;
            case 'form3':
                setActiveForm('form2');
                break;
            case 'form4':
                setActiveForm('form3');
                break;
            case 'form5':
                setActiveForm('form4');
                break;
            default:
                break;
        }
    };

    const isFormComplete = (formName) => {
        // Check if the current form is complete by checking if all required fields are filled
        const { name, phone, email, experience } = formData[formName];
        return name !== '' && phone !== '' && email !== '' && (formName === 'form1' || experience !== '');
    };

    const handleFormDataChange = (fieldName, value) => {
        // Update the form data for the active form
        setFormData((prevData) => ({
            ...prevData,
            [activeForm]: {
                ...prevData[activeForm],
                [fieldName]: value,
            },
        }));
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
                        Rental Room Facilities
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
            {activeForm === 'form1' && (
                <Form
                    formName="form1"
                    formData={formData.form1}
                    onFormDataChange={handleFormDataChange}
                />
            )}
            {activeForm === 'form2' && (
                <Form
                    formName="form2"
                    formData={formData.form2}
                    onFormDataChange={handleFormDataChange}
                />
            )}
            {activeForm === 'form3' && (
                <Form
                    formName="form3"
                    formData={formData.form3}
                    onFormDataChange={handleFormDataChange}
                />
            )}
            {activeForm === 'form4' && (
                <Form
                    formName="form4"
                    formData={formData.form4}
                    onFormDataChange={handleFormDataChange}
                />
            )}
            {activeForm === 'form5' && (
                <Form
                    formName="form5"
                    formData={formData.form5}
                    onFormDataChange={handleFormDataChange}
                />
            )}
            {/* Add similar conditions for other forms */}
            <div>
                {activeForm !== 'form1' && (
                    <Button variant="contained" color="primary" onClick={handleBack}>
                        Back
                    </Button>
                )}
                {activeForm !== 'form5' && (
                    <Button variant="contained" color="primary" onClick={handleNext}>
                        Next
                    </Button>
                )}
                {activeForm !== 'form1' && (
                    <Button variant="contained" color="primary">
                        Save
                    </Button>
                )}
            </div>
        </>
    )
}

export default Adding;
