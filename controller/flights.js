const Flight = require('../models/flight')

module.exports = {
    new: newFlight,
    create,
    index
}

function newFlight(req, res) {
    res.render('flights/new', {
    title: 'Add Mongoose Flights'
    })};

function create(req, res) {
    const flightProperties = new Flight(req.body)
    flightProperties.save(function(err) {
        console.log(err)
        if (err) return res.render('flights/new', {
        title: 'Mongoose Flights',
        })
        res.redirect('/flights/new')
    })
}

function index(req, res) {
    Flight.find({}, function(err, flights) {
        console.log("HELLO")
        res.render('flights/index', {
            title: 'All Flights',
            flights
        })
    })
}