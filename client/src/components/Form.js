import React from 'react';
import Header from './Header';
import { Box, TextField, Button } from "@mui/material";
import './Adding.css';

function Form({ formName }) { // Receive formName as a prop
    return (
        <>
            <Header />
            <Box className='Container' display="flex" marginTop="7%" width="100%" flexDirection="row">
                <form id={formName}>
                    <h1>{formName === 'form1' ? "Owner's Detail" : formName === 'form2' ? "Property Detail" : formName === 'form3' ? "Photos" : formName === 'form4' ? "Rental Room Facilities" : "Verified User"}</h1>
                    <TextField helperText="Please enter your name" id="outlined-basic" label="Name" variant="outlined" />
                    <TextField helperText="Please enter Your Phone no." id="outlined-basic" label="Phone no." variant="outlined" />
                    <TextField helperText="Please enter Email id" id="outlined-basic" label="Enter Your Email id" variant="outlined" />
                    {formName === 'form2' && (
                        <div>
                            <TextField helperText="Please" id="outlined-basic" label="Name" variant="outlined" />
                            <TextField helperText="ente" id="outlined-basic" label="Phone no." variant="outlined" />
                            <TextField helperText="id" id="outlined-basic" label="Enter Your Email id" variant="outlined" />
                            <TextField helperText="experience " id="outlined-basic" label="Experience" variant="outlined" />
                        </div>
                    )}
                    {formName === 'form3' && (
                        <div>
                            <TextField helperText="Please enter your name" id="outlined-basic" label="Name" variant="outlined" />
                            <TextField helperText="Please enter Your Phone no." id="outlined-basic" label="Phone no." variant="outlined" />
                            <TextField helperText="Please enter Email id" id="outlined-basic" label="Enter Your Email id" variant="outlined" />
                            <TextField helperText="Please enter experience in renting rooms" id="outlined-basic" label="Experience" variant="outlined" />
                        </div>
                    )}
                    {formName === 'form4' && (
                        <div>
                            <TextField helperText="Please enter your name" id="outlined-basic" label="Name" variant="outlined" />
                            <TextField helperText="Please enter Your Phone no." id="outlined-basic" label="Phone no." variant="outlined" />
                            <TextField helperText="Please enter Email id" id="outlined-basic" label="Enter Your Email id" variant="outlined" />
                            <TextField helperText="Please enter experience in renting rooms" id="outlined-basic" label="Experience" variant="outlined" />
                        </div>
                    )}
                    {formName === 'form5' && (
                        <div>
                            <TextField helperText="Please enter your vv" id="outlined-basic" label="Name" variant="outlined" />
                            <TextField helperText="Please enter Your Phjfbjvbone no." id="outlined-basic" label="Phone no." variant="outlined" />
                            <TextField helperText="Please enter jnvbfv id" id="outlined-basic" label="Enter Your Email id" variant="outlined" />
                            <TextField helperText="nvjb enter experience in renting rooms" id="outlined-basic" label="Experience" variant="outlined" />
                        </div>
                    )}
                    <Button variant="contained" color="primary">Save</Button> {/* Add Save button */}
                </form>
            </Box>
        </>
    )
}

export default Form;
