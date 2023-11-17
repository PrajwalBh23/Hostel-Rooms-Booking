import React, { useState } from 'react';
import Header from './Header.js';
import { Form1, Form2, Form3, Form4, Form5, Form6 } from './Exporter.js';
import './Form.css'
import { Button } from "@mui/material";

function FormContainer() {
    const [step, setStep] = useState(1);
    const [formData1, setFormData1] = useState({
        name: '',
        phone: '',
        email: '',
        experience: '',
        owned: ''
    });
    const [formData2, setFormData2] = useState({
        address: '',
        room: '',
        price: '',
        share: '',
        sharing: '',
        gender: '',
        deposit: '',
    });
    const [formData3, setFormData3] = useState({
        image: ''
    });
    const [formData4, setFormData4] = useState({
        rules: [''],
        config: [''],
        semiFurnished: '',
        bill: '',
        park: ''
    });
    const [formData5, setFormData5] = useState({
        college: [''],
        area: [''],
        fact: ['']
    });
    const [formData6, setFormData6] = useState({
        verify: ''
    });

    const nextStep = async () => {
        if (step === 1) {
            if (formData1.name && formData1.phone && formData1.email && formData1.experience && formData1.owned) {
                setStep(step + 1);
            }
        } else if (step === 2) {
            if (formData2.address && formData2.room && formData2.price && formData2.share && formData2.gender && formData2.deposit) {
                if (formData2.share === 'Shared' && formData2.sharing) {
                    setStep(step + 1);
                } else if (formData2.share === 'Single') {
                    setStep(step + 1);
                }
            }
        } else if (step === 3) {
            if (formData3.images) {
                setStep(step + 1);
            }
        } else if (step === 4) {
                const { rules, config, semiFurnished, bill, park } = formData4;
                if (rules[0] && config[0] && semiFurnished && bill && park) {
                    setStep(step + 1);
                }
        } else if (step === 5) {
            // Validation for Form5
            const { college, area, fact } = formData5;
            if (college[0] && area[0] && fact[0]) {
                setStep(step + 1);
            }
        } 
        else if (step === 6) {
            formData6.verify = typeof formData6.verify === 'object' ? JSON.stringify(formData6.verify) : formData6.verify;

      try {
        const response = await fetch('http://localhost:5000/stay', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            formData1,
            formData2,
            formData3,
            formData4,
            formData5,
            formData6,
          }),
        });

        if (response.ok) {
          console.log('Form data saved successfully');
          window.location.href = '/add';
        } else {
          console.error('Failed to save form data:', response.statusText);
        }
      } catch (error) {
        console.error('Error during form data save:', error);
      }
    } else {
      // If it's not the final step, proceed to the next step
      setStep(step + 1);
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
            case 6:
                return <Form6 formData={formData6} setFormData={setFormData6} />;
            default:
                return null;
        }
    };

    return (
        <>
            <Header />
            <div className="formcont">
                {renderForm()}
                {step < 6 && (
                    <Button style={{ width: '30%', margin: '-12px 35% 20px 35%', color: 'white', backgroundColor: '#1976d2' }} onClick={nextStep}>Save & Next</Button>
                )}
                {step === 6 && (
                    <Button style={{ width: '30%', margin: '12px 35% 20px 35%', color: 'white', backgroundColor: '#1976d2' }} onClick={nextStep}>Save & Next</Button>
                )}
                {step > 1 && (
                    <Button style={{ width: '30%', margin: '-12px 35% 20px 35%', color: 'white', backgroundColor: '#1976d2' }} onClick={prevStep}>Back</Button>
                )}
            </div>
        </>
    );
}

export default FormContainer;
