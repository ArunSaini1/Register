const express = require("express");
const app = express();
const bodyparser = require("body-parser");
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));

// Routes
const User = require("../Controller/userController");
app.post("/user", User.addUser);
app.get("/user", User.getUser);
app.delete("/user/:id", User.deleteUser);
app.get("/user/:id", User.getUsers);
app.put("/user/:id", User.updateUser);

module.exports = app;
