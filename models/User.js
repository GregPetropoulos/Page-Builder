const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const User = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    unique: true,
  },

  username: {
    type: String,
    required: [true,'Please enter a username'],
  },
    
  profile: {
    firstName: String,
    lastName: String,
    about: String,
    github: String,
  },
  avatar:{
    type:String,
  },

  date: {
    type: Date,
    default: Date.now,
  },

  pages: [
    {
      name: String,
      thumbnail: String,
      html: String,
    },
  ],
});

module.exports = mongoose.model("Users", User);
