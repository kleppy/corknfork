// Imports necessary mongoose assets.
const { Schema, model } = require("mongoose");

// Defines the Wine schema with necessary fields.
const wineSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  image: {
    type: String,
  },
  pairs: [
    {
      type: String,
      required: true,
    },
  ],
  flavors: [
    {
      type: String,
      required: true,
    },
  ],
});

// Initializes and exports the wine model.
const Wine = model("Wine", wineSchema);
module.exports = Wine;
