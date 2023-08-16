const User = require("../models/userModel");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const registerUser = async (req, res) => {
  const { email, password, firstName, lastName, mobile, cPassword } = req.body;

  try {
    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: 'User already exists' });
    }

    // Make sure password and confirm password match
    if (password !== cPassword) {
      return res.status(400).json({ error: 'Passwords do not match' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const newUser = await User.create({
      email,
      password: hashedPassword,
      firstName,
      lastName,
      mobile,
      cPassword:hashedPassword,
    });

    res.status(201).json({ message: 'Signup successful', user: newUser });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error from signup API' });
  }
}

const loginUser=async(req,res)=>{
  const { email, password } = req.body;

  try {
    // Check if the user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ error: 'Authentication failed' });
    }

    // Compare passwords
    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
      return res.status(401).json({ error: 'Authentication failed' });
    }

    // Generate a JWT token
    const token = jwt.sign({ userId: user._id }, 'secret-key', { expiresIn: '10000000h' });

    res.json({ message: 'Login successful', token });
   console.log(user)
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: 'Internal server error from login API' });
  }
}

module.exports = { registerUser,loginUser};
