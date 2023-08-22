const express = require("express");

const router = express.Router();

const { getAllCustomer,createNewCustomerBill} = require('../controllers/checkoutController');

router.route("/").get(getAllCustomer);
router.route("/").post(createNewCustomerBill);

module.exports = router;
