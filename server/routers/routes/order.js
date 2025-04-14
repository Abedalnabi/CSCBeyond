// userRouter.js
const express = require('express');
const orderRouter = express.Router();
const {} = require('../controllers/users');
const { authenticateToken, isAdmin } = require('../../middleware/auth');

userRouter.get('/orders', authenticateToken, isAdmin, getOrders);
userRouter.get('/order', authenticateToken, isAdmin, getOrders);

userRouter.post('/order', authenticateToken, addOrder);
userRouter.update('/order', authenticateToken, updateOrderStatus);

module.exports = orderRouter;
