const mongoose = require("mongoose");
const validator = require("validator");
const { default: isEmail } = require("validator/lib/isEmail");
// firstName LastName email mobile add1 add2 state_id
const userSchema = mongoose.Schema({
  FirstName: {
    type: String,
    // required:true
  },
  LastName: {
    type: String,
    // required:true
  },
  email: {
    type: String,
    // required:true,
    // validator:isEmail,
  },

  mobile: {
    type: Number,
    // required:true,
  },
  add1: {
    type: String,
    // required:true,
  },
  add2: {
    type: String,
  },
  city: {
    type: String,
    // required:true,
  },
  state: {
    type: String,
    // required:true
  },
  country: {
    type: String,
    // required:true,
  },
  zipcode: {
    type: Number,
    // required:true,
  },
});

module.exports = mongoose.model("User", userSchema);
