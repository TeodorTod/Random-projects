const { Schema, default: mongoose } = require("mongoose");

const UserSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,   
        required: true,
    },
},
    { versionKey: false });

module.exports = mongoose.model('User', UserSchema, 'user');