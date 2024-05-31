const mongoose = require('mongoose');

const { Schema } = mongoose;

const cellarSchema = new Schema({
  User: {
    type: mongoose.ObjectId,
    ref:'User'
  }, 
  Wine:{
    type: mongoose.ObjectId,
    ref:"Wine"
  },
  Food: {
    type: mongoose.ObjectId,
    ref:'Food'
  }
}); 

const Cellar = mongoose.model('Cellar', cellarSchema);

module.exports = Cellar;
