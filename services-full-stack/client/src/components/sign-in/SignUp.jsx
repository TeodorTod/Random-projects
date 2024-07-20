import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import IconButton from '@mui/material/IconButton';
import InputLabel from '@mui/material/InputLabel';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Button from '@mui/material/Button';
import axios from 'axios';
import apiRequest from '../../lib/apiRequest';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({ email: '', username: '', password: '' });
    const navigate = useNavigate();

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await apiRequest.post('/auth/register', formData);
            navigate('/signIn')
        } catch (error) {
            console.error('Error registering user:', error);
        }
    };

    return (
        <>
            <h1 style={{color: '#fff', textAlign: 'center'}}>Sign up here</h1>
            <form onSubmit={handleSubmit}>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', flexDirection: 'column', alignItems: 'center' }}>
                    <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                        <TextField
                            label="Email"
                            id="email"
                            placeholder='Write your email here'
                            fullWidth
                            value={formData.email}
                            onChange={handleChange}
                            style={{backgroundColor: '#fff'}}
                        />
                    </FormControl>
                    <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                        <TextField
                            label="Username"
                            id="username"
                            placeholder='Write your username here'
                            fullWidth
                            value={formData.username}
                            onChange={handleChange}
                            style={{backgroundColor: '#fff', borderRadius: '5px'}}
                        />
                    </FormControl>
                    <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                        <InputLabel htmlFor="password">Password</InputLabel>
                        <OutlinedInput
                            id="password"
                            type={showPassword ? 'text' : 'password'}
                            value={formData.password}
                            onChange={handleChange}
                            style={{backgroundColor: '#fff', borderRadius: '5px'}}
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
                            label="Password"
                        />
                    </FormControl>
                    <Button type="submit" variant="contained" sx={{ m: 1, width: '250px' }}>
                        Register
                    </Button>
                </Box>
            </form>
        </>
    );
};

export default SignUp;
