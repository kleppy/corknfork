const mongoose = require('mongoose');

const { Schema } = mongoose;

const foodSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    image: {
        type: String
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

const Food = mongoose.model('Food', foodSchema);

module.exports = Food;
