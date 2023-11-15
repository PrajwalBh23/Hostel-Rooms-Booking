import React, { useState } from "react";
import "./Login.css"; // Import the CSS file
import { TextField, Button, Dialog, DialogTitle, DialogContent, DialogActions } from "@mui/material";

const SignupPage = () => {
  // State variables for form fields and OTP verification
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [otp, setOtp] = useState("");
  const [isOtpVerified, setIsOtpVerified] = useState(false);
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [generatedOtp, setGeneratedOtp] = useState("");
  const [open, setOpen] = useState(false); // State for controlling the modal

  // Function to open the modal
  const handleOpen = () => {
    setOpen(true);
  };

  // Function to close the modal
  const handleClose = () => {
    setOpen(false);
  };

  // Function to simulate sending an OTP after a short delay
  const handleSendOtp = () => {
    setIsOtpSent(true);
    // Simulate a delay of 5 seconds (5000 milliseconds)
    setTimeout(() => {
      // Simulate a secure OTP generation on the server
      const newGeneratedOtp = Math.floor(100000 + Math.random() * 900000);

      // Simulate OTP sent to the user's mobile number
      alert(`OTP sent to ${mobile}: ${newGeneratedOtp}`);

      // Set the generated OTP to the state (for verification later)
      setOtp(newGeneratedOtp.toString());
      setGeneratedOtp(newGeneratedOtp);

      // Automatically verify the OTP and trigger sign-up
      handleVerifyOtp();
    }, 5000);
  };

  // Function to simulate OTP verification
  const handleVerifyOtp = () => {
    // Check if the entered OTP matches the generated OTP
    if (otp === generatedOtp.toString()) {
      // Set the state to indicate OTP verification success
      setIsOtpVerified(true);

      // Display a success message
      alert("OTP verified successfully!");

      // Automatically trigger sign-up after OTP verification
      handleSignup();
    } else {
      // Display an error message for an invalid OTP
      alert("Invalid OTP. Please try again.");
    }
  };

  // Function to simulate the sign-up process
  const handleSignup = () => {
    alert("Sign-up successful!");
    // You may redirect the user or perform additional actions here
    // Close the modal after successful signup
    handleClose();
  };

  // JSX rendering of the component
  return (
    <div>
      <button onClick={handleOpen} className="btn">Signup</button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Sign Up</DialogTitle>
        <DialogContent>
          <div className="signup-form">
            {/* Name Field */}
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <TextField
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="signup-input"
                placeholder="Enter Your Name"
              />
            </div>

            {/* Mobile Number Field with Send OTP button */}
            <div className="form-group">
              <label htmlFor="mobile">Mobile Number</label>
              <TextField
                placeholder="Enter your Mobile Number"
                type="text"
                id="mobile"
                value={mobile}
                className="signup-input"
                onChange={(e) => setMobile(e.target.value)}
                variant="outlined"
                name="Phone"
              />
              <Button onClick={handleSendOtp} disabled={isOtpSent}>
                Send OTP
              </Button>
            </div>

            {/* Email Field */}
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <TextField
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="signup-input"
                placeholder="Enter Your Email"
              />
            </div>

            {/* Password Field */}
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <TextField
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="signup-input"
                placeholder="Enter Your Password"
              />
            </div>

            {/* OTP Field with Verify OTP button */}
            {!isOtpVerified && (
              <div className="form-group">
                <label htmlFor="otp">Enter OTP</label>
                <TextField
                  type="text"
                  id="otp"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  className="signup-input"
                  placeholder="Enter OTP"
                />
                <Button onClick={handleVerifyOtp}>Verify OTP</Button>
              </div>
            )}

            {/* Sign Up button */}
            <div className="form-group">
              <Button
                onClick={handleSignup}
                className="do"
                disabled={!isOtpVerified}
              >
                Sign Up
              </Button>
            </div>
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default SignupPage;