const User = require('../models/user.js');

const get_one = async (req, res) => {
	try {
		id = req.params.id;
		const user = await User.findOne({ id: id });
		console.log(user);

		res.json(user);
	} catch (error) {
		res.status(200).json({
			message: error,
		});
	}
};

const get_many = async (req, res) => {
	try {
		const users = await User.find();

		res.status(200).json(users);
	} catch (error) {
		res.json({
			message: error,
		});
	}
};

const create_one = async (req, res) => {
	const user = req.body;
	try {
		const new_user = await User.create(user);
		res.status(201).json(new_user);
	} catch (error) {
		res.json({
			message: error,
		});
	}
};

const update_one = async (req, res) => {
	const user = req.body;

	try {
		const id = req.param.id;
		const updated_user = await User.updateOne({ id: id }, user);
		res.status(200).json(updated_user);
	} catch (error) {
		res.json({
			message: error,
		});
	}
};

module.exports = { get_one, get_many, create_one, update_one };
