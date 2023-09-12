const express = require("express");
const router = express.Router();
const successStatus = 200;

router.route("/").get((req, res) => {
    res.status(successStatus).json({message: "All contacts" });
});

router.route("/:id").get((req, res) => {
    res.status(successStatus).json({message: `Get contact for ${req.param.id}` });
});

router.route("/").post((req, res) => {
    res.status(successStatus).json({message: `Create contact` });
});

router.route("/:id").put((req, res) => {
    res.status(successStatus).json({message: `Put contact for ${req.param.id}` });
});

router.route("/:id").patch((req, res) => {
    res.status(successStatus).json({message: `Update contact for ${req.param.id}` });
});

router.route("/:id").delete((req, res)=> {
    res.status(successStatus).json({message: `Delete contact for ${req.param.id}` });
});


module.exports = router;