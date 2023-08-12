const Impact2 = require("../models/impactModel2");

const createImpact2 = async (req, res) => {
	const { headings1, headings2, headings3, headings4 ,headings5,head1,head2,head3,head4,head5} = req.body;

	try {
		const newImpact2 = await Impact2.create({
			headings1: {
				heading: headings1.heading,
				content: headings1.content,
			},
			headings2: {
				heading: headings2.heading,
				content: headings2.content,
			},
			headings3: {
				heading: headings3.heading,
				content: headings3.content,
			},
			headings4: {
				heading: headings4.heading,
				content: headings4.content,
			},
			headings5: {
				heading1: headings5.heading1,
				heading2: headings5.heading2,
				content2: headings5.content2,
				photos2: headings5.photos2,
			},

			head1: {
				heading: head1.heading,
				content: head1.content,
			},
			head2: {
				heading: head2.heading,
				content: head2.content,
			},
			head5: {
				heading1: head5.heading1,
				heading2: head5.heading2,
				content2: head5.content2,
				photos2: head5.photos2,
			},
			head3: {
				heading: head3.heading,
				content: head3.content,
			},
			head4: {
				heading: head4.heading,
				content: head4.content,
			},
		});
		res.status(201).json(newImpact2);
	} catch (error) {
		console.log(error);
		res.status(500).json({ error: "Internal server error from create impact2 api" });
	}
};

const getAllImapct2 = async (req, res) => {
	try {
		const impact2 = await Impact2.find();
		res.json({
			success: true,
			message: "All impacts2 retrieved successfully",
			impact2,
		});
	} catch (error) {
		console.log(error);
		res.json({
			success: false,
			message: error.message,
		});
	}
};

module.exports = { createImpact2, getAllImapct2 };
