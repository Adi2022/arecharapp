const express = require("express");

const router = express.Router();

const { createNewBlogBanner,getBlogBanner} = require('../controllers/blogBannerController');

router.route("/").get(getBlogBanner);
router.route("/").post(createNewBlogBanner);

module.exports = router;
