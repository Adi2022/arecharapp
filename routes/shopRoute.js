const express = require("express");

const router = express.Router();

const { createShopping,getAllShop,singleProduct} = require('../controllers/shopController');

router.route("/").post(createShopping);
router.route("/").get(getAllShop);
router.route("/:id").get(singleProduct);



module.exports = router;
