const db = require('../models/User');
const bcrypt = require('bcrypt');

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
    const { email, password, username } = req.body;
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
          const user = {
            email,
            username,
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
  // using email from browser to id user
  deleteUser: async (req, res) => {
    console.log('req', req.body);
    const { email, password } = req.body;
    console.log('email', email);
    try {
      // const userDeleted = await
      // const response = await db.findByIdAndDelete( req.params.id);
      const response = await db.findOneAndDelete({ email });
      // const user = await db.find({email})
      // console.log('user', user);

      res.json({ message: 'delete user success' });
      // if(userDeleted) {
      //   return res.send(200).send({ message: 'user is deleted' });
      // }
    } catch (err) {
      res.sendStatus(500);
    }
  },

  profileFormInput: async (req, res) => {
    console.log('request', req.body);
    try {
      // stuck here cant see new database profile after post request
      // localhost:3002/api/users/60df3f804d16f43f24ec21b4/profile

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
