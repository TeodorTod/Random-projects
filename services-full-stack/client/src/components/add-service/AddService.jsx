import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import { useTheme } from '@mui/material/styles';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Chip from '@mui/material/Chip';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import ListItemText from '@mui/material/ListItemText';
import { useNavigate } from 'react-router-dom';
import apiRequest from '../../lib/apiRequest';
import './AddService.css';
import { services as servicesList, years, range } from '../../common/dropdownsValues';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

function getStyles(name, services, theme) {
    return {
        fontWeight:
            services.indexOf(name) === -1
                ? theme.typography.fontWeightRegular
                : theme.typography.fontWeightMedium,
    };
}

const AddService = () => {
    const [formData, setFormData] = useState({ name: '', serviceType: '', yearsExperience: '', priceRange: '', portfolio: '', weekAvailability: '' });
    const [services, setServices] = useState([]);
    const [yearsExperience, setYearsExperience] = useState([]);
    const [priceRange, setPriceRange] = useState([]);
    const navigate = useNavigate();
    const theme = useTheme();

    const handleChange = (e) => {
        const { value, id } = e.target;
        if (Array.isArray(value)) {
            if (id === 'serviceType') {
                setServices(typeof value === 'string' ? value.split(',') : value);
            } else if (id === 'yearsExperience') {
                setYearsExperience(typeof value === 'string' ? value.split(',') : value);
            } else if (id === 'priceRange') {
                setPriceRange(typeof value === 'string' ? value.split(',') : value);
            }
        } else {
            setFormData({ ...formData, [id]: value });
        }
    };

    const handleYearsChange = (e) => {
        const { value } = e.target;
        setYearsExperience(typeof value === 'string' ? value.split(',') : value);
    };

    const handlePriceChange = (e) => {
        const { value } = e.target;
        setPriceRange(typeof value === 'string' ? value.split(',') : value);
    };

    const handleDeleteChip = (chipToDelete) => (event) => {
        event.stopPropagation();
        setServices((chips) => chips.filter((chip) => chip !== chipToDelete));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await apiRequest.post('/auth/login', formData);
            navigate('/services');
        } catch (error) {
            console.error('Error registering user:', error);
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', flexDirection: 'column', alignItems: 'center' }}>
                    <div>
                        <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                            <TextField
                                label="Name"
                                id="name"
                                placeholder='Write your name here'
                                fullWidth
                                value={formData.name}
                                onChange={handleChange}
                            />
                        </FormControl>
                        <FormControl sx={{ m: 1, width: 300 }} variant="outlined">
                            <InputLabel id="service-type-label">Service Type</InputLabel>
                            <Select
                                labelId="service-type-label"
                                id="serviceType"
                                multiple
                                value={services}
                                onChange={handleChange}
                                input={<OutlinedInput label="Service Type" />}
                                renderValue={(selected) => (
                                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                                        {selected.map((value) => (
                                            <Chip
                                                key={value}
                                                label={value}
                                                onDelete={handleDeleteChip(value)}
                                                onMouseDown={(event) => event.stopPropagation()}
                                            />
                                        ))}
                                    </Box>
                                )}
                                MenuProps={MenuProps}
                            >
                                {servicesList.map((name) => (
                                    <MenuItem
                                        key={name}
                                        value={name}
                                        style={getStyles(name, services, theme)}
                                    >
                                        {name}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                        <FormControl sx={{ m: 1, width: 300 }} variant="outlined">
                            <InputLabel id="years-experience-label">Years Experience</InputLabel>
                            <Select
                                labelId="years-experience-label"
                                id="yearsExperience"
                                value={yearsExperience}
                                onChange={handleYearsChange}
                                input={<OutlinedInput label="Years Experience" />}
                                renderValue={(selected) => selected.map(value => `${value.includes('0') ? `${value} year` : `${value} years`}`).join(', ')}
                                MenuProps={MenuProps}
                            >
                                {years.map((year) => (
                                    <MenuItem key={year} value={year}>
                                        <Checkbox checked={yearsExperience.indexOf(year) > -1} />
                                        <ListItemText primary={`${year} years`} />
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </div>
                    <div>
                    <FormControl sx={{ m: 1, width: 300 }} variant="outlined">
                            <InputLabel id="price-range-label">Price Range</InputLabel>
                            <Select
                                labelId="price-range-label"
                                id="priceRange"
                                value={priceRange}
                                onChange={handlePriceChange}
                                input={<OutlinedInput label="Price Range" />}
                                renderValue={(selected) => selected.map(value => `$${value} per hour`).join(', ')}
                                MenuProps={MenuProps}
                            >
                                {range.map((price) => (
                                    <MenuItem key={price} value={price}>
                                        <Checkbox checked={priceRange.indexOf(price) > -1} />
                                        <ListItemText primary={`$${price} per hour`} />
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                        <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                            <TextField
                                label="Portfolio"
                                id="portfolio"
                                placeholder='Portfolio site'
                                fullWidth
                                value={formData.portfolio}
                                onChange={handleChange}
                            />
                        </FormControl>
                    </div>
                    <Button type="submit" variant="contained" sx={{ m: 1, width: '250px' }}>
                        Sign In
                    </Button>
                </Box>
            </form>
        </>
    );
}

export default AddService;
