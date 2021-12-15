const express = require('express');
const router = express.Router();
const ticketsCtrl = require('../controller/tickets');


router.get('/flights/:id/tickets/new', ticketsCtrl.new);
router.post('/flights/:flightId/tickets', ticketsCtrl.create);

module.exports = router;