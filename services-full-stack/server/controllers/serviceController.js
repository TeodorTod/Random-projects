const Service = require('../models/serviceModel');

const getSingleService = async (req, res) => {
    try {
        return res.status(200).json({ message: "Get single service!" });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Failed to get current user!" });
    }
};
const getAllServices = async (req, res) => {
    try {
        return res.status(200).json({ message: "Get all services!" });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Failed to get current user!" });
    }
};
const addService = async (req, res) => {
    try {
        return res.status(200).json({ message: "Add service!" });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Failed to get current user!" });
    }
};
const updateService = async (req, res) => {
    try {
        return res.status(200).json({ message: "Update service!" });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Failed to get current user!" });
    }
};
const deleteService = async (req, res) => {
    try {
        return res.status(200).json({ message: "Delete service!" });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Failed to get current user!" });
    }
};

module.exports = { getSingleService, getAllServices, addService, updateService, deleteService };
