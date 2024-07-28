import React, { useState, useContext, useEffect } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { AuthContext } from '../../contexts/AuthContext';
import apiRequest from '../../lib/apiRequest';
import './user-settings.scss';
import { useNavigate } from 'react-router-dom';

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const UserSettings = () => {
    const { currentUser, updateUser } = useContext(AuthContext);
    const [formData, setFormData] = useState({ username: '', email: '', password: '', newPassword: '' });
    const [showPassword, setShowPassword] = useState(false);
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');
    const [snackbarSeverity, setSnackbarSeverity] = useState('success');
    const navigate = useNavigate();

    useEffect(() => {
        if (currentUser) {
            setFormData({
                username: currentUser.user.username,
                email: currentUser.user.email,
                password: '',
                newPassword: '',
            });
        }
    }, [currentUser]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleClickShowPassword = () => {
        setShowPassword((show) => !show);
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handleSnackbarClose = () => {
        setSnackbarOpen(false);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await apiRequest.put('/auth/update', formData);
            updateUser(response.data);
            setSnackbarMessage('User information updated successfully');
            setSnackbarSeverity('success');
            setSnackbarOpen(true);
            setTimeout(() => {
                navigate('/services');
            }, 2000)
        } catch (error) {
            console.error('Error updating user information:', error.response?.data || error.message);
            setSnackbarMessage('Failed to update user information: ' + (error.response?.data.message || error.message));
            setSnackbarSeverity('error');
            setSnackbarOpen(true);
        }
    };

    return (
        <div className="user-settings">
            <h2 style={{ textAlign: 'center', color: '#fff', fontFamily: 'monospace', fontSize: '30px' }}>Update User</h2>
            <form onSubmit={handleSubmit}>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', flexDirection: 'column', alignItems: 'center' }}>
                    <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                        <TextField
                            label="Username"
                            id="username"
                            fullWidth
                            value={formData.username}
                            onChange={handleChange}
                            sx={{
                                backgroundColor: '#fff',
                                borderRadius: '5px',
                                '& .MuiOutlinedInput-root': {
                                    '&.Mui-focused fieldset': {
                                        borderColor: 'black',
                                    },
                                },
                                '& .MuiInputLabel-root': {
                                    '&.Mui-focused': {
                                        color: 'black',
                                    },
                                },
                            }}
                        />
                    </FormControl>
                    <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                        <TextField
                            label="Email"
                            id="email"
                            fullWidth
                            value={formData.email}
                            onChange={handleChange}
                            sx={{
                                backgroundColor: '#fff',
                                borderRadius: '5px',
                                '& .MuiOutlinedInput-root': {
                                    '&.Mui-focused fieldset': {
                                        borderColor: 'black',
                                    },
                                },
                                '& .MuiInputLabel-root': {
                                    '&.Mui-focused': {
                                        color: 'black',
                                    },
                                },
                            }}
                        />
                    </FormControl>
                    <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                        <InputLabel
                            htmlFor="password"
                            sx={{
                                '&.Mui-focused': {
                                    color: 'black',
                                },
                            }}
                        >
                            Current Password
                        </InputLabel>
                        <OutlinedInput
                            id="password"
                            type={showPassword ? 'text' : 'password'}
                            value={formData.password}
                            onChange={handleChange}
                            sx={{
                                backgroundColor: '#fff',
                                borderRadius: '5px',
                                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                    borderColor: 'black',
                                },
                            }}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                    >
                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            }
                            label="Current Password"
                        />
                    </FormControl>
                    <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                        <InputLabel
                            htmlFor="newPassword"
                            sx={{
                                '&.Mui-focused': {
                                    color: 'black',
                                },
                            }}
                        >
                            New Password
                        </InputLabel>
                        <OutlinedInput
                            id="newPassword"
                            type={showPassword ? 'text' : 'password'}
                            value={formData.newPassword}
                            onChange={handleChange}
                            sx={{
                                backgroundColor: '#fff',
                                borderRadius: '5px',
                                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                    borderColor: 'black',
                                },
                            }}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                    >
                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            }
                            label="New Password"
                        />
                    </FormControl>
                    <Button type="submit" variant="contained" sx={{ m: 1, width: '250px' }}>
                        Update Information
                    </Button>
                </Box>
            </form>
            <Snackbar open={snackbarOpen} autoHideDuration={6000} onClose={handleSnackbarClose}>
                <Alert onClose={handleSnackbarClose} severity={snackbarSeverity} sx={{ width: '100%' }}>
                    {snackbarMessage}
                </Alert>
            </Snackbar>
        </div>
    );
};

export default UserSettings;
