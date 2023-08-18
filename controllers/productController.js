const Products = require("../models/productsModel");

const createProduct = async (req, res) => {
	const { heading, title1, title2, price, description, image } = req.body;

	try {
		const newImpact1 = await Products.create({
			heading,
			title1,
			title2,
			price,
			description,
			image,
		});
		res.status(201).json(newImpact1);
	} catch (error) {
		console.log(error);
		res.status(500).json({ error: "Internal server error from create impact1 api" });
	}
};

const getAllProduct = async (req, res) => {
	try {
		const impact1 = await Products.find();
		res.json({
			success: true,
			message: "All impacts retrieved successfully",
			impact1,
		});
	} catch (error) {
		console.log(error);
		res.json({
			success: false,
			message: error.message,
		});
	}
};

module.exports = { createProduct, getAllProduct };
