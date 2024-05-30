// Imports necessary mongoose assets.
const { Schema, model } = require("mongoose");

// Defines the Food schema with necessary fields.
const foodSchema = new Schema({
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

// Initializes and exports the food model.
const Food = model("Food", foodSchema);
module.exports = Food;
