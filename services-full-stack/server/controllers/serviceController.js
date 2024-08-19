const Service = require('../models/serviceModel');
// import jwt from "jsonwebtoken";

const getSingleService = async (req, res) => {
    try {
        const singleService = await Service.findById(req.params.id);
        if (!singleService) {
            return res.status(404).json({ message: "Current service not found" });
        }
        return res.status(200).json({ message: "Get single service!", service: singleService });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Failed to get current service!" });
    }
};

const getAllServices = async (req, res) => {
    try {
        const { page = 1, limit = 10, search = '', sortField = 'name', sortOrder = 'asc' } = req.query;

        let query = { user_id: req.user_id };

        if (search) {
            const searchConditions = Object.keys(Service.schema.paths).reduce((acc, key) => {
                if (Service.schema.paths[key].instance === 'String') {
                    acc.push({ [key]: { $regex: search, $options: 'i' } });
                }
                return acc;
            }, []);

            query.$or = searchConditions;
        }

        const totalServices = await Service.countDocuments(query);

        const allServices = await Service.find(query)
            .sort({ [sortField]: sortOrder === 'asc' ? 1 : -1 })
            .skip((parseInt(page) - 1) * parseInt(limit))
            .limit(parseInt(limit));

        return res.status(200).json({
            message: "Get all services!",
            services: allServices,
            total: totalServices,
            page: parseInt(page),
            totalPages: Math.ceil(totalServices / parseInt(limit)),
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Failed to get services!" });
    }
};

const addService = async (req, res) => {
    const { name, serviceType, yearsExperience, priceRange, portfolio, weekAvailability } = req.body;

    if (!name || !serviceType || !yearsExperience || !priceRange || !portfolio || !weekAvailability) {
        res.status(400).json({ message: 'All fields are required!' });
        return;
    }

    try {
        const newService = new Service({
            name,
            serviceType,
            yearsExperience,
            priceRange, 
            portfolio,
            weekAvailability,
            user_id: req.user_id
        });

        const savedService = await newService.save();
        return res.status(200).json({ message: "Service added successfully!", newService: savedService });
    } catch (error) {
        console.error('Error saving service:', error); 
        return res.status(500).json({ message: "Failed to create a service!", error });
    }
};

const updateService = async (req, res) => {
    try {
        const service = await Service.findById(req.params.id);
        if (!service) {
            return res.status(404).json({ message: "Service not found" });
        }

        const updatedService = await Service.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        return res.status(200).json({ message: "Service updated!", editedService: updatedService });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Failed to update service!" });
    }
};

const deleteService = async (req, res) => {
    const service = await Service.findById(req.params.id);
    if (!service) {
        res.status(404);
        throw new Error("Service not found");
    }
    if (service.user_id.toString() !== req.user_id) {
        res.status(403);
        throw new Error("User don't have permission to delete other service");
    }
    try {
        await service.deleteOne();
        return res.status(200).json({ message: "Delete service!" });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Failed to get current user!" });
    }
};

module.exports = { getSingleService, getAllServices, addService, updateService, deleteService };
