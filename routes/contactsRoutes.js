const express = require("express");
const router = express.Router();
const successStatus = 200;

router.route("/").get((req, res) => {
    res.status(successStatus).json({message: "All contacts" });
});

router.route("/:id").get((req, res) => {
    res.status(successStatus).json({message: `Get contact for ${req.params.id}` });
});

router.route("/:id").post((req, res) => {
    res.status(successStatus).json({message: `Create contact for ${req.params.id}` });
});

router.route("/:id").put((req, res) => {
    res.status(successStatus).json({message: `Put contact for ${req.params.id}` });
});

router.route("/:id").patch((req, res) => {
    res.status(successStatus).json({message: `Update contact for ${req.params.id}` });
});

router.route("/:id").delete((req, res)=> {
    res.status(successStatus).json({message: `Delete contact for ${req.params.id}` });
});


module.exports = router;