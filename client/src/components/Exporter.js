import React, { useState } from 'react';
import { TextField, FormLabel, FormControlLabel, Checkbox, Typography } from "@mui/material";
import './Form.css';
import AddIcon from '@mui/icons-material/Add';


export function Form1({ formData, setFormData }) {
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        if (type === 'checkbox') {
            setFormData({
                ...formData,
                [name]: checked ? value : '', // Set value only if the checkbox is checked
            });
        } else {
            setFormData({
                ...formData,
                [name]: value,
            });
        }
    }

    return (
        <div className="owner">
            <h2 style={{ textAlign: 'center' }}>Owner's Details</h2>
            <TextField
                placeholder="Please enter your name"
                id="outlined-basic"
                label="Name"
                variant="outlined"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className='textfield'
                sx={{
                    "& .MuiOutlinedInput-root": {
                        height: '40px',
                        marginTop: '3px'
                    },
                }}
            />
            <TextField
                placeholder="Please enter Your Phone no."
                id="outlined-basic"
                label="Phone no."
                variant="outlined"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className='textfield'
                sx={{
                    "& .MuiOutlinedInput-root": {
                        height: '40px',
                        marginTop: '3px'
                    },
                }}
            />
            <TextField
                placeholder="Please enter Email id"
                id="outlined-basic"
                label="Email id"
                variant="outlined"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className='textfield'
                sx={{
                    "& .MuiOutlinedInput-root": {
                        height: '40px',
                        marginTop: '3px'
                    },
                }}
            />
            <TextField
                placeholder="Experience in Renting rooms to Students"
                id="outlined-basic"
                label="Experience in Renting rooms to Students"
                variant="outlined"
                name="experience"
                value={formData.experience}
                onChange={handleChange}
                className='textfield'
                sx={{
                    "& .MuiOutlinedInput-root": {
                        height: '40px',
                        marginTop: '3px'
                    },
                }}
            />
            <div className='owning'>
                <Typography>Property Type</Typography>
                <FormControlLabel style={{ margin: '3px 15px 3px -3px' }}
                    control={<Checkbox checked={formData.owned === 'Room'} onChange={handleChange} name="owned" value="Room" />}
                    label="Room"
                />
                <FormControlLabel style={{ margin: '3px 20px 3px -3px' }}
                    control={<Checkbox checked={formData.owned === 'Hostel'} onChange={handleChange} name="owned" value="Hostel" />}
                    label="Hostel"
                />
                <FormControlLabel style={{ margin: '3px 15px 3px -3px' }}
                    control={<Checkbox checked={formData.owned === 'Flat'} onChange={handleChange} name="owned" value="Flat" />}
                    label="Flat"
                />
                {formData.owned === 'Hostel' && (
                    <>
                        <Typography>Hostel Type</Typography>
                        <FormControlLabel
                            style={{ margin: '3px 15px 3px -3px' }}
                            control={
                                <Checkbox
                                    checked={formData.hostelType ==='Private'}
                                    onChange={handleChange}
                                    name="hostelType"
                                    value="Private"
                                />
                            }
                            label="Private"
                        />
                        <FormControlLabel
                            style={{ margin: '3px 15px 3px -3px' }}
                            control={
                                <Checkbox
                                    checked={formData.hostelType ==='Government'}
                                    onChange={handleChange}
                                    name="hostelType"
                                    value="Government"
                                />
                            }
                            label="Government"
                        />
                    </>
                )}
            </div>
        </div>
    );
}

export function Form2({ formData, setFormData }) {
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;

        if (type === 'checkbox') {
            setFormData({
                ...formData,
                [name]: checked ? value : '', // Set value only if the checkbox is checked
            });
        } else {
            setFormData({
                ...formData,
                [name]: value,
            });
        }
    }

    return (
        <div className='prop'>
            <h2 style={{ textAlign: 'center' }}>Property's Details</h2>
            <TextField
                placeholder="Please enter your Address"
                id="outlined-basic"
                label="Address"
                variant="outlined"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className='textfield full-width'
                sx={{
                    "& .MuiOutlinedInput-root": {
                        height: '40px',
                        marginTop: '3px'
                    },
                }}
            />
            <TextField
                placeholder="Number of Rooms"
                id="outlined-basic"
                label="Number of Rooms"
                variant="outlined"
                name="room"
                value={formData.room}
                onChange={handleChange}
                className='textfield'
                sx={{
                    "& .MuiOutlinedInput-root": {
                        height: '40px',
                        marginTop: '3px'
                    },
                }}
            />
            <TextField
                placeholder='Price'
                label="Price of Room"
                variant="outlined"
                name="price"
                value={formData.price}
                onChange={handleChange}
                className='textfield'
                sx={{
                    "& .MuiOutlinedInput-root": {
                        height: '40px',
                        marginTop: '3px'
                    },
                }}
            />
            <div className="boxing">
                <div className='flexing'>
                    <Typography>Accomodation</Typography>
                    <FormControlLabel style={{ margin: '-3px' }}
                        control={<Checkbox checked={formData.share === 'Single'} onChange={handleChange} name="share" value="Single" />}
                        label="Single"
                    />
                    <FormControlLabel style={{ margin: '-3px' }}
                        control={<Checkbox checked={formData.share === 'Shared'} onChange={handleChange} name="share" value="Shared" />}
                        label="Shared"
                    />
                </div>
                <TextField
                    placeholder='How many people'
                    label="No. of people"
                    variant="outlined"
                    name="sharing"
                    value={formData.sharing}
                    onChange={handleChange}
                    className='textfield flexing'
                    sx={{
                        "& .MuiOutlinedInput-root": {
                            height: '40px',
                            marginTop: '3px'
                        },
                    }}
                />
                <div style={{ marginLeft: '-15px' }} className='flexing'>
                    <Typography>Gender</Typography>
                    <FormControlLabel style={{ margin: '-3px' }}
                        control={<Checkbox checked={formData.gender === 'Male'} onChange={handleChange} name="gender" value="Male" />}
                        label="Male"
                    />
                    <FormControlLabel style={{ margin: '-3px' }}
                        control={<Checkbox checked={formData.gender === 'Female'} onChange={handleChange} name="gender" value="Female" />}
                        label="Female"
                    />
                    <FormControlLabel style={{ margin: '-3px' }}
                        control={<Checkbox checked={formData.gender === 'Prefer Not to say'} onChange={handleChange} name="gender" value="Prefer Not to say" />}
                        label="Prefer Not to say"
                    />
                </div>
                <div className='flexing'>
                    <Typography>Deposit</Typography>
                    <FormControlLabel style={{ margin: '-3px' }}
                        control={<Checkbox checked={formData.deposit === 'No Deposit'} onChange={handleChange} name="deposit" value="No Deposit" />}
                        label="No Deposit"
                    />
                    <FormControlLabel style={{ margin: '-3px' }}
                        control={<Checkbox checked={formData.deposit === '1 Deposit'} onChange={handleChange} name="deposit" value="1 Deposit" />}
                        label="1 Deposit"
                    />
                    <FormControlLabel style={{ margin: '-3px' }}
                        control={<Checkbox checked={formData.deposit === '2 Deposit'} onChange={handleChange} name="deposit" value="2 Deposit" />}
                        label="2 Deposit"
                    />
                    <FormControlLabel style={{ margin: '-3px' }}
                        control={<Checkbox checked={formData.deposit === '3 Deposit'} onChange={handleChange} name="deposit" value="3 Deposit" />}
                        label="3 Deposit"
                    />
                </div>
            </div>
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
            <h2 style={{ textAlign: 'center' }}>Rooms Images</h2>
            <FormLabel style={{ marginTop: '10px', marginBottom: '30px', marginLeft: '20px' }} margin='normal'>Images <input type="file" accept="image/*" name="image" onChange={handleImageChange} multiple /></FormLabel>
            {formData.images && formData.images.length > 0 && (
                <div>
                    {formData.images.map((image, index) => (
                        <img
                            key={index}
                            src={URL.createObjectURL(image)}
                            alt={`img ${index + 1}`}
                            style={{ width: '100px', height: '100px', margin: '5px', marginBottom: '20px', marginTop: '20px' }}
                        />
                    ))}
                </div>
            )}
        </>
    );
}


export function Form4({ formData, setFormData }) {
    const [rulesFields, setRulesFields] = useState(formData.rules || ['']);
    const [configFields, setConfigFields] = useState(formData.config || ['']);
    const [billFields, setbillFields] = useState(formData.bill || ['']);

    const handleChange = (e, fieldArray, index) => {
        const { value } = e.target;
        const updatedFields = [...fieldArray];
        updatedFields[index] = value;

        if (fieldArray === rulesFields) {
            setFormData({
                ...formData,
                rules: updatedFields,
            });
            setRulesFields(updatedFields);
        } else if (fieldArray === configFields) {
            setFormData({
                ...formData,
                config: updatedFields,
            });
            setConfigFields(updatedFields);
        }
        else if (fieldArray === billFields) {
            setFormData({
                ...formData,
                bill: updatedFields,
            });
            setbillFields(updatedFields);
        }
    };

    const handleAddField = (fieldArray, setFieldArray) => {
        setFieldArray([...fieldArray, '']);
    };

    return (
        <div className='fact'>
            <h2 style={{ textAlign: 'center' }}>Rental Room Facilities</h2>

            <div className="flex-filed">
                {rulesFields.map((rules, index) => (
                    <div key={index}>
                        <TextField
                            placeholder="Rules and Regulations"
                            id={`outlined-basic-${index}`}
                            label={index === 0 ? "Rules & Regulations" : ""}
                            variant="outlined"
                            name={`rules-${index}`}
                            value={rules}
                            onChange={(e) => handleChange(e, rulesFields, index)}
                            className='textfield'
                            sx={{
                                "& .MuiOutlinedInput-root": {
                                    height: '40px',
                                    marginTop: '0px'
                                },
                            }}
                            InputProps={index === 0 && {
                                endAdornment: (
                                    <button
                                        onClick={() => handleAddField(rulesFields, setRulesFields)}
                                        style={{
                                            position: 'absolute',
                                            right: '8px',
                                            top: '50%',
                                            transform: 'translateY(-50%)',
                                            border: 'none',
                                            background: 'transparent',
                                            cursor: 'pointer',
                                        }}
                                    >
                                        <AddIcon />
                                    </button>
                                ),
                            }}
                        />
                    </div>
                ))}
            </div>

            <div className="flex-filed">
                {configFields.map((config, index) => (
                    <div key={index}>
                        <TextField
                            placeholder="Hall, Bedroom, Kitchen"
                            id={`outlined-basic-${index}`}
                            label={index === 0 ? "Configuration" : ""}
                            variant="outlined"
                            name={`config-${index}`}
                            value={config}
                            onChange={(e) => handleChange(e, configFields, index)}
                            className='textfield'
                            sx={{
                                "& .MuiOutlinedInput-root": {
                                    height: '40px',
                                    marginTop: '0px'
                                },
                            }}
                            InputProps={index === 0 && {
                                endAdornment: (
                                    <button
                                        onClick={() => handleAddField(configFields, setConfigFields)}
                                        style={{
                                            position: 'absolute',
                                            right: '8px',
                                            top: '50%',
                                            transform: 'translateY(-50%)',
                                            border: 'none',
                                            background: 'transparent',
                                            cursor: 'pointer',
                                        }}
                                    >
                                        <AddIcon />
                                    </button>
                                ),
                            }}
                        />
                    </div>
                ))}
            </div>

            <div className='flexing'>
                <Typography>Furnishing</Typography>
                <FormControlLabel style={{ margin: '-3px' }}
                    control={<Checkbox checked={formData.semiFurnished === 'Semi-Furnished'} onChange={(e) => setFormData({ ...formData, semiFurnished: 'Semi-Furnished' })} name="semiFurnished" value="Semi-Furnished" />}
                    label="Semi-Furnished"
                />
                <FormControlLabel style={{ margin: '-3px' }}
                    control={<Checkbox checked={formData.semiFurnished === 'Full-Furnished'} onChange={(e) => setFormData({ ...formData, semiFurnished: 'Full-Furnished' })} name="semiFurnished" value="Full-Furnished" />}
                    label="Full-Furnished"
                />
                <FormControlLabel style={{ margin: '-3px' }}
                    control={<Checkbox checked={formData.semiFurnished === 'Un-Furnished'} onChange={(e) => setFormData({ ...formData, semiFurnished: 'Un-Furnished' })} name="semiFurnished" value="Un-Furnished" />}
                    label="Un-Furnished"
                />
            </div>

            <div className="flex-filed">
                {billFields.map((bill, index) => (
                    <div key={index}>
                        <TextField
                            placeholder="Heater, cooler, electricity bills"
                            id={`outlined-basic-${index}`}
                            label={index === 0 ? "Bills Include" : ""}
                            variant="outlined"
                            name={`bill-${index}`}
                            value={bill}
                            onChange={(e) => handleChange(e, billFields, index)}
                            className='textfield'
                            sx={{
                                "& .MuiOutlinedInput-root": {
                                    height: '40px',
                                    marginTop: '0px'
                                },
                            }}
                            InputProps={index === 0 && {
                                endAdornment: (
                                    <button
                                        onClick={() => handleAddField(billFields, setbillFields)}
                                        style={{
                                            position: 'absolute',
                                            right: '8px',
                                            top: '50%',
                                            transform: 'translateY(-50%)',
                                            border: 'none',
                                            background: 'transparent',
                                            cursor: 'pointer',
                                        }}
                                    >
                                        <AddIcon />
                                    </button>
                                ),
                            }}
                        />
                    </div>
                ))}
            </div>
            <TextField
                placeholder="Please enter parking facility"
                id="outlined-basic-park"
                label="Enter Parking Details"
                variant="outlined"
                name="park"
                value={formData.park}
                onChange={(e) => setFormData({ ...formData, park: e.target.value })}
                className='textfield'
                sx={{
                    "& .MuiOutlinedInput-root": {
                        height: '40px',
                        marginTop: '3px',
                        marginBottom: '20px'
                    },
                }}
            />
        </div>
    );
}


const sampleColleges = ['Rashtrasant Tukadoji Maharaj Nagpur University',
    'Kavikulaguru Kalidas Sanskrit University',
    'Maharashtra Animal and Fishery Sciences University',
    'Maharashtra National Law University, Nagpur',
    'Laxminarayan Innovation Technological University',
    'Symbiosis International University',
    'Indian Institute of Information Technology, Nagpur',
    'National Power Training Institute',
    'Visvesvaraya National Institute of Technology Nagpur',
    'Government College of Engineering, Nagpur',
    'Indian Institute of Fire Engineering, Nagpur',
    'Laxminarayan Innovation Technological University',
    'Cummins College of Engineering for Women, Nagpur',
    'G. H. Raisoni College of Engineering Nagpur',
    'S. B. Jain Institute of Technology, Management and Research',
    'Shri Ramdeobaba College of Engineering and Management',
    'St. Vincent Pallotti College of Engineering and Technology',
    'Yeshwantrao Chavan College of Engineering',
    'G H Raisoni Academy of Engineering and Technology',
    'Priyadarshini College of Engineering, Nagpur',
    'JD College of Engineering and Management',
    'Tulashiramaji Gayakawad Patil College of Engineering and Technology',
    'Priyadarshini JL College of Engineering',
    'Institute of Science, Nagpur',
    'Jhulelal Institute of Technology',
    'Kavikulguru Institute of Technology and Science',
    'Nagpur Institute of Technology',
    'Priyadarshini Institute of Engineering and Technology',
    'Sharad Pawar College of Pharmacy',
    'Smt. Radhikatai Pandav College of Engineering, Nagpur',
    'St. Francis De Sales College',
    'Wainganga College of Engineering and Management',
    'Aabha Gaikwad-Patil College of Engineering',
    'Dr. Babasaheb Ambedkar College of Engineering and Research',
    'Gurunanak Institute of Engineering and Management',
    'ITM College of Engineering',
    'Nagarjuna Institute of Engineering Technology & Management',
    'Nuva College of Engineering & Technology',
    'Priyadarshini Indira Gandhi College of Engineering',
    'Rajiv Gandhi College of Engineering & Research',
    'Shri Govindarao Wanjari College of Engineering and Technology',
    'Smt. Bhagwati Chaturvedi College of Engineering',
    'Smt. Rajshree Mulak College of Engineering for Women',
    'Suryodaya College of Engineering and Technology',
    'V.M. Institute of Engineering and Technology',
    'Vidya Niketan Institute of Engineering & Technology',
    'Vilasarao Deshamukh College of Engineering and Technology',
    'Government Polytechnic, Nagpur',
    'Shri Datta Meghe Polytechnic',
    'Maharashtra National Law University, Nagpur',
    'Symbiosis Law School, Nagpur',
    'Indian Institute of Management Nagpur',
    'Datta Meghe Institute of Management Studies',
    'Institute of Management Technology, Nagpur',
    'Shri Ramdeobaba College of Engineering and Management',
    'Tirpude Institute of Management Education',
    'Dr. Ambedkar College, Nagpur',
    'Lady Amritbai Daga and Smt. Ratnidevi Purohit College for Women',
    'Shri Binzani City College',
    'Dhanwate National College',
    'St. Francis De Sales College',
    'G.H. Raisoni Department of Microbiology and Biotechnology',
    'G.S. College of Commerce and Economics',
    'Hislop College',
    'Institute of Science, Nagpur',
    'Shivaji Science College, Nagpur',
    'Vasantrao Naik Government Institute of Arts and Social Sciences',
    'All India Institute of Medical Sciences, Nagpur',
    'Government Medical College and Hospital, Nagpur',
    'Indira Gandhi Government Medical College, Nagpur',
    'NKP Salve Institute of Medical Science and Hospital, Nagpur',
    'Datta Meghe Institute of Medical Science Wanadongri, Nagpur',
    'Shri Datta Meghe College of Architecture'
];

export function Form5({ formData, setFormData }) {
    const [collegesFields, setCollegeFields] = useState(formData.college || ['']);
    const [areaFields, setAreaFields] = useState(formData.area || ['']);
    const [factFields, setFactFields] = useState(formData.fact || ['']);
    const [collegeSuggestions, setCollegeSuggestions] = useState(Array.from({ length: collegesFields.length }, () => []));

    const handleChange = (e, index, fieldArray, setFieldArray) => {
        const { value } = e.target;
        const updatedFields = [...fieldArray];
        updatedFields[index] = value;

        setFormData({
            ...formData,
            [fieldArray === collegesFields ? 'college' : (fieldArray === areaFields ? 'area' : 'fact')]: updatedFields,
        });

        setFieldArray(updatedFields);

        // Fetch and set suggestions
        setCollegeSuggestions(suggestions => suggestions.map((_, i) =>
            i === index && fieldArray === collegesFields ? sampleColleges.filter(college =>
                college.toLowerCase().includes(value.toLowerCase())
            ) : []
        ));
    };

    const handleAddField = (fieldArray, setFieldArray) => {
        setFieldArray(fields => [...fields, '']);
        setCollegeSuggestions(suggestions => [...suggestions, []]);
    };

    const handleSuggestionClick = (suggestion, index, fieldArray, setFieldArray) => {
        handleChange({ target: { value: suggestion } }, index, fieldArray, setFieldArray);

        // Close suggestions
        setCollegeSuggestions(suggestions => suggestions.map((_, i) => i === index ? [] : []));
    };

    return (
        <>
            <h2 style={{ textAlign: 'center' }}>Near By Location</h2>
            <div className='fact'>
                <div className="flex-filed">
                    {collegesFields.map((college, index) => (
                        <div key={index} style={{ position: 'relative' }}>
                            <TextField
                                placeholder="Near By Colleges"
                                id={`outlined-basic-${index}`}
                                label={index === 0 ? "Near By Colleges" : ""}
                                variant="outlined"
                                name={`college-${index}`}
                                value={college}
                                onChange={(e) => handleChange(e, index, collegesFields, setCollegeFields)}
                                className='textfield'
                                sx={{
                                    "& .MuiOutlinedInput-root": {
                                        height: '40px',
                                        marginTop: '0px',
                                    },
                                }}
                                InputProps={index === collegesFields.length - 1 && {
                                    endAdornment: (
                                        <button
                                            onClick={() => handleAddField(collegesFields, setCollegeFields)}
                                            style={{
                                                position: 'absolute',
                                                right: '8px',
                                                top: '50%',
                                                transform: 'translateY(-50%)',
                                                border: 'none',
                                                background: 'transparent',
                                                cursor: 'pointer',
                                            }}
                                        >
                                            <AddIcon />
                                        </button>
                                    ),
                                }}
                            />
                            {index === collegesFields.length - 1 && collegeSuggestions[index].length > 0 && (
                                <div style={{ position: 'absolute', top: '100%', left: 0, right: 0, zIndex: 1, background: 'white', border: '1px solid #ddd', borderTop: 'none' }}>
                                    {collegeSuggestions[index].map((suggestion, i) => (
                                        <div key={i} style={{ padding: '8px', borderBottom: '1px solid #ddd', cursor: 'pointer' }} onClick={() => handleSuggestionClick(suggestion, index, collegesFields, setCollegeFields)}>
                                            {suggestion}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
                <div className="flex-filed">
                    {areaFields.map((area, index) => (
                        <div key={index}>
                            <TextField
                                placeholder="Kalmeshwar, Fetri, Yerla"
                                id={`outlined-basic-${index}`}
                                label={index === 0 ? "Area Near By" : ""}
                                variant="outlined"
                                name={`area-${index}`}
                                value={area}
                                onChange={(e) => handleChange(e, index, areaFields, setAreaFields)}
                                className='textfield'
                                sx={{
                                    "& .MuiOutlinedInput-root": {
                                        height: '40px',
                                        marginTop: '0px'
                                    },
                                }}
                                InputProps={index === 0 && {
                                    endAdornment: (
                                        <button
                                            onClick={() => handleAddField(areaFields, setAreaFields)}
                                            style={{
                                                position: 'absolute',
                                                right: '8px',
                                                top: '50%',
                                                transform: 'translateY(-50%)',
                                                border: 'none',
                                                background: 'transparent',
                                                cursor: 'pointer',
                                            }}
                                        >
                                            <AddIcon />
                                        </button>
                                    ),
                                }}
                            />
                        </div>
                    ))}
                </div>
                <div className="flex-filed">
                    {factFields.map((fact, index) => (
                        <div key={index}>
                            <TextField
                                placeholder="Hospitals, Medical Shop, Bus stop"
                                id={`outlined-basic-${index}`}
                                label={index === 0 ? "Facilities Near By" : ""}
                                variant="outlined"
                                name={`fact-${index}`}
                                value={fact}
                                onChange={(e) => handleChange(e, index, factFields, setFactFields)}
                                className='textfield'
                                sx={{
                                    "& .MuiOutlinedInput-root": {
                                        height: '40px',
                                        marginTop: '0px'
                                    },
                                }}
                                InputProps={index === 0 && {
                                    endAdornment: (
                                        <button
                                            onClick={() => handleAddField(factFields, setFactFields)}
                                            style={{
                                                position: 'absolute',
                                                right: '8px',
                                                top: '50%',
                                                transform: 'translateY(-50%)',
                                                border: 'none',
                                                background: 'transparent',
                                                cursor: 'pointer',
                                            }}
                                        >
                                            <AddIcon />
                                        </button>
                                    ),
                                }}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}



export function Form6({ formData, setFormData }) {
    const handleImageChange = (e) => {
        setFormData((prevInput) => ({
            ...prevInput,
            verify: e.target.files[0],
        }));
    }

    return (
        <div>
            <h2 style={{ textAlign: 'center' }}>Verification</h2>
            <FormLabel style={{ marginTop: '10px', marginLeft: '20px' }} margin='normal'>Image <input type="file" accept="image/*" name="verify" onChange={handleImageChange} /></FormLabel>
            <div>
                {formData.verify && (
                    <img src={URL.createObjectURL(formData.verify)} alt={formData.name} style={{ width: '100px', height: '100px', marginBottom: '20px', marginTop: '20px' }} />
                )}
            </div>
        </div>
    );
}
