import React from 'react';
import Header from './Header';
// import { Box, TextField, Button } from "@mui/material";
import { Form1 } from './Exporter.js';

function Form() {
    return (
        <>
            <Header />
            <h1>Displaying Form 1</h1>
            <Form1 /> {/* Display Form1 here */}
        </>
    )
}

export default Form;
