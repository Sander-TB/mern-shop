const express = require("express");
const connectDB = require("./config/connectDB");

// Schemas
const User = require("./models/User");

const app = express();

connectDB();
//Middleware
app.use(express.json());

app.get("/", function (req, res) {
	res.send("Hello");
});

const testUser = new User({
	name: "Sander",
	email: "sander@email.com",
	password: "dfdsfgfjlø",
});

app.post("/users", (req, res) => {
	console.log(res.status());
	/*
  validation
  */
	//User.save();

	return res.send(req.body);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
	console.log(`Server started at ${PORT}`);
});
