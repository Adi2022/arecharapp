const express = require("express");

const router = express.Router();

const { createAbout,getAllAbout} = require('../controllers/aboutController');

router.route("/").post(createAbout);
router.route("/").get(getAllAbout);



module.exports = router;
