const {constants} = require("../constants");
const asyncHandler = require("express-async-handler");
const Contacts = require("../models/contactModel");

// @desc Get all contacts
// @route GET /api/contacts
// @access public
const getContacts = asyncHandler(async (req, res) => {
    res.status(constants.SUCCESSFUL).json({
        message: "All contacts",
        status: constants.SUCCESSFUL 
     });
});

// @desc Get contact by id
// @route GET /api/contacts/:id
// @access public
const getContactById = asyncHandler(async (req, res) => {
    res.status(constants.SUCCESSFUL).json({
        message: `Get contact for ${req.params.id}`,
        status: constants.SUCCESSFUL  
    });
});

// @desc update contact
// @route PUT /api/contacts/:id
// @access public
const putContact = asyncHandler(async (req, res) => {
    res.status(constants.SUCCESSFUL).json({
        message: `Put contact for ${req.params.id}`,
        status: constants.SUCCESSFUL  
    });
});

// @desc patch a contact
// @route PATCH /api/contacts/:id
// @access public
const patchContactById = asyncHandler(async (req, res) => {
    res.status(constants.SUCCESSFUL).json({
        message: `Update contact for ${req.params.id}`,
        status: constants.SUCCESSFUL 
    });
});

// @desc create new contact
// @route POST /api/contacts/:id
// @access public
const creatContact = asyncHandler(async (req, res) => {
    console.log(`The created request body:::`, req.body)
    const{name, email, phone} = req.body
    if(!name || !email || !phone) {
        res.status(constants.VALIDATION_ERROR)
        throw new Error("All fields are necessary")
    }
    res.status(constants.SUCCESSFUL).json({
        message: `Create contact for ${req.params.id}`,
        status: constants.SUCCESSFUL 
     });
});

// @desc delete contact by id
// @route DELETE /api/contacts/:id
// @access public
const deleteContactById = asyncHandler(async (req, res) => {
    res.status(constants.SUCCESSFUL).json({
    message: `Delete contact for ${req.params.id}`,
    status: constants.SUCCESSFUL 
});
});

module.exports = {getContacts, getContactById, putContact, patchContactById, deleteContactById, creatContact}