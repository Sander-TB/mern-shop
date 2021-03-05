const mongoose = require("mongoose");

const connectDB = async () => {
	try {
		await mongoose.connect(
			"mongodb+srv://adminUser:<password>@mern-shop.jjbnx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
			{
				useNewUrlParser: true,
				useUnifiedTopology: true,
			}
		);
		console.log("DB Connected");
	} catch (error) {
		console.error(error);
		process.exit(1);
	}
};

module.exports = connectDB;
