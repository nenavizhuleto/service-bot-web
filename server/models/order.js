const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
	customer_id: String,
	type: String,
	photos: String,
	description: String,
});

const Order = mongoose.model('Order', orderSchema, 'orders');
module.exports = Order;
