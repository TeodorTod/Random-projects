const mongoose = require('mongoose');

const serviceSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please add your name']
    },
    serviceType: {
        type: String,
        required: [true, 'Please add your service type']
    },
    yearsExperience: {
        type: String,
        required: [true, 'Please your experience']
    },
    priceRange: {
        type: String,
        required: [true, 'Please your desired prive range']
    },
    portfolio: {
        type: String,
        required: [true, 'Please your portfolio site']
    },
    weekAvailability: {
        type: String,
        required: [true, 'Please your availability']
    },

},
    {
        timestamps: true
    }
);

module.exports = mongoose.model('Service', serviceSchema);