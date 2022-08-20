const mongoose = require("mongoose");
const userSchema = mongoose.Schema(
	{
		name: {
			type: String,
			required: [true, "Please add a name!"],
		},
		email: {
			type: String,
			unique: true,
			required: [true, "Please add a email!"],
		},
		password: {
			type: String,
			required: [true, "Please add a password!"],
		},
	},
	{
		timestamp: true,
	}
);

module.exports = mongoose.model(
	"User",
	userSchema
);
