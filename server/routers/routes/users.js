const express = require('express');
const userRouter = express.Router();
const { getUsers } = require('../controllers/users');

userRouter.get('/users', getUsers);

module.exports = userRouter;
