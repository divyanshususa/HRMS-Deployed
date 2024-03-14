const express_ = require('express');
const app = express_();
const bodyparser = require("body-parser")
const helmet = require("helmet");
var cors = require('cors');
const rateLimit = require("express-rate-limit");
const xss = require("xss-clean");
const mongoose = require('mongoose');
require('dotenv').config();

// const uri = 'mongodb+srv://susalabs:susalabs@cluster0.xn0yck9.mongodb.net/?retryWrites=true&w=majority';
const uri = "mongodb+srv://susalabs:susalabs@cluster0.xn0yck9.mongodb.net/hrms?retryWrites=true&w=majority"

const connectToDatabase = async () => {
    try {
        await mongoose.connect(uri, {
            useUnifiedTopology: true,
            useNewUrlParser: true
        })
        console.log("MongoDB is connected");
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}
connectToDatabase();


app.use(cors());//to follow cors policy
app.use(xss());//safety against XSS attack or Cross Site Scripting attacks
app.use(helmet());//safety against XSS attack
app.use(express_.json({ extended: false }));
app.use(express_.static('.'));
app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())

const port = process.env.PORT || 5000;



app.use('/api/user',require('./api/Employee'));
app.use('/api/uploads',require('./api/uploads'));



app.get('/', (req, res) => {
    console.log("hello")
    res.json('working')
})


app.listen(port, () => console.log(`Server is up and running at ${port}`));