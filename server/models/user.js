const mongoose = require('mongoose');

const user_schema = mongoose.Schema({
	id: String,
	username: String,
	fullname: String,
	role: String,
	language: String,
});

const User = mongoose.model('User', user_schema, 'users');

module.exports = User;
