const mongoose = require('mongoose');
const express = require('express');
const path = require('path');
const app = express();
const httpServer = require('http').createServer(app);
const MongoStore = require('connect-mongo');
const session = require('express-session');
const routes = require("./routes");
// const User = require('./models/User');
// const stream = require('stream');
// const api = require('./routes/api');
require('dotenv').config();


//set connection string with process variables
const mongooseInit = async () => {
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
	
// Pointing to index in routes directory /api endpoint
app.use(routes);

// Need clarification here
app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, 'frontend/build', 'index.html'));
});

httpServer.listen(process.env.PORT || 8080, function () {
	console.log(`🌎  ==> API Server now listening on PORT ${httpServer}!`);
});

