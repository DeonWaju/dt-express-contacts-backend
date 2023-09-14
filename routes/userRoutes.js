const express = require("express")
const router = express.Router()
const {
    registerUser, 
    loginUser,
    // currentUser
} = require("../controllers/userController")


router.route("/").post(registerUser);
router.route("/").post(loginUser);

// router.get(currentUser);

module.exports = router;