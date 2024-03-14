const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const EmployeeSchemas = require('../Schemas/employee')
const jwt = require('jsonwebtoken');
const sendEmail = require('../utils/emailCtrl')
const randomstring = require("randomstring")

const jwtkey = process.env.JWT_KEY

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


    const existingUser = await EmployeeSchemas.findOne({ email });

    if (existingUser) {
      return res.status(400).json({ error: 'Email already exists' });
    }


    const hashedPassword = await bcrypt.hash(password, 10);


    const newUser = new EmployeeSchemas({
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
    const newuser = await newUser.save();

    res.status(201).json({ message: 'User registered successfully', user: newuser });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    console.log(jwtkey)

    const user = await EmployeeSchemas.findOne({ email });

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

    res.status(200).json({ token, user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


router.post('/forget-password', async (req, res) => {


  try {


    const { email } = req.body;
    const user = await EmployeeSchemas.findOne({ email: email });
    if (user) {
      const resettoken = randomstring.generate();
      const OTP = randomstring.generate({ length: 4, charset: 'numeric' }); 
      await EmployeeSchemas.updateOne({ email: email }, { $set: { resetToken: resettoken , otp:OTP} })
      const resetURL = `Hi, Your four digit OTP is ${OTP} to reset Your Password. This OTP is valid till 10 minutes from now.`;

      const data = {
        to: email,
        text: "Hey User",
        subject: "Forgot Password Otp",
        htm: resetURL,
      };
      sendEmail(data);
      res.status(200).send({ success: true, msg: "Please Check your email for reset password ", resetToken:resettoken })

    } else {
      res.status(200).send({ success: false, msg: "This email doesnot exists." })
    }

  } catch (error) {
    throw new Error(error);
  }
});

router.post('/verify-otp', async (req, res) => {
  try {
    const { email, otp } = req.body;
     
    const user = await EmployeeSchemas.findOne({ email: email });
 
    if ( user.otp.toString() === otp) {
      await EmployeeSchemas.findByIdAndUpdate({ _id: user._id }, { $set: {  otp: '' } }, { new: true })
      res.status(200).send({ success: true, msg: "OTP verified successfully" });
    } else {
      res.status(200).send({ success: false, msg: "Invalid OTP" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).send({ success: false, msg: "Internal Server Error" });
  }
});


router.post('/reset-password', async (req, res) => {
  try {
    const token = req.query.token
    const tokenData = await EmployeeSchemas.findOne({ resetToken: token })
    if (tokenData) {
      const password = req.body.password;
      const hashedPassword = await bcrypt.hash(password, 10);

      await EmployeeSchemas.findByIdAndUpdate({ _id: tokenData._id }, { $set: { password: hashedPassword, resetToken: '' } }, { new: true })
      res.status(200).send({ success: true, msg: "Your password has been changed " })
    } else {
      res.status(200).send({ success: false, msg: "this token is expired please try again" })
    }
  } catch (error) {
    res.status(400).send({ success: false, msg: error.message })
  }
})


module.exports = router;