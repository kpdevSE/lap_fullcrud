const express = require("express");
const bookingController = require("../controller/bookingController");

const router = express.Router();

router.post("/save-bookings", bookingController.saveBooking);
router.get("/getall-bookings", bookingController.getAllBookings);
router.delete("/delete-booking/:id", bookingController.deleteBookings);

module.exports = router;
