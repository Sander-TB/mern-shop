const express = require("express");
const connectDB = require("./config/connectDB");
const cors = require("cors");

// Schemas
const User = require("./models/User");

const app = express();

connectDB();

//Middleware
app.use(express.json());
app.use(cors());

app.get("/", function (req, res) {
	res.send("Hello");
});

app.use("/api/users", require("./routes/api/users"));
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/product", require("./routes/api/product"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
	console.log(`Server started at ${PORT}`);
});
