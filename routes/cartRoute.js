const express = require("express");

const router = express.Router();

const { getAllCartProducts,createNewCartProduct,singleCartProduct,removeCartProduct,updateCartProduct} = require('../controllers/cartController');

router.route("/").get(getAllCartProducts);
router.route("/").post(createNewCartProduct);
router.route("/:id").get(singleCartProduct);
router.route("/:id").delete(removeCartProduct);
router.route("/:id").put(updateCartProduct);

module.exports = router;
