const express = require("express");

const router = express.Router();

const { createImpact2,getAllImapct2} = require('../controllers/impactController2');

router.route("/").post(createImpact2);
router.route("/").get(getAllImapct2);



module.exports = router;
