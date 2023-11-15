// CustomizedMenus.js
import React from 'react';
import { styled, alpha } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import EditIcon from '@mui/icons-material/Edit';
import Divider from '@mui/material/Divider';
import ArchiveIcon from '@mui/icons-material/Archive';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import LoginDialog from './Loginbox';  
import { useAuth } from '../AuthContext';
// import welcome from '../images/Welcome.png';
// import PersonIcon from '@mui/icons-material/Person';

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
    boxShadow:
      'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    '& .MuiMenu-list': {
      padding: '4px 0',
    },
    '& .MuiMenuItem-root': {
      '& .MuiSvgIcon-root': {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(0),
      },
      '&:active': {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity,
        ),
      },
    },
  },
}));

export default function CustomizedMenus({ fontSize }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const { user, logout } = useAuth();
  const [loginDialogOpen, setLoginDialogOpen] = React.useState(false);
  
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLoginClick = () => {
    setLoginDialogOpen(true);
    // handleClose();
  };

  const handleLoginDialogClose = () => {
    setLoginDialogOpen(false);
    handleClose();
  };

  const handleLogout = () => {
    logout();
    handleClose();
  };

  return (
    <div>
      <Button
        id="demo-customized-button"
        aria-controls={anchorEl ? 'demo-customized-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={anchorEl ? 'true' : undefined}
        variant="contained"
        disableElevation
        onMouseEnter={handleClick}
        style={{ marginLeft: '-20px' }}
        startIcon={<AccountCircleIcon style={{ fontSize: fontSize }} />}
        endIcon={<KeyboardArrowDownIcon style={{ fontSize: fontSize }} />}
      ></Button>
      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          'aria-labelledby': 'demo-customized-button',
        }}
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {user ? (
          <>
            {/* <MenuItem disableRipple>
              <img src={welcome} alt="" width={'60px'}  height={'60px'} />
              <PersonIcon/>
              {user.name}
            </MenuItem> */}
            <MenuItem onClick={handleLogout} disableRipple>
              <LogoutIcon />
              Logout
            </MenuItem>
          </>
        ) : (
          <>
            <MenuItem onClick={handleLoginClick} disableRipple>
              <EditIcon />
              Login / Register
            </MenuItem>
          </>
        )}
        <MenuItem onClick={handleClose} disableRipple>
          <FileCopyIcon />
          My Activity
        </MenuItem>
        <Divider sx={{ my: 0.5, width: '80%', margin: 'auto' }} />
        <MenuItem onClick={handleClose} disableRipple>
          <ArchiveIcon />
          Saved
        </MenuItem>
        <MenuItem onClick={handleClose} disableRipple>
          <MoreHorizIcon />
          Light / Dark
        </MenuItem>
        <LoginDialog open={loginDialogOpen} handleClose={handleLoginDialogClose} />
      </StyledMenu>
    </div>
  );
}
