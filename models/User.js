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
    required: [false,'Please enter a username'],
  },
  
profile: {
  firstName: String,
  lastName: String,
  about: String,
  github: String,
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
