const asyncHandler = require("express-async-handler");
const {constants} = require("../constants");
const User = require("../models/userModel");
const bcrypt = require("bcrypt");

// @desc create new contact
// @route POST /api/contacts/register
// @access public
const registerUser = asyncHandler(async (req, res) => {
    const { username, email, password } = req.body;
    if(!username || !email || !password){
        res.status(constants.FORBIDDEN_ERROR);
        throw new Error(constants.ALL_FIELDS_ARE_MANADATORY);
    }
  

    res.json({message: "User created"});
});

// @desc login user
// @route POST /api/users/login
// @access public
const loginUser = asyncHandler(async (req, res) => {
    res.json({message: "log in"});
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


