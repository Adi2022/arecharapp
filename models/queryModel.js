const mongoose = require("mongoose");

const querySchema = new mongoose.Schema({
	name: {
		type: String,

	},

	email: {
		type: String,
		unique: true,
	},
	mobile: {
		type: Number,
        
	},
});

module.exports = mongoose.model("Query", querySchema);
