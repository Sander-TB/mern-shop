const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const config = require("config");
const auth = require("../../middleware/auth");
const Product = require("../../models/Product");

/*
 * @route POST api/product
 * @desc Add a product
 * @access Private
 */

router.post("/", async (req, res) => {
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		return res.status(400).json({ errors: error.array() });
	}

	const { title, description, price, imageUrl } = req.body;

	// try {
	// 	let product = await User.findOne({ id });

	// 	if (product) {
	// 		return res
	// 			.status(400)
	// 			.json({ errors: [{ message: "Product already exists" }] });
	// 	}

	product = new Product({
		title: title,
		description: description,
		price: price,
		imageUrl: imageUrl,
	});

	// 	await product.save();
	// } catch (error) {
	// 	res.status(500).send(error);
	// }
});

module.exports = router;
