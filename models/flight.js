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
    departs: {
      type: Date,
      default: function () {
        // create a date object
        const date = new Date();
        // create a variable representing the current yera
        const year = date.getFullYear();
        // set the current year of the current date object to be the current year + 1
        date.setFullYear(year + 1);
        // return the results
        return date;
      }
    },
    destinations: [destinationSchema]
  });
  
  module.exports = mongoose.model('Flight', flightSchema);