const About = require("../models/aboutModel");

const createAbout = async (req, res) => {
	const {
		aboutHeading,
		heading1,
		heading2,
		heading3,
		content1,
		content2,
		content3,
		content4,
		content5,
		content6,
		content7,
		content8,
		content9,
		content10,
		certificationHeading,
		photos1,
		certiHead1,
		certiContent1,
        founderPhotos,
        founderName,
        videos,
		photos2,
		certiHead2,
		certiContent2,
		photos3,
		certiHead3,
		certiContent3,
		photos4,
		certiHead4,
		certiContent4,
		photos5,
		certiHead5,
		certiContent5,

	} = req.body;

	try {
		const about1 = await About.create({
			aboutHeading,
			heading1,
			heading2,
			heading3,
			content1,
			content2,
			content3,
			content4,
			content5,
			content6,
			content7,
			content8,
			content9,
			content10,
			certificationHeading,
			photos1,
			certiHead1,
			certiContent1,
            founderPhotos,
        founderName,
        videos,
		photos2,
		certiHead2,
		certiContent2,
		photos3,
		certiHead3,
		certiContent3,
		photos4,
		certiHead4,
		certiContent4,
		photos5,
		certiHead5,
		certiContent5,
		});
		res.status(201).json(about1);
	} catch (error) {
		console.log(error);
		res.status(500).json({ error: "Internal server error from create about1 api" });
	}
};

const getAllAbout = async (req, res) => {
	try {
		const about1 = await About.find();
		res.json({
			success: true,
			message: "All about1 retrieved successfully",
			about1,
		});
	} catch (error) {
		console.log(error);
		res.json({
			success: false,
			message: error.message,
		});
	}
};

module.exports = { createAbout, getAllAbout };
