const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//Create a destinationSchema
const destinationSchema = new Schema({
  airport: String,
  arrival: Date
}, {
  timestamps: true
});

const flightSchema = new Schema({
    airline: String,
    airport: String,
    flightNo: Number,
    departs: Date,
    destinations: [destinationSchema]
  });

  module.exports = mongoose.model('Flight', flightSchema);