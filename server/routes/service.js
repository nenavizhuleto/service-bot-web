const express = require('express');
const UserRouter = require('./users.js');
const OrderRouter = require('./orders.js');

const ServiceRouter = express.Router();

ServiceRouter.use('/users', UserRouter);
ServiceRouter.use('/orders', OrderRouter);

module.exports = ServiceRouter;
