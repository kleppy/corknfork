const mongoose = require("mongoose");
require("dotenv").config(); // Load environment variables

mongoose.connect(process.env.CORKNFORK_DB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = mongoose.connection;
