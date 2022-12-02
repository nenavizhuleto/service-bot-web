const express = require('express');

const { get_many, get_one, create_one, update_one } = require('../controllers/users.js');

const UserRouter = express.Router();

UserRouter.get('/', get_many);
UserRouter.get('/:id', get_one);
UserRouter.post('/', create_one);
UserRouter.patch('/:id', update_one);

module.exports = UserRouter;
