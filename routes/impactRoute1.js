const express = require("express");

const router = express.Router();

const { createImpact1,getAllImapct1} = require('../controllers/impactController1');

router.route("/").post(createImpact1);
router.route("/").get(getAllImapct1);



module.exports = router;
