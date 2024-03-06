const Booking = require("../model/bookingSchema");

// save-blogs
const saveBooking = async (req, resp) => {
  try {
    const blogs = new Booking({
      name: req.body.name,
      department: req.body.department,
      doctorName: req.body.doctorName,
      mobile: req.body.mobile,
      address: req.body.address,
      email: req.body.email,
    });

    await blogs
      .save()
      .then((result) => {
        resp.status(200).json({
          message: "Data inserted successfully",
          data: result,
        });
      })
      .catch((error) => {
        resp.json(error);
      });
  } catch {
    resp.status(500).json({
      message: "Bad request",
    });
  }
};

// Get All Users
const getAllBookings = async (req, resp) => {
  try {
    await Booking.find()
      .then((result) => {
        resp.status(200).json({
          message: "All Blogs getting successfully",
          data: result,
        });
      })
      .catch((error) => {
        resp.json(error);
      });
  } catch {
    resp.status(500).json({
      message: "Bad Request",
    });
  }
};

// Delete Blog
const deleteBookings = async (req, resp) => {
  const blogID = req.params.id;
  try {
    await Booking.findByIdAndDelete(blogID)
      .then((result) => {
        if (result.deletedCount > 0) {
          resp.status(200).json({
            status: true,
            message: "Deleted successfully",
            data: result,
          });
        }
      })
      .catch((error) => {
        resp.json(error);
      });
  } catch {
    resp.status(500).json({
      status: false,
      message: "Bad request",
    });
  }
};

module.exports = {
  saveBooking,
  getAllBookings,
  deleteBookings,
};
