const express = require("express");
const blogController = require("../controller/blogController");

const router = express.Router();

router.post("/save-blog", blogController.saveBlogs);
router.get("/getall-blogs", blogController.getAllBlogs);
router.get("/getone-blog/:id", blogController.getOneUserfromId);
router.put("/update-blog/:id", blogController.updateBlog);
router.delete("/delete-blog/:id", blogController.deleteBlogs);

module.exports = router;
