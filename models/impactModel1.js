const mongoose = require("mongoose");

const impactSchema1 = new mongoose.Schema({
	heading1: {
		type: String,
		required: true,
	},
	content1: {
		type: String,
		required: true,
	},
	photos1: [{
        type: String,
      }],
});

module.exports = mongoose.model("Impact1", impactSchema1);
