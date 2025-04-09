const express = require('express');
const userRouter = express.Router();
const { addUser, loginUser, enrollCourse } = require('../controllers/users');

userRouter.post('/user', addUser);
userRouter.post('/login', loginUser);
userRouter.post('/enrollCourse', enrollCourse);

module.exports = userRouter;
