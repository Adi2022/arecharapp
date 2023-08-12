const Ingredient = require("../models/ingredientModel");

const createIngredients = async (req, res) => {
	const { heading1, photos1, description1, heading3, photos2, description3, source } = req.body;

	try {
		const newBlog = await Ingredient.create({
			heading1,
			photos1,
			description1,
			heading3,
			photos2,
			description3,
			source: {
				heading2: source.heading2,
				description2: source.description2,
				sourcingTypes: {
					image1: source.sourcingTypes.image1,
					content1: source.sourcingTypes.content1,
					image2: source.sourcingTypes.image2,
					content2: source.sourcingTypes.content2,
					image3: source.sourcingTypes.image3,
					content3: source.sourcingTypes.content3,
				},
			},
		});
		res.status(201).json(newBlog);
	} catch (error) {
		console.log(error);
		res.status(500).json({ error: "Internal server error from create blog api" });
	}
};

const getIngredients = async (req, res) => {
	try {
		const blogs = await Ingredient.find();
		res.json({
			success: true,
			message: "All blogs retrieved successfully",
			blogs,
		});
	} catch (error) {
		console.log(error);
		res.json({
			success: false,
			message: error.message,
		});
	}
};

module.exports = { createIngredients, getIngredients };
