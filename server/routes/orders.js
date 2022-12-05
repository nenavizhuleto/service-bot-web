const express = require('express');

const {
	get_many,
	get_many_by_user,
	get_one,
	create_one,
	update_one,
} = require('../controllers/orders.js');

const OrderRouter = express.Router();

OrderRouter.get('/', get_many);
OrderRouter.get('/user/:customer_id', get_many_by_user);
OrderRouter.get('/:id', get_one);
OrderRouter.post('/', create_one);
OrderRouter.patch('/:id', update_one);

module.exports = OrderRouter;
