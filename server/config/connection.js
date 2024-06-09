const mongoose = require("mongoose");
//! require("dotenv").config(); // Load environment variables

mongoose.connect(
  "mongodb://127.0.0.1:27017/corknforkDB" /* Replace with .env variable */,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

module.exports = mongoose.connection;
