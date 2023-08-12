const mongoose = require("mongoose");

const aboutSchema = new mongoose.Schema({
	aboutHeading: {
		type: String,
	},
	heading1: {
		type: String,
	},
	content1: {
		type: String,
	},
	content2: {
		type: String,
	},
	content3: {
		type: String,
	},
	content4: {
		type: String,
	},
	videos: [
		{
			type: String,
		},
	],
	heading2: {
		type: String,
	},
	content5: {
		type: String,
	},
	content6: {
		type: String,
	},
	content7: {
		type: String,
	},
	content8: {
		type: String,
	},

	founderPhotos: [
		{
			type: String,
		},
	],
	founderName: {
		type: String,
	},
	heading3: {
		type: String,
	},
	content9: {
		type: String,
	},
	content10: {
		type: String,
	},
	certificationHeading: {
		type: String,
	},
	photos1: [
		{
			type: String,
		},
	],
	certiHead1: {
		type: String,
	},
	certiContent1: {
		type: String,
	},
	photos2: [
		{
			type: String,
		},
	],
	certiHead2: {
		type: String,
	},
	certiContent2: {
		type: String,
	},
	photos3: [
		{
			type: String,
		},
	],
	certiHead3: {
		type: String,
	},
	certiContent2: {
		type: String,
	},
	photos4: [
		{
			type: String,
		},
	],
	certiHead4: {
		type: String,
	},
	certiContent4: {
		type: String,
	},
	photos5: [
		{
			type: String,
		},
	],
	certiHead5: {
		type: String,
	},
	certiContent5: {
		type: String,
	},
});

module.exports = mongoose.model("About", aboutSchema);
