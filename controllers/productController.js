const Products = require("../models/productsModel");

const createProduct = async (req, res) => {
	const { heading, title1, title2, price, description, image, quantity } = req.body;

	try {
		const calculatedPrice = price * quantity; // Calculate initial price based on quantity

		const newProduct = await Products.create({
			heading,
			title1,
			title2,
			price: calculatedPrice, // Store calculated price
			description,
			image,
			quantity,
		});
		res.status(201).json(newProduct);
	} catch (error) {
		console.log(error);
		res.status(500).json({ error: "Internal server error from create product api" });
	}
};

const increaseQuantity = async (productId, quantityToAdd) => {
	try {
		const product = await Products.findById(productId);

		if (!product) {
			throw new Error("Product not found");
		}

		product.quantity += quantityToAdd;
		product.price = product.price + product.price * quantityToAdd; // Recalculate price
		await product.save();

		return product;
	} catch (error) {
		throw error;
	}
};

const decreaseQuantity = async (productId, quantityToSubtract) => {
	try {
		const product = await Products.findById(productId);

		if (!product) {
			throw new Error("Product not found");
		}

		if (product.quantity < quantityToSubtract) {
			throw new Error("Insufficient quantity");
		}

		product.quantity -= quantityToSubtract;
		product.price = product.price - product.price * quantityToSubtract; // Recalculate price
		await product.save();

		return product;
	} catch (error) {
		throw error;
	}
};

const getAllProduct = async (req, res) => {
	try {
		const products = await Products.find();
		res.json({
			success: true,
			message: "All products retrieved successfully",
			products,
		});
	} catch (error) {
		console.log(error);
		res.json({
			success: false,
			message: error.message,
		});
	}
};

module.exports = { createProduct, increaseQuantity, decreaseQuantity, getAllProduct };
