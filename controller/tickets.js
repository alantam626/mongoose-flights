const Flight = require('../models/flight');
const Ticket = require('../models/ticket')

module.exports = {
    create,
    new: newTicket,
}

function create(req, res) {
    req.body.flight = req.params.flightId;
    Ticket.create(req.body, function (err, ticket) {
        res.redirect(`/flights/${req.params.flightId}`)
    })

    // Flight.findById(req.params.flightId, function (err, flight) {
        
    //     flight.tickets.push(req.body)
    //     flight.save(function (err) {
    //         res.redirect(`flights/${flight._id}`);
    //     })
    // })
}

function newTicket(req, res) {
    Flight.findById(req.params.id, function (err, flight) {
        res.render('tickets/new', {
            title: 'Add Ticket',
            flight
        })
    })
}