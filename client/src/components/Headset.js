import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import EditIcon from '@mui/icons-material/Edit';
import Divider from '@mui/material/Divider';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import HeadsetMicRoundedIcon from '@mui/icons-material/HeadsetMicRounded';

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
    width: 'auto',
    marginLeft: '10px', // Add left margin to the menu
    color:
      theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
    boxShadow:
      'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    '& .MuiMenu-list': {
      padding: '4px 0',
    },
    '& .MuiMenuItem-root': {
      display: 'flex',
      flexDirection: 'row', // Display in a row
      textAlign: 'left', // Align text to the left
      '& .MuiSvgIcon-root': {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1), // Add space after the icon
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
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="demo-customized-button"
        aria-controls={open ? 'demo-customized-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        variant="contained"
        disableElevation
        onMouseEnter={handleClick}
        style={{backgroundColor:'transparent'}}
      >
        <HeadsetMicRoundedIcon style={{ fontSize: fontSize }} />
      </Button>
      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          'aria-labelledby': 'demo-customized-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <h3 style={{ marginLeft: '20px' }}>Contact Us</h3>
        <MenuItem>
          <EditIcon />
          <div className="detail">
            <div className="head">Mobile No. | 9 AM to 8 PM IST</div>
            9874561
          </div>
        </MenuItem>
        <Divider sx={{ my: 0.1, width: '85%', margin: 'auto' }} />
        <MenuItem>
          <FileCopyIcon />
          <div className="detail">
            <div className="head" style={{ textAlign: 'left' }}>Email ID.</div>
            pbh@email.com
          </div>
        </MenuItem>
      </StyledMenu>
    </div>
  );
}
