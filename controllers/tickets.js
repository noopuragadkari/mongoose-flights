const Ticket = require('../models/ticket');
const Flight = require('../models/flight');

// module.exports = {
//     new: newTicket,
//     create,
// };
// function create(req, res) {
//   req.body.flight = req.params.id
//   console.log(req.body)
//     Ticket.create(req.body, function (err, ticket) {
//         res.redirect('/tickets/new');
//       });
// }

// function newTicket(req, res) {
//     Ticket.find({}, function (err, tickets) {
//       res.render('tickets/new', {
//         title: 'Add Ticket',
//         tickets
//       });
//     })
//   }

function newTicket(req, res) {
  res.render('tickets/new', { flightId: req.params.id });
}

function create (req, res) {
  flightId = req.params.id;
  req.body.flight = flightId;
  Ticket.create(req.body, function (err, ticket) {
      res.redirect(`/flights/${flightId}`);
  });
}

module.exports = {
    new: newTicket,
    create
}