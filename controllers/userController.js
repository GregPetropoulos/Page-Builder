const db = require('../models/User');
const bcrypt = require('bcrypt');

const gravatar = require('gravatar');
const normalize = require('normalize-url');

module.exports = {
  loginUser: async (req, res) => {
    const { email, password } = req.body;
    const user = await db.findOne({
      email,
    });
    if (!user) {
      res.status(400).send({ error: 'Email or password not found' });
    } else {
      try {
        if (await bcrypt.compare(password, user.password)) {
          const { password, ...userInfo } = user.toObject();
          req.session.user = userInfo._id;
          res.send(userInfo);
        } else {
          res.status(400).send({
            error: 'Email or password not found',
          });
        }
      } catch (err) {
        res.sendStatus(500);
      }
    }
  },
  signUpUser: async (req, res) => {
    const { email, password, avatar, username } = req.body;
    if (email.length <= 4) {
      res.status(400).send({ error: 'Email is too short' });
    } else if (password.length <= 4) {
      res.status(400).send({ error: 'Password is too short' });
    }
    const user = await db.findOne({ email });
    if (user) {
      res.status(409).send({ error: 'Account already registered' });
      
    } else {
      
      bcrypt.hash(password, 10, async (err, hash) => {
        if (err) {
          res.status(400).send({ error: 'Please try again Later' });
        } else {
          // Get users gravatar
          const avatar = normalize(
            gravatar.url(email, {
              s: '50',
              r: 'g',
              d: 'mm',
            }),
            { forceHttps: true }
            );
            // console.log('user with avatar', user);

          const user = {
            email,
            username,
            avatar,
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

  logoutUser: async (req, res) => {
    try {
      req.session.destroy((err) => {
        if (err) {
          console.log('error', err);
          return res.send({ error: err });
        }
        res.clearCookie('user.session');
        res.send({ message: 'logged out' });
      });
      console.log('USER LOGGED OUT');
    } catch (err) {
      res.sendStatus(404);
    }
  },

  deleteUser: async (req, res) => {
    const id = req.params.id;
    try {
      const response = await db.findOneAndDelete({ _id: id });
      console.log('delete backend res', response);
      if (response._id) {
        console.log('oooo', response._id)
        return res.send({ message: 'delete user success' });
      }
    } catch (err) {
      res.sendStatus(500);
    }
  },
  getUser: async (req, res) => {
    console.log('req params', req.params);

    const id = req.params.id;

    try {
      const response = await db.findOne({ _id: id });
      console.log('get user', response);
      if (response) {
        return res.json(response);
      }
    } catch (err) {
      res.sendStatus(500);
    }
  },

  profileFormInput: async (req, res) => {
    console.log('request', req.body);
    try {
      const updatedProfile = await db.findOneAndUpdate(
        { _id: req.session.user },
        { profile: req.body },
        {
          new: true,
        }
      );

      res.status(200).json({
        message: 'Profile Updated',
        data: updatedProfile,
      });
    } catch (err) {
      res.status(500).send(error);
    }
    // const databaseProfile= new db(profileInput);
    // await databaseProfile.save()
  },
};
