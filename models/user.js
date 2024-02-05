const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema(
	{
		name: { type: String, required: true },
		email: { type: String, required: true, unique: true },
		password: { type: String, content: Schema.Types.Mixed },
		isAdmin: { type: Boolean, default: false },
	},
	{ timestamps: true }
);

module.exports = mongoose.model("User", userSchema);