const successStatus = 200
const createStatus = 201

// @desc Get all contacts
// @route GET /api/contacts
// @access public
const getContacts = (req, res) => {
    res.status(successStatus).json({
        message: "All contacts",
        status: successStatus 
     });
};

// @desc Get contact by id
// @route GET /api/contacts/:id
// @access public
const getContactById = (req, res) => {
    res.status(successStatus).json({
        message: `Get contact for ${req.params.id}`,
        status: successStatus  
    });
};

// @desc update contact
// @route PUT /api/contacts/:id
// @access public
const putContact = (req, res) => {
    res.status(successStatus).json({
        message: `Put contact for ${req.params.id}`,
        status: successStatus  
    });
};

// @desc patch a contact
// @route PATCH /api/contacts/:id
// @access public
const patchContactById = (req, res) => {
    res.status(successStatus).json({
        message: `Update contact for ${req.params.id}`,
        status: successStatus 
    });
};

// @desc create new contact
// @route POST /api/contacts/:id
// @access public
const creatContact = (req, res) => {
    console.log(`The created request body:::`, req.body)
    const{name, email, phone} = req.body
    if(!name || !email || !phone) {
        res.status(400)
        throw new Error("All fields are necessary")
    }
    res.status(successStatus).json({
        message: `Create contact for ${req.params.id}`,
        status: createStatus 
     });
};

// @desc delete contact by id
// @route DELETE /api/contacts/:id
// @access public
const deleteContactById = (req, res) => {
    res.status(successStatus).json({
    message: `Delete contact for ${req.params.id}`,
    status: successStatus 
});
};

module.exports = {getContacts, getContactById, putContact, patchContactById, deleteContactById, creatContact}