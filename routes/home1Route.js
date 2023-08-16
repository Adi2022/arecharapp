const express = require("express");

const router = express.Router();

const { getAllHomeData,createNewHomeData} = require('../controllers/home1Controller');

router.route("/").get(getAllHomeData);
router.route("/").post(createNewHomeData);

module.exports = router;
