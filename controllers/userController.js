const db = require("../models/User");
const bcrypt = require("bcrypt");

module.exports = {
  login: async (req, res) => {
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
  signUp: async (req, res) => {
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
};
