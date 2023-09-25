const {constants} = require("../constants");
const asyncHandler = require("express-async-handler");
const Contacts = require("../models/contactModel");

// @desc Get all contacts
// @route GET /api/contacts
// @access private
const getContacts = asyncHandler(async (req, res) => {
   try{
        const contacts = await Contacts.find({ user_id: req.user.id });
        res.status(constants.SUCCESSFUL).json(contacts);
    } catch (error) {
        console.log('err:', e);
        return next(e);
    } 

});

// @desc Get contact by id
// @route GET /api/contacts/:id
// @access private
const getContactById = asyncHandler(async (req, res) => {
  try{
        const contact = await Contacts.findById(req.params.id);
        if(!contact){
            res.status(constants.NOT_FOUND_ERROR);
            throw new Error(constants.CONTACT_NOT_FOUND);
        }
        res.status(constants.SUCCESSFUL).json(contact);
    
    } catch (error) {
        console.log('err:', e);
        return next(e);
    } 
});

// @desc update contact
// @route PUT /api/contacts/:id
// @access private
const updateContact = asyncHandler(async (req, res) => {
   try {
        const contact = await Contacts.findById(req.params.id);
        if(!contact){
            res.status(constants.NOT_FOUND_ERROR);
            throw new Error(constants.CONTACT_NOT_FOUND);
        }

        if(contact.user_id.toString() !== req.user.id){
            res.status(constants.FORBIDDEN_ERROR);
            throw new Error(constants.USER_PERMISSION_ERROR);
        }

        const updateContact = await Contacts.findByIdAndUpdate(
            req.params.id,
            req.body,
            {new: true}
        );

        res.status(constants.SUCCESSFUL).json(updateContact);
    } catch (error) {
        console.log('err:', e);
        return next(e);
    } 
});

// @desc patch a contact
// @route PATCH /api/contacts/:id
// @access private
const patchContactById = asyncHandler(async (req, res) => {
    try {
        res.status(constants.SUCCESSFUL).json({
        message: `Update contact for ${req.params.id}`,
        status: constants.SUCCESSFUL 
    });
    }catch(e){
        console.log('err:', e);
        return next(e);
    }
});

// @desc create new contact
// @route POST /api/contacts/:id
// @access private
const createContact = asyncHandler(async (req, res) => {
    try{
        console.log(`The created request body:::`, req.body)
        const{name, email, phone} = req.body
        if(!name || !email || !phone) {
            res.status(constants.VALIDATION_ERROR)
            throw new Error("All fields are necessary")
        }
        const contact = await Contacts.create({
            user_id: req.user.id,
            name, email, phone
        })
        res.status(constants.CREATED).json(contact);
    }catch(e){
        console.log('err:', e);
        return next(e);
    }
});

// @desc delete contact by id
// @route DELETE /api/contacts/:id
// @access private
const deleteContactById = async (req, res, next) => {
    // using try and catch here, no reason.
    try{
        // check data
        const contact = await Contacts.findById(req.params.id);
        if (!contact){
            res.status(constants.VALIDATION_ERROR).json({error: constants.CONTACT_NOT_FOUND});
        }
        // delete data
        await Contacts.deleteOne({ _id: req.params.id});
        res.status(constants.SUCCESSFUL).json({contact});
    }catch(e){
        console.log('err:', e);
        return next(e);
    }
}; 

module.exports = {getContacts, getContactById, updateContact, patchContactById, deleteContactById, createContact}