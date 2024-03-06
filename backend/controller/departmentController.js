const Departments = require("../model/departmentSchema");

// save-departments
const saveDepartments = async (req, resp) => {
  try {
    const blogs = new Departments({
      name: req.body.name,
      description: req.body.description,
    });

    await blogs
      .save()
      .then((result) => {
        resp.status(200).json({
          message: "Data inserted successfully",
          data: result,
        });
        console.log(result);
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

// Get All epartments
const getAlgetAllDepartmenst = async (req, resp) => {
  try {
    await Departments.find()
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

//get one department from id

const getOneDepartmentID = async (req, resp) => {
  const blogID = req.params.id;
  try {
    await Departments.findById(blogID)
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

//Update department using ID

const updateDepartment = async (req, resp) => {
  const blogID = req.params.id;
  try {
    await Departments.findByIdAndUpdate(blogID, {
      $set: {
        name: req.body.name,
        description: req.body.description,
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
// Delete department
const deleteDepartments = async (req, resp) => {
  const blogID = req.params.id;
  try {
    await Departments.findByIdAndDelete(blogID)
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
  saveDepartments,
  getAlgetAllDepartmenst,
  getOneDepartmentID,
  updateDepartment,
  deleteDepartments,
};
