const express = require("express");

const router = express.Router();

const { createQuery,getQuery,singleQuery} = require('../controllers/queryController');

router.route("/").post(createQuery);
router.route("/").get(getQuery);
router.route("/:id").get(singleQuery);



module.exports = router;
