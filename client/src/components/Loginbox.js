import React, { useState } from 'react';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
  Button,
  IconButton,
  Typography,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useAuth } from '../AuthContext'; // Import the useAuth hook

const YourComponent = ({ activeButton, handleButtonClick }) => (
  <div
    style={{
      display: 'flex',
      justifyContent: 'space-between',
      border: '3px solid black',
      backgroundColor: 'grey',
      marginTop: '10px',
      borderRadius: '10px',
    }}
  >
    <Button
      style={{
        color: activeButton === 'login' ? 'rgb(36,255,36)' : 'Red',
        fontSize: '18px',
        fontWeight: 'bold',
        marginLeft: '30px',
      }}
      onClick={() => handleButtonClick('login')}
      color="primary"
    >
      Login
    </Button>
    <Button
      style={{
        color: activeButton === 'register' ? 'rgb(36,255,36)' : 'red',
        fontSize: '18px',
        fontWeight: 'bold',
        marginRight: '40px',
      }}
      onClick={() => handleButtonClick('register')}
      color="primary"
    >
      Register
    </Button>
  </div>
);

const LoginDialog = ({ open, handleClose }) => {
  const { login } = useAuth(); // Use the useAuth hook

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');
  const [isRegistering, setIsRegistering] = useState(false);
  const [isForgotPassword, setIsForgotPassword] = useState(false);
  const [activeButton, setActiveButton] = useState('login');

  const handleLogin = () => {
    console.log('Logging in with:', email, password);

    // Make a POST request to the server
    fetch('http://localhost:5000/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Login response:', data);

        // Add logic to handle the response, e.g., update UI or show a message
        // You can check if the login was successful and then close the dialog
        login(data); // Assuming the login response includes user data
        handleClose();
      })
      .catch((error) => {
        console.error('Error during login:', error);
      });
  };

  const handleRegister = async () => {
    try {
      // Make a POST request to the server
      const response = await fetch('http://localhost:5000/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, phone, password }),
      });

      // Check if the response is successful
      if (!response.ok) {
        throw new Error(`Error during registration: ${response.statusText}`);
      }

      const data = await response.json();
      console.log('Register response:', data);

      // Add logic to handle the response, e.g., update UI or show a message
      // You can check if the registration was successful and then close the dialog
      login(data); // Assuming the registration response includes user data
      handleClose();
    } catch (error) {
      console.error('Error during registration:', error.message);
    }
  };

  const handleForgotPassword = () => {
    setIsForgotPassword(true);
  };

  const handleResetPassword = () => {
    // Implement password reset logic here
    console.log('Resetting password with:', email, newPassword);
    // After resetting the password, you can navigate the user back to the login state
    setIsForgotPassword(false);
  };

  const handleButtonClick = (button) => {
    setActiveButton(button);
    setIsRegistering(button === 'register');
    setIsForgotPassword(false); // Reset to login state when switching between login/register
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>
        <IconButton
          edge="end"
          color="inherit"
          onClick={handleClose}
          aria-label="close"
          sx={{ position: 'absolute', right: 8, top: 8, marginBottom: 16 }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        <YourComponent
          activeButton={activeButton}
          handleButtonClick={handleButtonClick}
        />
        {isForgotPassword ? (
          <>
            <DialogContentText>
              Please enter your email to receive an OTP and set a new password.
            </DialogContentText>
            <TextField
              label="Email"
              type="email"
              fullWidth
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              label="New Password"
              type="password"
              fullWidth
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
            <TextField
              label="Confirm New Password"
              type="password"
              fullWidth
              value={confirmNewPassword}
              onChange={(e) => setConfirmNewPassword(e.target.value)}
            />
          </>
        ) : (
          <>
            <DialogContentText>
              Please enter your {isRegistering ? 'registration' : 'login'}{' '}
              details.
            </DialogContentText>
            {isRegistering && (
              <TextField
                autoFocus
                label="Name"
                fullWidth
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            )}
            <TextField
              label="Email"
              type="email"
              fullWidth
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {isRegistering && (
              <>
                <TextField
                  label="Phone"
                  type="tel"
                  fullWidth
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </>
            )}
            <TextField
              label="Password"
              type="password"
              fullWidth
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {!isRegistering && (
              <Typography
                variant="caption"
                color="primary"
                style={{ marginTop: '8px', cursor: 'pointer' }}
                onClick={handleForgotPassword}
              >
                Forgot Password?
              </Typography>
            )}
          </>
        )}
      </DialogContent>
      <DialogActions>
        {isForgotPassword ? (
          <Button onClick={handleResetPassword} color="primary">
            Reset Password
          </Button>
        ) : (
          <Button
            onClick={isRegistering ? handleRegister : handleLogin}
            color="primary"
          >
            {isRegistering ? 'Register' : 'Login'}
          </Button>
        )}
      </DialogActions>
    </Dialog>
  );
};

export default LoginDialog;
