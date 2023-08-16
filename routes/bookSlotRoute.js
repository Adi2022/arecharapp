const express = require("express");

const router = express.Router();

const { registerUserSlot,getUserSlot} = require('../controllers/bookSlotController');

router.route("/").post(registerUserSlot);
router.route("/").get(getUserSlot);


module.exports = router;
