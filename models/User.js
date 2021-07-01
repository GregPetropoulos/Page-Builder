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
    unique: true,
  },

  about: String,
  firstName: String,
  lastName: String,
  github: String,

  pages: [
    {
      name: String,
      thumbnail: String,
      html: String,
    },
  ],
});

module.exports = mongoose.model("Users", User);
