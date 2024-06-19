import React from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { styled } from '@mui/system';

const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const ButtonContainer = styled('div')({
    display: 'flex',
    justifyContent: 'flex-end',
    marginTop: '1rem',
    gap: '1rem'
});

const CloseButtonContainer = styled('div')({
    display: 'flex',
    justifyContent: 'flex-end',
});

export default function LogoutModal({ open, handleClose, handleConfirm }) {
    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-title"
            aria-describedby="modal-description"
        >
            <Box sx={modalStyle}>
                <CloseButtonContainer>
                    <IconButton onClick={handleClose}>
                        <CloseIcon />
                    </IconButton>
                </CloseButtonContainer>
                <Typography id="modal-title" variant="h6" component="h2">
                    Are you sure you want to logout?
                </Typography>
                <ButtonContainer>
                    <Button variant="contained" color="primary" onClick={handleConfirm}>
                        Yes
                    </Button>
                    <Button variant="outlined" onClick={handleClose}>
                        No
                    </Button>
                </ButtonContainer>
            </Box>
        </Modal>
    );
}
