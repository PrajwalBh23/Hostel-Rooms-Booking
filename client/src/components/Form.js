import React, { useState } from 'react';
import Header from './Header.js';
import { Form1, Form2, Form3, Form4, Form5 } from './Exporter.js';
import './Form.css'
import { Button } from "@mui/material";

function FormContainer() {
    const [step, setStep] = useState(1);
    const [formData1, setFormData1] = useState({
        name: '',
        phone: '',
        email: ''
    });
    const [formData2, setFormData2] = useState({
        name: '',
        phone: '',
        email: '',
        experience: ''
    });
    const [formData3, setFormData3] = useState({
        name: '',
        phone: '',
        email: ''
    });
    const [formData4, setFormData4] = useState({
        name: '',
        phone: '',
        email: '',
        experience: ''
    });
    const [formData5, setFormData5] = useState({
        name: '',
        phone: '',
        email: ''
    });

    const nextStep = () => {
        if (step === 1) {
            if (formData1.name && formData1.phone && formData1.email) {
                setStep(step + 1);
            }
        } else if (step === 2) {
            if (formData2.name && formData2.phone && formData2.email && formData2.experience) {
                setStep(step + 1);
            }
        } else if (step === 3) {
            if (formData3.name && formData3.phone && formData3.email) {
                setStep(step + 1);
            }
        } else if (step === 4) {
            if (formData4.name && formData4.phone && formData4.email && formData4.experience) {
                setStep(step + 1);
            }
        } else if (step === 5) {
            if (formData5.name && formData5.phone && formData5.email) {
                setStep(step + 1);
            }
        }
    };

    const prevStep = () => {
        if (step > 1) {
            setStep(step - 1);
        }
    };

    const renderForm = () => {
        switch (step) {
            case 1:
                return <Form1 formData={formData1} setFormData={setFormData1} />;
            case 2:
                return <Form2 formData={formData2} setFormData={setFormData2} />;
            case 3:
                return <Form3 formData={formData3} setFormData={setFormData3} />;
            case 4:
                return <Form4 formData={formData4} setFormData={setFormData4} />;
            case 5:
                return <Form5 formData={formData5} setFormData={setFormData5} />;
            default:
                return null;
        }
    };

    return (
        <>
            <Header />
            <div className="formcont">
                {renderForm()}
                {step > 1 && (
                    <Button onClick={prevStep}>Back</Button>
                )}
                {step < 5 && (
                    <Button onClick={nextStep}>Save & Next</Button>
                )}
            </div>
        </>
    );
}

export default FormContainer;
