const mongoose = require("mongoose");
const { constants } = require("../constants");

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: [true, constants.USER_NAME_ERROR]
    },
    email: {
        type: String,
        required: [true, constants.EMAIL_ERROR],
        unique: [true, constants.EMAIL_EXISTS]
    },
    password: {
        type: String,
        required: [true, constants.PASSWORD_ERROR]
    }
},{
    timestamps: true
});

module.exports = mongoose.model(constants.USER, userSchema);