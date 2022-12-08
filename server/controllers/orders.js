const Order = require('../models/order.js');

const get_one = async (req, res) => {
	try {
		const id = req.params.id;
		const order = await Order.findById(id);

		res.json(order);
	} catch (error) {
		res.status(200).json({
			message: error,
		});
	}
};

const get_many = async (req, res) => {
	try {
		const orders = await Order.find();
		res.status(200).json(orders);
	} catch (error) {
		res.json({
			message: error,
		});
	}
};

const get_many_by_user = async (req, res) => {
	try {
		const customer_id = req.params.customer_id;
		const orders = await Order.find({ customer_id: customer_id });
		res.status(200).json(orders);
	} catch (error) {
		res.json({
			message: error,
		});
	}
};

const create_one = async (req, res) => {
	const order = req.body;
	try {
		const new_order = await Order.create(order);
		res.status(201).json(new_order);
	} catch (error) {
		res.json({
			message: error,
		});
	}
};

const update_one = async (req, res) => {
	const order = req.body;

	try {
		const id = req.params.id;
		const updated_order = await Order.updateOne({ _id: id }, [{ $set: { status: order.status } }]);
		res.status(200).json(updated_order);
	} catch (error) {
		res.json({
			message: error,
		});
	}
};

module.exports = { get_one, get_many_by_user, get_many, create_one, update_one };
