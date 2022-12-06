const express = require('express');
const UserRouter = require('./users.js');
const OrderRouter = require('./orders.js');
const authJWT = require('../middleware/authJWT.js')


const ServiceRouter = express.Router();
ServiceRouter.use(authJWT)
ServiceRouter.use('/users', UserRouter);
ServiceRouter.use('/orders', OrderRouter);

module.exports = ServiceRouter;
