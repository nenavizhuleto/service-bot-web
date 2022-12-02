const express = require('express');
const UserRouter = require('./users.js');

const ServiceRouter = express.Router();

ServiceRouter.use('/users', UserRouter);

module.exports = ServiceRouter;
