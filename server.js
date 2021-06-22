require('dotenv').config();
const mongoose = require('mongoose');
const express = require('express');
const path = require('path');
const app = express();
const httpServer = require('http').createServer(app);
const User = require('./models/User');
const MongoStore = require('connect-mongo');
const session = require('express-session');
const stream = require('stream');
const api = require('./routes/api');

const mongooseInit = async () => {
	//set connection string with process variables
	await mongoose.connect(process.env.MONGO_CONNECTION_STRING, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useFindAndModify: false,
		useCreateIndex: true,
	});
};

mongooseInit();

const USER_SESSION = 'user.session';
const IS_PROD = process.env.NODE_ENV === 'production';
console.log('Running in production mode: ', IS_PROD);

app.use(express.static(path.join(__dirname, 'frontend/build')))
	.use(express.json())
	.use(
		session({
			secret: 'builder',
			name: USER_SESSION,
			resave: false,
			saveUninitialized: false,
			cookie: {
				httpOnly: true,
				signed: true,
				maxAge: 1000 * 60 * 60 * 24 * 3,
				secure: IS_PROD ? true : false,
				sameSite: IS_PROD ? 'none' : 'lax',
			},
			store: MongoStore.create({
				mongoUrl: process.env.MONGO_CONNECTION_STRING,
			}),
		})
	);

app.use('/api', api);

// serve html
app.get('/page/:id', async (req, res) => {
	const { id } = req.params;
	const userId = req.session.user;

	try {
		const user = await User.findOne(
			{ _id: userId, 'pages._id': id },
			{ 'pages.$': 1 }
		).exec();
		const page = user.pages[0];
		const html = page.html;
		res.send(html);
	} catch (err) {
		console.log(err);
		res.status(404);
	}
});

app.get('/page/:id/download', async (req, res) => {
	const { id } = req.params;
	const userId = req.session.user;

	try {
		const user = await User.findOne(
			{ _id: userId, 'pages._id': id },
			{ 'pages.$': 1 }
		).exec();

		const page = user.pages[0];
		const html = page.html;
		const name = page.name;
		const fileContents = Buffer.from(html);
		const readStream = new stream.PassThrough();

		readStream.end(fileContents);

		res.set(
			'Content-disposition',
			'attachment; filename=' + `${name}.html`
		);
		res.set('Content-Type', 'text/plain');

		readStream.pipe(res);
	} catch (err) {
		console.log(err);
		res.status(401);
	}
});

app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, 'frontend/build', 'index.html'));
});

httpServer.listen(process.env.PORT || 8080);
