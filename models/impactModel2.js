const mongoose = require("mongoose");

const impactSchema2 = new mongoose.Schema({
	headings1: {
		heading: {
			type: String,
		},
		content: {
			type: String,
		},
	},
	headings2: {
		heading: {
			type: String,
		},
		content: {
			type: String,
		},
	},
	headings3: {
		heading: {
			type: String,
		},
		content: {
			type: String,
		},
	},
	headings4: {
		heading: {
			type: String,
		},
		content: {
			type: String,
		},
	},

	headings5: {
		heading1: {
			type: String,
		},
		heading2: {
			type: String,
		},
		content2: {
			type: String,
		},
		photos2: [{
			type: String,
		  }],
	},
	head1: {
		heading: {
			type: String,
		},
		content: {
			type: String,
		},
	},
	head2: {
		heading: {
			type: String,
		},
		content: {
			type: String,
		},
	},

    head5: {
		heading1: {
			type: String,
		},
		heading2: {
			type: String,
		},
		content2: {
			type: String,
		},
		photos2: [{
			type: String,
		  }],
	},
	head3: {
		heading: {
			type: String,
		},
		content: {
			type: String,
		},
	},
	head4: {
		heading: {
			type: String,
		},
		content: {
			type: String,
		},
	},

});

module.exports = mongoose.model("Impact2", impactSchema2);
