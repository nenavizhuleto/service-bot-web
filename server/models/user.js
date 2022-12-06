const mongoose = require('mongoose');

const user_schema = mongoose.Schema({
	id: String,
	username: {
		type: String,
		unique: [true, 'Username already exists'],
		require: [true, 'Username not provided']
	},
	fullname: {
		type: String,
		require: [true, "Fullname not provided"]
	},
	role: {
		type: String,
		enum: ['admin', 'customer', 'employee'],
		require: [true, "Please specify user role"]
	},
	password: {
		type: String,
		require: true
	},
	language: {
		type: String,
		enum: ['EN', 'RU']
	},
	created: {
		type: Date,
		default: Date.now
	}
});

const User = mongoose.model('User', user_schema, 'users');

module.exports = User;
