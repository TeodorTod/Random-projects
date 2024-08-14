import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "./navbar.scss";
import { AuthContext } from '../../contexts/AuthContext';
import axios from 'axios';

import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import LogoutModal from '../logout-modal/logoutModal'
import apiRequest from '../../lib/apiRequest';

export default function Navbar() {
    const { currentUser, updateUser } = useContext(AuthContext);
    const [anchorEl, setAnchorEl] = useState(null);
    const [isModalOpen, setModalOpen] = useState(false);
    const [userLetter, setUserLetter] = useState('');
    const navigate = useNavigate();
    const open = Boolean(anchorEl);

    useState(() => {
        const firstLetter = currentUser.user.username.charAt(0).toUpperCase();
        setUserLetter(firstLetter);
        console.log(firstLetter);
    }, []);
    
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleLogoutClick = () => {
        setModalOpen(true);
    };

    const handleModalClose = () => {
        setModalOpen(false);
    };

    const handleConfirmLogout = async () => {
        try {
            await apiRequest.post('/auth/logout');
            updateUser(null);
            setModalOpen(false);
            navigate('/signin');
        } catch (error) {
            console.error('Failed to logout:', error);
        }
    };

    const goToUserSettings = () => {
        navigate('/user-settings'); 
    }

    return (
        <div className="navbar-container">
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '1rem',
                    width: '100%',
                    boxSizing: 'border-box'
                }}
            >
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    {currentUser && (
                        <>
                            <Link to="/services" style={{ textDecoration: 'none', color: 'inherit' }}>
                                <Typography sx={{ minWidth: 100 }}>Services</Typography>
                            </Link>
                            <Link to="/add-service" style={{ textDecoration: 'none', color: 'inherit' }}>
                                <Typography sx={{ minWidth: 100 }}>Add Service</Typography>
                            </Link>
                            <Link to="/contact" style={{ textDecoration: 'none', color: 'inherit' }}>
                                <Typography sx={{ minWidth: 100 }}>Contact</Typography>
                            </Link>
                        </>
                    )}
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    {!currentUser ? (
                        <>
                            <Link to="/signin" style={{ textDecoration: 'none', color: 'inherit', marginRight: '1rem' }}>
                                <Typography>Sign In</Typography>
                            </Link>
                            <Link to="/signup" style={{ textDecoration: 'none', color: 'inherit', marginRight: '1rem' }}>
                                <Typography>Sign Up</Typography>
                            </Link>
                        </>
                    ) : (
                        <Tooltip title="Account settings">
                            <IconButton
                                onClick={handleClick}
                                size="small"
                                sx={{ ml: 2 }}
                                aria-controls={open ? 'account-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={open ? 'true' : undefined}
                            >
                                <Avatar sx={{ width: 32, height: 32 }}>{userLetter}</Avatar>
                            </IconButton>
                        </Tooltip>
                    )}
                </Box>
            </Box>
            <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                    elevation: 0,
                    sx: {
                        overflow: 'visible',
                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                        mt: 1.5,
                        '& .MuiAvatar-root': {
                            width: 32,
                            height: 32,
                            ml: -0.5,
                            mr: 1,
                        },
                        '&::before': {
                            content: '""',
                            display: 'block',
                            position: 'absolute',
                            top: 0,
                            right: 14,
                            width: 10,
                            height: 10,
                            bgcolor: 'background.paper',
                            transform: 'translateY(-50%) rotate(45deg)',
                            zIndex: 0,
                        },
                    },
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
                <MenuItem onClick={handleClose}>
                    <Avatar /> {currentUser?.user?.username}
                </MenuItem>
                <Divider />
                <MenuItem onClick={goToUserSettings}>
                    <ListItemIcon>
                        <Settings fontSize="small" />
                    </ListItemIcon>
                    Settings
                </MenuItem>
                <MenuItem onClick={handleLogoutClick}>
                    <ListItemIcon>
                        <Logout fontSize="small" />
                    </ListItemIcon>
                    Logout
                </MenuItem>
            </Menu>
            <LogoutModal open={isModalOpen} handleClose={handleModalClose} handleConfirm={handleConfirmLogout} />
        </div>
    );
}
