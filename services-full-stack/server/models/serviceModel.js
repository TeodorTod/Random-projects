const mongoose = require('mongoose');

const serviceSchema = mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: [true, 'Please add the contact name'],
        ref: "User"
    },
    name: {
        type: String,
        required: [true, 'Please add your name']
    },
    serviceType: {
        type: Array,
        required: [true, 'Please add your service type']
    },
    yearsExperience: {
        type: Array,
        required: [true, 'Please your experience']
    },
    priceRange: {
        type: Array,
        required: [true, 'Please your desired prive range']
    },
    portfolio: {
        type: String,
        required: [true, 'Please your portfolio site']
    },
    weekAvailability: {
        type: Array,
        required: [true, 'Please your availability']
    },

},
    {
        timestamps: true
    }
);

module.exports = mongoose.model('Service', serviceSchema);