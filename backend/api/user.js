
const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const UserSchemas= require('../Schemas/User')
const jwt = require('jsonwebtoken');


const jwtkey= process.env.JWT_KEY

router.post('/signup', async (req, res) => {
    try {
      const {
        email,
        password,
        firstname,
        lastname,
    
        gender,
        address,
        mobile,
        role,
       
      } = req.body;
  

      const existingUser = await UserSchemas.findOne({ email });
  
      if (existingUser) {
        return res.status(400).json({ error: 'Email already exists' });
      }
  
     
      const hashedPassword = await bcrypt.hash(password, 10);
  
   
      const newUser = new UserSchemas({
        email,
        password: hashedPassword,
        firstname,
        lastname,
     role,
        gender,
        address,
        mobile,
      
        createdAt: new Date().toISOString(),
      });
  
      // Save the user to the database
     const newuser= await newUser.save();
  
      res.status(201).json({ message: 'User registered successfully' , user:newuser });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });


  router.post('/login', async (req, res) => {
    try {
      const { email, password } = req.body;
  
console.log(jwtkey)

      const user = await UserSchemas.findOne({ email });
  
      if (!user) {
        return res.status(401).json({ error: 'Invalid email or password' });
      }

      const isPasswordValid = await bcrypt.compare(password, user.password);
  
      if (!isPasswordValid) {
        return res.status(401).json({ error: 'Invalid email or password' });
      }
  
     
      const token = jwt.sign({ userId: user._id }, jwtkey, {
        expiresIn: '1h', // Token expiration time
      });
  
      res.status(200).json({ token ,user});
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });




  module.exports = router;