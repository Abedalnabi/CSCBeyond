// orderRouter.js
const express = require('express');
const orderRouter = express.Router();
const { addOrder, getOrders, updateOrderStatus, getOrderByID, getOrdersByUserId } = require('../controllers/order');
const { authenticateToken, isAdmin } = require('../../middleware/auth');

orderRouter.post('/order', authenticateToken, addOrder);
orderRouter.get('/orders', authenticateToken, isAdmin, getOrders);
orderRouter.get('/order/:id', authenticateToken, isAdmin, getOrderByID);
orderRouter.put('/order', authenticateToken, updateOrderStatus);
orderRouter.get('/user-orders', authenticateToken, getOrdersByUserId);

module.exports = orderRouter;
