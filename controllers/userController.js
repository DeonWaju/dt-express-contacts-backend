const asyncHandler = require("express-async-handler");
const {constants} = require("../constants");
const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { response } = require("express");

// @desc create new contact
// @route POST /api/contacts/register
// @access public
const registerUser = asyncHandler(async (req, res) => {
    const { username, email, password } = req.body;
    if(!username || !email || !password){
        res.status(constants.FORBIDDEN_ERROR);
        throw new Error(constants.ALL_FIELDS_ARE_MANADATORY);
    }
    const emailAvailable = await User.findOne({ email });
    if(emailAvailable){
        res.status(constants.FORBIDDEN_ERROR);
        throw new Error(constants.EMAIL_EXISTS);
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10)
    console.log("Hashed password:", hashedPassword)
    const user = await User.create({
        username, 
        email, 
        password: hashedPassword
    })

    console.log(`User created ${user}`)
    if(user){
        res.status(constants.CREATED).json({
            _id: user.id,
            email: user.email
        });
    } else {
        res.status(constants.FORBIDDEN_ERROR);
        throw new Error("Invalid data")
    }

    res.json({message: "User created"});
});

// @desc login user
// @route POST /api/users/login
// @access public
const loginUser = asyncHandler(async (req, res) => {
    const {email, password} = req.body
    if(!email || !password){
        res.status(constants.FORBIDDEN_ERROR);
        throw new Error(constants.ALL_FIELDS_ARE_MANADATORY);
    }
    const user = await User.findOne({email});
   
    if(user && (await bcrypt.compare(password, user.password))){
        const accessToken = jwt.sign({
            user:{ 
                username: user.name,
                email: user.email,
                id: user.id
            }
        }, process.env.ACCESS_TOKEN_SECRET,
        {expiresIn: "1m"}
        );
        res.status(constants.SUCCESSFUL).json({accessToken})
    } else {
        res.status(constants.VALIDATION_ERROR)
        throw new Error("Email or password invalid")
    }
});

// @desc current user
// @route GET /api/users/current
// @access public
const currentUser = asyncHandler(async (req, res) => {
    res.json({message: "current"});
});

module.exports = {
    registerUser,
    loginUser, 
    currentUser
}


