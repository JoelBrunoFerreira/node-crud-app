const express = require('express');
const { getAllergies, getAllergy, createAllergy, updateAllergy, deleteAllergy } = require('../controllers/allergy.controller.js');
const router = express.Router();


// GET
router.get('/', getAllergies);

// GET by id
router.get("/:id", getAllergy);

// POST
router.post("/", createAllergy);

// PUT
router.put("/:id", updateAllergy);

// DELETE
router.delete("/:id", deleteAllergy);

// Export
module.exports = router;