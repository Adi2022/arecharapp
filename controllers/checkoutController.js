const Checkout = require("../models/checkoutModel");
const allCities=require("../cities.json")
// console.log(allCities)
const createNewCustomerBill = async (req, res) => {
  const { name,email,phoneNumber,city,state,addressLine1,addressLine2,pinCode} = req.body;

  try {   
    // Create a new user
    const newUser = await Checkout.create({
        name,email,phoneNumber,city,state,addressLine1,addressLine2,pinCode
    });

    res.status(201).json({ message: 'Checkout successful', user: newUser });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error from signup API' });
  }
}

const getAllCustomer = async (req, res) => {
    try {
      const customers = await Checkout.find(); // Retrieve all users/customers from the database
      res.status(200).json(customers)
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error from getAllCustomer API' });
    }
  }

module.exports = { getAllCustomer,createNewCustomerBill};
