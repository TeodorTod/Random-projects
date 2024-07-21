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
import { services as servicesList, years, range, availability } from '../../common/dropdownsValues';

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

function getStyles(name, selectedItems, theme) {
    return {
        fontWeight:
            selectedItems.indexOf(name) === -1
                ? theme.typography.fontWeightRegular
                : theme.typography.fontWeightMedium,
    };
}

const AddService = () => {
    const [formData, setFormData] = useState({ name: '', serviceType: [], yearsExperience: [], priceRange: [], portfolio: '', weekAvailability: [] });
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();
    const theme = useTheme();

    const handleChange = (e) => {
        const { value, id } = e.target;
        setFormData({ ...formData, [id]: value });
    };

    const handleMultiSelectChange = (id) => (e) => {
        const { value } = e.target;
        setFormData({ ...formData, [id]: typeof value === 'string' ? value.split(',') : value });
    };

    const handleDeleteChip = (id, chipToDelete) => (event) => {
        event.stopPropagation();
        setFormData((prevData) => ({
            ...prevData,
            [id]: prevData[id].filter((chip) => chip !== chipToDelete),
        }));
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.name) newErrors.name = 'This field is required';
        if (formData.serviceType.length === 0) newErrors.serviceType = 'This field is required';
        if (formData.yearsExperience.length === 0) newErrors.yearsExperience = 'This field is required';
        if (formData.priceRange.length === 0) newErrors.priceRange = 'This field is required';
        if (!formData.portfolio) newErrors.portfolio = 'This field is required';
        if (formData.weekAvailability.length === 0) newErrors.weekAvailability = 'This field is required';
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateForm()) return;

        try {
            const response = await apiRequest.post('/service/add-service', formData);
            navigate('/services');
        } catch (error) {
            console.error('Error adding service:', error.response ? error.response.data : error.message); 
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', flexDirection: 'column', alignItems: 'center' }}>
                <h2 style={{textAlign: 'center', color: '#fff', fontFamily: 'monospace', fontSize: '30px'}}>Add your service</h2>
                    <div>
                        <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                            <TextField
                                label="Name"
                                id="name"
                                placeholder='Write your name here'
                                fullWidth
                                value={formData.name}
                                onChange={handleChange}
                                required
                                error={!!errors.name}
                                helperText={errors.name}
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
                        <FormControl sx={{ m: 1, width: 300 }} variant="outlined" required error={!!errors.serviceType}>
                            <InputLabel
                                id="service-type-label"
                                sx={{
                                    '&.Mui-focused': {
                                        color: 'black',
                                    },
                                }}
                            >
                                Service Type
                            </InputLabel>
                            <Select
                                labelId="service-type-label"
                                id="serviceType"
                                multiple
                                value={formData.serviceType}
                                onChange={handleMultiSelectChange('serviceType')}
                                input={<OutlinedInput label="Service Type" />}
                                renderValue={(selected) => (
                                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                                        {selected.map((value) => (
                                            <Chip
                                                key={value}
                                                label={value}
                                                onDelete={handleDeleteChip('serviceType', value)}
                                                onMouseDown={(event) => event.stopPropagation()}
                                            />
                                        ))}
                                    </Box>
                                )}
                                sx={{
                                    backgroundColor: '#fff',
                                    borderRadius: '5px',
                                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                        borderColor: 'black',
                                    },
                                }}
                                MenuProps={MenuProps}
                            >
                                {servicesList.map((name) => (
                                    <MenuItem
                                        key={name}
                                        value={name}
                                        style={getStyles(name, formData.serviceType, theme)}
                                    >
                                        {name}
                                    </MenuItem>
                                ))}
                            </Select>
                            {errors.serviceType && <p className="error-text">{errors.serviceType}</p>}
                        </FormControl>
                        <FormControl sx={{ m: 1, width: 300 }} variant="outlined" required error={!!errors.yearsExperience}>
                            <InputLabel
                                id="years-experience-label"
                                sx={{
                                    '&.Mui-focused': {
                                        color: 'black',
                                    },
                                }}
                            >
                                Years Experience
                            </InputLabel>
                            <Select
                                labelId="years-experience-label"
                                id="yearsExperience"
                                multiple
                                value={formData.yearsExperience}
                                onChange={handleMultiSelectChange('yearsExperience')}
                                input={<OutlinedInput label="Years Experience" />}
                                renderValue={(selected) => selected.map(value => `${value} years`).join(', ')}
                                sx={{
                                    backgroundColor: '#fff',
                                    borderRadius: '5px',
                                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                        borderColor: 'black',
                                    },
                                }}
                                MenuProps={MenuProps}
                            >
                                {years.map((year) => (
                                    <MenuItem key={year} value={year}>
                                        <Checkbox checked={formData.yearsExperience.indexOf(year) > -1} />
                                        <ListItemText primary={`${year} years`} />
                                    </MenuItem>
                                ))}
                            </Select>
                            {errors.yearsExperience && <p className="error-text">{errors.yearsExperience}</p>}
                        </FormControl>
                    </div>
                    <div>
                        <FormControl sx={{ m: 1, width: 300 }} variant="outlined" required error={!!errors.priceRange}>
                            <InputLabel
                                id="price-range-label"
                                sx={{
                                    '&.Mui-focused': {
                                        color: 'black',
                                    },
                                }}
                            >
                                Price Range
                            </InputLabel>
                            <Select
                                labelId="price-range-label"
                                id="priceRange"
                                multiple
                                value={formData.priceRange}
                                onChange={handleMultiSelectChange('priceRange')}
                                input={<OutlinedInput label="Price Range" />}
                                renderValue={(selected) => selected.map(value => `$${value} per hour`).join(', ')}
                                sx={{
                                    backgroundColor: '#fff',
                                    borderRadius: '5px',
                                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                        borderColor: 'black',
                                    },
                                }}
                                MenuProps={MenuProps}
                            >
                                {range.map((price) => (
                                    <MenuItem key={price} value={price}>
                                        <Checkbox checked={formData.priceRange.indexOf(price) > -1} />
                                        <ListItemText primary={`$${price} per hour`} />
                                    </MenuItem>
                                ))}
                            </Select>
                            {errors.priceRange && <p className="error-text">{errors.priceRange}</p>}
                        </FormControl>
                        <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                            <TextField
                                label="Portfolio"
                                id="portfolio"
                                placeholder='Portfolio site'
                                fullWidth
                                value={formData.portfolio}
                                onChange={handleChange}
                                required
                                error={!!errors.portfolio}
                                helperText={errors.portfolio}
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
                        <FormControl sx={{ m: 1, width: 300 }} variant="outlined" required error={!!errors.weekAvailability}>
                            <InputLabel
                                id="working-availability-label"
                                sx={{
                                    '&.Mui-focused': {
                                        color: 'black',
                                    },
                                }}
                            >
                                Working Availability
                            </InputLabel>
                            <Select
                                labelId="working-availability-label"
                                id="weekAvailability"
                                multiple
                                value={formData.weekAvailability}
                                onChange={handleMultiSelectChange('weekAvailability')}
                                input={<OutlinedInput label="Working Availability" />}
                                renderValue={(selected) => selected.map(value => `${value} per week`).join(', ')}
                                sx={{
                                    backgroundColor: '#fff',
                                    borderRadius: '5px',
                                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                        borderColor: 'black',
                                    },
                                }}
                                MenuProps={MenuProps}
                            >
                                {availability.map((availability) => (
                                    <MenuItem key={availability} value={availability}>
                                        <Checkbox checked={formData.weekAvailability.indexOf(availability) > -1} />
                                        <ListItemText primary={`${availability} per week`} />
                                    </MenuItem>
                                ))}
                            </Select>
                            {errors.weekAvailability && <p className="error-text">{errors.weekAvailability}</p>}
                        </FormControl>
                    </div>
                    <Button type="submit" variant="contained" sx={{ m: 1, width: '250px' }}>
                        Add Service
                    </Button>
                </Box>
            </form>
        </>
    );
};

export default AddService;
