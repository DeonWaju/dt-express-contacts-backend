const mongoose = require("mongoose")
const constants = require("../constants")

const userSchema = mongoose.Schema({
    userName: {
        type: String,
        required: [true, constants.USER_NAME_ERROR]
    },
    email: {
        type: String,
        required: [true, constants.USER_NAME_ERROR]
    },
    password: {
        type: String,
        required: [true, constants.USER_NAME_ERROR]
    }
})