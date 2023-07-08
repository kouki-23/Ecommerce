const express = require("express");
const app = express();
const mongoose = require("mongoose");

mongoose
    .connect("mongodb+srv://klod:Prepa-2022@cluster0.pscsr9c.mongodb.net/"
    )
    .then(() => console.log("DBConnection Successful!"))
    .catch((err) => {
    console.log(err);
     });

app.listen(5000, () => {
    console.log("Backend is running!");
});