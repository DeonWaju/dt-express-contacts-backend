const {constants} = require("../constants");
const asyncHandler = require("express-async-handler");
const Contacts = require("../models/contactModel");


// @desc create new contact
// @route POST /api/contacts/register
// @access public
const registerUser = asyncHandler(async (req, res) => {
    res.json({message: "created"});
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


