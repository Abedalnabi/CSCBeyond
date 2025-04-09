const express = require('express');
const userRouter = express.Router();
const { addUser, loginUser, enrollCourse, getEnrolledUserCourses } = require('../controllers/users');
const { authenticateToken } = require('../../middleware/auth');

userRouter.post('/user', addUser);
userRouter.post('/login', loginUser);

// Apply authenticateToken to all routes below this line

userRouter.post('/enrollCourse', authenticateToken, enrollCourse);
userRouter.get('/enrollCourse/:id', authenticateToken, getEnrolledUserCourses);

module.exports = userRouter;
