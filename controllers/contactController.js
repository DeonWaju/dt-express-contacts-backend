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
    const contact = await Contacts.findById(req.params.id);
    if(!contact){
        res.status(constants.NOT_FOUND);
        throw new Error(constants.CONTACT_NOT_FOUND);
    }
    res.status(constants.SUCCESSFUL).json(contact);
});

// @desc update contact
// @route PUT /api/contacts/:id
// @access public
const putContact = asyncHandler(async (req, res) => {
    const contact = await Contacts.findById(req.params.id);
    if(!contact){
        res.status(constants.NOT_FOUND);
        throw new Error(constants.CONTACT_NOT_FOUND);
    }
    const updateContact = await Contacts.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new: true}
    );
    res.status(constants.SUCCESSFUL).json(updateContact);
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
const createContact = asyncHandler(async (req, res) => {
    console.log(`The created request body:::`, req.body)
    const{name, email, phone} = req.body
    if(!name || !email || !phone) {
        res.status(constants.VALIDATION_ERROR)
        throw new Error("All fields are necessary")
    }
    const contact = await Contacts.create({
        name, email, phone
    })
    res.status(constants.CREATED).json(contact);
});

// @desc delete contact by id
// @route DELETE /api/contacts/:id
// @access public
const deleteContactById = asyncHandler(async (req, res) => {
    const contact = await Contacts.findById(req.params.id);
    if(!contact){
        res.status(constants.NOT_FOUND);
        throw new Error(constants.CONTACT_NOT_FOUND);
    }
    await Contacts.remove();
    res.status(constants.SUCCESSFUL).json(contact);
}); 

module.exports = {getContacts, getContactById, putContact, patchContactById, deleteContactById, createContact}