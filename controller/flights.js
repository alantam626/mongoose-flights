const Flight = require('../models/flight')
const Ticket = require('../models/ticket')
module.exports = {
    new: newFlight,
    create,
    index,
    show
}

function newFlight(req, res) {
    res.render('flights/new', {
        title: 'Add Mongoose Flights'
    })
};

function create(req, res) {
    const flightProperties = new Flight(req.body)
    flightProperties.save(function (err) {
        if (err) return res.render('flights/new')
        res.redirect('/flights')
    })
}

function index(req, res) {
    Flight.find({}, function (err, flights) {
        res.render('flights/index', {
            title: 'All Flights',
            flights
        })
    })
}

function show(req, res) {
    Flight.findById(req.params.id, function (err, flight) {
        Ticket.find({ flight: flight._id }, function (err, tickets) {
            // console.log(flight)
            res.render('flights/show', {
                title: 'Flight Details',
                flight,
                tickets
            })
        })
    })
}
