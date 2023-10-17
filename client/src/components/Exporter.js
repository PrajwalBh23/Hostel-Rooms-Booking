import React from 'react';
import {TextField} from "@mui/material";

export function Form1({ formData, setFormData }) {
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    }

    return (
        <>
        <h2>Owner's Details</h2>
            <TextField
                placeholder="Please enter your name"
                id="outlined-basic"
                label="Name"
                variant="outlined"
                name="name"
                value={formData.name}
                onChange={handleChange}
            />
            <TextField
                placeholder="Please enter Your Phone no."
                id="outlined-basic"
                label="Phone no."
                variant="outlined"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
            />
            <TextField
                placeholder="Please enter Email id"
                id="outlined-basic"
                label="Enter Your Email id"
                variant="outlined"
                name="email"
                value={formData.email}
                onChange={handleChange}
            />
            {/* <TextField
                placeholder="Please enter the no. of rooms"
                id="outlined-basic"
                label="Enter Your "
                variant="outlined"
                name="rooms"
                value={formData.email}
                onChange={handleChange}
            /> */}
        </>
    );
}

export function Form2({ formData, setFormData }) {
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    }

    return (
        <>
        <h2>Property's Details</h2>
            <TextField
                placeholder="Please enter your name"
                id="outlined-basic"
                label="Name"
                variant="outlined"
                name="name"
                value={formData.name}
                onChange={handleChange}
            />
            <TextField
                placeholder="Please enter Your Phone no."
                id="outlined-basic"
                label="Phone no."
                variant="outlined"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
            />
            <TextField
                placeholder="Please enter Email id"
                id="outlined-basic"
                label="Enter Your Email id"
                variant="outlined"
                name="email"
                value={formData.email}
                onChange={handleChange}
            />
            <TextField
                placeholder="Please enter experience"
                id="outlined-basic"
                label="Enter Your experience"
                variant="outlined"
                name="experience"
                value={formData.experience}
                onChange={handleChange}
            />
        </>
    );
}
export function Form3({ formData, setFormData }) {
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    }

    return (
        <>
        <h2>Rooms Images</h2>
            <TextField
                placeholder="Please enter your name"
                id="outlined-basic"
                label="Name"
                variant="outlined"
                name="name"
                value={formData.name}
                onChange={handleChange}
            />
            <TextField
                placeholder="Please enter Your Phone no."
                id="outlined-basic"
                label="Phone no."
                variant="outlined"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
            />
            <TextField
                placeholder="Please enter Email id"
                id="outlined-basic"
                label="Enter Your Email id"
                variant="outlined"
                name="email"
                value={formData.email}
                onChange={handleChange}
            />
        </>
    );
}
export function Form4({ formData, setFormData }) {
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    }

    return (
        <>
        <h2>Rental Room Facilities</h2>
            <TextField
                placeholder="Please enter your name"
                id="outlined-basic"
                label="Name"
                variant="outlined"
                name="name"
                value={formData.name}
                onChange={handleChange}
            />
            <TextField
                placeholder="Please enter Your Phone no."
                id="outlined-basic"
                label="Phone no."
                variant="outlined"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
            />
            <TextField
                placeholder="Please enter Email id"
                id="outlined-basic"
                label="Enter Your Email id"
                variant="outlined"
                name="email"
                value={formData.email}
                onChange={handleChange}
            />
            <TextField
                placeholder="Please enter experience"
                id="outlined-basic"
                label="Enter Your experience"
                variant="outlined"
                name="experience"
                value={formData.experience}
                onChange={handleChange}
            />
        </>
    );
}
export function Form5({ formData, setFormData }) {
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    }

    return (
        <>
        <h2>Verification</h2>
            <TextField
                placeholder="Please enter your name"
                id="outlined-basic"
                label="Name"
                variant="outlined"
                name="name"
                value={formData.name}
                onChange={handleChange}
            />
            <TextField
                placeholder="Please enter Your Phone no."
                id="outlined-basic"
                label="Phone no."
                variant="outlined"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
            />
            <TextField
                placeholder="Please enter Email id"
                id="outlined-basic"
                label="Enter Your Email id"
                variant="outlined"
                name="email"
                value={formData.email}
                onChange={handleChange}
            />
        </>
    );
}