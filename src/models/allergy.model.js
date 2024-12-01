const mongoose = require ('mongoose');

const AllergySchema = mongoose.Schema ({
        name: {
            type: String,
            required: [true, "Allergy name is required"]
        },
        description: {
            type: String,
            required: [true, "Allergy description is required"]
        },
        symptoms: {
            type: String,
            required: [true, "Symptoms are required"]
        },
        severity: {
            type: Number,
            required: [true, "Severity is required"],
            default: 0
        }
    },
    {
        timestamps: true
    }
)

const Allergy = mongoose.model('Allergy', AllergySchema);
module.exports = Allergy;