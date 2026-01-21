const express = require('express');
const router = express.Router();
const serviceBookingController = require('../controllers/serviceBookingController');

router.post('/', serviceBookingController.createServiceBooking);
router.get('/', serviceBookingController.getServiceBookings);
router.get('/:id', serviceBookingController.getServiceBooking);
router.put('/:id', serviceBookingController.updateServiceBooking);
router.delete('/:id', serviceBookingController.deleteServiceBooking);

module.exports = router;