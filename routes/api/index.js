const router = require('express').Router();
const userRoutes = require('./userRoutes');
const pageRoutes = require('./pageRoutes');
const User = require('../../models/User');
const PageStats = require('../../models/PageStats');

// API Routes
router.use('/users', userRoutes);
router.use('/page', pageRoutes);

router.post('/visit', async (req, res) => {
	const pageVisits = await PageStats.find();
	if (pageVisits.length === 0) {
		PageStats.create({ pageVisits: 0 });
	} else {
		const id = pageVisits[0]._id;
		await PageStats.updateOne(
			{ _id: id },
			{
				$inc: {
					pageVisits: 1,
				},
			}
		);
	}
	res.sendStatus(200);
});

router.get('/stats', async (req, res) => {
	const users = await User.find();
	const pageVisits = (await PageStats.find())[0].pageVisits;
	console.log(pageVisits);

	const pagesCreated = users.reduce(
		(acc, user) => acc + user.pages.length,
		0
	);

	const splicedUsers = users.slice(0, 6);

	const pagesStats = {
		labels: splicedUsers.map(user =>
			user.username
				? user.username
				: user.email
						.replace('@gmail.com', '')
						.replace('@email.com', '')
						.replace('@yahoo.com', '')
		),
		averagePages: splicedUsers.map(user => user.pages.length),
	};

	const data = {
		accountsCreated: users.length,
		pagesCreated,
		pagesStats,
		pageVisits,
	};

	res.send(data);
});

router.get('/test', (req, res) => {
	res.send({ yes: true });
});
module.exports = router;
