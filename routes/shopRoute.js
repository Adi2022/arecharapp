const express = require("express");

const router = express.Router();

const { createShopping, getAllShop ,singleProduct,increaseProductQuantity,decreaseProductQuantity} = require('../controllers/shopController');

router.route("/").post(createShopping);
router.route("/").get(getAllShop);
router.route("/:id").get(singleProduct);
router.route("/").get(increaseProductQuantity);
router.route("/").get(decreaseProductQuantity);



module.exports = router;
