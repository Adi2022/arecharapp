const mongoose = require("mongoose");

const userSlotSchema = new mongoose.Schema({
	name: {
		type: String,
	},

	email: {
		type: String,
		unique: true,
	},
	mobile: {
		type: Number,
		minlength: 10,
		maxlength: 12,
		trim: true,
	},
});

module.exports = mongoose.model("UserSlot", userSlotSchema);
