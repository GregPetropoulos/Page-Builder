const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = new Schema({
	email: String,
	password: String,
	pages: [
		{
			name: String,
			thumbnail: String,
			html: String,
		},
	],
});

module.exports = mongoose.model('Users', User);
