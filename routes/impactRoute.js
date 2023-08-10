const express = require("express");

const router = express.Router();

const { getAllBlogs,createNewBlog} = require('../controllers/blogController');

router.route("/").get(getAllBlogs);
router.route("/").post(createNewBlog);
// router.route("/",).post(uploadPhotos)

// router.route("/:id").get(singleBlog);

module.exports = router;
