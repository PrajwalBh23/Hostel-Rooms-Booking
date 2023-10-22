import React from 'react';
import { TextField, FormLabel } from "@mui/material";
import './Form.css';

export function Form1({ formData, setFormData }) {
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    }

    return (
        <div className="owner">
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
        </div>
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
        <div>
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
        </div>
    );
}

export function Form3({ formData, setFormData }) {
    const handleImageChange = (e) => {
        const selectedFiles = e.target.files;
        const maxFiles = 6; // Maximum number of files allowed
        const minFiles = 4; // Minimum number of files required

        if (selectedFiles.length < minFiles || selectedFiles.length > maxFiles) {
            alert(`Please select between ${minFiles} and ${maxFiles} images.`);
            return;
        }

        // Assuming you want to store the selected files in formData.images as an array
        setFormData((prevInput) => ({
            ...prevInput,
            images: Array.from(selectedFiles), // Convert FileList to an array and update the images array
        }));
    };

    return (
        <>
            <h2>Rooms Images</h2>
            <FormLabel style={{ marginTop: '10px' }} margin='normal'>Images</FormLabel>
            <input type="file" accept="image/*" name="image" onChange={handleImageChange} multiple />
            {formData.images && formData.images.length > 0 && (
                <div>
                    {formData.images.map((image, index) => (
                        <img
                            key={index}
                            src={URL.createObjectURL(image)}
                            alt={`img ${index + 1}`}
                            style={{ width: '100px', height: '100px', margin: '5px' }}
                        />
                    ))}
                </div>
            )}
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
        <div>
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
        </div>
    );
}

export function Form5({ formData, setFormData }) {
    const handleImageChange = (e) => {
        setFormData((prevInput) => ({
            ...prevInput,
            image: e.target.files[0],
        }));
    }

    return (
        <div>
            <h2>Verification</h2>
            <FormLabel style={{ marginTop: '10px' }} margin='normal'>Image</FormLabel>
            <input type="file" accept="image/*" name="image" onChange={handleImageChange} />
            {formData.image && (
                <img src={URL.createObjectURL(formData.image)} alt={formData.name} />
            )}
        </div>
    );
}
