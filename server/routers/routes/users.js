// userRouter.js
const express = require('express');
const userRouter = express.Router();
const { addUser, loginUser, getUserOrders, getUsers, updateUser, deleteUser } = require('../controllers/users');
const { authenticateToken } = require('../../middleware/auth');

userRouter.post('/user', addUser);
userRouter.post('/login', loginUser);

// Protected Routes (authentication required)
userRouter.get('/user-orders/:userId', authenticateToken, getUserOrders); // Get orders for a specific user
userRouter.get('/users', authenticateToken, getUsers); // Get all users
userRouter.put('/user/:userId', authenticateToken, updateUser); // Update user information
userRouter.delete('/user/:userId', authenticateToken, deleteUser); // Delete user
module.exports = userRouter;
