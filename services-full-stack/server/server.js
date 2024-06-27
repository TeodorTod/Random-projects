const express = require('express');
const connectDB = require('./config/dbConnection');
const dotenv = require('dotenv').config();
const cors = require('cors');

const app = express();
const port = process.env.PORT || 8080;

app.use(cors({
  origin: process.env.CLIENT_URL,
  credentials: true
}));
connectDB();
app.use(express.json());
app.use("/api/auth", require("./routes/authRoute"));
app.use("/api/service", require("./routes/serviceRoute"));

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
