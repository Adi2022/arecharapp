const Query = require("../models/queryModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


const createQuery = async (req, res) => {
	const { name, email, mobile } = req.body;

	try {
		const newUser = await Query.create({
			email,
			name,
			mobile,
		});

		res.status(201).json({ message: "Query send  successfully", user: newUser });
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: "Internal server error from signup API" });
	}
};

const getQuery = async (req, res) => {
	try {
        const query = await Query.find();
        res.json(query);
      } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Internal server error from get all query api' });
      }
	
};

const singleQuery = async (req, res) => {
    const queryId = req.params.id;
	try {
        const query = await Query.findById(queryId);
    
        if (!query) {
          return res.status(404).json({ error: 'Query not found' });
        }
    
        res.json(query);
      } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Internal server error from get query api' });
      }
};

module.exports = { createQuery, getQuery, singleQuery };
