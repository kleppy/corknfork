const mongoose = require('mongoose');

const { Schema } = mongoose;

const cellarSchema = new Schema({
  Email: {
    type: String,
    required: true,
    trim: true
  }, 
  Pair:[{
      Food: object.id,
      Wine: object.id
  }],
  Wine: object.id,
  Food: object.id,
}); 

const Food = mongoose.model('Cellar', cellarSchema);

module.exports = Cellar;
