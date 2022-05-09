const Flight = require('../models/flight');
// require the Ticket model
const Ticket = require('../models/ticket');

function newFlight(req, res) {
res.render('flights/new');
}

function index(req, res){
  Flight.find({}, function (err, flights){
      res.render('flights/index',{
        flights
      })
  });
}
// function show(req, res) {
//   Flight.findById(req.params.id, function(err, flight) {
//     res.render('flights/show', { title: 'Flight Details', flight });
//   });
// }
function show(req, res){
  Flight.findById(req.params.id, function(err, flight) {
      Ticket.find({flight: flight._id}, function(err, tickets) {
          res.render('flights/show', {flight, tickets})
      })
  })
}

function create(req, res){
  // we create the flight object
  const  flight = new Flight(req.body);
  // we save the flight object to the db
  flight.save(function (error){
      if(error) return res.render('flights/new');
      console.log(flight);
      // if we save the movie object then return the user
      // to the index page
      //res.redirect('/flights')
      res.redirect(`/flights/${flight._id}`);
  });
}

module.exports = {
  new: newFlight,
  create,
  index,
  show
};