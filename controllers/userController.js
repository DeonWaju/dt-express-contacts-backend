const {constants} = require("../constants");
const asyncHandler = require("express-async-handler");
const Contacts = require("../models/contactModel");


// @desc create new contact
// @route POST /api/contacts/register
// @access public
const registerUser = asyncHandler(async (req, res) => {
    console.log(`The created request body:::`, req.body)
    const{name, password, phone} = req.body
    if(!name || !email || !phone) {
        res.status(constants.VALIDATION_ERROR)
        throw new Error("All fields are necessary")
    }
    const contact = await Contacts.create({
        userName, password, phone
    })
    res.status(constants.CREATED).json(contact);
});

// @desc login user
// @route POST /api/users/login
// @access public
const loginUser = asyncHandler(async (req, res) => {
    console.log(`Login user:::`, req.body)
    const{userName, password} = req.body
    if(!userName || !email) {
        res.status(constants.VALIDATION_ERROR)
        throw new Error("All fields are necessary")
    }
    const contact = await Contacts.login({
        userName, password
    })
    res.status(constants.CREATED).json(contact);
});

// // @desc current user
// // @route GET /api/users/current
// // @access public
// const currentUser = asyncHandler(async (req, res) => {
//     //     res.status(constants.VALIDATION_ERROR)
//     //     throw new Error("All fields are necessary")
//     // const contact = await Contacts.login({
//     //     userName, password
//     // })
//     // res.status(constants.CREATED).json(contact);
// });

module.exports = {
    registerUser,
    loginUser, 
    // currentUser
}


