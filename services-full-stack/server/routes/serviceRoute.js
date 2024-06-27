const express = require('express');
const { getSingleService, getAllServices, addService, updateService, deleteService } = require('../controllers/serviceController');
const validateToken = require('../middlewares/validateHandleToken');


const router = express.Router();

router.get('/get-service/:id', validateToken, getSingleService);

router.get('/get-all', getAllServices);

router.post('/add-service', addService);

router.put('/update-service', updateService);

router.delete('/delete-service', deleteService);

module.exports = router;