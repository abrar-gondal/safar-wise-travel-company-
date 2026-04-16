const express = require('express');
const router  = express.Router();
const { protect } = require('../middleware/auth');
const {
  createBooking,
  getMyBookings,
  getAllBookings,
  updateBookingStatus,
  cancelBooking,
} = require('../controllers/bookingController');

// IMPORTANT: specific routes MUST come before /:id routes
router.get('/my',         protect, getMyBookings);        // GET  /api/bookings/my
router.get('/all',        protect, getAllBookings);        // GET  /api/bookings/all
router.post('/',          protect, createBooking);         // POST /api/bookings
router.put('/:id/status', protect, updateBookingStatus);  // PUT  /api/bookings/:id/status
router.put('/:id/cancel', protect, cancelBooking);        // PUT  /api/bookings/:id/cancel

module.exports = router;