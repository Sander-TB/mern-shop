const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");
const User = require("../../models/User");

/*
 * @route GET api/users
 * @desc GET all registered users
 * @access Private
 */

router.get("/", auth, async (req, res) => {
	try {
		let users = await User.find();
		return res.json(users);
	} catch (error) {
		console.log(error.message);
		res.status(500).send("Server error");
	}
});

/*
 * @route GET api/users/:id
 * @desc GET one user by ID
 * @access Private
 */

router.get("/:id", auth, async (req, res) => {
	try {
		const user = await User.findById(req.params.id);
		res.json(user);
	} catch (error) {
		console.log(error);
		res.status(500).send({ message: "User not found" });
	}
});

module.exports = router;
