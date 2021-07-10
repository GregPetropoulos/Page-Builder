const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PageStats = new Schema({
	pageVisits: {
		type: Number,
	},
});

module.exports = mongoose.model('PageStats', PageStats);
