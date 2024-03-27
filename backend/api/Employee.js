const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const EmployeeSchemas = require('../Schemas/employee')

const DocumentSchemas= require('../Schemas/document')
const jwt = require('jsonwebtoken');
const sendEmail = require('../utils/emailCtrl')
const randomstring = require("randomstring")
const EmpRequest= require('../Schemas/employeeRequest')
const uploadOnCloudinary = require('../utils/cloudinary')
const upload = require('../middleware/multerMiddleware');
const Departments = require('../Schemas/department');
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

    const user = await EmployeeSchemas.findOne({ email }).populate('documents');

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


router.post('/request-form', upload.fields([
  { name: 'image', maxCount: 1 },
  { name: 'resume', maxCount: 1 },
  { name: 'offer_letter', maxCount: 1 },
  { name: 'experience', maxCount: 1 },
  { name: 'education', maxCount: 1 }
]), async (req, res) => {
  try {
    const { image, resume, offer_letter, experience, education } = req.files;

    // Upload files to Cloudinary
    const urls = await uploadOnCloudinary([image[0], resume[0], offer_letter[0], experience[0], education[0]]);

    // Create new EmpRequest object
    const empRequest = new EmpRequest({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      gender: req.body.gender,
      email: req.body.email,
      mobile: req.body.mobile,
      image: urls[0],
      resume: urls[1],
      offer_letter: urls[2],
      experience: urls[3],
      education: urls[4],
      aadhar_number: req.body.aadhar,
      pan_number: req.body.pan,
    });

    // Save to MongoDB
    const response= await empRequest.save();

    res.status(201).json({ message: 'Form Signup successful', response:response });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


router.post('/req-form', async(req, res)=>{
  try {
    
    const { firstname, lastname, gender, email, mobile, image, docs, aadhar_number,pan_number,bankName,bankCode ,branchName,accountNumber} = req.body;
// console.log("asdf",req.body)
    // Create a new employee document
    const newEmployee = new EmpRequest({
        firstname,
        lastname,
        gender,
        email,
        mobile,
        image,
        docs,
        aadhar_number,
        pan_number,
        bankName,
        bankCode,
        branchName,
        accountNumber,
    });

    // Save the new employee document to the database
    const savedEmployee = await newEmployee.save();

    // Return the saved employee document as the response
    res.status(201).json(savedEmployee);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
})



router.post('/add-staff', upload.single('image'), async (req, res) => {
  try {
    const  image  = req.file;
    // console.log(req)
    // console.log(image)
    const url = await uploadOnCloudinary([image]);

    // Create a new employee object with data from the request body
    const newEmployee = new EmployeeSchemas({
      ...req.body, // Form data
      photo: url[0] ,
      approved: true,
      department:req.body.department
    });

    // Save the new employee to the database
    const savedEmployee = await newEmployee.save();
    const updatedEmployee = await Departments.findOneAndUpdate(
      { _id: req.body.department },
      { $push: { employees: savedEmployee } },
      { new: true }
    );
    // Send a success response with the saved employee data
    res.status(201).json(savedEmployee);
  } catch (error) {
    // If an error occurs, send a 500 Internal Server Error response
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});


router.get('/employee-requests', async (req, res) => {
  try {
   
    const requests = await EmpRequest.find();

    res.status(200).json({ success: true, data: requests });
  } catch (error) {
    console.error('Error fetching employee requests:', error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
});

router.get('/getAllEmployees', async (req, res) => {
  try {
   
    const response = await EmployeeSchemas.find({approved:true});

    res.status(200).json({ success: true, response });
  } catch (error) {
    console.error('Error fetching employee requests:', error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
});



router.post('/create-employee', async (req, res) => {
  try {
    
    const {
      firstname,
      lastname,
      gender,
      email,
      mobile,
      image,
      departmentId,
      docs
    } = req.body;

    console.log(docs)
    const hashedPassword = await bcrypt.hash("pass", 10);

    // Create a new employee using data from EmpRequestForm
    const newEmployeeData = {
    ...req.body,
      photo: image,
      approved:true ,
      password:hashedPassword,
      role:"employee",
      createdAt: new Date().toISOString(),
      
    };
      const checkuser= await EmployeeSchemas.findOne({ email: email });
      if(checkuser){
       return  res.status(400).send("employee already exists")
      }
    // Create a new employee document
    const newEmployee = new EmployeeSchemas(newEmployeeData);

    // Save the new employee to the database
   const emp= await newEmployee.save();

    // Create a new document entry in the Documents table
    const newDocument = new DocumentSchemas({
      employee: emp._id, // Reference the newly created employee's ID
      docs
    });

    // Save the new document entry to the database
    const doc=  await newDocument.save();
    const department= await Departments.findById(departmentId)
    if (!department) {
      return res.status(404).json({ error: 'Department not found' });
    }

   const updatedEmployee = await EmployeeSchemas.findOneAndUpdate(
    { email: email },
    { $set: { documents: doc._id ,
      department: departmentId 
    } },
    { new: true }
  );
   await EmpRequest.findOneAndDelete({ email });

    res.status(201).json({ success: true, message: 'Employee created successfully', employee: updatedEmployee });
  } catch (error) {
    console.error('Error creating employee:', error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
});


router.get('/get-managers', async(req, res)=>{
  try {
    const managers = await EmployeeSchemas.find({ role:  { $regex: 'manager', $options: 'i' }  }).populate('department');
    res.status(200).json({ managers });
  } catch (error) {
    console.error('Error finding managers:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
})

router.post('/assign-manager', async(req,res)=>{
  try {
    const { employeeId, managerId } = req.body;

    const updatedEmployee = await EmpRequest.findByIdAndUpdate(
      employeeId,
      { reporting_manager: managerId },
      { new: true }
    );

    if (!updatedEmployee) {
      return res.status(404).json({ error: 'Employee not found' });
    }

  
    res.status(200).json({  updatedEmployee });

  } catch (error) {
   
    res.status(500).json({ error: 'Internal server error' });
  }
})

router.post('/assign-designation', async (req, res) => {
  try {
    
    const { employeeId, designation } = req.body;

    
    const updatedEmployee = await EmployeeSchemas.findByIdAndUpdate(
      employeeId,
      { designation },
      { new: true }
    );

    if (!updatedEmployee) {
      return res.status(404).json({ error: 'Employee not found' });
    }


    res.status(200).json({ message: 'Designation assigned successfully', employee: updatedEmployee });
  } catch (error) {
    console.error('Error assigning designation:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});


router.put('/:id/account-details', async (req, res) => {
  const employeeId = req.params.id;
  const { bankName, bankCode, branchName, accountNumber } = req.body;

  try {
      // Find the employee by ID
      let employee = await EmployeeSchemas.findById(employeeId);

      if (!employee) {
          return res.status(404).json({ message: 'Employee not found' });
      }

      // Update the account details
      employee.accountDetails = {
          bankName: bankName || employee.accountDetails.bankName,
          bankCode: bankCode || employee.accountDetails.bankCode,
          branchName: branchName || employee.accountDetails.branchName,
          accountNumber: accountNumber || employee.accountDetails.accountNumber
      };

      // Save the updated employee
      await employee.save();

      res.status(200).json({ message: 'Account details updated successfully', employee: employee });
  } catch (error) {
      console.error('Error updating account details:', error);
      res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;