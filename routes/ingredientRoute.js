const express = require("express");

const router = express.Router();

const { createIngredients,getIngredients} = require('../controllers/ingredientController');

router.route("/").post(createIngredients);
router.route("/").get(getIngredients);



module.exports = router;
