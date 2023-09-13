const express = require("express");
const errorHandler = require("./middleware/errorHandler");
const connectionDb = require("./config/dbConnection");
const dotenv = require("dotenv").config();
const app = express();
const port = process.env.PORT || 5000;
connectionDb()

app.use(express.json());
app.use("/api/contacts", require("./routes/contactsRoutes"));
app.use(errorHandler)

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
