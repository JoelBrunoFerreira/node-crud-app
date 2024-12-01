const Allergy = require ("../models/allergy.model");

// GET all allergies
const getAllergies = async (req, res) => {
    try {
        const allergies = await Allergy.find({});
        res.status(200).json(allergies);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// GET allergy by id
const getAllergy = async (req, res) => {
    try {
        const { id } = req.params;
        const allergy = await Allergy.findById(id);
        res.status(200).json(allergy);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// POST allergy
const createAllergy = async (req, res) => {
    try {
        const allergy = await Allergy.create(req.body);
        res.status(200).json(allergy);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// UPDATE allergy
const updateAllergy = async (req, res) => {
    try {
        const { id } = req.params;

        const allergy = await Allergy.findByIdAndUpdate(id, req.body);

        if (!allergy) {
            return res.status(404).json({ message: "Allergy not found" });
        }

        const updatedAllergy = await Allergy.findById(id);
        res.status(200).json(updatedAllergy);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// DELETE allergy
const deleteAllergy = async (req, res) => {
    try {
        const { id } = req.params;

        const allergy = await Allergy.findByIdAndDelete(id);

        if (!allergy) {
            return res.status(404).json({ message: "Allergy not found" });
        }

        res.status(200).json({ message: "Allergy deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Export functions
module.exports = {
    getAllergies,
    getAllergy,
    createAllergy,
    updateAllergy,
    deleteAllergy,
};