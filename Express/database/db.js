const { default: mongoose } = require("mongoose");

async function connectDB() {
  await mongoose.connect("mongodb://127.0.0.1:27017/nodejs_express");
}

module.exports = connectDB;