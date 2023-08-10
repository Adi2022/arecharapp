const express = require("express");

const router = express.Router();

const { getAllBlogs,createNewBlog,singleBlog} = require('../controllers/blogController');

router.route("/").get(getAllBlogs);
router.route("/").post(createNewBlog);
router.route("/:id").get(singleBlog);

module.exports = router;
