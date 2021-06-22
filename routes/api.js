const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const privateRoute = require('../middlewares/privateRoute');

const User = require('../models/User');

router.post('/login', async (req, res) => {
	const { email, password } = req.body;
	const user = await User.findOne({
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
});

router.post('/register', async (req, res) => {
	const { email, password } = req.body;
	if (email.length <= 4) {
		res.status(400).send({ error: 'Email is too short' });
	} else if (password.length <= 4) {
		res.status(400).send({ error: 'Password is too short' });
	}
	const user = await User.findOne({ email });
	if (user) {
		res.status(409).send({ error: 'Account already registered' });
	} else {
		bcrypt.hash(password, 10, async (err, hash) => {
			if (err) {
				res.status(400).send({ error: 'Please try again Later' });
			} else {
				const user = {
					email,
					password: hash,
				};
				const databaseUser = new User(user);
				await databaseUser.save();
				const { password, ...userInfo } = databaseUser.toObject();
				req.session.user = userInfo._id;
				res.send(userInfo);
			}
		});
	}
});

router.post('/create', privateRoute, async (req, res) => {
	const { name, thumbnail, html } = req.body;
	const page = { name, thumbnail, html };
	const id = req.session.user;
	try {
		await User.updateOne(
			{ _id: id },
			{
				$push: {
					pages: page,
				},
			}
		);
		res.sendStatus(201);
	} catch (err) {
		console.log(err);
		res.sendStatus(500);
	}
});

router.get('/pages', async (req, res) => {
	const id = req.session.user;
	try {
		const user = await User.findOne({ _id: id }, { 'pages.html': 0 });
		res.send(user.pages);
	} catch (err) {
		console.log(err);
		res.status(404);
	}
});

module.exports = router;
