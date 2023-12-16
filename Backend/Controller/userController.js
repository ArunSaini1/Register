const User = require("../Models/userModel");
const express = require("express");
const app = express();
const bodyparser = require("body-parser");
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));

// Add User Method
const addUser = async (req, res) => {
  try {
    const user = new User({
      FirstName: req.body.FirstName,
      LastName: req.body.LastName,
      email: req.body.email,
      mobile: req.body.mobile,
      add1: req.body.add1,
      add2: req.body.add2,
      state: req.body.state,
      country: req.body.country,
      zipcode: req.body.zipcode,
      city: req.body.city,
    });
    const userData = await User.findOne({ email: req.body.email });
    if (userData) {
      res.status(200).send({ success: true, msg: "This Email ALready Exists" });
    } else {
      const saveUser = await user.save();
      res
        .status(200)
        .send({ success: true, msg: "User Details Are", data: saveUser });
    }
  } catch (error) {
    res.status(400).send({
      success: false,
      msg: error.message,
      err: "Something Wen't Wrong",
    });
  }
};

// Get User Method

const getUser = async (req, res) => {
  const result = await User.find();
  res.send(result);
};

// Delete Method
const deleteUser = async (req, res) => {
  try {
    const result = await User.deleteOne({ _id: req.params.id });
    res
      .status(200)
      .send({ success: true, msg: "User has been deleted", data: result });
  } catch (error) {
    res.status(400).send({ success: true, msg: error.message });
  }
};

// Update Method
const getUsers = async (req, resp) => {
  let result = await User.findOne({ _id: req.params.id });
  if (result) {
    resp.send(result);
  } else {
    resp.send({ result: "No Record Found" });
  }
};

const updateUser = async (req, resp) => {
  let result = await User.updateOne(
    { _id: req.params.id },
    {
      $set: req.body,
    }
  );
  resp.send(result);
};

module.exports = { addUser, getUser, deleteUser, updateUser, getUsers };
