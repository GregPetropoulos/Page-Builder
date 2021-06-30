const db = require("../models/User");
const bcrypt = require("bcrypt");

module.exports = {
  loginUser: async (req, res) => {
    const { email, password } = req.body;
    const user = await db.findOne({
      email,
    });
    if (!user) {
      res.status(400).send({ error: "Email or password not found" });
    } else {
      try {
        if (await bcrypt.compare(password, user.password)) {
          const { password, ...userInfo } = user.toObject();
          req.session.user = userInfo._id;
          res.send(userInfo);
        } else {
          res.status(400).send({
            error: "Email or password not found",
          });
        }
      } catch (err) {
        res.sendStatus(500);
      }
    }
  },
  signUpUser: async (req, res) => {
    const { email, password } = req.body;
    if (email.length <= 4) {
      res.status(400).send({ error: "Email is too short" });
    } else if (password.length <= 4) {
      res.status(400).send({ error: "Password is too short" });
    }
    const user = await db.findOne({ email });
    if (user) {
      res.status(409).send({ error: "Account already registered" });
    } else {
      bcrypt.hash(password, 10, async (err, hash) => {
        if (err) {
          res.status(400).send({ error: "Please try again Later" });
        } else {
          const user = {
            email,
            password: hash,
          };
          const databaseUser = new db(user);
          await databaseUser.save();
          const { password, ...userInfo } = databaseUser.toObject();
          req.session.user = userInfo._id;
          res.send(userInfo);
        }
      });
    }
  },
  // logoutUser: async (req, res) => {
  //   const { email } = req.body;
  //   const user = await db.findOne({
  //     email,
  //   });
  //   try {
  //     if (user) {
  //       req.logout();
  //       res.status(200).json({ msg: "LOGGED OUT" });
  //     } else {
  //       res.status(404).json({ msg: "NO USER TO LOGOUT" });
  //     }
  //   } catch (err) {
  //     console.log(err);
  //     res.status(404);
  //   }
  // },

  logoutUser: async (req, res) => {
    try {
      req.session.destroy((err) => {
        if (err) {
          console.log("error", err);
          return res.send({ error: err });
        }
        res.clearCookie("user.session");
        res.send({ message: "logged out" });
      });
      console.log("USER LOGGED OUT");
    } catch (err) {
      res.sendStatus(404);
    }
    // deleteUser: async (req,res) =>{
    //   const {email}
    // }
  },
};
