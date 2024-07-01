const express = require('express');
const { getSingleService, getAllServices, addService, updateService, deleteService } = require('../controllers/serviceController');
const validateToken = require('../middlewares/validateHandleToken');


const router = express.Router();

router.get('/get-service/:id', validateToken, getSingleService);

router.get('/get-all', validateToken, getAllServices);

router.post('/add-service', validateToken, addService);

router.put('/update-service/:id', validateToken, updateService);

router.delete('/delete-service/:id', validateToken, deleteService);

module.exports = router;