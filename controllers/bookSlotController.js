const UserSlot = require("../models/bookSlotModel");

const registerUserSlot = async (req, res) => {
  const { email,name, mobile } = req.body;

  try {
    // Create a new user
    const newUser = await UserSlot.create({
        email,name, mobile
    });

    res.status(201).json({ message: 'Slot Booked successfully', user: newUser });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error from signup API' });
  }
}

const getUserSlot=async(req,res)=>{
  
    res.json({message: 'Slot Booked successfully' });
   
  
}

module.exports = { registerUserSlot,getUserSlot};
