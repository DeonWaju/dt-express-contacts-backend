const {constants} = require("../constants");
const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode : 500;

    switch (statusCode) {
        case constants.VALIDATION_ERROR:
            res.json({
                title: "Validation Failed",
                message: err.message,
                stackTrace: err.stack
            });
            break;
        case constants.AUTHORIZATION_ERROR:
            res.json({
                title: "Authorization Failed",
                message: err.message,
                stackTrace: err.stack
            });
            break;
        case constants.FORBIDDEN_ERROR:
            res.json({
                title: "Forbidden",
                message: err.message,
                stackTrace: err.stack
            });
            break;
        case constants.NOT_FOUND_ERROR:
            res.json({
                title: "Not found", 
                message: err.message, 
                stackTrace: err.stack
            });
        case constants.SERVER_ERROR:
            res.json({
                title: "Server error", 
                message: err.message, 
                stackTrace: err.stack
            });
            default:
                console.log("Successful");
            break;
    }
};

module.exports = errorHandler;