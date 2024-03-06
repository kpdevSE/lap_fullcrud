const express = require("express");
const departmentController = require("../controller/departmentController");

const router = express.Router();

router.post("/save-departments", departmentController.saveDepartments);
router.get("/getall-deaprtments", departmentController.getAlgetAllDepartmenst);
router.get("/getone-department/:id", departmentController.getOneDepartmentID);
router.put("/update-department/:id", departmentController.updateDepartment);
router.delete("/delete-department/:id", departmentController.deleteDepartments);

module.exports = router;
