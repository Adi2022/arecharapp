const Impact1 = require("../models/impactModel1");

const createImpact1 = async (req, res) => {
    const { heading1, content1,photos1 } = req.body;

    try {
      const newImpact1 = await Impact1.create({ heading1, content1,photos1
        })
      res.status(201).json(newImpact1);
    } catch (error) {
      console.log(error)
      res.status(500).json({ error: 'Internal server error from create impact1 api' });
    }
	
};

const getAllImapct1 = async (req, res) => {
    try {
      const impact1 = await Impact1.find();
      res.json({
        success: true,
        message: "All impacts retrieved successfully",
        impact1,
      });
    } catch (error) {
      console.log(error);
      res.json({
        success: false,
        message: error.message,
      });
    }
  };

module.exports = {  createImpact1 ,getAllImapct1};
