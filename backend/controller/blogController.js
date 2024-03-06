const Doctors = require("../model/doctorSchema");

// save-blogs
const saveBlogs = async (req, resp) => {
  try {
    const blogs = new Doctors({
      name: req.body.name,
      department: req.body.department,
      mobile: req.body.mobile,
      email: req.body.email,
      password: req.body.password,
      gender: req.body.gender,
      designation: req.body.designation,
      qualification: req.body.qualification,
      experiance: req.body.experiance,
      specialization: req.body.specialization,
      Bio: req.body.Bio,
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
const getAllBlogs = async (req, resp) => {
  try {
    await Doctors.find()
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

//get one user from id

const getOneUserfromId = async (req, resp) => {
  const blogID = req.params.id;
  try {
    await Doctors.findById(blogID)
      .then((result) => {
        if (!result) {
          resp.status(404).json({
            status: false,
            message: "User Not Found",
          });
        } else {
          resp.status(200).json({
            status: true,
            message: "Data getting successfully",
            data: result,
          });
        }
      })
      .catch((error) => {
        resp.jsoon(error);
      });
  } catch {
    resp.status(500).json({
      status: false,
      message: "Bad request",
    });
  }
};

//Update Blog using ID

const updateBlog = async (req, resp) => {
  const blogID = req.params.id;
  try {
    await Doctors.findByIdAndUpdate(blogID, {
      $set: {
        name: req.body.name,
        department: req.body.department,
        mobile: req.body.mobile,
        email: req.body.email,
        password: req.body.password,
        gender: req.body.gender,
        designation: req.body.designation,
        qualification: req.body.qualification,
        experiance: req.body.experiance,
        specialization: req.body.specialization,
        Bio: req.body.Bio,
      },
    })
      .then((result) => {
        if (result.isModified > 0) {
          resp.status(200).json({
            status: true,
            message: "Updated Successfully",
            data: result,
          });
        } else {
          resp.json(error);
        }
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
// Delete Blog
const deleteBlogs = async (req, resp) => {
  const blogID = req.params.id;
  try {
    await Doctors.findByIdAndDelete(blogID)
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
  saveBlogs,
  getAllBlogs,
  getOneUserfromId,
  updateBlog,
  deleteBlogs,
};
