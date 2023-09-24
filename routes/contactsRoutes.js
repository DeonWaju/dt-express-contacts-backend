const express = require("express");
const router = express.Router();
const {
    getContacts, 
    getContactById, 
    putContact, 
    patchContactById, 
    deleteContactById, 
    createContact
} 
= require("../controllers/contactController");
const validateToken = require("../middleware/validateTokenHandler");

// router.use(validateToken);

router.route("/").get(getContacts).post(createContact);

router.route("/:id").get(getContactById).put(putContact).delete(deleteContactById).patch(patchContactById);

module.exports = router;