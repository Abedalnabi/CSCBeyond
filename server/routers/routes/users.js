const express = require('express');
const userRouter = express.Router();
const { addUser, loginUser } = require('../controllers/users');

userRouter.post('/user', addUser);
userRouter.post('/login', loginUser);

module.exports = userRouter;
