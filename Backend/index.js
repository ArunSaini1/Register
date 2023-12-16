const mongoose = require("mongoose");
const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
const path = require("path");

mongoose.connect("mongodb://localhost:27017/Assingnment");

app.use(express.json(path.resolve("public")));
app.use(express.static("public/product"));

// User Routes
const user = require("./Route/userRoute");
app.use("/api", user);

app.listen(5000, function () {
  console.log("Server Is Working On 5000 ");
});
