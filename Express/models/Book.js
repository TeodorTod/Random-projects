const { Schema, default: mongoose } = require("mongoose");

const BookSchema = new Schema({
    title: {
        type: String,
        required: true,
        validate: {
            validator: function(v) {
                return typeof v === 'string' && isNaN(v); 
            },
            message: props => `${props.value} is not a valid string!`
        }
    },
    author: {
        type: String,
        required: true,
        validate: {
            validator: function(v) {
                return typeof v === 'string' && isNaN(v); 
            },
            message: props => `${props.value} is not a valid string!`
        }
    }
},
    { versionKey: false });

module.exports = mongoose.model('Book', BookSchema, 'book');