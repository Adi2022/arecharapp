const mongoose = require("mongoose");

const ingredientSchema = new mongoose.Schema({
	heading1: {
		type: String,
	},
	description1: {
		type: String,
	},
	photos1: [
		{
			type: String,
		},
	],

	source: {
		heading2: {
			type: String,
		},
		description2: {
			type: String,
		},

		sourcingTypes: {
			image1: [
				{
					type: String,
				},
			],

			content1: {
				type: String,
			},
			image2: [
				{
					type: String,
				},
			],
			content2: {
				type: String,
			},
			content3: {
				type: String,
			},
			image3: [
				{
					type: String,
				},
			],
		
		},
	},

	heading3: {
		type: String,
	},
	description3: {
		type: String,
	},
	photos2: [
		{
			type: String,
		},
	],
});

module.exports = mongoose.model("Ingredient", ingredientSchema);