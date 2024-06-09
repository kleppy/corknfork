const mongoose = require("mongoose");
//! require("dotenv").config(); // Load environment variables

mongoose.connect(
  "mongodb+srv://admin2:admin2@cluster0.j9d3ubi.mongodb.net/cornknforkDB" /* Replace with .env variable */,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

module.exports = mongoose.connection;
