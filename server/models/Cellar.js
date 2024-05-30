const mongoose = require('mongoose');

const { Schema } = mongoose;

const cellarSchema = new Schema({
  User: object.id, 
  Pair:[{
      Food: object.id,
      Wine: object.id
  }],
  Wine: object.id,
  Food: object.id,
}); 

const Food = mongoose.model('Cellar', cellarSchema);

module.exports = Cellar;
