const express = require('express');
const connectDB = require('./config/dbConnection');
const dotenv = require('dotenv').config();

const app = express();
const port = process.env.PORT || 8080;

connectDB();
app.use(express.json());
app.use("/api/auth", require("./routes/authRoute"));

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
